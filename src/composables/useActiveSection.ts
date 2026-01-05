import { ref, onMounted, onUnmounted, Ref } from 'vue'

export function useActiveSection() {
  const activeSection: Ref<string> = ref('')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    // Define section IDs to observe
    const sectionIds = ['hero', 'About', 'exp', 'TSkills']

    // Create intersection observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            // Update active section when 30%+ is visible
            activeSection.value = entry.target.id
          }
        })
      },
      {
        threshold: [0.3], // Trigger when 30% of section is visible
        rootMargin: '-10% 0px -10% 0px', // Offset for better detection
      }
    )

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer?.observe(element)
      }
    })
  })

  onUnmounted(() => {
    // Clean up observer
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    activeSection,
  }
}
