<template>
  <ElementSectionWrapper class="flex flex-col pb-0 sm:pb-0">
    <div class="flex flex-col lg:grid grid-cols-2 gap-8 lg:gap-20 mb-10">
      <div class="flex flex-col gap-3 lg:gap-6">
        <!-- heading -->
        <h1 class="text-h1">
          Frontend Developer <br />
          <span class="text-h2-light">– crafting since 2021</span>
        </h1>

        <!-- location -->
        <div class="flex items-center gap-1">
          <MapPinIcon class="size-5 sm:size-8 text-primary" />
          <div class="text-h4">Currently based in <strong class="font-semibold">Gdansk, Poland</strong></div>
        </div>
      </div>

      <div class="flex flex-col items-start gap-6">
        <!-- introduction -->
        <div class="flex flex-col gap-3">
          <p class="text-h4">
            Skilled in Vue, Nuxt, Tailwind CSS, Sass, REST APIs, Headless CMS, animation libraries, Firebase, Supabase,
            Figma, and many more.
          </p>
        </div>

        <!-- call-to-action buttons -->
        <div class="flex flex-wrap gap-3 sm:gap-4">
          <a class="contents" href="#start">
            <UiButton label="Hire me" />
          </a>
          <!--  <UiButton variant="secondary" label="Watch introduction video">
            <PlayIcon class="size-5 sm:size-6 text-primary" />
          </UiButton> -->
        </div>
      </div>
    </div>

    <div class="relative">
      <!-- video -->
      <ElementVideo />

      <!-- shape -->
      <NuxtImg
        class="absolute top-0 left-0 -translate-x-1/2 max-w-none w-[320px] sm:w-[520px] pointer-events-none select-none"
        src="/img/misc/shape-01.png"
        alt="Frosted glass shape"
        format="webp"
      />
    </div>

    <!-- stats -->
    <ElementStats :stats="stats" />
  </ElementSectionWrapper>
</template>

<script setup lang="ts">
import { MapPinIcon, PlayIcon } from "@heroicons/vue/24/outline";

const stats = [
  {
    value: "3",
    name: "Years of experience",
  },
  {
    value: "420+",
    name: "Completed projects",
  },
  {
    value: "20+",
    name: "Satisfied clients",
  },
  {
    value: "3",
    name: "Certifications",
  },
];
</script>
