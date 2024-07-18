<template>
  <div
    class="absolute bg-secondary-8% hover:bg-secondary-16% transition-colors duration-500 ease-in-out backdrop-blur-xl aspect-square rounded-full cursor-grab z-40"
    :style="`width: ${widthPercentage}%`"
    @mouseenter="$emit('circle-hover', $el)"
    @mousemove="(event) => animateCircle(event, $el)"
    @mouseleave="revertAnimation($el), $emit('circle-unhover')"
  ></div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const props = defineProps<{
  widthPercentage: number;
}>();

const emits = defineEmits(["circle-hover", "circle-unhover"]);

function animateCircle(event: MouseEvent, target: HTMLElement) {
  const x = event.offsetX;
  const y = event.offsetY;
  const circleWidth = target.clientWidth;
  const circleHeight = target.clientHeight;
  const translateX = x - circleWidth / 2;
  const translateY = y - circleHeight / 2;
  const threshold = 1;

  gsap.to(target, {
    x: translateX * threshold,
    y: translateY * threshold,
    duration: 1.2,
    scale: 0.8,
    ease: "power2.out",
  });
}

function revertAnimation(element: HTMLElement) {
  gsap.to(element, {
    x: 0,
    y: 0,
    scale: 1,
    duration: 1.2,
    overwrite: true,
  });
}
</script>
