// English content — single source of truth for EN locale
// All hrefs are un-prefixed (middleware rewrites / -> /en internally)

export const messages = {
  locale: "en" as const,
  htmlLang: "en",

  site: {
    name: "Underdogs Appeal Pro",
    tagline: "Independent Amazon Reinstatement Consulting",
    disclaimer:
      "Independent consulting and document preparation assistance. Not affiliated with, endorsed by, or a representative of Amazon.com, Inc. or any of its subsidiaries. No specific outcome is guaranteed.",
    ctaPrimary: "Start Your Case Review",
    ctaSecondary: "See How It Works",
    contactHref: "/contact",
    processHref: "/process",
    email: "hello@amazonappealpro.com",
    phone: "+1 (000) 000-0000",
    footerIndependentService: "Independent Service.",
    footerAllRightsReserved: "All rights reserved.",
    footerNotAffiliated: "Not affiliated with Amazon.com, Inc. or any of its subsidiaries.",
  },

  nav: {
    links: [
      { label: "Services", href: "/services" },
      { label: "How It Works", href: "/process" },
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
    ],
    homeHref: "/",
    switchLang: "Español",
    switchLangHref: "/es",
    skipToContent: "Skip to main content",
  },

  hero: {
    eyebrow: "Independent Amazon Consulting",
    headline: "When Your Amazon Business Hits a Wall,\nYou Need the Right Strategy.",
    subheadline:
      "Independent support for account suspensions, ASIN removals, and brand complaints — prepared carefully, submitted with clarity.",
    trustSignals: ["Confidential", "Independent", "No affiliation with Amazon"],
  },

  trustStrip: [
    { value: "500+", label: "Cases Reviewed" },
    { value: "10+", label: "Years of Experience" },
    { value: "3", label: "Core Practice Areas" },
    { value: "100%", label: "Independent & Unbiased" },
  ],

  servicesSection: {
    sectionLabel: "What I Help With",
    headline: "Three Areas of Practice",
    subheadline: "Every service is focused on one goal: giving your case the best possible foundation.",
    viewAll: "View All Services",
    viewAllHref: "/services",
    items: [
      {
        id: "account-support",
        icon: "ShieldCheck",
        title: "Account Reinstatement",
        summary: "For sellers facing account-level suspensions or compliance concerns.",
        items: [
          "Account suspension analysis",
          "Plan of Action (POA) drafting",
          "Appeal letter preparation",
          "Seller performance strategy",
          "Submission-language review",
        ],
      },
      {
        id: "asin-support",
        icon: "Package",
        title: "ASIN Reinstatement",
        summary: "For sellers with suppressed, removed, or restricted listings.",
        items: [
          "ASIN suspension analysis",
          "ASIN reinstatement support",
          "Appeal drafting for listing removals",
          "Document and evidence review",
        ],
      },
      {
        id: "brand-ip",
        icon: "Landmark",
        title: "Brand Enforcement & Intellectual Property",
        summary: "For brand owners dealing with IP complaints or counterfeit claims.",
        items: [
          "IP complaint support (received or filed)",
          "Complaint drafting assistance",
          "Evidence review and organization",
          "Submission-language preparation",
        ],
      },
    ],
  },

  processSection: {
    sectionLabel: "The Process",
    headline: "How It Works",
    subheadline: "Three structured steps. No guesswork, no surprises.",
    steps: [
      {
        number: "01",
        title: "Review",
        description:
          "Share your case details. The notice, policy context, and account history are analyzed — including a brief technical analysis of your situation — to understand exactly what you're facing.",
      },
      {
        number: "02",
        title: "Prepare",
        description:
          "Up to 4 tailored Plans of Action are drafted and delivered for your submission. If those don't move forward, supporting letters with appropriate exhibits are prepared for Amazon's internal departments.",
      },
      {
        number: "03",
        title: "Submit",
        description:
          "You send. Every detail is reviewed together before submission to ensure nothing is missing or misframed.",
      },
    ],
  },

  whyUs: {
    sectionLabel: "Why Work With Me",
    headline: "A Careful, Independent Perspective",
    subheadline: "No templates. No guesswork. Each case is reviewed on its own terms.",
    points: [
      {
        icon: "Eye",
        title: "Independent Analysis",
        description:
          "Each situation is evaluated individually — not filtered through a one-size-fits-all template.",
      },
      {
        icon: "FileText",
        title: "Policy-Aligned Preparation",
        description:
          "Plans of action are structured to address the specific policy language Amazon cited.",
      },
      {
        icon: "MessageSquare",
        title: "Plain Communication",
        description:
          "You receive clear explanations at every step — no jargon, no ambiguity about what's happening.",
      },
      {
        icon: "Lock",
        title: "You Stay in Control",
        description:
          "Your account, your submissions. The role here is to prepare and guide, never to act unilaterally.",
      },
    ],
  },

  testimonials: {
    sectionLabel: "Client Feedback",
    headline: "What Sellers Say",
    subheadline: "Outcomes built on preparation, not promises.",
    placeholderNote: "Placeholder — replace with verified client feedback before launch.",
    items: [
      {
        quote:
          "After two failed appeal attempts on my own, I finally understood exactly what Amazon was looking for. The clarity alone was worth it.",
        name: "— Placeholder Client A",
        detail: "Account reinstatement · [Replace before launch]",
      },
      {
        quote:
          "My ASIN had been suppressed for weeks. The root-cause analysis pointed to something I never would have caught. The appeal was accepted.",
        name: "— Placeholder Client B",
        detail: "ASIN reinstatement · [Replace before launch]",
      },
      {
        quote:
          "I received an IP complaint I didn't understand. The response was drafted clearly and the complaint was resolved without escalation.",
        name: "— Placeholder Client C",
        detail: "IP complaint response · [Replace before launch]",
      },
    ],
  },

  faqSection: {
    sectionLabel: "Common Questions",
    headline: "Frequently Asked",
    seeAll: "See All Questions",
    seeAllHref: "/faq",
    previewCount: 4,
  },

  finalCta: {
    headline: "Ready to Get a Clear Picture of Your Situation?",
    subheadline:
      "A case review starts with understanding exactly what you're facing — not a sales pitch.",
  },

  faqItems: [
    {
      question: "What types of Amazon issues do you help with?",
      answer:
        "Account suspensions, ASIN and listing removals, Plans of Action, appeal drafting, IP and trademark complaint support, seller performance warnings, compliance-related situations, and document or evidence review ahead of submission.",
    },
    {
      question: "Do you guarantee reinstatement or resolution?",
      answer:
        "No. No outcome is guaranteed. Amazon makes all final decisions regarding accounts, listings, and complaints. What we provide is thorough case analysis, carefully structured documentation, and strategy aligned to Amazon's stated policies — giving your submission the strongest possible foundation.",
    },
    {
      question: "Are you affiliated with or employed by Amazon?",
      answer:
        "No. This is a fully independent consulting and document preparation service. There is no affiliation with Amazon.com, Inc. or any of its subsidiaries.",
    },
    {
      question: "How do I get started?",
      answer:
        "Submit the intake form on the Contact page with a brief description of your situation. After reviewing the details, I'll confirm whether your case falls within the scope of this service and outline the next steps — no commitment required.",
    },
    {
      question: "What is included in the support?",
      answer:
        "Depending on the case: suspension or issue analysis, appeal letter drafting, Plan of Action development, document and evidence review, submission-language preparation, and practical next-step guidance. Work is scoped to what is actually needed for your situation.",
    },
    {
      question: "Can you help with account suspensions?",
      answer:
        "Yes. Support is available for account-level suspensions, including review of the suspension notice, root-cause analysis, Plan of Action drafting, and appeal preparation. This covers performance-related, policy-related, and verification-related suspensions.",
    },
    {
      question: "Can you help with ASIN or listing issues?",
      answer:
        "Yes. Support is available for removed, suppressed, or restricted listings. This includes analysis of the removal reason, appeal drafting, and review of any supporting documents before submission.",
    },
    {
      question: "Do you help with intellectual property complaints?",
      answer:
        "Yes. Support is available for sellers who have received IP or trademark complaints, as well as brand owners who need to prepare and submit a complaint. This includes reviewing the complaint, structuring a response or filing, and organizing supporting evidence.",
    },
    {
      question: "What do I need to provide before work begins?",
      answer:
        "The most useful starting materials are: the notice or complaint you received, relevant ASIN or account details, any prior appeal attempts, and any supporting documents you already have. Not all of these are required — gaps are identified during the initial review.",
    },
    {
      question: "Do you review documents and evidence before submission?",
      answer:
        "Yes. Reviewing supporting materials is a standard part of the process. Invoices, sourcing records, prior submissions, and other evidence are checked for completeness, relevance, and alignment with the claims made in the appeal or response.",
    },
  ],

  faqPage: {
    hero: {
      eyebrow: "FAQ",
      headline: "Common Questions",
      subheadline: "Answers to the questions most sellers ask before reaching out.",
    },
    contactPrompt: {
      headline: "Don't see your question here?",
      body: "Submit a brief description of your situation and I'll let you know whether it falls within the scope of this service.",
      cta: "Get in Touch",
    },
  },

  servicesPage: {
    hero: {
      eyebrow: "Services",
      headline: "Services",
      subheadline:
        "Independent support across the situations Amazon sellers and brand owners face most. Each engagement is reviewed individually — no templates, no generic responses.",
    },
    notSureBlock: {
      headline: "Not sure which service fits your case?",
      body: "Many situations involve more than one area. Reach out with a brief description of what you're facing and I'll let you know how I can help — no commitment required.",
      cta: "Get Guidance",
    },
    categories: [
      {
        id: "account-reinstatement",
        icon: "ShieldCheck",
        tag: "Account Issues",
        title: "Account Reinstatement Support",
        description:
          "Support for sellers whose accounts have been suspended or deactivated at the account level — whether for performance metrics, policy violations, or verification issues.",
        situations: [
          "Account suspended for late shipment rate or order defect rate",
          "Account deactivated following a policy violation notice",
          "Suspended pending identity or business verification",
          "Suspension after a buyer complaint pattern",
          "Account held following an inauthentic or counterfeit allegation",
        ],
        includes: [
          "Review of the suspension notice and cited policy",
          "Root-cause analysis of the account history",
          "Plan of Action (POA) structure and drafting assistance",
          "Appeal letter preparation and language review",
          "Pre-submission review to check for gaps or framing issues",
        ],
      },
      {
        id: "asin-listing",
        icon: "Package",
        tag: "ASIN & Listings",
        title: "ASIN & Listing Issue Support",
        description:
          "Assistance for sellers dealing with suppressed, removed, or restricted product listings — whether due to policy flags, catalog issues, or compliance notices.",
        situations: [
          "ASIN removed for safety or compliance concerns",
          "Listing suppressed without a clear explanation",
          "Product restricted under a new category policy",
          "ASIN deactivated following a customer complaint",
          "Listing blocked after a hazmat or restricted product review",
        ],
        includes: [
          "Analysis of the specific removal or suppression notice",
          "Identification of the policy or catalog issue driving the action",
          "Appeal drafting tailored to the cited reason",
          "Document and evidence review for supporting materials",
          "Submission-language review before you respond",
        ],
      },
      {
        id: "brand-ip",
        icon: "Landmark",
        tag: "Brand & IP",
        title: "Brand & Intellectual Property Complaint Support",
        description:
          "Support for brand owners and sellers involved in intellectual property complaints — whether you received one, need to file one, or are trying to resolve an ongoing dispute.",
        situations: [
          "Received a trademark infringement complaint from a brand",
          "Received a copyright or patent complaint affecting a listing",
          "Need to file a complaint against a seller using your brand assets",
          "Dealing with a counterfeit allegation on your account",
          "Trying to resolve a complaint without escalating the situation",
        ],
        includes: [
          "Review of the complaint notice and cited IP basis",
          "Assistance structuring a complaint or counter-response",
          "Complaint drafting and evidence organization",
          "Submission-language preparation",
          "Review of supporting documentation before filing or responding",
        ],
      },
      {
        id: "appeal-poa",
        icon: "FileText",
        tag: "Appeals & POAs",
        title: "Appeal & Plan of Action Assistance",
        description:
          "Focused support on the drafting and preparation of appeals and Plans of Action — for sellers who need help structuring a response that is clear, policy-aligned, and complete.",
        situations: [
          "Previous appeal was rejected and you need a revised approach",
          "Unsure how to structure a Plan of Action for your specific issue",
          "Appeal language was flagged as insufficient or unclear",
          "Multiple issues cited in a single notice requiring a layered response",
          "First-time appeal and want it prepared correctly from the start",
        ],
        includes: [
          "Review of prior appeal attempts and feedback received",
          "Identification of gaps or framing issues in previous submissions",
          "Complete POA structure: root cause, corrective actions, preventive steps",
          "Appeal letter drafting and editing assistance",
          "Final language review for tone, completeness, and policy alignment",
        ],
      },
      {
        id: "compliance-strategy",
        icon: "BarChart2",
        tag: "Compliance & Strategy",
        title: "Compliance & Strategy Support",
        description:
          "Guidance for sellers navigating Amazon's performance standards and policy requirements — before issues escalate into formal actions.",
        situations: [
          "Received a seller performance warning or at-risk notice",
          "Metrics trending toward suspension threshold",
          "Trying to understand what triggered a policy flag",
          "Need clarity on a specific Amazon policy before taking action",
          "Preparing for a reinstatement and want a compliance review first",
        ],
        includes: [
          "Seller performance metric review and interpretation",
          "Policy analysis based on the specific notice or concern",
          "Strategy recommendations for corrective steps",
          "Guidance on submission language and communication approach",
          "Review of account health relative to known policy thresholds",
        ],
      },
      {
        id: "document-review",
        icon: "Search",
        tag: "Document Review",
        title: "Document & Evidence Review",
        description:
          "Review and organization of supporting documents before submission — for sellers who have the materials but need a structured, thorough review before sending.",
        situations: [
          "Have invoices, receipts, or sourcing documents that need review",
          "Assembling evidence for an appeal and unsure what to include",
          "Amazon requested specific documentation and you want it verified",
          "Supporting materials exist but need to be organized clearly",
          "Prior submission was rejected due to insufficient documentation",
        ],
        includes: [
          "Review of submitted documents for completeness and relevance",
          "Identification of gaps that could weaken an appeal",
          "Guidance on how to organize and present supporting materials",
          "Review of document-to-policy alignment",
          "Submission-readiness assessment before you send",
        ],
      },
    ],
  },

  contactPage: {
    hero: {
      eyebrow: "Start Here",
      headline: "Let's Review Your Situation",
      subheadline:
        "Fill out the form below with a brief description of what you're facing. There's no commitment involved — just a starting point so I can understand your case.",
      trustPoints: [
        "Replies within 1–2 business days",
        "Confidential and independent",
        "No obligation to proceed",
      ],
    },
    formNote:
      "Everything shared is confidential. This service provides drafting assistance, strategy guidance, and document review — not legal representation.",
    form: {
      nameLabel: "Full Name",
      namePlaceholder: "Your name",
      emailLabel: "Email Address",
      emailPlaceholder: "you@example.com",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "+1 (555) 000-0000",
      phoneHint: "Include country code if outside the US.",
      companyLabel: "Brand or Store Name",
      companyPlaceholder: "Your Amazon store or brand",
      merchantIdLabel: "Merchant Token / Seller ID",
      merchantIdPlaceholder: "e.g. A2X3Y4Z5EXAMPLE",
      merchantIdHint: "Found in Seller Central under Account Info. Optional but helpful for the initial review.",
      issueTypeLabel: "Issue Type",
      issueTypeHint: "Choose the closest match — clarify in the summary.",
      summaryLabel: "Brief Case Summary",
      summaryPlaceholder:
        "Describe the notice you received, when it happened, and what you've tried so far. A few sentences is enough.",
      summaryHint: "No account credentials needed — just describe the situation.",
      fileLabel: "Attach a Document",
      fileHint: "Suspension notice, prior appeal, or relevant document. Max 10 MB.",
      consentText:
        "I understand this service provides independent consulting, drafting assistance, and strategy guidance — not legal representation — and that no specific outcome is guaranteed.",
      submitButton: "Send Case Review Request",
      submitting: "Sending…",
      repliesNote: "Replies within 1–2 business days.",
      required: "required",
      optional: "optional",
    },
    validation: {
      nameRequired: "Your name is required.",
      emailRequired: "Your email address is required.",
      emailInvalid: "Please enter a valid email address.",
      issueTypeRequired: "Please select an issue type.",
      summaryRequired: "A brief case summary is required.",
      summaryTooShort: "Please provide a bit more detail (at least 100 characters).",
      consentRequired: "Please confirm you understand before submitting.",
    },
    issueTypes: [
      { value: "", label: "Select an issue type…" },
      { value: "account-suspension", label: "Account Suspension" },
      { value: "account-verification", label: "Account Verification / Deactivation" },
      { value: "asin-removal", label: "ASIN or Listing Removal" },
      { value: "listing-suppressed", label: "Listing Suppressed or Restricted" },
      { value: "ip-complaint-received", label: "IP / Trademark Complaint Received" },
      { value: "ip-complaint-filing", label: "IP / Trademark Complaint to File" },
      { value: "counterfeit-allegation", label: "Counterfeit or Inauthentic Allegation" },
      { value: "poa-drafting", label: "Plan of Action / Appeal Drafting" },
      { value: "other", label: "Other / Not Sure" },
    ],
    whatsapp: {
      show: true,
      headline: "Prefer to message directly?",
      body: "You can also reach out via WhatsApp for a quicker initial exchange. Include a brief description of your situation and I'll respond as soon as possible.",
      number: "+1 (000) 000-0000",
      label: "Message on WhatsApp",
    },
    afterSubmit: {
      headline: "What happens next",
      steps: [
        "Your submission is reviewed — usually within 1–2 business days.",
        "If your situation falls within the services offered, I'll follow up with initial observations and next steps.",
        "If I'm not the right fit for your case, I'll let you know clearly — no runaround.",
      ],
    },
    success: {
      headline: "Your message was received.",
      body: "I'll review the details and follow up within 1–2 business days. If your situation is urgent, mention it in your summary and I'll do my best to prioritize.",
      note: "Check your spam folder if you don't hear back within 2 business days.",
    },
    sidebarLabels: {
      responseTime: "Response Time",
      confidentiality: "Confidentiality",
      commonQuestions: "Common Questions",
      confidentialityNote:
        "Everything shared here is kept strictly confidential. Your case details are never shared with third parties or disclosed outside of this engagement.",
    },
  },

  processPage: {
    hero: {
      eyebrow: "How It Works",
      headline: "A Structured Process, Built Around Your Case",
      subheadline:
        "Every engagement follows the same practical framework — starting with a clear understanding of your situation and ending with a prepared, policy-aligned submission.",
    },
    steps: [
      {
        number: "01",
        icon: "ClipboardList",
        title: "Initial Case Review",
        summary: "Understanding what you're facing before anything else.",
        details: [
          "You submit a brief description of your situation via the intake form.",
          "The suspension notice, policy reference, and account context are reviewed.",
          "The scope and approach for your case are confirmed before work begins.",
        ],
      },
      {
        number: "02",
        icon: "ScanSearch",
        title: "Issue Analysis",
        summary: "Identifying the root cause and what Amazon is actually asking for.",
        details: [
          "The cited policy or violation is mapped to its specific requirements.",
          "Prior submissions or communication history are reviewed if available.",
          "A brief technical analysis of the situation is prepared to establish a clear picture of the core issue and the path forward.",
        ],
      },
      {
        number: "03",
        icon: "PenLine",
        title: "Drafting & Strategy Support",
        summary: "Preparing a response structured for the specific issue at hand.",
        details: [
          "Up to 4 tailored Plans of Action are drafted and delivered for client submission.",
          "If the POA route doesn't move forward, letters with appropriate exhibits are prepared for Amazon's internal departments.",
          "Tone, structure, and framing are reviewed for clarity and policy alignment at every draft.",
        ],
      },
      {
        number: "04",
        icon: "FolderSearch",
        title: "Evidence & Document Review",
        summary: "Making sure supporting materials are complete and well-organized.",
        details: [
          "Invoices, sourcing documents, prior appeals, or complaint records are reviewed.",
          "Gaps or weaknesses in the supporting evidence are identified.",
          "Documents are organized to align with the claims made in the submission.",
        ],
      },
      {
        number: "05",
        icon: "Send",
        title: "Submission Guidance & Next Steps",
        summary: "A final review before you send — and a clear plan if follow-up is needed.",
        details: [
          "The full submission is reviewed together before you send.",
          "Submission instructions and timing considerations are discussed.",
          "If Amazon responds with a follow-up request, the next steps are outlined.",
        ],
      },
    ],
    clientProvides: {
      headline: "What You'll Need to Share",
      subheadline:
        "The more context you can provide upfront, the more focused the analysis. Here's what's typically needed:",
      categories: [
        {
          icon: "Bell",
          label: "Notices & Alerts",
          items: [
            "Account suspension or warning notice",
            "ASIN removal or suppression notice",
            "IP or trademark complaint message",
            "Seller performance policy warning",
          ],
        },
        {
          icon: "Store",
          label: "Account & Listing Details",
          items: [
            "ASIN(s) affected",
            "Marketplace and account region",
            "Relevant account health metrics (if applicable)",
            "Product category and sourcing details",
          ],
        },
        {
          icon: "History",
          label: "Prior Submissions",
          items: [
            "Previous appeal attempts and Amazon's responses",
            "Earlier Plans of Action (if any were submitted)",
            "Any prior communication with Seller Support",
          ],
        },
        {
          icon: "Paperclip",
          label: "Supporting Documents",
          items: [
            "Invoices, receipts, or sourcing records",
            "Manufacturer or supplier authorization letters",
            "Evidence relevant to the complaint or violation",
            "Any documentation Amazon specifically requested",
          ],
        },
      ],
      note: "Not all categories apply to every case. Share what you have — gaps are identified during the analysis phase.",
    },
    stepsSection: {
      sectionLabel: "The Workflow",
      headline: "Five Steps, Start to Finish",
      subheadline: "Each step is focused on one thing — giving your submission the strongest possible foundation.",
    },
    clientProvidesSection: {
      sectionLabel: "What to Prepare",
    },
  },

  aboutPage: {
    hero: {
      eyebrow: "About",
      headline: "Independent Support for Amazon Sellers and Brand Owners",
      subheadline:
        "This is a consulting and document preparation service — not a law firm, not part of Amazon. The focus is on helping you prepare stronger, more clearly structured submissions.",
    },
    whoFor: {
      headline: "Who This Service Is For",
      subheadline:
        "If you sell on Amazon and are facing a situation that requires a formal written response, this service is built for that.",
      groups: [
        {
          icon: "ShieldAlert",
          title: "Sellers Facing Account Issues",
          description:
            "Account suspensions, deactivations, verification holds, or seller performance warnings that require a structured response or Plan of Action.",
        },
        {
          icon: "Package",
          title: "Sellers With ASIN or Listing Problems",
          description:
            "Removed, suppressed, or restricted listings where an appeal or supporting documentation is needed to address the cited reason.",
        },
        {
          icon: "Scale",
          title: "Brand Owners With IP Concerns",
          description:
            "Sellers who have received intellectual property or trademark complaints, or brand owners who need to prepare and submit a complaint of their own.",
        },
        {
          icon: "BarChart2",
          title: "Sellers Navigating Compliance Situations",
          description:
            "Sellers monitoring performance metrics, responding to policy flags, or trying to understand what triggered a warning before it becomes a suspension.",
        },
      ],
    },
    whatSupport: {
      headline: "What Support Includes",
      subheadline: "Each engagement is limited to what's actually needed for the case at hand.",
      items: [
        {
          icon: "PenLine",
          title: "Appeal Drafting Assistance",
          description:
            "Drafting and structuring appeal letters that address the specific reason cited by Amazon.",
        },
        {
          icon: "ClipboardList",
          title: "Plan of Action Development",
          description:
            "Building a complete Plan of Action — root cause, corrective actions, and preventive steps — aligned to Amazon's stated requirements.",
        },
        {
          icon: "ScanSearch",
          title: "Suspension & Issue Analysis",
          description:
            "Reviewing the notice, policy context, and account history to identify what's actually driving the issue.",
        },
        {
          icon: "FolderSearch",
          title: "Document & Evidence Review",
          description:
            "Reviewing supporting materials — invoices, sourcing records, prior submissions — to identify gaps and organize for submission.",
        },
        {
          icon: "FileCheck",
          title: "Submission-Language Preparation",
          description:
            "Reviewing and editing submission copy for tone, clarity, completeness, and alignment with Amazon's cited policy.",
        },
        {
          icon: "Compass",
          title: "Strategy & Next-Step Guidance",
          description:
            "Practical guidance on what to do, what to send, and what to expect — without the ambiguity.",
        },
      ],
    },
    approach: {
      headline: "How This Work Gets Done",
      subheadline: "The same approach applies to every case, regardless of size or complexity.",
      points: [
        "Every case starts with a full review of the notice and cited context — not a template search.",
        "Each submission is prepared for the specific issue, not adapted from a generic structure.",
        "Supporting documents are reviewed for gaps before anything is sent.",
        "Language is checked for tone, framing, and completeness at every stage.",
        "You stay informed throughout — no black boxes, no unexplained delays.",
        "If a case falls outside the scope of this service, that's communicated clearly upfront.",
      ],
      closing:
        "This service does not guarantee reinstatement or any specific outcome. Amazon makes the final determination. What I provide is careful, thorough preparation.",
    },
  },

  footerNav: [
    {
      heading: "Services",
      links: [
        { label: "Account Reinstatement", href: "/services#account-reinstatement" },
        { label: "ASIN & Listing Issues", href: "/services#asin-listing" },
        { label: "Brand & IP Complaints", href: "/services#brand-ip" },
        { label: "Appeals & Plans of Action", href: "/services#appeal-poa" },
        { label: "Compliance & Strategy", href: "/services#compliance-strategy" },
        { label: "Document Review", href: "/services#document-review" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "How It Works", href: "/process" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
        { label: "Disclaimer", href: "/disclaimer" },
      ],
    },
  ],

  legalPages: {
    privacy: {
      title: "Privacy Policy",
      effectiveDate: "[EFFECTIVE DATE]",
      intro:
        "This Privacy Policy explains what information is collected when you use this website or submit a contact request, how that information is used, and how you can reach out regarding your data.",
      sections: [
        {
          heading: "Information Collected",
          body: "When you use the contact form or reach out via email or WhatsApp, the following information may be collected: your name, email address, phone number, company or brand name, a description of your situation, and any documents you choose to attach. No information is collected passively through tracking pixels or advertising cookies. Basic analytics (such as page views) may be collected through the hosting platform.",
        },
        {
          heading: "How Information Is Used",
          body: "Information you submit is used only to respond to your inquiry and, if you proceed, to provide the consulting services requested. Your details are not used for marketing, are not sold, and are not added to any mailing list without your explicit agreement.",
        },
        {
          heading: "Communication Methods",
          body: "If you submit a contact form, reply by email, or reach out via WhatsApp, communication may take place through those same channels. No automated outreach or third-party messaging platforms are used beyond what you initiate.",
        },
        {
          heading: "Data Sharing",
          body: "Your information is not sold, rented, or shared with third parties for their own purposes. Information may be shared only where required by law or, with your knowledge, with a third party directly involved in delivering the service you requested.",
        },
        {
          heading: "Data Retention",
          body: "Information submitted via the contact form or shared during a consulting engagement is retained only as long as reasonably necessary to deliver the service or comply with applicable legal obligations. You may request deletion of your information at any time by contacting us directly.",
        },
        {
          heading: "Security",
          body: "Reasonable measures are taken to protect information submitted through this website. However, no method of electronic transmission or storage is completely secure, and no guarantee of absolute security is made.",
        },
        {
          heading: "Third-Party Services",
          body: "This website may be hosted on a third-party platform (such as Vercel or a similar provider). Those platforms may process basic technical data such as IP addresses and request logs in accordance with their own privacy policies. No third-party advertising or behavioral tracking services are intentionally integrated.",
        },
        {
          heading: "Contact",
          body: "For questions about this Privacy Policy or to request deletion of your information, contact: hello@amazonappealpro.com.",
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      effectiveDate: "[EFFECTIVE DATE]",
      intro:
        "By using this website or submitting a contact request, you agree to the following terms. Please read them before proceeding.",
      sections: [
        {
          heading: "Website Use",
          body: "This website is provided for informational purposes and to facilitate requests for consulting support services. You agree to use the site only for lawful purposes and not to submit false, misleading, or harmful information through any contact form or communication channel.",
        },
        {
          heading: "No Guarantee of Outcomes",
          body: "This service provides consulting, drafting assistance, document review, and strategy guidance. It does not guarantee reinstatement of any Amazon account or listing, resolution of any complaint, or any other specific outcome. All final decisions rest with Amazon or the relevant platform or party.",
        },
        {
          heading: "Independent Service",
          body: "This is an independent consulting service and is not affiliated with, endorsed by, or a representative of Amazon.com, Inc. or any of its subsidiaries. Use of Amazon-related terminology is for descriptive purposes only.",
        },
        {
          heading: "User Responsibility",
          body: "You are responsible for the accuracy and completeness of any information, documents, or details you submit. The quality of support provided depends in part on the accuracy of information shared. Submitting false or misleading information may affect the outcome of any appeal or response independently of the support provided here.",
        },
        {
          heading: "Intellectual Property",
          body: "All original content on this website — including text, structure, and design — is the property of this business. You may not reproduce, copy, or redistribute site content without written permission.",
        },
        {
          heading: "Limitation of Liability",
          body: "To the fullest extent permitted by applicable law, this service is not liable for any indirect, incidental, or consequential damages arising from use of this website or reliance on its content. The total liability for any claim related to services provided shall not exceed the amount paid for those services.",
        },
        {
          heading: "Changes to These Terms",
          body: "These terms may be updated from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms. The effective date at the top of this page will reflect the most recent update.",
        },
        {
          heading: "Contact",
          body: "For questions about these Terms of Use, contact: hello@amazonappealpro.com.",
        },
      ],
    },
    disclaimer: {
      title: "Disclaimer",
      effectiveDate: "[EFFECTIVE DATE]",
      intro: "Please read this disclaimer carefully before using this website or requesting services.",
      sections: [
        {
          heading: "Independent Service — No Amazon Affiliation",
          body: "Underdogs Appeal Pro is an independent consulting and document preparation service. It is not affiliated with, endorsed by, employed by, or a representative of Amazon.com, Inc. or any of its subsidiaries or related entities. Any reference to Amazon, its policies, or its programs is for descriptive context only.",
        },
        {
          heading: "No Guarantee of Reinstatement or Outcome",
          body: "This service does not guarantee the reinstatement of any suspended account or listing, the resolution of any complaint, or any other specific result. Amazon and other relevant platforms retain sole discretion over their decisions. Outcomes depend on many factors outside the control of this service.",
        },
        {
          heading: "Informational Content Only",
          body: "The content on this website — including descriptions of services, process steps, and FAQ answers — is provided for general informational purposes. It does not constitute legal advice, professional advice, or a guarantee of any specific approach being effective for your situation.",
        },
        {
          heading: "No Legal Advice or Representation",
          body: "This service is not a law firm and does not provide legal advice or legal representation. If your situation requires legal counsel, you should consult a qualified attorney independently.",
        },
        {
          heading: "User Responsibility",
          body: "You are solely responsible for the accuracy of information you submit, the decisions you make based on the support provided, and the content of any submission you send to Amazon or any third party. Consulting support assists in preparation — the act of submitting and the responsibility for that submission remain yours.",
        },
        {
          heading: "Contact",
          body: "For questions about this disclaimer, contact: hello@amazonappealpro.com.",
        },
      ],
    },
  },
} as const;

export type Messages = typeof messages;
