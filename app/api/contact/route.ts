import { NextResponse } from "next/server";

// Contact form → email via Resend's REST API (no SDK needed).
// Env: RESEND_API_KEY (secret) and CONTACT_TO_EMAIL (recipient, e.g. ignacio@kietelrevenue.com).
// The sender domain (kietelrevenue.com) must be verified in Resend.
const FROM = "Web Kietel Revenue <web@kietelrevenue.com>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const field = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success to bots.
  if (field(body.company, 200)) return NextResponse.json({ ok: true });

  const name = field(body.name, 120);
  const hotel = field(body.hotel, 160);
  const email = field(body.email, 200);
  const web = field(body.web, 200);
  const mejorar = field(body.mejorar, 4000);

  if (name.length < 2 || hotel.length < 2 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Nombre", name],
    ["Hotel", hotel],
    ["Email", email],
    ["Web", web || "—"],
    ["¿Qué quiere mejorar?", mejorar || "—"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0b2540;max-width:560px">
      <h2 style="margin:0 0 16px">Nueva solicitud de diagnóstico</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) => `<tr>
              <td style="padding:8px 12px 8px 0;vertical-align:top;color:#6b7280;white-space:nowrap">${k}</td>
              <td style="padding:8px 0;white-space:pre-wrap">${esc(v)}</td>
            </tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top:20px;color:#6b7280;font-size:13px">Responde a este correo para contestar directamente a ${esc(name)}.</p>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: to.split(",").map((s) => s.trim()),
      reply_to: email,
      subject: `Solicitud de diagnóstico · ${hotel}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend error", res.status, await res.text());
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
