// src/data/services.ts
// Páginas de servicio (PLAN-MAESTRO 3.1 y Fase 4). Cada entrada genera /<slug> con su H1,
// proceso, preguntas propias y JSON-LD Service.
// Regla 3: los textos usan solo lo que la web ya decía, lo confirmado en la sección 3 o lo que
// Don Hernán escribió el 21 nov 2026 (licencia de gas clase 3, TC6, RIDAA, constructor civil)
// y respondió el 23 nov 2026 (todo tipo de gas, anticipo en proyectos, calefones multimarca,
// toda la Región Metropolitana con recargo).
// Nada de precios, plazos ni garantías hasta que él los confirme. Que él revise estos textos.
import { BUSINESS, communesText } from '../config/business';
import type { FaqItem } from './faq';

export type ServicePage = {
  slug: string;
  /** Id del servicio en la portada y en data-service. */
  serviceId: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  includes: string[];
  steps: { title: string; text: string }[];
  safety?: { title: string; text: string };
  /** Recuadro informativo (azul), por ejemplo el respaldo profesional de un servicio. */
  note?: { title: string; text: string };
  /** Muestra "Pagas al terminar. Sin anticipos." bajo los botones (reparaciones y mantenciones).
   *  En instalaciones nuevas y proyectos va en false: ahí normalmente se pide un anticipo. */
  payOnCompletion: boolean;
  /** Página madre en la ruta de navegación (por ejemplo, gasfitería integral). */
  parent?: string;
  /** Páginas hijas que se destacan como "servicios especializados". */
  specialties?: string[];
  faq: FaqItem[];
  waMessage: string;
};

const hours = `${BUSINESS.hours.days.toLowerCase()} de ${Number(BUSINESS.hours.open.slice(0, 2))} a ${Number(BUSINESS.hours.close.slice(0, 2))} hrs`;

const faqCommunes: FaqItem = {
  question: '¿En qué comunas atienden?',
  answer: `En ${communesText()}, ${hours}. ${BUSINESS.extendedCoverage} No hacemos trabajos nocturnos.`,
};

const faqPayment: FaqItem = {
  question: '¿Cómo se paga?',
  answer: `${BUSINESS.paymentTerms} Puedes pagar en efectivo, transferencia o tarjeta.`,
};

const faqPaymentProjects: FaqItem = {
  question: '¿Cómo se paga una instalación nueva?',
  answer:
    'Normalmente pedimos un anticipo para comprar los materiales, y lo conversamos en cada caso. Las reparaciones y mantenciones se pagan al terminar, sin anticipos. Puedes pagar en efectivo, transferencia o tarjeta.',
};

const stepPay = {
  title: 'Pagas al terminar',
  text: 'En reparaciones y mantenciones no hay anticipos: pagas en efectivo, transferencia o tarjeta cuando el trabajo está listo.',
};

