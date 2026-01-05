import { ref, Ref } from 'vue'
import { useExp } from '../interfaces/useExp'

const reg_list: Ref<useExp[]> = ref([])

// Professional Experience at Ratchet Capital (Apr 2023 - Present)

reg_list.value.push({name: 'Megastars.ai - Next.js Platform (v2)',

					msg: "Architected and deployed Megastars.ai v2, a production influencer marketing platform at Ratchet Capital serving 500+ active influencers with 99.9% uptime. <br>\
					Built with Next.js for server-side rendering and SEO optimization, integrated with Supabase for real-time database operations and authentication, deployed on Cloudflare's edge network for global performance. <br>\
					Implemented comprehensive dashboard with real-time analytics, OAuth integrations for Instagram/TikTok/YouTube, and responsive React frontend optimized for desktop and mobile experiences. Handling 10K+ daily authentication requests with sub-200ms response times.",
					img: [],
					ico: ["mdi-react", "mdi-database", "mdi-cloud", "mdi-robot", "mdi-lightning-bolt", "mdi-language-typescript"],
					date: "November 2024 - Present",
					repo: "",
					link: "https://megastars.ai",
					liveUrl: "https://megastars.ai",
					metrics: ["Serving 500+ influencers", "99.9% uptime", "10K+ daily auth requests", "Real-time data sync"],
					techStack: ["Next.js", "React", "Supabase", "TypeScript", "Cloudflare", "AI-Assisted Dev"],
					role: "Lead Full Stack Developer",
					teamSize: 1
					} as useExp)

reg_list.value.push({name: 'ioMega Energy - SEO-Optimized Website',

					msg: "Designed and developed a production SEO-optimized corporate website for a clean energy company, achieving exceptional performance and search rankings. <br>\
					Architected with Eleventy static site generator for optimal performance, SASS preprocessor with modular architecture for maintainable styles, Chart.js for interactive data visualizations, and GSAP for smooth scroll-triggered animations. <br>\
					Implemented comprehensive SEO strategy including JSON-LD structured data, XML sitemaps, Open Graph meta tags, and semantic HTML achieving 95+ Lighthouse SEO scores. Applied PurgeCSS optimization reducing CSS bundle by 60% and achieving sub-2.1 second page loads. <br>\
					Production deployment with Docker containerization, Nginx with Brotli compression, GitHub Actions CI/CD pipeline for automated builds, and zero-downtime rolling deployments.",
					img: [],
					ico: ["mdi-web", "mdi-robot", "mdi-magnify", "mdi-docker", "mdi-flash", "mdi-github", "mdi-chart-line"],
					date: "November 2024 - January 2026",
					repo: "",
					link: "https://iomega.energy/",
					liveUrl: "https://iomega.energy",
					metrics: ["95+ Lighthouse SEO score", "60% CSS reduction", "<2.1s page load", "100/100 accessibility"],
					techStack: ["Eleventy", "SASS", "Docker", "Nginx", "GSAP", "Chart.js", "GitHub Actions"],
					role: "Solo Full Stack Developer",
					teamSize: 1
					} as useExp)

reg_list.value.push({name: 'Trescudo - Cybersecurity Marketing Site',

					msg: "Built production marketing website for cybersecurity services with focus on performance optimization and fast load times. <br>\
					Developed with Eleventy static site generator and Nunjucks templating system for clean, maintainable code structure. Applied PurgeCSS for aggressive CSS optimization achieving minimal bundle sizes. <br>\
					Implemented comprehensive performance optimization: WebP image conversion reducing file sizes by 85%, lazy loading for below-the-fold content, Font Awesome icon subsetting, and aggressive browser caching strategies. Comprehensive SEO implementation with meta tags, structured data, and XML sitemap. <br>\
					Deployed via Docker with Nginx web server, GitHub Actions automation for continuous deployment, and rolling deployment strategy ensuring zero downtime during updates.",
					img: [],
					ico: ["mdi-web", "mdi-robot", "mdi-shield-check", "mdi-docker", "mdi-speedometer", "mdi-github"],
					date: "October 2024 - November 2024",
					repo: "",
					link: "https://trescudo.com/",
					liveUrl: "https://trescudo.com",
					metrics: ["98 Performance score", "85% image size reduction", "Sub-100ms response times", "Zero downtime deployments"],
					techStack: ["Eleventy", "Nunjucks", "Docker", "Nginx", "GitHub Actions", "WebP"],
					role: "Solo Full Stack Developer",
					teamSize: 1
					} as useExp)

reg_list.value.push({name: 'Megastars.ai v1 - Microservices Platform',

					msg: "Architected and developed the initial version of Megastars.ai featuring a microservices architecture with Docker and Docker Compose at Ratchet Capital. <br>\
					Designed containerized services orchestrated via Docker Compose, implemented CI/CD pipelines with GitHub Actions for automated production deployments, ensuring consistent environments across development and production. <br>\
					Built OAuth 2.0 authentication service in Express.js managing ecosystem-wide user sessions and permissions across all microservices. Developed Influencer Dashboard frontend with React providing intuitive assignment and campaign management interfaces. <br>\
					Optimized backend API endpoints in Golang using Gin framework for high-performance request handling, achieving sub-100ms response times under production load while handling concurrent requests efficiently.",
					img: [],
					ico: ["mdi-language-go", "mdi-nodejs", "mdi-docker", "mdi-github", "mdi-security", "mdi-api"],
					date: "October 2024 - November 2024",
					repo: "",
					metrics: ["3 microservices architecture", "OAuth 2.0 authentication", "10K+ daily requests", "Automated CI/CD pipeline"],
					techStack: ["Golang", "Express.js", "React", "Docker", "GitHub Actions", "OAuth 2.0"],
					role: "Lead Backend Developer",
					teamSize: 1
					} as useExp)

reg_list.value.push({name: 'Verif-y - Document Verification Mobile App',

					msg: "Frontend developer for Verif-y, a React Native iOS/Android application at Ratchet Capital for document verification workflows. <br>\
					Set up React Native environment with Expo for rapid cross-platform development and testing. Implemented skeleton loading screens for enhanced perceived performance during data fetches. <br>\
					Built signature capture feature with canvas-based drawing allowing users to sign documents directly in-app. Created document search page with dynamic filtering for fast file access and management. <br>\
					Developed email management interface for adding and organizing contacts. Focused on mobile-first UX patterns and performance optimization.",
					img: [],
					ico: ["mdi-react", "mdi-apple", "mdi-android", "mdi-language-typescript", "mdi-cellphone"],
					date: "July 2024 - October 2024",
					repo: "",
					metrics: ["60% faster document verification", "Cross-platform iOS/Android", "Canvas signature capture", "Real-time sync"],
					techStack: ["React Native", "Expo", "TypeScript", "Canvas API"],
					role: "Frontend Developer",
					teamSize: 2
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
