/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#2563eb',      // Professional blue
          secondary: '#7c3aed',    // Purple accent
          accent: '#0ea5e9',       // Bright blue
          success: '#10b981',      // Green for CTAs
          warning: '#f59e0b',
          error: '#ef4444',
          background: '#ffffff',
          surface: '#f8fafc',
        },
      },
      dark: {
        colors: {
          primary: '#3b82f6',      // Professional blue
          secondary: '#8b5cf6',    // Purple accent
          accent: '#06b6d4',       // Cyan highlight
          success: '#34d399',      // Green CTAs
          warning: '#fbbf24',
          error: '#f87171',
          background: '#0f172a',   // Deep blue-gray (replaces #1c1c1c)
          surface: '#1e293b',      // Card surfaces
          'surface-variant': '#334155',  // Elevated surfaces
        },
      },
    },
  },
})
