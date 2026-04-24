import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { LegalLayout } from "@/components/ui/LegalLayout";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return {
    title: locale === "es" ? "Política de Privacidad" : "Privacy Policy",
    robots: { index: false },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);
  const page = m.legalPages.privacy;

  return (
    <LegalLayout
      title={page.title}
      effectiveDate={page.effectiveDate}
      intro={page.intro}
      sections={page.sections}
      effectiveDateLabel={locale === "es" ? "Fecha de vigencia:" : "Effective date:"}
      backHref={m.nav.homeHref}
      backLabel={locale === "es" ? "Volver al inicio" : "Back to home"}
    />
  );
}
