<template>
  <button
    class="flex items-center gap-2 px-8 py-4 rounded-full text-p-medium"
    :class="[
      { 'bg-primary text-almost-white': $props.variant === 'primary' || undefined },
      { 'text-primary border border-primary-16%': $props.variant === 'secondary' },
    ]"
  >
    <slot></slot>

    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  variant?: "primary" | "secondary";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});
</script>
