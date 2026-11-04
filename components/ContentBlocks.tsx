import Link from "next/link";
import ExpandableCards from "./ExpandableCards";
import Rich from "./Rich";
import TopicTabs from "./TopicTabs";
import { Arrow, Check } from "./icons";
import type { Block, Closing } from "@/lib/blocks";

const Paras = ({ lines, className }: { lines?: string[]; className?: string }) =>
  lines?.length ? (
    <div className={className}>
      {lines.map((p, i) => (
        <p key={i}>
          <Rich text={p} />
        </p>
      ))}
    </div>
  ) : null;

function BlockBody({ block }: { block: Block }) {
  switch (block.kind) {
    case "text":
      return (
        <div className="blk-text">
          <h3 className="section-title reveal">{block.title}</h3>
          <div className="blk-prose reveal" data-d="1">
            {block.body.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
            {block.quote && <p className="blk-quote">{block.quote}</p>}
          </div>
        </div>
      );

    case "list":
      return (
        <div className="blk-text">
          <div className="reveal">
            <h3 className="section-title">{block.title}</h3>
            <Paras lines={block.intro} className="blk-prose blk-prose--lead" />
          </div>
          <div className="reveal" data-d="1">
            {block.style === "chips" ? (
              <ul className="blk-chips">
                {block.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            ) : (
              <ul className="blk-checks">
                {block.items.map((it) => (
                  <li key={it}>
                    <span className="blk-checks__icn" aria-hidden="true">
                      <Check />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            )}
            <Paras lines={block.outro} className="blk-prose blk-prose--after" />
          </div>
        </div>
      );

    case "flow":
      return (
        <div className="blk-center">
          <div className="section-head center reveal">
            <h3 className="section-title">{block.title}</h3>
            <Paras lines={block.intro} className="blk-prose blk-prose--center" />
          </div>
          <ol className="blk-flow reveal" data-d="1">
            {block.steps.map((s, i) => (
              <li key={s}>
                <span>{s}</span>
                {i < block.steps.length - 1 && (
                  <span className="blk-flow__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <Paras lines={block.outro} className="blk-prose blk-prose--center reveal" />
        </div>
      );

    case "steps":
      return (
        <>
          <div className="section-head center reveal">
            <h3 className="section-title">{block.title}</h3>
            <Paras lines={block.intro} className="blk-prose blk-prose--center" />
          </div>
          <ol className="blk-steps">
            {block.steps.map((s, i) => (
              <li className="step reveal" data-d={i ? String(Math.min(i, 4)) : undefined} key={s.title}>
                <div className="step__num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </>
      );

    case "features":
      return (
        <>
          <div className="section-head center reveal">
            <h3 className="section-title">{block.title}</h3>
            <Paras lines={block.intro} className="blk-prose blk-prose--center" />
            <p className="blk-hint">Pulsa en cada área para leer más.</p>
          </div>
          <ExpandableCards items={block.items} />
        </>
      );
  }
}

/** All blocks of a page in one tabbed section: the topic list on the left, the chosen topic on the right. */
export default function ContentBlocks({ blocks, heading }: { blocks: Block[]; heading: string }) {
  return (
    <section className="section section--alt">
      <div className="wrap">
        <div className="section-head center reveal">
          <h2 className="section-title">{heading}</h2>
          <p className="blk-hint">Elige un tema para leer el detalle.</p>
        </div>
        <TopicTabs
          topics={blocks.map((block) => ({
            label: block.title,
            content: <BlockBody block={block} />,
          }))}
        />
      </div>
    </section>
  );
}

export function ClosingCta({ closing, children }: { closing: Closing; children?: React.ReactNode }) {
  return (
    <section className="section svc-cta">
      <div className="wrap reveal">
        <h2>{closing.title}</h2>
        {closing.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <Link href="/contacto" className="btn btn--gold">
          {closing.cta} <Arrow />
        </Link>
        {children}
      </div>
    </section>
  );
}
