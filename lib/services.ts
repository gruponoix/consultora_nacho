import type { StaticImageData } from "next/image";
import heroSunset from "@/public/images/hero-sunset.jpg";
import reception from "@/public/images/reception.jpg";
import poolView from "@/public/images/pexels-quang-nguyen-vinh-222549-14036242.jpg";
import hotelRoom from "@/public/images/hotel-room.jpg";
import type { Block, Closing } from "./blocks";

export type Service = {
  slug: string;
  num: string;
  title: string;
  /** Short line for the home/servicios cards. */
  lead: string;
  /** Tagline under the title on the detail page. */
  heroLead: string;
  image: StaticImageData;
  intro: string[];
  /** Closing line of the intro, set apart. */
  introQuote?: string;
  blocks: Block[];
  closing: Closing;
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

// Copy from the client's documents (docs/*.docx).
export const SERVICES: Service[] = [
  {
    slug: "revenue-management-360",
    num: "01",
    title: "Revenue Management 360°",
    lead: "Tu equipo de Revenue, externalizado. Gestión integral y continua.",
    heroLead: "Un departamento de Revenue externo, integrado en tu negocio.",
    image: heroSunset,
    intro: [
      "Una gestión de Revenue eficaz requiere mucho más que revisar precios. Implica entender cómo evoluciona la demanda, anticipar el comportamiento de las reservas, analizar la competencia, optimizar la distribución, controlar el coste de cada canal y convertir toda esa información en decisiones comerciales.",
      "Con **Revenue Management 360°**, Kietel asume de forma integral la función de Revenue Management de tu establecimiento. Nos convertimos en una extensión de tu equipo, combinando análisis, estrategia y gestión continua para ayudarte a tomar mejores decisiones y maximizar la rentabilidad de tu inventario.",
      "No nos limitamos a recomendar qué hacer.",
    ],
    introQuote: "Analizamos, decidimos, implementamos, medimos y optimizamos.",
    blocks: [
      {
        kind: "text",
        title: "Revenue Management orientado a rentabilidad",
        body: [
          "Tener una alta ocupación no significa necesariamente estar obteniendo el máximo rendimiento. Una estrategia de Revenue debe buscar el equilibrio entre ocupación, precio medio, demanda, distribución y coste de adquisición.",
          "Por eso trabajamos sobre todo el ciclo comercial del establecimiento: desde la estrategia tarifaria hasta la previsión de demanda, el mix de canales, el seguimiento de resultados y la toma de decisiones.",
          "El objetivo es conseguir que cada habitación o unidad disponible se comercialice de la forma más rentable posible.",
        ],
        quote:
          "El cliente adecuado. En el momento adecuado. Al precio adecuado. A través del canal adecuado.",
      },
      {
        kind: "features",
        title: "Una gestión integral de Revenue",
        items: [
          {
            title: "Pricing",
            summary:
              "Diseñamos y gestionamos una estrategia tarifaria adaptada al comportamiento real de la demanda.",
            body: [
              "Analizamos ritmo de reservas, ocupación, competencia, eventos, ventanas de reserva y evolución del mercado para ajustar precios y restricciones de forma dinámica.",
              "No se trata simplemente de subir o bajar tarifas. Se trata de entender cuándo existe capacidad para incrementar precio, cuándo necesitamos estimular demanda y cómo proteger el valor del producto.",
            ],
          },
          {
            title: "Forecast",
            summary: "Anticiparnos nos permite tomar mejores decisiones.",
            body: [
              "Trabajamos con previsiones de ocupación, ADR, RevPAR y evolución del pick-up para detectar desviaciones y oportunidades antes de que sea demasiado tarde para actuar.",
              "El forecast se convierte así en una herramienta de decisión, no únicamente en una previsión.",
            ],
          },
          {
            title: "Distribución",
            summary: "No todas las reservas tienen el mismo valor.",
            body: [
              "Analizamos OTAs, canal directo, disponibilidad, restricciones y coste de adquisición para construir un mix de distribución equilibrado.",
              "Las OTAs pueden aportar visibilidad y demanda. El canal directo puede aportar mayor control y reducir determinados costes de distribución.",
              "Nuestro trabajo consiste en determinar qué papel debe desempeñar cada canal dentro de la estrategia global de la propiedad.",
            ],
          },
          {
            title: "Demanda",
            summary: "Analizamos cuándo, cómo y por qué se genera la demanda.",
            body: [
              "Construimos calendarios de demanda incorporando estacionalidad, eventos, periodos de compresión, mercados emisores, comportamiento histórico y ventanas de reserva.",
              "Esta visión nos permite anticipar oportunidades y preparar la estrategia comercial antes de que el mercado reaccione.",
            ],
          },
          {
            title: "Rendimiento",
            summary: "Lo que no se mide no se puede optimizar.",
            body: [
              "Seguimos los principales indicadores del establecimiento para conocer qué está funcionando, detectar desviaciones y encontrar nuevas oportunidades.",
              "ADR, RevPAR, ocupación, pick-up, ritmo de reserva, producción por segmento, rentabilidad por canal y otros KPIs se convierten en información accionable para la toma de decisiones.",
            ],
          },
          {
            title: "Gobierno",
            summary: "Una estrategia de Revenue necesita ritmo, responsables y seguimiento.",
            body: [
              "Establecemos una metodología de trabajo basada en Revenue Meetings, reporting periódico, calendario de decisiones, responsables y revisión de resultados.",
              "Cada decisión debe tener un motivo. Cada acción, un responsable. Y cada estrategia, una forma clara de medir su impacto.",
            ],
          },
        ],
      },
      {
        kind: "text",
        title: "Mucho más que modificar precios",
        body: [
          "Nuestro trabajo no consiste en reaccionar constantemente al mercado. Consiste en intentar anticiparnos a él.",
          "Analizamos diariamente la evolución del negocio para identificar cambios en el comportamiento de la demanda, variaciones de pick-up, movimientos de competencia y oportunidades comerciales.",
          "Esta gestión continua permite ajustar la estrategia conforme evoluciona el mercado y evitar que decisiones importantes se tomen demasiado tarde.",
        ],
        quote: "Revenue no es gestionar tarifas. Es gestionar oportunidades.",
      },
      {
        kind: "text",
        title: "Nos integramos en tu operación",
        body: [
          "Kietel trabaja como un departamento externo de Revenue Management integrado en la estructura de la propiedad.",
          "Coordinamos nuestra estrategia con dirección, reservas, recepción, comercial, marketing y los equipos implicados en la comercialización.",
          "De esta forma, Revenue deja de funcionar como un área aislada y se convierte en una herramienta transversal para mejorar el rendimiento global del establecimiento.",
        ],
      },
      {
        kind: "text",
        title: "Información clara para tomar mejores decisiones",
        body: [
          "Nuestro reporting no está pensado para acumular datos. Está diseñado para responder a preguntas.",
          "A través del seguimiento periódico de KPIs y de reuniones de Revenue, transformamos los datos del establecimiento en decisiones concretas.",
        ],
        quote:
          "¿Qué está ocurriendo? ¿Por qué está ocurriendo? ¿Qué debemos hacer? ¿Qué resultado estamos obteniendo?",
      },
      {
        kind: "flow",
        title: "Una estrategia que evoluciona con el mercado",
        intro: [
          "El Revenue Management no es un proyecto que se diseña una vez y permanece estático. La demanda cambia. La competencia cambia. Los canales cambian. El comportamiento del cliente cambia.",
          "Por eso trabajamos mediante un ciclo continuo:",
        ],
        steps: ["Analizar", "Decidir", "Implementar", "Medir", "Optimizar"],
        outro: ["Y volver a empezar."],
      },
      {
        kind: "text",
        title: "¿Para quién es Revenue Management 360°?",
        body: [
          "Está especialmente pensado para hoteles y empresas de gestión de apartamentos turísticos que no disponen de un equipo interno de Revenue Management o que prefieren externalizar completamente esta función.",
          "También es adecuado para propiedades que necesitan profesionalizar su estrategia de precios, distribución y forecasting sin incorporar internamente toda la estructura necesaria.",
          "Kietel aporta metodología, conocimiento especializado y una visión externa del negocio, manteniendo siempre una coordinación estrecha con la propiedad.",
        ],
      },
    ],
    closing: {
      title: "Tu Revenue. Nuestro equipo.",
      body: [
        "Externalizar Revenue Management no significa perder el control. Significa incorporar un equipo especializado para disponer de mejores análisis, procesos más estructurados y decisiones más rápidas.",
        "Descubre cuánto margen de mejora tiene tu establecimiento.",
      ],
      cta: "Solicitar una reunión",
    },
  },
  {
    slug: "revenue-management-partner",
    num: "02",
    title: "Revenue Management Partner",
    lead: "Un equipo senior integrado con el tuyo. Estrategia, supervisión y acompañamiento continuo.",
    heroLead: "Un equipo senior integrado con el tuyo.",
    image: reception,
    intro: [
      "Hay propiedades que ya disponen de un equipo comercial o de Revenue y no necesitan externalizar completamente la función. Necesitan algo diferente: experiencia, metodología, dirección. Una segunda mirada.",
      "Revenue Management Partner está diseñado para establecimientos que quieren mantener la gestión dentro de su propia estructura, pero necesitan incorporar una capa adicional de conocimiento y dirección estratégica.",
      "Kietel trabaja conjuntamente con tu equipo para revisar la estrategia, analizar resultados, detectar oportunidades y mejorar la calidad de las decisiones.",
      "No venimos a sustituir lo que ya funciona.",
    ],
    introQuote: "Venimos a hacerlo más fuerte.",
    blocks: [
      {
        kind: "text",
        title: "Una segunda capa de expertos para tu equipo",
        body: [
          "La operativa diaria puede absorber gran parte del tiempo de un equipo interno. Tarifas, reuniones, reservas, incidencias, distribución, campañas, presupuestos y decisiones urgentes pueden dificultar algo fundamental: mantener una visión estratégica del negocio.",
          "Kietel aporta esa perspectiva externa. Analizamos el establecimiento desde fuera de la operativa diaria, cuestionamos decisiones cuando es necesario, aportamos metodología y ayudamos al equipo a identificar oportunidades que pueden pasar desapercibidas cuando se trabaja constantemente dentro del negocio.",
          "El resultado es una combinación especialmente potente:",
        ],
        quote: "El conocimiento operativo de tu equipo + la experiencia y metodología de Kietel.",
      },
      {
        kind: "features",
        title: "Cómo trabajamos con tu equipo",
        items: [
          {
            title: "Comité de Revenue",
            summary:
              "Reuniones periódicas para analizar la evolución del negocio y preparar las siguientes decisiones.",
            body: [
              "Establecemos reuniones periódicas de Revenue para analizar la evolución del negocio y preparar las siguientes decisiones.",
              "Revisamos pick-up, forecast, pricing, ocupación, demanda, eventos, mercados, canales y próximos movimientos.",
              "El objetivo no es simplemente revisar resultados. Es utilizar cada reunión para decidir qué debemos hacer a continuación.",
            ],
          },
          {
            title: "Supervisión estratégica",
            summary:
              "Revisamos la estrategia y las principales decisiones comerciales antes de que tengan impacto en los resultados.",
            body: [
              "Revisamos la estrategia de Revenue y las principales decisiones comerciales antes de que tengan impacto en los resultados.",
              "Analizamos la coherencia entre pricing, demanda, segmentación, disponibilidad y distribución.",
              "Kietel actúa como una segunda capa de criterio que permite contrastar decisiones y reducir el riesgo de trabajar únicamente desde una visión interna.",
            ],
          },
          {
            title: "Coaching",
            summary:
              "Revenue Management no debería depender exclusivamente de una persona o de una herramienta.",
            body: [
              "El conocimiento debe permanecer dentro de la organización. Por eso trabajamos también en la transferencia de metodología y conocimiento al equipo interno.",
              "Explicamos el porqué de las decisiones, compartimos criterios de análisis y ayudamos a desarrollar una forma de trabajo cada vez más estructurada.",
              "El objetivo es que el equipo no solo ejecute acciones. Queremos que entienda por qué se toman.",
            ],
          },
          {
            title: "Análisis",
            summary: "Aportamos una visión externa basada en datos.",
            body: [
              "Analizamos resultados, comportamiento de la demanda, tendencias, competencia, producción, canales y desviaciones frente a los objetivos.",
              "Los datos nos permiten identificar qué está ocurriendo. Nuestra experiencia ayuda a interpretar por qué. Y la estrategia define qué hacer después.",
            ],
          },
          {
            title: "Planificación",
            summary:
              "Una buena estrategia de Revenue no puede limitarse a reaccionar a las reservas que entran.",
            body: [
              "Necesita anticipación. Trabajamos con calendarios comerciales y de Revenue alineados con la evolución prevista de la demanda.",
              "Eventos, temporadas, periodos de compresión, fechas de baja demanda y ventanas de reserva se convierten en puntos de decisión previamente identificados.",
              "La estrategia deja de ser reactiva para convertirse en planificada.",
            ],
          },
          {
            title: "Control",
            summary: "Cada acción acordada necesita seguimiento.",
            body: [
              "Definimos KPIs, reporting y responsables para poder medir la evolución de las decisiones adoptadas.",
              "Revisamos qué acciones se han implementado, qué resultados han producido y qué debe modificarse.",
              "Porque una estrategia que no se mide termina convirtiéndose en una opinión.",
            ],
          },
        ],
      },
      {
        kind: "text",
        title: "No sustituimos necesariamente a tu equipo. Lo hacemos más fuerte.",
        body: [
          "Revenue Management Partner parte de una idea sencilla: tu equipo conoce el establecimiento. Conoce al cliente. Conoce la operativa. Conoce el destino y sus particularidades.",
          "Kietel incorpora estructura, metodología, experiencia y una visión externa.",
          "Trabajando juntos podemos elevar la calidad de las decisiones sin perder el conocimiento que ya existe dentro de la propiedad.",
        ],
      },
      {
        kind: "text",
        title: "Menos intuición. Más criterio.",
        body: [
          "Muchas decisiones comerciales se toman bajo presión. ¿Subimos precio? ¿Abrimos disponibilidad? ¿Cerramos una tarifa? ¿Entramos en una promoción? ¿Necesitamos activar demanda? ¿Estamos reaccionando demasiado tarde?",
          "Revenue Management Partner permite disponer de un interlocutor especializado con el que contrastar esas decisiones.",
          "No se trata de eliminar la experiencia del equipo. Se trata de complementarla con datos, metodología y una visión adicional.",
        ],
      },
      {
        kind: "list",
        title: "Reporting que conduce a decisiones",
        intro: [
          "Cada reunión debe terminar con respuestas claras. Nuestro reporting funciona como un sistema de seguimiento y gobierno, no como una presentación que simplemente describe lo que ya ha ocurrido.",
        ],
        items: [
          "Qué está funcionando.",
          "Qué está cambiando.",
          "Dónde existe una oportunidad.",
          "Qué debemos hacer.",
          "Quién debe hacerlo.",
          "Cuándo debemos revisarlo.",
        ],
      },
      {
        kind: "flow",
        title: "Una relación de mejora continua",
        intro: [
          "Revenue Management Partner no es una consultoría puntual. Es un modelo de acompañamiento recurrente.",
        ],
        steps: ["Analizamos", "Contrastamos", "Recomendamos", "Medimos", "Aprendemos"],
        outro: [
          "Y volvemos a ajustar. El objetivo es incorporar una dinámica constante de mejora dentro del equipo.",
        ],
      },
      {
        kind: "list",
        title: "¿Para quién es Revenue Management Partner?",
        intro: [
          "Está pensado especialmente para hoteles que ya disponen de un equipo comercial o de Revenue Management, pero necesitan:",
        ],
        items: [
          "Dirección estratégica.",
          "Metodología.",
          "Supervisión.",
          "Experiencia senior.",
          "Una segunda opinión.",
          "Mayor estructura en reuniones y reporting.",
          "Transferencia de conocimiento.",
          "Mayor capacidad de análisis.",
        ],
        outro: [
          "Es especialmente útil cuando la propiedad quiere mantener internamente el control y la ejecución, pero necesita elevar el nivel estratégico de la función.",
        ],
      },
    ],
    closing: {
      title: "Tu equipo conoce el negocio. Kietel amplía su capacidad.",
      body: [
        "No necesitas sustituir tu estructura para mejorarla. A veces, incorporar la experiencia adecuada en las decisiones correctas es suficiente para cambiar los resultados.",
        "Hablemos de cómo fortalecer tu estrategia de Revenue.",
      ],
      cta: "Solicitar una reunión",
    },
  },
  {
    slug: "revenue-projects",
    num: "03",
    title: "Revenue Projects",
    lead: "Intervenciones específicas, impacto medible.",
    heroLead: "Intervenciones específicas. Impacto medible.",
    image: poolView,
    intro: [
      "No siempre hace falta externalizar todo el Revenue Management. A veces existe un problema concreto que necesita ser analizado y resuelto correctamente.",
      "Una arquitectura tarifaria que ha quedado obsoleta. Una distribución excesivamente dependiente de determinados canales. Un forecast que no ofrece información útil. Una nueva apertura. Una temporada especialmente compleja. Una segmentación que ya no refleja la realidad del negocio.",
      "Revenue Projects permite trabajar sobre uno de estos retos mediante un proyecto específico, con alcance, calendario, entregables y objetivos previamente definidos.",
      "Entramos para resolver un problema concreto.",
    ],
    introQuote: "Y salimos dejando una estructura más sólida que la que encontramos.",
    blocks: [
      {
        kind: "text",
        title: "Proyectos diseñados alrededor de una necesidad concreta",
        body: [
          "Cada Revenue Project parte de una pregunta: ¿qué necesitamos mejorar?",
          "A partir de ahí definimos el alcance, los datos necesarios, las decisiones que deben tomarse y los resultados que deben obtenerse.",
          "No utilizamos una estructura estándar para todos los proyectos.",
        ],
        quote: "El trabajo se adapta al problema.",
      },
      {
        kind: "features",
        title: "Áreas de intervención",
        items: [
          {
            title: "Pricing",
            summary: "Rediseño de arquitectura tarifaria y estrategia de precios.",
            body: [
              "Analizamos cómo está estructurado actualmente el pricing del establecimiento y evaluamos si responde realmente al comportamiento de su demanda.",
              "Revisamos BAR, escalones tarifarios, descuentos, restricciones, promociones y lógica de precios.",
              "El objetivo es construir una arquitectura tarifaria coherente, flexible y capaz de responder a diferentes escenarios de demanda.",
            ],
          },
          {
            title: "Distribución",
            summary: "Optimización de OTAs, canal directo, paridad y mix.",
            body: [
              "Analizamos cómo se distribuye actualmente el inventario y qué peso tiene cada canal dentro de la producción.",
              "Revisamos OTAs, canal directo, disponibilidad, paridad, restricciones y costes de distribución.",
              "El objetivo no es eliminar canales. Es encontrar un equilibrio más rentable entre alcance, volumen y coste de adquisición.",
            ],
          },
          {
            title: "Forecast & Budget",
            summary: "Implantación o revisión de previsiones y objetivos.",
            body: [
              "Un forecast debería ayudar a anticipar decisiones. Si únicamente describe lo que probablemente ocurrirá, pierde gran parte de su utilidad.",
              "Trabajamos en la implantación o revisión del modelo de forecast, presupuesto y objetivos para convertirlo en una herramienta real de gestión.",
              "Analizamos ocupación prevista, ADR, RevPAR, evolución del pick-up y principales variables de demanda para mejorar la capacidad de anticipación del establecimiento.",
            ],
          },
          {
            title: "Segmentación",
            summary: "Entender quién genera realmente el negocio.",
            body: [
              "Revisamos mercados, segmentos, producción y potencial para comprobar si la segmentación actual refleja correctamente el comportamiento de los clientes.",
              "Una buena segmentación permite comprender mejor de dónde procede la demanda, cómo reserva cada cliente, qué precio acepta y qué rentabilidad genera.",
              "El objetivo es disponer de una estructura que facilite mejores decisiones comerciales.",
            ],
          },
          {
            title: "Pre-opening",
            summary: "Estrategia de Revenue para nuevas aperturas.",
            body: [
              "Una nueva apertura obliga a tomar numerosas decisiones sin disponer todavía de histórico propio: pricing, posicionamiento, canales, restricciones, segmentación, forecast, objetivos y calendario comercial.",
              "Trabajamos en la construcción de la estrategia de Revenue desde el inicio para que la propiedad llegue a la apertura con una estructura comercial ordenada y una lógica clara de decisión.",
            ],
          },
          {
            title: "Temporada",
            summary: "Estrategias específicas para momentos concretos.",
            body: [
              "No todas las temporadas necesitan la misma estrategia: alta demanda, baja demanda, shoulder periods, mercados concretos, eventos o cambios en el comportamiento de reserva.",
              "Diseñamos planes específicos para situaciones donde el comportamiento habitual del establecimiento deja de ser suficiente.",
            ],
          },
        ],
      },
      {
        kind: "list",
        title: "Un proyecto con principio, objetivos y resultado",
        intro: ["Cada Revenue Project se define antes de comenzar:"],
        items: ["Alcance", "Calendario", "Entregables", "Responsables", "KPIs"],
        style: "chips",
        outro: [
          "De esta manera, ambas partes saben desde el principio qué se va a analizar, qué se va a entregar y qué resultado persigue el proyecto.",
          "La duración dependerá de la complejidad del reto, pero habitualmente se plantea como una intervención cerrada de aproximadamente 2 a 12 semanas.",
        ],
      },
      {
        kind: "steps",
        title: "Nuestra forma de trabajar",
        steps: [
          {
            title: "Descubrimiento",
            text: "Entendemos el problema, contexto, objetivos y expectativas. Definimos el alcance real del proyecto y la información necesaria.",
          },
          {
            title: "Análisis",
            text: "Estudiamos datos, mercado, competencia, procesos y situación actual. Buscamos no solo síntomas. Buscamos causas.",
          },
          {
            title: "Estrategia",
            text: "Definimos las acciones necesarias, prioridades, KPIs y calendario. La estrategia debe responder a una pregunta sencilla: ¿qué debe cambiar para resolver el problema?",
          },
          {
            title: "Implementación",
            text: "Cuando el alcance lo contempla, acompañamos la puesta en marcha de las acciones definidas. Una recomendación solo genera valor cuando consigue convertirse en una decisión aplicada.",
          },
          {
            title: "Medición",
            text: "Analizamos el resultado y dejamos definidos los criterios necesarios para continuar midiendo la evolución después del proyecto.",
          },
        ],
      },
      {
        kind: "text",
        title: "No todos los problemas necesitan una solución permanente",
        body: [
          "Externalizar completamente Revenue Management puede ser la opción adecuada para determinadas propiedades. Pero no para todas.",
          "Si existe un equipo interno capaz de gestionar el negocio y el problema está claramente localizado, una intervención especializada puede ser una alternativa más eficiente.",
          "Revenue Projects permite acceder a conocimiento senior precisamente donde es necesario.",
        ],
      },
      {
        kind: "list",
        title: "¿Para quién es Revenue Projects?",
        intro: ["Está pensado para propiedades que:"],
        items: [
          "Tienen un problema concreto.",
          "Quieren revisar una parte de su estrategia.",
          "Necesitan implantar una metodología.",
          "Están preparando una nueva apertura.",
          "Quieren revisar pricing o distribución.",
          "Necesitan mejorar forecast o segmentación.",
          "Afrontan una temporada especialmente compleja.",
          "Disponen de equipo interno pero necesitan conocimiento especializado para un proyecto determinado.",
        ],
      },
    ],
    closing: {
      title: "Un problema concreto necesita una respuesta concreta.",
      body: [
        "No se trata de cambiarlo todo. Se trata de identificar qué necesita cambiar y hacerlo correctamente.",
        "Cuéntanos qué reto estás intentando resolver.",
      ],
      cta: "Hablar con Kietel",
    },
  },
  {
    slug: "revenue-audit",
    num: "04",
    title: "Revenue Audit",
    lead: "Detectamos dónde estás dejando dinero sobre la mesa.",
    heroLead: "Detectamos dónde estás dejando dinero sobre la mesa.",
    image: hotelRoom,
    intro: [
      "Antes de cambiar una estrategia, necesitamos entender qué está ocurriendo.",
      "Revenue Audit es una auditoría independiente de la estrategia de Revenue Management de la propiedad, diseñada para identificar oportunidades, detectar ineficiencias y establecer prioridades.",
      "Analizamos el punto de partida desde diferentes perspectivas para responder a tres preguntas fundamentales: ¿qué está funcionando?, ¿qué está limitando los resultados?, ¿qué deberíamos cambiar primero?",
      "El resultado no es únicamente un diagnóstico.",
    ],
    introQuote: "Es un plan de acción priorizado.",
    blocks: [
      {
        kind: "text",
        title: "Una visión independiente del negocio",
        body: [
          "Cuando se trabaja diariamente dentro de una operación es fácil acostumbrarse a determinadas decisiones. Tarifas que siempre se han construido de la misma forma. Promociones que se mantienen porque históricamente han funcionado. Canales que han ganado peso progresivamente. Procesos que nunca se han revisado. Informes que contienen muchos datos pero pocas conclusiones.",
          "Una auditoría introduce algo especialmente valioso: una mirada externa.",
          "Kietel analiza la estrategia sin condicionantes operativos previos para identificar oportunidades que pueden haber quedado ocultas dentro de la rutina diaria.",
        ],
      },
      {
        kind: "features",
        title: "Qué analizamos",
        items: [
          {
            title: "Pricing",
            summary: "¿Estamos vendiendo al precio adecuado?",
            body: [
              "Revisamos arquitectura tarifaria, BAR, descuentos, promociones, restricciones y lógica de pricing.",
              "Analizamos si las diferencias de precio responden a una estrategia o simplemente a decisiones acumuladas con el tiempo.",
              "Buscamos inconsistencias, oportunidades de simplificación y posibles mejoras en la capacidad del establecimiento para capturar demanda.",
            ],
          },
          {
            title: "Demanda",
            summary: "¿Estamos entendiendo cómo reserva realmente nuestro cliente?",
            body: [
              "Analizamos pick-up, forecast, calendario de demanda y ventanas de reserva.",
              "Estudiamos cómo evoluciona la producción antes de cada fecha, qué periodos concentran mayor presión de demanda y dónde existen oportunidades para anticipar decisiones.",
              "La demanda no debe analizarse únicamente cuando llega. Debe intentar anticiparse.",
            ],
          },
          {
            title: "Distribución",
            summary: "¿Estamos utilizando los canales adecuados?",
            body: [
              "Revisamos OTAs, canal directo, mix de canales, disponibilidad y coste de adquisición.",
              "Analizamos qué volumen produce cada canal y qué papel desempeña dentro de la estrategia global.",
              "El objetivo es entender no solo cuánto vende cada canal. También cuánto aporta realmente después de considerar su coste.",
            ],
          },
          {
            title: "Segmentación",
            summary: "¿Sabemos realmente quién está generando nuestros ingresos?",
            body: [
              "Analizamos mercados, segmentos y producción.",
              "Buscamos entender qué tipos de clientes están generando el negocio, cómo se comportan, cuándo reservan y qué potencial representa cada segmento.",
              "Una segmentación correcta permite tomar decisiones de pricing, marketing y distribución mucho más precisas.",
            ],
          },
          {
            title: "Performance",
            summary: "¿Estamos midiendo lo que realmente importa?",
            body: [
              "Revisamos los principales indicadores de rendimiento y su evolución: ADR, RevPAR, ocupación, pick-up, producción, benchmarking y rentabilidad.",
              "Nuestro objetivo es comprobar si el sistema actual de medición permite detectar oportunidades o simplemente describe resultados pasados.",
            ],
          },
          {
            title: "Organización",
            summary: "¿Existe una estructura clara para tomar decisiones?",
            body: [
              "Analizamos procesos, herramientas, responsabilidades y reuniones. ¿Quién decide? ¿Con qué información? ¿Con qué frecuencia? ¿Quién ejecuta? ¿Quién revisa los resultados?",
              "Una buena estrategia puede perder gran parte de su impacto si no existe una estructura adecuada para implementarla.",
            ],
          },
        ],
      },
      {
        kind: "flow",
        title: "Del diagnóstico a las prioridades",
        intro: [
          "No todas las oportunidades tienen la misma importancia. Ni todas deberían abordarse al mismo tiempo. Por eso el resultado de Revenue Audit se estructura en tres niveles:",
        ],
        steps: ["Diagnóstico", "Oportunidades", "Plan de acción priorizado"],
        outro: [
          "Identificamos qué problemas requieren atención inmediata, qué mejoras pueden generar impacto a medio plazo y qué cambios necesitan una transformación más profunda. El objetivo es proporcionar a la propiedad una hoja de ruta clara para avanzar.",
        ],
      },
      {
        kind: "list",
        title: "Qué obtiene la propiedad",
        intro: [
          "Al finalizar la auditoría dispondrás de una visión estructurada de la situación actual del establecimiento. El entregable identifica:",
        ],
        items: [
          "Principales fortalezas.",
          "Ineficiencias detectadas.",
          "Oportunidades de mejora.",
          "Riesgos.",
          "Áreas prioritarias.",
          "Acciones recomendadas.",
          "Orden de implementación.",
        ],
        outro: [
          "No se trata únicamente de saber qué puede mejorarse. Se trata de saber por dónde empezar.",
        ],
      },
      {
        kind: "text",
        title: "Una auditoría también puede ser el comienzo",
        body: [
          "Revenue Audit puede funcionar como un proyecto independiente. Pero también puede ser el primer paso antes de iniciar una colaboración más amplia.",
          "Una auditoría puede confirmar que la estructura actual funciona correctamente y solo necesita ajustes concretos. Puede identificar la necesidad de desarrollar un Revenue Project. Puede recomendar un modelo de acompañamiento Partner. O puede mostrar que la propiedad necesita externalizar completamente la función mediante Revenue Management 360°.",
        ],
        quote: "El diagnóstico permite elegir el modelo adecuado con mayor información.",
      },
      {
        kind: "flow",
        title: "De la auditoría al plan de acción",
        intro: [
          "Cuando es necesario avanzar después del diagnóstico, podemos convertir las prioridades identificadas en una hoja de ruta de implementación. La metodología de Kietel permite pasar de:",
        ],
        steps: ["Analizar", "Priorizar", "Implementar", "Medir", "Optimizar"],
        outro: [
          "De esta forma, la auditoría no termina en la identificación de problemas. Puede convertirse en el punto de partida de una transformación estructurada.",
        ],
      },
      {
        kind: "list",
        title: "¿Para quién es Revenue Audit?",
        intro: ["Está especialmente pensado para hoteles que:"],
        items: [
          "No saben si su estrategia de Revenue está funcionando correctamente.",
          "Necesitan una segunda opinión independiente.",
          "Quieren conocer su margen de mejora.",
          "Tienen buenos niveles de ocupación pero dudas sobre su rentabilidad.",
          "Dependen excesivamente de determinados canales.",
          "Quieren revisar pricing o distribución.",
          "Necesitan ordenar procesos y responsabilidades.",
          "Están planteándose externalizar Revenue Management pero quieren conocer primero su situación.",
          "Quieren identificar oportunidades antes de realizar cambios importantes.",
        ],
      },
    ],
    closing: {
      title: "Antes de decidir qué cambiar, necesitamos saber dónde está la oportunidad.",
      body: [
        "Una auditoría permite transformar sensaciones en datos. Datos en prioridades. Y prioridades en decisiones.",
        "Descubre qué está funcionando, qué está limitando tus resultados y dónde existe margen de mejora.",
      ],
      cta: "Solicitar una auditoría",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
