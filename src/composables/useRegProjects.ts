import { ref, Ref } from 'vue'
import { useExp } from '../interfaces/useExp'

const reg_list: Ref<useExp[]> = ref([])

// Professional Experience at Ratchet Capital (Apr 2024 - Present)

reg_list.value.push({name: 'Megastars.ai - Next.js Platform (v2)',

					msg: "Currently developing the next generation of Megastars.ai (formerly Influenz), a production influencer marketing platform at Ratchet Capital using modern serverless architecture. <br>\
					Built with Next.js for server-side rendering and optimal SEO, integrated with Supabase for real-time database and authentication, deployed on Cloudflare for edge computing performance. <br>\
					Leveraging AI-assisted development with Claude Code and Perplexity AI to architect solutions, debug complex issues, and optimize code through intelligent prompting and iterative problem-solving. <br>\
					Primary focus on React.js frontend implementation integrating multiple third-party services into cohesive user experience.",
					img: [],
					ico: ["mdi-react", "mdi-database", "mdi-cloud", "mdi-robot", "mdi-lightning-bolt", "mdi-language-typescript"],
					date: "November 2024 - Present",
					repo: "",
					link: "https://megastars.ai"
					} as useExp)

reg_list.value.push({name: 'ioMega Energy - AI-Optimized SEO Website',

					msg: "Designed and developed a production SEO-optimized corporate website for clean energy company using AI-assisted development workflow with Claude Code and Perplexity AI. <br>\
					Architected high-performance static site with Eleventy (11ty), SASS preprocessor with modular architecture, Chart.js data visualizations, and GSAP scroll-triggered animations for engaging user experience. <br>\
					Implemented comprehensive SEO strategy: JSON-LD structured data, XML sitemaps, Open Graph meta tags, semantic HTML achieving 95+ Lighthouse SEO scores. PurgeCSS optimization reduced CSS by 60%. <br>\
					Production deployment with Docker containerization, Nginx with Brotli compression, GitHub Actions CI/CD pipeline, and zero-downtime rolling deployments.",
					img: [],
					ico: ["mdi-web", "mdi-robot", "mdi-magnify", "mdi-docker", "mdi-flash", "mdi-github", "mdi-chart-line"],
					date: "November 2024 - January 2026",
					repo: "",
					link: "https://iomega.energy/"
					} as useExp)

reg_list.value.push({name: 'Trescudo - Cybersecurity Marketing Site',

					msg: "Built production marketing website for cybersecurity services using AI-driven development with Claude Code and Perplexity for rapid prototyping, architecture decisions, and optimization. <br>\
					Developed with Eleventy static site generator, Nunjucks templating system, and PurgeCSS for CSS optimization achieving minimal bundle sizes and fast load times. <br>\
					Implemented performance optimization: WebP image conversion, lazy loading, Font Awesome subsetting, aggressive caching strategies. Comprehensive SEO with meta tags, structured data, and sitemap. <br>\
					Deployed via Docker with Nginx web server, GitHub Actions automation for continuous deployment, and rolling deployment strategy ensuring zero downtime.",
					img: [],
					ico: ["mdi-web", "mdi-robot", "mdi-shield-check", "mdi-docker", "mdi-speedometer", "mdi-github"],
					date: "October 2024 - November 2024",
					repo: "",
					link: "https://trescudo.com/"
					} as useExp)

reg_list.value.push({name: 'Megastars.ai v1 - Microservices Platform',

					msg: "Architected and developed initial version of Megastars.ai (originally Influenz) featuring microservices architecture at Ratchet Capital. <br>\
					Designed containerized services with Docker and Docker Compose, implemented CI/CD pipelines with GitHub Actions for automated production server deployments. <br>\
					Built OAuth 2.0 authentication service in Express.js managing ecosystem-wide user sessions and permissions. Developed Influencer Dashboard frontend with React providing intuitive assignment management. <br>\
					Optimized backend API endpoints in Golang using Gin framework for scalable, high-performance request handling under production load.",
					img: [],
					ico: ["mdi-language-go", "mdi-nodejs", "mdi-docker", "mdi-github", "mdi-security", "mdi-api"],
					date: "October 2024 - November 2024",
					repo: ""
					} as useExp)

reg_list.value.push({name: 'Verif-y - Document Verification Mobile App',

					msg: "Frontend developer for Verif-y, a React Native iOS/Android application at Ratchet Capital for document verification workflows. <br>\
					Set up React Native environment with Expo for rapid cross-platform development and testing. Implemented skeleton loading screens for enhanced perceived performance during data fetches. <br>\
					Built signature capture feature with canvas-based drawing allowing users to sign documents directly in-app. Created document search page with dynamic filtering for fast file access and management. <br>\
					Developed email management interface for adding and organizing contacts. Focused on mobile-first UX patterns and performance optimization.",
					img: [],
					ico: ["mdi-react", "mdi-apple", "mdi-android", "mdi-language-typescript", "mdi-cellphone"],
					date: "July 2024 - October 2024",
					repo: ""
					} as useExp)

// Personal Projects

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
