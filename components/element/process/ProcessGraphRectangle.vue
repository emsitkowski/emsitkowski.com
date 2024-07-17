<template>
  <div
    class="absolute bg-secondary-2% backdrop-blur-sm aspect-square w-[160%] rounded-sm lg:rounded-2xl origin-center"
    ref="rectangle"
  ></div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const rectangle = ref<HTMLElement>();

onMounted(() => {
  // infinite rotate animation
  if (rectangle.value) {
    gsap.to(rectangle.value, { rotate: 360, repeat: -1, duration: 20, ease: "none" });
  }
});
</script>
