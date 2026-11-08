// Canonical identity facts that are NOT editorial copy (those live in Keystatic:
// src/data/settings/index.yaml). Consumed by <head> metadata, JSON-LD, the
// llms*.txt endpoints and resume.json so the facts cannot drift apart.
export const profile = {
  fullName: 'Willem Johannes Smith',
  displayName: 'Willem Smith',
  givenName: 'Willem Johannes',
  familyName: 'Smith',
  headline: 'Founder & CEO of Cormonity · Full-Stack Developer',
  jobTitles: ['Founder & CEO', 'Full-Stack Developer'],
  description:
    'Willem Johannes Smith is the founder and CEO of Cormonity and a full-stack developer based in Abu Dhabi, United Arab Emirates. ' +
    'A South African 42 Abu Dhabi Common Core graduate (first cohort, 2021) now on the Mastery track, Willem ships production web platforms with React/Next.js, Vue, Go/Node, PostgreSQL and Docker-based CI/CD.',
  location: {
    locality: 'Abu Dhabi',
    countryCode: 'AE',
    label: 'Abu Dhabi, United Arab Emirates',
  },
  nationality: 'South Africa',
  organization: {
    name: 'Cormonity',
    url: 'https://cormonity.com',
    role: 'Founder & CEO',
  },
  education: {
    name: '42 Abu Dhabi',
    url: 'https://42abudhabi.ae/',
    summary: 'Common Core certified (first cohort, 2021); currently on the Mastery track',
  },
  seo: {
    // 60 chars — keep ≤ 60.
    title: 'Willem Smith — Cormonity Founder · Full-Stack Dev, Abu Dhabi',
    // 149 chars — keep ≤ 155.
    description:
      'Willem Smith: founder of Cormonity and full-stack developer in Abu Dhabi, UAE. React, Next.js, Vue, Go, Node and Docker. See my work or get in touch.',
    ogImageAlt: 'Willem Smith portfolio — dark HUD-style landing page',
  },
} as const
