import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./icons";
import revenueImg from "@/public/images/blog-dashboard.jpg";
import ventaImg from "@/public/images/blog-venta-directa.jpg";
import operacionesImg from "@/public/images/blog-operaciones.jpg";

const POSTS = [
  {
    cat: "Revenue Management",
    img: revenueImg,
    meta: "4 Nov 2026 · 10 min de lectura",
    title: "¿Qué es el Revenue Management y cómo puede aumentar la rentabilidad de tu hotel?",
    href: "/blog/revenue-management-hotel",
  },
  {
    cat: "Venta directa",
    img: ventaImg,
    meta: "28 Abr 2026 · 5 min de lectura",
    title: "Cómo reducir tu dependencia de las OTAs sin perder ocupación",
  },
  {
    cat: "Operaciones",
    img: operacionesImg,
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
                <div className="media">
                  <Image
                    src={p.img}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1080px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="post__body">
                <p className="post__meta">{p.meta}</p>
                <h3>{p.title}</h3>
                {p.href ? (
                  <Link href={p.href} className="link-more">
                    Leer artículo <Arrow />
                  </Link>
                ) : (
                  <span className="link-more link-more--soon">Próximamente</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
