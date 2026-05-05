import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle } from "lucide-react";
import { isValidLocale } from "@/i18n/routing";
import {
  getBlogPost,
  getBlogPostTranslations,
  getBlogStaticParams,
  type BlogBlock,
} from "@/lib/blogPosts";
import {
  absoluteUrl,
  jsonLd,
  ogMetadata,
  robotsFor,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const copy = {
  en: {
    back: "Back to blog",
    published: "Published",
    updated: "Updated",
    related: "Related support",
    contact: "Start a case review",
    allPosts: "View all guides",
  },
  es: {
    back: "Volver al blog",
    published: "Publicado",
    updated: "Actualizado",
    related: "Apoyo relacionado",
    contact: "Solicitar revision de caso",
    allPosts: "Ver todas las guias",
  },
};

function formatDate(locale: "en" | "es", date: string) {
  return new Intl.DateTimeFormat(locale === "es" ? "es-US" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}

function blogAlternates(locale: "en" | "es", slug: string, translationKey: string): Metadata["alternates"] {
  const translations = getBlogPostTranslations(translationKey);
  const languages = {
    en: translations.en ? absoluteUrl("en", `blog/${translations.en.slug}`) : absoluteUrl("en", `blog/${slug}`),
    es: translations.es ? absoluteUrl("es", `blog/${translations.es.slug}`) : absoluteUrl("es", `blog/${slug}`),
    "x-default": translations.en
      ? absoluteUrl("en", `blog/${translations.en.slug}`)
      : absoluteUrl(locale, `blog/${slug}`),
  };

  return {
    canonical: absoluteUrl(locale, `blog/${slug}`),
    languages,
  };
}

function renderBlock(block: BlogBlock) {
  if (block.type === "heading") {
    const className =
      block.level === 2
        ? "mt-10 text-2xl font-bold text-[#1a2e4a]"
        : "mt-8 text-xl font-bold text-[#1a2e4a]";
    const Tag = block.level === 2 ? "h2" : "h3";
    return (
      <Tag key={block.text} className={className}>
        {block.text}
      </Tag>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={block.items.join("|")} className="mt-5 space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-700">
            <CheckCircle size={17} className="mt-1 shrink-0 text-[#1a2e4a]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={block.text} className="mt-4 text-base leading-8 text-slate-700">
      {block.text}
    </p>
  );
}

export function generateStaticParams() {
  return getBlogStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};

  const post = getBlogPost(locale, slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: blogAlternates(locale, slug, post.translationKey),
    robots: robotsFor(true),
    openGraph: ogMetadata(locale, `blog/${slug}`, `${post.title} — ${SITE_NAME}`, post.description),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const c = copy[locale];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: locale,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/${locale}/blog/${post.slug}`,
  };
  const relatedHref = post.relatedTopic ? `/${locale}/topics/${post.relatedTopic}` : `/${locale}/services`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
      <article>
        <section className="bg-[#0c1a2e] px-5 pb-20 pt-36 text-white">
          <div className="mx-auto max-w-4xl">
            <Link
              href={`/${locale}/blog`}
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#c9a96e] hover:text-[#dbbf88]"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              {c.back}
            </Link>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.13em] text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={14} aria-hidden="true" />
                {c.published} {formatDate(locale, post.date)}
              </span>
              {post.updated && <span>{c.updated} {formatDate(locale, post.updated)}</span>}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              {post.description}
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_300px]">
            <div className="min-w-0">{post.body.map(renderBlock)}</div>

            <aside className="h-fit rounded-lg border border-slate-200 bg-[#f9f7f4] p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.13em] text-[#8a7560]">
                {c.related}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={relatedHref}
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#1a2e4a] px-4 py-3 text-sm font-semibold text-white hover:bg-[#243d60]"
              >
                {c.related}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#c9a96e] px-4 py-3 text-sm font-bold text-[#0f1e35] hover:bg-[#dbbf88]"
              >
                {c.contact}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="mt-4 inline-flex w-full items-center justify-center text-sm font-semibold text-[#1a2e4a] hover:text-[#8a7560]"
              >
                {c.allPosts}
              </Link>
            </aside>
          </div>
        </section>
      </article>
    </>
  );
}
