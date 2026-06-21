import { config, fields, collection, singleton } from '@keystatic/core'

// LOCAL storage mode: the admin UI (at /keystatic during `astro dev`) writes content
// files straight into the working tree. Commit + push triggers CI to rebuild & deploy.
// No GitHub App, no OAuth API routes, no env vars — see plan for rationale.
export default config({
  storage: { kind: 'local' },

  ui: {
    brand: { name: 'W.J. SMITH // SYSTEMS CORE' },
  },

  singletons: {
    siteSettings: singleton({
      label: 'Site Settings',
      // Kept outside src/content so Astro's content layer doesn't try to load it as a
      // collection; it's read via Keystatic's createReader in src/lib/content.ts.
      path: 'src/data/settings/index',
      schema: {
        heroFirstName: fields.text({ label: 'Hero — First Name', defaultValue: 'Willem' }),
        heroMiddleName: fields.text({ label: 'Hero — Middle Name', defaultValue: 'Johannes' }),
        heroLastName: fields.text({ label: 'Hero — Last Name', defaultValue: 'Smith' }),
        heroId: fields.text({
          label: 'Hero — Role / ID line',
          defaultValue: 'SYSTEMS ARCHITECT // ID: 9942-X',
        }),
        heroIntro: fields.text({
          label: 'Hero — Intro paragraph',
          multiline: true,
        }),
        coreStack: fields.array(fields.text({ label: 'Technology' }), {
          label: 'Core Stack chips',
          itemLabel: (props) => props.value ?? '',
        }),
        statusText: fields.text({ label: 'Status text', defaultValue: 'OPERATIONAL' }),
        aboutBody: fields.text({ label: 'About — body', multiline: true }),
        contactEmail: fields.text({ label: 'Contact email' }),
        github: fields.url({ label: 'GitHub URL' }),
        linkedin: fields.url({ label: 'LinkedIn URL' }),
        skillGroups: fields.array(
          fields.object({
            title: fields.text({ label: 'Group title' }),
            skills: fields.array(fields.text({ label: 'Skill' }), {
              label: 'Skills',
              itemLabel: (props) => props.value ?? '',
            }),
          }),
          {
            label: 'Skill groups',
            itemLabel: (props) => props.fields.title.value || 'Skill group',
          },
        ),
      },
    }),
  },

  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'name',
      path: 'src/content/projects/*',
      entryLayout: 'content',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Project Name' } }),
        date: fields.text({ label: 'Date range', description: 'e.g. "Nov 2024 - Present"' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Professional', value: 'professional' },
            { label: '42 School', value: '42-school' },
            { label: 'Personal', value: 'personal' },
          ],
          defaultValue: 'professional',
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'ONLINE', value: 'online' },
            { label: 'STANDBY', value: 'standby' },
            { label: 'CRITICAL', value: 'critical' },
          ],
          defaultValue: 'standby',
        }),
        accent: fields.select({
          label: 'HUD accent color',
          options: [
            { label: 'Cyan', value: 'cyan' },
            { label: 'Amber', value: 'amber' },
            { label: 'Red', value: 'red' },
          ],
          defaultValue: 'cyan',
        }),
        featured: fields.checkbox({
          label: 'Featured (App-Store hero treatment)',
          defaultValue: false,
        }),
        role: fields.text({ label: 'Role' }),
        teamSize: fields.integer({ label: 'Team size' }),
        repo: fields.url({ label: 'Repository URL' }),
        link: fields.url({ label: 'External / article link' }),
        liveUrl: fields.url({ label: 'Live URL' }),
        techStack: fields.array(fields.text({ label: 'Tech' }), {
          label: 'Tech stack',
          itemLabel: (props) => props.value ?? '',
        }),
        metrics: fields.array(fields.text({ label: 'Metric' }), {
          label: 'Metrics / highlights',
          itemLabel: (props) => props.value ?? '',
        }),
        images: fields.array(
          fields.image({
            label: 'Screenshot',
            directory: 'src/assets/images/projects',
            publicPath: '../../assets/images/projects/',
          }),
          { label: 'Screenshots', itemLabel: () => 'Screenshot' },
        ),
        order: fields.integer({
          label: 'Order',
          description: 'Lower appears first',
          defaultValue: 0,
        }),
        description: fields.document({
          label: 'Description',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),

    achievements: collection({
      label: 'Achievements',
      slugField: 'title',
      path: 'src/content/achievements/*',
      entryLayout: 'content',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        issuer: fields.text({ label: 'Issuer / Organization' }),
        date: fields.text({ label: 'Date', description: 'e.g. "Mar 2024"' }),
        skills: fields.array(fields.text({ label: 'Skill' }), {
          label: 'Skills demonstrated',
          itemLabel: (props) => props.value ?? '',
        }),
        image: fields.image({
          label: 'Preview image',
          directory: 'src/assets/images/achievements',
          publicPath: '../../assets/images/achievements/',
        }),
        certificate: fields.file({
          label: 'Certificate (PDF)',
          directory: 'public/achievements',
          publicPath: '/achievements',
        }),
        credentialUrl: fields.url({ label: 'Credential / verification URL' }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        order: fields.integer({ label: 'Order', defaultValue: 0 }),
        description: fields.document({
          label: 'Description',
          formatting: true,
          links: true,
        }),
      },
    }),
  },
})
