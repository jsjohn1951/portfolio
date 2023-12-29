<script setup lang="ts">
import entry from '../components/timelineEntry.vue'

import { ref, Ref } from 'vue'

interface exp 
{
	name: string,
	msg: string,
	img: string[],
	ico: string[],
	date: string,
	repo: string,
	link?: string
}

const ft_list: Ref<exp[]> = ref([])

ft_list.value.push({name: 'ft_transcendence',

					msg: "Project Ft_transcendence is the first of many eventual web development projects that involves the use of \
							a typescript frontend framework, Nest.js backend, and a PostgreSQL database. The project requires that a team of \
							3 - 5 individuals complete it, and, in the spirit of developing a full stack application, \
							our team, which consisted of 4 people, implemented an Agile approach to software developing. \
							<br> \
							Using Agile board software like YouTrack we were able to quickly implement new technologies and libraries \
							as well as verify each other's work before merging into the 'Story Branch' (otherwise known as a feature branch). \
							<br> \
							As an active member of the team I focused mainly on Frontend implementation with the Nuxt.js framework, translating Figma designs into code to be \
							integrated into the web application.",
					img: ['/Trong/Trong.png', '/Trong/dash.png', '/Trong/chat.png', '/Trong/group.png'],
					ico: ["mdi-vuejs", "mdi-nuxt", "mdi-developer-board", "mdi-language-typescript", "mdi-language-html5", "mdi-language-css3", "mdi-docker", "mdi-git"],
					date: "Sep, 2023 - Nov, 2023",
					repo: ""
					} as exp)

ft_list.value.push({name: 'Inception',

					msg: "Inception is an introduction to docker and docker compose. This project gave me the opportunity to implement a small \
							dockerized infrastructure with Nginx, Wordpress, and Mariadb. The project required two local volumes in order for data \
							to persist after performing a 'docker compose down' followed by 'docker compose up.' Pulling ready made docker images \
							from docker hub was not permitted. Each container had to include the penultimate version of Debian Linux. \
							<br> \
							This project also gave me a better understanding of how each service is created, and introduced me to the concept of daemons, and service \
							configuration.",
					img: ['/inception.png'],
					ico: ["mdi-docker", "mdi-linux", "mdi-wordpress", "mdi-database", "mdi-git"],
					date: "May, 2023 - Jun, 2023",
					repo: "https://github.com/jsjohn1951/inception"
					} as exp)

ft_list.value.push({name: 'Ft_Irc',

					msg: "One of the most notable projects in the curriculum, ft_irc provided the necessary experience to confidently perform socket programming. \
					The subject requires a team of 2 to 3 individuals to create an irc server in C++ that would handle specific commands from an irc client of our choice.\
					<br> \
					However the client should be able to do more than just connect to the server. The server is required to also handle the creation and joining of chat rooms. \
					We were also suppose to handle invite to channel, private messages, and operator priviledges for channels.\
					<br> \
					As a group we continuously communicated throughout the entire process, discussed the responsibilities, and accomplishments of the team.",
					img: ['/ft_irc/ircComp.png', '/ft_irc/ircLogin.png'],
					ico: ["mdi-language-cpp", "mdi-linux", "mdi-git"],
					date: "Apr, 2023 - May, 2023",
					repo: "https://github.com/Genius-gambit/ft_irc"
					} as exp)

ft_list.value.push({name: 'Ft_Containers',

					msg: "Ft_Containers encapsulated multiple unique concepts of computer programming. The project requires that an individual implement their own version of \
					the vector, and map STL containers as well as the stack container adaptor in C++. This experience taught me the essential concept of SFINAE (substitution failure \
					is not an error), how Avl Binary trees are implemented, and how iterators work for both map and vector containers. \
					<br> \
					For a more indepth explanation of Binary Trees and iterators for Binary Trees, click below to be redirected to my LinkedIn article.",
					img: [],
					link: "https://www.linkedin.com/pulse/2-use-cases-binary-trees-iterators-willem-smith-sbmbf%3FtrackingId=EvULs2iHSiiBtsy5NnPD3A%253D%253D/?trackingId=EvULs2iHSiiBtsy5NnPD3A%3D%3D",
					ico: ["mdi-language-cpp", "mdi-linux", "mdi-git"],
					date: "Feb, 2023 - Mar, 2023",
					repo: "https://github.com/jsjohn1951/ft_containers"
					} as exp)

