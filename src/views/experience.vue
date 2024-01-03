<script setup lang="ts">
import { ref, Ref } from 'vue'
import entry from '../components/timelineEntry.vue'
import { useFortyTwo } from '../composables/useFortyTwo'
import { useRegProjects } from '../composables/useRegProjects'

const ft_list = useFortyTwo();
const reg_list = useRegProjects();

</script>

<template>
	<section id="exp" class="flex-center flex-column">
		<v-parallax class="flex-center text-white" style="width: 100%; top: 0px; height: 28vh;" src="../assets/guywithlaptop.jpg">
			<h1 class="text-h1">Experience & Projects</h1>
		</v-parallax>
		<section class="flex-center flex-column text-white" style="background-color: #1c1c1c; height: 100vh; width: 100%; gap: 20px; height: fit-content; padding: 20px;">
				<div class="flex-center flex-column" style="gap: 20px;">
					<div class="flex-center flex-column">
						<h4 class="text-h4 font-weight-thin mb-4">Professional & Academic</h4>
						<div class="divider" style="width: 10vw;"/>
					</div>
					<div class="font-weight-thin mb-4">2021 - current</div>
				</div>
			<v-timeline align="start" style="width: 60vw;">

				<!-- ! Main -->
				<entry v-for="item in reg_list" :name="item.name" :date="item.date" :repo="item.repo"
						:text="item.msg"
						:images="item.img"
						:link="item.link">
					<div style="padding: 20px;">
								<div class="text-h7">
									Technologies:
								</div>
								<v-icon v-for="ico in item.ico" :icon="ico"/>
							</div>
				</entry>
			</v-timeline>

			<!-- ! Common Core title -->
			<div class="flex-center flex-column" style="width: 60vw; gap: 20px;">
							<div class="flex-center flex-column">
        						<div class="text-h4 font-weight-thin mb-4">42 Common-Core</div>
								<div class="divider" style="width: 10vw;"/>
							</div>
							<div class="font-weight-thin mb-4">Sep, 2021 - Nov, 2023</div>
							<div class="text-h7">
							Technologies:
						</div>
						<div class="flex-row">
							<v-icon icon="mdi-vuejs"/>
							<v-icon icon="mdi-nuxt"/>
							<v-icon icon="mdi-developer-board"/>
							<v-icon icon="mdi-language-typescript"/>
							<v-icon icon="mdi-language-html5"/>
							<v-icon icon="mdi-language-css3"/>
							<v-icon icon="mdi-language-c"/>
							<v-icon icon="mdi-language-cpp"/>
							<v-icon icon="mdi-linux"/>
							<v-icon icon="mdi-docker"/>
							<v-icon icon="mdi-wordpress"/>
							<v-icon icon="mdi-database"/>
							<v-icon icon="mdi-git"/>
							<!-- <br><br> -->
							</div>
      					</div>
			<v-timeline align="start" style="width: 60vw;">

				<!-- ! Main -->
				<entry v-for="item in ft_list" :name="item.name" :date="item.date" :repo="item.repo"
						:text="item.msg"
						:images="item.img"
						:link="item.link">
					<div style="padding: 20px;">
								<div class="text-h7">
									Technologies:
								</div>
								<v-icon v-for="ico in item.ico" :icon="ico"/>
							</div>
				</entry>
				</v-timeline>
				<div style="padding-top: 40px; width: 5em">
					<a href="#TSkills" class="flex-center flex-column" style="width: 5em">
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
	</section>
</template>
<style>
.v-timeline-divider__before {
    background: rgba(255, 255, 255, 0);
    position: absolute;
}
.v-timeline-divider__after {
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
}

.exp-wrapper {
	background-color: #1c1c1c;
	top: 0px;
	left: 0px;
	height: fit-content;
	width: 100%;
}
</style>