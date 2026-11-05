"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type Topic = { label: string; content: ReactNode };

/** Below this width the tabs become an accordion (matches the CSS breakpoint). */
const ACCORDION_QUERY = "(max-width: 1080px)";

/**
 * Vertical tab list + one visible panel on desktop; an accordion on tablets and phones,
 * where each topic's header sits right above its own content. Every panel stays in the
 * HTML (hidden), so all copy is indexable.
 */
export default function TopicTabs({ topics }: { topics: Topic[] }) {
  const [current, setCurrent] = useState(0);
  const id = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const accRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const accOpened = useRef(false);

  const select = (i: number) => {
    const next = (i + topics.length) % topics.length;
    setCurrent(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowDown: current + 1,
      ArrowRight: current + 1,
      ArrowUp: current - 1,
      ArrowLeft: current - 1,
      Home: 0,
      End: topics.length - 1,
    };
    if (e.key in moves) {
      e.preventDefault();
      select(moves[e.key]);
    }
  };

  // Tapping an open accordion item closes it; opening one closes the others.
  const toggle = (i: number) => {
    accOpened.current = i !== current;
    setCurrent(i === current ? -1 : i);
  };

  // When the item that closed was above the new one, the page jumps up: bring the
  // newly opened header back under the fixed site header.
  useEffect(() => {
    if (!accOpened.current || current < 0) return;
    accOpened.current = false;
    const el = accRefs.current[current];
    if (!el || !window.matchMedia(ACCORDION_QUERY).matches) return;
    const top = el.getBoundingClientRect().top;
    if (top < 80) window.scrollTo({ top: window.scrollY + top - 96, behavior: "smooth" });
  }, [current]);

  return (
    <div className="tabs">
      <div className="tabs__nav" role="tablist" aria-orientation="vertical" onKeyDown={onKeyDown}>
        {topics.map((t, i) => (
          <button
            key={t.label}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`${id}-tab-${i}`}
            role="tab"
            aria-selected={i === current}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={i === current ? 0 : -1}
            className="tabs__tab"
            onClick={() => setCurrent(i)}
          >
            <span className="tabs__num">{String(i + 1).padStart(2, "0")}</span>
            {t.label}
          </button>
        ))}
      </div>
      <div className="tabs__panels">
        {topics.map((t, i) => (
          <div key={t.label} className="tabs__item" data-open={i === current}>
            <button
              ref={(el) => {
                accRefs.current[i] = el;
              }}
              type="button"
              className="tabs__acc"
              aria-expanded={i === current}
              aria-controls={`${id}-panel-${i}`}
              onClick={() => toggle(i)}
            >
              <span className="tabs__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="tabs__acc-label">{t.label}</span>
              <span className="tabs__acc-icon" aria-hidden="true" />
            </button>
            <div
              id={`${id}-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`${id}-tab-${i}`}
              hidden={i !== current}
              className="tabs__panel"
            >
              {t.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
