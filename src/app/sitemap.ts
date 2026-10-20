import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((study) => ({
      url: `${getSiteUrl()}/projetos/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
