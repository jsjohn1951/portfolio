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
		<section class="flex-center flex-column text-white" style="width: 100%; gap: 20px; min-height: 72vh; padding: 20px;">
			<v-container class="flex-center flex-column" style="width: 60vw;">
				<v-row>
	
					<v-col class="flex-center flex-column">
						<v-btn variant="text" prepend-icon="$vuetify" @click="redir('https://vuetifyjs.com/en/')" size="x-large">Vuetify</v-btn>
						<v-btn variant="text" prepend-icon="mdi-vuejs" @click="redir('https://vuejs.org/')" size="x-large">Vue.js</v-btn>
						<v-btn variant="text" prepend-icon="mdi-nuxt" @click="redir('https://nuxt.com/')" size="x-large">Nuxt.js</v-btn>
						<v-btn variant="text" prepend-icon="mdi-firebase" @click="redir('https://firebase.google.com/')" size="x-large">Firebase</v-btn>
						<v-btn variant="text" prepend-icon="mdi-developer-board" @click="redir('https://www.jetbrains.com/help/youtrack/cloud/agile-board-glossary.html#:~:text=Definition,board%20represent%20the%20development%20cycle.')" size="x-large">Agile Board</v-btn>
					</v-col>
	
					<v-col class="flex-center flex-column">
						<v-btn variant="text" prepend-icon="mdi-language-typescript" @click="redir('https://www.typescriptlang.org/')" size="x-large">Typescript</v-btn>
						<v-btn variant="text" prepend-icon="mdi-language-javascript" @click="redir('https://en.wikipedia.org/wiki/JavaScript')" size="x-large">Javascript</v-btn>
						<v-btn variant="text" prepend-icon="mdi-language-html5" @click="redir('https://en.wikipedia.org/wiki/HTML')" size="x-large">Html</v-btn>
						<v-btn variant="text" prepend-icon="mdi-language-css3" @click="redir('https://en.wikipedia.org/wiki/CSS')" size="x-large">CSS</v-btn>
						<v-btn variant="text" prepend-icon="mdi-language-php" @click="redir('https://www.php.net/')" size="x-large">PHP</v-btn>
					</v-col>
	
					<v-col class="flex-center flex-column">
						<v-btn variant="text" prepend-icon="mdi-linux" @click="redir('https://en.wikipedia.org/wiki/Linux')" size="x-large">Linux</v-btn>
						<v-btn variant="text" prepend-icon="mdi-language-c" @click="redir('https://en.wikipedia.org/wiki/C_(programming_language)')" size="x-large">programming</v-btn>
						<v-btn variant="text" prepend-icon="mdi-language-cpp" @click="redir('https://en.wikipedia.org/wiki/C%2B%2B')" size="x-large">programming</v-btn>
						<v-btn variant="text" prepend-icon="mdi-docker" @click="redir('https://www.docker.com/')" size="x-large">Docker</v-btn>
						<v-btn variant="text" prepend-icon="mdi-coffee-maker" @click="redir('https://www3.nd.edu/~zxu2/acms60212-40212/Makefile.pdf')" size="x-large">Makefile</v-btn>
					</v-col>
	
					<v-col class="flex-center flex-column">
						<v-btn variant="text" prepend-icon="mdi-docker" @click="redir('https://docs.docker.com/compose/')" size="x-large">Docker Compose</v-btn>
						<v-btn variant="text" prepend-icon="mdi-language-java" @click="redir('https://www.java.com/en/download/help/whatis_java.html')" size="x-large">Java</v-btn>
						<v-btn variant="text" prepend-icon="mdi-wordpress" @click="redir('https://wordpress.com/')" size="x-large">Wordpress</v-btn>
						<v-btn variant="text" prepend-icon="mdi-database" @click="redir('https://mariadb.org/')" size="x-large">Mariadb</v-btn>
						<v-btn variant="text" prepend-icon="mdi-git" @click="redir('https://git-scm.com/')" size="x-large">Git</v-btn>
					</v-col>
	
					<v-col>
					</v-col>
				</v-row>
			</v-container>
		</section>
	</section>
</template>