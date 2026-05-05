import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutBody } from "@/components/sections/AboutBody";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { localizedAlternates, ogMetadata, robotsFor, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  if (locale === "es") {
    const title = "Acerca de JRJ Reinstaters";
    const description =
      "Servicio independiente de consultoría y preparación de documentos para vendedores de Amazon, suspensiones, Planes de Acción, ASIN y quejas de PI.";
    return {
      title,
      description,
      alternates: localizedAlternates(locale, "about"),
      robots: robotsFor(true),
      openGraph: ogMetadata(locale, "about", `${title} — ${SITE_NAME}`, description),
    };
  }

  const title = "About JRJ Reinstaters";
  const description =
    "Independent consulting and document preparation for Amazon sellers facing suspensions, Plans of Action, ASIN issues, and IP complaints.";
  return {
    title,
    description,
    alternates: localizedAlternates(locale, "about"),
    robots: robotsFor(true),
    openGraph: ogMetadata(locale, "about", `${title} — ${SITE_NAME}`, description),
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);
  const ap = m.aboutPage;

  const sectionLabels =
    locale === "es"
      ? { scopeOfWork: "Alcance del Trabajo" }
      : { scopeOfWork: "Scope of Work" };

  return (
    <>
      <AboutHero hero={ap.hero} />
      <AboutMission mission={ap.mission} />
      <AboutBody
        whoFor={ap.whoFor}
        whatSupport={ap.whatSupport}
        approach={ap.approach}
        sectionLabels={sectionLabels}
      />
      <FinalCTA
        finalCta={m.finalCta}
        ctaPrimary={m.site.ctaPrimary}
        contactHref={m.site.contactHref}
      />
    </>
  );
}
