import Link from "next/link";
import { Arrow } from "./icons";

const METRICS = [
  { target: 25, prefix: "+", suffix: "%", label: "Incremento medio de ingresos" },
  { target: 10, prefix: "+", suffix: "", label: "Años de experiencia" },
  { text: "Internacional", label: "Presencia y proyectos" },
];

export default function About() {
  return (
    <section className="section section--alt about" id="nosotros" aria-labelledby="nosotros-h">
      <div className="wrap">
        <div className="section-head center reveal">
          <p className="eyebrow eyebrow--center">Nosotros</p>
          <h2 className="section-title" id="nosotros-h">
            Estrategia hotelera con propósito
          </h2>
          <p className="section-sub">
            Kietel nace de la convicción de que cada hotel tiene un potencial sin explotar.
            Convertimos buenas instalaciones en negocios verdaderamente rentables, combinando rigor
            analítico con una mirada humana de la hospitalidad.
          </p>
        </div>

        <div className="metrics__grid about__metrics reveal">
          {METRICS.map((m) => (
            <div className="metric" key={m.label}>
              {"target" in m ? (
                <div
                  className="metric__num"
                  data-target={m.target}
                  data-prefix={m.prefix}
                  data-suffix={m.suffix}
                >
                  {m.prefix}0{m.suffix}
                </div>
              ) : (
                <div className="metric__num">{m.text}</div>
              )}
              <div className="metric__label">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="about__cta reveal">
          <Link href="/nosotros" className="btn btn--gold">
            Conócenos <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
