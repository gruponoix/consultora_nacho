const STEPS = [
  { n: 1, title: "Diagnóstico", text: "Analizamos operación, ingresos y costes para identificar oportunidades reales." },
  { n: 2, title: "Estrategia", text: "Diseñamos un plan a medida con objetivos, palancas y prioridades claras." },
  { n: 3, title: "Implementación", text: "Ejecutamos junto a tu equipo, con seguimiento cercano y responsabilidades definidas." },
  { n: 4, title: "Optimización", text: "Medimos, ajustamos y escalamos lo que funciona para consolidar la rentabilidad." },
];

export default function Method() {
  return (
    <section className="section section--alt" aria-labelledby="metodo-h">
      <div className="wrap">
        <div className="section-head center reveal">
          <p className="eyebrow eyebrow--center">Metodología</p>
          <h2 className="section-title" id="metodo-h">
            Un proceso probado, en cuatro pasos
          </h2>
          <p className="section-sub">
            Una hoja de ruta clara que transforma el diagnóstico inicial en resultados medibles y
            sostenibles.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step reveal" data-d={i ? String(i) : undefined} key={s.n}>
              <div className="step__num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
