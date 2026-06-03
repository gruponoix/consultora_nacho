import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  ...props,
});

export const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    →
  </span>
);

export const Check = (props: IconProps) => (
  <svg {...base({ strokeWidth: 2, ...props })}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const MapPin = (props: IconProps) => (
  <svg {...base({ strokeWidth: 2, ...props })}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ---- Offers ---- */
export const Building = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5" />
    <path d="M9 10h.01M15 10h.01" />
  </svg>
);
export const ChartUp = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 3v18h18" />
    <path d="M7 15l4-5 3 3 5-7" />
  </svg>
);
export const Gear = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
  </svg>
);

/* ---- Segments ---- */
export const SegHotel = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 21h18M5 21V8l7-4 7 4v13M10 21v-5h4v5" />
  </svg>
);
export const SegStar = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9 2.6.9-5.5-4-3.9 5.5-.8z" />
  </svg>
);
export const SegChain = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 21V9l5-3 5 3v12M13 21V11l5-3 3 2v11M3 21h18" />
  </svg>
);
export const SegResort = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M2 18h20M4 18v-5a8 8 0 0116 0v5M12 5V3M9 9h6" />
  </svg>
);
export const SegHostal = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 21V5l8-2 8 2v16M4 21h16M9 21v-4h6v4" />
  </svg>
);

/* ---- Objections / values ---- */
export const ShieldCheck = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
export const Users = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M16 11a4 4 0 10-8 0M5 21v-1a7 7 0 0114 0v1" />
  </svg>
);
export const Star = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
  </svg>
);
export const Activity = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 12h4l3-9 4 18 3-9h4" />
  </svg>
);
export const Clock = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 20a8 8 0 100-16 8 8 0 000 16zM12 8v4l3 2" />
  </svg>
);
export const Eye = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
export const Heart = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l9.8 9.6 9.8-9.6a5.5 5.5 0 000-7.8z" />
  </svg>
);

/* ---- Social ---- */
export const LinkedIn = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5A2.5 2.5 0 102.5 6 2.5 2.5 0 004.98 3.5zM3 8.98h4V21H3zM9 8.98h3.8v1.64h.05a4.17 4.17 0 013.75-2.06c4 0 4.75 2.64 4.75 6.07V21h-4v-5.36c0-1.28 0-2.92-1.78-2.92s-2.05 1.39-2.05 2.83V21H9z" />
  </svg>
);
export const Instagram = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
