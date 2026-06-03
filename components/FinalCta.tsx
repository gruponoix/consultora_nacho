import ContactForm from "./ContactForm";
import { Check } from "./icons";

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
        </div>
        <div className="reveal" data-d="1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
