<template>
  <ElementSectionWrapper>
    <!-- header -->
    <ElementSectionHeader label="Featured projects" />

    <!-- projects -->
    <ElementProjectsGrid>
      <ElementProjectsItem v-for="project in projects" :key="project.name" :item="project" />
    </ElementProjectsGrid>
  </ElementSectionWrapper>
</template>

<script setup lang="ts">
import type { Project } from "./projects.ts";

const projects: Project[] = [
  {
    name: "Dashrise",
    cover: "/img/projects/project-1.jpg",
    backgroundColorHex: "#F1F1F8",
    gitHubUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
  {
    name: "Graphic Designer Portfolio",
    cover: "/img/projects/project-2.jpg",
    backgroundColorHex: "#F2F2F2",
    gitHubUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
  {
    name: "Lykkele",
    cover: "/img/projects/project-3.jpg",
    backgroundColorHex: "#F7F3F2",
    liveUrl: "https://example.com",
  },
];
</script>
