# PLAN-MAESTRO · mistergas.cl · Don Hernán Zaror

Proyecto de Espíritu Digital SpA. Campaña de Google Ads + mejora de la web para SEO, buscadores con IA, medición y conversión.
Inicio: 19 de noviembre de 2026. Duración mínima: 3 meses (precio especial hasta el 18 de febrero de 2027).
Informe de auditoría completo: https://claude.ai/artifact/FZcfufeFFAqaJzdFTNsqQv

> **Para Claude Code:** guarda este archivo en la raíz del repositorio como `PLAN-MAESTRO.md`. Léelo completo al empezar cada sesión. Trabaja una fase a la vez, en orden. Al cerrar cada sesión, agrega una fila a la **Bitácora** (sección 9) y marca las tareas hechas con `[x]`.

---

## 1. Prompt de arranque (pegar en Claude Code)

```
Lee PLAN-MAESTRO.md completo. Primero haz el reconocimiento de la sección 4 y dime qué encontraste
(versión de Astro, Tailwind, adaptador de Vercel, dónde está cada componente). Después ejecuta la
Fase 0 tarea por tarea, mostrándome el diff de cada una. No publiques a producción: deja todo en
una rama y un deploy de vista previa. Al terminar, actualiza la bitácora.
```

---

## 2. Reglas del proyecto

1. Todo en español de Chile, con tildes y buena ortografía. Sin signos de apertura (¡ ¿) en los textos de botones y mensajes de WhatsApp. En títulos y preguntas frecuentes de la web sí se usan.
2. Código propio en Astro. Nada de constructores ni plugins de terceros que agreguen peso sin necesidad.
3. **Nunca se inventan datos del cliente:** precios, reseñas, años de experiencia, número de trabajos, certificaciones. Lo que no está en la sección 3 como confirmado va con `TODO(confirmar)` y no se publica.
4. Nada va a producción sin el visto bueno de Cristian. Trabajar en rama + vista previa de Vercel.
5. Cada cambio debe mantener o mejorar el rendimiento móvil. Revisar con Lighthouse móvil antes y después.
6. Los cambios de conversión mandan sobre los estéticos (proporción áurea incluida).
7. Un solo lugar para los datos del negocio: `src/config/business.ts` (sección 6.1). Ningún teléfono ni comuna escrito a mano en los componentes.

---

## 3. Datos del negocio

| Dato | Valor | Estado |
| --- | --- | --- |
| Titular | Hernán Zaror ("Don Hernán") | Confirmado |
| Dominio | mistergas.cl | Confirmado |
| Código | Carpeta local `Web Cazafugas`, repositorio GitHub `cristiansanchez1003-blip/Cazafugas` y proyecto `cazafugas` en Vercel (el nombre viene de la marca anterior). Rama de producción: `main` | Confirmado (19 nov, Claude Code) |
| Marca visible | El logo dice **Mister Gas**; título, alt, pie y copyright dicen **Cazafugas**, el nombre anterior. Don Hernán cambió el nombre después de la web | Unificar a **Mister Gas** (confirmar la escritura exacta con él) |
| Teléfono | +56 9 8303 0716 (pie y WhatsApp de los modales) | Por confirmar que es el que contesta y que es su WhatsApp |
| Comunas | Puente Alto, La Florida, Macul, San José de Maipo, Pirque | Confirmado. El 19 nov Don Hernán dijo que quiere sumar "otras comunas a convenir". **Decisión (Cristian, 20 nov):** no ampliar a ciegas, porque el presupuesto es acotado. Primero medir las solicitudes por comuna (GA4: parámetro `commune` de `generate_lead`; Google Ads: informe de ubicaciones) y decidir con datos. Por ahora el foco sigue en las comunas actuales y en las que colindan con San José de Maipo. Toda comuna nueva se agrega en `BUSINESS.communes` y en la segmentación de la campaña al mismo tiempo |
| Prioridad de búsqueda | Según Don Hernán (19 y 21 nov): 1) servicio integral de gasfitería; 2) detección de fugas; 3) mantención e instalación de calefón | Confirmado por escrito el 21 nov: quiere que Mister Gas se reconozca como "servicio integral de gasfitería" y propuso ese encabezado (el dictado decía "cafetería"). Aplicado en la Fase 4 a la portada, a los servicios y al orden de la campaña |
| Licencia de gas | Instalador de gas clase 3 (SEC). Tramita declaraciones TC6 ante la SEC cuando corresponde | Dato de Don Hernán (21 nov). Falta el número de licencia |
| Proyectos sanitarios | Agua potable y alcantarillado según el RIDAA; planos y documentos técnicos con un constructor civil que participa en su elaboración y firma | Dato de Don Hernán (21 nov) |
| Horario | Lunes a viernes, 09:00 a 18:00. Sin trabajos nocturnos | Confirmado |
| Servicios | Servicio integral de gasfitería; instalación y reparación de gas (TC6); instalaciones de agua potable y alcantarillado; calefones; detección y reparación de fugas; destapes; grifería | Confirmado (lista ampliada por Don Hernán el 21 nov; en ese orden) |
| Precio de referencia | Detección de fugas desde $80.000 | Por confirmar antes de publicarlo |
| Certificación SEC | La web la menciona y muestra un QR | Por confirmar número o enlace |
| Pago | Al terminar el trabajo, sin anticipos; efectivo, transferencia y tarjetas | Está en la web; confirmar |
| Dirección física | No publicada (negocio de área de servicio) | Preguntar si quiere mostrar comuna base |

---

## 4. Reconocimiento inicial (lo primero que hace Claude Code)

- [x] Confirmar stack: versión de Astro, Tailwind (v3 o v4), `@astrojs/vercel` y modo (`server` o `hybrid`). El sitio usa un endpoint `POST /api/contact` que devuelve `{ url }` con un enlace de WhatsApp.
- [x] Ubicar los componentes: encabezado, hero (`#inicio`), contacto (`#contacto`), servicios (`#servicios`, con `servicesData` y modal), certificaciones, preguntas frecuentes, pie.
- [x] Buscar todos los teléfonos y enlaces: `grep -rn "tel:\|wa.me\|56912345678\|56983030716" src/`.
- [x] Correr Lighthouse móvil y guardar los resultados en la bitácora como línea base.
- [x] Confirmar que el repo de GitHub está conectado al proyecto `casafugas` de Vercel y que `mistergas.cl` es su dominio de producción. Los commits a la rama principal se publican solos: trabajar siempre en una rama aparte.
- [x] Buscar todas las apariciones de la marca anterior: `grep -rni "cazafugas" src/ public/`. No renombrar la carpeta, el repo ni el proyecto de Vercel: no hace falta y puede romper el despliegue.

