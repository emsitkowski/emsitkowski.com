<template>
  <span
    class="absolute bottom-0 transition-opacity ease-in-out duration-200 text-small sm:text-h4"
    :class="{ 'opacity-40': active }"
    >{{ label }}</span
  >
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  active?: boolean;
}>();
</script>
