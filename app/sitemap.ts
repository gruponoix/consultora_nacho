import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICES } from "@/lib/services";

// Served at /sitemap.xml — submit it in Google Search Console.
// Add new pages (e.g. each blog post) here when they're created.
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => ({ url: `${SITE_URL}${path}`, changeFrequency, priority });

  return [
    page("/", 1, "weekly"),
    page("/servicios", 0.9),
    ...SERVICES.map((s) => page(`/servicios/${s.slug}`, 0.9)),
    page("/nosotros", 0.7),
    page("/contacto", 0.8),
    page("/blog", 0.7, "weekly"),
    page("/blog/revenue-management-hotel", 0.6),
  ];
}
