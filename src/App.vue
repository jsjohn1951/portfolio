<script lang="ts" setup>
import { Ref, ref, defineAsyncComponent } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import StructuredData from './components/StructuredData.vue'

// Lazy load view components for code splitting
const hero = defineAsyncComponent(() => import('./views/hero.vue'))
const about = defineAsyncComponent(() => import('./views/about.vue'))
const exp = defineAsyncComponent(() => import('./views/experience.vue'))
const skills = defineAsyncComponent(() => import('./views/skills.vue'))
const FooterComponent = defineAsyncComponent(() => import('./components/Footer.vue'))

const top: Ref<number> = ref(document.documentElement.scrollTop)

function onScroll ()
{
	top.value = document.documentElement.scrollTop;
}

window.addEventListener("scroll", onScroll);

</script>

<template>
	<v-app>
		<!-- Structured Data (JSON-LD for SEO) -->
		<StructuredData />

		<NavigationBar />

		<v-main>
			<!-- Suspense boundaries for lazy-loaded components -->
			<Suspense>
				<template #default>
					<hero/>
				</template>
				<template #fallback>
					<v-skeleton-loader type="image" height="100vh" />
				</template>
			</Suspense>

			<Suspense>
				<template #default>
					<about/>
				</template>
				<template #fallback>
					<v-skeleton-loader type="article, actions" height="600px" />
				</template>
			</Suspense>

			<Suspense>
				<template #default>
					<exp/>
				</template>
				<template #fallback>
					<v-skeleton-loader type="list-item@5" height="800px" />
				</template>
			</Suspense>

			<Suspense>
				<template #default>
					<skills/>
				</template>
				<template #fallback>
					<v-skeleton-loader type="button@12" height="600px" />
				</template>
			</Suspense>

			<Suspense>
				<template #default>
					<FooterComponent/>
				</template>
				<template #fallback>
					<v-skeleton-loader type="list-item@3" height="200px" />
				</template>
			</Suspense>
		</v-main>

		<v-btn
			v-if="top"
			aria-label="Scroll to top"
			icon
			color="primary"
			size="large"
			elevation="4"
			style="position: fixed; bottom: 2rem; right: 2rem; z-index: 999;"
			href="#"
		>
			<v-icon>mdi-chevron-up</v-icon>
		</v-btn>
	</v-app>
</template>

<style>
/* CSS Variables for gradients and theme */
:root {
	--gradient-hero: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
	--gradient-accent: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
	--gradient-surface: linear-gradient(135deg, #1e293b 0%, #334155 100%);
}

.divider {
	height: 1px;
	width: 23vw;
	background-color: white;
}

.header-wrapper {
	background-color: rgb(var(--v-theme-background));
	top: 0px;
	left: 0px;
	height: 100vh;
	width: 100%;
}

.flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Accessibility: Focus styles */
*:focus-visible {
	outline: 2px solid rgb(var(--v-theme-primary));
	outline-offset: 2px;
	border-radius: 4px;
}

/* Remove default focus outline */
*:focus {
	outline: none;
}

html {
	overflow-y: auto;
	scroll-behavior: smooth;
	scrollbar-width: none;  /* Firefox */
	-ms-overflow-style: none;  /* IE and Edge */
}

html::-webkit-scrollbar {
	display: none;
}

/* Scroll down animation */
.scrolldown {
	transform: translateY(0%) rotate(45deg);
	opacity: 0;
}

@keyframes scrolldown {
	0% {
		transform: translateY(20%) rotate(45deg);
		opacity: 0.7;
	}
	50% {
		transform: translateY(0%) rotate(45deg);
		opacity: 0.2;
	}
	100% {
		transform: translateY(20%) rotate(45deg);
		opacity: 0.7;
	}
}

/* Button hover effects */
.v-btn:hover {
	transform: translateY(-2px);
	transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}
</style>
