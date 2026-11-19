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
| Código | Carpeta local `web casafugas`, repositorio en GitHub y proyecto `casafugas` en Vercel (el nombre viene de la marca anterior) | Confirmado |
| Marca visible | El logo dice **Mister Gas**; título, alt, pie y copyright dicen **Cazafugas**, el nombre anterior. Don Hernán cambió el nombre después de la web | Unificar a **Mister Gas** (confirmar la escritura exacta con él) |
| Teléfono | +56 9 8303 0716 (pie y WhatsApp de los modales) | Por confirmar que es el que contesta y que es su WhatsApp |
| Comunas | Puente Alto, La Florida, Macul, San José de Maipo, Pirque | Confirmado |
| Horario | Lunes a viernes, 09:00 a 18:00. Sin trabajos nocturnos | Confirmado |
| Servicios | Detección de fugas de agua y gas; reparación de fugas; instalación y mantención de calefones; redes de agua potable y sanitarias; destapes; grifería | Confirmado (falta "instalación de calefón" en la web) |
| Precio de referencia | Detección de fugas desde $80.000 | Por confirmar antes de publicarlo |
| Certificación SEC | La web la menciona y muestra un QR | Por confirmar número o enlace |
| Pago | Al terminar el trabajo, sin anticipos; efectivo, transferencia y tarjetas | Está en la web; confirmar |
| Dirección física | No publicada (negocio de área de servicio) | Preguntar si quiere mostrar comuna base |

---

## 4. Reconocimiento inicial (lo primero que hace Claude Code)

- [ ] Confirmar stack: versión de Astro, Tailwind (v3 o v4), `@astrojs/vercel` y modo (`server` o `hybrid`). El sitio usa un endpoint `POST /api/contact` que devuelve `{ url }` con un enlace de WhatsApp.
- [ ] Ubicar los componentes: encabezado, hero (`#inicio`), contacto (`#contacto`), servicios (`#servicios`, con `servicesData` y modal), certificaciones, preguntas frecuentes, pie.
- [ ] Buscar todos los teléfonos y enlaces: `grep -rn "tel:\|wa.me\|56912345678\|56983030716" src/`.
- [ ] Correr Lighthouse móvil y guardar los resultados en la bitácora como línea base.
- [ ] Confirmar que el repo de GitHub está conectado al proyecto `casafugas` de Vercel y que `mistergas.cl` es su dominio de producción. Los commits a la rama principal se publican solos: trabajar siempre en una rama aparte.
- [ ] Buscar todas las apariciones de la marca anterior: `grep -rni "cazafugas" src/ public/`. No renombrar la carpeta, el repo ni el proyecto de Vercel: no hace falta y puede romper el despliegue.

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

- [ ] **0.1 Configuración central.** Crear `src/config/business.ts` y reemplazar todos los teléfonos, comunas y textos repetidos por este archivo:

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

- [ ] **0.2 Encabezado:** `href` del botón "Llamar ahora" = `telLink()`. En escritorio, mostrar también el número en texto.
- [ ] **0.3 Hero:** "Urgencia WhatsApp" → `waLink()` con `target="_blank" rel="noopener"`. "Asesoría técnica" → "Llamar ahora" con `telLink()`. En móvil, el botón de llamar va primero.
- [ ] **0.4 Pirque:** agregarlo a la meta descripción, al subtítulo del hero y al `<select>` del formulario (desde `BUSINESS.communes`). Corregir "San Jose" a "San José".
- [ ] **0.5 Ortografía:** revisar todos los textos y poner las tildes que faltan. Listado mínimo: Detección, Gasfitería, Rápida, Atención, técnico(s), Teléfono, Descripción, Pérez, cotización, intervención, Diagnóstico, mantención, localización, reparación, Instalación, Cómo, detección, Qué, técnico, Cuál.
- [ ] **0.6 `robots.txt`** en `public/`:

```
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://mistergas.cl/sitemap-index.xml
```

