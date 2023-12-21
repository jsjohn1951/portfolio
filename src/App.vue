<template>
	<div>
		<h1>Willem Johannes Smith</h1>
		<h2>Software Developer Portfolio Update Coming Soon!</h2>
		<img src="./assets/working.gif" class="cover-img" alt="Vite logo" />
		<div style="display: flex; width: 30vw; align-items: center; justify-content: center;">
			<a href="https://github.com/jsjohn1951" target="_blank" class="row">
				<img class="github-logo" src="./assets/Github.gif" />
				<p class="github">Github</p>
	    </a>
		<a href="https://github.com/jsjohn1951" target="_blank" class="row">
				<img class="github-logo" src="./assets/Github.gif" />
				<p class="github">Github</p>
	    </a>
		</div>
		<h2>Migrating to Vite + Vue.js framework</h2>
	</div>
</template>

<style scoped>
.row {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.cover-img {
	height: 50vh;
	width: 30vw;
}

.github-logo {
	height: 5vh;
	transition: 100ms;
}

.github-logo:hover {
	height: 6vh;
}

.github {
	height: fit-content;
	width: fit-content;
	padding: 1.5em;
}
</style>
