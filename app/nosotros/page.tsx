import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lamp from "@/components/Lamp";
import ContentBlocks, { ClosingCta } from "@/components/ContentBlocks";
import Rich from "@/components/Rich";
import { NOSOTROS_BLOCKS, NOSOTROS_CLOSING, NOSOTROS_INTRO } from "@/lib/nosotros";
import nosotrosImg from "@/public/images/pexels-quang-nguyen-vinh-222549-26729558.jpg";

export const metadata: Metadata = {
  title: "Nosotros · Kietel Revenue",
  description:
    "Kietel Revenue Management ayuda a hoteles y apartamentos turísticos a tomar mejores decisiones, maximizar sus ingresos y construir negocios más rentables. Más de 10 años de experiencia en el sector hotelero.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <Header overImage />
      <main>
        <section className="svc-hero">
          <div className="svc-hero__bg">
            <Image
              src={nosotrosImg}
              alt="Kietel Revenue"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              quality={85}
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="svc-hero__overlay" aria-hidden="true" />
          <div className="wrap svc-hero__content">
            <h1 className="svc-hero__title">Nosotros</h1>
            <p className="svc-hero__lead">
              Convertimos estrategia en rentabilidad.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap blk-prose blk-intro-center reveal">
            {NOSOTROS_INTRO.body.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
            <p className="blk-quote">{NOSOTROS_INTRO.quote}</p>
          </div>
        </section>

        <ContentBlocks blocks={NOSOTROS_BLOCKS} heading="Cómo trabajamos en Kietel" />
        <Lamp />
        <ClosingCta closing={NOSOTROS_CLOSING} />
      </main>
      <Footer />
    </>
  );
}
