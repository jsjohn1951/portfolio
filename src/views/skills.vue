<script setup lang="ts">
function redir(addr: string) {
	window.location.href = addr;
}
</script>

<template>
	<section id="TSkills" style="width: 100%; min-height: 100vh; background-color: rgb(var(--v-theme-background));">
		<v-parallax
			class="flex-center text-white"
			style="top: 0px; height: 28vh; width: 100%;"
			src="/pix.jpg"
			aria-label="Technical skills and development tools background"
		>
			<h1 class="skills-main-title">Technical Skills</h1>
		</v-parallax>
		<section class="flex-center flex-column text-white" style="width: 100%; gap: 30px; min-height: 72vh; padding: 20px;">
			<v-container class="flex-center flex-column" style="width: min(60vw, 95vw);">

				<!-- Section Title -->
				<div class="flex-center flex-column" style="margin-bottom: 40px;">
					<h2 class="text-h4 font-weight-thin mb-4">Professional Skills</h2>
					<div class="divider" style="width: 10vw;"/>
				</div>

				<!-- Frontend Development -->
				<div class="flex-center flex-column" style="margin-bottom: 20px;">
					<h3 class="text-h5 font-weight-thin mb-3">⚛️ Frontend Development</h3>
					<v-row>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-react" @click="redir('https://react.dev/')" size="large" aria-label="Visit React documentation">React</v-btn>
							<v-btn variant="text" prepend-icon="mdi-react" @click="redir('https://nextjs.org/')" size="large" aria-label="Visit Next.js documentation">Next.js</v-btn>
							<v-btn variant="text" prepend-icon="mdi-cellphone" size="large" aria-label="React Native skill">React Native</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-vuejs" @click="redir('https://vuejs.org/')" size="large" aria-label="Visit Vue.js documentation">Vue.js</v-btn>
							<v-btn variant="text" prepend-icon="mdi-nuxt" @click="redir('https://nuxt.com/')" size="large" aria-label="Visit Nuxt.js documentation">Nuxt.js</v-btn>
							<v-btn variant="text" prepend-icon="$vuetify" @click="redir('https://vuetifyjs.com/en/')" size="large" aria-label="Visit Vuetify documentation">Vuetify</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-language-typescript" @click="redir('https://www.typescriptlang.org/')" size="large">TypeScript</v-btn>
							<v-btn variant="text" prepend-icon="mdi-language-html5" size="large">HTML5 & CSS3</v-btn>
							<v-btn variant="text" prepend-icon="mdi-sass" size="large">SASS/SCSS</v-btn>
						</v-col>
					</v-row>
				</div>

				<!-- Backend & Databases -->
				<div class="flex-center flex-column" style="margin-bottom: 20px;">
					<h3 class="text-h5 font-weight-thin mb-3">🔧 Backend & Databases</h3>
					<v-row>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-nodejs" @click="redir('https://nodejs.org/')" size="large">Node.js / Express.js</v-btn>
							<v-btn variant="text" prepend-icon="mdi-language-go" @click="redir('https://go.dev/')" size="large">Golang (Gin)</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-database" @click="redir('https://supabase.com/')" size="large">Supabase</v-btn>
							<v-btn variant="text" prepend-icon="mdi-database-outline" @click="redir('https://www.postgresql.org/')" size="large">PostgreSQL</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-api" size="large">RESTful APIs</v-btn>
							<v-btn variant="text" prepend-icon="mdi-security" size="large">OAuth 2.0</v-btn>
						</v-col>
					</v-row>
				</div>

				<!-- SEO & Performance -->
				<div class="flex-center flex-column" style="margin-bottom: 20px;">
					<h3 class="text-h5 font-weight-thin mb-3">📈 SEO & Performance</h3>
					<v-row>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-magnify" size="large">Structured Data (JSON-LD)</v-btn>
							<v-btn variant="text" prepend-icon="mdi-tag-multiple" size="large">Meta Tags & Open Graph</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-speedometer" size="large">Lighthouse (95+ scores)</v-btn>
							<v-btn variant="text" prepend-icon="mdi-image-filter-hdr" size="large">WebP & Lazy Loading</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-animation" size="large">GSAP Animations</v-btn>
							<v-btn variant="text" prepend-icon="mdi-chart-line" size="large">Chart.js</v-btn>
						</v-col>
					</v-row>
				</div>

				<!-- DevOps & Cloud -->
				<div class="flex-center flex-column" style="margin-bottom: 20px;">
					<h3 class="text-h5 font-weight-thin mb-3">🚀 DevOps & Cloud</h3>
					<v-row>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-docker" @click="redir('https://www.docker.com/')" size="large">Docker & Compose</v-btn>
							<v-btn variant="text" prepend-icon="mdi-github" size="large">GitHub Actions CI/CD</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-web" size="large">Nginx</v-btn>
							<v-btn variant="text" prepend-icon="mdi-cloud" size="large">Cloudflare</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-firebase" @click="redir('https://firebase.google.com/')" size="large">Firebase Hosting</v-btn>
							<v-btn variant="text" prepend-icon="mdi-sync" size="large">Rolling Deployments</v-btn>
						</v-col>
					</v-row>
				</div>

				<!-- Additional Technologies -->
				<div class="flex-center flex-column" style="margin-bottom: 20px;">
					<h3 class="text-h5 font-weight-thin mb-3">🛠️ Additional Technologies</h3>
					<v-row>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-language-python" @click="redir('https://www.python.org/')" size="large">Python</v-btn>
							<v-btn variant="text" prepend-icon="mdi-language-c" size="large">C / C++</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-linux" @click="redir('https://en.wikipedia.org/wiki/Linux')" size="large">Linux</v-btn>
							<v-btn variant="text" prepend-icon="mdi-console" size="large">Shell Scripting</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-git" @click="redir('https://git-scm.com/')" size="large">Git</v-btn>
							<v-btn variant="text" prepend-icon="mdi-coffee-maker" size="large">Makefiles</v-btn>
						</v-col>
					</v-row>
				</div>

				<!-- AI-Assisted Development -->
				<div class="flex-center flex-column">
					<h3 class="text-h5 font-weight-thin mb-3">🤖 AI-Assisted Development</h3>
					<v-row>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-robot" @click="redir('https://claude.ai/code')" size="large" aria-label="Visit Claude Code website">Claude Code</v-btn>
							<v-btn variant="text" prepend-icon="mdi-robot-excited" @click="redir('https://www.perplexity.ai/')" size="large" aria-label="Visit Perplexity AI website">Perplexity AI</v-btn>
							<v-btn variant="text" prepend-icon="mdi-brain" size="large" aria-label="AI-powered debugging skill">AI-Powered Debugging</v-btn>
							<v-btn variant="text" prepend-icon="mdi-lightning-bolt" size="large" aria-label="Rapid prototyping skill">Rapid Prototyping</v-btn>
						</v-col>
					</v-row>
				</div>

			</v-container>
		</section>
	</section>
</template>

<style scoped>
.skills-main-title {
	font-size: 6rem;
	line-height: 1.2;
}

/* Mobile responsive styles */
@media (max-width: 900px) {
	.skills-main-title {
		font-size: 2.5rem;
		padding: 0 20px;
		text-align: center;
	}
}

@media (max-width: 600px) {
	.skills-main-title {
		font-size: 2rem;
		padding: 0 15px;
	}
}
</style>