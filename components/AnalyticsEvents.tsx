"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

// One delegated listener for site-wide clicks worth measuring:
// CTAs that lead to /contacto, and email/phone links.
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const location = a.closest("header, .drawer")
        ? "header"
        : a.closest("footer")
          ? "footer"
          : "content";

      if (href.startsWith("mailto:")) {
        track("contact_click", { contact_method: "email", cta_location: location });
      } else if (href.startsWith("tel:")) {
        track("contact_click", { contact_method: "phone", cta_location: location });
      } else if (/^\/contacto\/?($|[?#])/.test(href)) {
        track("cta_click", {
          cta_text: (a.textContent || "").replace(/\s+/g, " ").replace("→", "").trim().slice(0, 80),
          cta_location: location,
        });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
