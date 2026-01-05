<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
	src: string []
}>()
const dialog = ref(false)
</script>

<template>
	<div>
		<button @click="dialog = !dialog" style="height:fit-content;">
			<img width="100px" :src="src[0]" loading="lazy" alt="Project preview">
		</button>
		<v-dialog
		  v-model="dialog"
		  width="auto"
		>
		  <v-card style="width: 50vw;">
				<v-carousel v-if="src.length > 1" height="50vh" cycle hide-delimiter-background show-arrows="hover">
					<v-carousel-item v-for="item in src"
					:src="item" cover loading="lazy"/>
				</v-carousel>
				<v-carousel v-else height="50vh" hide-delimiter-background hide-delimiters :continuous="false" :show-arrows="false">
					<v-carousel-item v-for="item in src"
					:src="item" cover loading="lazy"/>
				</v-carousel>
			<v-card-actions>
			  <v-btn color="primary" block @click="dialog = false">Close</v-btn>
			</v-card-actions>
		  </v-card>
		</v-dialog>
	</div>
  </template>

  <style scoped>
  button:hover {
  filter: brightness(75%);
}
  </style>
  