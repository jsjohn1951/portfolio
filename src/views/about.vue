<script setup lang="ts">
import { ref } from 'vue'

const panel = ref(['contact', 'study']);

function redir(url: string)
{
	window.location.href = url;
}
</script>

<template>
	<section id="About" class="about-wrapper flex-center flex-column" style="padding: 50px; height: fit-content; min-height: 100vh;">
		<div class="d-flex" style="height: 100%;">
			<div class="flex-column flex-center text-white" style="height: fit-content; max-width: 900px;">
				<div class="flex-column flex-center" style="gap: 10px;">
					<h2 class="text-h2 font-weight-thin mb-4">About Me</h2>
					<div class="divider" style="width: 13vw;"></div>
					<h5 class="text-h5 font-weight-thin mb-4">Expression Through Code & Coffee</h5>
				</div>
				<v-row>
	
					<v-col class="flex-center">
						<div style="height: fit-content; width: fit-content; padding: 20px;">
							<v-img :width="185" cover src="../assets/cv_img.jpeg"></v-img>
						</div>
					</v-col>
					<v-col class="flex-center">
						<p class="text-body-1 font-weight-regular" style="text-align: justify;">
							"The moment we stop learning is the moment we stagnate, and though learning in the real world is seldom unaccompanied by hardship it's also an experience."
							<br>
							<br> - Willem J. Smith
						</p>
					</v-col>
				</v-row>
				<div class="text-h5" style="padding: 20px;">Who am I?</div>
				<div class="divider" style="width: 5vw;"></div>

				
				<p style="text-align: justify;">
					<br> &emsp; I'm a software developer with the determination to improve the world as we know it through growth and knowledge gain. My continual learning comes from an eagerness to understand the mechanisms behind computer programs, and how logic is interpreted
					by machine and presented in a way that humans can understand.<br>
				</p>
				<v-theme-provider theme="dark">
					<div class="flex-between" style="width: 100%; display: flex; flex-direction: row; justify-content: space-between; padding-top: 20px;">
						<div class="flex-column" style="width: 60%;">
							<v-expansion-panels class="flex-column" :readonly="true" v-model="panel">
								<v-expansion-panel expand value="study">
									<v-expansion-panel-title :ripple="true" :hide-actions="true">
										<p class="text-body-1">Where did I Study Software Development?</p>
									</v-expansion-panel-title>
									<v-expansion-panel-text>
										<p class="text-body-1">
											&emsp; I was largely self-taught, but being fortunate enough to take part in the 42 curriculum at 42 Abu Dhabi, I was given the opportunity to practice 
											what I had learned.<br><br>&emsp; 
											42 offers multiple projects concerning computer programming concepts as a whole. Below are several of my completed projects.
										</p>
									</v-expansion-panel-text>
								</v-expansion-panel>

							</v-expansion-panels>
						</div>
	
						<div class="flex-column" style="width: 35%;">
							<v-expansion-panels class="flex-column" :readonly="true" v-model="panel">
								<v-expansion-panel expand value="contact">
									<v-expansion-panel-title :ripple="true" :hide-actions="true">
										<p class="text-body-1">Contact Me</p>
									</v-expansion-panel-title>
									<v-expansion-panel-text>
										<p class="text-body-1">
											Name: &emsp; Willem Johannes Smith<br>
											Email: &emsp; <a href="mailto: wismith@student.42AbuDhabi.ae">wismith@student.42AbuDhabi.ae</a><br><br>
										</p>
										<div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;">
											<v-btn @click="redir('https://www.linkedin.com/in/willems24/')" icon="mdi-linkedin"/>
											<v-btn @click="redir('https://github.com/jsjohn1951')" icon="mdi-git"/>
										</div>
									</v-expansion-panel-text>
								</v-expansion-panel>

							</v-expansion-panels>
						</div>

					</div>
				</v-theme-provider>
				<!-- <div class="text-h5" style="padding: 20px;">Where did I Study Software Development?</div>
				<div class="divider" style="width: 20vw;"/>
				<p style="text-align: justify;">
					<br>&emsp; During my time at 42 Abu Dhabi I've completed projects related to C, C++, Debain Systems Administration, Unix Shell Scripting, Docker, Docker-compose, and Object Oriented Programming. I've also completed several team projects that includes
					a project to build my own command-line interpreter based on bash, and graphical rendering engine in C.<br><br> &emsp; Throughout my studies I've shared my knowledge and expertise with other students by hosting several workshops, and twitch streams on various
					programming concepts, leaving a positive impact on the student community.
				</p> -->

			</div>
		</div>
		<section class="header-wrapper flex-center flex-column" style="height: 90px; width: 100vw">
		<a href="#exp">
			<div class="scrolldown" style="width: 2em; height: 2em; background-color: transparent;
				position: absolute; border-width: 0 0.25em 0.25em 0; border-style: solid;
				border-color: antiquewhite; animation: scrolldown 1.2s ease-in-out infinite 0.15s;">
				</div>
				<div class="scrolldown" style="width: 2em; height: 2em; background-color: transparent; 
				border-width: 0 0.25em 0.25em 0; border-style: solid;
				border-color: antiquewhite; animation: scrolldown 1.2s ease-in-out infinite;">
				</div>
			</a>
			</section>
	</section>
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