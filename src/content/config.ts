import { defineCollection, z } from 'astro:content'

// Keystatic writes .mdoc files (YAML frontmatter + Markdoc body = the `description`
// document field). Astro reads them here; `render()` turns the body into HTML.
// URL fields are kept as loose strings so empty CMS values never break the build
// (Keystatic still validates URL format on input).

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      date: z.string().default(''),
      category: z.enum(['professional', '42-school', 'personal']).default('professional'),
      status: z.enum(['online', 'standby', 'critical']).default('standby'),
      accent: z.enum(['cyan', 'amber', 'red']).default('cyan'),
      featured: z.boolean().default(false),
      role: z.string().optional(),
      teamSize: z.number().optional(),
      repo: z.string().optional(),
      link: z.string().optional(),
      liveUrl: z.string().optional(),
      techStack: z.array(z.string()).default([]),
      metrics: z.array(z.string()).default([]),
      images: z.array(image()).default([]),
      order: z.number().default(0),
    }),
})

const achievements = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      issuer: z.string().default(''),
      date: z.string().default(''),
      skills: z.array(z.string()).default([]),
      image: image().optional(),
      certificate: z.string().optional(),
      credentialUrl: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
})

export const collections = { projects, achievements }
