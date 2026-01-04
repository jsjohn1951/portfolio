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
					<h2 class="text-h2 font-weight-thin mb-4">About Me</h2>
					<div class="divider" style="width: 13vw;"></div>
					<h5 class="text-h5 font-weight-thin mb-4">Building Production Apps with AI-Assisted Development</h5>
				</div>
				<v-row style="max-width: 90vw;">
					<v-col class="flex-center">
						<div style="height: fit-content; width: fit-content; padding: 20px;">
							<v-img :width="195" cover src="../assets/cv_img.jpeg"/>
						</div>
					</v-col>
					<v-col class="flex-center">
						<p class="text-body-1 font-weight-regular" style="text-align: justify; padding: 20px;">
							"The moment we stop learning is the moment we stagnate, and though learning in the real world is seldom unaccompanied by hardship it's also an experience."
							<br>
							<br> - Willem J. Smith
						</p>
					</v-col>
				</v-row>

				<div class="flex-center flex-column" style="max-width: 90vw;">
					<div class="text-h5" style="padding: 20px;">AI-Assisted Full Stack Developer</div>
					<div class="divider" style="width: 5vw;"/>
					<p style="text-align: justify;">
						<br> &emsp; I leverage cutting-edge AI development tools including Claude Code and Perplexity to rapidly architect, develop, and optimize production applications. With 9 months of professional experience at Ratchet Capital, I've built and deployed multiple production systems including Megastars.ai (influencer marketing platform), ioMega Energy, and Trescudo.<br>
						<br> &emsp; My approach combines modern full-stack development (Next.js, React, Supabase, Cloudflare) with AI-assisted problem-solving to deliver scalable, SEO-optimized solutions. I specialize in turning complex requirements into production-ready applications through intelligent prompting and iterative AI collaboration.<br>
						<br> &emsp; Currently developing Megastars.ai v2 with Next.js + Supabase architecture (Nov 2024 - Present). Previously built microservices with Golang, OAuth services with Express.js, and React Native mobile applications. Completed 42 Abu Dhabi's intensive software engineering program (2021-2023).<br>
					</p>
				</div>

				<v-theme-provider theme="dark">
					<!-- <div class="flex-between" style="width: 100%; display: flex; flex-direction: row; justify-content: space-between; padding-top: 20px;"> -->

						<v-row style="max-width: 90vw; padding-top: 20px;">
						<v-col style="width: 60vw;">
							<v-expansion-panels class="flex-column" style="min-width: 30vw;" :readonly="true" v-model="panel">
								<v-expansion-panel expand value="study">
									<v-expansion-panel-title :ripple="true" :hide-actions="true">
										<p class="text-body-1">Education & Professional Background</p>
									</v-expansion-panel-title>
									<v-expansion-panel-text>
										<p class="text-body-1">
											&emsp; Currently employed at Ratchet Capital (April 2024 - Present) as a Full Stack & DevOps Developer, building production systems including Megastars.ai, ioMega Energy, and Trescudo.<br><br>&emsp;
											Completed 42 Abu Dhabi's intensive software engineering program (2021-2023), where I developed foundational skills in systems programming, web development, and DevOps through hands-on project-based learning. Self-taught in AI-assisted development methodologies using Claude Code and Perplexity AI.<br><br>&emsp;
											Below you'll find both my professional work at Ratchet Capital and selected academic projects from 42 Abu Dhabi.
										</p>
									</v-expansion-panel-text>
								</v-expansion-panel>

							</v-expansion-panels>
						</v-col>
	
						<v-col>
							<v-expansion-panels class="flex-column" style="min-width: 10vw;" :readonly="true" v-model="panel">
								<v-expansion-panel expand value="contact">
									<v-expansion-panel-title :ripple="true" :hide-actions="true">
										<p class="text-body-1">Contact Me</p>
									</v-expansion-panel-title>
									<v-expansion-panel-text>
										<p class="text-body-1">
											Name: &emsp; Willem Johannes Smith<br>
											Email: &emsp; <a href="mailto: wismith@student.42AbuDhabi.ae" style="overflow-wrap: break-word;">wismith@student.42AbuDhabi.ae</a><br><br>
										</p>
										<div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;">
											<v-btn @click="redir('https://www.linkedin.com/in/willems24/')" icon="mdi-linkedin"/>
											<v-btn @click="redir('https://github.com/jsjohn1951')" icon="mdi-git"/>
										</div>
									</v-expansion-panel-text>
								</v-expansion-panel>

							</v-expansion-panels>
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
	background-color: #1c1c1c;
	top: 0px;
	left: 0px;
	height: fit-content;
	width: 100%;
}

.content-wrapper {
	height: 100%;
}
</style>