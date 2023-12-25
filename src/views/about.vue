<template>
	<section id="About" class="about-wrapper flex-center flex-column" style="padding: 50px; height: fit-content;">
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
							<v-img :width="300" cover src="../assets/cv_img.jpeg"></v-img>
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
				<div class="text-h5" style="padding: 20px;">Where did I Study Software Development?</div>
				<div class="divider" style="width: 20vw;"></div>
				<p style="text-align: justify;">
					<br> &emsp; I studied software development at 42 Abu Dhabi and am pleased to say I've completed the 42 common-core. 42 as a coding school uses a project based curriculum and incorporates a peer-to-peer methodology that eliminates the need for teachers, and
					helps build practical experience.
					<br><br> &emsp; During my time at 42 Abu Dhabi I've completed projects related to C, C++, Debain Systems Administration, Unix Shell Scripting, Docker, Docker-compose, and Object Oriented Programming. I've also completed several team projects that includes
					a project to build my own command-line interpreter based on bash, and graphical rendering engine in C.<br><br> &emsp; Throughout my studies I've shared my knowledge and expertise with other students by hosting several workshops, and twitch streams on various
					programming concepts, leaving a positive impact on the student community.
				</p>
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