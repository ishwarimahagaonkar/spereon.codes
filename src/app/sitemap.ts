import type { MetadataRoute } from "next";
import { blogPosts, products, services } from "@/lib/data";

const base = "https://spereon.codes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    // "/services",
    "/products",
    "/pricing",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productPages = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...productPages, ...blogPages];
}
