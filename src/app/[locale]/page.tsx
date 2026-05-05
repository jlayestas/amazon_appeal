import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { PullQuote } from "@/components/sections/PullQuote";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getTopics } from "@/lib/topicPages";
import {
  absoluteUrl,
  jsonLd,
  localizedAlternates,
  ogMetadata,
  robotsFor,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  if (locale === "es") {
    const title = "Apoyo para Apelar Suspensiones de Vendedores de Amazon";
    const description =
      "Apoyo independiente para suspensiones de cuenta de Amazon, Planes de Acción, reactivación de ASIN y respuestas a quejas de propiedad intelectual.";
    return {
      // absolute bypasses the root layout template to avoid duplication
      title: { absolute: `${SITE_NAME} — ${title}` },
      description,
      alternates: localizedAlternates(locale),
      robots: robotsFor(true),
      openGraph: ogMetadata(locale, "", `${SITE_NAME} — ${title}`, description),
    };
  }

  const title = "Amazon Seller Suspension Appeal Support";
  const description =
    "Independent Amazon seller suspension appeal support, Plan of Action help, ASIN reinstatement support, and IP complaint response guidance.";
  return {
    // absolute bypasses the root layout template to avoid duplication
    title: { absolute: `${SITE_NAME} — ${title}` },
    description,
    alternates: localizedAlternates(locale),
    robots: robotsFor(true),
    openGraph: ogMetadata(locale, "", `${SITE_NAME} — ${title}`, description),
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);
  const topics = getTopics(locale);
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: m.site.email,
    telephone: m.site.phone,
    sameAs: [],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: locale === "es" ? "Apoyo para apelaciones de Amazon" : "Amazon seller appeal support",
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: "United States",
    serviceType: [
      locale === "es" ? "Suspensiones de cuenta de Amazon" : "Amazon account suspension appeals",
      locale === "es" ? "Ayuda con Plan de Acción" : "Amazon Plan of Action help",
      locale === "es" ? "Reactivación de ASIN" : "ASIN reinstatement support",
      locale === "es" ? "Respuesta a quejas de PI" : "Amazon IP complaint support",
    ],
    url: absoluteUrl(locale),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(orgSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(serviceSchema)}
      />
      <Hero
        hero={m.hero}
        ctaPrimary={m.site.ctaPrimary}
        ctaSecondary={m.site.ctaSecondary}
        contactHref={m.site.contactHref}
        processHref={m.site.processHref}
      />
      <TrustStrip items={m.trustStrip} />
      <Services section={m.servicesSection} />
      <Process
        section={m.processSection}
        ctaPrimary={m.site.ctaPrimary}
        contactHref={m.site.contactHref}
      />
      <WhyUs section={m.whyUs} />
      <PullQuote text={m.pullQuote} />
      <FAQ section={m.faqSection} items={m.faqItems} />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#8a7560]">
            {locale === "es" ? "Guías por Tema" : "Topic Guides"}
          </p>
          <h2 className="text-2xl font-bold text-[#1a2e4a] md:text-3xl">
            {locale === "es"
              ? "Apoyo para problemas específicos de vendedores Amazon"
              : "Support for specific Amazon seller issues"}
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${locale}/topics/${topic.slug}`}
                className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-[#c9a96e] hover:bg-[#f9f7f4]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[#8a7560]">
                  {topic.eyebrow}
                </span>
                <span className="mt-2 block font-semibold text-[#1a2e4a]">{topic.title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-slate-600">
                  {topic.description}
                </span>
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
