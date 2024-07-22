<template>
  <div class="flex flex-col justify-between border border-secondary-8% rounded-2xl p-4 sm:p-6">
    <div class="mb-4">
      <div v-if="review.rating" class="flex gap-px mb-4">
        <ElementReviewsStar v-for="star in review.rating" />
      </div>
      <div class="mb-3">
        <UiBadge v-if="review.isTranslated === true" class="mb-2" size="small" label="Translated by AI">
          <SparklesIcon class="size-4 text-secondary" />
        </UiBadge>

        <p class="text-p mb-2" v-html="'“' + review.content + '”'"></p>

        <p class="text-xs opacity-50">Source: {{ review.source }}</p>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <UiAvatar :img-url="review.avatar" img-alt="Michal Sitkowski, Michał Sitkowski, Mike Sitkowski" size="small" />
      <span class="text-small-medium">
        {{ review.author }} <br />
        <div v-if="review.position || review.company" class="text-small opacity-50">
          <span v-if="review.position">{{ review.position }}</span>
          <span v-if="review.company"> @ {{ review.company }}</span>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Review } from "./types.js";
import { SparklesIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  review: Review;
}>();
</script>
