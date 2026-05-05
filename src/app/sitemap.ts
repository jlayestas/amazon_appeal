import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import {
  absoluteUrl,
  indexableBasePaths,
  languageAlternates,
  topicSlugs,
} from "@/lib/seo";
import { getBlogPosts, getBlogPostTranslations } from "@/lib/blogPosts";

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

  const blogRoutes = locales.flatMap((locale) =>
    getBlogPosts(locale).map((post) => {
      const path = `blog/${post.slug}`;
      const translations = getBlogPostTranslations(post.translationKey);
      return {
        url: absoluteUrl(locale, path),
        lastModified: new Date(`${post.updated ?? post.date}T00:00:00Z`),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            en: translations.en ? absoluteUrl("en", `blog/${translations.en.slug}`) : absoluteUrl("en", path),
            es: translations.es ? absoluteUrl("es", `blog/${translations.es.slug}`) : absoluteUrl("es", path),
            "x-default": translations.en
              ? absoluteUrl("en", `blog/${translations.en.slug}`)
              : absoluteUrl(locale, path),
          },
        },
      };
    })
  );

  return [...baseRoutes, ...topicRoutes, ...blogRoutes] as MetadataRoute.Sitemap;
}
