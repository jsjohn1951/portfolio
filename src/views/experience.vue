<script setup lang="ts">
import fortyTwo from '../components/fortyTwoTimeline.vue'
import entry from '../components/timelineEntry.vue'
</script>

<template>
	<section id="exp">
		<v-parallax class="flex-center text-white" style="top: 0px; height: 28vh;" src="../assets/guywithlaptop.jpg">
			<h1 class="text-h1">Experience & Projects</h1>
		</v-parallax>
		<section class="header-wrapper flex-center flex-column text-white" style="gap: 20px; height: fit-content; padding: 20px;">
			<div class="flex-center flex-column" style="height: 90%">
			<h4 class="text-h4 font-weight-thin mb-4">Professional & Academic</h4>
			<div class="divider" style="width: 10vw;"></div>
			<v-timeline align="start" style="width: 60vw;">
				<entry name="Portfolio Website" date="Dec, 2023" repo="https://github.com/jsjohn1951/portfolio">
					<div style="padding-top: 20px;">
						<img width="100px" src="../assets/portfolio.png">
						<p>
          					My personal portfolio website incorporates the Vue.js frontend framework
							and a CI/CD pipeline using Github Actions and Firebase. The Github actions scripts
							automatically triggers a rebuild on the live site once branch is merged into the master
							branch.
							<br><br>
						</p>
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
				<entry name="wiValgrind" date="Aug, 2023 - Dec, 2023" repo="https://github.com/jsjohn1951/wiValgrind">
					<div style="padding-top: 20px;">
						<img width="100px" src="../assets/wiValgrind.png">
						<p>
							A containerized shell development environment with standardized tools and utilities
							such as make, gcc, g++, node.js, and npm allowing
							the developer to compile, run, and debug in a safe linux environment.
							<br><br>Uses Docker, Docker compose, and install / start scripts.
							More info on the README.md provided on the Github repository.
							<br><br>
						</p>
						<div class="text-h7">
							Technologies:
						</div>
							<v-icon icon="mdi-linux"/>
							<v-icon icon="mdi-docker"/>
							<v-icon icon="mdi-git"/>
							<br><br>
					</div>
				</entry>
				<v-timeline-item>
					<template v-slot:opposite>
						Sep, 2021 - Nov, 2023
					</template>
      					<div>
        					<div class="text-h6">42 Common-Core</div>
        					<p>
          						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								<br><br>
        					</p>
							<div class="text-h7">
							Technologies:
						</div>
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
							<br><br>
      					</div>

						<fortyTwo name="Ft_Transcendence" date="Sep, 2023 - Nov, 2023" repo="https://github.com/jsjohn1951/ft_containers">
							<div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								<br><br>
								</p>
								<div class="text-h7">
									Technologies:
								</div>
								<v-icon icon="mdi-vuejs"/>
								<v-icon icon="mdi-nuxt"/>
								<v-icon icon="mdi-developer-board"/>
								<v-icon icon="mdi-language-typescript"/>
								<v-icon icon="mdi-language-html5"/>
								<v-icon icon="mdi-language-css3"/>
								<v-icon icon="mdi-docker"/>
								<v-icon icon="mdi-git"/>
							</div>
						</fortyTwo>
						<fortyTwo name="Inception" date="May, 2023 - Jun, 2023" repo="https://github.com/jsjohn1951/inception">
							<div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								<br><br>
								</p>
								<div class="text-h7">
									Technologies:
								</div>

								<v-icon icon="mdi-docker"/>
								<v-icon icon="mdi-git"/>
								<v-icon icon="mdi-linux"/>

								<v-icon icon="mdi-wordpress"/>
								<v-icon icon="mdi-database"/>
							</div>
						</fortyTwo>
						<fortyTwo name="Ft_Irc" date="Apr, 2023 - May, 2023" repo="https://github.com/Genius-gambit/ft_irc">
							<div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								<br><br>
								</p>
								<div class="text-h7">
									Technologies:
								</div>
								<v-icon icon="mdi-language-cpp"/>
								<v-icon icon="mdi-linux"/>
								<v-icon icon="mdi-git"/>
							</div>
						</fortyTwo>
						<fortyTwo name="Ft_Containers" date="Feb, 2023 - Mar, 2023" repo="https://github.com/jsjohn1951/ft_containers">
							<div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								<br><br>
								</p>
								<div class="text-h7">
									Technologies:
								</div>
								<v-icon icon="mdi-language-cpp"/>
								<v-icon icon="mdi-linux"/>
								<v-icon icon="mdi-git"/>
							</div>
						</fortyTwo>
						<fortyTwo name="Cub3d" date="Jan, 2023 - Feb, 2023" repo="https://github.com/karimomino/cub3D">
							<div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								<br><br>
								</p>
								<div class="text-h7">
									Technologies:
								</div>
								<v-icon icon="mdi-language-c"/>
								<v-icon icon="mdi-linux"/>
								<v-icon icon="mdi-git"/>
							</div>
						</fortyTwo>
						<fortyTwo name="Cpp Modules" date="Oct, 2022 - Dec, 2022" repo="https://github.com/jsjohn1951/cpp">
							<div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								<br><br>
								</p>
								<div class="text-h7">
									Technologies:
								</div>
								<v-icon icon="mdi-language-cpp"/>
								<v-icon icon="mdi-linux"/>
								<v-icon icon="mdi-git"/>
							</div>
						</fortyTwo>
						<fortyTwo name="Minishell" date="May, 2022 - Oct, 2022" repo="https://github.com/jsjohn1951/minishell">
							<div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								<br><br>
								</p>
								<div class="text-h7">
									Technologies:
								</div>
								<v-icon icon="mdi-language-c"/>
								<v-icon icon="mdi-linux"/>
								<v-icon icon="mdi-git"/>
							</div>
						</fortyTwo>

    				</v-timeline-item>
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