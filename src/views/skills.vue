<script setup lang="ts">
function redir(addr: string)
{
	window.location.href = addr;
}
</script>

<template>
	<section id="TSkills">
		<v-parallax class="flex-center text-white" style="top: 0px; height: 28vh;" src="../assets/pix.jpg">
			<h1 class="text-h1">Technical Skills</h1>
		</v-parallax>
		<section class="header-wrapper flex-center flex-column text-white" style="gap: 20px; height: fit-content; padding: 20px;">
			<div class="flex-center flex-column" style="height: 72vh; gap: 100px; width: 50vw;">
				<div class="flex-center flex-row">
					<v-btn @click="redir('https://vuetifyjs.com/en/')" variant="plain">
						<v-icon size="100px" icon="$vuetify"/>
						<p>Vuetify</p>
					</v-btn>
					<v-btn @click="redir('https://vuejs.org/')" variant="plain">
						<v-icon size="100px" icon="mdi-vuejs"/>
						<p>Vue.js</p>
					</v-btn>
					<v-btn @click="redir('https://nuxt.com/')" variant="plain">
						<v-icon size="100px" icon="mdi-nuxt"/>
						<p>Nuxt</p>
					</v-btn>
					<v-btn @click="redir('https://firebase.google.com/')" variant="plain">
						<v-icon size="100px" icon="mdi-firebase"/>
						<p>Firebase</p>
					</v-btn>
				</div>
				<div class="flex-center flex-row">
					<v-btn @click="redir('https://www.jetbrains.com/help/youtrack/cloud/agile-board-glossary.html#:~:text=Definition,board%20represent%20the%20development%20cycle.')" variant="plain">
						<v-icon size="100px" icon="mdi-developer-board"/>
						<p>Agile Board</p>
					</v-btn>
					<v-btn @click="redir('https://www.typescriptlang.org/')" variant="plain">
						<v-icon size="100px" icon="mdi-language-typescript"/>
						<p>Typescript</p>
					</v-btn>
					<v-btn @click="redir('https://en.wikipedia.org/wiki/HTML')" variant="plain">
						<v-icon size="100px" icon="mdi-language-html5"/>
						<p>Html5</p>
					</v-btn>
					<v-btn @click="redir('https://en.wikipedia.org/wiki/CSS')" variant="plain">
						<v-icon size="100px" icon="mdi-language-css3"/>
						<p>CSS</p>
					</v-btn>
				</div>
				<div class="flex-center flex-row">
					<v-btn @click="redir('https://en.wikipedia.org/wiki/JavaScript')" variant="plain">
						<v-icon size="100px" icon="mdi-language-javascript"/>
						<p>Language</p>
					</v-btn>
					<v-btn @click="redir('https://www.php.net/')" variant="plain">
						<v-icon size="100px" icon="mdi-language-php"/>
						<p> &nbsp; Language</p>
					</v-btn>
					<v-btn @click="redir('https://en.wikipedia.org/wiki/Linux')" variant="plain">
						<v-icon size="100px" icon="mdi-linux"/>
						<p>Linux</p>
					</v-btn>
					<v-btn @click="redir('https://www.docker.com/')" variant="plain">
						<v-icon size="100px" icon="mdi-docker"/>
						<p>Docker</p>
					</v-btn>
				</div>
				<div class="flex-center flex-row">
					<v-btn @click="redir('https://en.wikipedia.org/wiki/C_(programming_language)')" variant="plain">
						<v-icon size="100px" icon="mdi-language-c"/>
						<p>Language</p>
					</v-btn>
					<v-btn @click="redir('https://en.wikipedia.org/wiki/C%2B%2B')" variant="plain">
						<v-icon size="100px" icon="mdi-language-cpp"/>
						<p> &nbsp; Language</p>
					</v-btn>
					<v-btn @click="redir('https://www.java.com/en/download/help/whatis_java.html')" variant="plain">
						<v-icon size="100px" icon="mdi-language-java"/>
						<p>Java</p>
					</v-btn>
					<v-btn @click="redir('https://www3.nd.edu/~zxu2/acms60212-40212/Makefile.pdf')" variant="plain">
						<v-icon size="100px" icon="mdi-coffee-maker"/>
						<p>Makefile</p>
					</v-btn>
				</div>
				<div class="flex-center flex-row">
					<v-btn @click="redir('https://docs.docker.com/compose/')" variant="plain">
						<v-icon size="100px" icon="mdi-docker"/>
						<p>Docker Compose</p>
					</v-btn>
					<v-btn @click="redir('https://wordpress.com/')" variant="plain">
						<v-icon size="100px" icon="mdi-wordpress"/>
						<p>Wordpress</p>
					</v-btn>
					<v-btn @click="redir('https://mariadb.org/')" variant="plain">
						<v-icon size="100px" icon="mdi-database"/>
						<p>Mariadb Database</p>
					</v-btn>
					<v-btn @click="redir('https://git-scm.com/')" variant="plain">
						<v-icon size="100px" icon="mdi-git"/>
						<p>Git Version Control</p>
					</v-btn>
				</div>
			</div>
		</section>
	</section>
</template>