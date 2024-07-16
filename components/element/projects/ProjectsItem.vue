<template>
  <div class="flex flex-col justify-center text-center gap-6">
    <div
      class="relative flex justify-center items-center aspect-square p-6 rounded-2xl cursor-pointer overflow-hidden"
      :style="'background-color:' + $props.item.backgroundColorHex"
      @click="isOverlayOpen = !isOverlayOpen"
    >
      <!-- cover image -->
      <img
        class="w-full object-contain rounded-lg pointer-events-none transition-all ease-in-out duration-500"
        :class="{ 'scale-150 translate-y-1/2 blur-xl opacity-30': isOverlayOpen }"
        :src="$props.item.cover"
        alt=""
      />

      <!-- overlay -->
      <Transition>
        <div
          v-show="isOverlayOpen"
          class="absolute top-0 left-0 right-0 w-full h-full flex flex-col justify-center items-center gap-4"
          :style="'background-color:' + $props.item.backgroundColorHex + '00'"
        >
          <a :href="$props.item.liveUrl" target="_blank" rel="noopener noreferrer">
            <UiButton v-if="$props.item.liveUrl" label="Live preview" variant="primary" />
          </a>
          <a :href="$props.item.gitHubUrl" target="_blank" rel="noopener noreferrer">
            <UiButton v-if="$props.item.gitHubUrl" label="View GitHub repository" variant="secondary" />
          </a>

          <!-- close overlay -->
          <div class="absolute top-0 right-0 p-6">
            <XMarkIcon class="size-6 sm:size-8 text-primary" />
          </div>
        </div>
      </Transition>
    </div>

    <!-- name -->
    <h3 class="text-h4">{{ $props.item.name }}</h3>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "./projects.ts";
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
