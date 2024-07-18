<template>
  <div>
    <section class="py-16 sm:py-20" :class="$attrs.class">
      <slot></slot>
    </section>

    <UiDivider v-if="!disableBottomDivider" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  disableBottomDivider?: boolean;
}>();
</script>
