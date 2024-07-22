<template>
  <div>
    <ElementSectionWrapper id="start" class="pb-3 sm:pb-3" :disable-bottom-divider="true">
      <!-- video -->
      <ElementVideo>
        <div class="absolute w-full h-full top-0 left-0 bg-secondary-50% -z-10"></div>
        <div class="w-full flex flex-col gap-8 px-6 py-8 sm:p-32 sm:px-16">
          <!-- content -->
          <div class="flex flex-col gap-2 text-center">
            <h1 class="text-h1 text-almost-white">Ready to collaborate?</h1>
            <p class="text-h4 text-almost-white">Let’s discuss the details of your project or task</p>
          </div>

          <!-- buttons -->
          <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              class="contents"
              href="https://cal.com/emsitkowski/introduction-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UiButton variant="white" label="Schedule a call" />
            </a>

            <UiButton
              variant="white-outline"
              :label="isCopied === false ? 'emsitkowski@gmail.com' : 'Copied to clipboard'"
              :class="{ 'border-success text-success': isCopied === true }"
              @click.prevent="copyEmail"
            >
              <DocumentDuplicateIcon v-if="isCopied === false" class="size-5 sm:size-6 text-almost-white" />
              <CheckIcon v-else class="size-5 sm:size-6 text-success" />
            </UiButton>
          </div>
        </div>
      </ElementVideo>
    </ElementSectionWrapper>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/vue/24/outline";

const isCopied = ref<boolean>(false);

const { copy } = useClipboard({ legacy: true });

function copyEmail() {
  copy("emsitkowski@gmail.com");
  isCopied.value = true;
}
</script>
