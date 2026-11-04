"use client";

// Based on the shadcn/21st.dev "Bar Chart – Multiple" and "Pie Chart – Donut with Text"
// (Recharts), restyled with the site's CSS. Charts mount when scrolled into view so the
// grow-in animation plays where the reader can see it.

import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  LabelList,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ANIM = { animationDuration: 1100, animationEasing: "ease-out" as const };

function ChartFrame({
  title,
  caption,
  legend,
  height,
  children,
}: {
  title: string;
  caption: string;
  legend?: { label: string; color: string }[];
  height: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  return (
    <figure className="chart" ref={ref}>
      <figcaption className="chart__title">{title}</figcaption>
      {legend && (
        <ul className="chart__legend">
          {legend.map((l) => (
            <li key={l.label}>
              <span style={{ background: l.color }} aria-hidden="true" />
              {l.label}
            </li>
          ))}
        </ul>
      )}
      <div className="chart__plot" style={{ height }}>
        {inView && children}
      </div>
      <p className="chart__caption">{caption}</p>
    </figure>
  );
}

const HOTELS = [
  { hotel: "Hotel A", ocupacion: 85, adr: 80, revpar: 68 },
  { hotel: "Hotel B", ocupacion: 78, adr: 105, revpar: 81.9 },
];
const HOTEL_SERIES = [
  { key: "ocupacion", label: "Ocupación (%)", color: "#4F81F5" },
  { key: "adr", label: "ADR (€)", color: "#B18CF5" },
  { key: "revpar", label: "RevPAR (€)", color: "#F2B96E" },
];

const fmt = (v: number) => v.toLocaleString("es-ES", { maximumFractionDigits: 2 });

export function HotelComparisonChart() {
  const animate = !useReducedMotion();
  return (
    <ChartFrame
      title="Hotel A vs Hotel B: ocupación, ADR y RevPAR"
      caption="Fuente: creación propia"
      legend={HOTEL_SERIES}
      height={320}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={HOTELS} barGap={6} barCategoryGap="22%" margin={{ top: 22, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#E6E1D8" />
          <XAxis dataKey="hotel" tickLine={false} axisLine={false} tickMargin={10} tick={{ fill: "#4A4339", fontSize: 14 }} />
          <YAxis domain={[0, 120]} ticks={[0, 20, 40, 60, 80, 100, 120]} tickLine={false} axisLine={false} tick={{ fill: "#8B7F6C", fontSize: 12 }} />
          <Tooltip
            cursor={{ fill: "rgba(21,18,13,0.04)" }}
            formatter={(v, name) => [fmt(Number(v)), HOTEL_SERIES.find((s) => s.key === name)?.label ?? name]}
            contentStyle={{ borderRadius: 12, border: "1px solid rgba(21,18,13,0.1)", fontSize: 13 }}
          />
          {HOTEL_SERIES.map((s) => (
            <Bar key={s.key} dataKey={s.key} fill={s.color} radius={[8, 8, 0, 0]} isAnimationActive={animate} {...ANIM}>
              <LabelList dataKey={s.key} position="top" formatter={(v) => fmt(Number(v))} fill="#4A4339" fontSize={12} />
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

const CHANNELS = [
  { name: "Venta directa", value: 40, color: "#4F81F5" },
  { name: "OTAs", value: 30, color: "#B18CF5" },
  { name: "Agencias y TTOO", value: 15, color: "#F2B96E" },
  { name: "Empresas", value: 10, color: "#FDE05E" },
  { name: "Otros", value: 5, color: "#F07679" },
];

export function ChannelMixChart() {
  const animate = !useReducedMotion();
  return (
    <ChartFrame
      title="Mix de canales de venta"
      caption="Ejemplo práctico ficticio."
      legend={CHANNELS.map((c) => ({ label: `${c.name} · ${c.value}%`, color: c.color }))}
      height={340}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            formatter={(v, name) => [`${v}%`, name]}
            contentStyle={{ borderRadius: 12, border: "1px solid rgba(21,18,13,0.1)", fontSize: 13 }}
          />
          <Pie
            data={CHANNELS}
            dataKey="value"
            nameKey="name"
            innerRadius="52%"
            outerRadius="86%"
            paddingAngle={2}
            stroke="#fff"
            strokeWidth={3}
            startAngle={90}
            endAngle={-270}
            isAnimationActive={animate}
            {...ANIM}
            animationDuration={1300}
          >
            {CHANNELS.map((c) => (
              <Cell key={c.name} fill={c.color} />
            ))}
            <Label
              position="center"
              content={({ viewBox }) =>
                viewBox && "cx" in viewBox ? (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} dy="-0.4em" className="chart__donut-num">
                      40%
                    </tspan>
                    <tspan x={viewBox.cx} dy="1.6em" className="chart__donut-label">
                      venta directa
                    </tspan>
                  </text>
                ) : null
              }
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}
