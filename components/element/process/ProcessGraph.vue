<template>
  <ElementProcessGraphContainer>
    <ElementProcessGraphWrapper v-for="(circle, index) in circles" :key="circle.label">
      <ElementProcessGraphRectangle v-if="index === 0 || index === 3" />
      <ElementProcessGraphLine />
      <ElementProcessGraphCircle
        @circle-hover="hoveredCircle = circle.label"
        @circle-unhover="hoveredCircle = undefined"
        :width-percentage="circle.widthPercentage"
      />
      <ElementProcessGraphLabel :active="hoveredCircle === circle.label" :label="circle.label" />
    </ElementProcessGraphWrapper>

    <!-- shapes -->

    <img
      class="absolute top-0 sm:top-8 -translate-y-1/4 translate-x-1/4 sm:translate-x-0 w-[160px] sm:w-[320px] pointer-events-none select-none -z-10"
      src="~assets/img/shape-03.png"
      alt="Frosted glass shape"
    />
    <img
      class="absolute top-1/4 right-0 -translate-x-8 translate-y-1/4 -mt-6 w-[160px] sm:w-[320px] pointer-events-none select-none -z-10"
      src="~assets/img/shape-04.png"
      alt="Frosted glass shape"
    />
  </ElementProcessGraphContainer>
</template>

<script setup lang="ts">
import type { Circle } from "./types.ts";

const hoveredCircle = ref<string | undefined>();

const circles: Circle[] = [
  {
    label: "Discovery",
    widthPercentage: 80,
  },
  {
    label: "Definition",
    widthPercentage: 150,
  },
  {
    label: "Development",
    widthPercentage: 180,
  },
  {
    label: "Delivery",
    widthPercentage: 60,
  },
];
</script>
