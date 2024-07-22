<template>
  <div
    class="inline-flex items-center gap-2 border border-secondary-8% rounded-full"
    :class="size === 'small' ? 'px-3 py-1' : 'px-4 sm:px-6 py-3'"
  >
    <slot></slot>

    <div :class="size === 'small' ? 'text-xs' : 'text-small'">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  size?: "normal" | "small";
}>();
</script>