// ft_list.value.push({name: 'Cub3d',

// 					msg: "",
// 					img: [],
// 					ico: ["mdi-language-c", "mdi-linux", "mdi-git"],
// 					date: "Jan, 2023 - Feb, 2023",
// 					repo: "https://github.com/karimomino/cub3D"
// 					} as exp)

// ft_list.value.push({name: 'C++ Modules',

// 					msg: "",
// 					img: [],
// 					ico: ["mdi-language-cpp", "mdi-linux", "mdi-git"],
// 					date: "Oct, 2022 - Dec, 2022",
// 					repo: "https://github.com/jsjohn1951/cpp"
// 					} as exp)

// ft_list.value.push({name: 'Minishell',

// 					msg: "",
// 					img: [],
// 					ico: ["mdi-language-c", "mdi-linux", "mdi-git"],
// 					date: "May, 2022 - Oct, 2022",
// 					repo: "https://github.com/jsjohn1951/minishell"
// 					} as exp)

const portfolio = ref("My personal portfolio website incorporates the Vue.js frontend framework \
							and a CI/CD pipeline using Github Actions and Firebase. The Github actions scripts \
							automatically triggers a rebuild on the live site once branch is merged into the master \
							branch.");

const wiValgrind = ref("A containerized shell development environment with standardized tools and utilities \
							such as make, gcc, g++, node.js, and npm allowing \
							the developer to compile, run, and debug in a safe linux environment. \
							Uses Docker, Docker compose, and install / start scripts. \
							More info on the README.md provided on the Github repository.");

</script>

<template>
	<section id="exp">
		<v-parallax class="flex-center text-white" style="top: 0px; height: 28vh;" src="../assets/guywithlaptop.jpg">
			<h1 class="text-h1">Experience & Projects</h1>
		</v-parallax>
		<section class="header-wrapper flex-center flex-column text-white" style="gap: 20px; height: fit-content; padding: 20px;">
			<div class="flex-center flex-column" style="height: 90%">
				<div class="flex-center flex-column" style="gap: 20px;">
					<div class="flex-center flex-column">
						<h4 class="text-h4 font-weight-thin mb-4">Professional & Academic</h4>
						<div class="divider" style="width: 10vw;"/>
					</div>
					<div class="font-weight-thin mb-4">2021 - current</div>
				</div>
			<v-timeline align="start" style="width: 60vw;">

				<!-- ! Portfolio -->
				<entry name="Portfolio Website" date="Dec, 2023" repo="https://github.com/jsjohn1951/portfolio"
						:text="portfolio"
						:images="['/portfolio.png']"
						:key="portfolio">
					<div style="padding-top: 20px;">
						<div class="text-h7">
							Technologies:
						</div>
							<v-icon icon="$vuetify"/>
							<v-icon icon="mdi-vuejs"/>
							<v-icon icon="mdi-firebase"/>
							<v-icon icon="mdi-git"/>
							<v-icon icon="mdi-language-typescript"/>
							<v-icon icon="mdi-language-html5"/>
							<v-icon icon="mdi-language-css3"/>
							<br><br>
					</div>
				</entry>

				<!-- ! wiValgrind -->
				<entry name="wiValgrind" date="Aug, 2023 - Dec, 2023" repo="https://github.com/jsjohn1951/wiValgrind"
						:text="wiValgrind"
						:images="['/wiValgrind.png']"
						:key="wiValgrind">
					<div style="padding-top: 20px;">
						<div class="text-h7">
							Technologies:
						</div>
							<v-icon icon="mdi-linux"/>
							<v-icon icon="mdi-docker"/>
							<v-icon icon="mdi-git"/>
							<br><br>
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
</style>