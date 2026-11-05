"use client";

import { useState } from "react";
import { Arrow, Check } from "./icons";
import { CONTACT } from "@/lib/contact";
import { SERVICE_OPTIONS } from "@/lib/serviceOptions";

type Errors = { name?: boolean; hotel?: boolean; email?: boolean; web?: boolean; servicio?: boolean };

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  const clearError = (key: keyof Errors) =>
    setErrors((e) => (e[key] ? { ...e, [key]: false } : e));

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const hotel = String(data.get("hotel") || "").trim();
    const email = String(data.get("email") || "").trim();
    const web = String(data.get("web") || "").trim();
    const servicio = String(data.get("servicio") || "");

    const next: Errors = {
      name: name.length < 2,
      hotel: hotel.length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      web: web.length > 0 && !/\./.test(web),
      servicio: !servicio,
    };
    setErrors(next);

    if (next.name || next.hotel || next.email || next.web || next.servicio) {
      const firstKey = (["name", "hotel", "email", "web", "servicio"] as const).find((k) => next[k]);
      if (firstKey) form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          hotel,
          email,
          web,
          servicio,
          mejorar: String(data.get("mejorar") || "").trim(),
          company: String(data.get("company") || ""),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="form-card">
        <div className="form-success show">
          <div className="form-success__icn" aria-hidden="true">
            <Check />
          </div>
          <h3>¡Solicitud recibida!</h3>
          <p>
            Gracias por confiar en Kietel. Revisaremos tu hotel y te contactaremos en menos de 48
            horas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form onSubmit={onSubmit} noValidate>
        <h3>Solicita tu diagnóstico</h3>
        <p>Completa el formulario y nos pondremos en contacto contigo.</p>

        <div className={`field${errors.name ? " invalid" : ""}`}>
          <label htmlFor="f-name">Nombre</label>
          <input
            type="text"
            id="f-name"
            name="name"
            placeholder="Tu nombre completo"
            autoComplete="name"
            onInput={() => clearError("name")}
          />
          <span className="field__err">Indícanos tu nombre.</span>
        </div>

        <div className={`field${errors.hotel ? " invalid" : ""}`}>
          <label htmlFor="f-hotel">Nombre del hotel</label>
          <input
            type="text"
            id="f-hotel"
            name="hotel"
            placeholder="Nombre de tu hotel o grupo"
            autoComplete="organization"
            onInput={() => clearError("hotel")}
          />
          <span className="field__err">Indícanos el nombre de tu hotel.</span>
        </div>

        <div className="form-row">
          <div className={`field${errors.email ? " invalid" : ""}`}>
            <label htmlFor="f-email">Email</label>
            <input
              type="email"
              id="f-email"
              name="email"
              placeholder="tucorreo@hotel.com"
              autoComplete="email"
              onInput={() => clearError("email")}
            />
            <span className="field__err">Introduce un email válido.</span>
          </div>
          <div className={`field${errors.web ? " invalid" : ""}`}>
            <label htmlFor="f-web">Página web</label>
            <input
              type="text"
              id="f-web"
              name="web"
              placeholder="www.tuhotel.com"
              autoComplete="url"
              onInput={() => clearError("web")}
            />
            <span className="field__err">Revisa la dirección web.</span>
          </div>
        </div>

        <div className={`field${errors.servicio ? " invalid" : ""}`}>
          <label htmlFor="f-servicio">Servicio de interés</label>
          <select
            id="f-servicio"
            name="servicio"
            required
            defaultValue=""
            onChange={() => clearError("servicio")}
          >
            <option value="" disabled>
              Selecciona un servicio
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <span className="field__err">Elige el servicio que te interesa.</span>
        </div>

        <div className="field">
          <label htmlFor="f-mejorar">¿En qué te gustaría mejorar?</label>
          <textarea
            id="f-mejorar"
            name="mejorar"
            rows={3}
            placeholder="Ej.: aumentar ingresos, reducir dependencia de las OTAs, optimizar costes…"
          />
        </div>

        {/* Honeypot: hidden from people, bots fill it in. */}
        <div className="form-hp" aria-hidden="true">
          <label htmlFor="f-company">Empresa</label>
          <input type="text" id="f-company" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <button type="submit" className="btn btn--gold" disabled={sending}>
          {sending ? "Enviando…" : <>Solicitar diagnóstico gratuito <Arrow /></>}
        </button>
        {failed && (
          <p className="form-error" role="alert">
            No hemos podido enviar tu solicitud. Inténtalo de nuevo o escríbenos a{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
        )}
        <p className="form-legal">
          Al enviar aceptas nuestra política de privacidad. Tus datos se tratan con confidencialidad
          y nunca se comparten con terceros.
        </p>
      </form>
    </div>
  );
}
