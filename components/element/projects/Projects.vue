<template>
  <ElementSectionWrapper>
    <!-- header -->
    <ElementSectionHeader label="Featured projects" />

    <!-- projects -->
    <ElementProjectsGrid>
      <ElementProjectsItem v-for="project in projects" :key="project.name" :item="project" />
    </ElementProjectsGrid>

    <!-- shape -->
    <div class="relative">
      <img
        class="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/2 max-w-none w-[320px] sm:w-[420px] pointer-events-none select-none"
        src="~assets/img/shape-02.png"
        alt="Frosted glass shape"
      />
    </div>
  </ElementSectionWrapper>
</template>

<script setup lang="ts">
import type { Project } from "./types.js";

const projects: Project[] = [
  {
    name: "Dashrise",
    cover: "/img/projects/project-1.jpg",
    backgroundColorHex: "#F1F1F8",
    gitHubUrl: "https://github.com/emsitkowski/dashrise",
    liveUrl: "https://dashrise.netlify.app",
  },
  {
    name: "Graphic Designer Portfolio",
    cover: "/img/projects/project-2.jpg",
    backgroundColorHex: "#F2F2F2",
    gitHubUrl: "https://github.com/emsitkowski/ar-project",
    liveUrl: "https://agaradkiewicz.pl",
  },
  {
    name: "Lykkele",
    cover: "/img/projects/project-3.jpg",
    backgroundColorHex: "#F7F3F2",
    liveUrl: "https://lykkele.com",
  },
];
</script>
