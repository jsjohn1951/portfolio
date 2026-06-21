import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../keystatic.config'

// Filesystem reader for Keystatic content at build time. Used for the siteSettings
// singleton (collections are read through Astro's content layer / getCollection).
export const reader = createReader(process.cwd(), keystaticConfig)

export async function getSiteSettings() {
  return reader.singletons.siteSettings.read()
}
