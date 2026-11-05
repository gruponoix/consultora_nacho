import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Arrow } from "@/components/icons";
import { ChannelMixChart, HotelComparisonChart } from "@/components/blog/Charts";
import RevenueManagerInfographic from "@/components/blog/RevenueManagerInfographic";
import { OG_IMAGE } from "@/lib/seo";
import heroImg from "@/public/images/blog-dashboard.jpg";

// Copy and layout from the client's article PDF (docs/BLOGS 1 (1).pdf), including its SEO brief.
export const metadata: Metadata = {
  title: "Revenue Management: cómo aumentar la rentabilidad de tu hotel | Kietel",
  description:
    "Descubre qué es el Revenue Management y cómo una estrategia de precios, demanda y distribución puede aumentar la rentabilidad de tu hotel.",
  keywords: [
    "Revenue Management hotel",
    "revenue management hotelero",
    "gestión de ingresos hotel",
    "revenue manager",
    "estrategia de precios hotel",
    "rentabilidad hotelera",
    "pricing hotel",
  ],
  alternates: { canonical: "/blog/revenue-management-hotel" },
  openGraph: {
    type: "article",
    title: "¿Qué es el Revenue Management y cómo puede aumentar la rentabilidad de tu hotel?",
    description:
      "Descubre qué es el Revenue Management y cómo una estrategia de precios, demanda y distribución puede aumentar la rentabilidad de tu hotel.",
    images: [OG_IMAGE],
  },
};

const List = ({ items }: { items: string[] }) => (
  <ul className="art-list">
    {items.map((it) => (
      <li key={it}>{it}</li>
    ))}
  </ul>
);

const KPIS = [
  {
    title: "Ocupación",
    tone: "sage",
    body: (
      <>
        <p>Indica qué porcentaje de las habitaciones disponibles se han vendido.</p>
        <p>Es un KPI fundamental, pero no debería analizarse de manera aislada.</p>
        <p>
          Una ocupación del 90% puede ser excelente o puede significar que el hotel está vendiendo
          demasiado barato.
        </p>
      </>
    ),
  },
  {
    title: "ADR: Average Daily Rate",
    tone: "sand",
    body: (
      <>
        <p>
          <strong>El ADR representa el precio medio de venta de las habitaciones.</strong>
        </p>
        <p>
          <strong>La fórmula básica es:</strong>
        </p>
        <code>ADR = ingresos por habitaciones / habitaciones vendidas</code>
        <p>
          <strong>Permite conocer a qué precio medio estamos vendiendo nuestro inventario.</strong>
        </p>
      </>
    ),
  },
  {
    title: "RevPAR",
    tone: "sand",
    body: (
      <>
        <p>
          El RevPAR relaciona los ingresos de habitaciones con el número total de habitaciones
          disponibles.
        </p>
        <p>Una fórmula sencilla es:</p>
        <code>RevPAR = ingresos por habitaciones / habitaciones disponibles</code>
        <p>También puede calcularse:</p>
        <code>RevPAR = ADR × ocupación</code>
        <p>
          Es uno de los indicadores más utilizados para analizar el rendimiento de un hotel porque
          combina dos variables fundamentales: precio y ocupación.
        </p>
      </>
    ),
  },
  {
    title: "GOPPAR",
    tone: "sage",
    body: (
      <>
        <p>
          <strong>
            Cuando queremos ir un paso más allá, podemos analizar el GOPPAR, que relaciona el
            beneficio operativo bruto con las habitaciones disponibles.
          </strong>
        </p>
        <p>
          <strong>
            Esto nos permite acercarnos mucho más a la verdadera rentabilidad del establecimiento.
          </strong>
        </p>
        <p>
          <strong>
            Porque una habitación vendida no tiene el mismo valor si la reserva llega a través de un
            canal con una comisión elevada, si genera costes adicionales o si requiere descuentos
            importantes.
          </strong>
        </p>
      </>
    ),
  },
];

const DEMAND = [
  { text: "Una demanda muy elevada durante un evento.", level: "alta" },
  { text: "Una demanda media durante un fin de semana normal.", level: "media" },
  { text: "Una demanda baja entre semana.", level: "baja" },
  { text: "Una temporada alta claramente definida.", level: "alta" },
  { text: "Periodos de baja demanda durante determinados meses.", level: "baja" },
];

