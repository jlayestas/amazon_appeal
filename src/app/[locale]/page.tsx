import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const m = getMessages(locale);

  if (locale === "es") {
    return {
      // absolute bypasses the root layout template to avoid duplication
      title: { absolute: "Amazon Appeal Pro — Consultoría Independiente para Amazon" },
      description:
        "Apoyo independiente para suspensiones de cuenta de Amazon, eliminaciones de ASIN y quejas de marca. Elaboración de apelaciones, preparación de Planes de Acción y orientación estratégica.",
      openGraph: {
        locale: "es_ES",
        title: "Amazon Appeal Pro — Consultoría Independiente para Amazon",
        description:
          "Apoyo independiente para suspensiones de cuenta de Amazon, eliminaciones de ASIN y quejas de marca.",
      },
    };
  }

  return {
    // absolute bypasses the root layout template to avoid duplication
    title: { absolute: "Amazon Appeal Pro — Independent Amazon Consulting" },
    description:
      "Independent support for Amazon account suspensions, ASIN removals, and brand IP complaints. Appeal drafting, Plan of Action preparation, and strategy guidance.",
    openGraph: {
      locale: "en_US",
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);

  return (
    <>
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
      <FAQ section={m.faqSection} items={m.faqItems} />
      <FinalCTA
        finalCta={m.finalCta}
        ctaPrimary={m.site.ctaPrimary}
        contactHref={m.site.contactHref}
      />
    </>
  );
}
