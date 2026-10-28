import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import blogImg from "@/public/images/blog-escritorio.jpg";

export const metadata: Metadata = {
  title: "Blog · Kietel Revenue",
  description:
    "Tendencias, estrategia y aprendizajes del sector hotelero: revenue management, distribución, venta directa y operaciones.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Header overImage />
      <main>
        <section className="svc-hero">
          <div className="svc-hero__bg">
            <Image
              src={blogImg}
              alt="Blog de Kietel Revenue"
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
            <h1 className="svc-hero__title">Blog</h1>
            <p className="svc-hero__lead">
              Ideas, tendencias y aprendizajes para hoteles que quieren crecer.
            </p>
          </div>
        </section>

        <Blog />
      </main>
      <Footer />
    </>
  );
}
