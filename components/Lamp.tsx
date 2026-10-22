import { Star, Clock, Eye, Heart } from "./icons";

const VALUES = [
  { Icon: Star, title: "Resultados", text: "Impacto real y medible." },
  { Icon: Clock, title: "Estrategia a medida", text: "Cada plan es único." },
  { Icon: Eye, title: "Transparencia", text: "Datos claros, comunicación honesta." },
  { Icon: Heart, title: "Compromiso", text: "Relaciones a largo plazo." },
];

export default function Lamp() {
  return (
    <section className="lamp" aria-label="Nuestro fundador">
      <div className="lamp__stage">
        <div className="lamp__light" aria-hidden="true">
          <div className="beam beam--l" />
          <div className="beam beam--r" />
          <div className="lamp__floor" />
          <div className="lamp__haze" />
          <div className="lamp__glow" />
          <div className="lamp__halo" />
          <div className="lamp__line" />
          <div className="lamp__cap" />
        </div>

        <div className="lamp__content">
          <div className="lamp__inner">
            <div className="lamp__photo">
              <div className="ph" data-label="Foto — Ignacio Góngora, CEO" />
              <div className="lamp__badge">
                <div className="n">+10</div>
                <div className="l">años en hotelería</div>
              </div>
            </div>
            <div>
              <p className="lamp__name">Ignacio Góngora Espada</p>
              <p className="lamp__role">CEO &amp; Fundador · Kietel Revenue · Málaga</p>
              <p className="lamp__bio">
                Kietel nace de la convicción de que cada hotel tiene un potencial sin explotar. Con
                más de una década dirigiendo y asesorando hoteles, acompañamos a propietarios y
                cadenas para convertir buenas instalaciones en negocios verdaderamente rentables,
                combinando rigor analítico con una mirada humana de la hospitalidad.
              </p>
              <div className="lamp__values">
                {VALUES.map(({ Icon, title, text }) => (
                  <div className="lamp__value" key={title}>
                    <Icon />
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
