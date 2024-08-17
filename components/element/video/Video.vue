<template>
  <div class="overflow-hidden" :class="{ 'rounded-3xl md:rounded-4xl': rounded }">
    <div
      class="flex flex-col justify-center items-center min-h-60 lg:min-h-80"
      :class="rounded ? 'clip-path-rounded' : 'clip-path'"
    >
      <video
        class="fixed top-0 left-0 size-full object-cover -z-50"
        poster="/img/misc/background-video-poster.jpg"
        preload="none"
        muted
        loop
        playsinline
        ref="video"
      >
        <source src="@/assets/video/Abstract_objects_(dark_theme)_compressed.mp4" type="video/mp4" />
      </video>

      <!-- content -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const video = ref<HTMLVideoElement>();

const props = defineProps<{
  rounded?: boolean;
}>();

onMounted(() => {
  video.value?.play();
});
</script>
