// src/data/faq.ts
// Preguntas frecuentes: se muestran en FAQ.astro y generan el JSON-LD FAQPage.
// Regla 3 del plan: solo respuestas confirmadas por Don Hernán, nada inventado.
import { BUSINESS, communesText } from '../config/business';

export type FaqItem = { question: string; answer: string };

export const FAQ: FaqItem[] = [
  {
    question: '¿Qué incluye el servicio integral de gasfitería?',
    answer:
      'Instalaciones y reparaciones de gas, agua potable y alcantarillado, además de mantención de calefones, detección de fugas, destapes y grifería. Un solo equipo se hace cargo de todo.',
  },
  {
    question: '¿Hacen instalaciones de gas con declaración ante la SEC?',
    answer: `Sí. ${BUSINESS.gasLicense}. Ejecutamos instalaciones domiciliarias de ${BUSINESS.gasTypes}, modificaciones y reparaciones, y tramitamos la declaración TC6 cuando corresponde.`,
  },
  {
    question: '¿Cómo se paga?',
    answer: `${BUSINESS.paymentTerms} Puedes pagar en efectivo, transferencia o tarjeta.`,
  },
  {
    question: '¿Atienden fuera de sus comunas principales?',
    answer: `Sí. Nuestras comunas principales son ${communesText()}. ${BUSINESS.extendedCoverage}`,
  },
  {
    question: '¿Cómo funciona la detección de fugas sin romper?',
    answer:
      'Usamos equipos de ultrasonido, presión controlada y termografía para acotar el punto de filtración antes de intervenir.',
  },
  {
    question: '¿Qué significa estar certificado por la SEC?',
    answer:
      'Significa que el técnico cumple exigencias normativas para trabajar instalaciones y equipos relacionados con gas y agua caliente.',
  },
  {
    question: '¿Cuál es su horario de atención?',
    answer: `Atendemos de ${BUSINESS.hours.days.toLowerCase()} de ${BUSINESS.hours.open} a ${BUSINESS.hours.close} hrs. No realizamos trabajos en horario nocturno para garantizar la calidad y seguridad de nuestras intervenciones.`,
  },
];

export const faqJsonLd = (items: FaqItem[] = FAQ) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});
