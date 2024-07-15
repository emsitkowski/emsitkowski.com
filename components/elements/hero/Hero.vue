<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col lg:grid grid-cols-2 gap-8 lg:gap-20">
      <div class="flex flex-col gap-3 lg:gap-6">
        <!-- heading -->
        <h1 class="text-h1">
          Frontend Developer <br />
          <span class="font-light">– crafting since 2021</span>
        </h1>

        <!-- location -->
        <div class="flex items-center gap-1">
          <MapPinIcon class="size-5 sm:size-8 text-primary" />
          <span class="text-p sm:text-h4">Currently based in <strong class="font-medium">Gdansk, Poland</strong></span>
        </div>
      </div>

      <div class="flex flex-col items-start gap-6">
        <!-- introduction -->
        <div class="flex flex-col gap-3">
          <p class="text-h4">
            Skilled in Vue/Nuxt, Tailwind CSS, REST APIs, Headless CMS, animation libraries, design tools, and&nbsp;many
            more, with great ability to adapt.
          </p>
        </div>

        <!-- call-to-action buttons -->
        <div class="flex flex-wrap gap-2 sm:gap-4">
          <UiButton label="Start a project" />
          <UiButton variant="secondary" label="Watch introduction video">
            <PlayIcon class="size-6 text-primary" />
          </UiButton>
        </div>
      </div>
    </div>

    <!-- video -->
    <ElementsVideo />
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon, PlayIcon } from "@heroicons/vue/24/outline";
</script>
