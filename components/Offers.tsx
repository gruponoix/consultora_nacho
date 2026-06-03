import { Arrow, Building, ChartUp, Gear } from "./icons";

const OFFERS = [
  {
    num: "01",
    Icon: Building,
    title: "Externalización",
    text: "Asumimos áreas clave de tu hotel —revenue, ventas, reservas— con un equipo experto que rema en tu dirección.",
  },
  {
    num: "02",
    Icon: ChartUp,
    title: "Consultoría",
    text: "Diagnóstico, estrategia y acompañamiento para decidir con datos y un plan claro de crecimiento.",
  },
  {
    num: "03",
    Icon: Gear,
    title: "Gestión operativa",
    text: "Operamos tu hotel —o áreas concretas— con foco en eficiencia, experiencia del huésped y resultados.",
  },
];

export default function Offers() {
  return (
    <section className="section" id="servicios" aria-labelledby="oferta-h">
      <div className="wrap">
        <div className="section-head center reveal">
          <p className="eyebrow eyebrow--center">Lo que ofrecemos</p>
          <h2 className="section-title" id="oferta-h">
            Tres palancas para elevar tu rentabilidad
          </h2>
          <p className="section-sub">
            Ve directo al grano: elige el servicio que necesitas y descubre cómo trabajamos.
          </p>
        </div>
        <div className="offer-grid">
          {OFFERS.map(({ num, Icon, title, text }, i) => (
            <a
              key={num}
              href="#contacto"
              className="offer-card reveal"
              data-d={i ? String(i) : undefined}
              aria-label={`${title} — solicitar información`}
            >
              <span className="offer-card__num">{num}</span>
              <div className="offer-card__icon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="offer-card__go">
                Solicitar información <Arrow />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
