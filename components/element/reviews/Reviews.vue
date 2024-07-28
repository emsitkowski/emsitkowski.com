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
    author: "Sebastian Łabza",
    position: "Graphic Designer",
    avatar: "/img/avatar/sebastian-labza.jpg",
    content:
      "[...] His extensive experience in the industry is evident at first glance. Michal demonstrates a deep understanding of the latest trends and technologies related to frontend development, which translates into high-quality projects. His ability to analyze and quickly grasp project requirements makes working with him extremely efficient.",
    isTranslated: true,
    source: "LinkedIn",
  },
  {
    author: "Magdalena Manjak",
    position: "Founder",
    company: "baecco.ch",
    avatar: "/img/avatar/magdalena-manjak.jpg",
    rating: 5,
    content: "An excellent specialist. Very easy to communicate and collaborate with. I would highly recommend!",
    source: "Upwork",
  },
  {
    author: "Aga Radkiewicz",
    position: "Graphic Designer",
    company: "agaradkiewicz.pl",
    avatar: "/img/avatar/aga-radkiewicz.jpg",
    content:
      "[...] Michal can execute someone else's concept down to the pixel, propose his own solutions to problems when he believes something could work better, and implement them. He has an extraordinary sense of aesthetics; often, his proposals have turned out to be more visually pleasing than the original design. [...]",
    isTranslated: true,
    source: "LinkedIn",
  },
  {
    author: "Jan Puziewicz",
    position: "CEO",
    company: "Levitated",
    avatar: "/img/avatar/jan-puziewicz.jpg",
    content:
      "Michal supported us on several projects as a Frontend Developer, each time achieving excellent results. He is experienced, communicative, and reliable.",
    source: "Email",
  },
  {
    author: "Anna Makuszewska",
    position: "Graphic Designer",
    avatar: "/img/avatar/anna-makuszewska.jpg",
    content:
      "[...] Constant search for writing better code, along with an artistic sense and excellent advice in UI and UX from Michal, has led us to create many creative landing pages from which I have learned a lot. [...] I&nbsp;could always count on his help – the best web developer I have worked with.",
    isTranslated: true,
    source: "LinkedIn",
  },
  {
    author: "Aleksandra Pomarańska",
    position: "Graphic Designer",
    avatar: "/img/avatar/aleksandra-pomaranska.jpg",
    content:
      "Michal is a very competent, precise, and reliable Web Developer. [...] He is committed to continuous development in his profession, which is evident in each subsequent project. I have very positive memories of working with him, and he has often given me valuable advice on coding. [...]",
    isTranslated: true,
    source: "LinkedIn",
  },
  {
    author: "Anna Drobna",
    position: "Graphic Designer",
    avatar: "/img/avatar/anna-drobna.jpg",
    content:
      "[...] Michal is an extremely organized person who delivers every project on time. Furthermore, he is always eager to share his knowledge – he has extensive expertise and experience in his field. [...]",
    isTranslated: true,
    source: "LinkedIn",
  },
];
</script>
