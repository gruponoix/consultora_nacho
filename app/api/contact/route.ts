import { NextResponse } from "next/server";
import { confirmationEmail, internalEmail, type ContactRequest } from "@/lib/emails";
import { CONTACT } from "@/lib/contact";
import { SERVICE_OPTIONS } from "@/lib/serviceOptions";

// Contact form → two emails via Resend's REST API (no SDK needed):
//   1. notification to CONTACT_TO_EMAIL (reply-to = the hotel)
//   2. confirmation to the hotel, from and reply-to CONTACT.email
// Env: RESEND_API_KEY (secret) and CONTACT_TO_EMAIL (e.g. ignacio@kietelrevenue.com).
// The sender domain (kietelrevenue.com) must be verified in Resend.
const FROM_INTERNAL = "Web Kietel Revenue <web@kietelrevenue.com>";
// Sent from a real, monitored mailbox: spam filters (Outlook/Hotmail especially)
// distrust senders that can't receive mail.
const FROM_CONFIRMATION = `Kietel Revenue <${CONTACT.email}>`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

async function send(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  const recipients = to.split(",").map((s) => s.trim()).filter(Boolean);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success to bots.
  if (field(body.company, 200)) return NextResponse.json({ ok: true });

  const r: ContactRequest = {
    name: field(body.name, 120),
    hotel: field(body.hotel, 160),
    email: field(body.email, 200),
    web: field(body.web, 200),
    servicio: field(body.servicio, 80),
    mejorar: field(body.mejorar, 4000),
  };

  if (
    r.name.length < 2 ||
    r.hotel.length < 2 ||
    !EMAIL_RE.test(r.email) ||
    !(SERVICE_OPTIONS as readonly string[]).includes(r.servicio)
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // The notification is what matters: if it fails, the visitor sees the error message.
  try {
    await send(apiKey, {
      from: FROM_INTERNAL,
      to: recipients,
      reply_to: r.email,
      ...internalEmail(r, new Date()),
    });
  } catch (err) {
    console.error("Contact form: notification failed", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  // The confirmation is a courtesy: log failures but don't fail the request.
  try {
    await send(apiKey, {
      from: FROM_CONFIRMATION,
      to: [r.email],
      reply_to: CONTACT.email,
      ...confirmationEmail(r),
    });
  } catch (err) {
    console.error("Contact form: confirmation failed", err);
  }

  return NextResponse.json({ ok: true });
}
