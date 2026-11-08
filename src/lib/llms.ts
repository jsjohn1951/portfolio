// Shared pieces for /llms.txt and /llms-full.txt (llmstxt.org format).
import { getCollection } from 'astro:content'
import { profile } from '../data/profile'
import { getSiteSettings } from './content'
import resume from '../data/resume.json'
import { getProjectsSorted, projectUrl, projectSummary, type Project } from './projects'

export const siteUrl = (site?: URL) => site?.href ?? profile.siteUrl

/** One-paragraph who/what/where summary — the same text as the JSON-LD Person.description. */
export const header = () => `# ${profile.fullName}\n\n> ${profile.description}\n`

export async function loadAll() {
  const [settings, projects, achievements] = await Promise.all([
    getSiteSettings(),
    getProjectsSorted(),
    getCollection('achievements').then((a) => a.sort((x, y) => x.data.order - y.data.order)),
  ])
  return { settings, projects, achievements, work: resume.work }
}

export const abs = (path: string, site: string) => new URL(path, site).href

export const projectLine = (p: Project, site: string) => {
  const role = p.data.role ? ` (${p.data.role})` : ''
  return `- [${p.data.name}](${projectUrl(p, site)})${role}: ${projectSummary(p)}`
}

export const workLine = (w: (typeof resume.work)[number]) => {
  const name = w.url ? `[${w.name}](${w.url})` : w.name
  return `- ${w.position} at ${name} — ${w.startDate} – ${w.endDate || 'Present'}: ${w.summary}`
}

export const text = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
