<template>
  <div class="flex flex-col justify-center text-center gap-6">
    <div
      class="relative flex justify-center items-center aspect-standard rounded-2xl cursor-pointer overflow-hidden"
      @click="isOverlayOpen = !isOverlayOpen"
    >
      <!-- cover image -->
      <NuxtImg
        class="w-full object-contain rounded-lg transition-all ease-in-out duration-500 select-none hover:scale-105"
        :class="{ 'scale-125 opacity-30 blur-2xl pointer-events-none': isOverlayOpen }"
        :src="$props.item.cover"
        alt=""
        format="webp"
        loading="lazy"
      />

      <!-- overlay -->
      <Transition>
        <div
          v-show="isOverlayOpen"
          class="absolute top-0 left-0 right-0 w-full h-full flex flex-col justify-center items-center gap-4"
        >
          <a v-if="$props.item.liveUrl" :href="$props.item.liveUrl" target="_blank" rel="noopener noreferrer">
            <UiButton label="Live preview" variant="primary" />
          </a>
          <a v-if="$props.item.gitHubUrl" :href="$props.item.gitHubUrl" target="_blank" rel="noopener noreferrer">
            <UiButton label="View GitHub repository" variant="secondary" />
          </a>

          <!-- close overlay -->
          <div class="absolute top-0 right-0 p-6">
            <XMarkIcon class="size-6 sm:size-8 text-primary" />
          </div>
        </div>
      </Transition>
    </div>

    <!-- name -->
    <div class="text-h4">{{ $props.item.name }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "./types.ts";
import { XMarkIcon } from "@heroicons/vue/24/solid";

const isOverlayOpen = ref<boolean>(false);

const props = defineProps<{
  item: Project;
}>();
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
