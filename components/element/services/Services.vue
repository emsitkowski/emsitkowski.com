<template>
  <div class="flex flex-col">
    <ElementSectionHeader label="My services" />

    <ElementServicesGrid>
      <ElementServicesItem v-for="service in services" :key="service" :item="service" />
    </ElementServicesGrid>
  </div>
</template>

<script setup lang="ts">
const services = [
  "Web Development",
  "REST API Integration",
  "Headless CMS Integration",
  "Web Design",
  "Code Debugging",
  "Custom Animations",
  "UI/UX Consultations",
];
</script>
