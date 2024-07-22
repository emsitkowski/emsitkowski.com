<template>
  <div class="inline-flex gap-2 border border-secondary-8% px-4 sm:px-6 py-3 rounded-full">
    <slot></slot>

    <span class="text-small sm:text-p">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>
