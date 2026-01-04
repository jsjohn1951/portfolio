<script setup lang="ts">
function redir(addr: string) {
	window.location.href = addr;
}
</script>

<template>
	<section id="TSkills" style="width: 100%; min-height: 100vh; background-color: #1c1c1c;">
		<v-parallax class="flex-center text-white" style="top: 0px; height: 28vh; width: 100%;" src="../assets/pix.jpg">
			<h1 class="text-h1">Technical Skills</h1>
		</v-parallax>
		<section class="flex-center flex-column text-white" style="width: 100%; gap: 30px; min-height: 72vh; padding: 20px;">
			<v-container class="flex-center flex-column" style="width: min(60vw, 95vw);">

				<!-- AI-Assisted Development -->
				<div class="flex-center flex-column" style="margin-bottom: 20px;">
					<h3 class="text-h4 font-weight-thin mb-3">🤖 AI-Assisted Development</h3>
					<v-row>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-robot" @click="redir('https://claude.ai/code')" size="large">Claude Code</v-btn>
							<v-btn variant="text" prepend-icon="mdi-robot-excited" @click="redir('https://www.perplexity.ai/')" size="large">Perplexity AI</v-btn>
							<v-btn variant="text" prepend-icon="mdi-brain" size="large">AI-Powered Debugging</v-btn>
							<v-btn variant="text" prepend-icon="mdi-lightning-bolt" size="large">Rapid Prototyping</v-btn>
						</v-col>
					</v-row>
				</div>

				<!-- Frontend Development -->
				<div class="flex-center flex-column" style="margin-bottom: 20px;">
					<h3 class="text-h5 font-weight-thin mb-3">⚛️ Frontend Development</h3>
					<v-row>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-react" @click="redir('https://react.dev/')" size="large">React</v-btn>
							<v-btn variant="text" prepend-icon="mdi-react" @click="redir('https://nextjs.org/')" size="large">Next.js</v-btn>
							<v-btn variant="text" prepend-icon="mdi-cellphone" size="large">React Native</v-btn>
						</v-col>
						<v-col class="flex-center flex-column">
							<v-btn variant="text" prepend-icon="mdi-vuejs" @click="redir('https://vuejs.org/')" size="large">Vue.js</v-btn>
							<v-btn variant="text" prepend-icon="mdi-nuxt" @click="redir('https://nuxt.com/')" size="large">Nuxt.js</v-btn>
							<v-btn variant="text" prepend-icon="$vuetify" @click="redir('https://vuetifyjs.com/en/')" size="large">Vuetify</v-btn>
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
				<div class="flex-center flex-column">
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

			</v-container>
		</section>
	</section>
</template>