<template>
  <div id="app">
    <!-- site background -->
    <UiBackground />

    <!-- site wrapper -->
    <ElementContainer>
      <ElementNavbar />
      <ElementHero />
    </ElementContainer>

    <ElementSectionWrapper>
      <ElementReviews />
    </ElementSectionWrapper>

    <ElementContainer>
      <ElementSectionWrapper>
        <ElementServices />
      </ElementSectionWrapper>
    </ElementContainer>
  </div>
</template>

<script setup lang="ts">
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();
</script>
