<template>
  <div
    class="absolute bg-secondary-8% hover:bg-secondary-16% transition-colors duration-500 ease-in-out backdrop-blur-xl aspect-square rounded-full cursor-grab z-40"
    :style="`width: ${widthPercentage}%`"
    @mousemove="(event) => animateCircle(event, $el)"
    @mouseleave="revertAnimation($el)"
  ></div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const props = defineProps<{
  widthPercentage: string;
}>();

function animateCircle(event: MouseEvent, target: HTMLElement) {
  const x = event.offsetX;
  const y = event.offsetY;
  const circleWidth = target.clientWidth;
  const circleHeight = target.clientHeight;
  const translateX = x - circleWidth / 2;
  const translateY = y - circleHeight / 2;

  gsap.to(target, {
    x: translateX,
    y: translateY,
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
    duration: 0.6,
    overwrite: true,
  });
}
</script>
