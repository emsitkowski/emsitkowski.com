<template>
  <div class="rounded-3xl md:rounded-4xl select-none pointer-events-none overflow-hidden">
    <div class="min-h-60 lg:min-h-80 clip-path">
      <video class="fixed top-0 left-0 size-full object-cover -z-50" autoplay muted loop playsinline>
        <source src="@/assets/video/Abstract_objects_(dark_theme).mp4" type="video/mp4" />
      </video>

      <!-- content -->
      <slot></slot>
    </div>
  </div>
</template>
