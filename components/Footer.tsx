import { LinkedIn } from "./icons";
import CookieSettingsLink from "./CookieSettingsLink";
import { SERVICES } from "@/lib/services";
import { CONTACT } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo">
              KIETEL <small>Revenue</small>
            </span>
            <p>
              Consultoría, externalización y gestión operativa para hoteles que quieren crecer con
              criterio y rentabilidad.
            </p>
            <div className="footer-social">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Kietel Revenue"
              >
                <LinkedIn />
              </a>
              {/* Instagram: add back (icon exists in ./icons) once the account is live. */}
            </div>
          </div>
          <div className="footer-col">
            <h4>Servicios</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}><a href={`/servicios/${s.slug}`}>{s.title}</a></li>
              ))}
              <li><a href="/servicios#modelo-h">Modelos de colaboración</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
              <li><span>{CONTACT.city}</span></li>
              <li><a href="/contacto">Diagnóstico gratuito</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Kietel Revenue · Todos los derechos reservados.</span>
          <span>
            <a href="#">Aviso legal</a> · <a href="#">Política de privacidad</a> ·{" "}
            <CookieSettingsLink />
          </span>
        </div>
      </div>
    </footer>
  );
}
