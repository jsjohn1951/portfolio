#!/usr/bin/env node
// Postbuild guard: the facts served by /resume.json, /llms.txt and the JSON-LD
// Person must agree. They are all generated from the same sources; this catches
// a hand-edited copy slipping back in.
import { readFileSync } from 'node:fs'

const dist = (p) => readFileSync(new URL(`../dist/${p}`, import.meta.url), 'utf8')
const html = dist('index.html')
const resume = JSON.parse(dist('resume.json'))
const llms = dist('llms.txt')
const llmsFull = dist('llms-full.txt')
const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph']
const person = graph.find((n) => n['@type'] === 'Person')
const failures = []
const eq = (label, a, b) => { if (JSON.stringify(a) !== JSON.stringify(b)) failures.push(`${label}: ${JSON.stringify(a)} ≠ ${JSON.stringify(b)}`) }

eq('email (resume vs JSON-LD)', resume.basics.email, (person.email ?? '').replace(/^mailto:/, ''))
if (!llmsFull.includes(`Email: ${resume.basics.email}`)) failures.push('llms-full.txt email differs from resume.json')
eq('portrait (resume vs JSON-LD)', resume.basics.image, person.image)
eq('certificates (resume vs JSON-LD hasCredential)',
  resume.certificates.map((c) => c.name).sort(),
  person.hasCredential.map((c) => c.name).sort())
for (const p of resume.basics.profiles) if (!person.sameAs.includes(p.url)) failures.push(`resume profile ${p.url} not in JSON-LD sameAs`)
for (const u of person.sameAs) if (!llms.includes(`(${u})`)) failures.push(`llms.txt missing link ${u}`)
if (!llms.includes(`(${person.worksFor && graph.find((n) => n['@id'] === person.worksFor['@id'])?.url})`)) failures.push('llms.txt missing organization URL')
if (!resume.basics.label || resume.basics.label !== resume.basics.label.trim()) failures.push('resume label empty')

if (failures.length) {
  console.error('✗ consistency check failed:')
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}
console.log(`✓ resume.json / llms.txt / JSON-LD agree (${resume.certificates.length} certificates, ${person.sameAs.length} profiles)`)
