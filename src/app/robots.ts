import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/portal/dashboard", "/api/"],
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
