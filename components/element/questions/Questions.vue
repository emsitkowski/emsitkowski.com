<template>
  <ElementSectionWrapper class="relative">
    <!-- header -->
    <ElementSectionHeader label="FAQ" />

    <!-- questions -->
    <ElementQuestionsWrapper>
      <ElementQuestionsItem v-for="item in questions" :key="item.name" :item="item" />
    </ElementQuestionsWrapper>
  </ElementSectionWrapper>
</template>

<script setup lang="ts">
import type { QuestionsItem } from "./types";

const questions: QuestionsItem[] = [
  {
    name: "What technologies do you use?",
    value:
      "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content. Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize.",
  },
  {
    name: "Where can I see your projects live?",
    value:
      "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
  },
  {
    name: "What is the price for the services you provide?",
    value:
      "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
  },
  {
    name: "Is it possible to pay in advance for the whole project?",
    value:
      "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
  },
];
</script>
