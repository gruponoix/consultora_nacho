import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Arrow, Check } from "@/components/icons";
import { SERVICES, getService } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Servicio no encontrado · Kietel Revenue" };
  return {
    title: `${service.title} · Kietel Revenue`,
    description: service.lead,
    alternates: { canonical: `/servicios/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Header overImage />
      <main>
        <section className="svc-hero">
          <div className="svc-hero__bg">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              quality={85}
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="svc-hero__overlay" aria-hidden="true" />
          <div className="wrap svc-hero__content">
            <h1 className="svc-hero__title">{service.title}</h1>
            <p className="svc-hero__lead">{service.lead}</p>
          </div>
        </section>

        <section className="section">
          <div className="wrap svc-intro reveal">
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="section section--alt">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="eyebrow">{service.includesTitle}</p>
              <h2 className="section-title">Todo lo que ponemos de tu lado</h2>
            </div>
            <div className="svc-includes">
              {service.includes.map((f, i) => (
                <article className="svc-feature reveal" data-d={String((i % 2) + 1)} key={f.title}>
                  <div className="svc-feature__icn" aria-hidden="true">
                    <Check />
                  </div>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head center reveal">
              <p className="eyebrow eyebrow--center">Cómo trabajamos</p>
              <h2 className="section-title">Un proceso pensado para este servicio</h2>
            </div>
            <div className="steps">
              {service.process.map((s, i) => (
                <div className="step reveal" data-d={i ? String(i) : undefined} key={s.num}>
                  <div className="step__num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section svc-cta">
          <div className="wrap reveal">
            <p className="eyebrow eyebrow--center">Diagnóstico gratuito</p>
            <h2>¿Hablamos sobre tu hotel?</h2>
            <p>
              Cuéntanos tu situación y te enviaremos un primer análisis con oportunidades concretas
              en {service.title.toLowerCase()}. Sin coste y sin compromiso.
            </p>
            <Link href="/#contacto" className="btn btn--gold">
              Solicitar diagnóstico gratuito <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
