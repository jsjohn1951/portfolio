#!/usr/bin/env node
// Postbuild guard: parses the JSON-LD emitted into dist/index.html and fails the
// build if the graph is malformed, dangling, incomplete or leaks the phone number.
import { readFileSync } from 'node:fs'

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8')
const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1])
const failures = []
if (blocks.length === 0) failures.push('no <script type="application/ld+json"> found')

const defined = new Map()
const refs = []
let nodes = 0
const walk = (v, path) => {
  if (Array.isArray(v)) return v.forEach((x, i) => walk(x, `${path}[${i}]`))
  if (!v || typeof v !== 'object') return
  const keys = Object.keys(v)
  if (keys.length === 1 && keys[0] === '@id') refs.push({ id: v['@id'], path })
  else if (v['@id']) { defined.set(v['@id'], v); nodes++ }
  for (const k of keys) walk(v[k], `${path}.${k}`)
}

const docs = []
for (const b of blocks) {
  try { docs.push(JSON.parse(b)) } catch (e) { failures.push(`JSON.parse failed: ${e.message}`) }
  if (/\+971/.test(b)) failures.push('phone number (+971) present in JSON-LD')
}
docs.forEach((d, i) => walk(d, `doc${i}`))

for (const r of refs) if (!defined.has(r.id)) failures.push(`dangling @id reference ${r.id} at ${r.path}`)

const byType = (t) => [...defined.values()].filter((n) => n['@type'] === t)
const persons = byType('Person')
if (persons.length !== 1) failures.push(`expected exactly 1 Person, found ${persons.length}`)
for (const k of ['image', 'address', 'alumniOf', 'worksFor', 'hasCredential', 'knowsAbout', 'givenName', 'familyName', 'description'])
  if (persons[0] && persons[0][k] == null) failures.push(`Person missing ${k}`)

const pages = byType('WebPage')
if (pages.length !== 1) failures.push(`expected exactly 1 WebPage, found ${pages.length}`)
if (pages[0] && !/^\d{4}-\d{2}-\d{2}$/.test(pages[0].dateModified ?? '')) failures.push(`WebPage.dateModified invalid: ${pages[0].dateModified}`)
if (byType('Organization').length < 1) failures.push('no Organization node')

let items = 0
for (const list of byType('ItemList')) {
  for (const li of list.itemListElement ?? []) {
    items++
    const it = li.item ?? {}
    if (!it.url) failures.push(`ItemList item "${it.name}" missing url`)
    if (!it.description) failures.push(`ItemList item "${it.name}" missing description`)
    const site = defined.get(list['@id'])?.['@id']?.split('#')[0]
    if (it.url && site && it.url.startsWith(site + '#')) {
      const slug = it.url.slice(site.length + 1)
      if (!new RegExp(`\\sid="${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(html))
        failures.push(`ItemList item "${it.name}" links to #${slug} but no element has id="${slug}"`)
    }
  }
}

if (failures.length) {
  console.error('✗ JSON-LD check failed:')
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}
console.log(`✓ JSON-LD OK — ${nodes} nodes, ${refs.length} refs, ${items} list items`)
