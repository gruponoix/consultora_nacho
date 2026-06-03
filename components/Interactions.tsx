"use client";

import { useEffect } from "react";

function animateCount(el: HTMLElement) {
  const target = parseFloat(el.getAttribute("data-target") || "0");
  const prefix = el.getAttribute("data-prefix") || "";
  const suffix = el.getAttribute("data-suffix") || "";
  const dur = 1700;
  let start: number | null = null;
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);
  const frame = (ts: number) => {
    if (start === null) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    el.textContent = prefix + Math.round(target * ease(p)) + suffix;
    if (p < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observers: IntersectionObserver[] = [];
    const supportsIO = "IntersectionObserver" in window;

    /* ---- Scroll reveal ---- */
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    if (supportsIO) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
      observers.push(io);
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }

    /* ---- Animated counters ---- */
    const counters = document.querySelectorAll<HTMLElement>("[data-target]");
    if (supportsIO) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              animateCount(e.target as HTMLElement);
              cio.unobserve(e.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => cio.observe(el));
      observers.push(cio);
    } else {
      counters.forEach((el) => animateCount(el));
    }

    /* ---- Lamp: light up when in view ---- */
    const lamp = document.querySelector(".lamp");
    if (lamp) {
      if (supportsIO && !reduce) {
        const lio = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                lamp.classList.add("lit");
                lio.unobserve(e.target);
              }
            });
          },
          { threshold: 0.35 }
        );
        lio.observe(lamp);
        observers.push(lio);
      } else {
        lamp.classList.add("lit");
      }
    }

    /* ---- Smooth scrolling (Lenis) + anchor navigation ----
       The dynamic import resolves asynchronously, so under React StrictMode
       (dev) the effect can be torn down before it lands. A `cancelled` flag
       guarantees we never spin up a second Lenis instance + RAF loop, which
       would otherwise fight over the scroll position and feel "stuck". */
    let cancelled = false;
    let raf = 0;
    let lenis: import("lenis").default | undefined;
    let onAnchorClick: ((e: MouseEvent) => void) | undefined;

    if (!reduce) {
      import("lenis")
        .then(({ default: Lenis }) => {
          if (cancelled) return;
          lenis = new Lenis({ duration: 1.0, smoothWheel: true });
          const loop = (time: number) => {
            lenis?.raf(time);
            raf = requestAnimationFrame(loop);
          };
          raf = requestAnimationFrame(loop);

          onAnchorClick = (e: MouseEvent) => {
            const link = (e.target as HTMLElement)?.closest?.('a[href^="#"]');
            if (!link) return;
            const id = link.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            lenis?.scrollTo(target as HTMLElement, { offset: -82 });
          };
          document.addEventListener("click", onAnchorClick);
        })
        .catch(() => {});
    }

    return () => {
      cancelled = true;
      observers.forEach((o) => o.disconnect());
      cancelAnimationFrame(raf);
      if (onAnchorClick) document.removeEventListener("click", onAnchorClick);
      lenis?.destroy();
    };
  }, []);

  return null;
}