---

## 5. Diagnóstico (resumen de la auditoría del 19 nov 2026)

**Crítico**
- El botón "Llamar ahora" del encabezado marca `tel:+56912345678` (**número de relleno**).
- "Urgencia WhatsApp" y "Asesoría técnica" del hero llevan a `#contacto`, no abren WhatsApp.
- No hay GTM, GA4, etiqueta de Ads, Search Console, `robots.txt` ni `sitemap.xml` (los dos últimos dan 404).
- Marca mezclada (Mister Gas / Cazafugas).

**Alto**
- `logotipo-cazafugas.png` pesa **1,2 MB** (900 × 1006) y se muestra a 100 × 112 px; se carga 7 veces en la página.
- Pirque falta en la meta descripción, el hero y el `<select>` del formulario.
- Sin canonical, Open Graph, JSON-LD ni `favicon.ico`.
- Textos sin tildes: Deteccion, Gasfiteria, Rapida, Telefono, Cual, tecnico, intervencion, etc.
- Sin barra fija de contacto en móvil.
- Las 3 imágenes del carrusel del hero cargan con `loading="eager"` y `fetchpriority="high"`; el segundo sello SEC del hero también, aunque está oculto en móvil.

**Medio**
- Elementos con `data-reveal` invisibles hasta que corre JavaScript.
- El logo (112 px) se sale del encabezado (105 px).
- Las imágenes de servicios tienen `alt=""`.
- Solo 3 preguntas frecuentes.
- "Pago al finalizar, sin anticipos" está escondido en la sección de certificaciones.

**Medidas actuales para la proporción áurea**
- Columnas del hero en escritorio: 588 / 588 px (1,00).
- Bloque de contacto: 476 / 676 px (1,42).
- Tipografía en escritorio: H1 72, H2 48, H3 30, cuerpo 20 px; interlineado del cuerpo 1,4.
- H1 en y = 326 px de un viewport de 900 (ya calza con 0,382).

---

## 6. Fases y tareas

### Fase 0 · Hoy, 19 de noviembre (primeros avances prometidos a Don Hernán)

- [x] **0.1 Configuración central.** Crear `src/config/business.ts` y reemplazar todos los teléfonos, comunas y textos repetidos por este archivo:

```ts
// src/config/business.ts
export const BUSINESS = {
  name: 'Mister Gas', // TODO(confirmar) escritura exacta con Don Hernán
  domain: 'https://mistergas.cl',
  phoneE164: '+56983030716',          // TODO(confirmar) que es el que contesta
  phoneDisplay: '+56 9 8303 0716',
  whatsapp: '56983030716',
  communes: ['Puente Alto', 'La Florida', 'Macul', 'San José de Maipo', 'Pirque'],
  hours: { days: 'Lunes a viernes', open: '09:00', close: '18:00' },
  services: [
    { id: 'fugas', name: 'Detección de fugas de agua y gas' },
    { id: 'reparacion', name: 'Reparación de fugas' },
    { id: 'calefones', name: 'Instalación y mantención de calefones' },
    { id: 'redes', name: 'Redes de agua potable y sanitarias' },
    { id: 'destapes', name: 'Destapes y limpieza de cañerías' },
    { id: 'griferia', name: 'Reparación de grifería y artefactos' },
  ],
} as const;

export const waLink = (text = 'Hola, necesito un gasfiter. Mi comuna es: ') =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
export const telLink = () => `tel:${BUSINESS.phoneE164}`;
```

- [x] **0.2 Encabezado:** `href` del botón "Llamar ahora" = `telLink()`. En escritorio, mostrar también el número en texto.
- [x] **0.3 Hero:** "Urgencia WhatsApp" → `waLink()` con `target="_blank" rel="noopener"`. "Asesoría técnica" → "Llamar ahora" con `telLink()`. En móvil, el botón de llamar va primero.
- [x] **0.4 Pirque:** agregarlo a la meta descripción, al subtítulo del hero y al `<select>` del formulario (desde `BUSINESS.communes`). Corregir "San Jose" a "San José".
- [x] **0.5 Ortografía:** revisar todos los textos y poner las tildes que faltan. Listado mínimo: Detección, Gasfitería, Rápida, Atención, técnico(s), Teléfono, Descripción, Pérez, cotización, intervención, Diagnóstico, mantención, localización, reparación, Instalación, Cómo, detección, Qué, técnico, Cuál.
- [x] **0.6 `robots.txt`** en `public/`:

```
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://mistergas.cl/sitemap-index.xml
```

- [x] **0.7 Sitemap:** instalar `@astrojs/sitemap`, `site: 'https://mistergas.cl'` en `astro.config`.
- [x] **0.8 `<head>`:** canonical, Open Graph y Twitter. Título y descripción nuevos:
  - Título: `Detección de Fugas y Gasfiter en Puente Alto y La Florida | [MARCA]`
  - Descripción: `Detección de fugas sin romper, gasfitería y calefones en Puente Alto, La Florida, Macul, San José de Maipo y Pirque. Técnico SEC. Lunes a viernes de 9 a 18.`
  - `og:image`: 1200 × 630 con logo, servicio y comunas (crear en `public/og.jpg`).

**Criterio de cierre de la fase 0:** en móvil, los dos botones del hero y el del encabezado abren el marcador o WhatsApp con el número correcto. `/robots.txt` y `/sitemap-index.xml` responden 200. No queda ningún `56912345678` en el código.

### Fase 1 · Antes de encender la campaña (1 a 3 días hábiles)

- [x] **1.1 GTM + GA4.** Snippet de GTM en `<head>` y `<noscript>` al inicio de `<body>` (ID `GTM-XXXXXXX`, pendiente). GA4 se configura dentro de GTM, no en el código.
- [x] **1.2 Capa de datos.** Script global que empuja los eventos:

