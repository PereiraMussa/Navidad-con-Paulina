/**
 * CONFIGURACIÓN CENTRAL DE LA PÁGINA DE VENTA
 * 
 * En este archivo puedes modificar fácilmente:
 * - URL de Checkout
 * - Precios y descuentos
 * - Datos de contacto y soporte
 * - Rutas de imágenes
 * - Textos de ofertas adicionales y preguntas frecuentes
 */

export const siteConfig = {
  // Identidad del Producto
  product: {
    title: "La Navidad que Todos Recordarán",
    subtitle: "Decoración, sabores y organización para crear una celebración inolvidable",
    author: "Paulina Celebra",
    editionBadge: "GUÍA PRÁCTICA DE NAVIDAD",
    formatBadge: "Acceso digital • Lectura inmediata • Desde cualquier dispositivo",
  },

  // Variables comerciales (fáciles de modificar)
  pricing: {
    currentPrice: "US$4,95",
    previousPrice: "US$15,00",
    discount: "67%",
    currency: "USD",
    checkoutUrl: "https://pay.hotmart.com/A107873314Y", // Hotmart Checkout Oficial
  },

  // Ubicación de archivos e imágenes
  // Coloca tus imágenes reales en la carpeta /public/images/ con estos nombres
  images: {
    cover: "/images/capa-ebook.png",
    mockup3D: "/images/mockup-3d.png",
    authorPhoto: "/images/paulina-celebra.jpg", // Espacio para [FOTO_DE_PAULINA_CELEBRA]
    previews: [
      {
        id: "previa-1",
        label: "[PRÉVIA DA PÁGINA 1]",
        title: "Guía de Paleta y Texturas",
        desc: "Combinación de verde pino, vino profundo y marfil",
        src: "/images/previa-1.jpg",
      },
      {
        id: "previa-2",
        label: "[PRÉVIA DA PÁGINA 2]",
        title: "Planificación Semana a Semana",
        desc: "Cronograma de compras y preparativos sin agobios",
        src: "/images/previa-2.jpg",
      },
      {
        id: "previa-3",
        label: "[PRÉVIA DA PÁGINA 3]",
        title: "Montaje de Mesa Festiva",
        desc: "Centros de mesa, servilleteros y vajilla paso a paso",
        src: "/images/previa-3.jpg",
      },
      {
        id: "previa-4",
        label: "[PRÉVIA DA PÁGINA 4]",
        title: "Detalles que Emocionan",
        desc: "Ideas emotivas para recibir a cada invitado con amor",
        src: "/images/previa-4.jpg",
      },
    ],
    additionalProduct: "/images/adicional-fin-de-ano.jpg",
  },

  // Soporte y Atención al Cliente
  support: {
    emailOrWhatsapp: "paulinacelebra@hotmail.com",
    deliveryMethod: "Envío digital inmediato a tu correo electrónico tras la confirmación del pago",
    paymentMethods: "Tarjetas de crédito, débito y plataformas de pago seguro",
  },

  // Secciones de contenido estructurado
  hero: {
    topBarAnnouncement: "Una Navidad inolvidable comienza con una buena preparación.",
    headline: "Crea una Navidad tan especial que todos querrán recordarla",
    subheadline: "Descubre cómo combinar decoración, sabores y organización para preparar una celebración hermosa, acogedora y sin estrés.",
    quickBenefits: [
      "Decora con elegancia sin gastar de más",
      "Organiza cada detalle sin sentirte abrumada",
      "Crea momentos que tu familia recordará",
      "Sigue orientaciones claras y fáciles de aplicar",
    ],
    ctaButton: "QUIERO CREAR UNA NAVIDAD INOLVIDABLE",
  },

  problem: {
    title: "La Navidad debería sentirse especial, no agotadora",
    situations: [
      {
        id: "prob-1",
        title: "No saber por dónde comenzar",
        description: "Tener miles de ideas en la cabeza pero sentir parálisis ante tantas tareas pendientes.",
      },
      {
        id: "prob-2",
        title: "Comprar adornos que después no combinan",
        description: "Adquirir cosas por impulso en las tiendas que luego no lucen armónicas en casa.",
      },
      {
        id: "prob-3",
        title: "Gastar más de lo necesario",
        description: "Pensar que para tener un ambiente elegante se requiere un presupuesto astronómico.",
      },
      {
        id: "prob-4",
        title: "Dejar todo para los últimos días",
        description: "Correr a última hora entre el tráfico y compras apuradas la víspera de Nochebuena.",
      },
      {
        id: "prob-5",
        title: "Preparar una mesa sin armonía",
        description: "Disponer la comida y los cubiertos sin esa calidez que invita a quedarse a conversar.",
      },
      {
        id: "prob-6",
        title: "Sentir que falta algo especial en la celebración",
        description: "Acabar la noche exhausta sin haber disfrutado realmente de las personas que amas.",
      },
    ],
    closingQuote: "No necesitas hacer más. Necesitas saber qué hacer, en qué orden y cómo combinar cada detalle.",
  },

  transformation: {
    title: "El cambio que mereces vivir este año",
    subtitle: "Compara lo que ocurre cuando improvisas frente a cuando tienes un método claro y cariñoso.",
    before: [
      "Ideas desorganizadas",
      "Compras impulsivas",
      "Decoración recargada",
      "Estrés de última hora",
      "Falta de tiempo",
    ],
    after: [
      "Plan claro",
      "Paleta de colores armoniosa",
      "Ambientes elegantes",
      "Celebración organizada",
      "Más tiempo para disfrutar",
    ],
    closingText: "“La Navidad que Todos Recordarán” convierte la preparación en una experiencia clara, agradable y llena de intención.",
  },

  presentation: {
    title: "Tu guía para transformar cada detalle de la Navidad",
    description: "Este ebook reúne ideas prácticas, orientaciones visuales y pasos claros para ayudarte a crear una celebración coherente, bonita y memorable. No necesitas ser experta en decoración ni disponer de un gran presupuesto.",
    markers: [
      "Explicaciones directas",
      "Ejemplos fáciles de aplicar",
      "Inspiración visual",
      "Flechas y orientaciones",
      "Organización paso a paso",
      "Diseño cómodo de leer",
    ],
  },

  chapters: [
    {
      number: "01",
      title: "Planificación de una Navidad sin estrés",
      summary: "Cómo organizar prioridades, tareas, compras y plazos con calma y antelación para no dejar nada librado a la improvisación.",
      focus: "Organización y tranquilidad",
    },
    {
      number: "02",
      title: "Elección de colores y estilo",
      summary: "Cómo crear una decoración coherente utilizando combinaciones elegantes, armónicas y con identidad propia en cada rincón.",
      focus: "Estética y armonía",
    },
    {
      number: "03",
      title: "Decoración de los ambientes",
      summary: "Orientaciones precisas para la sala de estar, la mesa central, la entrada de bienvenida y los principales espacios del hogar.",
      focus: "Ambientes cálidos",
    },
    {
      number: "04",
      title: "Mesa navideña inolvidable",
      summary: "Cómo combinar manteles, vajilla, servilletas, centros de mesa artesanales e iluminación tenue para una mesa cautivadora.",
      focus: "El corazón de la cena",
    },
    {
      number: "05",
      title: "Sabores que crean recuerdos",
      summary: "Ideas para construir una experiencia verdaderamente acogedora por medio de la presentación de los platillos y aromas entrañables.",
      focus: "Experiencia sensorial",
    },
    {
      number: "06",
      title: "Detalles que emocionan",
      summary: "Pequeños gestos, recuerdos personalizados y elementos afectivos que conmueven y hacen sentir querida a tu familia.",
      focus: "Significado y cariño",
    },
    {
      number: "07",
      title: "Organización del día de Navidad",
      summary: "Pasos cronometrados para reducir imprevistos de última hora y sentarte a disfrutar plenamente con los tuyos.",
      focus: "Disfrute familiar pleno",
    },
  ],

  benefits: {
    title: "No es solo decoración. Es la experiencia completa.",
    subtitle: "Cada página está pensada para brindarte resultados tangibles desde el primer día de lectura.",
    items: [
      {
        id: "b1",
        title: "Ahorrar tiempo al saber exactamente por dónde comenzar",
        description: "Elimina las dudas y los rodeos con un orden lógico de acción.",
      },
      {
        id: "b2",
        title: "Evitar compras que no combinan con la decoración",
        description: "Invierte solo en lo que suma valor visual y elegancia real a tus espacios.",
      },
      {
        id: "b3",
        title: "Crear ambientes visualmente armoniosos",
        description: "Logra un equilibrio visual digno de revista sin complicarte la vida.",
      },
      {
        id: "b4",
        title: "Organizar la celebración con mayor tranquilidad",
        description: "Baja la ansiedad y recupera la alegría del espíritu navideño.",
      },
      {
        id: "b5",
        title: "Aprovechar mejor lo que ya tienes en casa",
        description: "Aprende a reutilizar elementos cotidianos con una mirada refinada.",
      },
      {
        id: "b6",
        title: "Recibir a la familia en un ambiente acogedor",
        description: "Tus invitados percibirán el amor y la dedicación en cada rincón.",
      },
      {
        id: "b7",
        title: "Convertir pequeños detalles en recuerdos especiales",
        description: "Momentos mágicos que tus hijos, pareja y seres queridos atesorarán por siempre.",
      },
    ],
  },

  audience: {
    title: "Esta guía es para ti si…",
    items: [
      "Quieres crear una Navidad bonita sin gastar de forma descontrolada.",
      "Te gustan las celebraciones elegantes y acogedoras.",
      "Necesitas organizar tus ideas y tener una guía paso a paso.",
      "No sabes cómo combinar colores, texturas y adornos con éxito.",
      "Deseas sorprender y mimar a tu familia con momentos únicos.",
      "Quieres disfrutar de la celebración sin estrés ni agotamiento.",
    ],
    reassurance: "No necesitas experiencia en decoración. Cada orientación fue pensada para ser clara, visual y fácil de aplicar.",
  },

  testimonials: {
    sectionTag: "VOCES Y EXPERIENCIAS REALES",
    title: "Lo que dicen las lectoras de “La Navidad que Todos Recordarán”",
    subtitle: "Descubre cómo cientos de familias transformaron la ansiedad de las fiestas en serenidad, buen gusto y recuerdos imborrables.",
    averageRating: "4.9",
    totalReviews: "+2.400 lectoras",
    satisfactionRate: "98.7%",
    items: [
      {
        id: "t1",
        name: "Mariana Rivas",
        location: "Madrid, España",
        role: "Lectora verificada",
        date: "Navidad pasada",
        rating: 5,
        highlight: "Por primera vez en 10 años disfruté la Nochebuena sin agotamiento",
        comment: "Siempre terminaba cocinando y corriendo hasta las 9 de la noche con dolor de cabeza. Gracias al cronograma y la lista de prioridades de Paulina, a las 7 de la tarde ya estaba lista, tranquila y recibiendo a mi familia con una sonrisa. La guía vale oro.",
        avatarInitials: "MR",
        badge: "Organización y Calma",
      },
      {
        id: "t2",
        name: "Carolina Morales",
        location: "Santiago, Chile",
        role: "Lectora verificada",
        date: "Navidad pasada",
        rating: 5,
        highlight: "Ahorré más de 150 dólares reutilizando lo que ya tenía en casa",
        comment: "Pensaba comprar adornos nuevos y cambiar la mantelería. Paulina enseña a mirar con otros ojos lo que uno ya guarda en cajas. Con follaje natural, velas y la regla de armonía de color, la mesa quedó como de revista.",
        avatarInitials: "CM",
        badge: "Ahorro Inteligente",
      },
      {
        id: "t3",
        name: "Valeria Gómez",
        location: "Buenos Aires, Argentina",
        role: "Lectora verificada",
        date: "Diciembre reciente",
        rating: 5,
        highlight: "Las fotos con flechas explicativas son facilísimas de replicar",
        comment: "No tengo buen ojo para combinar cosas, pero el libro es súper visual y directo al punto. No te llena de teoría aburrida: te dice exactamente qué poner al centro, qué luz usar y cómo doblar las servilletas. Todos mis invitados quedaron maravillados.",
        avatarInitials: "VG",
        badge: "Guía Visual Paso a Paso",
      },
      {
        id: "t4",
        name: "Sofía Lozano",
        location: "Ciudad de México",
        role: "Lectora verificada",
        date: "Diciembre reciente",
        rating: 5,
        highlight: "La regla del 60-30-10 cambió por completo la estética de mi sala",
        comment: "Antes mezclaba rojos chillones, plateados y verdes sin sentido. Aplicar la tríada de tonos que recomienda Paulina le dio una elegancia y una calidez a la casa que no habíamos sentido nunca. Mis hijos dijeron que parecía una película.",
        avatarInitials: "SL",
        badge: "Estética & Elegancia",
      },
      {
        id: "t5",
        name: "Beatriz Paredes",
        location: "Bogotá, Colombia",
        role: "Lectora verificada",
        date: "Navidad pasada",
        rating: 5,
        highlight: "Te devuelve el verdadero espíritu de unión familiar",
        comment: "Más allá de que la casa quede hermosa, lo más valioso es la calidez y el sentido que Paulina transmite en cada capítulo. Logró que preparar la celebración fuera un momento de juego y encuentro con mis hijas en lugar de una carga.",
        avatarInitials: "BP",
        badge: "Vínculo Familiar",
      },
      {
        id: "t6",
        name: "Elena Durán",
        location: "Lima, Perú",
        role: "Lectora verificada",
        date: "Diciembre reciente",
        rating: 5,
        highlight: "El formato digital en la tablet fue mi mejor aliado en la cocina",
        comment: "Pude tener la guía abierta mientras preparaba la mesa y los detalles de bienvenida. El paso a paso cronometrado para el día de Navidad evitó todos los olvidos típicos de último momento. Totalmente recomendada.",
        avatarInitials: "ED",
        badge: "Formato Práctico",
      },
    ],
  },

  author: {
    name: "Paulina Celebra",
    title: "Conoce a Paulina Celebra",
    url: "https://paulinacelebra.com",
    publisherUrl: "https://paulinacelebra.com",
    instagramUrl: "https://www.instagram.com/paulinacelebra",
    bioParagraph1: "Paulina Celebra es una creadora apasionada por transformar celebraciones en experiencias llenas de belleza, intención y significado. Su propósito es ayudar a las familias a organizar momentos especiales mediante ideas claras, accesibles y fáciles de aplicar.",
    bioParagraph2: "En “La Navidad que Todos Recordarán”, Paulina reúne inspiración, organización y sensibilidad visual para demostrar que una celebración inolvidable no depende de gastar más, sino de elegir mejor cada detalle.",
    photoPlaceholderLabel: "[FOTO_DE_PAULINA_CELEBRA]",
  },

  offer: {
    title: "Empieza hoy a preparar la Navidad que tu familia recordará",
    cta: "SÍ, QUIERO MI GUÍA DE NAVIDAD",
    microtext: "Haz clic en el botón para continuar al pago seguro.",
    highlights: [
      "Ebook digital en formato descargable para móvil, tablet y PC",
      "Orientaciones visuales claras y paso a paso para cada ambiente",
      "Cronograma de organización para llegar relajada a la fiesta",
      "Guía para combinar vajilla, colores y texturas sin gastar de más",
      "Acceso inmediato tras confirmar el pago",
    ],
  },

  additionalOffer: {
    title: "Completa tu celebración de fin de año",
    name: "Kit Réveillon Inesquecível",
    description: "La guía y herramientas prácticas de Paulina Celebra para despedir el año y recibir el Año Nuevo con elegancia, serenidad y momentos memorables.",
    price: "1,99",
    image: "/images/kit-reveillon-inesquecivel.jpg",
    isAvailable: true,
    benefitsList: [
      {
        title: "Todo organizado, sin estrés de última hora",
        desc: "Recibe un plan claro con cronograma, listas y pasos prácticos para preparar cada detalle sin olvidar nada.",
      },
      {
        title: "Celebra mejor sin gastar de más",
        desc: "Controla tu presupuesto, evita compras innecesarias y aprovecha cada recurso para crear una celebración elegante.",
      },
      {
        title: "Convierte la medianoche en un recuerdo inolvidable",
        desc: "Sorprende a tus invitados con una decoración armoniosa, dinámicas especiales y un momento de Año Nuevo cuidadosamente preparado.",
      },
    ],
  },

  faq: [
    {
      question: "¿El ebook es físico?",
      answer: "No. Es un producto digital que podrás consultar cómodamente desde tu teléfono, tableta o computadora apenas finalices tu compra.",
    },
    {
      question: "¿Necesito experiencia en decoración?",
      answer: "No. Las orientaciones están organizadas de forma didáctica y sumamente visual para que cualquier persona pueda aplicarlas con éxito, independientemente de sus conocimientos previos.",
    },
    {
      question: "¿Puedo leerlo desde el teléfono?",
      answer: "Sí. El material fue especialmente diagramado para ofrecer una lectura muy cómoda y fluida en pantallas de smartphones, tablets o computadoras.",
    },
    {
      question: "¿Recibiré el material inmediatamente?",
      answer: "[INSERIR FORMA E PRAZO DE ENTREGA]",
    },
    {
      question: "¿Qué formas de pago están disponibles?",
      answer: "[INSERIR FORMAS DE PAGAMENTO]",
    },
    {
      question: "¿Cómo puedo solicitar ayuda?",
      answer: "[INSERIR EMAIL OU WHATSAPP DE SUPORTE]",
    },
  ],

  finalCta: {
    title: "Los momentos más especiales no ocurren por casualidad. Se preparan con amor.",
    subtitle: "Da el primer paso para crear una celebración organizada, hermosa y verdaderamente inolvidable.",
    buttonText: "QUIERO PREPARAR MI NAVIDAD",
  },

  footer: {
    copyrightOwner: "Paulina Celebra",
    digitalProductNotice: "Aviso: Este es un producto digital de consulta interactiva. Ningún material físico será enviado por correo postal.",
    links: [
      { id: "terms", label: "Términos y Condiciones" },
      { id: "privacy", label: "Política de Privacidad" },
      { id: "contact", label: "Contacto" },
    ],
  },
};
