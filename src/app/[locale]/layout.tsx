import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getMessages } from "@/messages";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { HtmlLang } from "@/components/ui/HtmlLang";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const m = getMessages(locale);
  return {
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        en: "/",
        es: "/es",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const m = getMessages(locale);

  return (
    <>
      <HtmlLang lang={m.htmlLang} />
      <a href="#main-content" className="skip-link">
        {m.nav.skipToContent}
      </a>
      <Header
        locale={locale}
        siteName={m.site.name}
        siteTagline={m.site.tagline}
        navLinks={m.nav.links}
        homeHref={m.nav.homeHref}
        ctaPrimary={m.site.ctaPrimary}
        contactHref={m.site.contactHref}
      />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer
        siteName={m.site.name}
        siteTagline={m.site.tagline}
        disclaimer={m.site.disclaimer}
        email={m.site.email}
        phone={m.site.phone}
        footerNav={m.footerNav}
        independentService={m.site.footerIndependentService}
        allRightsReserved={m.site.footerAllRightsReserved}
        notAffiliated={m.site.footerNotAffiliated}
      />
    </>
  );
}
