import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCta from "@/components/FinalCta";
import contactoImg from "@/public/images/contacto-conserjeria.jpg";

export const metadata: Metadata = {
  title: "Contacto · Kietel Revenue",
  description:
    "Solicita tu diagnóstico gratuito. Cuéntanos sobre tu hotel y te enviaremos un primer análisis con oportunidades concretas de mejora.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <Header overImage />
      <main>
        <section className="svc-hero">
          <div className="svc-hero__bg">
            <Image
              src={contactoImg}
              alt="Mostrador de conserjería de un hotel"
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
            <h1 className="svc-hero__title">Contacto</h1>
            <p className="svc-hero__lead">
              Hablemos de tu propiedad. Te respondemos en menos de 48 horas.
            </p>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
