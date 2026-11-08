// Serves /resume.json (JSON Resume schema) from src/data/resume.json, injecting
// the build-time URL of the optimized portrait so basics.image never 404s.
import type { APIRoute } from 'astro'
import resume from '../data/resume.json'
import { getPortraitUrl } from '../lib/portrait'

export const GET: APIRoute = async ({ site }) => {
  const image = await getPortraitUrl(site ?? 'https://willemjohannessmith.web.app/')
  const out = {
    ...resume,
    basics: { ...resume.basics, image },
    meta: { ...resume.meta, lastModified: new Date().toISOString().slice(0, 10) },
  }
  return new Response(JSON.stringify(out, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}
