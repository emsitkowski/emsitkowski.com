<template>
  <div
    class="absolute bottom-0 transition-opacity ease-in-out duration-200 text-small sm:text-h4"
    :class="active ? 'opacity-100' : 'opacity-20'"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  active?: boolean;
}>();
</script>
