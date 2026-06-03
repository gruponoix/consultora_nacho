"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#top", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#casos", label: "Casos de éxito" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`} id="top">
        <div className="wrap header__bar">
          <a href="#top" className="logo" aria-label="Aurum Hotel Consulting — Inicio">
            AURUM <small>Hotel Consulting</small>
          </a>
          <nav className="nav" aria-label="Navegación principal">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="header__cta">
            <a href="#contacto" className="btn btn--gold">
              Solicitar diagnóstico
            </a>
            <button
              className="menu-btn"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`drawer${open ? " open" : ""}`}
        role="dialog"
        aria-label="Menú de navegación"
        aria-hidden={!open}
      >
        <div className="drawer__top">
          <span className="logo">AURUM</span>
          <button className="drawer__close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
            &times;
          </button>
        </div>
        <nav aria-label="Navegación móvil">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="btn btn--gold" onClick={() => setOpen(false)}>
          Solicitar diagnóstico
        </a>
      </div>
    </>
  );
}
