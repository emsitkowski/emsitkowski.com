<template>
  <div class="border border-primary-16% rounded-2xl p-4 sm:p-6">
    <div class="flex gap-px mb-4">
      <ElementReviewsStar />
      <ElementReviewsStar />
      <ElementReviewsStar />
      <ElementReviewsStar />
      <ElementReviewsStar />
    </div>
    <p class="text-p mb-6">
      "An excellent specialist. Very easy to communicate and collaborate with. I would highly recommend!"
    </p>
    <div class="flex items-center gap-3">
      <UiAvatar
        img-url="/img/mike-sitkowski.jpg"
        img-alt="Michal Sitkowski, Michał Sitkowski, Mike Sitkowski"
        size="small"
      />
      <span class="text-small"> Mike Brodnicki – x-kom </span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
