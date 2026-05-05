import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { FaqHero } from "@/components/sections/FaqHero";
import { FaqFull } from "@/components/sections/FaqFull";
import { getTopics } from "@/lib/topicPages";
import { jsonLd, localizedAlternates, ogMetadata, robotsFor, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  if (locale === "es") {
    const title = "Preguntas Frecuentes sobre Apelaciones de Amazon";
    const description =
      "Respuestas sobre suspensiones de cuenta de Amazon, Planes de Acción, reactivación de ASIN, quejas de PI y cómo funciona el servicio.";
    return {
      title,
      description,
      alternates: localizedAlternates(locale, "faq"),
      robots: robotsFor(true),
      openGraph: ogMetadata(locale, "faq", `${title} — ${SITE_NAME}`, description),
    };
  }

  const title = "Amazon Appeal FAQ";
  const description =
    "Answers about Amazon account suspensions, Plans of Action, ASIN reinstatement, IP complaints, and how independent appeal support works.";
  return {
    title,
    description,
    alternates: localizedAlternates(locale, "faq"),
    robots: robotsFor(true),
    openGraph: ogMetadata(locale, "faq", `${title} — ${SITE_NAME}`, description),
  };
}

export default async function FaqPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);
  const topics = getTopics(locale);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: m.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />
      <FaqHero hero={m.faqPage.hero} />
      <FaqFull
        items={m.faqItems}
        contactPrompt={m.faqPage.contactPrompt}
        contactHref={m.site.contactHref}
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#8a7560]">
            {locale === "es" ? "Guías Relacionadas" : "Related Guides"}
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${locale}/topics/${topic.slug}`}
                className="rounded-lg border border-slate-200 p-4 text-sm font-semibold text-[#1a2e4a] hover:border-[#c9a96e] hover:bg-[#f9f7f4]"
              >
                {topic.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
