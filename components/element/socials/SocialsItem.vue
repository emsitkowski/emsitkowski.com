<template>
  <a :href="item.url" target="_blank" rel="noopener noreferrer">
    <div
      class="text-p-medium text-center mobile-only:opacity-100 mobile-only:hover:opacity-40 transition-opacity ease-in-out duration-200 p-0 sm:p-4"
    >
      {{ item.label }}
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Social } from "./types.ts";

const props = defineProps<{
  item: Social;
}>();
</script>
