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
	<v-timeline-item>
		<template v-slot:opposite>
			{{ props.date }}
		</template>
      		<div>
        		<div class="text-h6">
					{{ props.name }}
				</div>
				<div style="text-align: justify;">
        			<slot/>
				</div>
				<v-btn :onclick="redir" prepend-icon="mdi-github" variant="plain">
					Repository
				</v-btn>
      		</div>
    </v-timeline-item>
</template>