const gasSafety = {
  title: 'Si sientes olor a gas',
  text: 'Cierra la llave de paso del gas, abre puertas y ventanas y no enciendas ni apagues luces ni aparatos eléctricos. Sal del lugar y, fuera de nuestro horario, llama a la línea de emergencia de tu distribuidora de gas.',
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'gasfiter',
    serviceId: 'gasfiteria',
    name: 'Gasfitería integral',
    title: `Gasfiter SEC y Gasfitería Integral en Puente Alto | ${BUSINESS.name}`,
    description: `Gasfitería integral: instalaciones de gas, agua potable y alcantarillado, calefones, fugas y destapes. Gasfiter SEC, ${hours}.`,
    h1: 'Gasfitería integral con gasfiter certificado SEC',
    intro: `Instalaciones y reparaciones de gas, agua potable y alcantarillado, además de calefones, detección de fugas, destapes y grifería. Un solo equipo para todo tu hogar en ${communesText()}.`,
    image: '/images/carrusel-1.webp',
    imageAlt: 'Gasfiter ajustando con una llave una conexión de cañería de cobre',
    includes: [
      'Instalación y reparación de gas, con declaración TC6 ante la SEC cuando corresponde',
      'Redes de agua potable y alcantarillado, ampliaciones y proyectos sanitarios',
      'Instalación, mantención y reparación de calefones',
      'Detección y reparación de fugas de agua y gas',
      'Destapes de alcantarillado y cañerías',
      'Reparación y cambio de grifería y artefactos sanitarios',
    ],
    steps: [
      {
        title: 'Escribes o llamas',
        text: `Cuéntanos qué necesitas por WhatsApp o por teléfono, ${hours}.`,
      },
      {
        title: 'Vamos a tu casa',
        text: 'Un técnico autorizado SEC revisa el problema y te explica la solución antes de empezar.',
      },
      stepPay,
    ],
    payOnCompletion: true,
    specialties: ['instalacion-de-gas', 'agua-potable-y-alcantarillado', 'calefones', 'deteccion-de-fugas', 'destapes'],
    faq: [
      {
        question: '¿Qué incluye la gasfitería integral?',
        answer:
          'Instalaciones y reparaciones de gas, agua potable y alcantarillado, calefones, detección de fugas, destapes y grifería. Un solo equipo se hace cargo de todo.',
      },
      {
        question: '¿Pueden hacer instalaciones de gas con declaración ante la SEC?',
        answer: `Sí. ${BUSINESS.gasLicense}; tramitamos la declaración TC6 cuando el trabajo lo requiere.`,
      },
      {
        question: '¿Trabajan de noche o los fines de semana?',
        answer: `No. Atendemos ${hours}; no hacemos trabajos nocturnos.`,
      },
      faqPayment,
      faqCommunes,
    ],
    waMessage: 'Hola, necesito un gasfiter. Mi comuna es: ',
  },
  {
    slug: 'instalacion-de-gas',
    serviceId: 'gas',
    name: 'Instalación y reparación de gas',
    title: `Instalación de Gas y Declaración TC6 SEC | ${BUSINESS.name}`,
    description:
      'Instalaciones de gas natural y licuado, modificaciones y reparaciones, con declaración TC6 ante la SEC cuando corresponde. Instalador de gas clase 3.',
    h1: 'Instalación de gas con declaración TC6',
    intro:
      'Instalaciones domiciliarias de gas natural y gas licuado, modificaciones y reparaciones. Tramitamos la declaración TC6 ante la SEC cuando corresponde, con licencia de instalador clase 3.',
    image: '/images/servicios/fugas.webp',
    imageAlt: 'Detector electrónico revisando una cañería de gas',
    includes: [
      'Instalaciones domiciliarias de gas natural y de gas licuado',
      'Modificaciones de instalaciones existentes',
      'Reparación de instalaciones de gas',
      'Tramitación de la declaración TC6 ante la SEC, cuando corresponde',
      'Conexión de calefones y artefactos a gas',
    ],
    steps: [
      {
        title: 'Nos cuentas qué necesitas',
        text: 'Instalación nueva, modificación o reparación: dinos qué artefactos tienes y dónde están.',
      },
      {
        title: 'Revisión con instalador SEC',
        text: 'Un instalador con licencia clase 3 revisa la instalación y te explica qué trabajo corresponde y si requiere declaración TC6.',
      },
      {
        title: 'Ejecución y declaración',
        text: 'Hacemos el trabajo y, cuando corresponde, presentamos la declaración TC6 ante la SEC.',
      },
    ],
    // Instalaciones nuevas: normalmente con anticipo para materiales (Don Hernán, 23 nov 2026).
    payOnCompletion: false,
    safety: gasSafety,
    parent: 'gasfiter',
    faq: [
      {
        question: '¿Qué es la declaración TC6?',
        answer:
          'Es la declaración con que un instalador autorizado inscribe ante la SEC una instalación interior de gas. La tramitamos cuando el trabajo lo requiere.',
      },
      {
        question: '¿Qué trabajos de gas pueden hacer?',
        answer:
          'Instalaciones domiciliarias, modificaciones y reparaciones, conforme a las atribuciones de nuestra licencia de instalador de gas clase 3 otorgada por la SEC.',
      },
      {
        question: '¿Trabajan con gas natural y gas licuado?',
        answer: 'Sí. Trabajamos con todo tipo de gas: gas natural y gas licuado.',
      },
      {
        question: '¿Por qué contratar un instalador autorizado por la SEC?',
        answer:
          'Porque una instalación de gas debe ejecutarla y declararla un instalador autorizado. Así tu instalación queda segura y en regla.',
      },
      {
        question: '¿Cómo puedo verificar la licencia?',
        answer:
          'La SEC registra la autorización de cada instalador con su RUT. Si quieres verificarla antes del trabajo, pídenos el RUT y la consultas directamente en la SEC.',
      },
      faqPaymentProjects,
      faqCommunes,
    ],
    waMessage: 'Hola, necesito una instalación o reparación de gas. Mi comuna es: ',
  },
  {
    slug: 'agua-potable-y-alcantarillado',
    serviceId: 'sanitario',
    name: 'Agua potable y alcantarillado',
    title: `Instalaciones de Agua Potable y Alcantarillado | ${BUSINESS.name}`,
    description:
      'Redes domiciliarias de agua potable y alcantarillado, ampliaciones y proyectos sanitarios según el RIDAA, con planos firmados por constructores civiles.',
    h1: 'Instalaciones de agua potable y alcantarillado',
    intro:
      'Redes domiciliarias de agua potable y alcantarillado, modificaciones, ampliaciones y proyectos sanitarios según el reglamento RIDAA.',
    image: '/images/servicios/redes.webp',
    imageAlt: 'Red de cañerías de agua potable con válvulas y manómetros',
    includes: [
      'Redes domiciliarias de agua potable',
      'Modificaciones y ampliaciones de redes',
      'Redes de evacuación de aguas servidas',
      'Cámaras de inspección y demás instalaciones domiciliarias',
      'Proyectos sanitarios con sus planos y documentos técnicos',
    ],
    steps: [
      {
        title: 'Nos cuentas el proyecto',
        text: 'Instalación nueva, ampliación o modificación de tu red de agua potable o alcantarillado.',
      },
      {
        title: 'Revisión en terreno',
        text: 'Revisamos la red y te explicamos qué trabajo y qué documentos técnicos corresponden según el RIDAA.',
      },
      {
        title: 'Ejecución y documentos',
        text: 'Ejecutamos la instalación y preparamos los planos y documentos técnicos que el proyecto requiera.',
      },
    ],
    // Proyectos: normalmente con anticipo para materiales (Don Hernán, 23 nov 2026).
    payOnCompletion: false,
    // Don Hernán prefiere no nombrarlos: trabaja con más de un constructor civil (23 nov 2026).
    note: {
      title: 'Proyectos sanitarios con respaldo profesional',
      text: 'Para los proyectos sanitarios trabajamos con constructores civiles de confianza, que participan en la elaboración y firma de los planos y documentos técnicos que exige cada caso.',
    },
    parent: 'gasfiter',
    faq: [
      {
        question: '¿Qué es el RIDAA?',
        answer:
          'Es el Reglamento de Instalaciones Domiciliarias de Agua Potable y Alcantarillado. Fija cómo se diseñan y ejecutan las redes de agua y alcantarillado de una vivienda.',
      },
      {
        question: '¿Quién firma los planos?',
        answer:
          'En los proyectos sanitarios trabajamos con constructores civiles de confianza, que participan en la elaboración y firma de los planos y documentos técnicos que correspondan.',
      },
      {
        question: '¿Hacen ampliaciones de la red?',
        answer: 'Sí. Ejecutamos modificaciones y ampliaciones de redes domiciliarias de agua potable y alcantarillado.',
      },
      {
        question: '¿Y si solo tengo el alcantarillado tapado?',
        answer: 'Para eso tenemos el servicio de destapes, con maquinaria de alta presión.',
      },
      faqPaymentProjects,
      faqCommunes,
    ],
    waMessage: 'Hola, necesito una instalación de agua potable o alcantarillado. Mi comuna es: ',
  },
  {
    slug: 'calefones',
    serviceId: 'calefones',
    name: 'Instalación y mantención de calefones',
    title: `Instalación, Mantención y Reparación de Calefones | ${BUSINESS.name}`,
    description: `Instalación, mantención y reparación de calefones de todas las marcas. Técnico autorizado SEC, ${hours}. Pagas al terminar.`,
    h1: 'Instalación, mantención y reparación de calefones',
    intro:
      'Un calefón bien instalado y mantenido entrega agua caliente sin cortes y funciona de forma segura. Instalamos, mantenemos y reparamos calefones de todas las marcas, con técnico autorizado SEC y capacitado en cada una de ellas.',
    image: '/images/servicios/calefones.webp',
    imageAlt: 'Técnico revisando el interior de un calefón abierto',
    includes: [
      'Instalación de calefones',
      'Mantención preventiva',
      'Reparación de fallas',
      'Revisión de conexiones de gas y agua',
    ],
    steps: [
      {
        title: 'Nos cuentas qué pasa',
        text: 'La marca y el modelo del calefón y qué falla: no enciende, se apaga o el agua sale tibia.',
      },
      {
        title: 'Revisión con técnico SEC',
        text: 'Revisamos el equipo y sus conexiones de gas y agua, y te explicamos qué hay que hacer.',
      },
      stepPay,
    ],
    payOnCompletion: true,
    safety: gasSafety,
    parent: 'gasfiter',
    faq: [
      {
        question: '¿Trabajan con todas las marcas?',
        answer:
          'Sí. Somos multimarca: instalamos, mantenemos y reparamos calefones de todas las marcas, y nos hemos capacitado en cada una de ellas.',
      },
      {
        question: '¿Instalan calefones?',
        answer:
          'Sí. Cuéntanos por WhatsApp qué equipo tienes o quieres instalar y coordinamos la visita.',
      },
      {
        question: '¿Por qué conviene un técnico SEC?',
        answer:
          'Porque cumple las exigencias normativas para trabajar instalaciones y equipos relacionados con gas y agua caliente.',
      },
      faqPayment,
      faqCommunes,
    ],
    waMessage: 'Hola, necesito un técnico para mi calefón. Mi comuna es: ',
  },
  {
    slug: 'deteccion-de-fugas',
    serviceId: 'fugas',
    name: 'Detección de fugas de agua y gas',
    title: `Detección de Fugas de Agua y Gas sin Romper | ${BUSINESS.name}`,
    description: 'Ubicamos fugas de agua y gas con ultrasonido, presión controlada y termografía antes de romper. Técnico SEC. Pagas al terminar, sin anticipos.',
    h1: 'Detección de fugas de agua y gas sin romper',
    intro:
      'Una fuga escondida en un muro o bajo el piso hace subir la cuenta y daña tu casa. Antes de romper, la ubicamos con equipos de ultrasonido, presión controlada y termografía, para intervenir solo donde está la filtración.',
    image: '/images/carrusel-3.webp',
    imageAlt: 'Técnico revisando un muro con una cámara termográfica',
    includes: [
      'Detección de fugas de agua potable',
      'Detección de fugas de gas',
      'Reparación de la fuga una vez ubicada',
      'Revisión de humedad, manchas y baja presión',
    ],
    steps: [
      {
        title: 'Nos cuentas qué ves',
        text: 'Humedad, manchas, una cuenta de agua más alta de lo normal u olor a gas. Escríbenos o llámanos.',
      },
      {
        title: 'Ubicamos la fuga con equipos',
        text: 'Ultrasonido, presión controlada y termografía para acotar el punto exacto antes de intervenir.',
      },
      stepPay,
    ],
    payOnCompletion: true,
    safety: gasSafety,
    parent: 'gasfiter',
    faq: [
      {
        question: '¿Hay que romper para encontrar una fuga?',
        answer:
          'Primero ubicamos el punto con ultrasonido, presión controlada y termografía. Así se interviene solo donde está la filtración, en vez de romper a ciegas.',
      },
      {
        question: '¿Detectan fugas de gas?',
        answer: 'Sí. Hacemos detección de fugas de agua y de gas, con técnico autorizado SEC.',
      },
      {
        question: '¿Qué señales indican una fuga de agua?',
        answer:
          'Manchas de humedad en muros o pisos, una cuenta de agua más alta de lo normal, baja presión o el medidor que sigue avanzando con todas las llaves cerradas.',
      },
      faqPayment,
      faqCommunes,
    ],
    waMessage: 'Hola, necesito una detección de fugas. Mi comuna es: ',
  },
  {
    slug: 'destapes',
    serviceId: 'destapes',
    name: 'Destapes y limpieza de cañerías',
    title: `Destapes de Alcantarillado y Cañerías | ${BUSINESS.name}`,
    description: `Destapes de alcantarillado, desagües y cañerías con maquinaria de alta presión. Técnico SEC, ${hours}. Pagas al terminar.`,
    h1: 'Destapes de alcantarillado y cañerías',
    intro:
      'Cuando el agua no baja o se devuelve, hay una obstrucción en la red. Usamos maquinaria de alta presión para eliminar obstrucciones profundas en alcantarillados y redes sanitarias.',
    image: '/images/servicios/destapes.webp',
    imageAlt: 'Técnico destapando un alcantarillado con una máquina de cable',
    includes: [
      'Destape de alcantarillado',
      'Destape de desagües de cocina y baño',
      'Limpieza de cañerías con maquinaria de alta presión',
    ],
    steps: [
      {
        title: 'Nos cuentas dónde está el problema',
        text: 'Lavaplatos, baño, ducha o alcantarillado: dinos qué no está desaguando.',
      },
      {
        title: 'Destapamos con maquinaria',
        text: 'Usamos maquinaria de alta presión para sacar la obstrucción y dejar la red funcionando.',
      },
      stepPay,
    ],
    payOnCompletion: true,
    parent: 'gasfiter',
    faq: [
      {
        question: '¿Qué equipos usan?',
        answer: 'Maquinaria de alta presión para eliminar obstrucciones profundas en alcantarillados y redes sanitarias.',
      },
      {
        question: '¿Atienden de noche?',
        answer: `No. Atendemos ${hours}; no hacemos trabajos nocturnos.`,
      },
      faqPayment,
      faqCommunes,
    ],
    waMessage: 'Hola, necesito un destape. Mi comuna es: ',
  },
];

