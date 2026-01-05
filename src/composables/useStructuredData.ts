import { computed } from 'vue'

export interface StructuredDataSchema {
  '@context': string
  '@type': string
  [key: string]: any
}

export function useStructuredData() {
  // Person Schema - Main profile
  const personSchema = computed<StructuredDataSchema>(() => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Willem Johannes Smith',
    alternateName: 'Willem J. Smith',
    jobTitle: 'AI-Assisted Full Stack Developer',
    description:
      'Full Stack Developer specializing in AI-assisted development with React, Next.js, and SEO optimization. Building production applications at Ratchet Capital.',
    url: 'https://willemjohannessmith.web.app',
    image: 'https://willemjohannessmith.web.app/profilePic.jpeg',
    email: 'wismith@student.42AbuDhabi.ae',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abu Dhabi',
      addressCountry: 'AE',
    },
    sameAs: [
      'https://www.linkedin.com/in/willems24/',
      'https://github.com/jsjohn1951',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: '42 Abu Dhabi',
      url: 'https://42abudhabi.ae/',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Ratchet Capital',
      description: 'Full Stack & DevOps Developer',
      startDate: '2024-04',
    },
    knowsAbout: [
      'AI-Assisted Development',
      'Claude Code',
      'Perplexity AI',
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'Supabase',
      'PostgreSQL',
      'Cloudflare',
      'Docker',
      'SEO Optimization',
      'Web Development',
      'Full Stack Development',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: '42 Abu Dhabi Software Engineering Program',
        credentialCategory: 'Intensive Software Engineering Program',
        educationalLevel: 'Professional Development',
        dateCreated: '2021',
        expires: '2023-02',
      },
    ],
  }))

  // WebSite Schema
  const websiteSchema = computed<StructuredDataSchema>(() => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Willem Smith Portfolio',
    alternateName: 'Willem J. Smith - Developer Portfolio',
    url: 'https://willemjohannessmith.web.app',
    description:
      'Professional portfolio showcasing AI-assisted full stack development work, including production applications built with React, Next.js, and modern web technologies.',
    author: {
      '@type': 'Person',
      name: 'Willem Johannes Smith',
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://willemjohannessmith.web.app/#About',
      },
      'query-input': 'required name=search_term_string',
    },
  }))

  // BreadcrumbList Schema
  const breadcrumbSchema = computed<StructuredDataSchema>(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://willemjohannessmith.web.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://willemjohannessmith.web.app/#About',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Experience',
        item: 'https://willemjohannessmith.web.app/#exp',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Skills',
        item: 'https://willemjohannessmith.web.app/#TSkills',
      },
    ],
  }))

  // CreativeWork Schema for Portfolio Projects
  const portfolioProjectsSchema = computed<StructuredDataSchema[]>(() => [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Megastars.ai v2',
      description:
        'Influencer marketing platform built with Next.js, Supabase, and Cloudflare. Currently in development (Nov 2024 - Present).',
      creator: {
        '@type': 'Person',
        name: 'Willem Johannes Smith',
      },
      dateCreated: '2024-11',
      keywords: ['Next.js', 'Supabase', 'React', 'TypeScript', 'Cloudflare'],
      about: 'Influencer Marketing Platform',
      url: 'https://megastars.ai',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'ioMega Energy',
      description:
        'Production website with 95+ Lighthouse scores, SEO optimization, and 60% CSS reduction through PurgeCSS optimization.',
      creator: {
        '@type': 'Person',
        name: 'Willem Johannes Smith',
      },
      dateCreated: '2024',
      keywords: [
        'Next.js',
        'SEO',
        'Performance Optimization',
        'React',
        'Cloudflare',
      ],
      about: 'Energy Solutions Website',
      url: 'https://iomega.energy',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Trescudo',
      description:
        'Production application deployed on Vercel with edge computing, achieving 98 Performance score and 85% image size reduction.',
      creator: {
        '@type': 'Person',
        name: 'Willem Johannes Smith',
      },
      dateCreated: '2024',
      keywords: ['Next.js', 'Vercel', 'Edge Computing', 'Performance'],
      about: 'Business Application',
      url: 'https://trescudo.com',
    },
  ])

  // Organization Schema - Ratchet Capital
  const organizationSchema = computed<StructuredDataSchema>(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ratchet Capital',
    employee: {
      '@type': 'Person',
      name: 'Willem Johannes Smith',
      jobTitle: 'Full Stack & DevOps Developer',
      startDate: '2024-04',
    },
  }))

  // ProfilePage Schema
  const profilePageSchema = computed<StructuredDataSchema>(() => ({
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Willem Johannes Smith',
      jobTitle: 'AI-Assisted Full Stack Developer',
      url: 'https://willemjohannessmith.web.app',
    },
    dateCreated: '2024',
    dateModified: new Date().toISOString(),
    inLanguage: 'en-US',
  }))

  // Return all schemas
  return {
    personSchema,
    websiteSchema,
    breadcrumbSchema,
    portfolioProjectsSchema,
    organizationSchema,
    profilePageSchema,
  }
}