- [ ] **0.7 Sitemap:** instalar `@astrojs/sitemap`, `site: 'https://mistergas.cl'` en `astro.config`.
- [ ] **0.8 `<head>`:** canonical, Open Graph y Twitter. Título y descripción nuevos:
  - Título: `Detección de Fugas y Gasfiter en Puente Alto y La Florida | [MARCA]`
  - Descripción: `Detección de fugas sin romper, gasfitería y calefones en Puente Alto, La Florida, Macul, San José de Maipo y Pirque. Técnico SEC. Lunes a viernes de 9 a 18.`
  - `og:image`: 1200 × 630 con logo, servicio y comunas (crear en `public/og.jpg`).

**Criterio de cierre de la fase 0:** en móvil, los dos botones del hero y el del encabezado abren el marcador o WhatsApp con el número correcto. `/robots.txt` y `/sitemap-index.xml` responden 200. No queda ningún `56912345678` en el código.

### Fase 1 · Antes de encender la campaña (1 a 3 días hábiles)

- [ ] **1.1 GTM + GA4.** Snippet de GTM en `<head>` y `<noscript>` al inicio de `<body>` (ID `GTM-XXXXXXX`, pendiente). GA4 se configura dentro de GTM, no en el código.
- [ ] **1.2 Capa de datos.** Script global que empuja los eventos:

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
- [ ] **1.3 `generate_lead`.** En el script del formulario, cuando `/api/contact` responde OK, empujar el evento y redirigir al terminar o a los 800 ms:

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
- [ ] **1.4 GTM (se hace en la interfaz, no en el código; dejar documentado aquí):** etiqueta de Google GA4; eventos GA4 para `tel_click`, `whatsapp_click`, `generate_lead`, `form_start`, `service_modal_open` con sus parámetros; vinculación de conversiones y etiquetas de conversión de Google Ads para los tres principales. Marcar los tres como eventos clave en GA4.
- [ ] **1.5 Barra fija en móvil:** componente `MobileCtaBar.astro`, visible bajo 768 px, fija abajo, 56 px de alto, dos botones a lo ancho: "Llamar" (rojo de la marca) y "WhatsApp" (verde), con `data-cta="barra_movil"`. Agregar `padding-bottom` al `<body>` en móvil para que no tape el pie. Respetar `env(safe-area-inset-bottom)`.
- [ ] **1.6 Logo:** exportar a WebP o AVIF a 2× del tamaño mostrado (unos 200 × 224 px, meta < 20 KB). Usar `<Image>` de Astro con `width` y `height`. Las copias decorativas de las tarjetas: `loading="lazy"` y tamaño real.
- [ ] **1.7 Favicon:** `favicon.ico` 32 px, `apple-touch-icon.png` 180 px e `icon.svg` si hay versión vectorial.
- [ ] **1.8 Hero:** solo la primera imagen del carrusel con `eager` + `fetchpriority="high"`; las otras dos `lazy`. El sello SEC oculto en móvil, `lazy`.
- [ ] **1.9 JSON-LD** en el layout (completar los TODO antes de publicar):

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
- [ ] **1.10 Calefón:** agregar "Instalación" al servicio de calefones (tarjeta, modal y JSON-LD).
- [ ] **1.11 Marca unificada a Mister Gas:** título, `alt`, textos, pie, copyright, JSON-LD y Open Graph. Renombrar `logotipo-cazafugas.png` al optimizarlo (por ejemplo, `logo-mister-gas.webp`).
- [ ] **1.12 `data-reveal` seguro:** que el contenido sea visible si JavaScript no corre (clase `js` en `<html>` puesta por un script inline; las animaciones solo aplican con `.js`).

**Criterio de cierre de la fase 1:** Tag Assistant muestra los tres eventos con `cta_location` correcto; DebugView de GA4 los recibe; JSON-LD sin errores; Lighthouse móvil igual o mejor que la línea base; logo < 20 KB.

### Fase 2 · Semanas 1 y 2 de campaña

