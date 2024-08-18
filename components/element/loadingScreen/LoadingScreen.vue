<template>
  <div class="fixed flex justify-center items-center top-0 left-0 right-0 size-full z-[999]" ref="wrapper">
    <div class="rectangle size-full bg-primary"></div>
    <div class="rectangle size-full bg-primary"></div>
    <div class="absolute text-h3 opacity-0 text-almost-white z-10" ref="text">Nice to see you!</div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const wrapper = ref<HTMLElement>();
const text = ref<HTMLElement>();

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "power4.inOut" },
    onComplete: () => wrapper.value!.remove(),
  });
  tl.set(document.documentElement, { cursor: "wait" });
  tl.to(text.value!, { opacity: 1, duration: 0.6 });
  tl.to(wrapper.value!.querySelectorAll(".rectangle"), { y: "-100%", stagger: 0.05 });
  tl.to(text.value!, { y: "-300%", opacity: 0, duration: 0.8 }, "<");
  tl.set(document.documentElement, { cursor: "default" }, "<0.5");
});
</script>
