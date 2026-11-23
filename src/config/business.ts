// src/config/business.ts
// Único lugar para los datos del negocio (regla 7 del PLAN-MAESTRO).
// Ningún teléfono, comuna u horario se escribe a mano en los componentes.
export const BUSINESS = {
  name: 'Mister Gas', // TODO(confirmar) escritura exacta con Don Hernán
  domain: 'https://mistergas.cl',
  phoneE164: '+56983030716', // TODO(confirmar) que es el que contesta
  phoneDisplay: '+56 9 8303 0716',
  whatsapp: '56983030716',
  // Comunas principales (sin recargo). Don Hernán, 23 nov 2026: también va a toda la Región
  // Metropolitana, con un pequeño recargo por combustible y TAG.
  communes: ['Puente Alto', 'La Florida', 'Macul', 'San José de Maipo', 'Pirque'],
  region: 'Región Metropolitana',
  extendedCoverage: 'También atendemos el resto de la Región Metropolitana, con un pequeño recargo por traslado (combustible y TAG).',
  /** Opción del formulario para quien está fuera de las comunas principales. */
  otherCommuneOption: 'Otra comuna de la Región Metropolitana',
  hours: { days: 'Lunes a viernes', open: '09:00', close: '18:00' },
  paymentAccepted: 'Efectivo, transferencia, tarjetas', // TODO(confirmar)
  // Perfiles oficiales para el JSON-LD (sameAs). TODO: URL de la ficha de Google Business.
  sameAs: [] as string[],
  // Orden de prioridad pedido por Don Hernán (21 nov 2026): primero la gasfitería integral.
  services: [
    { id: 'gasfiteria', name: 'Servicio integral de gasfitería' },
    { id: 'gas', name: 'Instalación y reparación de gas (declaración TC6 ante la SEC)' },
    { id: 'sanitario', name: 'Instalaciones de agua potable y alcantarillado' },
    { id: 'calefones', name: 'Instalación y mantención de calefones' },
    { id: 'fugas', name: 'Detección de fugas de agua y gas' },
    { id: 'destapes', name: 'Destapes y limpieza de cañerías' },
    { id: 'griferia', name: 'Reparación de grifería y artefactos' },
  ],
  // Licencia SEC de Don Hernán (dato de él, 21 nov 2026). No tiene número aparte: la SEC la
  // registra con su RUT (23 nov 2026). El RUT no se publica en el sitio.
  gasLicense: 'Instalador de gas clase 3, autorizado por la SEC',
  // Don Hernán, 23 nov 2026: trabaja todo tipo de gas.
  gasTypes: 'gas natural y gas licuado',
  // Reparaciones y mantenciones: se paga al terminar. Instalaciones nuevas y proyectos:
  // normalmente se pide un anticipo para materiales, pero no es indispensable (23 nov 2026).
  paymentTerms:
    'En reparaciones y mantenciones pagas al terminar el trabajo, sin anticipos. En instalaciones nuevas y proyectos normalmente pedimos un anticipo para comprar los materiales, y lo conversamos en cada caso.',
} as const;

export const waLink = (text = 'Hola, necesito un gasfiter. Mi comuna es: ') =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
export const telLink = () => `tel:${BUSINESS.phoneE164}`;

/** "Puente Alto, La Florida, Macul, San José de Maipo y Pirque" */
export const communesText = () =>
  new Intl.ListFormat('es', { style: 'long', type: 'conjunction' }).format(BUSINESS.communes);

/** "Lunes a viernes de 09:00 a 18:00 hrs." */
export const hoursText = () =>
  `${BUSINESS.hours.days} de ${BUSINESS.hours.open} a ${BUSINESS.hours.close} hrs.`;
