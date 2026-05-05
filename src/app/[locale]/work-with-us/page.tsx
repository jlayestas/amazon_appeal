import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, CheckCircle, ChevronDown, Mail } from "lucide-react";
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
    expandLabel: "View details",
    overviewLabel: "Overview",
    responsibilitiesLabel: "Responsibilities",
    backgroundLabel: "Preferred background",
    stepsLabel: "Steps to apply",
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
        responsibilities: [
          "Coordinate case intake, task assignment, deadlines, and internal handoffs.",
          "Track active matters and keep documentation, status notes, and next steps organized.",
          "Improve repeatable processes for review, drafting, quality control, and client follow-up.",
        ],
        steps: [
          "Send a resume with operations, project management, or professional services experience.",
          "Include a short note describing a workflow you improved or managed.",
          "Use the role name in the email subject.",
        ],
      },
      {
        title: "Account Manager",
        description:
          "Support client communication, case status updates, document collection, and expectation-setting throughout the appeal preparation process.",
        profile:
          "Best for someone with strong written communication, client-service judgment, and the ability to keep sensitive details organized.",
        responsibilities: [
          "Guide clients through intake, document requests, and status updates.",
          "Keep case facts, client communications, and pending items clear for the preparation team.",
          "Communicate service scope and timelines carefully without promising outcomes.",
        ],
        steps: [
          "Send a resume highlighting client management or account support experience.",
          "Include a short note about your experience handling sensitive client issues.",
          "Use the role name in the email subject.",
        ],
      },
      {
        title: "Appeal Consultant",
        description:
          "Review Amazon notices, account history, evidence, and prior submissions to help prepare clear appeal strategies and seller-controlled responses.",
        profile:
          "Best for someone with Amazon seller support, compliance, marketplace, account health, or document-heavy case experience.",
        responsibilities: [
          "Review suspension notices, ASIN issues, policy concerns, and supporting documents.",
          "Identify root cause, evidence gaps, corrective actions, and prevention points.",
          "Support Plan of Action and appeal preparation while staying within consulting and document-preparation scope.",
        ],
        steps: [
          "Send a resume with marketplace, compliance, account health, or appeal experience.",
          "Include a short note about the types of seller issues you have handled.",
          "Use the role name in the email subject.",
        ],
      },
      {
        title: "Sales Representative",
        description:
          "Handle qualified inquiries, explain service scope clearly, follow up with prospective clients, and help sellers understand whether the service is a fit.",
        profile:
          "Best for someone consultative, ethical, and comfortable selling professional services without guarantees or pressure tactics.",
        responsibilities: [
          "Respond to qualified leads and help prospects understand available service options.",
          "Follow up on inquiries, answer scope questions, and coordinate next steps with the team.",
          "Maintain accurate notes and avoid pressure tactics, guarantees, or unsupported claims.",
        ],
        steps: [
          "Send a resume with sales, intake, or client advisory experience.",
          "Include a short note about your approach to consultative sales.",
          "Use the role name in the email subject.",
        ],
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
    expandLabel: "Ver detalles",
    overviewLabel: "Resumen",
    responsibilitiesLabel: "Responsabilidades",
    backgroundLabel: "Perfil preferido",
    stepsLabel: "Pasos para aplicar",
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
        responsibilities: [
          "Coordinar intake de casos, asignacion de tareas, fechas limite y traspasos internos.",
          "Dar seguimiento a asuntos activos y mantener documentos, notas de estado y proximos pasos organizados.",
          "Mejorar procesos repetibles para revision, redaccion, control de calidad y seguimiento con clientes.",
        ],
        steps: [
          "Envia un curriculum con experiencia en operaciones, gestion de proyectos o servicios profesionales.",
          "Incluye una nota breve sobre un flujo de trabajo que hayas mejorado o administrado.",
          "Usa el nombre de la posicion en el asunto del correo.",
        ],
      },
      {
        title: "Account Manager",
        description:
          "Apoyar la comunicacion con clientes, actualizaciones de estado, recoleccion de documentos y manejo de expectativas durante la preparacion de apelaciones.",
        profile:
          "Ideal para alguien con excelente comunicacion escrita, criterio de servicio al cliente y capacidad para mantener detalles sensibles organizados.",
        responsibilities: [
          "Guiar a clientes durante intake, solicitudes de documentos y actualizaciones de estado.",
          "Mantener claros los hechos del caso, comunicaciones y pendientes para el equipo de preparacion.",
          "Comunicar alcance y tiempos con cuidado, sin prometer resultados.",
        ],
        steps: [
          "Envia un curriculum destacando experiencia en manejo de clientes o soporte de cuentas.",
          "Incluye una nota breve sobre tu experiencia manejando asuntos sensibles de clientes.",
          "Usa el nombre de la posicion en el asunto del correo.",
        ],
      },
      {
        title: "Consultor de Apelaciones",
        description:
          "Revisar avisos de Amazon, historial de cuenta, evidencia y presentaciones anteriores para apoyar estrategias de apelacion claras.",
        profile:
          "Ideal para alguien con experiencia en soporte a vendedores Amazon, cumplimiento, marketplaces, Account Health o casos documentales.",
        responsibilities: [
          "Revisar avisos de suspension, problemas de ASIN, asuntos de politica y documentos de apoyo.",
          "Identificar causa raiz, brechas de evidencia, acciones correctivas y puntos de prevencion.",
          "Apoyar la preparacion de Planes de Accion y apelaciones dentro del alcance de consultoria y preparacion de documentos.",
        ],
        steps: [
          "Envia un curriculum con experiencia en marketplaces, cumplimiento, Account Health o apelaciones.",
          "Incluye una nota breve sobre los tipos de problemas de vendedores que has manejado.",
          "Usa el nombre de la posicion en el asunto del correo.",
        ],
      },
      {
        title: "Representante de Ventas",
        description:
          "Atender consultas calificadas, explicar claramente el alcance del servicio, dar seguimiento a prospectos y ayudar a vendedores a entender si el servicio aplica.",
        profile:
          "Ideal para alguien consultivo, etico y comodo vendiendo servicios profesionales sin garantias ni tacticas de presion.",
        responsibilities: [
          "Responder a prospectos calificados y explicar las opciones de servicio disponibles.",
          "Dar seguimiento a consultas, responder preguntas de alcance y coordinar proximos pasos con el equipo.",
          "Mantener notas precisas y evitar tacticas de presion, garantias o afirmaciones sin respaldo.",
        ],
        steps: [
          "Envia un curriculum con experiencia en ventas, intake o asesoria a clientes.",
          "Incluye una nota breve sobre tu enfoque para ventas consultivas.",
          "Usa el nombre de la posicion en el asunto del correo.",
        ],
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
              <details
                key={job.title}
                className="group rounded-lg border border-slate-200 bg-white p-6 transition-colors open:border-[#c9a96e] open:bg-[#f9f7f4]"
              >
                <summary className="cursor-pointer list-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a2e4a]">
                  <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a2e4a]/8">
                    <BriefcaseBusiness size={18} className="text-[#1a2e4a]" aria-hidden="true" />
                  </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-bold text-[#1a2e4a]">{job.title}</h2>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.13em] text-[#8a7560]">
                        {c.expandLabel}
                      </p>
                    </div>
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{job.description}</p>
                  <div className="mt-5 flex gap-3 text-sm leading-relaxed text-slate-700">
                    <CheckCircle size={17} className="mt-1 shrink-0 text-[#1a2e4a]" aria-hidden="true" />
                    <p>{job.profile}</p>
                  </div>
                </summary>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.13em] text-[#8a7560]">
                    {c.responsibilitiesLabel}
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                        <CheckCircle size={16} className="mt-1 shrink-0 text-[#1a2e4a]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.13em] text-[#8a7560]">
                    {c.stepsLabel}
                  </h3>
                  <ol className="mt-3 space-y-3">
                    {job.steps.map((step, index) => (
                      <li key={step} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a2e4a] text-[10px] font-bold text-white">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>

                  <Link
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${c.subjectPrefix} - ${job.title}`)}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#1a2e4a] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#243d60]"
                  >
                    {c.emailLabel}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </details>
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
