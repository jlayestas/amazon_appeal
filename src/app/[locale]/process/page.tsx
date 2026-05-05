import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { ProcessHero } from "@/components/sections/ProcessHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProcessClientProvides } from "@/components/sections/ProcessClientProvides";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getTopics } from "@/lib/topicPages";
import { localizedAlternates, ogMetadata, robotsFor, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  if (locale === "es") {
    const title = "Cómo Funciona el Apoyo para Apelaciones de Amazon";
    const description =
      "Proceso estructurado para revisar suspensiones de Amazon, preparar Planes de Acción, organizar evidencia y orientar la presentación.";
    return {
      title,
      description,
      alternates: localizedAlternates(locale, "process"),
      robots: robotsFor(true),
      openGraph: ogMetadata(locale, "process", `${title} — ${SITE_NAME}`, description),
    };
  }

  const title = "How Amazon Appeal Support Works";
  const description =
    "A structured process for Amazon suspension review, Plan of Action drafting, evidence review, and seller submission guidance.";
  return {
    title,
    description,
    alternates: localizedAlternates(locale, "process"),
    robots: robotsFor(true),
    openGraph: ogMetadata(locale, "process", `${title} — ${SITE_NAME}`, description),
  };
}

export default async function ProcessPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);
  const pp = m.processPage;
  const topics = getTopics(locale);

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
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#8a7560]">
            {locale === "es" ? "Casos Comunes" : "Common Cases"}
          </p>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${locale}/topics/${topic.slug}`}
                className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-[#1a2e4a] hover:border-[#c9a96e]"
              >
                {topic.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA
        finalCta={m.finalCta}
        ctaPrimary={m.site.ctaPrimary}
        contactHref={m.site.contactHref}
      />
    </>
  );
}
