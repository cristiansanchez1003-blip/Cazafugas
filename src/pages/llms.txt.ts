// /llms.txt (PLAN-MAESTRO 2.10): resumen del negocio para asistentes de IA.
// Se genera desde src/config/business.ts para no duplicar datos.
import type { APIRoute } from 'astro';
import { BUSINESS, communesText, hoursText } from '../config/business';
import { FAQ } from '../data/faq';

export const prerender = true;

export const GET: APIRoute = () => {
  const lines = [
    `# ${BUSINESS.name}`,
    '',
    `> Gasfitería en ${communesText()} (Región Metropolitana, Chile): detección de fugas de agua y gas sin romper, reparación de fugas, calefones, redes sanitarias, destapes y grifería. Técnico autorizado SEC. Se paga al terminar el trabajo, sin anticipos.`,
    '',
    '## Servicios',
    ...BUSINESS.services.map((service) => `- ${service.name}`),
    '',
    '## Cobertura',
    ...BUSINESS.communes.map((commune) => `- ${commune}`),
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
    `- ${BUSINESS.paymentAccepted}. Al terminar el trabajo, sin anticipos.`,
    '',
    '## Preguntas frecuentes',
    ...FAQ.flatMap((item) => [`### ${item.question}`, item.answer, '']),
    '## Páginas',
    `- [Inicio](${BUSINESS.domain}/)`,
    `- [Política de privacidad](${BUSINESS.domain}/privacidad/)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
