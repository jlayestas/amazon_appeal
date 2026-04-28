import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactSidebar } from "@/components/sections/ContactSidebar";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  if (locale === "es") {
    return {
      title: "Contacto",
      description: "Envía los detalles de tu caso para una revisión inicial. Sin compromiso — solo un punto de partida.",
      robots: { index: false },
    };
  }

  return {
    title: "Contact",
    description: "Submit your case details for an initial review. No commitment — just a starting point.",
    robots: { index: false },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const m = getMessages(locale);
  const cp = m.contactPage;

  return (
    <>
      <ContactHero hero={cp.hero} />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_360px]">
          <ContactForm
            formNote={cp.formNote}
            form={cp.form}
            validation={cp.validation}
            issueTypes={cp.issueTypes}
            sellingPlanOptions={cp.sellingPlanOptions}
            businessModelOptions={cp.businessModelOptions}
            priorAppealsOptions={cp.priorAppealsOptions}
            success={cp.success}
            afterSubmit={cp.afterSubmit}
          />
          <ContactSidebar
            afterSubmit={cp.afterSubmit}
            faqItems={m.faqItems}
            whatsapp={cp.whatsapp}
            labels={cp.sidebarLabels}
          />
        </div>
      </section>
    </>
  );
}
