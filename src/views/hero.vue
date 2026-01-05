<script lang="ts" setup>
import { onMounted } from 'vue';
import { ref } from 'vue'

const expand = ref(false)
onMounted(() => {
	expand.value = true
})
</script>

<template>
	<header id="hero" class="header-wrapper">
		<v-parallax
			class="flex-center"
			style="top: 0px; height: 100vh;"
			src="../assets/hero.jpg"
			aria-label="Hero section with professional portfolio background"
		>
			<div class="flex-center flex-column">
				<div class="d-flex flex-column fill-height justify-center align-center text-white">


					<v-expand-x-transition>
						<div v-show="expand" class="hero-content flex-column flex-center">
							<h1 class="hero-title font-weight-thin mb-4">
								Willem J. Smith
							</h1>
							<div class="divider" />
							<h2 class="hero-subtitle font-weight-thin mb-4">
								Full Stack Developer
							</h2>
							<p class="hero-description font-weight-light mt-4">
								Building production-grade web applications with Docker, PostgreSQL, and modern JavaScript frameworks
							</p>

							<!-- CTA Buttons -->
							<div class="hero-buttons d-flex gap-4 mt-8">
								<v-btn
									href="/Willem_Smith_Resume.pdf"
									download
									color="success"
									size="large"
									elevation="8"
									prepend-icon="mdi-download"
									aria-label="Download resume PDF"
									class="hero-btn"
								>
									View Resume
								</v-btn>

								<v-btn
									href="#About"
									color="primary"
									size="large"
									variant="outlined"
									prepend-icon="mdi-email"
									aria-label="Scroll to contact section"
									class="hero-btn"
								>
									Contact Me
								</v-btn>
							</div>
						</div>
					</v-expand-x-transition>
				</div>
				<div style="width: 5em;">
					<a href="#About" class="flex-center flex-column" style="width: 5em" aria-label="Scroll to about section">
						<div class="scrolldown" style="width: 2em; height: 2em; background-color: transparent; z-index: 80; 
		            bottom: 25px; position: absolute; border-width: 0 0.25em 0.25em 0; border-style: solid;
					border-color: antiquewhite; animation: scrolldown 1.2s ease-in-out infinite 0.15s;">
						</div>
						<div class="scrolldown" style="width: 2em; height: 2em; background-color: transparent; z-index: 80; 
		            bottom: 40px; position: absolute; border-width: 0 0.25em 0.25em 0; border-style: solid;
					border-color: antiquewhite; animation: scrolldown 1.2s ease-in-out infinite;">
						</div>
					</a>
				</div>
			</div>
		</v-parallax>
	</header>
</template>

<style scoped>
.hero-content {
	height: 600px;
	width: min(40vw, 90vw);
	gap: 10px;
}

.hero-title {
	font-size: 3.75rem;
	line-height: 1.2;
}

.hero-subtitle {
	font-size: 3rem;
	line-height: 1.2;
}

.hero-description {
	font-size: 1.25rem;
	max-width: 600px;
	text-align: center;
}

.hero-buttons {
	gap: 1rem;
	flex-wrap: wrap;
	justify-content: center;
}

/* Mobile responsive styles */
@media (max-width: 900px) {
	.hero-content {
		height: auto;
		min-height: 500px;
		width: 90vw;
		padding: 20px;
	}

	.hero-title {
		font-size: 2rem;
		line-height: 1.3;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		line-height: 1.3;
	}

	.hero-description {
		font-size: 1rem;
		max-width: 90vw;
		padding: 0 10px;
	}

	.hero-buttons {
		flex-direction: column;
		width: 100%;
		gap: 0.75rem;
	}

	.hero-btn {
		width: 100%;
		max-width: 280px;
	}
}

@media (max-width: 600px) {
	.hero-title {
		font-size: 1.75rem;
	}

	.hero-subtitle {
		font-size: 1.25rem;
	}

	.hero-description {
		font-size: 0.9rem;
	}
}
</style>