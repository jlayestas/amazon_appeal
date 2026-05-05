import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";

export const SITE_URL = "https://jrjreinstaters.com";
export const SITE_NAME = "JRJ Reinstaters";
export const OG_IMAGE_PATH = "/opengraph-image";

export const indexableBasePaths = ["", "services", "process", "about", "faq", "blog"] as const;
export const noindexBasePaths = ["contact", "privacy", "terms", "disclaimer"] as const;

export type TopicSlug =
  | "amazon-account-suspension-appeal-help"
  | "amazon-plan-of-action-writing-support"
  | "asin-removed-or-suppressed"
  | "amazon-intellectual-property-complaint"
  | "inauthentic-counterfeit-complaint-response"
  | "amazon-account-verification-deactivation";

export const topicSlugs: TopicSlug[] = [
  "amazon-account-suspension-appeal-help",
  "amazon-plan-of-action-writing-support",
  "asin-removed-or-suppressed",
  "amazon-intellectual-property-complaint",
  "inauthentic-counterfeit-complaint-response",
  "amazon-account-verification-deactivation",
];

export function localizedPath(locale: Locale, path = "") {
  const normalized = path.replace(/^\/|\/$/g, "");
  return `/${locale}${normalized ? `/${normalized}` : ""}`;
}

export function absoluteUrl(locale: Locale, path = "") {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

export function languageAlternates(path = "") {
  return {
    en: absoluteUrl("en", path),
    es: absoluteUrl("es", path),
    "x-default": absoluteUrl("en", path),
  };
}

export function localizedAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  return {
    canonical: absoluteUrl(locale, path),
    languages: languageAlternates(path),
  };
}

export function robotsFor(index: boolean): Metadata["robots"] {
  return index
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true };
}

export function ogMetadata(locale: Locale, path: string, title: string, description: string) {
  return {
    locale: locale === "es" ? "es_ES" : "en_US",
    type: "website" as const,
    url: absoluteUrl(locale, path),
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Amazon seller appeal support`,
      },
    ],
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
