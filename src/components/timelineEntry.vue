<script setup lang="ts">
import { watch } from 'vue';
import imageD from './imageDialog.vue'
import { ref, Ref } from 'vue'

const props = defineProps < {
	name: string,
	date: string,
	repo: string,
	islarge: boolean,
	text?: string,
	link?: string,
	images?: string[]
} > ()

const panel = ref([false, true, true]);
const displayText: Ref<string[]> = ref([]);
const isOpen = ref(false)
const header = ref("")

if (props.text)
{
	let answ = props.text.split("<br>");
	answ.forEach((obj) => {
		displayText.value.push(obj)
	})
	header.value = displayText.value[0].slice(0, 220)
		+ (displayText.value[0].length >= 220 ? "..." : "");
}

function redir(url: string) {
	window.location.href = url;
}

function itemIsLast(item: string): boolean
{
	if (!displayText.value.length)
		return true;
	return displayText.value[displayText.value.length - 1] === item;
}

function expPanelClick()
{
	isOpen.value = !isOpen.value;
	if (isOpen.value)
		header.value = displayText.value[0];
	else if (displayText.value[0].length >= 220)
		header.value = displayText.value[0].slice(0, 220)
			+ (displayText.value[0].length >= 220 ? "..." : "");
}
</script>

<template>
	<!-- Desktop view with timeline -->
	<v-timeline-item v-if="islarge">
		<template v-slot:opposite>
			{{ props.date }}
		</template>

		<div class="text-h6">
			{{ props.name }}
		</div>
		<div v-if="images" style="padding: 20px;">
			<imageD :src="images"/>
		</div>
		<v-theme-provider theme="dark">
			<v-expansion-panels style="min-width:25.5vw; max-width: 70vw;">
				<v-expansion-panel v-model="panel" expand>
					<v-expansion-panel-title :ripple="true" @click="expPanelClick">
						<p class="text-body-1">{{ header }}</p>
					</v-expansion-panel-title>

					<div v-for="(item, index) in displayText">
						<v-expansion-panel-text v-if="index >= 1">
							<p class="text-body-1">{{ item }}</p>
						</v-expansion-panel-text>
					</div>
				</v-expansion-panel>
			</v-expansion-panels>
			<div style="text-align: justify;">
				<div class="text-h7" style="padding-top: 20px;" v-if="link?.length">
					<v-btn @click="redir(link)" icon="mdi-open-in-new" aria-label="Visit project website"/>
				</div>
				<slot/>
			</div>
		</v-theme-provider>
		<v-btn v-if="repo.length" @click="redir(repo)" prepend-icon="mdi-github" variant="plain">
			Repository
		</v-btn>
	</v-timeline-item>

	<!-- Mobile view as centered card without timeline -->
	<v-card v-else class="mobile-project-card" elevation="4">
		<v-card-item>
			<div class="text-subtitle-2 text-medium-emphasis mb-2">
				{{ props.date }}
			</div>
			<div class="text-h6 mb-3">
				{{ props.name }}
			</div>
		</v-card-item>

		<div v-if="images" style="padding: 0 20px;">
			<imageD :src="images"/>
		</div>

		<v-card-text>
			<v-theme-provider theme="dark">
				<v-expansion-panels>
					<v-expansion-panel v-model="panel" expand>
						<v-expansion-panel-title :ripple="true" @click="expPanelClick">
							<p class="text-body-1">{{ header }}</p>
						</v-expansion-panel-title>

						<div v-for="(item, index) in displayText">
							<v-expansion-panel-text v-if="index >= 1">
								<p class="text-body-1">{{ item }}</p>
							</v-expansion-panel-text>
						</div>
					</v-expansion-panel>
				</v-expansion-panels>
				<div style="text-align: justify;">
					<div class="text-h7" style="padding-top: 20px;" v-if="link?.length">
						<v-btn @click="redir(link)" icon="mdi-open-in-new" aria-label="Visit project website"/>
					</div>
					<slot/>
				</div>
			</v-theme-provider>
		</v-card-text>

		<v-card-actions>
			<v-btn v-if="repo.length" @click="redir(repo)" prepend-icon="mdi-github" variant="plain">
				Repository
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<style>
span.v-expansion-panel-title__overlay
{
	background-color: transparent;
}
.v-expansion-panel-title
{
	padding: 8px 24px 16px;
    flex: 1 1 auto;
    max-width: 100%;
}
.mobile-project-card {
	width: 90vw;
	max-width: 600px;
	margin: 16px auto;
}
</style>