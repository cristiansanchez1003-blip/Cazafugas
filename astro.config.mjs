import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mistergas.cl',
  output: 'server',
  adapter: vercel(),
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
