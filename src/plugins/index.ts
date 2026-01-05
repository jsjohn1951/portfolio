/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import { createHead } from '@unhead/vue/client'
// import router from '../router'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  const head = createHead()

  app
    .use(vuetify)
    .use(head)
    // .use(router)
}
