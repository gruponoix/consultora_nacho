export type ServiceStep = { num: number; title: string; text: string };
export type ServiceFeature = { title: string; text: string };

export type Service = {
  slug: string;
  num: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  intro: string[];
  includesTitle: string;
  includes: ServiceFeature[];
  process: ServiceStep[];
};

export const SERVICES: Service[] = [
  {
    slug: "externalizacion",
    num: "01",
    eyebrow: "Servicio · Externalización",
    title: "Externalización",
    lead: "Asumimos áreas clave de tu hotel —revenue, ventas y reservas— con un equipo experto que rema en tu misma dirección.",
    image: "/images/hero-sunset.jpg",
    intro: [
      "Externalizar con Kietel no es ceder el control de tu hotel: es sumar un equipo especializado que se integra con el tuyo y se responsabiliza de las áreas que más impacto tienen en tu cuenta de resultados.",
      "Operamos tu revenue, tu distribución y tu venta directa con método, tecnología y reporting continuo, para que tú te concentres en la experiencia del huésped mientras nosotros maximizamos cada euro de ingreso.",
    ],
    includesTitle: "Qué áreas asumimos",
    includes: [
      { title: "Revenue management", text: "Estrategia de precios, forecasting y gestión diaria del inventario." },
      { title: "Distribución y canales", text: "Optimización de OTAs, metabuscadores y paridad para reducir costes." },
      { title: "Venta directa", text: "Impulsamos tu canal propio para ganar margen e independencia." },
      { title: "Reservas y atención", text: "Gestión profesional de reservas y conversión de cada solicitud." },
      { title: "Reporting continuo", text: "Cuadros de mando claros y reuniones periódicas de seguimiento." },
      { title: "Equipo dedicado", text: "Un responsable de cuenta y especialistas asignados a tu hotel." },
    ],
    process: [
      { num: 1, title: "Diagnóstico", text: "Auditamos tus áreas y datos para fijar el punto de partida." },
      { num: 2, title: "Transición", text: "Asumimos la operativa con un plan de traspaso ordenado." },
      { num: 3, title: "Operación", text: "Gestionamos el día a día con objetivos y seguimiento." },
      { num: 4, title: "Mejora continua", text: "Medimos, ajustamos y escalamos lo que funciona." },
    ],
  },
  {
    slug: "consultoria",
    num: "02",
    eyebrow: "Servicio · Consultoría",
    title: "Consultoría",
    lead: "Diagnóstico, estrategia y acompañamiento para decidir con datos y un plan claro de crecimiento.",
    image: "/images/pexels-quang-nguyen-vinh-222549-14036242.jpg",
    intro: [
      "Cuando necesitas una mirada externa y experta, te ayudamos a entender dónde está el potencial oculto de tu hotel y cómo desbloquearlo.",
      "Analizamos tu operación, tus ingresos y tu posicionamiento, y te entregamos un plan accionable con prioridades claras —para que tu equipo lo ejecute con confianza o lo hagamos contigo.",
    ],
    includesTitle: "Qué incluye",
    includes: [
      { title: "Auditoría 360º", text: "Revisión de revenue, distribución, costes y experiencia del huésped." },
      { title: "Plan estratégico", text: "Objetivos, palancas y hoja de ruta priorizada y medible." },
      { title: "Pricing y revenue", text: "Modelo de precios y políticas de inventario a tu medida." },
      { title: "Benchmark de mercado", text: "Comparativa con tu competencia y oportunidades reales." },
      { title: "Formación del equipo", text: "Capacitamos a tu personal en las nuevas herramientas." },
      { title: "Acompañamiento", text: "Seguimiento para que el plan se traduzca en resultados." },
    ],
    process: [
      { num: 1, title: "Inmersión", text: "Conocemos tu hotel, tu mercado y tus objetivos." },
      { num: 2, title: "Análisis", text: "Cruzamos datos para detectar oportunidades reales." },
      { num: 3, title: "Estrategia", text: "Diseñamos el plan con prioridades y métricas claras." },
      { num: 4, title: "Acompañamiento", text: "Te apoyamos en la ejecución y medimos resultados." },
    ],
  },
  {
    slug: "gestion-operativa",
    num: "03",
    eyebrow: "Servicio · Gestión operativa",
    title: "Gestión operativa",
    lead: "Operamos tu hotel —o áreas concretas— con foco en eficiencia, experiencia del huésped y resultados.",
    image: "/images/hotel-room.jpg",
    intro: [
      "Nos hacemos cargo de la operación de tu hotel con criterio hotelero y visión de negocio, alineando procesos, equipos y costes para que cada área rinda.",
      "Desde la operativa completa hasta departamentos concretos, implantamos estándares, formamos a tu equipo y cuidamos la experiencia del huésped sin perder de vista la rentabilidad.",
    ],
    includesTitle: "Qué incluye",
    includes: [
      { title: "Operación integral", text: "Coordinamos las áreas clave del día a día del hotel." },
      { title: "Equipos y formación", text: "Seleccionamos, formamos y motivamos a tu personal." },
      { title: "Experiencia del huésped", text: "Estándares de servicio que mejoran tus reseñas." },
      { title: "Control de costes", text: "Eficiencia operativa sin renunciar a la calidad." },
      { title: "Procesos y estándares", text: "Manuales y protocolos que dan consistencia." },
      { title: "Cuadro de mando", text: "Indicadores operativos y financieros en tiempo real." },
    ],
    process: [
      { num: 1, title: "Evaluación", text: "Revisamos operación, equipo y costes actuales." },
      { num: 2, title: "Implantación", text: "Definimos estándares, procesos y responsabilidades." },
      { num: 3, title: "Operación", text: "Gestionamos el día a día con foco en el resultado." },
      { num: 4, title: "Optimización", text: "Mejoramos de forma continua eficiencia y experiencia." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
