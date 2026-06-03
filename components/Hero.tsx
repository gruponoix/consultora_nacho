import Image from "next/image";
import Sparkles from "./Sparkles";

export default function Hero() {
  return (
    <section className="hero" aria-label="Presentación">
      <div className="hero__bg">
        <Image
          src="/images/pexels-bertellifotografia-16985111.jpg"
          alt="Hotel premium"
          fill
          priority
          sizes="100vw"
          quality={85}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero__veil" />
      <div className="hero__content">
        <p className="eyebrow eyebrow--center hero__eyebrow reveal">Consultoría hotelera premium</p>
        <h1 className="reveal" data-d="1">
          Llevamos tu hotel a su <span className="hero__em">máximo potencial</span>
        </h1>
        <p className="hero__tag reveal" data-d="2">
          Más ingresos. Mejor revenue. Hoteles más rentables.
        </p>
        <div className="hero__spark reveal" data-d="3" aria-hidden="true">
          <div className="hero__lines" />
          <Sparkles density={0.0016} minSize={0.4} maxSize={1.5} />
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        Descubre
      </div>
    </section>
  );
}
