// Shared project helpers. index.astro, JsonLd.astro and the llms*.txt endpoints
// all read projects through here so slugs, URLs and summaries cannot diverge.
import { getCollection, type CollectionEntry } from 'astro:content'

export type Project = CollectionEntry<'projects'>

export async function getProjectsSorted(): Promise<Project[]> {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order)
}

export function splitProjects(all: Project[]) {
  return {
    featured: all.filter((p) => p.data.featured),
    productionTrack: all.filter((p) => !p.data.featured && p.data.category !== '42-school'),
    academic: all.filter((p) => !p.data.featured && p.data.category === '42-school'),
  }
}

/** URL-safe id for the project's <article> and its `#slug` fragment URL. */
export function projectSlug(p: Project): string {
  const slug = (p as { slug?: string }).slug
  return slug ?? p.id.replace(/\.[^.]+$/, '')
}

export function projectExternalUrl(p: Project): string | undefined {
  return p.data.liveUrl || p.data.repo || p.data.link || undefined
}

/** External URL when one exists, otherwise the project's anchor on the home page. */
export function projectUrl(p: Project, site: string): string {
  return projectExternalUrl(p) ?? `${site.replace(/\/?$/, '/')}#${projectSlug(p)}`
}

/** Markdoc body with `{% … %}` tags removed. */
export function stripMarkdoc(body: string | undefined): string {
  return (body ?? '').replace(/\{%[\s\S]*?%\}/g, '').trim()
}

export function firstParagraph(body: string | undefined): string {
  return stripMarkdoc(body).split(/\n{2,}/)[0]?.replace(/\s+/g, ' ').trim() ?? ''
}

/** First sentence of the first paragraph — used for JSON-LD and llms.txt descriptions. */
export function projectSummary(p: Project): string {
  const para = firstParagraph(p.body)
  return para.split(/(?<=[.!?])\s+/)[0] ?? para
}

/** Short blurb for compact cards (first paragraph, cut on a word boundary). */
export function projectExcerpt(p: Project, max = 160): string {
  const para = firstParagraph(p.body)
  return para.length > max ? para.slice(0, max).replace(/\s+\S*$/, '') + '…' : para
}
