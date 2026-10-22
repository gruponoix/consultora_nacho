"use client";

import { useEffect, useState } from "react";

type Review = { id: number; text: string; name: string; role: string; initials: string };

const REVIEWS: Review[] = [
  { id: 0, text: "Pasamos de depender de las OTAs a tener un canal directo sólido. El impacto en márgenes fue inmediato.", name: "Elena Vidal", role: "Directora · Marbella Resort & Spa", initials: "EV" },
  { id: 1, text: "Nos dieron orden, datos y un plan. Hoy gestionamos nuestros tres hoteles con una claridad que no teníamos.", name: "Marta Ferrer", role: "CEO · Costa Nova Collection", initials: "MF" },
  { id: 2, text: "Profesionales y cercanos. Entendieron nuestro hotel boutique sin perder su esencia.", name: "Lucía Romero", role: "Propietaria · Solana Boutique", initials: "LR" },
  { id: 3, text: "En seis meses cambiaron por completo nuestra forma de vender. Recomendable al 100%.", name: "Javier Soto", role: "Propietario · Lúmina Urban Hotel", initials: "JS" },
  { id: 4, text: "El reporting mensual nos dio una visibilidad de negocio que nunca habíamos tenido.", name: "Diego Cano", role: "Director · Mirador Grand", initials: "DC" },
  { id: 5, text: "Aumentamos el RevPAR sin tocar la inversión. Pura estrategia bien ejecutada.", name: "Patricia Nieto", role: "Revenue Manager · Aurelia Hotels", initials: "PN" },
  { id: 6, text: "Tranquilidad total: sabíamos en todo momento qué se hacía y por qué. Mucha transparencia.", name: "Andrés Molina", role: "Propietario · Hostal Centro", initials: "AM" },
  { id: 7, text: "Resultados desde el primer trimestre. Su modelo alineado con nuestros ingresos lo dice todo.", name: "Sara Méndez", role: "Directora · Aurelia Hotels", initials: "SM" },
  { id: 8, text: "Convirtieron una buena instalación en un negocio realmente rentable. Gracias, equipo.", name: "Roberto Torres", role: "CEO · Grupo Costa", initials: "RT" },
];

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function StaggerTestimonials() {
  const [cardSize, setCardSize] = useState(360);
  const [list, setList] = useState<Review[]>(REVIEWS);

  useEffect(() => {
    const update = () =>
      setCardSize(window.matchMedia("(min-width: 640px)").matches ? 360 : 280);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleMove = (steps: number) => {
    setList((prev) => {
      const next = [...prev];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = next.shift();
          if (!item) return prev;
          next.push({ ...item, id: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = next.pop();
          if (!item) return prev;
          next.unshift({ ...item, id: Math.random() });
        }
      }
      return next;
    });
  };

  return (
    <div className="stagger">
      {list.map((review, index) => {
        const position =
          list.length % 2
            ? index - (list.length + 1) / 2
            : index - list.length / 2;
        const isCenter = position === 0;
        return (
          <article
            key={review.id}
            onClick={() => handleMove(position)}
            className={`stagger__card${isCenter ? " stagger__card--center" : ""}`}
            style={{
              width: cardSize,
              height: cardSize,
              transform: `translate(-50%, -50%) translateX(${(cardSize / 1.5) * position}px) translateY(${
                isCenter ? -65 : position % 2 ? 15 : -15
              }px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
            }}
          >
            <span className="stagger__diag" aria-hidden="true" />
            <div className="stagger__av" aria-hidden="true">
              {review.initials}
            </div>
            <h3 className="stagger__quote">&ldquo;{review.text}&rdquo;</h3>
            <p className="stagger__by">
              {review.name} · {review.role}
            </p>
          </article>
        );
      })}
      <div className="stagger__nav">
        <button className="stagger__btn" onClick={() => handleMove(-1)} aria-label="Reseña anterior">
          <ChevronLeft />
        </button>
        <button className="stagger__btn" onClick={() => handleMove(1)} aria-label="Reseña siguiente">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
