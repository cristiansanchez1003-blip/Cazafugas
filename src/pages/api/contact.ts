import type { APIRoute } from 'astro';
import { BUSINESS, waLink } from '../../config/business';

export const prerender = false;

type ContactPayload = {
  name: string;
  phone: string;
  commune: string;
  problem: string;
};

const fieldLabels: Record<keyof ContactPayload, string> = {
  name: 'nombre',
  phone: 'teléfono',
  commune: 'comuna',
  problem: 'problema'
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

function clean(value: FormDataEntryValue | unknown): string {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : '';
}

async function getPayload(request: Request): Promise<ContactPayload> {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    const body = await request.json().catch(() => ({}));

    return {
      name: clean(body.name),
      phone: clean(body.phone),
      commune: clean(body.commune),
      problem: clean(body.problem)
    };
  }

  const formData = await request.formData();

  return {
    name: clean(formData.get('name')),
    phone: clean(formData.get('phone')),
    commune: clean(formData.get('commune')),
    problem: clean(formData.get('problem'))
  };
}

// La descripción del problema es opcional (PLAN-MAESTRO 2.3).
const requiredFields: Array<keyof ContactPayload> = ['name', 'phone', 'commune'];

function validate(payload: ContactPayload): string[] {
  return requiredFields
    .filter((field) => payload[field].length === 0)
    .map((field) => `El campo ${fieldLabels[field]} es obligatorio.`);
}

export const POST: APIRoute = async ({ request }) => {
  const payload = await getPayload(request);
  const errors = validate(payload);

  if (errors.length > 0) {
    return jsonResponse({ error: 'Faltan datos obligatorios.', errors }, 400);
  }

  const problem = payload.problem ? ` Mi problema es: ${payload.problem}.` : '';
  // Fuera de las comunas principales: el mensaje pide indicar la comuna (hay recargo por traslado).
  // El mensaje termina en "Mi comuna es: " para que la persona la escriba antes de enviar.
  const message =
    payload.commune === BUSINESS.otherCommuneOption
      ? `Hola ${BUSINESS.name}. Soy ${payload.name}.${problem} Mi teléfono es ${payload.phone}. Estoy en otra comuna de la ${BUSINESS.region}. Mi comuna es: `
      : `Hola ${BUSINESS.name}. Soy ${payload.name}, estoy en ${payload.commune}.${problem} Mi teléfono es ${payload.phone}.`;
  const url = waLink(message);

  return jsonResponse({ url });
};

export const GET: APIRoute = async () => {
  return jsonResponse({ error: 'Método no permitido.' }, 405);
};
