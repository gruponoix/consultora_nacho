import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Interactions from "@/components/Interactions";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = "https://www.aurumhotelconsulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Aurum Hotel Consulting · Consultoría y gestión hotelera premium en Málaga",
  description:
    "Consultora hotelera premium. Externalización, consultoría y gestión operativa para hoteles independientes y cadenas que buscan aumentar ingresos, optimizar costes y mejorar resultados. Solicita tu diagnóstico gratuito.",
  keywords: [
    "consultoría hotelera",
    "externalización hotelera",
    "gestión operativa hoteles",
    "revenue management",
    "consultor hotelero Málaga",
    "aumentar ingresos hotel",
  ],
  authors: [{ name: "Aurum Hotel Consulting" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Aurum Hotel Consulting · Consultoría hotelera premium",
    description:
      "Impulsamos la rentabilidad y el crecimiento de hoteles independientes y cadenas hoteleras.",
    locale: "es_ES",
    siteName: "Aurum Hotel Consulting",
    url: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aurum Hotel Consulting",
  description:
    "Consultora hotelera premium especializada en externalización, consultoría y gestión operativa para hoteles independientes y cadenas hoteleras.",
  areaServed: "Internacional",
  knowsLanguage: ["es", "en"],
  founder: { "@type": "Person", name: "Ignacio Góngora Espada", jobTitle: "CEO & Fundador" },
  address: { "@type": "PostalAddress", addressLocality: "Málaga", addressCountry: "ES" },
  sameAs: ["https://www.linkedin.com/", "https://www.instagram.com/"],
  slogan: "Impulsamos la rentabilidad de hoteles independientes y cadenas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={playfair.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Without JS the scroll-reveal elements would stay hidden — reveal them. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        {children}
        <Interactions />
      </body>
    </html>
  );
}
