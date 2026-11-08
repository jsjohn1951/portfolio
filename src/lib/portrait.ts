// Single source for the hero portrait. The page renders it with <Picture>;
// JSON-LD (Person.image) and the resume.json endpoint use the same processed
// asset via getPortraitUrl(), so every surface points at one real file.
import { getImage } from 'astro:assets'
import portrait from '../assets/images/profile/willem-smith.jpeg'

export { portrait }

export const PORTRAIT_ALT = 'Willem Johannes Smith, full-stack developer in Abu Dhabi'

/** Absolute URL of an 800px-wide JPEG rendition of the portrait. */
export async function getPortraitUrl(site: URL | string): Promise<string> {
  const img = await getImage({ src: portrait, width: 800, format: 'jpeg' })
  return new URL(img.src, site).href
}
