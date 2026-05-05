import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { NotSureBlock } from "@/components/sections/NotSureBlock";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getTopics } from "@/lib/topicPages";
import { absoluteUrl, jsonLd, localizedAlternates, ogMetadata, robotsFor, SITE_NAME, SITE_URL } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  if (locale === "es") {
    const title = "Servicios de Apelación para Vendedores de Amazon";
    const description =
      "Apoyo para suspensiones de cuenta, Planes de Acción, reactivación de ASIN, quejas de PI, inautenticidad, falsificación y verificación.";
    return {
      title,
      description,
      alternates: localizedAlternates(locale, "services"),
      robots: robotsFor(true),
      openGraph: ogMetadata(locale, "services", `${title} — ${SITE_NAME}`, description),
    };
  }

  const title = "Amazon Appeal Services";
  const description =
    "Amazon Seller Suspension Appeal Support, Amazon Plan of Action help, ASIN reinstatement support, IP complaint support, and account verification guidance.";
  return {
    title,
    description,
    alternates: localizedAlternates(locale, "services"),
    robots: robotsFor(true),
    openGraph: ogMetadata(locale, "services", `${title} — ${SITE_NAME}`, description),
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);

  const situationsLabel = locale === "es" ? "Situaciones Comunes" : "Common Situations";
  const includesLabel = locale === "es" ? "Qué Incluye el Apoyo" : "What Support Includes";
  const ctaLabel = locale === "es" ? "Discutir Este Tipo de Caso" : "Discuss This Case Type";
  const topics = getTopics(locale);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: locale === "es" ? "Servicios de apelación para vendedores de Amazon" : "Amazon appeal services",
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: "United States",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "es" ? "Servicios" : "Services",
      itemListElement: m.servicesPage.categories.map((category) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: category.title,
          description: category.description,
        },
      })),
    },
    url: absoluteUrl(locale, "services"),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceSchema)} />
      <ServicesHero hero={m.servicesPage.hero} />
      <ServiceCategories
        categories={m.servicesPage.categories}
        contactHref={m.site.contactHref}
        situationsLabel={situationsLabel}
        includesLabel={includesLabel}
        ctaLabel={ctaLabel}
      />
      <NotSureBlock
        notSureBlock={m.servicesPage.notSureBlock}
        contactHref={m.site.contactHref}
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#8a7560]">
            {locale === "es" ? "Temas Relacionados" : "Related Topics"}
          </p>
          <h2 className="text-2xl font-bold text-[#1a2e4a]">
            {locale === "es" ? "Encuentra apoyo por situación" : "Find support by situation"}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${locale}/topics/${topic.slug}`}
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-[#1a2e4a] transition-colors hover:border-[#c9a96e] hover:bg-[#f9f7f4]"
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
