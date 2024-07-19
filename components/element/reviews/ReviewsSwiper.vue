<template>
  <swiper-container class="relative sm:sides-mask max-w-[1536px] mx-auto" init="false">
    <swiper-slide>
      <ElementReviewsCard />
    </swiper-slide>
    <swiper-slide>
      <ElementReviewsCard />
    </swiper-slide>
    <swiper-slide>
      <ElementReviewsCard />
    </swiper-slide>
    <swiper-slide>
      <ElementReviewsCard />
    </swiper-slide>
    <swiper-slide>
      <ElementReviewsCard />
    </swiper-slide>
  </swiper-container>
</template>

<script setup lang="ts">
import type Swiper from "swiper";
import type { SwiperProps } from "swiper/react";

// Swiper parameters
const swiperParams: SwiperProps = {
  spaceBetween: 32,
  slidesPerView: 1,
  loop: true,
  speed: 4000,
  allowTouchMove: false,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      speed: 6000,
      autoplay: {
        delay: 0,
      },
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3.5,
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
