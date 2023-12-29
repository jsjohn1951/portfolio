<script lang="ts" setup>
import hero from './views/hero.vue'
import about from './views/about.vue'
import exp from './views/experience.vue'
import skills from './views/skills.vue'

</script>

<template>
	<hero/>
	<about/>
	<exp/>
	<skills/>
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
  left: 50%;
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