```html
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="tel:"], a[href*="wa.me/"]');
    if (!a) return;
    const isTel = a.href.startsWith('tel:');
    window.dataLayer.push({
      event: isTel ? 'tel_click' : 'whatsapp_click',
      cta_location: a.dataset.cta || 'sin_definir',
      service: a.dataset.service || undefined,
    });
  });
</script>
```

  Cada enlace lleva `data-cta` = `header`, `hero`, `barra_movil`, `modal`, `contacto` o `footer`, y los del modal llevan `data-service`.
- [x] **1.3 `generate_lead`.** En el script del formulario, cuando `/api/contact` responde OK, empujar el evento y redirigir al terminar o a los 800 ms:

```js
let done = false;
const go = () => { if (!done) { done = true; window.location.href = data.url; } };
window.dataLayer.push({
  event: 'generate_lead',
  commune: payload.commune,
  eventCallback: go,
  eventTimeout: 800,
});
setTimeout(go, 900);
```

  Agregar `form_start` en el primer `focus` del formulario y `service_modal_open` al abrir un modal.
- [ ] **1.4 GTM (GA4 hecho el 20 nov; faltan las conversiones de Google Ads) (se hace en la interfaz, no en el código; dejar documentado aquí):** etiqueta de Google GA4; eventos GA4 para `tel_click`, `whatsapp_click`, `generate_lead`, `form_start`, `service_modal_open` con sus parámetros; vinculación de conversiones y etiquetas de conversión de Google Ads para los tres principales. Marcar los tres como eventos clave en GA4.

  Configuración exacta (corresponde a lo que el código empuja a `dataLayer`):

  | Tipo en GTM | Nombre | Detalle |
  | --- | --- | --- |
  | Variable · Data Layer Variable | `DLV - cta_location`, `DLV - service`, `DLV - commune`, `DLV - form_id` | Versión 2, nombre de la variable igual al parámetro |
  | Activador · Evento personalizado | `CE - tel_click`, `CE - whatsapp_click`, `CE - generate_lead`, `CE - form_start`, `CE - service_modal_open` | Nombre del evento exactamente igual |
  | Etiqueta · Etiqueta de Google | `GA4 - Config` | ID `G-…` de la propiedad; activador *Initialization - All Pages* |
  | Etiqueta · Evento de GA4 | `GA4 - tel_click` y `GA4 - whatsapp_click` | Parámetros `cta_location` y `service` |
  | Etiqueta · Evento de GA4 | `GA4 - generate_lead` | Parámetro `commune` |
  | Etiqueta · Evento de GA4 | `GA4 - form_start` / `GA4 - service_modal_open` | Parámetros `form_id` / `service` |
  | Etiqueta · Vinculación de conversiones | `Ads - Conversion Linker` | *All Pages* |
  | Etiqueta · Seguimiento de conversiones de Google Ads | `Ads - Llamada (clic)`, `Ads - WhatsApp`, `Ads - Formulario` | ID y etiqueta de cada conversión creada en Ads; activadores `CE - tel_click`, `CE - whatsapp_click`, `CE - generate_lead` |

  **Estado (20 nov, Claude Code):** contenedor `GTM-TJN95PDW` ("mistergas.cl", id 287955277) creado en la cuenta de GTM **Espiritu Digital** (6403195265). En el espacio de trabajo "Medición inicial GA4" (id 3) ya están las 5 variables DLV más `Const - GA4 Measurement ID` (hoy `G-PENDIENTE`), los 5 activadores `CE - …`, `GA4 - Config` (activador *Initialization - All Pages*), las 5 etiquetas de evento GA4 y `Ads - Conversion Linker`. La vista previa compila sin errores. **Publicado** como versión 2 ("v1 Medición inicial GA4"), con GA4 `G-ZYCX1NXWZX` (cuenta GA "Mister Gas" 417056507, propiedad 565306727). GTM quedó encendido en el sitio (commit `aa2a2fe`). Verificado en vivo: los 5 eventos llegan al informe en tiempo real de GA4. Faltan las etiquetas de conversión de Google Ads, que necesitan el ID y la etiqueta de cada conversión. En la propiedad GA4 hay que **desactivar "Interacciones con formularios"** de la medición mejorada, porque el sitio ya envía su propio `form_start` y quedaría duplicado.

  En GA4: marcar `tel_click`, `whatsapp_click` y `generate_lead` como eventos clave y registrar `cta_location`, `service` y `commune` como dimensiones personalizadas (alcance de evento). Para encender GTM en el sitio, poner el ID en `src/config/analytics.ts` (`GTM_ID`); mientras esté vacío, el snippet no se carga. Valores de `cta_location` en uso: `header`, `hero`, `barra_movil`, `modal`, `contacto` (teléfono junto al formulario, desde la Fase 2), `footer` y `privacidad` (página `/privacidad`).
- [x] **1.5 Barra fija en móvil:** componente `MobileCtaBar.astro`, visible bajo 768 px, fija abajo, 56 px de alto, dos botones a lo ancho: "Llamar" (rojo de la marca) y "WhatsApp" (verde), con `data-cta="barra_movil"`. Agregar `padding-bottom` al `<body>` en móvil para que no tape el pie. Respetar `env(safe-area-inset-bottom)`.
- [x] **1.6 Logo:** exportar a WebP o AVIF a 2× del tamaño mostrado (unos 200 × 224 px, meta < 20 KB). Usar `<Image>` de Astro con `width` y `height`. Las copias decorativas de las tarjetas: `loading="lazy"` y tamaño real.
- [x] **1.7 Favicon:** `favicon.ico` 32 px, `apple-touch-icon.png` 180 px e `icon.svg` si hay versión vectorial.
- [x] **1.8 Hero:** solo la primera imagen del carrusel con `eager` + `fetchpriority="high"`; las otras dos `lazy`. El sello SEC oculto en móvil, `lazy`.
- [x] **1.9 JSON-LD** en el layout (completar los TODO antes de publicar):

