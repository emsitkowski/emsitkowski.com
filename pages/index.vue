import { ElementProcess } from '#build/components';
<template>
  <div>
    <!-- hero -->
    <ElementContainer>
      <ElementHero />
    </ElementContainer>

    <!-- reviews -->
    <ClientOnly>
      <ElementReviews />
    </ClientOnly>

    <!-- services -->
    <ElementContainer>
      <ElementServices />

      <!-- projects -->
      <ElementProjects />

      <!-- the process -->
      <ElementProcess />

      <!-- FAQ -->
      <ElementQuestions />
    </ElementContainer>
  </div>
</template>
