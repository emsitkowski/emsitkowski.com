<template>
  <h3
    class="text-h3 w-fit mobile-only:opacity-100 mobile-only:hover:opacity-40 mobile-only:hover:translate-x-2 cursor-default transition-all ease-in-out duration-200"
  >
    {{ item }}
  </h3>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: string;
}>();
</script>