```html
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://mistergas.cl/#negocio",
  "name": BUSINESS.name,
  "url": "https://mistergas.cl/",
  "logo": "https://mistergas.cl/assets/logo.webp",
  "image": "https://mistergas.cl/og.jpg",
  "telephone": BUSINESS.phoneE164,
  "areaServed": BUSINESS.communes.map((c) => ({ "@type": "City", "name": c })),
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00", "closes": "18:00"
  }],
  "paymentAccepted": "Efectivo, transferencia, tarjetas",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de gasfitería",
    "itemListElement": BUSINESS.services.map((s) => ({
      "@type": "Offer", "itemOffered": { "@type": "Service", "name": s.name }
    }))
  },
  "sameAs": [ /* TODO: URL de la ficha de Google Business */ ]
})} />
```

  Más un `FAQPage` generado desde el mismo arreglo de preguntas frecuentes que se muestra en la página. Validar en https://search.google.com/test/rich-results y en https://validator.schema.org.
- [x] **1.10 Calefón:** agregar "Instalación" al servicio de calefones (tarjeta, modal y JSON-LD).
- [x] **1.11 Marca unificada a Mister Gas:** título, `alt`, textos, pie, copyright, JSON-LD y Open Graph. Renombrar `logotipo-cazafugas.png` al optimizarlo (por ejemplo, `logo-mister-gas.webp`).
- [x] **1.12 `data-reveal` seguro:** que el contenido sea visible si JavaScript no corre (clase `js` en `<html>` puesta por un script inline; las animaciones solo aplican con `.js`).

**Criterio de cierre de la fase 1:** Tag Assistant muestra los tres eventos con `cta_location` correcto; DebugView de GA4 los recibe; JSON-LD sin errores; Lighthouse móvil igual o mejor que la línea base; logo < 20 KB.

### Fase 2 · Semanas 1 y 2 de campaña

- [x] **2.1 Tokens de proporción áurea** (en Tailwind v4 con `@theme`; en v3, en `theme.extend`):

```css
@theme {
  --phi: 1.618;
  /* Tipografía escritorio (base 18 px × φ) */
  --text-body: 1.125rem;   /* 18 */
  --text-h3: 1.8125rem;    /* 29 */
  --text-h2: 2.9375rem;    /* 47 */
  --text-h1: 4.75rem;      /* 76 */
  /* Espaciado Fibonacci */
  --spacing-fib-1: 0.5rem;     /* 8 */
  --spacing-fib-2: 0.8125rem;  /* 13 */
  --spacing-fib-3: 1.3125rem;  /* 21 */
  --spacing-fib-4: 2.125rem;   /* 34 */
  --spacing-fib-5: 3.4375rem;  /* 55 */
  --spacing-fib-6: 5.5625rem;  /* 89 */
}
/* Móvil: escala √φ (×1,272): 16 · 20 · 26 · 33 · 42 px */
```

  Interlineado del cuerpo 1,6. Padding vertical de secciones: 89 px en escritorio y 55 px en móvil.
- [x] **2.2 Hero rediseñado** (falta la foto de Don Hernán; el espacio está listo en `heroPhoto`)**:** `grid-template-columns: 1.618fr 1fr` en escritorio. A la izquierda, el texto y los botones; bajo los botones, "Pagas al terminar. Sin anticipos.". A la derecha, una foto real de Don Hernán trabajando (`TODO`: pedir la foto) con el sello SEC superpuesto. Subtítulo con las 5 comunas. Logo del encabezado a unos 64 px.
- [x] **2.3 Contacto:** `grid-template-columns: 1fr 1.618fr`. Formulario de 3 campos (nombre, teléfono, comuna) y descripción opcional. Botón "Enviar por WhatsApp". Aviso bajo el botón con enlace a la política de privacidad.
- [x] **2.4 Bloque "Cómo trabajamos"** en 3 pasos: escribes o llamas, diagnosticamos sin romper, pagas al terminar.
- [x] **2.5 Orden de secciones:** hero, franja de confianza (SEC, pago al final, reseñas cuando existan), servicios, cómo trabajamos, comunas, contacto, preguntas frecuentes, pie.
- [x] **2.6 Aviso fuera de horario:** si la hora de Santiago está fuera de lunes a viernes de 9 a 18, mostrar sobre los botones: "Escríbenos y te contactamos mañana desde las 9" (o el lunes, si es fin de semana). Usar `Intl.DateTimeFormat` con `timeZone: 'America/Santiago'`.
- [ ] **2.7 Preguntas frecuentes:** de 3 a unas 10, con respuestas que entregue Don Hernán (precio desde, cuánto demora, si rompe o no, equipos, certificado SEC, cuánto tarda en llegar a cada comuna, formas de pago, garantía). Sin inventar respuestas.

  Cuestionario para Don Hernán (las respuestas van tal cual a `src/data/faq.ts`; la página y el JSON-LD se actualizan solos):

  1. ¿Desde cuánto cobra una detección de fugas? ¿Se puede publicar "desde $80.000"?
  2. ¿Cuánto demora una detección típica? ¿Y una reparación?
  3. ¿En qué casos hay que romper y cómo se repara después?
  4. ¿Qué equipos usa? (confirmar ultrasonido, presión controlada y termografía)
  5. ¿Cuál es su número o enlace de certificación SEC y qué cubre?
  6. ¿Cuánto tarda en llegar a cada comuna (Puente Alto, La Florida, Macul, San José de Maipo, Pirque)?
  7. ¿Qué formas de pago acepta? (confirmar efectivo, transferencia y tarjetas, al terminar)
  8. ¿Da garantía por el trabajo? ¿Cuánto tiempo y qué cubre?
  9. ¿Atiende urgencias el mismo día dentro del horario?
  10. ¿Instala calefones nuevos? ¿Trae el equipo o lo compra el cliente?
  11. ¿Trabaja los feriados que caen en día hábil (8 y 25 de diciembre, 1 de enero)? (también define el aviso fuera de horario, 2.6)
- [x] **2.8 Política de privacidad:** página `/privacidad` corta (qué datos pide el formulario, para qué, cómo pedir que se borren). Contexto: Ley 21.719.
- [ ] **2.9 Microsoft Clarity** por GTM. En GTM: Plantillas → Galería → "Microsoft Clarity - Official"; etiqueta con el ID del proyecto de Clarity y activador *All Pages*. En Clarity, activar el enmascaramiento de campos del formulario (modo estricto o "Mask all inputs") para no grabar nombre ni teléfono. La política de privacidad (2.8) ya menciona Clarity.
- [x] **2.10 `llms.txt`** en `public/` con nombre, servicios, comunas, horario y contacto (no afecta a Google, sirve para otros asistentes).
- [x] **2.11 Alt descriptivos** en las imágenes de servicios.

