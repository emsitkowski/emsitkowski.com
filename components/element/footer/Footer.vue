<template>
  <div class="flex justify-center p-6 pb-0 mt-6">
    <div class="text-center text-small opacity-30">
      © {{ today.getFullYear() }} Michal Sitkowski. All Rights Reserved.
    </div>
  </div>
</template>

<script setup lang="ts">
const today = ref<Date>(new Date());
</script>
