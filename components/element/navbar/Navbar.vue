<template>
  <nav class="flex justify-between items-center py-2 sm:p-0 gap-2 sm:gap-4">
    <div class="flex flex-col items-center sm:flex-row gap-3 sm:gap-4">
      <!-- avatar -->
      <nuxt-link to="/">
        <UiAvatar
          size="normal"
          img-url="/img/mike-sitkowski.jpg"
          img-alt="Michal Sitkowski, Michał Sitkowski, Mike Sitkowski"
        />
      </nuxt-link>

      <!-- name -->
      <span class="hidden sm:block text-p-medium">Mike Sitkowski</span>
    </div>

    <!-- availability badge -->
    <UiBadge class="flex items-center" label="Available for projects">
      <div class="w-[10px] h-[10px] bg-success rounded-full animate-pulse"></div>
    </UiBadge>
  </nav>
</template>
