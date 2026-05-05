import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import {
  absoluteUrl,
  indexableBasePaths,
  languageAlternates,
  topicSlugs,
} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const baseRoutes = indexableBasePaths.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(locale, path),
      lastModified,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: languageAlternates(path),
      },
    }))
  );

  const topicRoutes = topicSlugs.flatMap((slug) => {
    const path = `topics/${slug}`;
    return locales.map((locale) => ({
      url: absoluteUrl(locale, path),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: languageAlternates(path),
      },
    }));
  });

  return [...baseRoutes, ...topicRoutes] as MetadataRoute.Sitemap;
}
