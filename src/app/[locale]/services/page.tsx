import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { NotSureBlock } from "@/components/sections/NotSureBlock";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  if (locale === "es") {
    return {
      title: "Servicios",
      description:
        "Apoyo independiente para suspensiones de cuenta, eliminaciones de ASIN, quejas de PI y más. Cada caso se revisa individualmente.",
      robots: { index: true, follow: true },
    };
  }

  return {
    title: "Services",
    description:
      "Independent support across account suspensions, ASIN removals, IP complaints, and more. Each engagement reviewed individually.",
    robots: { index: true, follow: true },
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);

  const situationsLabel = locale === "es" ? "Situaciones Comunes" : "Common Situations";
  const includesLabel = locale === "es" ? "Qué Incluye el Apoyo" : "What Support Includes";
  const ctaLabel = locale === "es" ? "Discutir Este Tipo de Caso" : "Discuss This Case Type";

  return (
    <>
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
      <FinalCTA
        finalCta={m.finalCta}
        ctaPrimary={m.site.ctaPrimary}
        contactHref={m.site.contactHref}
      />
    </>
  );
}
