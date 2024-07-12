<template>
  <nav class="flex flex-col sm:flex-row justify-between items-center py-10 gap-4">
    <div class="flex flex-col sm:flex-row items-center gap-4">
      <nuxt-link to="/">
        <UiAvatar />
      </nuxt-link>

      <span class="text-p">Mike Sitkowski</span>
    </div>

    <UiBadge class="flex items-center" label="Available for projects">
      <div class="w-[10px] h-[10px] bg-success rounded-full animate-pulse"></div>
    </UiBadge>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
