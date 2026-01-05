<script lang="ts" setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const quickLinks = [
  { title: 'Home', id: 'hero' },
  { title: 'About', id: 'About' },
  { title: 'Experience', id: 'exp' },
  { title: 'Skills', id: 'TSkills' },
]

const contactLinks = [
  { icon: 'mdi-email', href: 'mailto:wismith@student.42AbuDhabi.ae', label: 'Email Willem Smith' },
  { icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/willems24/', label: 'LinkedIn' },
  { icon: 'mdi-github', href: 'https://github.com/jsjohn1951', label: 'GitHub' },
  { icon: 'mdi-download', href: '/Willem_Smith_Resume.pdf', label: 'Resume', download: true },
]

const currentYear = computed(() => new Date().getFullYear())

function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="footer-wrapper">
    <v-container>
      <v-row>
        <!-- Section 1: Quick Links -->
        <v-col cols="12" md="4" class="footer-section">
          <h3 class="footer-title mb-3">Quick Links</h3>
          <div class="d-flex flex-column">
            <v-btn
              v-for="link in quickLinks"
              :key="link.id"
              variant="text"
              size="small"
              @click="scrollToSection(link.id)"
              class="justify-start"
            >
              {{ link.title }}
            </v-btn>
          </div>
        </v-col>

        <!-- Section 2: Contact Info -->
        <v-col cols="12" md="4" class="footer-section">
          <h3 class="footer-title mb-3">Connect</h3>
          <div class="d-flex justify-center" style="gap: 0.5rem;">
            <v-btn
              v-for="contact in contactLinks"
              :key="contact.icon"
              :icon="contact.icon"
              :href="contact.href"
              :download="contact.download"
              variant="text"
              :aria-label="contact.label"
            />
          </div>
        </v-col>

        <!-- Section 3: Copyright -->
        <v-col cols="12" md="4" class="footer-section">
          <div class="text-center">
            <p class="text-body-2 mb-1">&copy; {{ currentYear }} Willem J. Smith</p>
            <p class="text-caption" style="opacity: 0.7;">Built with Vue 3 & Vuetify</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  background-color: rgb(var(--v-theme-surface));
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  padding: 40px 20px 80px 20px; /* Extra bottom padding for scroll-to-top button */
  width: 100%;
  color: white;
}

.footer-title {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.9;
}

.v-btn {
  text-transform: none;
}

.v-btn:hover {
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

@media (max-width: 900px) {
  .footer-wrapper {
    padding: 30px 15px 80px 15px;
  }

  .footer-section {
    text-align: center;
    margin-bottom: 20px;
  }

  .footer-section .d-flex {
    justify-content: center;
    align-items: center;
  }
}
</style>
