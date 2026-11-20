// src/data/services.ts
// Páginas de servicio (PLAN-MAESTRO 3.1). Cada entrada genera /<slug> con su H1, proceso,
// preguntas propias y JSON-LD Service.
// Regla 3: los textos usan solo lo que la web ya decía o está confirmado en la sección 3
// (equipos, marcas, maquinaria, SEC, horario, comunas, pago). Nada de precios, plazos ni
// garantías hasta que Don Hernán los confirme. Que él revise estos textos antes de publicar.
import { BUSINESS, communesText } from '../config/business';
import type { FaqItem } from './faq';

export type ServicePage = {
  slug: string;
  /** Id del servicio en el modal de la portada y en data-service. */
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
  faq: FaqItem[];
  waMessage: string;
};

const hours = `${BUSINESS.hours.days.toLowerCase()} de ${Number(BUSINESS.hours.open.slice(0, 2))} a ${Number(BUSINESS.hours.close.slice(0, 2))} hrs`;

const faqCommunes: FaqItem = {
  question: '¿En qué comunas atienden?',
  answer: `En ${communesText()}, ${hours}. No hacemos trabajos nocturnos.`,
};

const faqPayment: FaqItem = {
  question: '¿Cómo se paga?',
  answer: 'Al terminar el trabajo, sin anticipos. Puedes pagar en efectivo, transferencia o tarjeta.',
};

const stepPay = {
  title: 'Pagas al terminar',
  text: 'Sin anticipos. Pagas en efectivo, transferencia o tarjeta cuando el trabajo está listo.',
};

const gasSafety = {
  title: 'Si sientes olor a gas',
  text: 'Cierra la llave de paso del gas, abre puertas y ventanas y no enciendas ni apagues luces ni aparatos eléctricos. Sal del lugar y, fuera de nuestro horario, llama a la línea de emergencia de tu distribuidora de gas.',
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'deteccion-de-fugas',
    serviceId: 'fugas',
    name: 'Detección de fugas de agua y gas',
    title: `Detección de Fugas de Agua y Gas sin Romper | ${BUSINESS.name}`,
    description: 'Ubicamos fugas de agua y gas con ultrasonido, presión controlada y termografía antes de romper. Técnico SEC. Pagas al terminar, sin anticipos.',
    h1: 'Detección de fugas de agua y gas sin romper',
    intro:
      'Una fuga escondida en un muro o bajo el piso hace subir la cuenta y daña tu casa. Antes de romper, la ubicamos con equipos de ultrasonido, presión controlada y termografía, para intervenir solo donde está la filtración.',
    image: '/images/servicios/fugas.webp',
    imageAlt: 'Detector electrónico de fugas de gas junto a una cañería de gas',
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
    safety: gasSafety,
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
    slug: 'calefones',
    serviceId: 'calefones',
    name: 'Instalación y mantención de calefones',
    title: `Instalación, Mantención y Reparación de Calefones | ${BUSINESS.name}`,
    description: `Instalación, mantención y reparación de calefones de todas las marcas. Técnico autorizado SEC, ${hours}. Pagas al terminar.`,
    h1: 'Instalación, mantención y reparación de calefones',
    intro:
      'Un calefón bien instalado y mantenido entrega agua caliente sin cortes y funciona de forma segura. Instalamos, mantenemos y reparamos calefones de todas las marcas, con técnico autorizado SEC.',
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
    safety: gasSafety,
    faq: [
      {
        question: '¿Trabajan con todas las marcas?',
        answer: 'Sí. Mantenemos y reparamos calefones de todas las marcas.',
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
    slug: 'gasfiter',
    serviceId: 'redes',
    name: 'Gasfitería',
    title: `Gasfiter Certificado SEC en Puente Alto y La Florida | ${BUSINESS.name}`,
    description: `Gasfiter certificado SEC: redes de agua, grifería, fugas, calefones y destapes. ${BUSINESS.hours.days} de 9 a 18. Pagas al terminar, sin anticipos.`,
    h1: 'Gasfiter certificado SEC',
    intro: `Redes de agua potable y sanitarias, grifería, artefactos, reparación de fugas, calefones y destapes. Atendemos en ${communesText()}, ${hours}.`,
    image: '/images/servicios/redes.webp',
    imageAlt: 'Red de cañerías de agua potable con válvulas y manómetros',
    includes: [
      'Instalación y reparación de redes de agua potable y sanitarias',
      'Reparación y cambio de grifería y artefactos sanitarios',
      'Reparación de fugas',
      'Instalación y mantención de calefones',
      'Destapes y limpieza de cañerías',
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
    faq: [
      {
        question: '¿Qué trabajos de gasfitería hacen?',
        answer:
          'Redes de agua potable y sanitarias, grifería y artefactos, reparación de fugas, instalación y mantención de calefones, y destapes.',
      },
      {
        question: '¿Trabajan de noche o los fines de semana?',
        answer: `No. Atendemos ${hours}; no hacemos trabajos nocturnos.`,
      },
      {
        question: '¿Piden anticipo?',
        answer: 'No. Pagas al terminar el trabajo, en efectivo, transferencia o tarjeta.',
      },
      faqCommunes,
    ],
    waMessage: 'Hola, necesito un gasfiter. Mi comuna es: ',
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

/** Página de servicio que corresponde a cada tarjeta de la portada. */
export const PAGE_FOR_SERVICE_ID: Record<string, string> = {
  fugas: '/deteccion-de-fugas',
  calefones: '/calefones',
  redes: '/gasfiter',
  griferia: '/gasfiter',
  destapes: '/destapes',
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
      areaServed: BUSINESS.communes.map((name) => ({ '@type': 'City', name })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BUSINESS.domain}/` },
        { '@type': 'ListItem', position: 2, name: page.name, item: url },
      ],
    },
  ];
};
