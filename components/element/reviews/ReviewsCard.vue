<template>
  <div class="flex flex-col justify-between border border-secondary-8% rounded-2xl p-4 sm:p-6">
    <div>
      <div class="flex gap-px mb-4">
        <ElementReviewsStar v-for="star in review.rating" />
      </div>
      <p class="text-p mb-8" v-html="'“' + review.content + '”'"></p>
    </div>

    <div class="flex items-center gap-3">
      <UiAvatar :img-url="review.avatar" img-alt="Michal Sitkowski, Michał Sitkowski, Mike Sitkowski" size="small" />
      <span class="text-small">
        {{ review.author }} <span v-if="review.company">– {{ review.company }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Review } from "./types.js";

const props = defineProps<{
  review: Review;
}>();
</script>
