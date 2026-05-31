# Cazafugas Landing

Landing page Astro + Tailwind para Cazafugas con renderizado estatico de la pagina principal y endpoint serverless para el formulario de contacto.

## Estructura

```txt
.
+-- astro.config.mjs
+-- package.json
+-- tailwind.config.mjs
+-- public/
|   +-- assets/
|       +-- logotipo-cazafugas.jpeg
+-- src/
    +-- components/
    |   +-- ContactForm.astro
    |   +-- FAQ.astro
    |   +-- Footer.astro
    |   +-- Header.astro
    |   +-- Hero.astro
    |   +-- Services.astro
    |   +-- TrustBand.astro
    +-- layouts/
    |   +-- BaseLayout.astro
    +-- pages/
    |   +-- api/
    |   |   +-- contact.ts
    |   +-- index.astro
    +-- styles/
        +-- global.css
```

## Comandos

```bash
npm install
npm run dev
npm run build
```

La pagina principal usa `export const prerender = true` y el endpoint `src/pages/api/contact.ts` usa `export const prerender = false`, por lo que Vercel puede servir la landing como HTML estatico y mantener `/api/contact` como funcion serverless dentro de `output: 'server'`.
