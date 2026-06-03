"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  a: number;
  sp: number;
  vy: number;
  vx: number;
};

/** Floating champagne-blue particles drifting upward across the hero. */
export default function Sparkles({
  color = "47,98,160",
  density = 0.0002,
  minSize = 0.4,
  maxSize = 2.0,
}: {
  color?: string;
  density?: number;
  minSize?: number;
  maxSize?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let parts: Particle[] = [];
    let W = 0;
    let H = 0;
    let raf = 0;
    let resizeTimer: ReturnType<typeof setTimeout>;

    const mk = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: minSize + Math.random() * (maxSize - minSize),
      a: Math.random() * Math.PI * 2,
      sp: 0.004 + Math.random() * 0.014,
      vy: -(0.015 + Math.random() * 0.05),
      vx: (Math.random() - 0.5) * 0.04,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      if (!W || !H) return;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      // Cap the count so very large/retina viewports don't spawn hundreds of
      // particles and tax the per-frame draw loop.
      const count = Math.min(180, Math.max(24, Math.round(W * H * density)));
      parts = Array.from({ length: count }, mk);
    };

    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        if (!reduce) {
          p.a += p.sp;
          p.y += p.vy;
          p.x += p.vx;
          if (p.y < -3) {
            p.y = H + 3;
            p.x = Math.random() * W;
          }
          if (p.x < -3) p.x = W + 3;
          else if (p.x > W + 3) p.x = -3;
        }
        const op = 0.12 + (Math.sin(p.a) * 0.5 + 0.5) * 0.88;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${op.toFixed(3)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };

    resize();
    frame();
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 180);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [color, density, minSize, maxSize]);

  return <canvas ref={ref} className="hero__sparkles" aria-hidden="true" />;
}
