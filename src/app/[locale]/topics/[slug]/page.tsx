import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { isValidLocale, locales } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { getTopic } from "@/lib/topicPages";
import {
  absoluteUrl,
  jsonLd,
  localizedAlternates,
  ogMetadata,
  robotsFor,
  SITE_NAME,
  topicSlugs,
  type TopicSlug,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

function isTopicSlug(slug: string): slug is TopicSlug {
  return topicSlugs.includes(slug as TopicSlug);
}

export function generateStaticParams() {
  return locales.flatMap((locale) => topicSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || !isTopicSlug(slug)) return {};

  const topic = getTopic(locale, slug);
  const path = `topics/${slug}`;
  return {
    title: topic.metaTitle,
    description: topic.description,
    alternates: localizedAlternates(locale, path),
    robots: robotsFor(true),
    openGraph: ogMetadata(locale, path, `${topic.metaTitle} — ${SITE_NAME}`, topic.description),
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || !isTopicSlug(slug)) notFound();

  const topic = getTopic(locale, slug);
  const m = getMessages(locale);
  const contactLabel = locale === "es" ? "Solicitar revisión de caso" : "Start a case review";
  const servicesLabel = locale === "es" ? "Ver servicios" : "View services";
  const relatedLabel = locale === "es" ? "Servicios relacionados" : "Related services";
  const faqLabel = locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions";
  const topicSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: topic.metaTitle,
        description: topic.description,
        provider: { "@type": "Organization", name: SITE_NAME },
        areaServed: "United States",
        url: absoluteUrl(locale, `topics/${topic.slug}`),
      },
      {
        "@type": "FAQPage",
        mainEntity: topic.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(topicSchema)} />
      <section className="bg-[#0c1a2e] px-5 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#c9a96e]">
            {topic.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            {topic.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{topic.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={m.site.contactHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#c9a96e] px-6 py-3 text-sm font-bold text-[#0f1e35] hover:bg-[#dbbf88]"
            >
              {contactLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href={locale === "es" ? "/es/services" : "/en/services"}
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {servicesLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_300px]">
          <div className="space-y-10">
            {topic.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-[#1a2e4a]">{section.heading}</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slate-700">
                        <CheckCircle size={17} className="mt-0.5 shrink-0 text-[#1a2e4a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-bold text-[#1a2e4a]">{faqLabel}</h2>
              <div className="mt-5 divide-y divide-slate-200 rounded-lg border border-slate-200">
                {topic.faq.map((item) => (
                  <div key={item.question} className="p-5">
                    <h3 className="font-semibold text-[#1a2e4a]">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-lg border border-slate-200 bg-[#f9f7f4] p-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.13em] text-[#8a7560]">
              {relatedLabel}
            </h2>
            <ul className="mt-4 space-y-3">
              {topic.relatedServices.map((service) => (
                <li key={service} className="flex gap-2 text-sm text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                  {service}
                </li>
              ))}
            </ul>
            <Link
              href={m.site.contactHref}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#1a2e4a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#243d60]"
            >
              {contactLabel}
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
