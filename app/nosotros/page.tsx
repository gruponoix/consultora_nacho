import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lamp from "@/components/Lamp";
import { Arrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nosotros · Kietel Revenue",
  description:
    "Conoce a Kietel Revenue y a su fundador, Ignacio Góngora. Más de una década convirtiendo hoteles en negocios rentables, con rigor analítico y mirada humana.",
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
              src="/images/pexels-quang-nguyen-vinh-222549-26729558.jpg"
              alt="Kietel Revenue"
              fill
              priority
              sizes="100vw"
              quality={85}
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="svc-hero__overlay" aria-hidden="true" />
          <div className="wrap svc-hero__content">
            <h1 className="svc-hero__title">Nosotros</h1>
            <p className="svc-hero__lead">
              Detrás de Kietel hay más de una década dirigiendo y asesorando hoteles. Esta es la
              visión, los valores y la persona que la hacen posible.
            </p>
          </div>
        </section>

        <Lamp />

        <section className="section svc-cta">
          <div className="wrap reveal">
            <p className="eyebrow eyebrow--center">Diagnóstico gratuito</p>
            <h2>¿Trabajamos juntos?</h2>
            <p>
              Cuéntanos sobre tu hotel y te enviaremos un primer análisis con oportunidades concretas
              de mejora. Sin coste y sin compromiso.
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
