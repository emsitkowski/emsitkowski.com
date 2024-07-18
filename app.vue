<template>
  <div id="app">
    <!-- background -->
    <UiBackground />

    <!-- navbar -->
    <ElementContainer>
      <ElementNavbar />
    </ElementContainer>

    <!-- page -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

onMounted(() => {
  // register Swiper custom elements
  register();
});
</script>
