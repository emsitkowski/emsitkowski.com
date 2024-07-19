<template>
  <button
    class="flex justify-center items-center w-full sm:w-fit gap-2 px-8 py-4 rounded-full text-p-medium"
    :class="[
      { 'bg-primary text-almost-white': $props.variant === 'primary' },
      { 'text-primary border border-primary-16%': $props.variant === 'secondary' },
      { 'bg-almost-white text-primary': $props.variant === 'white' },
      { 'text-almost-white border border-almost-white': $props.variant === 'white-outline' },
    ]"
  >
    <slot></slot>

    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  variant?: "primary" | "secondary" | "white" | "white-outline";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});
</script>
