// Renders resume/resume.html to public/Willem_Smith_Resume.pdf via headless Chromium.
// Usage: npm run resume:pdf
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, 'resume.html');
const outPath = resolve(__dirname, '..', 'public', 'Willem_Smith_Resume.pdf');

const browser = await puppeteer.launch({ headless: 'new' });
try {
  const page = await browser.newPage();
  // Load from disk so resume.css and Google Fonts resolve relatively.
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle0' });
  // Ensure web fonts are fully loaded before printing.
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });
  console.log(`✓ Resume written to ${outPath}`);
} finally {
  await browser.close();
}
