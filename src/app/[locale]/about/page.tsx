import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutBody } from "@/components/sections/AboutBody";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  if (locale === "es") {
    return {
      title: "Acerca de",
      description:
        "Consultoría independiente y servicio de preparación de documentos para vendedores de Amazon y propietarios de marca.",
    };
  }

  return {
    title: "About",
    description:
      "Independent consulting and document preparation service for Amazon sellers and brand owners.",
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);
  const ap = m.aboutPage;

  const sectionLabels =
    locale === "es"
      ? { whoFor: "Para Quién Es", scopeOfWork: "Alcance del Trabajo" }
      : { whoFor: "Who This Is For", scopeOfWork: "Scope of Work" };

  return (
    <>
      <AboutHero hero={ap.hero} />
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
