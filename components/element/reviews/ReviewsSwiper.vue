<template>
  <swiper-container class="relative max-w-[1536px] mx-auto sm:sides-mask lg:disable-mask" init="false">
    <swiper-slide class="h-auto" v-for="review in reviews" :key="review.author">
      <ElementReviewsCard class="h-full" :review="review" />
    </swiper-slide>
  </swiper-container>
</template>

<script setup lang="ts">
import type Swiper from "swiper";
import type { SwiperProps } from "swiper/react";
import type { Review } from "./types.js";

const props = defineProps<{
  reviews: Review[];
}>();

// Swiper parameters
const swiperParams: SwiperProps = {
  spaceBetween: 32,
  slidesPerView: 1,
  loop: true,
  speed: 2000,
  allowTouchMove: false,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      loop: true,
      speed: 12000,
      autoplay: {
        delay: 0,
      },
    },
    1024: {
      slidesPerView: 3,
      loop: true,
      speed: 12000,
      autoplay: {
        delay: 0,
      },
    },
  },
  on: {
    init(swiper: Swiper) {
      adjustSlideTransition(swiper.wrapperEl);
    },
    resize(swiper: Swiper) {
      adjustSlideTransition(swiper.wrapperEl);
    },
  },
};

// Adjust slides transition depending on the container width
function adjustSlideTransition(element: HTMLElement) {
  if (element.clientWidth > 640) {
    element.style.transitionTimingFunction = "linear";
  } else {
    element.style.transitionTimingFunction = "ease-in-out";
  }
}

onMounted(() => {
  const swiperEl = document.querySelector("swiper-container");

  // assign all parameters to Swiper element
  Object.assign(swiperEl!, swiperParams);

  // initialize Swiper
  swiperEl!.initialize();
});
</script>
