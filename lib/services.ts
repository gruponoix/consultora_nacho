import type { StaticImageData } from "next/image";
import heroSunset from "@/public/images/hero-sunset.jpg";
import reception from "@/public/images/reception.jpg";
import poolView from "@/public/images/pexels-quang-nguyen-vinh-222549-14036242.jpg";
import hotelRoom from "@/public/images/hotel-room.jpg";

export type ServiceFeature = { title: string; text: string };

export type Service = {
  slug: string;
  num: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: StaticImageData;
  intro: string[];
  includesTitle: string;
  includes: ServiceFeature[];
  idealFor: string;
  format: { label: string; text: string };
};

/** Hero image settings on the detail page; Offers preloads with the same ones. */
export const SERVICE_HERO = { sizes: "100vw", quality: 85 } as const;

/** Common to every collaboration model (dossier · "En todos los modelos"). */
export const ALL_MODELS_INCLUDE = [
  "Metodología",
  "KPIs",
  "Reporting",
  "Gobierno del proyecto",
  "Seguimiento",
  "Revisión de resultados",
];

export const SERVICES: Service[] = [
  {
    slug: "revenue-management-360",
    num: "01",
    eyebrow: "Modelo · Revenue Management 360°",
    title: "Revenue Management 360°",
    lead: "Tu equipo de Revenue, externalizado. Gestión integral y continua.",
    image: heroSunset,
    intro: [
      "Para propiedades que quieren delegar la función de Revenue Management en un equipo especializado, con gestión continua y orientada a resultados.",
      "Asumimos el pricing, la distribución, el forecast y el análisis de la demanda de tu propiedad, con objetivos y KPIs definidos desde el primer día.",
    ],
    includesTitle: "Qué gestionamos",
    includes: [
      { title: "Pricing", text: "Estrategia tarifaria, BAR, reglas de pricing y ajustes diarios según demanda." },
      { title: "Forecast", text: "Previsión de ocupación, ADR, RevPAR y evolución del pickup." },
      { title: "Distribución", text: "Mix de canales, OTAs, restricciones, disponibilidad y coste de adquisición." },
      { title: "Demanda", text: "Calendario de demanda, eventos, compresión, mercados y ventanas de reserva." },
      { title: "Performance", text: "KPIs, benchmarking y detección de oportunidades." },
      { title: "Gobierno", text: "Revenue meetings, reporting, responsables y calendario de decisiones." },
    ],
    idealFor:
      "Hoteles y apartamentos sin equipo interno de Revenue o propiedades que prefieren externalizar completamente la función.",
    format: {
      label: "Modelo",
      text: "Servicio recurrente · gestión integral · objetivos y KPIs definidos.",
    },
  },
  {
    slug: "revenue-management-partner",
    num: "02",
    eyebrow: "Modelo · Revenue Management Partner",
    title: "Revenue Management Partner",
    lead: "Un equipo senior integrado con el tuyo. Estrategia, supervisión y acompañamiento continuo.",
    image: reception,
    intro: [
      "Para propiedades que ya cuentan con estructura interna, pero necesitan experiencia senior, metodología y una visión externa que acelere la toma de decisiones.",
      "No sustituimos necesariamente a tu equipo: lo hacemos más fuerte. Kietel aporta estructura, visión y experiencia mientras el equipo de la propiedad mantiene el conocimiento operativo y el control de la ejecución.",
    ],
    includesTitle: "Cómo te acompañamos",
    includes: [
      { title: "Comité de Revenue", text: "Revisión periódica de pickup, forecast, pricing y próximos movimientos." },
      { title: "Supervisión", text: "Revisión de estrategia y principales decisiones de Revenue." },
      { title: "Coaching", text: "Acompañamiento y transferencia de conocimiento al equipo interno." },
      { title: "Análisis", text: "Datos, tendencias, competencia y oportunidades de mejora." },
      { title: "Planificación", text: "Calendario comercial y de Revenue alineado con la demanda." },
      { title: "Control", text: "KPIs, reporting y seguimiento de las acciones acordadas." },
    ],
    idealFor:
      "Hoteles con equipo comercial o de Revenue que buscan dirección, metodología o una segunda capa de expertise.",
    format: {
      label: "Modelo",
      text: "Estrategia, supervisión y acompañamiento continuo junto a tu equipo.",
    },
  },
  {
    slug: "revenue-projects",
    num: "03",
    eyebrow: "Modelo · Revenue Projects",
    title: "Revenue Projects",
    lead: "Intervenciones específicas. Impacto medible.",
    image: poolView,
    intro: [
      "No siempre hace falta externalizar el Revenue. A veces hace falta resolver bien un problema concreto.",
      "Intervenimos sobre un reto específico de tu propiedad con un alcance cerrado, entregables claros e impacto medible.",
    ],
    includesTitle: "Tipos de proyecto",
    includes: [
      { title: "Pricing", text: "Rediseño de arquitectura tarifaria y estrategia de precios." },
      { title: "Distribución", text: "Optimización de OTAs, canal directo, paridad y mix." },
      { title: "Forecast & Budget", text: "Implantación o revisión de forecast, presupuesto y objetivos." },
      { title: "Segmentación", text: "Revisión de mercados, segmentos, producción y potencial." },
      { title: "Pre-opening", text: "Diseño de estrategia de Revenue para nuevas aperturas." },
      { title: "Temporada", text: "Planes específicos para alta, baja, shoulder o mercados concretos." },
    ],
    idealFor: "Propiedades con un problema o reto concreto.",
    format: {
      label: "Formato",
      text: "Proyecto cerrado con alcance, calendario, entregables y KPIs definidos. Duración orientativa: 2–12 semanas.",
    },
  },
  {
    slug: "revenue-audit",
    num: "04",
    eyebrow: "Modelo · Revenue Audit",
    title: "Revenue Audit",
    lead: "Detectamos dónde estás dejando dinero sobre la mesa.",
    image: hotelRoom,
    intro: [
      "Auditoría independiente para entender el punto de partida, identificar oportunidades y priorizar acciones.",
      "Un diagnóstico completo de tu Revenue para saber qué está funcionando, qué debe cambiar y por dónde empezar.",
    ],
    includesTitle: "Qué auditamos",
    includes: [
      { title: "Pricing", text: "Arquitectura tarifaria, BAR, descuentos y restricciones." },
      { title: "Demanda", text: "Pickup, forecast, calendario y ventanas de reserva." },
      { title: "Distribución", text: "OTAs, canal directo, mix y coste de adquisición." },
      { title: "Segmentación", text: "Mercados, segmentos y producción." },
      { title: "Performance", text: "KPIs, benchmarking y oportunidades." },
      { title: "Organización", text: "Procesos, herramientas y responsabilidades." },
    ],
    idealFor: "Hoteles que necesitan saber qué está funcionando y qué debe cambiar.",
    format: {
      label: "Entregable",
      text: "Diagnóstico + oportunidades + plan de acción priorizado.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
