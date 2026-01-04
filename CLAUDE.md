# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **Frontend Framework**: Vue 3 (Composition API with `<script setup>`)
- **UI Library**: Vuetify 3 (Material Design component framework)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Deployment**: Firebase Hosting with GitHub Actions CI/CD

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build
npm run preview

# Lint and fix code
npm run lint
```

## Code Architecture

### Application Structure

This is a single-page portfolio website with a section-based layout. The app uses Vue 3's Composition API throughout with `<script setup>` syntax.

**Main entry**: [src/main.ts](src/main.ts) bootstraps the app and registers Vuetify plugin.

**Root component**: [src/App.vue](src/App.vue) renders view components in sequence:
- `hero.vue` - Landing section
- `about.vue` - About section
- `experience.vue` - Projects and experience timeline
- `skills.vue` - Skills section
- Scroll-to-top button (conditionally shown)

### Composables Pattern

Project data is managed using the composables pattern. Composables are functions that return reactive refs and encapsulate reusable logic.

**Data composables**:
- [src/composables/useFortyTwo.ts](src/composables/useFortyTwo.ts) - Returns projects from 42 School curriculum
- [src/composables/useRegProjects.ts](src/composables/useRegProjects.ts) - Returns personal/professional projects

Both return `Ref<useExp[]>` where `useExp` is defined in [src/interfaces/useExp.ts](src/interfaces/useExp.ts):

```typescript
interface useExp {
  name: string
  msg: string        // Project description (can include <br> tags)
  img: string[]      // Array of image paths
  ico: string[]      // Array of MDI icon names
  date: string       // Date range string
  repo: string       // GitHub repo URL
  link?: string      // Optional external link (e.g., LinkedIn article)
}
```

### Reusable Components

**[src/components/timelineEntry.vue](src/components/timelineEntry.vue)**:
- Displays individual project entries in timeline format
- Uses Vuetify's `v-timeline-item` and expansion panels
- Handles responsive layout differences (timeline vs. card layout)
- Splits text on `<br>` tags and truncates first paragraph with "..." for preview

**[src/components/imageDialog.vue](src/components/imageDialog.vue)**:
- Displays project images in a dialog/carousel

### View Components

View components in `src/views/` consume composables and render sections:

- Use `useFortyTwo()` and `useRegProjects()` to get project data
- Implement responsive layouts with media queries
- Use Vuetify components (`v-timeline`, `v-parallax`, etc.)
- Handle screen size breakpoints (900px for desktop vs mobile layout)

### Path Aliases

Use `@/` prefix for imports from `src/`:
```typescript
import { registerPlugins } from '@/plugins'
```

### Styling

- Global styles in [src/App.vue](src/App.vue) (`.header-wrapper`, `.flex-center`, scroll customization)
- Component-scoped styles use `<style>` blocks
- Vuetify theme config in [src/styles/settings.scss](src/styles/settings.scss)
- Uses custom scrollbar hiding and smooth scroll behavior

## Deployment

**Firebase Hosting** is configured with [firebase.json](firebase.json) to serve the `dist/` directory.

**CI/CD Pipelines** in `.github/workflows/`:
- `firebase-hosting-merge.yml` - Deploys to production on merge to main
- `firebase-hosting-pull-request.yml` - Creates preview deploys for PRs

Build process runs TypeScript type checking before build:
```bash
vue-tsc --noEmit && vite build
```

## Adding New Projects

To add a new project to the portfolio:

1. Add project data to the appropriate composable:
   - [src/composables/useFortyTwo.ts](src/composables/useFortyTwo.ts) for 42 School projects
   - [src/composables/useRegProjects.ts](src/composables/useRegProjects.ts) for personal projects

2. Push new object conforming to `useExp` interface to the `value` array

3. Add project images to `public/` directory (referenced in `img` array)

4. Use MDI icon names for `ico` array (e.g., `"mdi-vuejs"`, `"mdi-docker"`)

## Notes

- No router is configured - this is a single-page app with anchor links
- Dev server runs on port 3000 (or port 80 with `--host` flag in package.json scripts)
- ESLint rule `vue/multi-word-component-names` is disabled
- Vuetify auto-import is enabled in [vite.config.ts](vite.config.ts)
