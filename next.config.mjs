/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  // Pages from the first version of the site (Oct 2026) that Google indexed.
  // Permanent redirects so search results update and visitors don't hit a 404.
  async redirects() {
    const old = ["externalizacion", "consultoria", "gestion-operativa"];
    return old.flatMap((slug) => [
      { source: `/servicios/${slug}`, destination: "/servicios", permanent: true },
      { source: `/${slug}`, destination: "/servicios", permanent: true },
    ]);
  },
};

export default nextConfig;
