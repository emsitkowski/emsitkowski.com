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
