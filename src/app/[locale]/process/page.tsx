import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { ProcessHero } from "@/components/sections/ProcessHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProcessClientProvides } from "@/components/sections/ProcessClientProvides";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  if (locale === "es") {
    return {
      title: "Cómo Funciona",
      description:
        "Un proceso estructurado en cinco pasos: revisión del caso, análisis, redacción, revisión de evidencias y orientación para la presentación.",
    };
  }

  return {
    title: "How It Works",
    description:
      "A structured five-step process: case review, analysis, drafting, evidence review, and submission guidance.",
  };
}

export default async function ProcessPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);
  const pp = m.processPage;

  return (
    <>
      <ProcessHero hero={pp.hero} />
      <ProcessSteps
        steps={pp.steps}
        sectionLabel={pp.stepsSection.sectionLabel}
        headline={pp.stepsSection.headline}
        subheadline={pp.stepsSection.subheadline}
      />
      <ProcessClientProvides
        clientProvides={pp.clientProvides}
        sectionLabel={pp.clientProvidesSection.sectionLabel}
      />
      <FinalCTA
        finalCta={m.finalCta}
        ctaPrimary={m.site.ctaPrimary}
        contactHref={m.site.contactHref}
      />
    </>
  );
}
