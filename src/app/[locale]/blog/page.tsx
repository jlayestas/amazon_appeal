import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/routing";
import { getBlogPosts } from "@/lib/blogPosts";
import {
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

const copy = {
  en: {
    title: "Amazon Seller Appeal Blog",
    description:
      "Practical guidance for Amazon sellers dealing with suspensions, Plans of Action, ASIN removals, and appeal preparation.",
    eyebrow: "Seller Guides",
    headline: "Amazon seller appeal guidance",
    intro:
      "Focused notes for sellers trying to understand notices, organize documents, and prepare clearer submissions.",
    readMore: "Read guide",
    published: "Published",
  },
  es: {
    title: "Blog de Apelaciones para Vendedores de Amazon",
    description:
      "Guias practicas para vendedores de Amazon con suspensiones, Planes de Accion, eliminaciones de ASIN y preparacion de apelaciones.",
    eyebrow: "Guias para Vendedores",
    headline: "Orientacion para apelaciones de vendedores Amazon",
    intro:
      "Notas enfocadas para entender avisos, organizar documentos y preparar presentaciones mas claras.",
    readMore: "Leer guia",
    published: "Publicado",
  },
};

function formatDate(locale: "en" | "es", date: string) {
  return new Intl.DateTimeFormat(locale === "es" ? "es-US" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const c = copy[locale];

  return {
    title: c.title,
    description: c.description,
    alternates: localizedAlternates(locale, "blog"),
    robots: robotsFor(true),
    openGraph: ogMetadata(locale, "blog", `${c.title} — ${SITE_NAME}`, c.description),
  };
}

export default async function BlogIndexPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const posts = getBlogPosts(locale);
  const c = copy[locale];
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: c.title,
    description: c.description,
    url: `${SITE_URL}/${locale}/blog`,
    publisher: { "@type": "Organization", name: SITE_NAME },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `${SITE_URL}/${locale}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(blogSchema)} />
      <section className="bg-[#0c1a2e] px-5 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#c9a96e]">
            {c.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            {c.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{c.intro}</p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex min-h-[360px] flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-[#c9a96e] hover:bg-[#f9f7f4]"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8a7560]">
                <CalendarDays size={14} aria-hidden="true" />
                <span>
                  {c.published} {formatDate(locale, post.date)}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-bold leading-snug text-[#1a2e4a]">
                <Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1a2e4a] hover:text-[#8a7560]"
              >
                {c.readMore}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
