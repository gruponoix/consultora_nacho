// HTML email templates for the contact form, styled after the website
// (warm whites, serif headings, blue accent). Email clients need tables and
// inline styles. No external stylesheets (web fonts) — they hurt deliverability;
// Playfair shows where installed, Georgia otherwise.
import { CONTACT } from "./contact";

const SITE = "https://www.kietelrevenue.com";

const C = {
  page: "#F6F1E8",
  card: "#FFFFFF",
  header: "#FDF9F6", // matches the logo's background
  soft: "#FBF9F5",
  ink: "#15120D",
  inkSoft: "#4A4339",
  muted: "#8B7F6C",
  line: "#ECE6DC",
  accent: "#2F62A0",
  accentDeep: "#244C7D",
  tint: "#E9F1F9",
};

const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export type ContactRequest = {
  name: string;
  hotel: string;
  email: string;
  web: string;
  servicio: string;
  mejorar: string;
};

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const webUrl = (web: string) => (/^https?:\/\//i.test(web) ? web : `https://${web}`);

const firstName = (name: string) => name.split(/\s+/)[0];

/* ---------- shared layout ---------- */

function layout({ preheader, body }: { preheader: string; body: string }) {
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Kietel Revenue</title>
</head>
<body style="margin:0;padding:0;background:${C.page};-webkit-text-size-adjust:100%">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.page}">
  <tr><td align="center" style="padding:32px 12px">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:${C.card};border:1px solid ${C.line};border-radius:18px;overflow:hidden">
      <tr><td align="center" style="background:${C.header};padding:28px 24px 22px;border-bottom:1px solid ${C.line}">
        <a href="${SITE}" style="text-decoration:none">
          <img src="${SITE}/email/logo.png" width="150" alt="Kietel Revenue" style="display:block;width:150px;max-width:150px;height:auto;border:0;font-family:${SERIF};font-size:22px;color:${C.ink}">
        </a>
      </td></tr>
      ${body}
    </table>
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px">
      <tr><td align="center" style="padding:22px 24px 0;font-family:${SANS};font-size:12px;line-height:1.6;color:${C.muted}">
        Kietel Revenue · Consultoría hotelera · ${esc(CONTACT.city)}<br>
        <a href="${SITE}" style="color:${C.muted};text-decoration:underline">kietelrevenue.com</a>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

const eyebrow = (text: string) =>
  `<p style="margin:0 0 12px;font-family:${SANS};font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:${C.accent}">${text}</p>`;

const heading = (text: string) =>
  `<h1 style="margin:0;font-family:${SERIF};font-size:30px;line-height:1.2;font-weight:500;color:${C.ink}">${text}</h1>`;

const button = (href: string, label: string) => `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="background:${C.accent};border-radius:999px">
      <a href="${esc(href)}" style="display:inline-block;padding:14px 30px;font-family:${SANS};font-size:14px;font-weight:600;letter-spacing:0.03em;color:#FFFFFF;text-decoration:none;border-radius:999px">${label}</a>
    </td>
  </tr></table>`;

const detailRows = (rows: [string, string][]) =>
  rows
    .map(
      ([k, v], i) => `<tr>
        <td valign="top" style="padding:13px 20px 13px 0;${i ? `border-top:1px solid ${C.line};` : ""}font-family:${SANS};font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${C.muted};white-space:nowrap;width:110px">${k}</td>
        <td valign="top" style="padding:13px 0;${i ? `border-top:1px solid ${C.line};` : ""}font-family:${SANS};font-size:15px;line-height:1.5;color:${C.ink}">${v}</td>
      </tr>`,
    )
    .join("");

const quote = (label: string, text: string) => `
  <p style="margin:0 0 10px;font-family:${SANS};font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${C.muted}">${label}</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="background:${C.tint};border-left:3px solid ${C.accent};border-radius:0 10px 10px 0;padding:16px 20px;font-family:${SANS};font-size:15px;line-height:1.65;color:${C.inkSoft};white-space:pre-wrap">${esc(text)}</td>
  </tr></table>`;

const link = (href: string, text: string) =>
  `<a href="${esc(href)}" style="color:${C.accent};text-decoration:none">${esc(text)}</a>`;

/* ---------- 1. Internal notification (to Kietel) ---------- */

export function internalEmail(r: ContactRequest, receivedAt: Date) {
  const when = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    dateStyle: "long",
    timeStyle: "short",
  }).format(receivedAt);

  const replySubject = `Tu diagnóstico gratuito · ${r.hotel}`;
  const replyHref = `mailto:${r.email}?subject=${encodeURIComponent(replySubject)}`;

  const rows: [string, string][] = [
    ["Servicio", `<strong>${esc(r.servicio)}</strong>`],
    ["Contacto", esc(r.name)],
    ["Email", link(`mailto:${r.email}`, r.email)],
    ["Web", r.web ? link(webUrl(r.web), r.web) : `<span style="color:${C.muted}">No indicada</span>`],
    ["Recibida", esc(when)],
  ];

  const body = `
    <tr><td style="padding:36px 40px 8px">
      ${eyebrow("Nueva solicitud · Diagnóstico gratuito")}
      ${heading(esc(r.hotel))}
      <p style="margin:10px 0 0;font-family:${SANS};font-size:15px;color:${C.inkSoft}">Solicitud enviada por <strong style="color:${C.ink}">${esc(r.name)}</strong> desde el formulario de la web.</p>
    </td></tr>
    <tr><td style="padding:24px 40px 4px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${detailRows(rows)}</table>
    </td></tr>
    ${
      r.mejorar
        ? `<tr><td style="padding:22px 40px 0">${quote("¿En qué quiere mejorar?", r.mejorar)}</td></tr>`
        : ""
    }
    <tr><td style="padding:32px 40px 8px">
      ${button(replyHref, `Responder a ${esc(firstName(r.name))}`)}
    </td></tr>
    <tr><td style="padding:0 40px 36px;font-family:${SANS};font-size:13px;line-height:1.6;color:${C.muted}">
      También puedes pulsar <em>Responder</em> en tu correo: la respuesta irá directamente a ${esc(r.email)}.<br>
      Se ha enviado al contacto un correo de confirmación con el compromiso de respuesta en menos de 48&nbsp;horas.
    </td></tr>`;

  const text = [
    `Nueva solicitud de diagnóstico: ${r.hotel}`,
    "",
    `Servicio: ${r.servicio}`,
    `Contacto: ${r.name}`,
    `Email: ${r.email}`,
    `Web: ${r.web || "No indicada"}`,
    `Recibida: ${when}`,
    "",
    `¿En qué quiere mejorar?`,
    r.mejorar || "—",
    "",
    `Responde a este correo para contestar directamente a ${r.name}.`,
  ].join("\n");

  return {
    subject: `Nueva solicitud de diagnóstico · ${r.hotel} · ${r.servicio}`,
    html: layout({ preheader: `${r.servicio} · ${r.name} · ${r.email}`, body }),
    text,
  };
}

