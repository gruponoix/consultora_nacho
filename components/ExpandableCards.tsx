"use client";

// Adapted from Aceternity's "Expandable Card" (21st.dev): the card morphs into a centred
// panel with the full text. Restyled with the site's CSS instead of Tailwind.

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Feature } from "@/lib/blocks";
import Rich from "./Rich";

export default function ExpandableCards({ items }: { items: Feature[] }) {
  const [active, setActive] = useState<Feature | null>(null);
  const id = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    const onPointerDown = (e: PointerEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            className="xcard-backdrop"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="xcard-layer" data-lenis-prevent>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={panelRef}
              className="xcard-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`xcard-title-${id}`}
            >
              <div className="xcard-panel__head">
                <div>
                  <motion.h3 layoutId={`title-${active.title}-${id}`} id={`xcard-title-${id}`}>
                    {active.title}
                  </motion.h3>
                  <motion.p layoutId={`summary-${active.title}-${id}`} className="xcard__summary">
                    {active.summary}
                  </motion.p>
                </div>
                <button
                  ref={closeRef}
                  className="xcard-panel__close"
                  aria-label="Cerrar"
                  onClick={() => setActive(null)}
                >
                  &times;
                </button>
              </div>
              <motion.div
                className="xcard-panel__body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
              >
                {active.body.map((p, i) => (
                  <p key={i}>
                    <Rich text={p} />
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="xcard-grid">
        {items.map((item) => (
          <li key={item.title}>
            <motion.button
              layoutId={`card-${item.title}-${id}`}
              className="xcard"
              onClick={() => setActive(item)}
              aria-haspopup="dialog"
            >
              <motion.h3 layoutId={`title-${item.title}-${id}`}>{item.title}</motion.h3>
              <motion.p layoutId={`summary-${item.title}-${id}`} className="xcard__summary">
                {item.summary}
              </motion.p>
              <span className="xcard__more" aria-hidden="true">
                Leer más <span className="xcard__plus">+</span>
              </span>
            </motion.button>
          </li>
        ))}
      </ul>
    </>
  );
}
