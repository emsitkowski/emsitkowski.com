// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Michal / Mike Sitkowski – Frontend Developer",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Frontend Developer skilled in HTML5, CSS3, JavaScript, TypeScript, Vue, Nuxt, Tailwind CSS, REST APIs, Headless CMS, animation libraries, Figma, and many more.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/jpeg",
          href: "/favicon.png",
        },
      ],
    },
  },
  css: ["~/assets/style/main.scss"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes("swiper-"),
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@vueuse/nuxt"],
});
