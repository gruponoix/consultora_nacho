"use client";

import { useRef, useState } from "react";
import { Arrow } from "./icons";

const FAQS = [
  {
    q: "¿Cómo garantizáis resultados?",
    a: "Partimos siempre de un diagnóstico riguroso y fijamos objetivos medibles antes de empezar. Buena parte de nuestro modelo puede vincularse a tu rendimiento real, de modo que nuestros incentivos están alineados con los tuyos. No prometemos milagros: comprometemos método, seguimiento y responsabilidad.",
  },
  {
    q: "¿Qué modelo de colaboración ofrecéis?",
    a: "Trabajamos con tres fórmulas: fee fijo para acompañamiento continuo, variable sobre resultados, y proyecto puntual con alcance cerrado. Lo habitual es combinar una base fija con una parte variable. Definimos el modelo concreto contigo durante el diagnóstico inicial.",
  },
  {
    q: "¿Puedo recuperar la gestión interna más adelante?",
    a: "Por supuesto. Trabajamos para hacerte autónomo, no dependiente. Dejamos procesos documentados, herramientas implantadas y a tu equipo formado, de manera que puedas internalizar la gestión cuando lo decidas con total continuidad.",
  },
  {
    q: "¿Hay una duración mínima de colaboración?",
    a: "Depende del servicio. Los proyectos puntuales tienen inicio y fin definidos. Para externalización y gestión operativa recomendamos un mínimo de seis meses, el tiempo necesario para implantar cambios y ver resultados sostenidos, pero siempre lo adaptamos a tu situación.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="section section--alt" aria-labelledby="faq-h">
      <div className="wrap faq-layout">
        <div className="faq-aside reveal">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-h">Resolvemos tus dudas</h2>
          <p>¿Tienes otra pregunta? Escríbenos y te respondemos sin compromiso.</p>
          <a href="#contacto" className="btn btn--gold">
            Hablar con nosotros <Arrow />
          </a>
        </div>
        <div className="faq-list reveal" data-d="1">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-q__icon" aria-hidden="true" />
                </button>
                <div
                  className="faq-a"
                  style={{ height: isOpen ? innerRefs.current[i]?.offsetHeight ?? 0 : 0 }}
                >
                  <div
                    className="faq-a__inner"
                    ref={(el) => {
                      innerRefs.current[i] = el;
                    }}
                  >
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
