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
    url: "https://github.com",
  },
  {
    label: "LinkedIn",
    url: "https://github.com",
  },
  {
    label: "Dribble",
    url: "https://github.com",
  },
  {
    label: "Upwork",
    url: "https://github.com",
  },
  {
    label: "Contra",
    url: "https://github.com",
  },
];
</script>
