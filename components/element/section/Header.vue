<template>
  <section class="flex items-center gap-2 mb-10">
    <ArrowLongRightIcon class="size-6 text-secondary" />
    <h2 class="uppercase text-p-medium text-secondary">
      {{ label }}
    </h2>
  </section>
</template>

<script setup lang="ts">
import { ArrowLongRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  label: string;
}>();
</script>
