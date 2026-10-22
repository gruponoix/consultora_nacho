import { LinkedIn, Instagram } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo">
              KEITEL <small>Revenue</small>
            </span>
            <p>
              Consultoría, externalización y gestión operativa para hoteles que quieren crecer con
              criterio y rentabilidad.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn de Keitel Revenue">
                <LinkedIn />
              </a>
              <a href="#" aria-label="Instagram de Keitel Revenue">
                <Instagram />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Externalización</a></li>
              <li><a href="#servicios">Consultoría</a></li>
              <li><a href="#servicios">Gestión operativa</a></li>
              <li><a href="#modelo-h">Modelos de colaboración</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#casos">Casos de éxito</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:hola@keitelrevenue.com">hola@keitelrevenue.com</a></li>
              <li><a href="#">Málaga, España</a></li>
              <li><a href="#contacto">Diagnóstico gratuito</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Keitel Revenue · Todos los derechos reservados.</span>
          <span>
            <a href="#">Aviso legal</a> · <a href="#">Política de privacidad</a> ·{" "}
            <a href="#">Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