const CHANNEL_CARDS = [
  {
    icon: "🌐",
    name: "Venta directa",
    tag: "Mayor control",
    pros: [
      "Menor coste de distribución = mayor rentabilidad",
      "Relación directa con el cliente.",
      "Mayor fidelización.",
      "Oportunidad de venta cruzada.",
    ],
    goal: "aumentar el peso de la venta directa de forma rentable.",
    tone: "sage",
  },
  {
    icon: "🛏️",
    name: "OTAs",
    tag: "Gran capacidad de captación",
    pros: [
      "Mayor visibilidad.",
      "Acceso a nuevos mercados.",
      "Volumen de reservas.",
      "Pero también comisión y dependencia.",
    ],
    goal: "utilizarlas estratégicamente, no depender de ellas.",
    tone: "mist",
  },
  {
    icon: "👥",
    name: "Agencias / TTOO",
    tag: "Volumen y mercados específicos",
    pros: [
      "Acceso a determinados segmentos.",
      "Posibilidad de trabajar anticipadamente.",
      "Condiciones comerciales específicas.",
    ],
    goal: "valorar el coste y rentabilidad real de cada acuerdo.",
    tone: "sand",
  },
  {
    icon: "💼",
    name: "Empresas",
    tag: "Segmentación y recurrencia",
    pros: [
      "Demanda más estable.",
      "Potencial de repetición.",
      "Menor dependencia de determinados periodos.",
    ],
    goal: "desarrollar segmentos rentables.",
    tone: "mist",
  },
];

const BENEFITS = [
  { title: "Aumentar el ingreso por habitación", text: "Mediante una mejor gestión de precios y disponibilidad." },
  { title: "Mejorar el RevPAR", text: "Buscando el equilibrio adecuado entre ocupación y ADR." },
  { title: "Aprovechar los momentos de alta demanda", text: "Evitando vender demasiado barato cuando el mercado está dispuesto a pagar más." },
  { title: "Mejorar la temporada baja", text: "Analizando demanda, mercados, promociones, restricciones y estrategias específicas para periodos de menor ocupación." },
  { title: "Reducir la dependencia de determinados canales", text: "Trabajando una estrategia de distribución equilibrada y potenciando la venta directa." },
  { title: "Tomar decisiones basadas en datos", text: "Reduciendo la dependencia de decisiones intuitivas o basadas únicamente en lo que hace la competencia." },
];

