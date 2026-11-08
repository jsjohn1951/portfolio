import type { APIRoute } from 'astro'
import { profile } from '../data/profile'
import { abs, header, loadAll, projectLine, siteUrl, text, workLine } from '../lib/llms'

export const GET: APIRoute = async ({ site }) => {
  const { settings, projects, achievements, work } = await loadAll()
  const base = siteUrl(site)

  const out = [
    header(),
    '## Projects',
    ...projects.map((p) => projectLine(p, base)),
    '',
    '## Experience',
    ...work.map(workLine),
    '',
    '## Education & Certifications',
    `- [${profile.education.name}](${profile.education.url}) — ${profile.education.summary}`,
    ...achievements.map((a) => {
      const title = a.data.certificate ? `[${a.data.title}](${abs(a.data.certificate, base)})` : a.data.title
      return `- ${title} — ${a.data.issuer}${a.data.date ? `, ${a.data.date}` : ''}`
    }),
    '',
    '## Links',
    `- [GitHub](${settings?.github ?? 'https://github.com/jsjohn1951'})`,
    `- [LinkedIn](${settings?.linkedin ?? 'https://www.linkedin.com/in/willems24/'})`,
    `- [${profile.organization.name}](${profile.organization.url})`,
    `- [Resume (JSON Resume)](${abs('/resume.json', base)})`,
    `- [Resume (PDF)](${abs('/Willem_Smith_Resume.pdf', base)})`,
    `- [Full site text](${abs('/llms-full.txt', base)})`,
    '',
  ].join('\n')

  return text(out)
}
