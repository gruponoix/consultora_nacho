import { Check } from "./icons";

const MODELS = [
  {
    tag: "Estabilidad",
    title: "Fee fijo",
    text: "Un acompañamiento continuo con coste predecible, ideal para externalización y gestión a largo plazo.",
    feats: ["Coste mensual claro", "Equipo dedicado", "Relación a largo plazo"],
  },
  {
    tag: "Alineados contigo",
    title: "Variable sobre resultados",
    text: "Una parte de nuestra remuneración se vincula a la mejora real de tus ingresos. Ganamos cuando tú ganas.",
    feats: ["Objetivos medibles", "Intereses alineados", "Foco en rentabilidad"],
  },
  {
    tag: "A medida",
    title: "Proyecto puntual",
    text: "Un encargo concreto con inicio y fin definidos: auditoría, plan de revenue, lanzamiento o reposicionamiento.",
    feats: ["Alcance acotado", "Entregables claros", "Plazos definidos"],
  },
];

export default function Collab() {
  return (
    <section className="section" aria-labelledby="modelo-h">
      <div className="wrap">
        <div className="section-head center reveal">
          <p className="eyebrow eyebrow--center">Modelo de colaboración</p>
          <h2 className="section-title" id="modelo-h">
            Trabajamos como mejor encaje contigo
          </h2>
          <p className="section-sub">
            Sin precios cerrados de partida: definimos juntos el modelo que más sentido tiene para tu
            hotel y tus objetivos.
          </p>
        </div>
        <div className="collab-grid">
          {MODELS.map((m, i) => (
            <article className="collab reveal" data-d={i ? String(i) : undefined} key={m.title}>
              <p className="collab__tag">{m.tag}</p>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              <ul className="collab__feat">
                {m.feats.map((f) => (
                  <li key={f}>
                    <Check /> {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="collab-note">
          ¿No sabes cuál encaja mejor? Lo definimos juntos en el diagnóstico gratuito, sin
          compromiso.
        </p>
      </div>
    </section>
  );
}
