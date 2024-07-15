<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mx-auto w-full max-w-5xl py-8 sm:py-16">
    <div v-for="stat in $props.stats" :key="stat.name" class="flex flex-col gap-1 text-center">
      <h3 class="text-h3">{{ stat.value }}</h3>
      <p class="text-p">{{ stat.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Stat {
  value: string;
  name: string;
}

const props = defineProps<{
  stats: Stat[];
}>();
</script>

<style scoped></style>
