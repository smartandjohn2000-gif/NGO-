import type { MetadataRoute } from "next";
import { PROGRAMS, SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/gallery",
    "/blog",
    "/events",
    "/volunteer",
    "/donate",
    "/contact",
    "/membership/register",
    "/membership/login",
    "/membership/dashboard",
    "/membership/profile",
    "/membership/directory",
    "/membership/resources",
    "/admin",
    "/admin/beneficiaries",
    "/admin/content",
    "/admin/volunteers",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));

  const programEntries = PROGRAMS.map((program) => ({
    url: `${SITE_CONFIG.url}/programs/${program.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: [`${SITE_CONFIG.url}${program.image}`],
  }));

  return [...staticEntries, ...programEntries];
}
