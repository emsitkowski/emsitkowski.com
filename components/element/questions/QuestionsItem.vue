<template>
  <div
    class="flex flex-col cursor-pointer hover:bg-secondary-2% rounded-2xl p-4 sm:p-6 transition-all duration-200 overflow-hidden"
    :class="{ 'bg-secondary-4%': isQuestionOpen }"
    @click="isQuestionOpen = !isQuestionOpen"
  >
    <div class="flex justify-between items-center">
      <h4 class="text-h4-medium pr-6" v-html="item.name"></h4>
      <div class="shrink-0">
        <MinusIcon v-if="isQuestionOpen" class="size-6 sm:size-8 text-primary" />
        <PlusIcon v-else class="size-6 sm:size-8 text-primary" />
      </div>
    </div>
    <div
      class="max-h-0 transition-all duration-500"
      :class="isQuestionOpen ? 'block opacity-100 translate-y-0' : 'invisible opacity-0'"
      :style="isQuestionOpen ? 'max-height: ' + ($el as any).lastChild.scrollHeight + 'px' : ''"
    >
      <p class="text-p w-11/12 max-w-4xl mt-4" v-html="item.value"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QuestionsItem } from "./types.ts";
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  item: QuestionsItem;
}>();

const isQuestionOpen = ref(false);
</script>
