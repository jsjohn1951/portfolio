import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the links for the sitemap
// Note: Only include actual pages, not anchor links (SPA fragments)
const links = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
];

// Generate sitemap
async function generateSitemap() {
  try {
    const stream = new SitemapStream({
      hostname: 'https://willemjohannessmith.web.app',
    });

    const data = await streamToPromise(Readable.from(links).pipe(stream));
    const sitemapPath = resolve(__dirname, '../dist/sitemap.xml');

    writeFileSync(sitemapPath, data.toString());

    console.log('✅ Sitemap generated successfully at dist/sitemap.xml');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
