import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Segments from "@/components/Segments";
import Objections from "@/components/Objections";
import Collab from "@/components/Collab";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offers />
        <Segments />
        <Objections />
        <Collab />
        <Cases />
        <Testimonials />
        <About />
        <Blog />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