### Fase 3 · Meses 2 y 3

- [x] **3.1 Páginas de servicio** con contenido propio: `/deteccion-de-fugas`, `/calefones`, `/gasfiter`, `/destapes`. Cada una con H1, proceso, preguntas propias, JSON-LD `Service` y los mismos CTA. Contenido en `src/data/services.ts`; **Don Hernán debe revisar los textos antes de publicar**.
- [ ] **3.2 Páginas por comuna** solo si hay contenido real y distinto (trabajos hechos ahí, fotos). Nunca la misma página con otro nombre de comuna. **Decisión (20 nov):** no se crean todavía; no hay trabajos ni fotos por comuna. Cuando haya al menos 2 o 3 casos reales en una comuna (`src/data/cases.ts` ya guarda la comuna de cada caso), se arma esa página con esos casos.
- [ ] **3.3 Reseñas:** mostrar reseñas reales de la ficha de Google (texto, nombre y fecha, con su permiso o vía la API de la ficha). Bloque listo: se cargan en `src/data/reviews.ts` y aparecen solos después de la franja de confianza.
- [ ] **3.4 Casos:** 3 trabajos con foto de antes y después, con permiso del cliente final. Bloque listo: fotos en `src/assets/casos/` y datos en `src/data/cases.ts`; aparecen solos después de "Cómo trabajamos".

### Fase 4 · Gasfitería integral (pedido de Don Hernán del 21 nov)

Plan SEO completo en `PLAN-SEO.md` (mapa de palabras clave por página, próximos pasos y preguntas para Don Hernán).

- [x] **4.1 Portada como gasfitería integral:** H1 "Mister Gas · Servicio Integral de Gasfitería", descripción con gas, agua potable, alcantarillado, calefones, fugas y destapes, título y meta descripción nuevos, servicios en su orden de prioridad (gasfitería integral como principal) y dos preguntas frecuentes nuevas.
- [x] **4.2 `/gasfiter/` como página de gasfitería integral**, con bloque "Servicios especializados" que enlaza a todas las páginas de servicio. Se mantuvo la URL porque ya estaba indexada.
- [x] **4.3 Páginas nuevas `/instalacion-de-gas/` y `/agua-potable-y-alcantarillado/`**, hijas de gasfitería integral (ruta de tres niveles en pantalla y en JSON-LD). Texto basado solo en lo que escribió Don Hernán; **sin "Pagas al terminar"** hasta que confirme cómo se cobran esos trabajos. JSON-LD `hasCredential` con la licencia clase 3.
- [x] **4.4 Velocidad en celular:** fuentes propias precargadas, GTM diferido y solo en mistergas.cl, sello SEC en WebP, fotos de 640 px para celular y carrusel que carga las fotos 2 y 3 al terminar. Medición local en el bitácora.
- [x] **4.5 Botones de llamada y WhatsApp:** auditoría automática de las 8 páginas (número, texto, `data-cta`, pestaña nueva, enlaces internos, JSON-LD). En celular los botones del inicio quedan sobre la barra fija en todas las páginas, aun con el aviso de fuera de horario; para eso el aviso pasó bajo los botones y en las páginas de servicio los botones van en dos columnas.
- [ ] **4.6 Revisión de Don Hernán** de los textos de las dos páginas nuevas y respuestas a las preguntas de `PLAN-SEO.md` (número de licencia, tipos de gas, forma de pago en proyectos, fotos).
- [ ] **4.7 Publicar** (unir `fase-4-mistergas` a `main`, con aprobación de Cristian) y pedir indexación de las páginas nuevas en Search Console.

---

## 7. Fuera del código (lo hace Cristian; dejar registro en la bitácora)

- [ ] Llamada con Don Hernán: crear cuenta de Google Ads (modo experto, sin campaña, CLP, Santiago), tarjeta, vínculo con la MCC 534-787-9097, invitación a la ficha de Google Business.
- [ ] Confirmar: teléfono y WhatsApp, marca, SEC, precio desde, si trabaja festivos (8 y 25 de diciembre y 1 de enero caen en día hábil), permiso para usar sus resultados como caso.
- [ ] Search Console: propiedad de dominio (si tenemos el DNS) o prefijo de URL. Enviar sitemap, vincular con GA4 y activar la inclusión en las funciones de IA generativa.
- [ ] Bing Webmaster Tools (importar desde Search Console) + Bing Places + Apple Business Connect.
- [ ] Ficha de Google Business: servicios, comunas, horario, fotos, enlace con UTM `?utm_source=google&utm_medium=organic&utm_campaign=gbp`, vinculada a Google Ads.
- [ ] Campaña de Búsqueda: grupos detección de fugas, reparación de fugas, gasfiter y calefón; concordancia de frase y exacta; negativas (curso, trabajo, empleo, gratis, tutorial, "cómo"); 5 comunas con la opción "Presencia"; lunes a viernes de 9 a 18; recurso de llamada y de ubicación; sin socios de búsqueda ni Display; presupuesto diario de referencia unos $4.500 (validar).
- [ ] Día de encendido = día 0. Día 10: segundo cobro de $50.000.
- [ ] Informe semanal por WhatsApp.

---

## 8. Checklist de verificación antes de cada publicación

- [ ] Todos los `tel:` y `wa.me` apuntan a `BUSINESS` y funcionan en un celular real.
- [ ] Tag Assistant: eventos con `cta_location` correcto.
- [ ] Prueba de resultados enriquecidos sin errores.
- [ ] Lighthouse móvil: rendimiento, SEO y accesibilidad iguales o mejores que la última fila de la bitácora.
- [ ] Sin `TODO(confirmar)` visibles en la página publicada.
- [ ] Ortografía revisada.
- [ ] Cristian aprobó la vista previa.

---

## 9. Bitácora

Agregar una fila por sesión, la más reciente arriba.

