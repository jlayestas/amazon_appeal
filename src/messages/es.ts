// Spanish content — ES locale
// All internal hrefs are /es-prefixed

export const messages = {
  locale: "es" as const,
  htmlLang: "es",

  site: {
    name: "Underdogs Appeal Pro",
    tagline: "Consultoría Independiente de Reactivación para Amazon",
    disclaimer:
      "Servicio independiente de consultoría y preparación de documentos. No afiliado, respaldado ni representante de Amazon.com, Inc. ni ninguna de sus subsidiarias. No se garantiza ningún resultado específico.",
    ctaPrimary: "Iniciar Revisión de Caso",
    ctaSecondary: "Ver Cómo Funciona",
    contactHref: "/es/contact",
    processHref: "/es/process",
    email: "hello@amazonappealpro.com",
    phone: "+1 (000) 000-0000",
    footerIndependentService: "Servicio Independiente.",
    footerAllRightsReserved: "Todos los derechos reservados.",
    footerNotAffiliated: "No afiliado a Amazon.com, Inc. ni a ninguna de sus subsidiarias.",
  },

  nav: {
    links: [
      { label: "Servicios", href: "/es/services" },
      { label: "Cómo Funciona", href: "/es/process" },
      { label: "Acerca de", href: "/es/about" },
      { label: "Preguntas Frecuentes", href: "/es/faq" },
    ],
    homeHref: "/es",
    switchLang: "English",
    switchLangHref: "/",
    skipToContent: "Saltar al contenido principal",
  },

  hero: {
    eyebrow: "Consultoría Independiente para Amazon",
    headline: "Cuando tu negocio en Amazon\nse detiene, necesitas la estrategia correcta.",
    subheadline:
      "Apoyo independiente para suspensiones de cuenta, eliminaciones de ASIN y quejas de marca — preparado con cuidado, presentado con claridad.",
    trustSignals: ["Confidencial", "Independiente", "Sin afiliación con Amazon"],
  },

  trustStrip: [
    { value: "500+", label: "Casos Revisados" },
    { value: "10+", label: "Años de Experiencia" },
    { value: "3", label: "Áreas de Práctica" },
    { value: "100%", label: "Independiente e Imparcial" },
  ],

  servicesSection: {
    sectionLabel: "En Qué Puedo Ayudar",
    headline: "Tres Áreas de Práctica",
    subheadline: "Cada servicio tiene un objetivo: dar a tu caso la mejor base posible.",
    viewAll: "Ver Todos los Servicios",
    viewAllHref: "/es/services",
    items: [
      {
        id: "account-support",
        icon: "ShieldCheck",
        title: "Reactivación de Cuenta",
        summary: "Para vendedores que enfrentan suspensiones de cuenta o problemas de cumplimiento.",
        items: [
          "Análisis de suspensión de cuenta",
          "Elaboración del Plan de Acción (POA)",
          "Preparación de carta de apelación",
          "Estrategia de rendimiento del vendedor",
          "Revisión del lenguaje de presentación",
        ],
      },
      {
        id: "asin-support",
        icon: "Package",
        title: "Reactivación de ASIN",
        summary: "Para vendedores con listados suprimidos, eliminados o restringidos.",
        items: [
          "Análisis de suspensión de ASIN",
          "Apoyo para reactivación de ASIN",
          "Elaboración de apelaciones por eliminación de listado",
          "Revisión de documentos y evidencias",
        ],
      },
      {
        id: "brand-ip",
        icon: "Landmark",
        title: "Aplicación de Marca y Propiedad Intelectual",
        summary: "Para propietarios de marca que enfrentan quejas de PI o reclamaciones de falsificación.",
        items: [
          "Apoyo en quejas de PI (recibidas o presentadas)",
          "Asistencia en la redacción de quejas",
          "Revisión y organización de evidencias",
          "Preparación del lenguaje de presentación",
        ],
      },
    ],
  },

  processSection: {
    sectionLabel: "El Proceso",
    headline: "Cómo Funciona",
    subheadline: "Tres pasos estructurados. Sin conjeturas, sin sorpresas.",
    steps: [
      {
        number: "01",
        title: "Revisión",
        description:
          "Comparte los detalles de tu caso. Se analiza el aviso, el contexto de la política y el historial de la cuenta — incluyendo un breve análisis técnico de la situación — para entender exactamente lo que enfrentas.",
      },
      {
        number: "02",
        title: "Preparación",
        description:
          "Se elaboran y entregan hasta 4 Planes de Acción personalizados para tu presentación. Si estos no avanzan, se preparan cartas con los anexos correspondientes para los departamentos internos de Amazon.",
      },
      {
        number: "03",
        title: "Presentación",
        description:
          "Tú envías. Cada detalle se revisa en conjunto antes de la presentación para asegurar que nada falte o esté mal planteado.",
      },
    ],
  },

  whyUs: {
    sectionLabel: "Por Qué Trabajar Conmigo",
    headline: "Una Perspectiva Cuidadosa e Independiente",
    subheadline: "Sin plantillas. Sin suposiciones. Cada caso se revisa en sus propios términos.",
    points: [
      {
        icon: "Eye",
        title: "Análisis Independiente",
        description:
          "Cada situación se evalúa de forma individual — no se filtra a través de una plantilla única para todos.",
      },
      {
        icon: "FileText",
        title: "Preparación Alineada con Políticas",
        description:
          "Los planes de acción se estructuran para abordar el lenguaje de política específico que Amazon citó.",
      },
      {
        icon: "MessageSquare",
        title: "Comunicación Clara",
        description:
          "Recibes explicaciones claras en cada paso — sin tecnicismos, sin ambigüedad sobre lo que está sucediendo.",
      },
      {
        icon: "Lock",
        title: "Tú Mantienes el Control",
        description:
          "Tu cuenta, tus presentaciones. El rol aquí es preparar y orientar, nunca actuar de forma unilateral.",
      },
    ],
  },

  testimonials: {
    sectionLabel: "Comentarios de Clientes",
    headline: "Lo Que Dicen los Vendedores",
    subheadline: "Resultados construidos sobre preparación, no sobre promesas.",
    placeholderNote: "Marcador de posición — reemplazar con testimonios verificados antes del lanzamiento.",
    items: [
      {
        quote:
          "Después de dos intentos fallidos por mi cuenta, finalmente entendí exactamente lo que Amazon buscaba. La claridad por sí sola valió la pena.",
        name: "— Cliente Ejemplo A",
        detail: "Reactivación de cuenta · [Reemplazar antes del lanzamiento]",
      },
      {
        quote:
          "Mi ASIN había estado suprimido durante semanas. El análisis de causa raíz señaló algo que nunca hubiera detectado. La apelación fue aceptada.",
        name: "— Cliente Ejemplo B",
        detail: "Reactivación de ASIN · [Reemplazar antes del lanzamiento]",
      },
      {
        quote:
          "Recibí una queja de PI que no entendía. La respuesta se redactó con claridad y la queja se resolvió sin escaladas.",
        name: "— Cliente Ejemplo C",
        detail: "Respuesta a queja de PI · [Reemplazar antes del lanzamiento]",
      },
    ],
  },

  faqSection: {
    sectionLabel: "Preguntas Frecuentes",
    headline: "Preguntas Comunes",
    seeAll: "Ver Todas las Preguntas",
    seeAllHref: "/es/faq",
    previewCount: 4,
  },

  finalCta: {
    headline: "¿Listo para tener una imagen clara de tu situación?",
    subheadline:
      "Una revisión de caso comienza con entender exactamente lo que enfrentas — no con un discurso de ventas.",
  },

  faqItems: [
    {
      question: "¿Con qué tipos de problemas de Amazon puedes ayudar?",
      answer:
        "Suspensiones de cuenta, eliminaciones de ASIN y listados, Planes de Acción, elaboración de apelaciones, apoyo en quejas de PI y marcas, advertencias de rendimiento del vendedor, situaciones relacionadas con cumplimiento, y revisión de documentos o evidencias antes de la presentación.",
    },
    {
      question: "¿Garantizas el reactivación o la resolución?",
      answer:
        "No. No se garantiza ningún resultado. Amazon toma todas las decisiones finales respecto a cuentas, listados y quejas. Lo que ofrecemos es un análisis exhaustivo del caso, documentación cuidadosamente estructurada y una estrategia alineada con las políticas declaradas de Amazon — dando a tu presentación la base más sólida posible.",
    },
    {
      question: "¿Estás afiliado o empleado por Amazon?",
      answer:
        "No. Este es un servicio de consultoría y preparación de documentos completamente independiente. No existe ninguna afiliación con Amazon.com, Inc. ni con ninguna de sus subsidiarias.",
    },
    {
      question: "¿Cómo comienzo?",
      answer:
        "Envía el formulario de registro en la página de Contacto con una breve descripción de tu situación. Después de revisar los detalles, confirmaré si tu caso está dentro del alcance de este servicio y describiré los próximos pasos — sin ningún compromiso requerido.",
    },
    {
      question: "¿Qué incluye el apoyo?",
      answer:
        "Dependiendo del caso: análisis de suspensión o del problema, elaboración de carta de apelación, desarrollo del Plan de Acción, revisión de documentos y evidencias, preparación del lenguaje de presentación y orientación práctica sobre los próximos pasos. El trabajo se delimita a lo que realmente se necesita para tu situación.",
    },
    {
      question: "¿Puedes ayudar con suspensiones de cuenta?",
      answer:
        "Sí. Hay apoyo disponible para suspensiones a nivel de cuenta, incluida la revisión del aviso de suspensión, análisis de causa raíz, elaboración del Plan de Acción y preparación de la apelación. Esto cubre suspensiones relacionadas con el rendimiento, políticas y verificación.",
    },
    {
      question: "¿Puedes ayudar con problemas de ASIN o listados?",
      answer:
        "Sí. Hay apoyo disponible para listados eliminados, suprimidos o restringidos. Esto incluye el análisis de la razón de eliminación, elaboración de la apelación y revisión de los documentos de apoyo antes de la presentación.",
    },
    {
      question: "¿Ayudas con quejas de propiedad intelectual?",
      answer:
        "Sí. Hay apoyo disponible para vendedores que han recibido quejas de PI o marcas registradas, así como para propietarios de marca que necesitan preparar y presentar una queja. Esto incluye revisar la queja, estructurar una respuesta o solicitud, y organizar la evidencia de apoyo.",
    },
    {
      question: "¿Qué necesito proporcionar antes de que comience el trabajo?",
      answer:
        "Los materiales de inicio más útiles son: el aviso o queja que recibiste, los detalles relevantes del ASIN o la cuenta, cualquier intento de apelación previo y cualquier documento de apoyo que ya tengas. No todos son necesarios — las brechas se identifican durante la revisión inicial.",
    },
    {
      question: "¿Revisas documentos y evidencias antes de la presentación?",
      answer:
        "Sí. Revisar los materiales de apoyo es una parte estándar del proceso. Las facturas, registros de proveedores, presentaciones previas y otras evidencias se verifican para evaluar su completitud, relevancia y alineación con las afirmaciones hechas en la apelación o respuesta.",
    },
  ],

  faqPage: {
    hero: {
      eyebrow: "FAQ",
      headline: "Preguntas Frecuentes",
      subheadline: "Respuestas a las preguntas que más hacen los vendedores antes de contactarnos.",
    },
    contactPrompt: {
      headline: "¿No encuentras tu pregunta aquí?",
      body: "Envía una breve descripción de tu situación y te haré saber si está dentro del alcance de este servicio.",
      cta: "Contáctanos",
    },
  },

  servicesPage: {
    hero: {
      eyebrow: "Servicios",
      headline: "Servicios",
      subheadline:
        "Apoyo independiente para las situaciones que más enfrentan los vendedores y propietarios de marca en Amazon. Cada caso se revisa de forma individual — sin plantillas, sin respuestas genéricas.",
    },
    notSureBlock: {
      headline: "¿No sabes cuál servicio se adapta a tu caso?",
      body: "Muchas situaciones involucran más de un área. Contáctame con una breve descripción de lo que enfrentas y te haré saber cómo puedo ayudar — sin ningún compromiso.",
      cta: "Obtener Orientación",
    },
    categories: [
      {
        id: "account-reactivación",
        icon: "ShieldCheck",
        tag: "Problemas de Cuenta",
        title: "Apoyo para Reactivación de Cuenta",
        description:
          "Apoyo para vendedores cuyas cuentas han sido suspendidas o desactivadas a nivel de cuenta — ya sea por métricas de rendimiento, infracciones de política o problemas de verificación.",
        situations: [
          "Cuenta suspendida por tasa de envío tardío o tasa de defectos en pedidos",
          "Cuenta desactivada tras un aviso de infracción de política",
          "Suspensión pendiente de verificación de identidad o negocio",
          "Suspensión tras un patrón de quejas de compradores",
          "Cuenta retenida tras una alegación de inautenticidad o falsificación",
        ],
        includes: [
          "Revisión del aviso de suspensión y la política citada",
          "Análisis de causa raíz del historial de la cuenta",
          "Estructura y asistencia para la elaboración del Plan de Acción (POA)",
          "Preparación de la carta de apelación y revisión del lenguaje",
          "Revisión previa a la presentación para verificar brechas o problemas de enfoque",
        ],
      },
      {
        id: "asin-listing",
        icon: "Package",
        tag: "ASIN y Listados",
        title: "Apoyo para Problemas de ASIN y Listados",
        description:
          "Asistencia para vendedores con listados suprimidos, eliminados o restringidos — ya sea por alertas de política, problemas de catálogo o avisos de cumplimiento.",
        situations: [
          "ASIN eliminado por problemas de seguridad o cumplimiento",
          "Listado suprimido sin una explicación clara",
          "Producto restringido bajo una nueva política de categoría",
          "ASIN desactivado tras una queja de un cliente",
          "Listado bloqueado después de una revisión de producto peligroso o restringido",
        ],
        includes: [
          "Análisis del aviso específico de eliminación o supresión",
          "Identificación del problema de política o catálogo que origina la acción",
          "Elaboración de apelación adaptada a la razón citada",
          "Revisión de documentos y evidencias para materiales de apoyo",
          "Revisión del lenguaje de presentación antes de responder",
        ],
      },
      {
        id: "brand-ip",
        icon: "Landmark",
        tag: "Marca y PI",
        title: "Apoyo para Quejas de Marca y Propiedad Intelectual",
        description:
          "Apoyo para propietarios de marca y vendedores involucrados en quejas de propiedad intelectual — ya sea que hayas recibido una, necesites presentar una, o estés tratando de resolver una disputa en curso.",
        situations: [
          "Recibiste una queja de infracción de marca registrada de una marca",
          "Recibiste una queja de derechos de autor o patente que afecta un listado",
          "Necesitas presentar una queja contra un vendedor que usa tus activos de marca",
          "Enfrentas una alegación de falsificación en tu cuenta",
          "Buscas resolver una queja sin escalar la situación",
        ],
        includes: [
          "Revisión del aviso de queja y la base de PI citada",
          "Asistencia para estructurar una queja o contrarespuesta",
          "Redacción de queja y organización de evidencias",
          "Preparación del lenguaje de presentación",
          "Revisión de documentación de apoyo antes de presentar o responder",
        ],
      },
      {
        id: "appeal-poa",
        icon: "FileText",
        tag: "Apelaciones y POAs",
        title: "Asistencia para Apelaciones y Plan de Acción",
        description:
          "Apoyo enfocado en la elaboración y preparación de apelaciones y Planes de Acción — para vendedores que necesitan ayuda para estructurar una respuesta clara, alineada con las políticas y completa.",
        situations: [
          "Una apelación anterior fue rechazada y necesitas un nuevo enfoque",
          "No sabes cómo estructurar un Plan de Acción para tu problema específico",
          "El lenguaje de la apelación fue marcado como insuficiente o poco claro",
          "Se citaron múltiples problemas en un solo aviso que requieren una respuesta en capas",
          "Primera apelación y quieres prepararla correctamente desde el inicio",
        ],
        includes: [
          "Revisión de intentos de apelación previos y retroalimentación recibida",
          "Identificación de brechas o problemas de enfoque en presentaciones anteriores",
          "Estructura completa del POA: causa raíz, acciones correctivas, pasos preventivos",
          "Asistencia en la redacción y edición de la carta de apelación",
          "Revisión final del lenguaje para tono, completitud y alineación con políticas",
        ],
      },
      {
        id: "compliance-strategy",
        icon: "BarChart2",
        tag: "Cumplimiento y Estrategia",
        title: "Apoyo en Cumplimiento y Estrategia",
        description:
          "Orientación para vendedores que navegan los estándares de rendimiento y los requisitos de política de Amazon — antes de que los problemas escalen a acciones formales.",
        situations: [
          "Recibiste una advertencia de rendimiento del vendedor o un aviso de riesgo",
          "Las métricas se acercan al umbral de suspensión",
          "Intentas entender qué activó una alerta de política",
          "Necesitas claridad sobre una política específica de Amazon antes de actuar",
          "Te estás preparando para un reactivación y quieres una revisión de cumplimiento primero",
        ],
        includes: [
          "Revisión e interpretación de métricas de rendimiento del vendedor",
          "Análisis de política basado en el aviso o problema específico",
          "Recomendaciones estratégicas para medidas correctivas",
          "Orientación sobre el lenguaje de presentación y el enfoque de comunicación",
          "Revisión del estado de la cuenta en relación con los umbrales de política conocidos",
        ],
      },
      {
        id: "document-review",
        icon: "Search",
        tag: "Revisión de Documentos",
        title: "Revisión de Documentos y Evidencias",
        description:
          "Revisión y organización de documentos de apoyo antes de la presentación — para vendedores que tienen los materiales pero necesitan una revisión estructurada y exhaustiva antes de enviar.",
        situations: [
          "Tienes facturas, recibos o documentos de proveedores que necesitan revisión",
          "Estás reuniendo evidencias para una apelación y no sabes qué incluir",
          "Amazon solicitó documentación específica y quieres verificarla",
          "Los materiales de apoyo existen pero necesitan organizarse claramente",
          "Una presentación anterior fue rechazada por documentación insuficiente",
        ],
        includes: [
          "Revisión de documentos presentados para completitud y relevancia",
          "Identificación de brechas que podrían debilitar una apelación",
          "Orientación sobre cómo organizar y presentar los materiales de apoyo",
          "Revisión de la alineación documento-política",
          "Evaluación de preparación para presentación antes de enviar",
        ],
      },
    ],
  },

  contactPage: {
    hero: {
      eyebrow: "Comienza Aquí",
      headline: "Revisemos Tu Situación",
      subheadline:
        "Completa el formulario con una breve descripción de lo que enfrentas. No hay ningún compromiso — es solo un punto de partida para que pueda entender tu caso.",
      trustPoints: [
        "Respuesta en 1–2 días hábiles",
        "Confidencial e independiente",
        "Sin obligación de continuar",
      ],
    },
    formNote:
      "Todo lo que compartes es confidencial. Este servicio ofrece asistencia en la redacción, orientación estratégica y revisión de documentos — no representación legal.",
    form: {
      nameLabel: "Nombre Completo",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "tu@ejemplo.com",
      phoneLabel: "Teléfono / WhatsApp",
      phonePlaceholder: "+1 (555) 000-0000",
      phoneHint: "Incluye el código de país si estás fuera de EE. UU.",
      companyLabel: "Nombre de Marca o Tienda",
      companyPlaceholder: "Tu tienda o marca de Amazon",
      merchantIdLabel: "Merchant Token / ID de Vendedor",
      merchantIdPlaceholder: "p. ej. A2X3Y4Z5EJEMPLO",
      merchantIdHint: "Lo encuentras en Seller Central en Información de Cuenta. Opcional pero útil para la revisión inicial.",
      sellingPlanLabel: "Plan de Venta",
      businessModelLabel: "Modelo de Negocio",
      suspensionDateLabel: "Fecha de Suspensión / Aviso",
      suspensionDateHint: "Una fecha aproximada está bien.",
      priorAppealsLabel: "¿Ya has enviado alguna apelación?",
      issueTypeLabel: "Tipo de Problema",
      issueTypeHint: "Elige la opción más cercana — puedes aclarar en el resumen.",
      summaryLabel: "Resumen Breve del Caso",
      summaryPlaceholder:
        "Describe el aviso que recibiste, cuándo ocurrió y qué has intentado hasta ahora. Unas pocas oraciones son suficientes.",
      summaryHint: "No se necesitan credenciales de cuenta — solo describe la situación.",
      fileLabel: "Adjuntar un Documento",
      fileHint: "Aviso de suspensión, apelación previa o documento relevante. Máximo 10 MB.",
      consentText:
        "Entiendo que este servicio ofrece consultoría independiente, asistencia en la redacción y orientación estratégica — no representación legal — y que no se garantiza ningún resultado específico.",
      submitButton: "Enviar Solicitud de Revisión de Caso",
      submitting: "Enviando…",
      repliesNote: "Respuesta en 1–2 días hábiles.",
      required: "requerido",
      optional: "opcional",
    },
    validation: {
      nameRequired: "Tu nombre es requerido.",
      emailRequired: "Tu correo electrónico es requerido.",
      emailInvalid: "Por favor ingresa una dirección de correo válida.",
      issueTypeRequired: "Por favor selecciona un tipo de problema.",
      summaryRequired: "Un resumen breve del caso es requerido.",
      summaryTooShort: "Por favor proporciona un poco más de detalle (mínimo 100 caracteres).",
      consentRequired: "Por favor confirma que entiendes antes de enviar.",
    },
    issueTypes: [
      { value: "", label: "Selecciona un tipo de problema…" },
      { value: "account-suspension", label: "Suspensión de Cuenta" },
      { value: "account-verification", label: "Verificación / Desactivación de Cuenta" },
      { value: "asin-removal", label: "Eliminación de ASIN o Listado" },
      { value: "listing-suppressed", label: "Listado Suprimido o Restringido" },
      { value: "ip-complaint-received", label: "Queja de PI / Marca Recibida" },
      { value: "ip-complaint-filing", label: "Queja de PI / Marca a Presentar" },
      { value: "counterfeit-allegation", label: "Alegación de Falsificación o Inautenticidad" },
      { value: "poa-drafting", label: "Plan de Acción / Elaboración de Apelación" },
      { value: "other", label: "Otro / No Estoy Seguro" },
    ],
    sellingPlanOptions: [
      { value: "", label: "Selecciona…" },
      { value: "individual", label: "Individual" },
      { value: "professional", label: "Profesional" },
    ],
    businessModelOptions: [
      { value: "", label: "Selecciona…" },
      { value: "fba", label: "FBA (Gestión logística de Amazon)" },
      { value: "fbm", label: "FBM (Gestión logística del vendedor)" },
      { value: "both", label: "Ambos FBA y FBM" },
    ],
    priorAppealsOptions: [
      { value: "", label: "Selecciona…" },
      { value: "no", label: "No — es el primer intento" },
      { value: "yes", label: "Sí — ya he enviado apelaciones" },
    ],
    whatsapp: {
      show: true,
      headline: "¿Prefieres enviar un mensaje directo?",
      body: "También puedes contactarnos por WhatsApp para un intercambio inicial más rápido. Incluye una breve descripción de tu situación y responderé lo antes posible.",
      number: "+1 (000) 000-0000",
      label: "Enviar Mensaje por WhatsApp",
    },
    afterSubmit: {
      headline: "¿Qué sucede después?",
      steps: [
        "Tu envío es revisado — generalmente dentro de 1–2 días hábiles.",
        "Si tu situación está dentro de los servicios ofrecidos, haré un seguimiento con observaciones iniciales y próximos pasos.",
        "Si no soy la persona indicada para tu caso, te lo haré saber con claridad — sin rodeos.",
      ],
    },
    success: {
      headline: "Tu mensaje fue recibido.",
      body: "Revisaré los detalles y haré un seguimiento dentro de 1–2 días hábiles. Si tu situación es urgente, menciónalo en tu resumen y haré mi mejor esfuerzo por priorizarlo.",
      note: "Revisa tu carpeta de spam si no recibes respuesta dentro de 2 días hábiles.",
    },
    sidebarLabels: {
      responseTime: "Tiempo de Respuesta",
      confidentiality: "Confidencialidad",
      commonQuestions: "Preguntas Frecuentes",
      confidentialityNote:
        "Todo lo que se comparte aquí se mantiene estrictamente confidencial. Los detalles de tu caso nunca se comparten con terceros ni se revelan fuera de este servicio.",
    },
  },

  processPage: {
    hero: {
      eyebrow: "Cómo Funciona",
      headline: "Un Proceso Estructurado, Adaptado a Tu Caso",
      subheadline:
        "Cada caso sigue el mismo marco práctico — comenzando con una comprensión clara de tu situación y terminando con una presentación preparada y alineada con las políticas.",
    },
    steps: [
      {
        number: "01",
        icon: "ClipboardList",
        title: "Revisión Inicial del Caso",
        summary: "Entender lo que enfrentas antes que cualquier otra cosa.",
        details: [
          "Envías una breve descripción de tu situación a través del formulario.",
          "Se revisa el aviso de suspensión, la referencia de política y el contexto de la cuenta.",
          "Se confirma el alcance y el enfoque para tu caso antes de comenzar el trabajo.",
        ],
      },
      {
        number: "02",
        icon: "ScanSearch",
        title: "Análisis del Problema",
        summary: "Identificar la causa raíz y lo que Amazon realmente solicita.",
        details: [
          "La política o infracción citada se mapea con sus requisitos específicos.",
          "Se revisan las presentaciones previas o el historial de comunicación si están disponibles.",
          "Se prepara un breve análisis técnico de la situación para establecer una imagen clara del problema central y el camino a seguir.",
        ],
      },
      {
        number: "03",
        icon: "PenLine",
        title: "Apoyo en Redacción y Estrategia",
        summary: "Preparar una respuesta estructurada para el problema específico.",
        details: [
          "Se elaboran y entregan hasta 4 Planes de Acción personalizados para la presentación del cliente.",
          "Si la vía del POA no avanza, se preparan cartas con los anexos correspondientes para los departamentos internos de Amazon.",
          "El tono, la estructura y el enfoque se revisan para claridad y alineación con políticas en cada borrador.",
        ],
      },
      {
        number: "04",
        icon: "FolderSearch",
        title: "Revisión de Evidencias y Documentos",
        summary: "Asegurarse de que los materiales de apoyo estén completos y bien organizados.",
        details: [
          "Se revisan facturas, documentos de proveedores, apelaciones previas o registros de quejas.",
          "Se identifican brechas o debilidades en la evidencia de apoyo.",
          "Los documentos se organizan para alinearse con las afirmaciones hechas en la presentación.",
        ],
      },
      {
        number: "05",
        icon: "Send",
        title: "Orientación para la Presentación y Próximos Pasos",
        summary: "Una revisión final antes de enviar — y un plan claro si se necesita seguimiento.",
        details: [
          "La presentación completa se revisa en conjunto antes de enviar.",
          "Se discuten las instrucciones de presentación y las consideraciones de tiempo.",
          "Si Amazon responde con una solicitud de seguimiento, se delinean los próximos pasos.",
        ],
      },
    ],
    clientProvides: {
      headline: "Lo Que Deberás Compartir",
      subheadline:
        "Cuanto más contexto puedas proporcionar desde el inicio, más enfocado será el análisis. Esto es lo que típicamente se necesita:",
      categories: [
        {
          icon: "Bell",
          label: "Avisos y Alertas",
          items: [
            "Aviso de suspensión o advertencia de cuenta",
            "Aviso de eliminación o supresión de ASIN",
            "Mensaje de queja de PI o marca registrada",
            "Advertencia de política de rendimiento del vendedor",
          ],
        },
        {
          icon: "Store",
          label: "Detalles de Cuenta y Listado",
          items: [
            "ASIN(s) afectados",
            "Mercado y región de la cuenta",
            "Métricas relevantes del estado de la cuenta (si aplica)",
            "Categoría del producto y detalles del proveedor",
          ],
        },
        {
          icon: "History",
          label: "Presentaciones Anteriores",
          items: [
            "Intentos de apelación previos y respuestas de Amazon",
            "Planes de Acción anteriores (si se presentaron)",
            "Cualquier comunicación previa con Soporte al Vendedor",
          ],
        },
        {
          icon: "Paperclip",
          label: "Documentos de Apoyo",
          items: [
            "Facturas, recibos o registros de proveedores",
            "Cartas de autorización del fabricante o proveedor",
            "Evidencia relevante para la queja o infracción",
            "Cualquier documentación específicamente solicitada por Amazon",
          ],
        },
      ],
      note: "No todas las categorías aplican a cada caso. Comparte lo que tengas — las brechas se identifican durante la fase de análisis.",
    },
    stepsSection: {
      sectionLabel: "El Flujo de Trabajo",
      headline: "Cinco Pasos, de Inicio a Fin",
      subheadline:
        "Cada paso está enfocado en una cosa — dar a tu presentación la base más sólida posible.",
    },
    clientProvidesSection: {
      sectionLabel: "Qué Preparar",
    },
  },

  aboutPage: {
    hero: {
      eyebrow: "Acerca de",
      headline: "Apoyo Independiente para Vendedores y Propietarios de Marca en Amazon",
      subheadline:
        "Este es un servicio de consultoría y preparación de documentos — no un despacho legal, no parte de Amazon. El enfoque es ayudarte a preparar presentaciones más sólidas y mejor estructuradas.",
    },
    whoFor: {
      headline: "Para Quién Es Este Servicio",
      subheadline:
        "Si vendes en Amazon y enfrentas una situación que requiere una respuesta escrita formal, este servicio está diseñado para eso.",
      groups: [
        {
          icon: "ShieldAlert",
          title: "Vendedores con Problemas de Cuenta",
          description:
            "Suspensiones, desactivaciones, retenciones por verificación o advertencias de rendimiento del vendedor que requieren una respuesta estructurada o un Plan de Acción.",
        },
        {
          icon: "Package",
          title: "Vendedores con Problemas de ASIN o Listados",
          description:
            "Listados eliminados, suprimidos o restringidos donde se necesita una apelación o documentación de apoyo para abordar la razón citada.",
        },
        {
          icon: "Scale",
          title: "Propietarios de Marca con Problemas de PI",
          description:
            "Vendedores que han recibido quejas de propiedad intelectual o marcas registradas, o propietarios de marca que necesitan preparar y presentar una queja propia.",
        },
        {
          icon: "BarChart2",
          title: "Vendedores en Situaciones de Cumplimiento",
          description:
            "Vendedores que monitorean métricas de rendimiento, responden a alertas de política o intentan entender qué activó una advertencia antes de que se convierta en una suspensión.",
        },
      ],
    },
    whatSupport: {
      headline: "Qué Incluye el Apoyo",
      subheadline: "Cada caso se limita a lo que realmente se necesita para el problema en cuestión.",
      items: [
        {
          icon: "PenLine",
          title: "Asistencia en Elaboración de Apelaciones",
          description:
            "Redacción y estructuración de cartas de apelación que abordan la razón específica citada por Amazon.",
        },
        {
          icon: "ClipboardList",
          title: "Desarrollo del Plan de Acción",
          description:
            "Construcción de un Plan de Acción completo — causa raíz, acciones correctivas y pasos preventivos — alineado con los requisitos declarados de Amazon.",
        },
        {
          icon: "ScanSearch",
          title: "Análisis de Suspensión y Problemas",
          description:
            "Revisión del aviso, contexto de política e historial de la cuenta para identificar lo que realmente está impulsando el problema.",
        },
        {
          icon: "FolderSearch",
          title: "Revisión de Documentos y Evidencias",
          description:
            "Revisión de materiales de apoyo — facturas, registros de proveedores, presentaciones previas — para identificar brechas y organizar para la presentación.",
        },
        {
          icon: "FileCheck",
          title: "Preparación del Lenguaje de Presentación",
          description:
            "Revisión y edición del texto de presentación para tono, claridad, completitud y alineación con la política citada por Amazon.",
        },
        {
          icon: "Compass",
          title: "Orientación Estratégica y Próximos Pasos",
          description:
            "Orientación práctica sobre qué hacer, qué enviar y qué esperar — sin ambigüedades.",
        },
      ],
    },
    approach: {
      headline: "Cómo Se Realiza Este Trabajo",
      subheadline: "El mismo enfoque aplica a cada caso, independientemente del tamaño o complejidad.",
      points: [
        "Cada caso comienza con una revisión completa del aviso y el contexto citado — no con una búsqueda de plantillas.",
        "Cada presentación se prepara para el problema específico, no adaptada de una estructura genérica.",
        "Los documentos de apoyo se revisan en busca de brechas antes de enviar cualquier cosa.",
        "El lenguaje se verifica para tono, enfoque y completitud en cada etapa.",
        "Estás informado en todo momento — sin cajas negras, sin demoras inexplicables.",
        "Si un caso está fuera del alcance de este servicio, se comunica claramente desde el inicio.",
      ],
      closing:
        "Este servicio no garantiza el reactivación ni ningún resultado específico. Amazon toma la decisión final. Lo que ofrezco es una preparación cuidadosa y exhaustiva.",
    },
  },

  footerNav: [
    {
      heading: "Servicios",
      links: [
        { label: "Reactivación de Cuenta", href: "/es/services#account-reactivación" },
        { label: "ASIN y Listados", href: "/es/services#asin-listing" },
        { label: "Marca y Quejas de PI", href: "/es/services#brand-ip" },
        { label: "Apelaciones y Planes de Acción", href: "/es/services#appeal-poa" },
        { label: "Cumplimiento y Estrategia", href: "/es/services#compliance-strategy" },
        { label: "Revisión de Documentos", href: "/es/services#document-review" },
      ],
    },
    {
      heading: "Empresa",
      links: [
        { label: "Acerca de", href: "/es/about" },
        { label: "Cómo Funciona", href: "/es/process" },
        { label: "FAQ", href: "/es/faq" },
        { label: "Contacto", href: "/es/contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Política de Privacidad", href: "/es/privacy" },
        { label: "Términos de Uso", href: "/es/terms" },
        { label: "Aviso Legal", href: "/es/disclaimer" },
      ],
    },
  ],

  legalPages: {
    privacy: {
      title: "Política de Privacidad",
      effectiveDate: "[FECHA DE VIGENCIA]",
      intro:
        "Esta Política de Privacidad explica qué información se recopila cuando utilizas este sitio web o envías una solicitud de contacto, cómo se usa esa información y cómo puedes comunicarte con nosotros respecto a tus datos.",
      sections: [
        {
          heading: "Información Recopilada",
          body: "Cuando usas el formulario de contacto o te comunicas por correo electrónico o WhatsApp, puede recopilarse la siguiente información: tu nombre, dirección de correo electrónico, número de teléfono, nombre de empresa o marca, una descripción de tu situación y cualquier documento que elijas adjuntar. No se recopila información de forma pasiva a través de píxeles de seguimiento o cookies publicitarias. La plataforma de alojamiento puede recopilar análisis básicos, como páginas vistas.",
        },
        {
          heading: "Cómo Se Usa la Información",
          body: "La información que envías se usa únicamente para responder a tu consulta y, si procedes, para proporcionar los servicios de consultoría solicitados. Tus datos no se usan para marketing, no se venden y no se añaden a ninguna lista de correo sin tu acuerdo explícito.",
        },
        {
          heading: "Métodos de Comunicación",
          body: "Si envías un formulario de contacto, respondes por correo electrónico o te comunicas por WhatsApp, la comunicación puede realizarse a través de esos mismos canales. No se usa comunicación automatizada ni plataformas de mensajería de terceros más allá de lo que tú inicia.",
        },
        {
          heading: "Compartir Datos",
          body: "Tu información no se vende, alquila ni comparte con terceros para sus propios fines. La información solo puede compartirse cuando la ley lo requiere o, con tu conocimiento, con un tercero directamente involucrado en la prestación del servicio solicitado.",
        },
        {
          heading: "Retención de Datos",
          body: "La información enviada a través del formulario de contacto o compartida durante un contrato de consultoría se conserva solo el tiempo razonablemente necesario para prestar el servicio o cumplir con las obligaciones legales aplicables. Puedes solicitar la eliminación de tu información en cualquier momento contactándonos directamente.",
        },
        {
          heading: "Seguridad",
          body: "Se toman medidas razonables para proteger la información enviada a través de este sitio web. Sin embargo, ningún método de transmisión o almacenamiento electrónico es completamente seguro, y no se garantiza la seguridad absoluta.",
        },
        {
          heading: "Servicios de Terceros",
          body: "Este sitio web puede estar alojado en una plataforma de terceros (como Vercel o un proveedor similar). Esas plataformas pueden procesar datos técnicos básicos, como direcciones IP y registros de solicitudes, de acuerdo con sus propias políticas de privacidad. No se integran intencionalmente servicios de publicidad o seguimiento conductual de terceros.",
        },
        {
          heading: "Contacto",
          body: "Para preguntas sobre esta Política de Privacidad o para solicitar la eliminación de tu información, contacta: hello@amazonappealpro.com.",
        },
      ],
    },
    terms: {
      title: "Términos de Uso",
      effectiveDate: "[FECHA DE VIGENCIA]",
      intro:
        "Al usar este sitio web o enviar una solicitud de contacto, aceptas los siguientes términos. Por favor léelos antes de proceder.",
      sections: [
        {
          heading: "Uso del Sitio Web",
          body: "Este sitio web se proporciona con fines informativos y para facilitar solicitudes de servicios de apoyo en consultoría. Aceptas usar el sitio solo para fines legales y no enviar información falsa, engañosa o dañina a través de ningún formulario de contacto o canal de comunicación.",
        },
        {
          heading: "Sin Garantía de Resultados",
          body: "Este servicio ofrece consultoría, asistencia en la redacción, revisión de documentos y orientación estratégica. No garantiza el reactivación de ninguna cuenta o listado de Amazon, la resolución de ninguna queja ni ningún otro resultado específico. Todas las decisiones finales corresponden a Amazon o a la plataforma o parte relevante.",
        },
        {
          heading: "Servicio Independiente",
          body: "Este es un servicio de consultoría independiente y no está afiliado, respaldado ni es representante de Amazon.com, Inc. ni de ninguna de sus subsidiarias. El uso de terminología relacionada con Amazon es solo con fines descriptivos.",
        },
        {
          heading: "Responsabilidad del Usuario",
          body: "Eres responsable de la exactitud y completitud de cualquier información, documento o detalle que envíes. La calidad del apoyo proporcionado depende en parte de la exactitud de la información compartida. Enviar información falsa o engañosa puede afectar el resultado de cualquier apelación o respuesta, independientemente del apoyo proporcionado.",
        },
        {
          heading: "Propiedad Intelectual",
          body: "Todo el contenido original de este sitio web — incluyendo texto, estructura y diseño — es propiedad de este negocio. No puedes reproducir, copiar ni redistribuir el contenido del sitio sin permiso por escrito.",
        },
        {
          heading: "Limitación de Responsabilidad",
          body: "En la medida máxima permitida por la ley aplicable, este servicio no es responsable de ningún daño indirecto, incidental o consecuente derivado del uso de este sitio web o de la confianza en su contenido. La responsabilidad total por cualquier reclamación relacionada con los servicios prestados no excederá el monto pagado por dichos servicios.",
        },
        {
          heading: "Cambios en Estos Términos",
          body: "Estos términos pueden actualizarse de vez en cuando. El uso continuado del sitio web después de publicar los cambios constituye la aceptación de los términos revisados. La fecha de vigencia en la parte superior de esta página reflejará la actualización más reciente.",
        },
        {
          heading: "Contacto",
          body: "Para preguntas sobre estos Términos de Uso, contacta: hello@amazonappealpro.com.",
        },
      ],
    },
    disclaimer: {
      title: "Aviso Legal",
      effectiveDate: "[FECHA DE VIGENCIA]",
      intro: "Por favor lee este aviso legal cuidadosamente antes de usar este sitio web o solicitar servicios.",
      sections: [
        {
          heading: "Servicio Independiente — Sin Afiliación con Amazon",
          body: "Underdogs Appeal Pro es un servicio independiente de consultoría y preparación de documentos. No está afiliado, respaldado, empleado ni es representante de Amazon.com, Inc. ni de ninguna de sus subsidiarias o entidades relacionadas. Cualquier referencia a Amazon, sus políticas o sus programas es solo con fines descriptivos.",
        },
        {
          heading: "Sin Garantía de Reactivación o Resultado",
          body: "Este servicio no garantiza el reactivación de ninguna cuenta o listado suspendido, la resolución de ninguna queja ni ningún otro resultado específico. Amazon y otras plataformas relevantes conservan la discreción exclusiva sobre sus decisiones. Los resultados dependen de muchos factores fuera del control de este servicio.",
        },
        {
          heading: "Contenido Solo Informativo",
          body: "El contenido de este sitio web — incluidas las descripciones de servicios, los pasos del proceso y las respuestas de FAQ — se proporciona con fines informativos generales. No constituye asesoramiento legal, asesoramiento profesional ni garantía de que algún enfoque específico sea efectivo para tu situación.",
        },
        {
          heading: "Sin Asesoramiento ni Representación Legal",
          body: "Este servicio no es un despacho legal y no proporciona asesoramiento legal ni representación legal. Si tu situación requiere asesoramiento legal, debes consultar a un abogado calificado de forma independiente.",
        },
        {
          heading: "Responsabilidad del Usuario",
          body: "Eres el único responsable de la exactitud de la información que envías, las decisiones que tomas basándote en el apoyo proporcionado y el contenido de cualquier presentación que envíes a Amazon o a cualquier tercero. El apoyo en consultoría ayuda en la preparación — el acto de presentar y la responsabilidad de esa presentación siguen siendo tuyos.",
        },
        {
          heading: "Contacto",
          body: "Para preguntas sobre este aviso legal, contacta: hello@amazonappealpro.com.",
        },
      ],
    },
  },
} as const;

export type Messages = typeof messages;
