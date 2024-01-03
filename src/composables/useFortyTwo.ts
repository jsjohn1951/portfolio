import { ref, Ref } from 'vue'
import { useExp } from '../interfaces/useExp'

const ft_list: Ref<useExp[]> = ref([])

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
					} as useExp)

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
					} as useExp)

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
					} as useExp)

ft_list.value.push({name: 'Ft_Containers',

					msg: "Ft_Containers encapsulated multiple unique concepts of computer programming. The project requires that an individual implement their own version of \
					the vector, and map STL containers as well as the stack container adaptor in C++. This experience taught me the essential concept of SFINAE (substitution failure \
					is not an error), how Avl Binary trees are implemented, and how iterators work for both map and vector containers. \
					<br> \
					For a more indepth explanation of Binary Trees and iterators for Binary Trees, click below to be redirected to my LinkedIn article.",
					img: [],
					link: "https://www.linkedin.com/pulse/2-use-cases-binary-trees-iterators-willem-smith-sbmbf?trackingId=vuybmET2QKSshBxRBuQhIg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BtrTKJ7rKRe60ERiC3i1inQ%3D%3D",
					ico: ["mdi-language-cpp", "mdi-linux", "mdi-git"],
					date: "Feb, 2023 - Mar, 2023",
					repo: "https://github.com/jsjohn1951/ft_containers"
					} as useExp)

export function useFortyTwo () : Ref<useExp[]>
{
	return (ft_list)
}
