import ContactForm from "./ContactForm";
import { Check, Mail, Phone } from "./icons";
import { CONTACT } from "@/lib/contact";

const PERKS = [
  "Análisis inicial personalizado",
  "Respuesta en menos de 48 horas",
  "Sin compromiso ni permanencia",
];

export default function FinalCta() {
  return (
    <section className="section final" id="contacto" aria-labelledby="cta-h">
      <div className="wrap final-layout">
        <div className="reveal">
          <p className="eyebrow">Diagnóstico gratuito</p>
          <h2 id="cta-h">¿Quieres aumentar la rentabilidad de tu hotel?</h2>
          <p className="final__sub">
            Cuéntanos sobre tu proyecto y te enviaremos un primer análisis con oportunidades
            concretas de mejora. Sin coste y sin compromiso.
          </p>
          <ul className="final__perks">
            {PERKS.map((p) => (
              <li key={p}>
                <Check /> {p}
              </li>
            ))}
          </ul>
          <div className="final__contact">
            <p>¿Prefieres hablar directamente?</p>
            <a href={`mailto:${CONTACT.email}`}>
              <Mail aria-hidden="true" /> {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref}>
              <Phone aria-hidden="true" /> {CONTACT.phone}
            </a>
          </div>
        </div>
        <div className="reveal" data-d="1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
