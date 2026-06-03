type Quote = { text: string; av: string; name: string; role: string };

const COLS: { dur: string; modifier: string; quotes: Quote[] }[] = [
  {
    dur: "30s",
    modifier: "tcol--1",
    quotes: [
      { text: "Pasamos de depender de las OTAs a tener un canal directo sólido. El impacto en márgenes fue inmediato.", av: "EV", name: "Elena Vidal", role: "Directora · Marbella Resort & Spa" },
      { text: "Nos dieron orden, datos y un plan. Hoy gestionamos nuestros tres hoteles con una claridad que no teníamos.", av: "MF", name: "Marta Ferrer", role: "CEO · Costa Nova Collection" },
      { text: "Profesionales y cercanos. Entendieron nuestro hotel boutique sin perder su esencia.", av: "LR", name: "Lucía Romero", role: "Propietaria · Solana Boutique" },
    ],
  },
  {
    dur: "38s",
    modifier: "tcol--2",
    quotes: [
      { text: "En seis meses cambiaron por completo nuestra forma de vender. Recomendable al 100%.", av: "JS", name: "Javier Soto", role: "Propietario · Lúmina Urban Hotel" },
      { text: "El reporting mensual nos dio una visibilidad de negocio que nunca habíamos tenido.", av: "DC", name: "Diego Cano", role: "Director · Mirador Grand" },
      { text: "Aumentamos el RevPAR sin tocar la inversión. Pura estrategia bien ejecutada.", av: "PN", name: "Patricia Nieto", role: "Revenue Manager · Aurelia Hotels" },
    ],
  },
  {
    dur: "34s",
    modifier: "tcol--3",
    quotes: [
      { text: "Tranquilidad total: sabíamos en todo momento qué se hacía y por qué. Mucha transparencia.", av: "AM", name: "Andrés Molina", role: "Propietario · Hostal Centro" },
      { text: "Resultados desde el primer trimestre. Su modelo alineado con nuestros ingresos lo dice todo.", av: "SM", name: "Sara Méndez", role: "Directora · Aurelia Hotels" },
      { text: "Convirtieron una buena instalación en un negocio realmente rentable. Gracias, equipo.", av: "RT", name: "Roberto Torres", role: "CEO · Grupo Costa" },
    ],
  },
];

function Card({ q, clone }: { q: Quote; clone?: boolean }) {
  return (
    <figure className="tcard" aria-hidden={clone || undefined}>
      <blockquote className="tcard__text">&ldquo;{q.text}&rdquo;</blockquote>
      <figcaption className="tcard__who">
        <div className="tcard__av">{q.av}</div>
        <div>
          <div className="tcard__name">{q.name}</div>
          <div className="tcard__role">{q.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonios-h">
      <div className="wrap">
        <div className="section-head center reveal">
          <p className="eyebrow eyebrow--center">Prueba social</p>
          <h2 className="section-title" id="testimonios-h">
            La voz de quienes ya confiaron
          </h2>
          <p className="section-sub">
            Lo que dicen los directores y propietarios de hotel sobre trabajar con nosotros.
          </p>
        </div>
      </div>
      <div className="wrap">
        <div className="tcols reveal">
          {COLS.map((col) => (
            <div className={`tcol ${col.modifier}`} key={col.modifier}>
              <div className="tcol__inner" style={{ "--tc-dur": col.dur } as React.CSSProperties}>
                {col.quotes.map((q) => (
                  <Card key={q.name} q={q} />
                ))}
                {col.quotes.map((q) => (
                  <Card key={`${q.name}-clone`} q={q} clone />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
