<template>
  <Splide class="cursor-grab" :options="splideOptions" :extensions="{ AutoScroll }" aria-label="Reviews">
    <SplideSlide class="h-auto" v-for="review in reviews" :key="review.author">
      <ElementReviewsCard class="h-full" :review="review" />
    </SplideSlide>
  </Splide>
</template>

<script setup lang="ts">
import type { Review } from "./types.js";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/vue-splide/css/core";

const props = defineProps<{
  reviews: Review[];
}>();

const splideOptions = {
  autoScroll: {
    speed: 1,
    rewind: true,
  },
  arrows: false,
  snap: false,
  type: "loop",
  mediaQuery: "min",
  gap: 32,
  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1280: {
      perPage: 3,
    },
  },
};

onMounted(() => {});
</script>
