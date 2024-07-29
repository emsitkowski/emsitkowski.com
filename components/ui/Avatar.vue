<template>
  <div
    class="shrink-0 rounded-full overflow-hidden"
    :class="[{ 'size-16 ': $props.size === 'normal' || undefined }, { 'size-8 sm:size-10': $props.size === 'small' }]"
  >
    <img class="object-cover w-full h-full" :src="$props.imgUrl" :alt="imgAlt" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  imgUrl: string;
  imgAlt: string;
  size: "normal" | "small";
}

const props = withDefaults(defineProps<Props>(), {
  size: "normal",
});
</script>