export default function RevenueManagementArticle() {
  return (
    <>
      <Header overImage />
      <main>
        <section className="svc-hero art-hero">
          <div className="svc-hero__bg">
            <Image
              src={heroImg}
              alt="Equipo de un hotel revisando un dashboard de Revenue Management"
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
            <p className="eyebrow eyebrow--center">Kietel Insights · Revenue Management</p>
            <h1 className="svc-hero__title art-hero__title">
              ¿Qué es el Revenue Management y cómo puede aumentar la rentabilidad de tu hotel?
            </h1>
            <p className="svc-hero__lead">4 de noviembre de 2026 · 10 min de lectura</p>
          </div>
        </section>

        <article className="section art">
          <div className="art__body">
            <h2>¿Tu hotel podría estar generando más ingresos, pero no sabes dónde está la oportunidad?</h2>
            <p>
              Tener una buena ocupación no siempre significa obtener la máxima rentabilidad. Un precio
              inadecuado, una mala gestión de la demanda o una excesiva dependencia de determinados
              canales pueden hacer que tu hotel deje escapar ingresos.
            </p>
            <p>
              El <strong>Revenue Management</strong> permite analizar estos factores y tomar mejores
              decisiones sobre precios, disponibilidad y distribución para vender cada habitación{" "}
              <strong>al cliente adecuado, en el momento adecuado y al precio adecuado</strong>.
            </p>
            <p>
              En Kietel ayudamos a hoteles y apartamentos turísticos a transformar sus datos en
              decisiones que mejoren su{" "}
              <strong>rentabilidad, estrategia de precios y venta directa</strong>.
            </p>
            <p>
              En este artículo te explicamos qué es el Revenue Management y cómo puede ayudarte a
              mejorar los resultados de tu establecimiento.
            </p>

            <div className="art-callout art-callout--serif reveal">
              El Revenue Management es una estrategia de gestión que permite tomar mejores decisiones
              sobre <strong>precio, disponibilidad, demanda y distribución</strong>, con un objetivo
              claro:{" "}
              <strong>
                maximizar los ingresos y la rentabilidad de cada habitación disponible
              </strong>
              .
            </div>

            <ol className="art-flow reveal" aria-label="Del dato a la rentabilidad">
              <li>📊 Datos</li>
              <li>📈 Demanda</li>
              <li>💶 Precio</li>
              <li>🎯 Rentabilidad</li>
            </ol>
            <p className="art-center">
              <em>Analizar lo que está ocurriendo para anticiparse a lo que va a ocurrir.</em>
            </p>
            <p>
              En Kietel entendemos el Revenue Management como algo más que cambiar tarifas. Se trata
              de analizar el comportamiento de la demanda, anticiparse al mercado y tomar decisiones
              basadas en datos para que cada habitación se venda{" "}
              <strong>
                al cliente adecuado, en el momento adecuado, por el canal adecuado y al precio
                adecuado
              </strong>
              .
            </p>

            <h2>¿Qué es exactamente el Revenue Management hotelero?</h2>
            <p>
              El Revenue Management hotelero consiste en utilizar información y análisis para
              determinar <strong>cuándo vender, a qué precio y bajo qué condiciones</strong> las
              habitaciones de un establecimiento.
            </p>
            <p>
              La idea parte de una realidad muy sencilla: una habitación de hotel es un producto
              perecedero.
            </p>
            <p>
              Si esta noche tienes una habitación vacía, mañana ya no puedes vender esa noche. El
              inventario que no se ha vendido se pierde.
            </p>
            <p>
              Por eso, el objetivo no debería ser simplemente conseguir que todas las habitaciones
              estén ocupadas, sino encontrar el equilibrio entre:
            </p>
          </div>

          <div className="art__wide">
            <RevenueManagerInfographic />
          </div>

          <div className="art__body">
            <p>
              El Revenue Management convierte todos estos factores en información útil para tomar
              decisiones.
            </p>

            <h2>¿Por qué es importante para un hotel?</h2>
            <p>Imagina dos hoteles con 100 habitaciones.</p>
            <p>
              El Hotel A consigue una ocupación media del 85% durante el año, con un precio medio de
              80 €.
            </p>
            <p>
              El Hotel B consigue una ocupación del 78%, pero vende sus habitaciones a un precio medio
              de 105 €.
            </p>
            <p>
              A primera vista, podría parecer que el Hotel A funciona mejor porque tiene mayor
              ocupación. Pero si analizamos los ingresos por habitación disponible, la situación
              cambia.
            </p>
            <p>El Hotel A obtiene un RevPAR aproximado de:</p>
            <p className="art-formula">85% × 80 € = 68 €</p>
            <p>El Hotel B obtiene:</p>
            <p className="art-formula">78% × 105 € = 81,90 €</p>

            <HotelComparisonChart />

            <p>
              El Hotel B tiene una ocupación inferior, pero genera más ingresos por habitación
              disponible.
            </p>
            <p>Este ejemplo rápido demuestra una de las ideas fundamentales del Revenue Management:</p>
            <p>
              <strong>Más ocupación no siempre significa más rentabilidad.</strong>
            </p>
            <p>La clave está en encontrar el equilibrio adecuado entre precio y ocupación.</p>

            <h2>Los principales indicadores que debe controlar un hotel</h2>
            <p>Para tomar buenas decisiones de Revenue es necesario analizar diferentes indicadores.</p>
            <div className="art-kpis">
              {KPIS.map((k) => (
                <div key={k.title} className={`art-kpi art-kpi--${k.tone} reveal`}>
                  <h3>{k.title}</h3>
                  {k.body}
                </div>
              ))}
            </div>

            <h2>El Revenue Management no consiste solamente en subir o bajar precios</h2>
            <p>Este es uno de los errores más habituales al hablar de Revenue.</p>
            <p>El Revenue Manager no debería limitarse a decidir:</p>
            <blockquote className="art-quote">“Hoy subimos el precio 10 €.”</blockquote>
            <p>Detrás de una estrategia profesional debe existir un análisis mucho más amplio.</p>
            <p>Por ejemplo:</p>
            <List
              items={[
                "¿Cuántas habitaciones hemos vendido para esa fecha?",
                "¿A qué ritmo están entrando las reservas?",
                "¿Cuántos días faltan para la llegada?",
                "¿Cómo está nuestra competencia?",
                "¿Existe algún evento en el destino?",
                "¿Qué precios tenemos abiertos en cada canal?",
                "¿Cuál es nuestra previsión de ocupación?",
                "¿Qué tipo de cliente está reservando?",
                "¿Cuánto está dispuesto a pagar?",
                "¿Qué porcentaje de habitaciones queremos mantener disponibles?",
                "¿Qué restricciones debemos aplicar?",
                "¿Cuál es el coste de adquisición de cada reserva?",
              ]}
            />
            <p>Con toda esta información podemos tomar decisiones mucho más precisas.</p>

            <h2>El Pick Up: entender el ritmo de reservas</h2>
            <p>
              Uno de los conceptos fundamentales en Revenue Management es el <strong>Pick Up</strong>.
            </p>
            <p>
              El Pick Up nos permite conocer cuántas reservas nuevas estamos recibiendo para una
              determinada fecha durante un periodo concreto.
            </p>
            <p>
              Por ejemplo, imaginemos que hoy quedan 30 días para una fecha determinada y tenemos 50
              habitaciones reservadas.
            </p>
            <p>
              Si durante los próximos días observamos que el ritmo de reservas aumenta rápidamente,
              probablemente exista una demanda fuerte.
            </p>
            <p>
              En ese escenario, mantener un precio demasiado bajo puede provocar que vendamos
              demasiado pronto las habitaciones disponibles.
            </p>
            <p>
              Por el contrario, si la demanda está siendo inferior a la prevista, quizá sea necesario
              revisar nuestra estrategia.
            </p>
            <p>
              El objetivo es <strong>anticiparnos</strong>, no reaccionar cuando ya sea demasiado
              tarde.
            </p>

            <h2>La demanda cambia constantemente</h2>
            <p>
              Uno de los motivos por los que utilizar una estrategia de precios estática puede limitar
              la rentabilidad de un hotel es que la demanda no es constante.
            </p>
            <p>El mismo hotel puede tener:</p>
            <table className="art-demand reveal">
              <tbody>
                {DEMAND.map((d) => (
                  <tr key={d.text}>
                    <td>{d.text}</td>
                    <td className={`art-demand__tag art-demand__tag--${d.level}`}>Demanda {d.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              Por eso, utilizar el mismo precio durante todo el año puede significar perder
              oportunidades.
            </p>
            <p>
              El <strong>pricing dinámico</strong> permite adaptar los precios a las condiciones
              reales del mercado y a la demanda prevista.
            </p>
            <p>No significa subir precios constantemente.</p>
            <p>
              Significa <strong>vender cada habitación al precio que tenga sentido en cada momento</strong>
              .
            </p>

            <h2>La competencia también importa</h2>
            <p>Un hotel no establece sus precios en un vacío.</p>
            <p>Los clientes comparan. Por eso es importante conocer qué está haciendo el mercado:</p>
            <List
              items={[
                "¿Qué precios tienen nuestros competidores?",
                "¿Qué disponibilidad tienen?",
                "¿Qué categorías están vendiendo?",
                "¿Qué condiciones ofrecen?",
                "¿Cómo evolucionan sus precios?",
                "¿Qué posicionamiento tienen respecto a nuestro establecimiento?",
              ]}
            />
            <div className="art-callout">
              Sin embargo, copiar automáticamente los precios de la competencia tampoco es una
              estrategia de Revenue.
            </div>
            <p>
              Si un competidor baja sus precios, no significa necesariamente que nuestro hotel deba
              hacer lo mismo.
            </p>
            <p>La pregunta correcta es:</p>
            <p>
              <strong>
                ¿Qué precio maximiza nuestros ingresos teniendo en cuenta nuestra propia demanda,
                posicionamiento y disponibilidad?
              </strong>
            </p>

            <h2>Revenue Management y distribución: no todas las reservas valen lo mismo</h2>
            <p>Otro aspecto fundamental es el canal de venta.</p>
            <p>
              Una reserva directa a través de la web del hotel y una reserva realizada mediante una
              OTA pueden tener precios similares para el cliente, pero no necesariamente tienen el
              mismo valor para el hotel.
            </p>
            <p>
              Las comisiones, costes de adquisición, promociones, condiciones de cancelación y otros
              factores pueden modificar considerablemente la rentabilidad real de cada reserva.
            </p>
            <p>
              Por eso, una estrategia de Revenue debe analizar también el <strong>Channel Mix</strong>.
            </p>
            <p>No se trata simplemente de conseguir más reservas.</p>
            <p>
              Se trata de conseguir <strong>reservas rentables</strong>.
            </p>
            <p>Una estrategia adecuada puede ayudar a decidir cuándo potenciar:</p>
            <List
              items={[
                "Venta directa.",
                "OTAs.",
                "Agencias.",
                "Touroperación.",
                "Empresas.",
                "Grupos.",
                "Otros canales de distribución.",
              ]}
            />
            <p>Adjuntamos un ejemplo práctico ficticio.</p>

            <ChannelMixChart />

            <h3 className="art-h3">Cada canal tiene sus ventajas… y sus costes</h3>
            <div className="art-channels">
              {CHANNEL_CARDS.map((c) => (
                <div key={c.name} className="art-channel reveal">
                  <div className="art-channel__main">
                    <h4>
                      <span aria-hidden="true">{c.icon}</span> {c.name}
                    </h4>
                    <p className="art-channel__tag">{c.tag}</p>
                    <ul>
                      {c.pros.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={`art-channel__goal art-channel__goal--${c.tone}`}>
                    <span>Objetivo:</span>
                    <strong>{c.goal}</strong>
                  </div>
                </div>
              ))}
            </div>
            <div className="art-callout art-callout--icon reveal">
              <span aria-hidden="true">🎯</span>
              <div>
                <strong>No se trata de eliminar canales.</strong>
                <strong>Se trata de encontrar el mix más rentable para tu hotel.</strong>
              </div>
            </div>
          </div>

          <div className="art__wide">
            <div className="art-cost reveal">
              <p className="art-cost__title">¿Sabes cuánto te cuesta realmente cada reserva?</p>
              <ol className="art-cost__terms">
                <li>Precio de venta</li>
                <li>Comisión</li>
                <li>Coste de adquisición</li>
                <li>Descuentos</li>
                <li>Costes asociados al canal</li>
              </ol>
              <span className="art-cost__eq" aria-hidden="true">
                =
              </span>
              <p className="art-cost__result">Ingreso neto real</p>
            </div>
          </div>

          <div className="art__body">
            <p>
              El objetivo es encontrar una combinación de canales que permita maximizar la
              rentabilidad y reducir dependencias innecesarias.
            </p>

            <h2>Revenue Management y venta directa deben trabajar juntos</h2>
            <p>
              Una estrategia de Revenue no debería estar desconectada de la estrategia de marketing y
              venta directa.
            </p>
            <p>
              Puedes tener una excelente política de precios, pero si tu web no convierte, estarás
              perdiendo oportunidades.
            </p>
            <p>
              Puedes invertir en SEO y SEM, pero si tu estrategia de pricing no es competitiva, parte
              de ese tráfico puede terminar reservando en otro canal.
            </p>
            <p>
              Por eso, en Kietel consideramos especialmente importante trabajar de forma coordinada:
            </p>
            <ol className="art-flow art-flow--boxes reveal">
              <li>Revenue</li>
              <li>Distribución</li>
              <li>Marketing</li>
              <li>Venta directa</li>
            </ol>
            <p>
              La combinación de estas áreas permite analizar no solamente cuánto se vende, sino{" "}
              <strong>cómo se vende y cuánto valor genera cada reserva</strong>.
            </p>

            <h2>¿Qué beneficios puede aportar el Revenue Management a un hotel?</h2>
            <p>Una estrategia profesional puede ayudar a un establecimiento a:</p>
            <div className="art-benefits">
              {BENEFITS.map((b) => (
                <div key={b.title} className="art-benefit reveal">
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
              <div className="art-benefit art-benefit--wide reveal">
                <h3>Mejorar la rentabilidad global</h3>
                <p>
                  Porque el objetivo final del Revenue Management no es simplemente aumentar la
                  ocupación, sino <strong>generar más valor para el establecimiento</strong>.
                </p>
              </div>
            </div>

            <h2>¿Necesita mi hotel un Revenue Manager?</h2>
            <p>No existe una única respuesta.</p>
            <p>
              Dependerá del tamaño del establecimiento, número de habitaciones, estacionalidad,
              mercados, competencia, canales de distribución y objetivos de la propiedad.
            </p>
            <p>
              Un hotel pequeño puede beneficiarse enormemente de una estrategia profesional de
              Revenue, aunque no necesite incorporar un Revenue Manager a tiempo completo.
            </p>
            <p>
              Precisamente por eso, la externalización del Revenue Management puede ser una
              alternativa interesante para muchos hoteles independientes, hoteles boutique y
              apartamentos turísticos.
            </p>
            <p>
              Permite acceder a conocimiento especializado y herramientas de análisis sin asumir
              necesariamente el coste de incorporar un departamento interno completo.
            </p>

            <h2>El Revenue Management también es para hoteles pequeños y apartamentos turísticos</h2>
            <p>
              Durante mucho tiempo se ha relacionado el Revenue Management principalmente con grandes
              cadenas hoteleras.
            </p>
            <p>
              Pero la realidad es que cualquier establecimiento que tenga un inventario limitado y una
              demanda variable puede beneficiarse de una estrategia de Revenue.
            </p>
            <p>
              Hoteles independientes, hoteles boutique, alojamientos rurales y apartamentos
              turísticos también pueden utilizar principios de:
            </p>
            <List
              items={[
                "Pricing dinámico.",
                "Análisis de demanda.",
                "Previsión de ocupación.",
                "Gestión de canales.",
                "Segmentación.",
                "Optimización de ingresos.",
                "Venta directa.",
              ]}
            />
            <p>
              La escala del establecimiento puede cambiar las herramientas utilizadas, pero no la
              necesidad de tomar buenas decisiones.
            </p>

            <h2>¿Cuál es el objetivo final del Revenue Management?</h2>
            <p>El objetivo no es tener el hotel lleno.</p>
            <p>Tampoco es vender siempre más caro.</p>
            <p>Y mucho menos copiar los precios de la competencia.</p>
            <p>
              El verdadero objetivo es conseguir que el establecimiento{" "}
              <strong>
                maximice sus ingresos y su rentabilidad en función de la demanda disponible
              </strong>
              .
            </p>
            <p>En otras palabras:</p>
            <div className="art-callout art-callout--big reveal">
              Vender la habitación adecuada, al cliente adecuado, en el momento adecuado, por el
              canal adecuado y al precio adecuado.
            </div>
            <p>Ese es el verdadero valor del Revenue Management.</p>

            <h2>¿Cómo puede ayudarte Kietel?</h2>
            <p>
              En Kietel Revenue Management trabajamos con hoteles y apartamentos turísticos para
              analizar sus estrategias de{" "}
              <strong>Revenue, pricing, distribución y venta directa</strong>.
            </p>
            <p>
              Nuestro objetivo es identificar oportunidades de mejora y convertir los datos del
              establecimiento en decisiones que ayuden a mejorar su rentabilidad.
            </p>
            <p>Analizamos factores como:</p>
            <List
              items={[
                "Estrategia de precios.",
                "Ocupación y ADR.",
                "RevPAR y principales KPIs.",
                "Pick Up y ritmo de reservas.",
                "Demanda y estacionalidad.",
                "Competencia.",
                "Distribución y Channel Mix.",
                "Dependencia de OTAs.",
                "Venta directa.",
                "SEO y SEM.",
                "Estrategia comercial.",
              ]}
            />
            <p>Porque creemos que el Revenue Management no debe limitarse a gestionar tarifas.</p>
            <p>
              Debe formar parte de una{" "}
              <strong>estrategia global de rentabilidad para el establecimiento</strong>.
            </p>

            <div className="art-cta reveal">
              <h2>¿Quieres saber si tu hotel está aprovechando todo su potencial?</h2>
              <p>
                En Kietel podemos analizar tu situación actual y detectar oportunidades de mejora en
                Revenue, pricing, distribución y venta directa.
              </p>
              <p className="art-cta__strong">
                Contacta con nosotros y descubre dónde puede estar perdiendo ingresos tu
                establecimiento.
              </p>
              <Link href="/contacto" className="btn btn--gold">
                Solicita un análisis de Revenue para tu establecimiento <Arrow />
              </Link>
            </div>

            <p className="art-back">
              <Link href="/blog">← Volver al blog</Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
