<template>
  <swiper-container class="relative sides-mask max-w-[1536px] mx-auto" init="false">
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
// Swiper parameters
const swiperParams = {
  spaceBetween: 32,
  slidesPerView: 1,
  loop: true,
  speed: 6000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3.5,
    },
  },
  on: {
    init(swiper: any) {
      // Sets smooth easing for slides change
      swiper.wrapperEl.style.transitionTimingFunction = "linear";
    },
  },
};

onMounted(() => {
  const swiperEl = document.querySelector("swiper-container");

  // assign all parameters to Swiper element
  Object.assign(swiperEl!, swiperParams);

  // initialize Swiper
  swiperEl!.initialize();
});
</script>
