"use client";

import { useState } from "react";
import { Arrow, Check } from "./icons";

type Errors = { name?: boolean; hotel?: boolean; email?: boolean; web?: boolean };

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const clearError = (key: keyof Errors) =>
    setErrors((e) => (e[key] ? { ...e, [key]: false } : e));

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const hotel = String(data.get("hotel") || "").trim();
    const email = String(data.get("email") || "").trim();
    const web = String(data.get("web") || "").trim();

    const next: Errors = {
      name: name.length < 2,
      hotel: hotel.length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      web: web.length > 0 && !/\./.test(web),
    };
    setErrors(next);

    if (next.name || next.hotel || next.email || next.web) {
      const firstKey = (["name", "hotel", "email", "web"] as const).find((k) => next[k]);
      if (firstKey) form.querySelector<HTMLInputElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }
    // Wire this up to your backend / email service (e.g. /api/contact).
    setSent(true);
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

        <div className="field">
          <label htmlFor="f-mejorar">¿En qué te gustaría mejorar?</label>
          <textarea
            id="f-mejorar"
            name="mejorar"
            rows={3}
            placeholder="Ej.: aumentar ingresos, reducir dependencia de las OTAs, optimizar costes…"
          />
        </div>

        <button type="submit" className="btn btn--gold">
          Solicitar diagnóstico gratuito <Arrow />
        </button>
        <p className="form-legal">
          Al enviar aceptas nuestra política de privacidad. Tus datos se tratan con confidencialidad
          y nunca se comparten con terceros.
        </p>
      </form>
    </div>
  );
}
