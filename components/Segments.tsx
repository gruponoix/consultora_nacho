import { SegHotel, SegStar, SegChain, SegResort, SegHostal, SegApartment } from "./icons";

const SEGMENTS = [
  { Icon: SegHotel, title: "Hoteles independientes", text: "Más competitividad frente a grandes cadenas, sin perder identidad." },
  { Icon: SegStar, title: "Hoteles boutique", text: "Experiencia diferencial y tarifas premium con ocupación equilibrada." },
  { Icon: SegChain, title: "Cadenas hoteleras", text: "Estandarización, eficiencia y revenue management multi-propiedad." },
  { Icon: SegResort, title: "Resorts", text: "Gestión de múltiples servicios e ingresos con visión integral." },
  { Icon: SegHostal, title: "Hostales", text: "Optimización de costes y canales para maximizar cada plaza." },
  { Icon: SegApartment, title: "Apartamentos turísticos", text: "Precios dinámicos y presencia en canales para llenar el calendario." },
];

export default function Segments() {
  return (
    <section className="section" aria-labelledby="segmentos-h">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">¿Para quién trabajamos?</p>
          <h2 className="section-title" id="segmentos-h">
            Cada tipo de alojamiento, su estrategia
          </h2>
          <p className="section-sub">
            Adaptamos nuestro enfoque a la realidad de tu proyecto, sea cual sea su tamaño o
            categoría.
          </p>
        </div>
        <div className="seg-grid">
          {SEGMENTS.map(({ Icon, title, text }, i) => (
            <article className="seg reveal" data-d={i ? String(i) : undefined} key={title}>
              <div className="seg__icon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
