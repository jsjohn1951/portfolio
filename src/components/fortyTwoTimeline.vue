<script setup lang="ts">
const props = defineProps < {
	name: string,
	date: string,
	repo: string
} > ()

function redir() {
	window.location.href = props.repo
}
</script>

<template>
	<div style="padding: 10px;">
		<div class="text-h7">
			&emsp;{{ props.name }}
		</div>
		<div class="font-weight-thin mb-4">
			&emsp;{{ props.date }}
		</div>
		<div class="flex-row flex-center">
			<div class="flex-column">
				&emsp;
			</div>
			<div class="flex-column" style="text-align: justify;">
				<slot/>
			</div>
		</div>
		<v-btn :onclick="redir" prepend-icon="mdi-github" variant="plain">
			Repository
		</v-btn>
	</div>
</template>
