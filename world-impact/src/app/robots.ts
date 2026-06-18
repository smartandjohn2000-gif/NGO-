import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/membership/dashboard/"],
      },
    ],
    sitemap: "https://worldimpactinitiative.org/sitemap.xml",
    host: "https://worldimpactinitiative.org",
  };
}
