import type { MetadataRoute } from "next";
import { navItems, programs, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ...navItems.map((item) => item.href),
    "/membership",
    "/membership/register",
    "/membership/login",
    "/membership/dashboard",
    "/admin"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.8
    })),
    ...programs.map((program) => ({
      url: `${site.url}/programs/${program.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85
    }))
  ];
}
