<script lang="ts" setup>
import { onMounted } from 'vue';
import { ref } from 'vue'

const expand = ref(false)
onMounted(() => {
	expand.value = true
})
</script>

<template>
	<section class="header-wrapper">
		<v-parallax class="flex-center" style="top: 0px; height: 100vh;" src="../assets/hero.jpg">
			<div class="flex-center flex-column">
				<div class="d-flex flex-column fill-height justify-center align-center text-white">
	
	
					<v-expand-x-transition>
						<div v-show="expand" class=" flex-column flex-center" style="height: 600px; width: min(40vw, 90vw); gap: 10px;">
							<h1 class="text-h1 font-weight-thin mb-4">
								Willem J. Smith
							</h1>
							<div class="divider" />
							<h2 class="text-h2 font-weight-thin mb-4">
								Software Developer
							</h2>
						</div>
					</v-expand-x-transition>
				</div>
				<div style="width: 5em;">
					<a href="#About" class="flex-center flex-column" style="width: 5em">
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
	</section>
</template>

<style>

</style>