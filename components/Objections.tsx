import Image from "next/image";
import { ShieldCheck, Users, Star, Activity } from "./icons";

const OBJECTIONS = [
  {
    Icon: ShieldCheck,
    title: "Sigues teniendo el control",
    text: "Trabajamos con total transparencia y reporting continuo. Las decisiones estratégicas siempre son tuyas; nosotros aportamos criterio y ejecución.",
  },
  {
    Icon: Users,
    title: "Confianza y confidencialidad",
    text: "Tratamos tus datos, tu marca y tu equipo con el máximo cuidado. Construimos relaciones a largo plazo basadas en la honestidad.",
  },
  {
    Icon: Star,
    title: "Orientados a resultados",
    text: "Definimos objetivos medibles desde el primer día y alineamos buena parte de nuestro modelo a tu rendimiento real.",
  },
  {
    Icon: Activity,
    title: "Flexibilidad total",
    text: "Puedes recuperar la gestión interna cuando quieras. Dejamos procesos, formación y equipos preparados para que tu hotel siga creciendo.",
  },
];

export default function Objections() {
  return (
    <section className="section section--alt" aria-labelledby="porque-h">
      <div className="wrap obj-layout">
        <div className="obj-aside reveal">
          <div className="media">
            <Image
              src="/images/reception.jpg"
              alt="Recepción de hotel con detalle cálido"
              fill
              sizes="(max-width: 1080px) 0px, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div>
          <div className="section-head reveal" style={{ marginBottom: 38 }}>
            <p className="eyebrow">¿Por qué externalizar?</p>
            <h2 className="section-title" id="porque-h">
              Tú mantienes el control. Nosotros, los resultados.
            </h2>
            <p className="section-sub">
              Externalizar no significa ceder tu hotel: significa sumar un equipo experto que rema en
              tu misma dirección.
            </p>
          </div>
          <div className="obj-list">
            {OBJECTIONS.map(({ Icon, title, text }, i) => (
              <article className="obj reveal" data-d={i ? String(i) : undefined} key={title}>
                <div className="obj__icn" aria-hidden="true">
                  <Icon />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
