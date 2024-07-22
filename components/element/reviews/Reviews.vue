<template>
  <ElementSectionWrapper>
    <ElementContainer>
      <!-- header -->
      <ElementSectionHeader label="Client reviews" />
    </ElementContainer>

    <!-- reviews -->
    <ClientOnly>
      <ElementReviewsSwiper :reviews="reviews" />
    </ClientOnly>
  </ElementSectionWrapper>
</template>

<script setup lang="ts">
import type { Review } from "./types.js";

const reviews: Review[] = [
  {
    author: "Magdalena Manjak",
    company: "baecco.ch",
    avatar: "/img/avatar/magdalena-manjak.jpg",
    rating: 5,
    content: "An excellent specialist. Very easy to communicate and collaborate with. I would highly recommend!",
  },
  {
    author: "Aga Radkiewicz",
    company: "agaradkiewicz.pl",
    avatar: "/img/avatar/aga-radkiewicz.jpg",
    rating: 5,
    content:
      "Working with Michał is a pure pleasure – he is an incredibly organized person who delivers every project on time. Furthermore, he is always eager to share his knowledge and has extensive expertise and experience in his field.",
  },
  {
    author: "Magdalena Manjak",
    company: "Baecco",
    avatar: "/img/avatar/aga-radkiewicz.jpg",
    rating: 5,
    content:
      "Working with Michał is a pure pleasure – he is an incredibly organized person who delivers every project on time. Furthermore, he is always eager to share his knowledge and has extensive expertise and experience in his field.",
  },
];
</script>
