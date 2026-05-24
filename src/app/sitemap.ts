import type { MetadataRoute } from "next";
import { siteConfig, staticRoutes } from "@/data/seo";
import { portfolioProjects } from "@/data/portfolio";
import { serviceLines } from "@/data/services";

export const dynamic = "force-static";

const SITE_LAST_MODIFIED = new Date("2026-05-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const serviceEntries = serviceLines.map((line) => ({
    url: `${siteConfig.url}/services/${line.id}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const portfolioEntries = portfolioProjects.map((project) => ({
    url: `${siteConfig.url}/portfolio/${project.id}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...portfolioEntries];
}
