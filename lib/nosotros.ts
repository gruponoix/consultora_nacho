import type { Block, Closing } from "./blocks";

// Copy from the client's "Sobre nosotros" document (docs/SOBRE NOSOTROS 3.docx).

export const NOSOTROS_INTRO = {
  body: [
    "En **Kietel Revenue Management** ayudamos a hoteles y apartamentos turísticos a tomar mejores decisiones, maximizar sus ingresos y construir negocios más rentables.",
    "Combinamos **Revenue Management**, estrategia comercial, distribución y marketing digital para ofrecer una visión global del negocio y desarrollar estrategias adaptadas a cada establecimiento.",
    "Nuestro trabajo consiste en identificar dónde está la oportunidad, cuándo aprovecharla y cómo convertirla en ingresos.",
    "Contamos con **más de 10 años de experiencia en el sector hotelero y en Revenue Management**, trabajando desde una perspectiva práctica y directamente vinculada a la realidad de los establecimientos turísticos. Esta experiencia nos ha permitido conocer el negocio desde dentro: entender cómo funciona un hotel, cómo se comporta la demanda, qué factores influyen en una reserva y, sobre todo, cómo cada decisión comercial puede repercutir directamente en la rentabilidad.",
  ],
  quote: "Porque vender más no siempre significa ganar más.",
};

export const NOSOTROS_BLOCKS: Block[] = [
  {
    kind: "text",
    title: "Una nueva forma de entender el Revenue Management",
    body: [
      "El Revenue Management ha evolucionado. Ya no se trata únicamente de modificar tarifas en función de la demanda.",
      "Hoy, la rentabilidad de un establecimiento depende de múltiples factores: precio, ocupación, competencia, distribución, posicionamiento, conversión, venta directa, costes de adquisición y comportamiento del cliente.",
      "En Kietel analizamos todas estas variables para construir una estrategia coherente y orientada a resultados.",
    ],
    quote: "Datos para entender. Estrategia para decidir. Acciones para crecer.",
  },
  {
    kind: "list",
    title: "Mucho más que Revenue Management",
    intro: [
      "Nuestro enfoque parte del Revenue Management, pero va mucho más allá. Trabajamos sobre los principales elementos que influyen en la rentabilidad de un establecimiento:",
    ],
    items: [
      "Revenue Management",
      "Distribución",
      "Venta directa",
      "SEO y posicionamiento digital",
      "SEM y adquisición",
      "Estrategia comercial",
    ],
  },
  {
    kind: "text",
    title: "Pensamos como hoteleros",
    body: [
      "Uno de nuestros principales valores diferenciales es nuestra visión práctica del sector. Entendemos que detrás de cada dato existe una realidad operativa: habitaciones que vender, equipos que gestionar, costes que controlar y clientes que satisfacer.",
      "Por eso nuestras estrategias no se basan únicamente en informes o dashboards. Buscamos soluciones que puedan aplicarse y que tengan un impacto real en el negocio.",
      "Trabajamos junto a la dirección y los equipos de cada establecimiento para convertir el análisis en decisiones concretas.",
    ],
  },
  {
    kind: "text",
    title: "Cada establecimiento necesita una estrategia diferente",
    body: [
      "No creemos en fórmulas estándar. Un hotel urbano no tiene las mismas necesidades que un resort vacacional. Un hotel boutique no compite de la misma manera que un gran establecimiento. Y los apartamentos turísticos requieren una estrategia diferente a la de un hotel tradicional.",
      "Por eso, antes de plantear cualquier acción, estudiamos la situación del negocio. A partir de ahí construimos una estrategia personalizada.",
    ],
  },
  {
    kind: "list",
    title: "Nuestro objetivo",
    intro: [
      "No buscamos simplemente aumentar la ocupación. Buscamos mejorar la rentabilidad global del establecimiento. Para ello trabajamos sobre indicadores como:",
    ],
    items: [
      "Ocupación",
      "ADR",
      "RevPAR",
      "Revenue",
      "Rentabilidad por canal",
      "Coste de adquisición",
      "Venta directa",
    ],
    style: "chips",
    outro: [
      "Porque una habitación ocupada no siempre es una habitación rentable. La clave está en conseguir el cliente adecuado, al precio adecuado, en el momento adecuado y a través del canal adecuado.",
    ],
  },
  {
    kind: "flow",
    title: "Un departamento de Revenue externo, integrado en tu negocio",
    intro: [
      "Kietel puede convertirse en el departamento de Revenue Management y estrategia comercial de tu establecimiento. Nos adaptamos a la estructura y necesidades de cada cliente, trabajando conjuntamente con dirección, recepción, reservas, comercial y marketing.",
      "Nuestro modelo permite contar con conocimiento especializado y una visión estratégica sin necesidad de crear internamente un departamento completo. Nos implicamos en el negocio como si formáramos parte de él.",
    ],
    steps: ["Analizamos", "Planificamos", "Implementamos", "Medimos", "Optimizamos"],
    outro: ["Y volvemos a empezar. Porque el mercado no se detiene y nuestra estrategia tampoco."],
  },
  {
    kind: "text",
    title: "Tecnología y datos al servicio de las decisiones",
    body: [
      "Las herramientas son importantes, pero la tecnología por sí sola no genera rentabilidad. En Kietel utilizamos los datos y las herramientas disponibles para obtener una visión precisa del negocio y detectar oportunidades.",
      "Pero creemos que el verdadero valor está en saber interpretar esos datos y convertirlos en decisiones. Por eso combinamos tecnología, análisis y experiencia para construir estrategias que respondan a una pregunta fundamental:",
    ],
    quote: "¿Qué podemos hacer hoy para que nuestro cliente sea más rentable mañana?",
  },
  {
    kind: "steps",
    title: "Nuestra forma de trabajar",
    steps: [
      {
        title: "Analizamos",
        text: "Comenzamos con un diagnóstico completo del establecimiento, su mercado, competencia, distribución, precios y presencia digital.",
      },
      {
        title: "Diseñamos",
        text: "Definimos una estrategia personalizada de Revenue, distribución, venta directa y posicionamiento.",
      },
      {
        title: "Implementamos",
        text: "Llevamos la estrategia a la operativa diaria y coordinamos las acciones necesarias con los diferentes canales y equipos.",
      },
      {
        title: "Medimos",
        text: "Seguimos la evolución de los principales indicadores para conocer qué funciona y qué necesita ser mejorado.",
      },
      {
        title: "Optimizamos",
        text: "La estrategia nunca permanece estática. Ajustamos precios, canales, acciones comerciales y marketing en función de la evolución del mercado.",
      },
    ],
  },
  {
    kind: "text",
    title: "Nuestro compromiso",
    body: [
      "En Kietel no queremos ser simplemente otro proveedor. Queremos convertirnos en un partner estratégico para nuestros clientes.",
      "Un equipo que aporte conocimiento, visión externa, análisis y capacidad de ejecución. Un equipo que no se limite a decir qué está ocurriendo, sino que ayude a responder:",
    ],
    quote: "Por qué está ocurriendo. Qué podemos hacer. Y cuánto podemos mejorar.",
  },
];

export const NOSOTROS_CLOSING: Closing = {
  title: "Estrategia para vender mejor. Datos para decidir mejor. Revenue para crecer.",
  body: [
    "Ayudamos a hoteles y apartamentos turísticos a transformar su potencial en resultados.",
    "¿Hablamos de tu próximo nivel de rentabilidad?",
  ],
  cta: "Solicitar una reunión",
};
