import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/en/contact",
        "/es/contact",
        "/en/privacy",
        "/es/privacy",
        "/en/terms",
        "/es/terms",
        "/en/disclaimer",
        "/es/disclaimer",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
