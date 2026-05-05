import type { Locale } from "@/i18n/routing";
import type { TopicSlug } from "@/lib/seo";

interface TopicPage {
  slug: TopicSlug;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  headline: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
    bullets?: readonly string[];
  }[];
  relatedServices: readonly string[];
  faq: readonly {
    question: string;
    answer: string;
  }[];
}

const enTopics: Record<TopicSlug, TopicPage> = {
  "amazon-account-suspension-appeal-help": {
    slug: "amazon-account-suspension-appeal-help",
    title: "Amazon Account Suspension Appeal Help",
    metaTitle: "Amazon Seller Suspension Appeal Support",
    description:
      "Independent Amazon seller suspension appeal support for account deactivations, policy notices, performance issues, and verification-related suspensions.",
    eyebrow: "Account Suspensions",
    headline: "Amazon Account Suspension Appeal Help",
    intro:
      "A suspension notice can be vague, urgent, and expensive. The first step is to understand what Amazon cited, what evidence supports your response, and how to frame a clear appeal without overstating the case.",
    sections: [
      {
        heading: "When this support fits",
        body: "This service is built for sellers who need a structured response to an account-level suspension, deactivation, or seller performance notice.",
        bullets: [
          "Account suspended for performance metrics or buyer complaints",
          "Policy violation notices that require a written appeal",
          "Verification or compliance issues affecting account access",
          "Prior appeal attempts that were rejected or unclear",
        ],
      },
      {
        heading: "What the appeal work focuses on",
        body: "The response is prepared around the specific notice, account history, and supporting documents. The goal is a concise appeal that addresses root cause, corrective action, and prevention clearly.",
      },
    ],
    relatedServices: ["Account Reinstatement", "Plan of Action drafting", "Document review"],
    faq: [
      {
        question: "Can you guarantee account reinstatement?",
        answer:
          "No. Amazon makes the final decision. Support is limited to case analysis, document preparation, appeal drafting, and submission guidance.",
      },
      {
        question: "What should I share for an account suspension review?",
        answer:
          "Start with the suspension notice, relevant account health details, prior appeal attempts, and any documents Amazon requested.",
      },
    ],
  },
  "amazon-plan-of-action-writing-support": {
    slug: "amazon-plan-of-action-writing-support",
    title: "Amazon Plan of Action Writing Support",
    metaTitle: "Amazon Plan of Action Help",
    description:
      "Plan of Action writing support for Amazon sellers who need a clear POA covering root cause, corrective actions, and preventive measures.",
    eyebrow: "Appeals & POAs",
    headline: "Amazon Plan of Action Help",
    intro:
      "A strong Plan of Action is specific, factual, and tied to the issue Amazon identified. It should not read like a template or make promises the account cannot support.",
    sections: [
      {
        heading: "What a POA needs to answer",
        body: "Most Plans of Action need to make three points easy to review: what happened, what has already been fixed, and what changed so the same problem is less likely to happen again.",
        bullets: [
          "Root cause tied to the notice",
          "Corrective actions already completed",
          "Preventive changes with realistic controls",
          "Supporting evidence that matches the narrative",
        ],
      },
      {
        heading: "How drafting support works",
        body: "The notice, prior submissions, evidence, and account context are reviewed before drafting. The finished POA is written for seller submission and reviewed for clarity before it is sent.",
      },
    ],
    relatedServices: ["Appeal drafting", "Submission-language review", "Evidence review"],
    faq: [
      {
        question: "Do you write template POAs?",
        answer:
          "No. Each POA is built around the specific notice, facts, and supporting documents available for that case.",
      },
      {
        question: "Can you revise a rejected POA?",
        answer:
          "Yes. Prior submissions can be reviewed to identify gaps, unclear framing, or unsupported claims before a revised response is prepared.",
      },
    ],
  },
  "asin-removed-or-suppressed": {
    slug: "asin-removed-or-suppressed",
    title: "ASIN Removed or Suppressed",
    metaTitle: "ASIN Reinstatement Support",
    description:
      "ASIN reinstatement support for Amazon listings that were removed, suppressed, restricted, or deactivated after a policy or compliance issue.",
    eyebrow: "ASIN & Listings",
    headline: "ASIN Reinstatement Support",
    intro:
      "A removed or suppressed ASIN often needs a listing-specific response, not a full account appeal. The issue may involve catalog data, product compliance, customer complaints, or missing documentation.",
    sections: [
      {
        heading: "Common ASIN issues",
        body: "Listing problems vary by category and notice type. The response should match the exact removal reason and avoid adding unrelated arguments.",
        bullets: [
          "ASIN removed for safety or compliance concerns",
          "Suppressed listings with incomplete catalog information",
          "Restricted products or category policy flags",
          "Customer complaint or product condition notices",
        ],
      },
      {
        heading: "What support includes",
        body: "The notice is reviewed, supporting documents are organized, and appeal language is prepared around the specific product and policy issue.",
      },
    ],
    relatedServices: ["ASIN appeal drafting", "Document review", "Catalog issue analysis"],
    faq: [
      {
        question: "Is ASIN reinstatement different from account reinstatement?",
        answer:
          "Yes. ASIN appeals are usually listing-specific and focus on the product, policy reason, and supporting documentation for that listing.",
      },
      {
        question: "Can you help if Amazon did not give a clear reason?",
        answer:
          "Yes. The first step is to review the notice, listing history, and product category to identify the most likely issue before drafting a response.",
      },
    ],
  },
  "amazon-intellectual-property-complaint": {
    slug: "amazon-intellectual-property-complaint",
    title: "Amazon Intellectual Property Complaint Support",
    metaTitle: "Amazon IP Complaint Support",
    description:
      "Amazon IP complaint support for sellers who received trademark, copyright, patent, or brand complaints and need a structured response.",
    eyebrow: "Brand & IP",
    headline: "Amazon IP Complaint Support",
    intro:
      "An IP complaint can affect a listing or an entire account. The response needs to account for the complaint type, the rights asserted, your documents, and any communication with the complaining party.",
    sections: [
      {
        heading: "Issues this can cover",
        body: "Support is available for sellers responding to a complaint and for brand owners preparing a complaint package.",
        bullets: [
          "Trademark, copyright, or patent complaints",
          "Brand complaints affecting an ASIN or account",
          "Complaint retraction requests and response language",
          "Evidence organization for authorized sourcing or brand ownership",
        ],
      },
      {
        heading: "Independent preparation",
        body: "This is consulting and document preparation support, not legal representation. If legal advice is needed, sellers should consult a qualified attorney.",
      },
    ],
    relatedServices: ["Complaint response", "Evidence organization", "Brand complaint drafting"],
    faq: [
      {
        question: "Do you provide legal advice for IP disputes?",
        answer:
          "No. This service does not provide legal advice or representation. It helps organize facts, documents, and response language for seller-controlled submissions.",
      },
      {
        question: "Can you help with a complaint retraction request?",
        answer:
          "Yes. Support can include reviewing the complaint context and preparing clear communication for the seller or brand owner to send.",
      },
    ],
  },
  "inauthentic-counterfeit-complaint-response": {
    slug: "inauthentic-counterfeit-complaint-response",
    title: "Inauthentic or Counterfeit Complaint Response",
    metaTitle: "Inauthentic and Counterfeit Complaint Response Support",
    description:
      "Support for Amazon inauthentic, counterfeit, and product authenticity complaints, including evidence review and appeal response drafting.",
    eyebrow: "Authenticity Complaints",
    headline: "Inauthentic and Counterfeit Complaint Response Support",
    intro:
      "Inauthentic and counterfeit allegations are document-heavy. The response must connect sourcing records, product history, and corrective steps to the concern Amazon raised.",
    sections: [
      {
        heading: "What is reviewed",
        body: "The strongest response depends on the quality and relevance of the supporting materials. Weak or incomplete documents should be identified before submission.",
        bullets: [
          "Amazon notices and affected ASINs",
          "Invoices, receipts, and supplier records",
          "Prior appeal attempts and Amazon responses",
          "Product condition and sourcing history",
        ],
      },
      {
        heading: "Response preparation",
        body: "The appeal language is prepared to explain the source of the issue, what was corrected, and what controls are now in place, while keeping claims supported by evidence.",
      },
    ],
    relatedServices: ["Authenticity appeal drafting", "Invoice review", "Account suspension support"],
    faq: [
      {
        question: "Can poor invoices hurt an authenticity appeal?",
        answer:
          "Yes. Documents that are incomplete, irrelevant, or inconsistent can weaken the appeal. Document review should happen before drafting is finalized.",
      },
      {
        question: "Is this only for account suspensions?",
        answer:
          "No. Authenticity issues can affect an ASIN, a listing, or an account depending on the notice and complaint history.",
      },
    ],
  },
  "amazon-account-verification-deactivation": {
    slug: "amazon-account-verification-deactivation",
    title: "Amazon Account Verification or Deactivation Support",
    metaTitle: "Amazon Account Verification and Deactivation Support",
    description:
      "Support for Amazon seller account verification holds, identity review issues, business verification requests, and related deactivations.",
    eyebrow: "Verification",
    headline: "Amazon Account Verification and Deactivation Support",
    intro:
      "Verification-related deactivations often turn on consistency: business details, identity information, addresses, documents, and account history all need to align.",
    sections: [
      {
        heading: "Common verification problems",
        body: "A verification response should be organized around the exact request Amazon made and the documents available to support it.",
        bullets: [
          "Identity or business verification holds",
          "Address, tax, or entity mismatch concerns",
          "Document requests after account changes",
          "Deactivation following incomplete verification",
        ],
      },
      {
        heading: "What support includes",
        body: "Available documents are reviewed for consistency, gaps are flagged, and response language is prepared so the seller can submit a clear package.",
      },
    ],
    relatedServices: ["Verification document review", "Account deactivation response", "Submission guidance"],
    faq: [
      {
        question: "Do I need every requested document before reaching out?",
        answer:
          "No. Share what you have. The review can identify gaps and help clarify what still needs to be gathered.",
      },
      {
        question: "Can you submit documents for me?",
        answer:
          "No. You remain in control of your account and submissions. Support focuses on preparation and guidance.",
      },
    ],
  },
};

