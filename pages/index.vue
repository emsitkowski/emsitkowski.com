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
    </ElementContainer>

    <!-- projects -->
    <ElementContainer>
      <ElementProjects />
    </ElementContainer>
  </div>
</template>
