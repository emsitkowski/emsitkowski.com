<template>
  <div
    id="app"
    class="after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:-z-[9999] bg-primary-2% px-[4%] py-[4%] sm:py-10"
  >
    <!-- light gfx background -->
    <img
      class="fixed w-full min-w-[640px] object-cover top-0 left-0 right-0 -z-[999]"
      src="@/assets/img/background-light.jpg"
      alt="light gfx"
    />

    <!-- site wrapper -->
    <div class="container max-w-7xl mx-auto">
      <ElementsNavbar />
      <ElementsHero class="mt-8 sm:mt-20 xl:mt-23" />
    </div>
  </div>
</template>
