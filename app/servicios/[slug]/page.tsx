import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentBlocks, { ClosingCta } from "@/components/ContentBlocks";
import Rich from "@/components/Rich";
import { ALL_MODELS_INCLUDE, SERVICES, SERVICE_HERO, getService } from "@/lib/services";

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
    description: `${service.heroLead} ${service.intro[0]}`.replace(/\*\*/g, ""),
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
              placeholder="blur"
              sizes={SERVICE_HERO.sizes}
              quality={SERVICE_HERO.quality}
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="svc-hero__overlay" aria-hidden="true" />
          <div className="wrap svc-hero__content">
            <p className="eyebrow eyebrow--center">Modelo {service.num}</p>
            <h1 className="svc-hero__title">{service.title}</h1>
            <p className="svc-hero__lead">{service.heroLead}</p>
          </div>
        </section>

        <section className="section">
          <div className="wrap svc-intro reveal">
            {service.intro.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
            {service.introQuote && <p className="blk-quote">{service.introQuote}</p>}
          </div>
        </section>

        <ContentBlocks blocks={service.blocks} heading={`Cómo funciona ${service.title}`} />

        <section className="section section--tight">
          <div className="wrap offer-common reveal">
            <span className="offer-common__label">En todos los modelos</span>
            <span>{ALL_MODELS_INCLUDE.join(" · ")}</span>
          </div>
        </section>

        <ClosingCta closing={service.closing} />
      </main>
      <Footer />
    </>
  );
}
