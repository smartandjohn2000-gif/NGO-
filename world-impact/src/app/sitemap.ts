import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://worldimpactinitiative.org";

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/programs", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/programs/gender-equality", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/programs/child-protection", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/programs/youth-empowerment", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/programs/disability-inclusion", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/programs/health-education", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/programs/crisis-response", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/gallery", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { url: "/events", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/volunteer", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/donate", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/membership", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
