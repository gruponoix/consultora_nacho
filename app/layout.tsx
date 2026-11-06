import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Interactions from "@/components/Interactions";
import GoogleTag from "@/components/GoogleTag";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import CookieConsent from "@/components/CookieConsent";
import { OG_IMAGE, SITE_URL } from "@/lib/seo";
import { CONTACT } from "@/lib/contact";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kietel Revenue · Revenue Management para hoteles",
  description:
    "Consultora de Revenue Management para hoteles y apartamentos turísticos en toda España. Gestionamos, acompañamos o auditamos tu estrategia de precios, distribución y demanda para aumentar tu rentabilidad. Solicita tu diagnóstico gratuito.",
  keywords: [
    "revenue management hotelero",
    "revenue management España",
    "consultoría revenue management",
    "revenue manager externo",
    "estrategia de precios hotel",
    "aumentar rentabilidad hotel",
  ],
  authors: [{ name: "Kietel Revenue" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Kietel Revenue · Revenue Management para hoteles",
    description:
      "Impulsamos la rentabilidad de hoteles y apartamentos turísticos con estrategia de precios, distribución y demanda.",
    locale: "es_ES",
    siteName: "Kietel Revenue",
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kietel Revenue",
  description:
    "Consultora de Revenue Management para hoteles y apartamentos turísticos: gestión externalizada, acompañamiento a equipos propios, proyectos específicos y auditorías.",
  email: CONTACT.email,
  telephone: CONTACT.phoneHref.replace("tel:", ""),
  areaServed: { "@type": "Country", name: "España" },
  knowsLanguage: ["es", "en"],
  founder: { "@type": "Person", name: "Ignacio Góngora Espada", jobTitle: "CEO & Fundador" },
  address: { "@type": "PostalAddress", addressLocality: "Málaga", addressCountry: "ES" },
  sameAs: [CONTACT.linkedin],
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
        <CookieConsent />
        <AnalyticsEvents />
        <GoogleTag />
      </body>
    </html>
  );
}
