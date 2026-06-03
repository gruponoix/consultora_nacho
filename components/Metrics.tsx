const METRICS = [
  { target: 50, prefix: "+", suffix: "", label: "Hoteles asesorados" },
  { target: 25, prefix: "+", suffix: "%", label: "Incremento medio de ingresos" },
  { target: 10, prefix: "+", suffix: "", label: "Años de experiencia" },
  { text: "Internacional", label: "Presencia y proyectos" },
];

export default function Metrics() {
  return (
    <section className="section metrics section--alt" aria-label="Resultados en cifras">
      <div className="wrap">
        <div className="metrics__grid">
          {METRICS.map((m, i) => (
            <div className="metric reveal" data-d={i ? String(i) : undefined} key={m.label}>
              {"target" in m ? (
                <div
                  className="metric__num"
                  data-target={m.target}
                  data-prefix={m.prefix}
                  data-suffix={m.suffix}
                >
                  {m.prefix}0{m.suffix}
                </div>
              ) : (
                <div className="metric__num">{m.text}</div>
              )}
              <div className="metric__label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
