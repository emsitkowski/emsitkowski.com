<template>
  <span class="absolute bottom-0 text-small sm:text-h4">{{ label }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>
