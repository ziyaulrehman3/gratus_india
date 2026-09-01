import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gratusindia.com";

  const routes = ["", "/about", "/products", "/contact", "/privacy", "/terms"] as const;

  return routes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : route === "/products" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" ? 0.9 : route === "/about" ? 0.8 : 0.6,
  }));
}
