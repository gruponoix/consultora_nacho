/** Content blocks for long-form pages (service details, Nosotros), rendered by ContentBlocks. */

export type Feature = {
  title: string;
  /** Short line shown on the closed card. */
  summary: string;
  /** Full explanation shown when the card is opened. */
  body: string[];
};

export type Block =
  | { kind: "text"; title: string; body: string[]; quote?: string }
  | {
      kind: "list";
      title: string;
      intro?: string[];
      items: string[];
      outro?: string[];
      style?: "checks" | "chips";
    }
  | { kind: "flow"; title: string; intro?: string[]; steps: string[]; outro?: string[] }
  | { kind: "steps"; title: string; intro?: string[]; steps: { title: string; text: string }[] }
  | { kind: "features"; title: string; intro?: string[]; items: Feature[] };

export type Closing = { title: string; body: string[]; cta: string };
