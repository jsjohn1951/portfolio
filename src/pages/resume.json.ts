// Serves /resume.json (JSON Resume schema). The static body lives in
// src/data/resume.json; every fact that also appears elsewhere on the site
// (email, profiles, headline, portrait, Cormonity, certificates) is injected
// here from the shared sources so the resume cannot drift from the page.
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import resume from '../data/resume.json'
import { profile } from '../data/profile'
import { getSiteSettings } from '../lib/content'
import { getPortraitUrl } from '../lib/portrait'
import { firstParagraph, getProjectsSorted, projectSlug } from '../lib/projects'

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
/** "Feb 2024" → "2024-02" (JSON Resume wants ISO-style dates); anything else passes through. */
const isoMonth = (d: string) => {
  const m = d.match(/^([A-Za-z]{3,9})\.?\s+(\d{4})$/)
  const idx = m ? MONTHS.indexOf(m[1].slice(0, 3).toLowerCase()) : -1
  return idx === -1 ? d : `${m![2]}-${String(idx + 1).padStart(2, '0')}`
}

export const GET: APIRoute = async ({ site }) => {
  const base = site?.href ?? profile.siteUrl
  const [settings, projects, achievements, image] = await Promise.all([
    getSiteSettings(),
    getProjectsSorted(),
    getCollection('achievements').then((a) => a.sort((x, y) => x.data.order - y.data.order)),
    getPortraitUrl(base),
  ])
  const cormonity = projects.find((p) => projectSlug(p) === 'cormonity')
  const profiles = resume.basics.profiles.map((p) => ({
    ...p,
    url: p.network === 'GitHub' ? (settings?.github ?? p.url) : p.network === 'LinkedIn' ? (settings?.linkedin ?? p.url) : p.url,
  }))

  const out = {
    ...resume,
    basics: {
      ...resume.basics,
      label: profile.headline,
      image,
      email: settings?.contactEmail ?? resume.basics.email,
      url: base,
      profiles,
    },
    work: resume.work.map((w) =>
      w.name === profile.organization.name
        ? {
            ...w,
            position: profile.organization.role,
            url: profile.organization.url,
            summary: cormonity ? firstParagraph(cormonity.body) : w.summary,
          }
        : w,
    ),
    certificates: achievements.map((a) => ({
      name: a.data.title,
      ...(a.data.date ? { date: isoMonth(a.data.date) } : {}),
      issuer: a.data.issuer,
      url: a.data.certificate ? new URL(a.data.certificate, base).href : '',
    })),
    meta: { ...resume.meta, lastModified: new Date().toISOString().slice(0, 10) },
  }
  return new Response(JSON.stringify(out, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}
