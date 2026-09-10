import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = ["", "/projects", "/about", "/resume", "/hire", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const caseStudies = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...pages, ...caseStudies];
}
