import { ref, Ref } from 'vue'
import { useExp } from '../interfaces/useExp'

const reg_list: Ref<useExp[]> = ref([])

reg_list.value.push({name: 'Portfolio Website',

					msg: "My personal portfolio website incorporates the Vue.js frontend framework \
					and a CI/CD pipeline using Github Actions and Firebase. The Github actions scripts \
					automatically triggers a rebuild on the live site once branch is merged into the master \
					branch.",
					img: ['/portfolio.png'],
					ico: ["$vuetify", "mdi-vuejs", "mdi-firebase", "mdi-git", "mdi-language-typescript", "mdi-language-html5", "mdi-language-css3"],
					date: "Dec, 2023 - current",
					repo: "https://github.com/jsjohn1951/portfolio"
					} as useExp)

reg_list.value.push({name: 'wiValgrind',

					msg: "A containerized shell development environment with standardized tools and utilities \
					such as make, gcc, g++, node.js, and npm allowing \
					the developer to compile, run, and debug in a safe linux environment. \
					Uses Docker, Docker compose, and install / start scripts. \
					More info on the README.md provided on the Github repository.",
					img: ['/wiValgrind.png'],
					ico: ["mdi-linux", "mdi-docker", "mdi-git"],
					date: "Aug, 2023 - Dec, 2023",
					repo: "https://github.com/jsjohn1951/wiValgrind"
					} as useExp)

export function useRegProjects () : Ref<useExp[]>
{
	return (reg_list)
}
