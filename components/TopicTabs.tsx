"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type Topic = { label: string; content: ReactNode };

/** Vertical tab list + one visible panel. Every panel stays in the HTML (hidden), so all copy is indexable. */
export default function TopicTabs({ topics }: { topics: Topic[] }) {
  const [current, setCurrent] = useState(0);
  const id = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
      {topics.map((t, i) => (
        <div
          key={t.label}
          id={`${id}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${i}`}
          hidden={i !== current}
          className="tabs__panel"
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
