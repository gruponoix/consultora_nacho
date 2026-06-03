import { Arrow } from "./icons";

const POSTS = [
  {
    cat: "Revenue",
    meta: "12 May 2026 · 6 min de lectura",
    title: "5 palancas de revenue management que casi nadie aprovecha",
  },
  {
    cat: "Venta directa",
    meta: "28 Abr 2026 · 5 min de lectura",
    title: "Cómo reducir tu dependencia de las OTAs sin perder ocupación",
  },
  {
    cat: "Operaciones",
    meta: "10 Abr 2026 · 7 min de lectura",
    title: "Externalizar o gestionar internamente: la guía definitiva",
  },
];

export default function Blog() {
  return (
    <section className="section" id="blog" aria-labelledby="blog-h">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Blog &amp; conocimiento</p>
          <h2 className="section-title" id="blog-h">
            Ideas para hoteles que quieren crecer
          </h2>
          <p className="section-sub">
            Tendencias, estrategia y aprendizajes del sector, explicados con claridad.
          </p>
        </div>
        <div className="blog-grid">
          {POSTS.map((p, i) => (
            <article className="post reveal" data-d={i ? String(i) : undefined} key={p.title}>
              <div className="post__media">
                <span className="post__cat">{p.cat}</span>
                <div className="ph" data-label={`Imagen artículo · ${p.cat}`} />
              </div>
              <div className="post__body">
                <p className="post__meta">{p.meta}</p>
                <h3>{p.title}</h3>
                <a href="#blog" className="link-more">
                  Leer artículo <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
