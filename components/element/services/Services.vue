<template>
  <ElementSectionWrapper>
    <div class="flex flex-col">
      <!-- header -->
      <ElementSectionHeader label="My services" />

      <!-- services -->
      <ElementServicesGrid>
        <ElementServicesItem v-for="service in services" :key="service" :item="service" />
      </ElementServicesGrid>
    </div>
  </ElementSectionWrapper>
</template>

<script setup lang="ts">
const services: string[] = [
  "Web Development",
  "REST API",
  "Headless CMS",
  "Debugging",
  "Animations",
  "UI/UX Consultations",
];
</script>
