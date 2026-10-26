import Image, { getImageProps } from "next/image";
import PreloadLink from "./PreloadLink";
import { Arrow, Building, ChartUp, Eye, Users } from "./icons";
import { ALL_MODELS_INCLUDE, SERVICES, SERVICE_HERO } from "@/lib/services";

const ICONS: Record<string, typeof Building> = {
  "revenue-management-360": Building,
  "revenue-management-partner": Users,
  "revenue-projects": ChartUp,
  "revenue-audit": Eye,
};

export default function Offers() {
  return (
    <section className="section" id="servicios" aria-labelledby="oferta-h">
      <div className="wrap">
        <div className="section-head center reveal">
          <p className="eyebrow eyebrow--center">Lo que ofrecemos</p>
          <h2 className="section-title" id="oferta-h">
            Cuatro modelos de colaboración
          </h2>
          <p className="section-sub">
            Desde la externalización completa hasta intervenciones específicas. Elegimos el nivel
            de implicación de Kietel según la estructura, objetivos y necesidades de cada propiedad.
          </p>
        </div>
        <div className="offer-grid">
          {SERVICES.map(({ num, title, lead, slug, image }, i) => {
            const Icon = ICONS[slug];
            const { props: hero } = getImageProps({ src: image, alt: "", fill: true, ...SERVICE_HERO });
            return (
              <PreloadLink
                key={slug}
                href={`/servicios/${slug}`}
                className="offer-card reveal"
                data-d={i ? String(i) : undefined}
                aria-label={`${title} — ver detalle`}
                image={hero}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(max-width: 600px) 100vw, (max-width: 1080px) 50vw, 25vw"
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
                    <p>{lead}</p>
                    <span className="offer-card__go">
                      Ver detalle <Arrow />
                    </span>
                  </div>
                </div>
              </PreloadLink>
            );
          })}
        </div>
        <div className="offer-common reveal">
          <span className="offer-common__label">En todos los modelos</span>
          <span>{ALL_MODELS_INCLUDE.join(" · ")}</span>
        </div>
      </div>
    </section>
  );
}
