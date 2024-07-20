<template>
  <div class="flex justify-center p-6 pb-0 mt-6">
    <span class="text-center text-small-medium opacity-20"
      >© {{ today.getFullYear() }} Michal Sitkowski. All Rights Reserved.</span
    >
  </div>
</template>

<script setup lang="ts">
const today = ref<Date>(new Date());
</script>
