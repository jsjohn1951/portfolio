<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useActiveSection } from '@/composables/useActiveSection'

const { mobile } = useDisplay()
const { activeSection } = useActiveSection()

const drawer = ref(false)
const scrolled = ref(false)

const navItems = [
  { title: 'Home', id: 'hero' },
  { title: 'About', id: 'About' },
  { title: 'Experience', id: 'exp' },
  { title: 'Skills', id: 'TSkills' },
]

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop

  // Update scrolled state for elevation
  scrolled.value = scrollTop > 50
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  // Close drawer on mobile after clicking
  if (mobile.value) {
    drawer.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial call
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- App Bar -->
  <v-app-bar
    :elevation="scrolled ? 4 : 0"
    :style="{
      backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
    }"
    app
    fixed
    height="64"
  >
    <v-container class="d-flex align-center px-4">
      <!-- Logo/Name -->
      <v-btn
        variant="text"
        class="text-h6 font-weight-bold"
        @click="scrollToSection('hero')"
        style="text-transform: none;"
      >
        <span class="gradient-text">WJS</span>
      </v-btn>

      <v-spacer />

      <!-- Desktop Navigation Links -->
      <template v-if="!mobile">
        <v-btn
          v-for="item in navItems"
          :key="item.id"
          :variant="activeSection === item.id ? 'flat' : 'text'"
          :color="activeSection === item.id ? 'primary' : ''"
          class="mx-1"
          @click="scrollToSection(item.id)"
        >
          {{ item.title }}
        </v-btn>

        <!-- Download Resume Button -->
        <v-btn
          color="success"
          variant="outlined"
          prepend-icon="mdi-download"
          href="/Willem_Smith_Resume.pdf"
          download
          class="ml-3"
        >
          Resume
        </v-btn>
      </template>

      <!-- Mobile Hamburger -->
      <v-app-bar-nav-icon
        v-if="mobile"
        @click="drawer = !drawer"
        aria-label="Open navigation menu"
      />
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    width="280"
  >
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-account"
        title="Willem J. Smith"
        subtitle="Full Stack Developer"
        class="mb-4"
      />

      <v-divider class="mb-2" />

      <v-list-item
        v-for="item in navItems"
        :key="item.id"
        :active="activeSection === item.id"
        @click="scrollToSection(item.id)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <v-divider class="my-2" />

      <!-- Mobile Resume Download -->
      <v-list-item
        prepend-icon="mdi-download"
        title="Download Resume"
        href="/Willem_Smith_Resume.pdf"
        download
        color="success"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  letter-spacing: 0.05em;
}

.v-btn:hover {
  transform: translateY(-1px);
}
</style>
