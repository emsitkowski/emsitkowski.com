<template>
  <div
    class="absolute bg-primary-16% backdrop-blur-xl aspect-square rounded-full z-40"
    :style="`width: ${widthPercentage}%`"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  widthPercentage: string;
}>();
</script>
