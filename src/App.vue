<script lang="ts" setup>
import { Ref, ref } from 'vue' 
import hero from './views/hero.vue'
import about from './views/about.vue'
import exp from './views/experience.vue'
import skills from './views/skills.vue'

const top: Ref<number> = ref(document.documentElement.scrollTop)

function onScroll ()
{
	top.value = document.documentElement.scrollTop;
}

window.addEventListener("scroll", onScroll);

</script>

<template>
	<hero/>
	<about/>
	<exp/>
	<skills/>
	<div v-if="top" style="width: 100%; height: 100vh; position: fixed; top: 93vh; left: 90vw;">
		<a href="#">
			<div class="flex-center flex-column" style="position: relative; width: 2em; height: 2em; background-color: antiquewhite;
				border-radius: 100%;">
				<div style="width: 1em; height: 1em; background-color: transparent; 
					border-width: 0.25em 0 0 0.25em; border-style: solid;
					border-color: #1c1c1c; transform: translateY(3px) rotate(45deg);">
				</div>
			</div>
		</a>
	</div>
</template>

<style>
.divider {
	height: 1px;
	width: 23vw;
	background-color: white;
}
.header-wrapper {
	background-color: #1c1c1c;
	top: 0px;
	left: 0px;
	height: 100vh;
	width: 100%;
}

.flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}

html {
	overflow-y: auto;
	scroll-behavior: smooth;
	/* overflow: hidden; */
	scrollbar-width: none;  /* Firefox */
	-ms-overflow-style: none;  /* IE and Edge */
}

html::-webkit-scrollbar {
    display: none;
}

/* Scroll down */

.scrolldown{
  transform: translateY(0%) rotate(45deg);
                opacity: 0;
}
@keyframes scrolldown {
            0%{
                transform: translateY(20%) rotate(45deg);
                opacity: 0.7;
            }
            50%{
                transform: translateY(0%) rotate(45deg);
                opacity: 0.2;
            }
            100%{
                transform: translateY(20%) rotate(45deg);
                opacity: 0.7;
            }
        }
</style>