- [ ] **2.1 Tokens de proporción áurea** (en Tailwind v4 con `@theme`; en v3, en `theme.extend`):

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
- [ ] **2.2 Hero rediseñado:** `grid-template-columns: 1.618fr 1fr` en escritorio. A la izquierda, el texto y los botones; bajo los botones, "Pagas al terminar. Sin anticipos.". A la derecha, una foto real de Don Hernán trabajando (`TODO`: pedir la foto) con el sello SEC superpuesto. Subtítulo con las 5 comunas. Logo del encabezado a unos 64 px.
- [ ] **2.3 Contacto:** `grid-template-columns: 1fr 1.618fr`. Formulario de 3 campos (nombre, teléfono, comuna) y descripción opcional. Botón "Enviar por WhatsApp". Aviso bajo el botón con enlace a la política de privacidad.
- [ ] **2.4 Bloque "Cómo trabajamos"** en 3 pasos: escribes o llamas, diagnosticamos sin romper, pagas al terminar.
- [ ] **2.5 Orden de secciones:** hero, franja de confianza (SEC, pago al final, reseñas cuando existan), servicios, cómo trabajamos, comunas, contacto, preguntas frecuentes, pie.
- [ ] **2.6 Aviso fuera de horario:** si la hora de Santiago está fuera de lunes a viernes de 9 a 18, mostrar sobre los botones: "Escríbenos y te contactamos mañana desde las 9" (o el lunes, si es fin de semana). Usar `Intl.DateTimeFormat` con `timeZone: 'America/Santiago'`.
- [ ] **2.7 Preguntas frecuentes:** de 3 a unas 10, con respuestas que entregue Don Hernán (precio desde, cuánto demora, si rompe o no, equipos, certificado SEC, cuánto tarda en llegar a cada comuna, formas de pago, garantía). Sin inventar respuestas.
- [ ] **2.8 Política de privacidad:** página `/privacidad` corta (qué datos pide el formulario, para qué, cómo pedir que se borren). Contexto: Ley 21.719.
- [ ] **2.9 Microsoft Clarity** por GTM.
- [ ] **2.10 `llms.txt`** en `public/` con nombre, servicios, comunas, horario y contacto (no afecta a Google, sirve para otros asistentes).
- [ ] **2.11 Alt descriptivos** en las imágenes de servicios.

### Fase 3 · Meses 2 y 3

- [ ] **3.1 Páginas de servicio** con contenido propio: `/deteccion-de-fugas`, `/calefones`, `/gasfiter`, `/destapes`. Cada una con H1, proceso, preguntas propias, JSON-LD `Service` y los mismos CTA.
- [ ] **3.2 Páginas por comuna** solo si hay contenido real y distinto (trabajos hechos ahí, fotos). Nunca la misma página con otro nombre de comuna.
- [ ] **3.3 Reseñas:** mostrar reseñas reales de la ficha de Google (texto, nombre y fecha, con su permiso o vía la API de la ficha).
- [ ] **3.4 Casos:** 3 trabajos con foto de antes y después, con permiso del cliente final.

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
| 19 nov 2026 | Cristian | Confirmó dónde está el código: carpeta `web casafugas`, GitHub y Vercel (`casafugas`). La marca vigente es Mister Gas; Cazafugas era el nombre anterior | Abrir Claude Code en esa carpeta con este plan |
| 19 nov 2026 | Claude (chat) | Auditoría completa de la web publicada (escritorio y móvil) y este plan | Reconocimiento del repo y Fase 0 en Claude Code |
| 19 nov 2026 | Cristian | Avisó a Don Hernán que hoy parte el proyecto y llegan los primeros avances | Cobro de $50.000, boleta y llamada de Google Ads |
| 3 nov 2026 | Cristian | Propuesta enviada: $100.000 de anuncios + $100.000 de honorarios con IVA (precio especial por 3 meses) | Aceptada; partida el 19 de noviembre |
