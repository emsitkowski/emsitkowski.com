<template>
  <ElementSocialsWrapper>
    <ElementSocialsItem v-for="item in socials" :key="item.label" :item="item" />
  </ElementSocialsWrapper>
</template>

<script setup lang="ts">
import type { Social } from "./types.ts";

const socials: Social[] = [
  {
    label: "GitHub",
    url: "https://github.com/emsitkowski",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/michal-sitkowski/",
  },
  {
    label: "Dribble",
    url: "https://dribbble.com/emsitkowski",
  },
  {
    label: "Upwork",
    url: "https://www.upwork.com/freelancers/emsitkowski",
  },
  {
    label: "Contra",
    url: "https://contra.com/emsitkowski",
  },
];
</script>
