<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useStructuredData } from '@/composables/useStructuredData'

const {
  personSchema,
  websiteSchema,
  breadcrumbSchema,
  portfolioProjectsSchema,
  organizationSchema,
  profilePageSchema,
} = useStructuredData()

// Inject all structured data schemas into the page head
useHead({
  script: [
    // Person Schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(personSchema.value),
    },
    // Website Schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(websiteSchema.value),
    },
    // Breadcrumb Schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema.value),
    },
    // Organization Schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationSchema.value),
    },
    // Profile Page Schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(profilePageSchema.value),
    },
    // Portfolio Projects Schemas (multiple)
    ...portfolioProjectsSchema.value.map((project) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(project),
    })),
  ],
})
</script>

<template>
  <!-- This component doesn't render anything visible -->
  <div style="display: none;" />
</template>
