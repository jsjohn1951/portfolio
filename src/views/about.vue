<script setup lang="ts">
import { ref } from 'vue'

const panel = ref(['contact', 'study']);

function redir(url: string)
{
	window.location.href = url;
}
</script>

<template>
	<!-- <section class="about-wrapper"> -->
	<section id="About" class="about-wrapper flex-center flex-column" style="padding-top: 50px; height: fit-content; min-height: 100vh;">
		<div class="d-flex" style="height: 100%;">
			<div class="flex-column flex-center text-white" style="height: fit-content; max-width: 900px;">
				<div class="flex-column flex-center" style="gap: 10px;">
					<h2 class="text-h4 font-weight-thin mb-4">About Me</h2>
					<div class="divider" style="width: 10vw;"></div>
					<h5 class="about-subtitle font-weight-thin mb-4">Building Production Apps with AI-Assisted Development</h5>
				</div>
				<v-row style="max-width: 90vw;">
					<v-col class="flex-center">
						<div style="height: fit-content; width: fit-content; padding: 20px;">
							<v-img
								:width="250"
								cover
								src="../assets/profilePic-new.jpeg"
								alt="Willem Smith professional headshot"
								style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);"
							/>
						</div>
					</v-col>
					<v-col class="flex-center">
						<p class="text-body-1 font-weight-regular" style="text-align: justify; padding: 20px;">
							"The moment we stop learning is the moment we stagnate. While real-world learning often comes with challenges, those experiences are what shape us into better engineers."
							<br>
							<br> - Willem J. Smith
						</p>
					</v-col>
				</v-row>

				<div class="flex-center flex-column" style="max-width: 90vw;">
					<div class="text-h5" style="padding: 20px;">Full Stack Developer</div>
					<div class="divider" style="width: 5vw;"/>
					<p style="text-align: justify;">
						<br> &emsp; I'm a Full Stack Developer at Ratchet Capital, where I architect and deploy production web applications that serve real users with measurable impact. My expertise spans the entire development lifecycle—from database design and backend APIs to responsive frontend interfaces and DevOps infrastructure.<br>
						<br> &emsp; My technical foundation comes from 42 Abu Dhabi's intensive software engineering program (2021-2023), where I built systems from the ground up in C/C++. In my professional work, I specialize in building robust applications using Docker and Docker Compose for containerized environments, PostgreSQL for database architecture, Express.js and Node.js for backend services, and modern frontend frameworks including React, Next.js, and Vue.js. I leverage Makefiles to streamline development workflows and have extensive experience architecting microservices within dockerized infrastructures.<br>
						<br> &emsp; I've delivered platforms serving 500+ active users with 99.9% uptime, optimized SEO strategies achieving 95+ Lighthouse scores consistently, and built systems handling 10K+ daily requests. I combine strong engineering fundamentals with modern development practices, including AI-assisted workflows when appropriate, to build scalable and maintainable solutions.<br>
					</p>
				</div>

				<!-- Metrics Highlight Section -->
				<v-row class="mt-8" style="max-width: 90vw;">
					<v-col cols="12">
						<div class="text-h6 font-weight-light text-center mb-6">Impact & Achievements</div>
					</v-col>
					<v-col cols="6" md="3">
						<div class="flex-center flex-column">
							<div class="text-h3 font-weight-bold" style="color: rgb(var(--v-theme-success));">500+</div>
							<div class="text-body-2 text-center">Active Users Served</div>
						</div>
					</v-col>
					<v-col cols="6" md="3">
						<div class="flex-center flex-column">
							<div class="text-h3 font-weight-bold" style="color: rgb(var(--v-theme-success));">99.9%</div>
							<div class="text-body-2 text-center">Production Uptime</div>
						</div>
					</v-col>
					<v-col cols="6" md="3">
						<div class="flex-center flex-column">
							<div class="text-h3 font-weight-bold" style="color: rgb(var(--v-theme-success));">95+</div>
							<div class="text-body-2 text-center">Lighthouse SEO Scores</div>
						</div>
					</v-col>
					<v-col cols="6" md="3">
						<div class="flex-center flex-column">
							<div class="text-h3 font-weight-bold" style="color: rgb(var(--v-theme-success));">10K+</div>
							<div class="text-body-2 text-center">Daily API Requests</div>
						</div>
					</v-col>
				</v-row>

				<!-- What I Do / Services Section -->
				<div class="flex-center flex-column mt-10" style="max-width: 90vw;">
					<h3 class="text-h5 font-weight-thin mb-6">What I Build</h3>
					<v-row>
						<v-col cols="12" md="6">
							<v-card elevation="2" class="pa-4" style="height: 100%;">
								<div class="d-flex align-center mb-3">
									<v-icon color="primary" size="28" class="mr-3">mdi-web</v-icon>
									<h4 class="text-h6">Web Applications</h4>
								</div>
								<p class="text-body-2">
									Full-stack web applications using React, Next.js, Vue.js, and Node.js.
									Specializing in SEO-optimized, high-performance solutions with comprehensive backend APIs.
								</p>
							</v-card>
						</v-col>
						<v-col cols="12" md="6">
							<v-card elevation="2" class="pa-4" style="height: 100%;">
								<div class="d-flex align-center mb-3">
									<v-icon color="primary" size="28" class="mr-3">mdi-docker</v-icon>
									<h4 class="text-h6">Microservices & DevOps</h4>
								</div>
								<p class="text-body-2">
									Containerized microservice architectures using Docker, Docker Compose, and PostgreSQL.
									CI/CD pipelines with GitHub Actions for automated deployments.
								</p>
							</v-card>
						</v-col>
						<v-col cols="12" md="6">
							<v-card elevation="2" class="pa-4" style="height: 100%;">
								<div class="d-flex align-center mb-3">
									<v-icon color="success" size="28" class="mr-3">mdi-speedometer</v-icon>
									<h4 class="text-h6">SEO & Performance</h4>
								</div>
								<p class="text-body-2">
									Comprehensive SEO strategies with structured data, meta tags, and performance optimization.
									Consistently achieving 95+ Lighthouse scores across all categories.
								</p>
							</v-card>
						</v-col>
						<v-col cols="12" md="6">
							<v-card elevation="2" class="pa-4" style="height: 100%;">
								<div class="d-flex align-center mb-3">
									<v-icon color="success" size="28" class="mr-3">mdi-cellphone</v-icon>
									<h4 class="text-h6">Mobile Development</h4>
								</div>
								<p class="text-body-2">
									Cross-platform mobile applications using React Native with real-time synchronization,
									intuitive UX, and optimized performance for iOS and Android.
								</p>
							</v-card>
						</v-col>
					</v-row>
				</div>

				<v-theme-provider theme="dark">
						<v-row style="max-width: 90vw; padding-top: 20px;">
							<!-- Education Section -->
							<v-col cols="12" md="6">
								<v-card
									elevation="4"
									class="pa-6"
									style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border: 1px solid rgba(59, 130, 246, 0.2);"
								>
									<div class="d-flex align-center mb-4">
										<v-icon color="primary" size="32" class="mr-3">mdi-school</v-icon>
										<h3 class="text-h5">Education & Experience</h3>
									</div>
									<p class="text-body-1">
										Full Stack Developer at <strong>Ratchet Capital</strong> (April 2023 - Present), where I architect and maintain production systems serving thousands of users. I specialize in React/Next.js frontends, Node.js/Express.js backends, PostgreSQL databases, and Docker-based infrastructure with automated CI/CD pipelines.<br><br>
										Completed <strong>42 Abu Dhabi's</strong> intensive software engineering program (2021-2023), developing foundational skills in systems programming, algorithms, web development, and DevOps through project-based learning.
									</p>
								</v-card>
							</v-col>

							<!-- Contact Section -->
							<v-col cols="12" md="6">
								<v-card
									elevation="8"
									class="pa-6"
									style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border: 2px solid rgb(var(--v-theme-success));"
								>
									<div class="d-flex align-center mb-4">
										<v-icon color="success" size="32" class="mr-3">mdi-email</v-icon>
										<h3 class="text-h5">Let's Connect</h3>
									</div>
									<v-chip class="mb-3" color="success" variant="outlined" prepend-icon="mdi-check-circle">
										Open to Opportunities
									</v-chip>
									<p class="text-body-1 mb-4">
										<strong>Willem Johannes Smith</strong><br>
										Based in Abu Dhabi, UAE<br>
										<a
											href="mailto:wismith@student.42AbuDhabi.ae"
											style="color: rgb(var(--v-theme-primary)); text-decoration: none;"
										>
											wismith@student.42AbuDhabi.ae
										</a>
									</p>

									<!-- Contact Buttons -->
									<div class="d-flex gap-3" style="gap: 0.75rem;">
										<v-btn
											@click="redir('https://www.linkedin.com/in/willems24/')"
											color="primary"
											variant="flat"
											prepend-icon="mdi-linkedin"
											aria-label="Connect on LinkedIn"
											class="flex-grow-1"
										>
											LinkedIn
										</v-btn>
										<v-btn
											@click="redir('https://github.com/jsjohn1951')"
											color="primary"
											variant="outlined"
											prepend-icon="mdi-github"
											aria-label="View GitHub profile"
											class="flex-grow-1"
										>
											GitHub
										</v-btn>
									</div>
								</v-card>
							</v-col>
						</v-row>
				</v-theme-provider>
			</div>
		</div>
		<div style="padding-top: 40px;">
			<a href="#exp">
				<div class="scrolldown" style="width: 2em; height: 2em; background-color: transparent; 
				bottom: 25px; position: relative; border-width: 0 0.25em 0.25em 0; border-style: solid;
				border-color: antiquewhite; animation: scrolldown 1.2s ease-in-out infinite 0.15s;">
				</div>
				<div class="scrolldown" style="width: 2em; height: 2em; background-color: transparent;
				bottom: 40px; position: relative; border-width: 0 0.25em 0.25em 0; border-style: solid;
				border-color: antiquewhite; animation: scrolldown 1.2s ease-in-out infinite;">
				</div>
			</a>
		</div>
		</section>

	<!-- </section> -->
</template>

<style scoped>
.about-wrapper {
	background-color: rgb(var(--v-theme-background));
	top: 0px;
	left: 0px;
	height: fit-content;
	width: 100%;
}

.content-wrapper {
	height: 100%;
}

.v-card:hover {
	transform: translateY(-2px);
	transition: all 0.3s ease;
}

.about-subtitle {
	font-size: 1.5rem;
	line-height: 1.4;
}

/* Mobile responsive styles */
@media (max-width: 900px) {
	.about-subtitle {
		font-size: 1.125rem;
		text-align: center;
		padding: 0 15px;
	}
}

@media (max-width: 600px) {
	.about-subtitle {
		font-size: 1rem;
		padding: 0 10px;
	}
}
</style>