export const pageBySlug = (slug: string) => SERVICE_PAGES.find((page) => page.slug === slug);

/** Página de servicio que corresponde a cada tarjeta de la portada. */
export const PAGE_FOR_SERVICE_ID: Record<string, string> = {
  gasfiteria: '/gasfiter',
  gas: '/instalacion-de-gas',
  sanitario: '/agua-potable-y-alcantarillado',
  fugas: '/deteccion-de-fugas',
  calefones: '/calefones',
  redes: '/agua-potable-y-alcantarillado',
  griferia: '/gasfiter',
  destapes: '/destapes',
};

/** Ruta de navegación: Inicio › (página madre) › página. */
export const breadcrumbFor = (page: ServicePage) => {
  const parent = page.parent ? pageBySlug(page.parent) : undefined;
  return [
    { name: 'Inicio', path: '/' },
    ...(parent ? [{ name: parent.name, path: `/${parent.slug}/` }] : []),
    { name: page.name, path: `/${page.slug}/` },
  ];
};

export const serviceJsonLd = (page: ServicePage) => {
  const url = `${BUSINESS.domain}/${page.slug}/`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#servicio`,
      name: page.name,
      serviceType: page.name,
      description: page.description,
      url,
      image: `${BUSINESS.domain}${page.image}`,
      provider: { '@id': `${BUSINESS.domain}/#negocio` },
      areaServed: [
        ...BUSINESS.communes.map((name) => ({ '@type': 'City', name })),
        { '@type': 'AdministrativeArea', name: BUSINESS.region },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbFor(page).map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${BUSINESS.domain}${crumb.path}`,
      })),
    },
  ];
};
