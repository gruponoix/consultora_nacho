import Image from "next/image";
import Link from "next/link";
import { Arrow, Building, ChartUp, Gear } from "./icons";

const OFFERS = [
  {
    num: "01",
    Icon: Building,
    title: "Externalización",
    text: "Asumimos áreas clave de tu hotel —revenue, ventas, reservas— con un equipo experto que rema en tu dirección.",
    slug: "externalizacion",
    img: "/images/hero-sunset.jpg",
  },
  {
    num: "02",
    Icon: ChartUp,
    title: "Consultoría",
    text: "Diagnóstico, estrategia y acompañamiento para decidir con datos y un plan claro de crecimiento.",
    slug: "consultoria",
    img: "/images/pexels-quang-nguyen-vinh-222549-14036242.jpg",
  },
  {
    num: "03",
    Icon: Gear,
    title: "Gestión operativa",
    text: "Operamos tu hotel —o áreas concretas— con foco en eficiencia, experiencia del huésped y resultados.",
    slug: "gestion-operativa",
    img: "/images/hotel-room.jpg",
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
          {OFFERS.map(({ num, Icon, title, text, slug, img }, i) => (
            <Link
              key={num}
              href={`/servicios/${slug}`}
              className="offer-card reveal"
              data-d={i ? String(i) : undefined}
              aria-label={`${title} — ver servicio`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="(max-width: 1080px) 100vw, 33vw"
                className="offer-card__bg"
              />
              <span className="offer-card__overlay" aria-hidden="true" />
              <div className="offer-card__inner">
                <span className="offer-card__num">{num}</span>
                <div className="offer-card__icon" aria-hidden="true">
                  <Icon />
                </div>
                <div className="offer-card__txt">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="offer-card__go">
                    Ver servicio <Arrow />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