/* ---------- 2. Confirmation (to the hotel) ---------- */

const STEPS: [string, string][] = [
  ["Revisamos tu hotel", "Analizamos tu web, tu posicionamiento y tus canales de venta."],
  ["Te contactamos", "En menos de 48 horas para conocer tu situación y tus objetivos."],
  [
    "Recibes tu diagnóstico",
    "Un primer análisis con oportunidades concretas de mejora, sin coste ni compromiso.",
  ],
];

export function confirmationEmail(r: ContactRequest) {
  const steps = STEPS.map(
    ([title, desc], i) => `<tr>
      <td valign="top" width="44" style="padding:0 0 18px">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td align="center" valign="middle" width="30" height="30" style="width:30px;height:30px;border-radius:50%;background:${C.tint};font-family:${SERIF};font-size:15px;font-weight:600;color:${C.accentDeep}">${i + 1}</td>
        </tr></table>
      </td>
      <td valign="top" style="padding:4px 0 18px;font-family:${SANS};font-size:15px;line-height:1.55;color:${C.inkSoft}">
        <strong style="color:${C.ink}">${title}.</strong> ${desc}
      </td>
    </tr>`,
  ).join("");

  const summary: [string, string][] = [
    ["Hotel", esc(r.hotel)],
    ["Servicio", esc(r.servicio)],
    ["Email", esc(r.email)],
    ...(r.web ? ([["Web", esc(r.web)]] as [string, string][]) : []),
  ];

  const body = `
    <tr><td style="padding:36px 40px 0">
      ${eyebrow("Solicitud recibida")}
      ${heading(`Gracias, ${esc(firstName(r.name))}.`)}
      <p style="margin:16px 0 0;font-family:${SANS};font-size:16px;line-height:1.65;color:${C.inkSoft}">
        Hemos recibido tu solicitud de diagnóstico gratuito para <strong style="color:${C.ink}">${esc(r.hotel)}</strong>. Nos pondremos en contacto contigo en un plazo máximo de <strong style="color:${C.ink}">48&nbsp;horas</strong>.
      </p>
    </td></tr>
    <tr><td style="padding:30px 40px 6px">
      <p style="margin:0 0 18px;font-family:${SERIF};font-size:20px;font-weight:500;color:${C.ink}">Qué pasará ahora</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${steps}</table>
    </td></tr>
    <tr><td style="padding:0 40px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.soft};border:1px solid ${C.line};border-radius:12px">
        <tr><td style="padding:18px 22px 6px">
          <p style="margin:0 0 4px;font-family:${SANS};font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${C.muted}">Datos de tu solicitud</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${detailRows(summary)}</table>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:26px 40px 0;font-family:${SANS};font-size:15px;line-height:1.65;color:${C.inkSoft}">
      Si quieres añadir algún detalle sobre tu hotel, basta con responder a este correo.
    </td></tr>
    <tr><td style="padding:28px 40px 36px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${C.line}"><tr>
        <td style="padding-top:22px;font-family:${SANS};font-size:14px;line-height:1.6;color:${C.inkSoft}">
          Un saludo,<br>
          <span style="font-family:${SERIF};font-size:19px;color:${C.ink}">Ignacio Góngora Espada</span><br>
          <span style="color:${C.muted}">CEO &amp; Fundador · Kietel Revenue</span><br>
          ${link(`mailto:${CONTACT.email}`, CONTACT.email)} &nbsp;·&nbsp; ${link(CONTACT.phoneHref, CONTACT.phone)}
        </td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:0 40px 30px;font-family:${SANS};font-size:12px;line-height:1.6;color:${C.muted}">
      Recibes este correo porque se ha solicitado un diagnóstico en kietelrevenue.com con esta dirección. Si no has sido tú, puedes ignorarlo.
    </td></tr>`;

  const text = [
    `Gracias, ${firstName(r.name)}.`,
    "",
    `Hemos recibido tu solicitud de diagnóstico gratuito para ${r.hotel}. Nos pondremos en contacto contigo en un plazo máximo de 48 horas.`,
    "",
    "Qué pasará ahora:",
    ...STEPS.map(([t, d], i) => `${i + 1}. ${t}. ${d}`),
    "",
    "Si quieres añadir algún detalle sobre tu hotel, basta con responder a este correo.",
    "",
    "Un saludo,",
    "Ignacio Góngora Espada",
    "CEO & Fundador · Kietel Revenue",
    `${CONTACT.email} · ${CONTACT.phone}`,
  ].join("\n");

  return {
    subject: "Hemos recibido tu solicitud · Kietel Revenue",
    html: layout({ preheader: `Te contactaremos en menos de 48 horas sobre ${r.hotel}.`, body }),
    text,
  };
}
