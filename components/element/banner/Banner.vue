<template>
  <div>
    <ElementSectionWrapper :disable-bottom-divider="true">
      <!-- video -->
      <ElementVideo>
        <div class="absolute w-full h-full top-0 left-0 bg-secondary-50% -z-10"></div>
        <div class="w-full flex flex-col gap-8 px-6 py-8 sm:p-32 sm:px-16">
          <!-- content -->
          <div class="flex flex-col gap-2 text-center">
            <h2 class="text-h1 text-almost-white">Ready to collaborate?</h2>
            <p class="text-h4 text-almost-white">Let’s discuss the details of the project you want to launch</p>
          </div>

          <!-- buttons -->
          <div class="flex flex-wrap justify-center gap-4">
            <UiButton variant="white" label="Schedule a call" />
            <UiButton variant="white-outline" label="emsitkowski@gmail.com">
              <DocumentDuplicateIcon class="size-5 sm:size-6 text-almost-white" />
            </UiButton>
          </div>
        </div>
      </ElementVideo>
    </ElementSectionWrapper>
  </div>
</template>

<script setup lang="ts">
import { DocumentDuplicateIcon } from "@heroicons/vue/24/outline";
</script>