const esTopics: Record<TopicSlug, TopicPage> = {
  "amazon-account-suspension-appeal-help": {
    slug: "amazon-account-suspension-appeal-help",
    title: "Ayuda para Apelar una Suspensión de Cuenta de Amazon",
    metaTitle: "Apoyo para Apelar Suspensiones de Vendedores de Amazon",
    description:
      "Apoyo independiente para vendedores de Amazon con suspensiones de cuenta, desactivaciones, avisos de política, problemas de rendimiento o verificación.",
    eyebrow: "Suspensiones de Cuenta",
    headline: "Ayuda para Apelar una Suspensión de Cuenta de Amazon",
    intro:
      "Un aviso de suspensión puede ser urgente, costoso y poco claro. El primer paso es entender qué citó Amazon, qué evidencia respalda la respuesta y cómo presentar una apelación clara.",
    sections: [
      {
        heading: "Cuándo aplica este apoyo",
        body: "Este servicio está diseñado para vendedores que necesitan una respuesta estructurada ante una suspensión, desactivación o aviso de rendimiento.",
        bullets: [
          "Cuenta suspendida por métricas de rendimiento o quejas de clientes",
          "Avisos de infracción de política que requieren apelación escrita",
          "Problemas de verificación o cumplimiento que afectan el acceso",
          "Apelaciones previas rechazadas o poco claras",
        ],
      },
      {
        heading: "En qué se enfoca la apelación",
        body: "La respuesta se prepara según el aviso específico, el historial de la cuenta y los documentos de apoyo disponibles.",
      },
    ],
    relatedServices: ["Reactivación de cuenta", "Elaboración de Plan de Acción", "Revisión de documentos"],
    faq: [
      {
        question: "¿Garantizan la reactivación?",
        answer:
          "No. Amazon toma la decisión final. El apoyo se limita al análisis del caso, preparación de documentos, redacción de apelaciones y orientación.",
      },
      {
        question: "¿Qué debo compartir?",
        answer:
          "El aviso de suspensión, detalles relevantes del estado de cuenta, apelaciones previas y documentos solicitados por Amazon.",
      },
    ],
  },
  "amazon-plan-of-action-writing-support": {
    slug: "amazon-plan-of-action-writing-support",
    title: "Apoyo para Redactar un Plan de Acción de Amazon",
    metaTitle: "Ayuda con Planes de Acción de Amazon",
    description:
      "Apoyo para redactar Planes de Acción de Amazon con causa raíz, acciones correctivas y medidas preventivas claras.",
    eyebrow: "Apelaciones y POA",
    headline: "Ayuda con Planes de Acción de Amazon",
    intro:
      "Un Plan de Acción sólido es específico, factual y vinculado al problema identificado por Amazon. No debe parecer una plantilla ni prometer algo que la cuenta no puede respaldar.",
    sections: [
      {
        heading: "Qué debe responder un POA",
        body: "La mayoría de los Planes de Acción deben explicar qué pasó, qué ya fue corregido y qué cambió para evitar que el problema se repita.",
        bullets: [
          "Causa raíz vinculada al aviso",
          "Acciones correctivas completadas",
          "Cambios preventivos realistas",
          "Evidencia que coincide con la explicación",
        ],
      },
      {
        heading: "Cómo funciona la redacción",
        body: "Se revisan el aviso, presentaciones previas, evidencia y contexto de la cuenta antes de preparar el Plan de Acción.",
      },
    ],
    relatedServices: ["Redacción de apelaciones", "Revisión del lenguaje", "Revisión de evidencia"],
    faq: [
      {
        question: "¿Usan plantillas?",
        answer:
          "No. Cada POA se prepara según el aviso específico, los hechos y los documentos disponibles.",
      },
      {
        question: "¿Pueden revisar un POA rechazado?",
        answer:
          "Sí. Se pueden revisar presentaciones previas para identificar brechas, enfoque poco claro o afirmaciones sin respaldo.",
      },
    ],
  },
  "asin-removed-or-suppressed": {
    slug: "asin-removed-or-suppressed",
    title: "ASIN Eliminado o Suprimido",
    metaTitle: "Apoyo para Reactivar ASIN en Amazon",
    description:
      "Apoyo para ASIN de Amazon eliminados, suprimidos, restringidos o desactivados por problemas de política o cumplimiento.",
    eyebrow: "ASIN y Listados",
    headline: "Apoyo para Reactivar ASIN en Amazon",
    intro:
      "Un ASIN eliminado o suprimido suele requerir una respuesta específica del listado. El problema puede estar en datos de catálogo, cumplimiento del producto, quejas o documentación faltante.",
    sections: [
      {
        heading: "Problemas comunes de ASIN",
        body: "La respuesta debe coincidir con la razón exacta de eliminación y evitar argumentos que no correspondan al aviso.",
        bullets: [
          "ASIN eliminado por seguridad o cumplimiento",
          "Listado suprimido por información incompleta",
          "Producto restringido por política de categoría",
          "Avisos por quejas de clientes o condición del producto",
        ],
      },
      {
        heading: "Qué incluye el apoyo",
        body: "Se revisa el aviso, se organizan documentos de apoyo y se prepara lenguaje de apelación para el producto y la política específica.",
      },
    ],
    relatedServices: ["Apelaciones de ASIN", "Revisión de documentos", "Análisis de catálogo"],
    faq: [
      {
        question: "¿Es diferente a reactivar una cuenta?",
        answer:
          "Sí. Las apelaciones de ASIN suelen enfocarse en un listado, producto, política y documentación específicos.",
      },
      {
        question: "¿Pueden ayudar si Amazon no dio una razón clara?",
        answer:
          "Sí. El primer paso es revisar el aviso, historial del listado y categoría para identificar el problema más probable.",
      },
    ],
  },
  "amazon-intellectual-property-complaint": {
    slug: "amazon-intellectual-property-complaint",
    title: "Apoyo para Quejas de Propiedad Intelectual en Amazon",
    metaTitle: "Apoyo para Quejas de PI en Amazon",
    description:
      "Apoyo para vendedores con quejas de marca, derechos de autor, patente o propiedad intelectual en Amazon.",
    eyebrow: "Marca y PI",
    headline: "Apoyo para Quejas de PI en Amazon",
    intro:
      "Una queja de propiedad intelectual puede afectar un listado o una cuenta completa. La respuesta debe considerar el tipo de queja, los derechos reclamados, tus documentos y cualquier comunicación previa.",
    sections: [
      {
        heading: "Problemas cubiertos",
        body: "Hay apoyo para vendedores que responden a una queja y para propietarios de marca que preparan una queja.",
        bullets: [
          "Quejas de marca, derechos de autor o patente",
          "Quejas que afectan un ASIN o cuenta",
          "Solicitudes de retractación y lenguaje de respuesta",
          "Organización de evidencia de proveedor autorizado o titularidad",
        ],
      },
      {
        heading: "Preparación independiente",
        body: "Este es apoyo de consultoría y preparación de documentos, no representación legal. Si necesitas asesoría legal, consulta a un abogado calificado.",
      },
    ],
    relatedServices: ["Respuesta a quejas", "Organización de evidencia", "Redacción de quejas"],
    faq: [
      {
        question: "¿Ofrecen asesoría legal?",
        answer:
          "No. Este servicio no ofrece asesoría ni representación legal. Ayuda a organizar hechos, documentos y lenguaje de respuesta.",
      },
      {
        question: "¿Pueden ayudar con una retractación?",
        answer:
          "Sí. El apoyo puede incluir revisar el contexto y preparar comunicación clara para que el vendedor o propietario de marca la envíe.",
      },
    ],
  },
  "inauthentic-counterfeit-complaint-response": {
    slug: "inauthentic-counterfeit-complaint-response",
    title: "Respuesta a Quejas de Inautenticidad o Falsificación",
    metaTitle: "Apoyo para Quejas de Inautenticidad y Falsificación",
    description:
      "Apoyo para responder a quejas de inautenticidad, falsificación o autenticidad de producto en Amazon.",
    eyebrow: "Quejas de Autenticidad",
    headline: "Apoyo para Quejas de Inautenticidad y Falsificación",
    intro:
      "Las alegaciones de inautenticidad o falsificación dependen mucho de los documentos. La respuesta debe conectar proveedores, historial del producto y acciones correctivas.",
    sections: [
      {
        heading: "Qué se revisa",
        body: "La solidez de la respuesta depende de la calidad y relevancia de los documentos de apoyo.",
        bullets: [
          "Avisos de Amazon y ASIN afectados",
          "Facturas, recibos y registros de proveedores",
          "Apelaciones previas y respuestas de Amazon",
          "Historial de condición y abastecimiento del producto",
        ],
      },
      {
        heading: "Preparación de respuesta",
        body: "La apelación se prepara para explicar el origen del problema, qué se corrigió y qué controles existen, manteniendo las afirmaciones respaldadas por evidencia.",
      },
    ],
    relatedServices: ["Apelación de autenticidad", "Revisión de facturas", "Apoyo en suspensión"],
    faq: [
      {
        question: "¿Facturas débiles pueden perjudicar una apelación?",
        answer:
          "Sí. Documentos incompletos, irrelevantes o inconsistentes pueden debilitar la apelación.",
      },
      {
        question: "¿Esto solo aplica a suspensiones de cuenta?",
        answer:
          "No. Los problemas de autenticidad pueden afectar un ASIN, listado o cuenta según el aviso.",
      },
    ],
  },
  "amazon-account-verification-deactivation": {
    slug: "amazon-account-verification-deactivation",
    title: "Apoyo para Verificación o Desactivación de Cuenta de Amazon",
    metaTitle: "Apoyo para Verificación y Desactivación de Cuenta de Amazon",
    description:
      "Apoyo para retenciones de verificación, revisión de identidad, solicitudes de verificación de negocio y desactivaciones relacionadas.",
    eyebrow: "Verificación",
    headline: "Apoyo para Verificación y Desactivación de Cuenta de Amazon",
    intro:
      "Las desactivaciones por verificación suelen depender de la consistencia entre datos del negocio, identidad, direcciones, documentos e historial de cuenta.",
    sections: [
      {
        heading: "Problemas comunes",
        body: "La respuesta debe organizarse según la solicitud exacta de Amazon y los documentos disponibles.",
        bullets: [
          "Retenciones de identidad o verificación de negocio",
          "Inconsistencias de dirección, impuestos o entidad",
          "Solicitudes de documentos tras cambios en la cuenta",
          "Desactivación por verificación incompleta",
        ],
      },
      {
        heading: "Qué incluye el apoyo",
        body: "Se revisan documentos por consistencia, se identifican brechas y se prepara lenguaje de respuesta para una presentación clara.",
      },
    ],
    relatedServices: ["Revisión de documentos", "Respuesta a desactivación", "Orientación de presentación"],
    faq: [
      {
        question: "¿Necesito todos los documentos antes de contactar?",
        answer:
          "No. Comparte lo que tengas. La revisión puede identificar brechas y aclarar qué falta reunir.",
      },
      {
        question: "¿Pueden enviar documentos por mí?",
        answer:
          "No. Tú mantienes el control de tu cuenta y presentaciones. El apoyo se enfoca en preparación y orientación.",
      },
    ],
  },
};

export function getTopic(locale: Locale, slug: TopicSlug) {
  return locale === "es" ? esTopics[slug] : enTopics[slug];
}

export function getTopics(locale: Locale) {
  return Object.values(locale === "es" ? esTopics : enTopics);
}

export type { TopicPage };
