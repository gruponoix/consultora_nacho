import Image from "next/image";
import { MapPin } from "./icons";

type Hotel = {
  name: string;
  loc: string;
  tags: string[];
  stats: { n: string; l: string }[];
};

const HOTELS: Hotel[] = [
  {
    name: "Marbella Resort & Spa",
    loc: "Marbella, España",
    tags: ["Revenue", "Venta directa", "Reposicionamiento"],
    stats: [
      { n: "+32%", l: "Ventas directas" },
      { n: "+18%", l: "ADR" },
      { n: "+24%", l: "RevPAR" },
    ],
  },
  {
    name: "Lúmina Urban Hotel",
    loc: "Madrid, España",
    tags: ["Externalización", "Distribución", "Pricing"],
    stats: [
      { n: "+41%", l: "Ingresos online" },
      { n: "+15%", l: "Ocupación" },
      { n: "−12%", l: "Coste distrib." },
    ],
  },
  {
    name: "Costa Nova Collection",
    loc: "Cádiz, España",
    tags: ["Gestión operativa", "Multi-propiedad"],
    stats: [
      { n: "+28%", l: "GOP" },
      { n: "+21%", l: "RevPAR" },
      { n: "9.2", l: "Satisfacción" },
    ],
  },
  {
    name: "Solana Boutique",
    loc: "Sevilla, España",
    tags: ["Consultoría", "Posicionamiento"],
    stats: [
      { n: "+36%", l: "RevPAR" },
      { n: "+22%", l: "ADR" },
      { n: "9.5", l: "Reseñas" },
    ],
  },
  {
    name: "Mirador Grand",
    loc: "Tenerife, España",
    tags: ["Resort", "Operaciones"],
    stats: [
      { n: "+30%", l: "Ingresos extra" },
      { n: "+19%", l: "RevPAR" },
      { n: "−9%", l: "Costes" },
    ],
  },
];

function HotelCard({ hotel, clone }: { hotel: Hotel; clone?: boolean }) {
  return (
    <article className="hotel-card" aria-hidden={clone || undefined}>
      <div className="hotel-card__media">
        {/* Swap this image per hotel by replacing the src below. */}
        <div className="media" style={{ width: "100%", height: "100%" }}>
          <Image
            src="/images/hero-sunset.jpg"
            alt={hotel.name}
            fill
            sizes="380px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hotel-card__cap">
          <p className="hotel-card__loc">
            <MapPin width={13} height={13} /> {hotel.loc}
          </p>
          <h3 className="hotel-card__name">{hotel.name}</h3>
        </div>
      </div>
      <div className="hotel-card__body">
        <div className="hotel-card__tags">
          {hotel.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="hotel-card__stats">
          {hotel.stats.map((s) => (
            <div key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Cases() {
  return (
    <section className="section section--alt" id="casos" aria-labelledby="casos-h">
      <div className="wrap">
        <div className="cases-head reveal">
          <div>
            <p className="eyebrow">Casos de éxito</p>
            <h2 className="section-title" id="casos-h">
              Hoteles con los que ya trabajamos
            </h2>
          </div>
          <p className="section-sub" style={{ maxWidth: 380, margin: 0 }}>
            Resultados reales en los que la estrategia adecuada transformó la rentabilidad del hotel.
          </p>
        </div>
      </div>

      <div className="marquee reveal" style={{ "--mq-dur": "52s" } as React.CSSProperties}>
        <div className="marquee__track">
          {HOTELS.map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
          {HOTELS.map((h) => (
            <HotelCard key={`${h.name}-clone`} hotel={h} clone />
          ))}
        </div>
      </div>
    </section>
  );
}
