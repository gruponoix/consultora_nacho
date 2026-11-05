"use client";

import { useEffect, useState } from "react";

const KEY = "kietel-consent";
export const OPEN_COOKIES_EVENT = "kietel:open-cookies";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function read(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!read()) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIES_EVENT, reopen);
  }, []);

  const choose = (choice: Choice) => {
    try {
      localStorage.setItem(KEY, choice);
    } catch {}
    window.gtag?.("consent", "update", { analytics_storage: choice });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="cookies" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <p>
        Usamos cookies de analítica para entender cómo se usa la web y mejorarla. Solo se activan
        si las aceptas.
      </p>
      <div className="cookies__actions">
        <button type="button" className="btn btn--ghost" onClick={() => choose("denied")}>
          Rechazar
        </button>
        <button type="button" className="btn btn--gold" onClick={() => choose("granted")}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
