import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Offers from "@/components/Offers";
import Objections from "@/components/Objections";
import Collab from "@/components/Collab";
import Faq from "@/components/Faq";
import { Arrow } from "@/components/icons";
import serviciosImg from "@/public/images/servicios-lobby.jpg";

export const metadata: Metadata = {
  title: "Servicios · Kietel Revenue",
  description:
    "Cuatro modelos de colaboración en Revenue Management: externalización completa, partner senior, proyectos específicos y auditoría. Elige el nivel de implicación que necesita tu propiedad.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <Header overImage />
      <main>
        <section className="svc-hero">
          <div className="svc-hero__bg">
            <Image
              src={serviciosImg}
              alt="Servicios de Kietel Revenue"
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
            <h1 className="svc-hero__title">Servicios</h1>
            <p className="svc-hero__lead">
              Desde la externalización completa hasta intervenciones específicas: Revenue
              Management a la medida de cada propiedad.
            </p>
          </div>
        </section>

        <Offers />
        <Objections />
        <Collab />
        <Faq />

        <section className="section svc-cta">
          <div className="wrap reveal">
            <p className="eyebrow eyebrow--center">Diagnóstico gratuito</p>
            <h2>¿Qué modelo encaja con tu propiedad?</h2>
            <p>
              Cuéntanos tu situación y te ayudamos a elegir el nivel de implicación adecuado. Sin
              coste y sin compromiso.
            </p>
            <Link href="/contacto" className="btn btn--gold">
              Solicitar diagnóstico gratuito <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
