import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import sitemap from '@astrojs/sitemap'

// Keystatic's admin UI is a server route. In LOCAL storage mode it's only used during
// `astro dev` (the dev server SSRs it without an adapter); build & preview exclude it so
// `dist/` stays fully static and drops onto Firebase Hosting unchanged.
const isDev = process.argv.includes('dev')

// Stamped into every sitemap entry so crawlers see when the site was last built.
const buildDate = new Date().toISOString()

// Static output, no adapter: see plan for rationale.
export default defineConfig({
  site: 'https://willemjohannessmith.web.app',
  output: 'static',
  server: {
    port: 3000,
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Single React instance for the Keystatic admin island — prevents "Invalid hook call".
      dedupe: ['react', 'react-dom'],
    },
  },
  integrations: [
    react(),
    markdoc({ allowHTML: true }),
    ...(isDev ? [keystatic()] : []),
    sitemap({
      // Endpoints (llms*.txt, resume.json) are not pages — keep them out of the sitemap.
      filter: (page) => !/\.(txt|json)$/.test(page),
      serialize: (item) => ({ ...item, lastmod: buildDate, changefreq: 'monthly' }),
    }),
  ],
})
