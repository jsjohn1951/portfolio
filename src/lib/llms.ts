// Shared pieces for /llms.txt and /llms-full.txt (llmstxt.org format).
import { getCollection } from 'astro:content'
import { profile } from '../data/profile'
import { getSiteSettings } from './content'
import resume from '../data/resume.json'
import { getProjectsSorted, projectUrl, projectSummary, type Project } from './projects'

export const SITE = 'https://willemjohannessmith.web.app/'

export const SUMMARY =
  `${profile.organization.role} of ${profile.organization.name} and full-stack developer based in ${profile.location.label}. ` +
  `South African; ${profile.education.name} Common Core graduate (first cohort, 2021), now on the Mastery track. ` +
  'Ships production web systems with React/Next.js, Vue, Go/Node, PostgreSQL and Docker CI/CD, with a growing focus on agentic AI.'

export const header = () => `# ${profile.fullName}\n\n> ${SUMMARY}\n`

export async function loadAll() {
  const [settings, projects, achievements] = await Promise.all([
    getSiteSettings(),
    getProjectsSorted(),
    getCollection('achievements').then((a) => a.sort((x, y) => x.data.order - y.data.order)),
  ])
  return { settings, projects, achievements, work: resume.work }
}

export const abs = (path: string) => new URL(path, SITE).href

export const projectLine = (p: Project) => {
  const role = p.data.role ? ` (${p.data.role})` : ''
  return `- [${p.data.name}](${projectUrl(p, SITE)})${role}: ${projectSummary(p)}`
}

export const workLine = (w: (typeof resume.work)[number]) => {
  const name = w.url ? `[${w.name}](${w.url})` : w.name
  return `- ${w.position} at ${name} — ${w.startDate} – ${w.endDate || 'Present'}: ${w.summary}`
}

export const text = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
