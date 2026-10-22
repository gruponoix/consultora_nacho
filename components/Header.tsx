"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/lib/services";

const LINKS = [
  { href: "#top", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

const Caret = () => (
  <span className="nav__caret" aria-hidden="true">
    <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </span>
);

export default function Header({ overImage = false }: { overImage?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // On the home page anchors scroll in-page (Lenis); elsewhere they route home first.
  const to = (hash: string) => (pathname === "/" ? hash : `/${hash}`);
  // Light text while sitting over a dark image hero (top, not yet scrolled).
  const light = overImage && !scrolled;

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
      <header
        className={`header${scrolled ? " scrolled" : ""}${light ? " header--light" : ""}`}
        id="top"
      >
        <div className="wrap header__bar">
          <a href={to("#top")} className="logo" aria-label="Kietel Revenue — Inicio">
            KIETEL <small>Revenue</small>
          </a>
          <nav className="nav" aria-label="Navegación principal">
            {LINKS.map((l) =>
              l.href === "#servicios" ? (
                <div key={l.href} className="nav__has-menu">
                  <a href={to(l.href)} className="nav__top" aria-haspopup="true">
                    {l.label}
                    <Caret />
                  </a>
                  <div className="nav__menu" role="menu" aria-label="Servicios">
                    <div className="nav__menu-inner">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/servicios/${s.slug}`}
                          className="nav__menu-link"
                          role="menuitem"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={l.href} href={to(l.href)}>
                  {l.label}
                </a>
              )
            )}
          </nav>
          <div className="header__cta">
            <a href={to("#contacto")} className="btn btn--gold">
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
          <span className="logo">KIETEL</span>
          <button className="drawer__close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
            &times;
          </button>
        </div>
        <nav aria-label="Navegación móvil">
          {LINKS.map((l) =>
            l.href === "#servicios" ? (
              <div key={l.href} className="drawer__group">
                <a href={to(l.href)} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
                <div className="drawer__sub">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicios/${s.slug}`}
                      className="drawer__sub-link"
                      onClick={() => setOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a key={l.href} href={to(l.href)} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            )
          )}
        </nav>
        <a href={to("#contacto")} className="btn btn--gold" onClick={() => setOpen(false)}>
          Solicitar diagnóstico
        </a>
      </div>
    </>
  );
}