| Fecha | Quién | Qué se hizo | Próximo paso |
| --- | --- | --- | --- |
| 22 nov 2026 | Claude Code | **Fase 4 en la rama `fase-4-mistergas`** (sale de `main`), según el mensaje de Don Hernán del 21 nov. Vista previa: https://cazafugas-git-fase-4-6620a2-cristiansanchez1003-blips-projects.vercel.app. **Sin publicar en producción.** Hecho: portada como "Mister Gas · Servicio Integral de Gasfitería"; servicios en su orden; `/gasfiter/` como página de gasfitería integral; páginas nuevas `/instalacion-de-gas/` (TC6, licencia clase 3) y `/agua-potable-y-alcantarillado/` (RIDAA, constructor civil); credencial SEC en JSON-LD; dos preguntas frecuentes nuevas; `llms.txt`; `PLAN-SEO.md` con mapa de palabras clave y próximos pasos. Velocidad (local, GTM bloqueado en ambas, 3 corridas alternadas): portada FCP 2,8 → 1,6 s, LCP 4,2 → 2,7 s, 681 → 547 KiB, puntaje unos 80 → unos 88; calefones LCP 3,0 → 2,1 s, 310 → 215 KiB. El TBT local subió de 0 a unos 300 ms porque la página se dibuja 1,4 s antes y las mismas tareas caen después del primer dibujo; el trabajo total del hilo principal bajó de 3,4 a 3,0 s. GTM ya no carga en localhost ni en las vistas previas: GA4 solo recibe visitas de mistergas.cl. Auditoría de las 8 páginas: 0 problemas en botones, títulos, descripciones, H1, canónicas, JSON-LD y enlaces internos. Los botones del inicio quedan sobre la barra fija en celular en todas las páginas, aun con el aviso de fuera de horario. Arreglos encontrados al revisar: el carrusel podía mostrar fondo gris si la foto siguiente no había llegado (ahora solo avanza a fotos descargadas) y el sello SEC quedaba ovalado en escritorio. También se dejó : campaña de Búsqueda con 4 grupos en el orden de Don Hernán, palabras clave, negativas, anuncios con conteo de caracteres, enlaces de sitio y conversiones. | Cristian revisa la vista previa y manda a Don Hernán los textos de `/instalacion-de-gas/` y `/agua-potable-y-alcantarillado/` junto con las preguntas de `PLAN-SEO.md` (sección 6). Con su visto bueno: unir a `main`, reenviar el sitemap y pedir indexación de las páginas nuevas. |
| 20 nov 2026 | Claude Code + Cristian | **Ajustes de GA4 aplicados.** Script `~/.codex/mcp/aplicar-medicion-mistergas.py` (mismo método que `aplicar-medicion-espiritu.py`; lo corrió Cristian, porque el sistema de permisos no deja a Claude usar las credenciales). Eventos clave creados: `generate_lead`, `whatsapp_click` y `tel_click`. Dimensiones de evento creadas: Comuna (`commune`), Ubicación del botón (`cta_location`) y Servicio (`service`). "Interacciones con formularios" ya estaba desactivada. Google Signals desactivado (se deja así por privacidad). Lo confirmó la conexión de lectura. Mister Gas no tiene cuenta de Google Ads: Cristian la va a crear. | Crear la cuenta de Ads (sin campaña, Chile/CLP, vinculada al MCC 534-787-9097) y pasar el ID de cliente. Luego: 3 conversiones en Ads (Formulario y WhatsApp principales, Llamada secundaria, sin conversiones mejoradas), etiquetas en GTM y vínculo GA4–Ads sin personalización de anuncios. Opcional: borrar los eventos clave de plantilla `qualify_lead` y `close_convert_lead`. |
| 20 nov 2026 | Claude Code | **GTM y GA4 en marcha.** Se anotaron en la sección 3 las prioridades de Don Hernán (gasfitería integral, fugas, calefón) y la decisión de medir por comuna antes de ampliar. Se creó el contenedor `GTM-TJN95PDW` (cuenta GTM Espiritu Digital) con las variables, activadores y etiquetas de la tarea 1.4 y se publicó como versión 2. La propiedad GA4 `G-ZYCX1NXWZX` (cuenta "Mister Gas") la creó Cristian. `GTM_ID` está en `src/config/analytics.ts` (commit `aa2a2fe`). Prueba en vivo en mistergas.cl: `tel_click` (hero), `whatsapp_click` (barra móvil), `service_modal_open` (calefones), `form_start` y `generate_lead` (Puente Alto, con la respuesta del servidor simulada para no abrir WhatsApp) aparecen en el informe en tiempo real de GA4. Esos datos de prueba quedan en GA4 con fecha 20 nov: 1 lead, 1 clic de teléfono y 1 de WhatsApp. | En GA4: marcar `generate_lead`, `whatsapp_click` y `tel_click` como eventos clave; crear las dimensiones personalizadas `commune`, `cta_location` y `service`; confirmar que "Interacciones con formularios" esté desactivada; activar Google Signals solo si se decide; vincular Google Ads. Luego: etiquetas de conversión de Ads en GTM (1.4) y Clarity (2.9). |
| 20 nov 2026 | Claude Code | **DNS y redirecciones.** `www.mistergas.cl` y las direcciones `http://` ya redirigen con 308 permanente a `https://mistergas.cl/` (Cristian lo configuró en Vercel). Se agregó en el DNS de Vercel el registro TXT del apex `google-site-verification=19n42dG6…` (rec_18265340f3e8da6e6cc0d0d3) para la propiedad de dominio `sc-domain:mistergas.cl`; Google DNS y Cloudflare ya lo ven. No borrar ese registro ni el archivo HTML. Las propiedades de mistergas.cl están en la misma cuenta que tiene `espiritudigital.cl` (la de Espíritu Digital, según Cristian). | Apretar VERIFY en la propiedad de dominio. Si la cuenta personal tiene otra propiedad de mistergas.cl, se puede quitar; para darle acceso, usar Usuarios y permisos. |
| 20 nov 2026 | Claude Code | **Search Console verificado** (propiedad `https://mistergas.cl/`, propietario). Inspección: las 4 páginas de servicio están "Enviada e indexada", rastreadas hoy después de publicar, con canónica correcta y "Rutas de exploración" (breadcrumbs) válidas. La portada también está indexada, pero Google la rastreó el 18 nov, antes de publicar. Todavía no hay datos de rendimiento (0 filas). La propiedad de dominio `sc-domain:mistergas.cl` quedó creada sin verificar. Las preguntas frecuentes no salen como resultado enriquecido: desde 2023 Google solo las muestra para sitios de gobierno y de salud. | Pedir indexación de la portada. En Vercel: agregar `www.mistergas.cl` como redirección 308, desmarcando "Include apex and www variants". En 1 a 2 semanas, revisar consultas e impresiones en Search Console. |
| 20 nov 2026 | Claude Code | **Archivo de verificación de Search Console publicado**: `public/google1220ecdbee82bfb7.html`, que responde 200 en https://mistergas.cl/google1220ecdbee82bfb7.html (commit `c5289b1`). No hay que borrarlo nunca. Cristian probó el sitio en su celular y le funcionó. La propiedad que se creó en Search Console quedó mal: se ingresó `https://mistergas.cl/sitemap-index.xml/` en vez de `https://mistergas.cl/`. `www.mistergas.cl` sigue respondiendo 307: no está agregado como dominio del proyecto `cazafugas` (solo están `mistergas.cl` y `cazafugas.vercel.app`, este último ya con 308). | En Search Console: quitar la propiedad mal creada, crear la de prefijo de URL `https://mistergas.cl/` y verificarla con el archivo HTML; luego enviar `sitemap-index.xml` y pedir la indexación de las 4 páginas de servicio. En Vercel (cazafugas, Settings, Domains): agregar `www.mistergas.cl` con redirección permanente (308) a `mistergas.cl`. |
| 20 nov 2026 | Claude Code | **Publicadas las Fases 0 a 3 en mistergas.cl**, con aprobación de Cristian. `main` avanzó sin conflictos de `d1fcc46` a `4186c7f`, porque las 4 ramas estaban en cadena. Deploy de producción listo en 26 s. Revisado en vivo: las 6 páginas, `llms.txt`, `robots.txt`, sitemap, `og.jpg`, favicon e ícono de Apple dan 200; la canónica coincide con el sitemap (con barra final); el número de relleno no aparece; `/api/contact` devuelve el enlace de WhatsApp correcto; en móvil (375 px) no hay desborde y los botones del hero quedan sobre la barra fija. Lighthouse móvil en producción, con mucho ruido por la carga de la máquina (2 corridas por página): portada 33 y 77 (LCP 5,7 y 4,2 s; antes 45 con LCP 10,6 s); detección de fugas 28 y 46. Accesibilidad, buenas prácticas y SEO dan 100. `www.mistergas.cl` redirige con 307 (temporal). | Medir en PageSpeed Insights (servidores de Google, sin el ruido local). En Vercel, Domains: cambiar la redirección de `www` a permanente (308). En Search Console: enviar `https://mistergas.cl/sitemap-index.xml` y pedir indexación de las 4 páginas de servicio. Probar en un celular real. Rich Results Test sobre la portada y una página de servicio. Siguen pendientes los datos de Don Hernán y el ID de GTM. |
| 20 nov 2026 | Claude Code | **Fase 3 en la rama `fase-3-mistergas`** (sale de `fase-2-mistergas`). Vista previa (commit `77eed93`): https://cazafugas-git-fase-3-772355-cristiansanchez1003-blips-projects.vercel.app. **3.1 hecha:** `/deteccion-de-fugas`, `/calefones`, `/gasfiter` y `/destapes`, generadas desde `src/data/services.ts` con H1, qué incluye, proceso, aviso de seguridad con gas (fugas y calefones), preguntas propias, formulario, mismos CTA con `data-service` y JSON-LD `Service` + `BreadcrumbList` + `FAQPage` (validado contra schema.org). Enlazadas desde las tarjetas de servicios, el pie y `llms.txt`; están en el sitemap. Textos solo con datos que la web ya tenía; sin precios, plazos ni garantías. Descripciones de 140-144 caracteres. Antes se separaron componentes reutilizables (aviso fuera de horario, preguntas por props, menú con `/#seccion` para que funcione desde cualquier página). **3.2** sin páginas por comuna hasta tener casos reales ahí. **3.3 y 3.4** con bloques listos y ocultos mientras `src/data/reviews.ts` y `src/data/cases.ts` estén vacíos (probados con datos de prueba que no se subieron). **Medido:** móvil 375×812 sin desborde en las 4 páginas y ambos botones del hero sobre la barra; escritorio 1280 px con bloque 1 / 1,618. **Lighthouse móvil local:** páginas de servicio 89-90 (LCP 2,9-3,1 s, CLS 0, ~310 KiB), portada 74 (CLS 0,005); accesibilidad, buenas prácticas y SEO en 100 | Don Hernán: revisar los textos de las 4 páginas de servicio. Cristian: reseñas de la ficha (con permiso) y 3 casos con fotos y permiso. Unir a `main` en orden: `fase-0` a `fase-3` |
| 19 nov 2026 | Claude Code | **Fase 2 en la rama `fase-2-mistergas`** (sale de `fase-1-mistergas`), un commit por tarea. Vista previa (commit `e288e29`): https://cazafugas-git-fase-2-c75e4b-cristiansanchez1003-blips-projects.vercel.app. 2.1 tokens φ en `theme.extend` + variables CSS (móvil 16·20·26·33·42 px, escritorio 18·29·47·76 px, interlineado 1,6, secciones 55/89 px). 2.2 hero 1,618fr / 1fr, "Pagas al terminar. Sin anticipos." y logo del encabezado a 64 px (encabezado de 88 px en móvil); la columna derecha espera la foto de Don Hernán. 2.3 contacto 1fr / 1,618fr, descripción opcional (también en `/api/contact`), botón "Enviar por WhatsApp", aviso con enlace a la política y teléfono junto al formulario (`data-cta=contacto`). 2.4 "Cómo trabajamos". 2.5 orden de secciones y bloque de comunas; el menú "Sectores" (que apuntaba a una sección inexistente) ahora es "Comunas". 2.6 aviso fuera de horario (hoy / mañana / el lunes, hora de Santiago; no considera feriados). 2.8 `/privacidad`, enlazada desde el formulario y el pie. 2.10 `/llms.txt` generado desde `business.ts`. 2.11 alt descriptivos. 2.7 y 2.9 quedan documentadas (cuestionario para Don Hernán y pasos de Clarity). **Medido en el navegador:** escritorio 1280 px: hero 708/438 = 1,618, contacto 440/712 = 1,618, tipografía y secciones según tokens, sin desborde horizontal; móvil 375×812: sin desborde, "Llamar ahora" sobre la barra fija. **Correcciones durante la fase:** el hero en móvil empujaba los botones bajo la barra (sello SEC 112→80 px, encabezado 104→88 px) y el CLS había subido de 0,013 a 0,062 por el recentrado al cargar la fuente (hero alineado arriba en móvil: 0,025). **Lighthouse móvil, build local:** Fase 1 = 72-76; Fase 2 = 74 y 87 tras las correcciones (LCP 3,3-3,7 s, CLS 0,025); accesibilidad, buenas prácticas y SEO en 100. **Pendiente:** foto de Don Hernán, respuestas del cuestionario (2.7), Clarity en GTM (2.9), feriados en el aviso, revisar si "Atención en minutos" del bloque de contacto es un compromiso real | Cristian: revisar la vista previa en el celular, pasarle el cuestionario de la 2.7 a Don Hernán y pedirle la foto. Unir a `main` en orden: `fase-0`, `fase-1`, `fase-2` |
| 19 nov 2026 | Claude Code | **Fase 1 en la rama `fase-1-mistergas`** (sale de `fase-0-mistergas`), un commit por tarea. Vista previa lista (commit `beb23ba`): https://cazafugas-git-fase-1-b3a9da-cristiansanchez1003-blips-projects.vercel.app. 1.1 GTM listo en el código pero apagado: se enciende poniendo el ID en `src/config/analytics.ts`; con `GTM-XXXXXXX` de relleno la página pediría un contenedor inexistente. 1.2 y 1.3 probados en el navegador: llegan `tel_click` y `whatsapp_click` con `cta_location` correcto (header, hero, barra_movil, modal, footer), `service` en el modal, `service_modal_open`, `form_start` (una vez) y `generate_lead` con la comuna y la redirección. 1.4 queda documentada en la tarea (la configuración de GTM se hace en su interfaz). 1.5 barra móvil (verde `green-700` por contraste; se agregó `viewport-fit=cover` para que funcione `safe-area-inset-bottom`). 1.6 logo WebP: 18,7 KB en el encabezado (antes 1,2 MB × 7). 1.7 `favicon.ico` 16/32/48 y `apple-touch-icon` con el logo completo; no hay versión vectorial, así que no hay `icon.svg`. 1.9 JSON-LD `Plumber` + `FAQPage` (preguntas en `src/data/faq.ts`), validado contra el vocabulario de schema.org; el logo del JSON-LD usa la URL que genera Astro. 1.10 instalación de calefones. 1.11 marca Mister Gas; se borró `logotipo-cazafugas.jpeg`. 1.12 `data-reveal` seguro. **Corrección de rendimiento:** con 1.12 el hero nacía oculto y el FCP subía de ~3 s a 6,5-9 s; se le quitó la animación al hero (visible desde el primer cuadro). **Lighthouse móvil, build local, 3 corridas alternadas** (la máquina estaba cargada, por eso varía): Fase 0 = 29/46/69 · LCP ~17 s · 3.108 KiB; Fase 1 = 48/51/76 · LCP 3,8-4,5 s · 661 KiB; accesibilidad, buenas prácticas y SEO en 100 en ambas. **Pendiente:** dirección o comuna base (Google pide `address` en negocios locales para resultados enriquecidos), `sameAs` con la ficha de Google, ID de GTM, Tag Assistant y DebugView (necesitan GTM encendido), Rich Results Test con la URL publicada | Cristian: revisar la vista previa de `fase-1-mistergas` en el celular; crear GTM y GA4 y pasarme el ID; confirmar con Don Hernán marca, teléfono, pago y si muestra comuna base. Unir primero `fase-0-mistergas` y luego `fase-1-mistergas` a `main` |
| 19 nov 2026 | Claude Code | **Reconocimiento:** Astro 6.4.2 (`output: server`, portada prerenderizada y `/api/contact` serverless), Tailwind 3.4.19 con `@astrojs/tailwind` (tokens de la Fase 2 en `theme.extend`), `@astrojs/vercel` 10.0.8. Vercel `cazafugas` conectado a GitHub, producción = `main` → `mistergas.cl`; vistas previas protegidas con login de Vercel. Hallazgos extra: el menú enlaza a `#sectores`, que no existe; `favicon-mister-gas.png` pesa 1,2 MB y es el mismo archivo que el logo; `npm install` necesita `--legacy-peer-deps` (`@astrojs/tailwind` aún no declara Astro 6). **Línea base Lighthouse móvil (mistergas.cl):** rendimiento 45 · accesibilidad 100 · buenas prácticas 100 · SEO 100; LCP 10,6 s, FCP 3,7 s, TBT 700 ms, CLS 0; 1.863 KiB. En build local, `main` y la rama dan lo mismo (65–68 · 100 · 100 · 100; LCP ~17 s por el logo de 1,2 MB). **Fase 0 completa (0.1 a 0.8)** en la rama `fase-0-mistergas`, un commit por tarea. Vista previa lista: https://cazafugas-git-fase-0-93d9f5-cristiansanchez1003-blips-projects.vercel.app. Verificado: ningún `56912345678` en el código; todos los `tel:` y `wa.me` usan +56 9 8303 0716; `/robots.txt` y `/sitemap-index.xml` dan 200 en el build; título, descripción, canonical y OG correctos. El `og:image` apunta a `mistergas.cl/og.jpg`, que existirá al publicar. Los mensajes de WhatsApp ahora dicen "Hola Mister Gas" | Cristian: abrir la vista previa en su celular y probar los 3 botones; confirmar con Don Hernán la marca y el teléfono; aprobar y unir `fase-0-mistergas` a `main` (eso publica). Después, Fase 1 |
| 19 nov 2026 | Cristian | Confirmó dónde está el código: carpeta `web casafugas`, GitHub y Vercel (`casafugas`). La marca vigente es Mister Gas; Cazafugas era el nombre anterior | Abrir Claude Code en esa carpeta con este plan |
| 19 nov 2026 | Claude (chat) | Auditoría completa de la web publicada (escritorio y móvil) y este plan | Reconocimiento del repo y Fase 0 en Claude Code |
| 19 nov 2026 | Cristian | Avisó a Don Hernán que hoy parte el proyecto y llegan los primeros avances | Cobro de $50.000, boleta y llamada de Google Ads |
| 3 nov 2026 | Cristian | Propuesta enviada: $100.000 de anuncios + $100.000 de honorarios con IVA (precio especial por 3 meses) | Aceptada; partida el 19 de noviembre |
