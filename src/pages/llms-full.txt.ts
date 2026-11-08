import type { APIRoute } from 'astro'
import { profile } from '../data/profile'
import { abs, header, loadAll, siteUrl, text, workLine } from '../lib/llms'
import { projectUrl, splitProjects, stripMarkdoc, type Project } from '../lib/projects'

const section = (title: string, items: Project[], site: string) =>
  items.length === 0
    ? []
    : [
        `## ${title}`,
        '',
        ...items.flatMap((p) => {
          const meta = [p.data.role, p.data.date].filter(Boolean).join(' · ')
          return [
            `### ${p.data.name}`,
            ...(meta ? [meta] : []),
            '',
            stripMarkdoc(p.body),
            '',
            ...(p.data.techStack.length ? [`Stack: ${p.data.techStack.join(', ')}`] : []),
            ...(p.data.metrics.length ? [`Highlights: ${p.data.metrics.join('; ')}`] : []),
            `Link: ${projectUrl(p, site)}`,
            '',
          ]
        }),
      ]

export const GET: APIRoute = async ({ site }) => {
  const { settings, projects, achievements, work } = await loadAll()
  const base = siteUrl(site)
  const { featured, productionTrack, academic } = splitProjects(projects)

  const out = [
    header(),
    `${profile.headline}. ${settings?.heroIntro ?? ''}`.trim(),
    '',
    ...section('Featured Projects', featured, base),
    ...section('Production Projects', productionTrack, base),
    ...section('42 Abu Dhabi Projects', academic, base),
    '## Experience',
    '',
    ...work.flatMap((w) => [workLine(w), ...w.highlights.map((h) => `  - ${h}`)]),
    '',
    '## Skills',
    '',
    ...(settings?.skillGroups ?? []).map((g) => `**${g.title}:** ${g.skills.join(', ')}`),
    '',
    '## Achievements',
    '',
    ...achievements.flatMap((a) => [
      `### ${a.data.title}`,
      `${a.data.issuer}${a.data.date ? ` · ${a.data.date}` : ''}`,
      '',
      stripMarkdoc(a.body),
      ...(a.data.certificate ? [`Certificate: ${abs(a.data.certificate, base)}`] : []),
      '',
    ]),
    '## Education',
    '',
    `${profile.education.name} (${profile.education.url}) — ${profile.education.summary}.`,
    '',
    '## Contact',
    '',
    `Email: ${settings?.contactEmail ?? ''}`,
    `GitHub: ${settings?.github ?? ''}`,
    `LinkedIn: ${settings?.linkedin ?? ''}`,
    `Website: ${base}`,
    '',
  ].join('\n')

  return text(out)
}
