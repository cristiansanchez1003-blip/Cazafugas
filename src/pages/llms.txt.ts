// /llms.txt (PLAN-MAESTRO 2.10): resumen del negocio para asistentes de IA.
// Se genera desde src/config/business.ts para no duplicar datos.
import type { APIRoute } from 'astro';
import { BUSINESS, communesText, hoursText } from '../config/business';
import { FAQ } from '../data/faq';
import { SERVICE_PAGES } from '../data/services';

export const prerender = true;

export const GET: APIRoute = () => {
  const lines = [
    `# ${BUSINESS.name}`,
    '',
    `> Servicio integral de gasfitería en ${communesText()} (${BUSINESS.region}, Chile): instalaciones y reparaciones de ${BUSINESS.gasTypes}, agua potable y alcantarillado, mantención de calefones de todas las marcas, detección de fugas, destapes y grifería. ${BUSINESS.gasLicense}; tramita la declaración TC6 ante la SEC cuando corresponde. Proyectos sanitarios según el RIDAA, con planos firmados por constructores civiles.`,
    '',
    '## Servicios',
    ...BUSINESS.services.map((service) => `- ${service.name}`),
    '',
    '## Cobertura',
    ...BUSINESS.communes.map((commune) => `- ${commune}`),
    `- ${BUSINESS.extendedCoverage}`,
    '',
    '## Horario',
    `- ${hoursText()} Sin trabajos nocturnos.`,
    '',
    '## Contacto',
    `- Teléfono: ${BUSINESS.phoneDisplay}`,
    `- WhatsApp: https://wa.me/${BUSINESS.whatsapp}`,
    `- Sitio: ${BUSINESS.domain}/`,
    '',
    '## Pago',
    `- ${BUSINESS.paymentAccepted}.`,
    `- ${BUSINESS.paymentTerms}`,
    '',
    '## Preguntas frecuentes',
    ...FAQ.flatMap((item) => [`### ${item.question}`, item.answer, '']),
    '## Páginas',
    `- [Inicio](${BUSINESS.domain}/)`,
    ...SERVICE_PAGES.map((page) => `- [${page.name}](${BUSINESS.domain}/${page.slug}/)`),
    `- [Política de privacidad](${BUSINESS.domain}/privacidad/)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
