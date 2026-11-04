// "¿Qué analiza un Revenue Manager?" infographic from the article PDF, rebuilt in HTML.

const ICONS: Record<string, React.ReactNode> = {
  bed: (
    <>
      <path d="M3 18V7M21 18v-5a3 3 0 00-3-3H3" />
      <path d="M3 14h18" />
      <path d="M7 10V8h4v2" />
    </>
  ),
  stack: (
    <>
      <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z" />
      <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  people: (
    <>
      <path d="M9 11a3 3 0 100-6 3 3 0 000 6zM3 20v-1a6 6 0 0112 0v1" />
      <path d="M16 11a3 3 0 000-6M21 20v-1a6 6 0 00-4-5.6" />
    </>
  ),
  calendar: (
    <>
      <path d="M4 6h16v15H4zM4 10h16M8 3v4M16 3v4" />
      <path d="M8 14h2M12 14h2M16 14h0M8 17h2M12 17h2" />
    </>
  ),
  bars: (
    <>
      <path d="M5 20V12M10 20V8M15 20v-6M20 20V5" />
    </>
  ),
  share: (
    <>
      <path d="M6 15a3 3 0 100-6 3 3 0 000 6zM18 8a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M8.6 10.6l6.8-4.2M8.6 13.4l6.8 4.2" />
    </>
  ),
  sun: (
    <>
      <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  star: (
    <>
      <path d="M12 3l2.6 5.6 6.1.7-4.5 4.1 1.2 6L12 16.4 6.6 19.4l1.2-6L3.3 9.3l6.1-.7z" />
    </>
  ),
  cancel: (
    <>
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </>
  ),
  clock: (
    <>
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  coins: (
    <>
      <path d="M3 6c0-1.4 2.7-2.5 6-2.5s6 1.1 6 2.5-2.7 2.5-6 2.5S3 7.4 3 6z" />
      <path d="M3 6v10c0 1.4 2.7 2.5 6 2.5" />
      <path d="M3 11c0 1.4 2.7 2.5 6 2.5" />
      <path d="M16 21a5 5 0 100-10 5 5 0 000 10z" />
      <path d="M17.5 14.2a2 2 0 10 0 3.6M14 15.5h3M14 16.8h3" />
    </>
  ),
};

const VARIABLES = [
  { icon: "bed", title: "Ocupación", text: "Qué porcentaje del inventario está vendido y cómo evoluciona frente a las previsiones." },
  { icon: "stack", title: "Precio medio", text: "Cuánto ingreso genera, de media, cada habitación vendida (ADR)." },
  { icon: "people", title: "Demanda", text: "Cuánto interés existe por alojarse en el establecimiento para unas fechas determinadas." },
  { icon: "calendar", title: "Anticipación de las reservas", text: "Con cuánta antelación están reservando los clientes y cómo cambia ese comportamiento." },
  { icon: "bars", title: "Competencia", text: "Qué precios, disponibilidad y condiciones ofrece el mercado para las mismas fechas." },
  { icon: "share", title: "Canal de venta", text: "Qué peso tiene cada canal —web directa, OTAs, agencias, touroperadores, etc.— y qué rentabilidad aporta." },
  { icon: "sun", title: "Estacionalidad", text: "Cómo afectan las diferentes temporadas del año al comportamiento de la demanda." },
  { icon: "star", title: "Eventos y fechas especiales", text: "Ferias, festividades, conciertos, congresos o cualquier acontecimiento que pueda alterar la demanda." },
  { icon: "cancel", title: "Cancelaciones", text: "Qué porcentaje de las reservas se cancela y cómo afecta al inventario disponible." },
  { icon: "clock", title: "Duración de la estancia", text: "Cuántas noches permanece el cliente y cómo influye en la estrategia de precios y disponibilidad." },
  { icon: "coins", title: "Rentabilidad de cada reserva", text: "No todas las reservas generan el mismo beneficio. El coste del canal, las condiciones de la tarifa y otros factores determinan su rentabilidad real." },
];

export default function RevenueManagerInfographic() {
  return (
    <section className="rmi" aria-labelledby="rmi-h">
      <p className="rmi__kicker">Revenue Management hotelero</p>
      <h3 className="rmi__title" id="rmi-h">
        ¿Qué analiza un <em>Revenue Manager</em>?
      </h3>
      <p className="rmi__sub">
        El Revenue Management analiza diferentes variables que, combinadas, permiten tomar mejores
        decisiones sobre precio, disponibilidad y estrategia de venta.
      </p>
      <ol className="rmi__grid">
        {VARIABLES.map((v, i) => (
          <li key={v.title} className="rmi__card reveal" data-d={String((i % 4) + 1)}>
            <div className="rmi__head">
              <span className={`rmi__icon rmi__icon--${i % 2 ? "sand" : "sage"}`} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[v.icon]}
                </svg>
              </span>
              <div>
                <span className="rmi__num">{String(i + 1).padStart(2, "0")}.</span>
                <h4>{v.title}</h4>
              </div>
            </div>
            <p>{v.text}</p>
          </li>
        ))}
      </ol>
      <div className="rmi__foot">
        <p className="rmi__foot-main">
          <span>El verdadero valor del Revenue Management está en</span>
          conectar todas estas variables.
        </p>
        <p className="rmi__foot-side">
          No se trata únicamente de vender más habitaciones, sino de vender{" "}
          <strong>
            la habitación adecuada, al cliente adecuado, por el canal adecuado, en el momento
            adecuado y al precio adecuado.
          </strong>
        </p>
      </div>
    </section>
  );
}
