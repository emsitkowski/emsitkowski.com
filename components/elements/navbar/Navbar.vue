<template>
  <nav
    class="flex flex-col sm:flex-row justify-center sm:justify-between items-center p-4 sm:p-0 gap-2 sm:gap-4 bg-primary-2% sm:bg-transparent backdrop-blur-xl sm:backdrop-blur-none rounded-3xl sm:rounded-full"
  >
    <div class="flex flex-col items-center sm:flex-row gap-3 sm:gap-4">
      <!-- avatar -->
      <nuxt-link to="/">
        <UiAvatar />
      </nuxt-link>

      <!-- name -->
      <span class="text-p">Mike Sitkowski</span>
    </div>

    <!-- availability badge -->
    <UiBadge class="flex items-center" label="Available for projects">
      <div class="w-[10px] h-[10px] bg-success rounded-full animate-pulse"></div>
    </UiBadge>
  </nav>
</template>
