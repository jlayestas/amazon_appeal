import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, CheckCircle, Mail } from "lucide-react";
import { isValidLocale } from "@/i18n/routing";
import { absoluteUrl, jsonLd, localizedAlternates, ogMetadata, robotsFor, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const CONTACT_EMAIL = "contact@jrjreinstaters.com";

const content = {
  en: {
    metaTitle: "Work With Us",
    description:
      "Explore operations, account management, legal support, and sales opportunities with JRJ Reinstaters.",
    eyebrow: "Careers",
    headline: "Work with JRJ Reinstaters",
    intro:
      "We work with Amazon sellers who need careful case review, clear communication, and well-prepared submissions. If your background fits this kind of detail-oriented work, we would like to hear from you.",
    openingsLabel: "Open roles",
    applyLabel: "How to apply",
    applyBody:
      "Email your resume and a short note about the role you are interested in. Include relevant experience with Amazon seller issues, operations, client communication, compliance, legal support, or sales.",
    subjectLabel: "Suggested subject",
    subjectPrefix: "Work With Us",
    emailLabel: "Email application",
    note:
      "Roles may be remote, contract, part-time, or full-time depending on business needs and candidate fit. JRJ Reinstaters is an independent consulting and document preparation service.",
    roleNameLabel: "Role Name",
    jobs: [
      {
        title: "Operations Manager",
        description:
          "Own day-to-day workflow, case intake coordination, internal follow-ups, and process improvements so client work moves cleanly from review to delivery.",
        profile:
          "Best for someone organized, calm under deadlines, and comfortable building repeatable systems for a small professional services team.",
      },
      {
        title: "Account Manager",
        description:
          "Support client communication, case status updates, document collection, and expectation-setting throughout the appeal preparation process.",
        profile:
          "Best for someone with strong written communication, client-service judgment, and the ability to keep sensitive details organized.",
      },
      {
        title: "Paralegal",
        description:
          "Assist with document review, evidence organization, issue summaries, policy research, and preparation support for Amazon seller matters.",
        profile:
          "Best for someone with paralegal, compliance, or document-heavy case experience who can work carefully without overstating claims.",
      },
      {
        title: "Lawyer",
        description:
          "Provide legal perspective where appropriate on intellectual property, business documentation, dispute posture, and escalation-sensitive matters.",
        profile:
          "Best for a licensed attorney with marketplace, IP, commercial, or compliance experience who understands the limits of consulting support.",
      },
      {
        title: "Sales Representative",
        description:
          "Handle qualified inquiries, explain service scope clearly, follow up with prospective clients, and help sellers understand whether the service is a fit.",
        profile:
          "Best for someone consultative, ethical, and comfortable selling professional services without guarantees or pressure tactics.",
      },
    ],
  },
  es: {
    metaTitle: "Trabaja con Nosotros",
    description:
      "Explora oportunidades en operaciones, manejo de cuentas, apoyo legal y ventas con JRJ Reinstaters.",
    eyebrow: "Carreras",
    headline: "Trabaja con JRJ Reinstaters",
    intro:
      "Trabajamos con vendedores de Amazon que necesitan revision cuidadosa, comunicacion clara y presentaciones bien preparadas. Si tu experiencia encaja con este tipo de trabajo detallado, nos gustaria saber de ti.",
    openingsLabel: "Posiciones abiertas",
    applyLabel: "Como aplicar",
    applyBody:
      "Envia tu curriculum y una nota breve sobre la posicion que te interesa. Incluye experiencia relevante con casos de vendedores Amazon, operaciones, comunicacion con clientes, cumplimiento, apoyo legal o ventas.",
    subjectLabel: "Asunto sugerido",
    subjectPrefix: "Trabaja con Nosotros",
    emailLabel: "Enviar solicitud",
    note:
      "Las posiciones pueden ser remotas, por contrato, medio tiempo o tiempo completo segun las necesidades del negocio y el perfil del candidato. JRJ Reinstaters es un servicio independiente de consultoria y preparacion de documentos.",
    roleNameLabel: "Nombre de la posicion",
    jobs: [
      {
        title: "Gerente de Operaciones",
        description:
          "Coordinar el flujo diario de trabajo, intake de casos, seguimientos internos y mejoras de proceso para que cada caso avance de revision a entrega con orden.",
        profile:
          "Ideal para una persona organizada, tranquila bajo fechas limite y capaz de crear sistemas repetibles para un equipo pequeno de servicios profesionales.",
      },
      {
        title: "Account Manager",
        description:
          "Apoyar la comunicacion con clientes, actualizaciones de estado, recoleccion de documentos y manejo de expectativas durante la preparacion de apelaciones.",
        profile:
          "Ideal para alguien con excelente comunicacion escrita, criterio de servicio al cliente y capacidad para mantener detalles sensibles organizados.",
      },
      {
        title: "Paralegal",
        description:
          "Ayudar con revision de documentos, organizacion de evidencia, resumenes de asuntos, investigacion de politicas y preparacion de casos de vendedores Amazon.",
        profile:
          "Ideal para alguien con experiencia paralegal, cumplimiento o manejo de casos documentales que pueda trabajar con precision.",
      },
      {
        title: "Abogado",
        description:
          "Aportar perspectiva legal cuando sea apropiado en propiedad intelectual, documentacion comercial, postura de disputa y asuntos sensibles a escalacion.",
        profile:
          "Ideal para un abogado licenciado con experiencia en marketplaces, PI, asuntos comerciales o cumplimiento, y claridad sobre los limites del apoyo consultivo.",
      },
      {
        title: "Representante de Ventas",
        description:
          "Atender consultas calificadas, explicar claramente el alcance del servicio, dar seguimiento a prospectos y ayudar a vendedores a entender si el servicio aplica.",
        profile:
          "Ideal para alguien consultivo, etico y comodo vendiendo servicios profesionales sin garantias ni tacticas de presion.",
      },
    ],
  },
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const c = content[locale];
  return {
    title: c.metaTitle,
    description: c.description,
    alternates: localizedAlternates(locale, "work-with-us"),
    robots: robotsFor(true),
    openGraph: ogMetadata(locale, "work-with-us", `${c.metaTitle} — ${SITE_NAME}`, c.description),
  };
}

export default async function WorkWithUsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const c = content[locale];
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${c.subjectPrefix} - `)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: c.metaTitle,
    description: c.description,
    url: absoluteUrl(locale, "work-with-us"),
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <section className="bg-[#0c1a2e] px-5 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#c9a96e]">
            {c.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            {c.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{c.intro}</p>
          <Link
            href={mailtoHref}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#c9a96e] px-6 py-3 text-sm font-bold text-[#0f1e35] hover:bg-[#dbbf88]"
          >
            <Mail size={16} aria-hidden="true" />
            {c.emailLabel}
          </Link>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#8a7560]">
            {c.openingsLabel}
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {c.jobs.map((job) => (
              <article key={job.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
                    <BriefcaseBusiness size={18} className="text-[#1a2e4a]" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1a2e4a]">{job.title}</h2>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{job.description}</p>
                <div className="mt-5 flex gap-3 text-sm leading-relaxed text-slate-700">
                  <CheckCircle size={17} className="mt-1 shrink-0 text-[#1a2e4a]" aria-hidden="true" />
                  <p>{job.profile}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f9f7f4] px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-bold text-[#1a2e4a]">{c.applyLabel}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{c.applyBody}</p>
          <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <p>
              <span className="font-semibold text-[#1a2e4a]">{c.subjectLabel}: </span>
              {c.subjectPrefix} - [{c.roleNameLabel}]
            </p>
            <p>
              <span className="font-semibold text-[#1a2e4a]">Email: </span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#1a2e4a] hover:text-[#8a7560]">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-slate-500">{c.note}</p>
          <Link
            href={mailtoHref}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#1a2e4a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#243d60]"
          >
            {c.emailLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
