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
      <NuxtImg
        class="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/2 max-w-none w-[320px] sm:w-[420px] pointer-events-none select-none"
        src="/img/misc/shape-02.png"
        alt="Frosted glass shape"
        format="webp"
        loading="lazy"
      />
    </div>
  </ElementSectionWrapper>
</template>

<script setup lang="ts">
import type { Project } from "./types.js";

const projects: Project[] = [
  {
    name: "Dashrise",
    cover: "/img/projects/project-dashrise.jpg",
    gitHubUrl: "https://github.com/emsitkowski/dashrise",
    liveUrl: "https://dashrise.netlify.app",
  },
  {
    name: "Graphic Designer Portfolio",
    cover: "/img/projects/project-agaradkiewicz.jpg",
    gitHubUrl: "https://github.com/emsitkowski/ar-project",
    liveUrl: "https://agaradkiewicz.pl",
  },
  {
    name: "Lykkele",
    cover: "/img/projects/project-lykkele.jpg",
    liveUrl: "https://lykkele.com",
  },
];
</script>
