# Mister Gas · mistergas.cl

Landing de Mister Gas (Don Hernán Zaror): detección de fugas, gasfitería y calefones en Puente Alto, La Florida, Macul, San José de Maipo y Pirque. Astro + Tailwind, desplegada en Vercel (proyecto `cazafugas`, nombre de la marca anterior).

El plan de trabajo, las reglas y la bitácora están en [`PLAN-MAESTRO.md`](PLAN-MAESTRO.md).

## Estructura

```txt
src/
  config/business.ts    Datos del negocio: teléfono, WhatsApp, comunas, horario, servicios (único lugar)
  config/analytics.ts   ID de Google Tag Manager
  assets/               Logo fuente (Astro genera las versiones WebP)
  components/           Header, Hero, ContactForm, Services, TrustBand, FAQ, Footer, MobileCtaBar
  data/faq.ts           Preguntas frecuentes (se usan en la página y en el JSON-LD)
  layouts/BaseLayout.astro   <head>, SEO, Open Graph, JSON-LD, capa de datos
  pages/index.astro     Portada (prerenderizada)
  pages/api/contact.ts  POST /api/contact → { url } de WhatsApp (función serverless)
public/                 robots.txt, og.jpg, favicon.ico, apple-touch-icon.png, imágenes
```

## Comandos

```bash
npm install --legacy-peer-deps   # @astrojs/tailwind aún no declara soporte para Astro 6
npm run dev
npm run build
```

La rama `main` se publica sola en mistergas.cl. Todo cambio va en una rama aparte con su vista previa de Vercel.
