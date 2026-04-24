import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { FaqHero } from "@/components/sections/FaqHero";
import { FaqFull } from "@/components/sections/FaqFull";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  if (locale === "es") {
    return {
      title: "Preguntas Frecuentes",
      description:
        "Respuestas a las preguntas más comunes sobre suspensiones de cuenta, ASIN, quejas de PI y cómo funciona este servicio.",
    };
  }

  return {
    title: "FAQ",
    description:
      "Answers to common questions about account suspensions, ASINs, IP complaints, and how this service works.",
  };
}

export default async function FaqPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);

  return (
    <>
      <FaqHero hero={m.faqPage.hero} />
      <FaqFull
        items={m.faqItems}
        contactPrompt={m.faqPage.contactPrompt}
        contactHref={m.site.contactHref}
      />
    </>
  );
}
