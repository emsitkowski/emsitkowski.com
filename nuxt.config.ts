// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2024-07-23",
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
        {
          rel: "canonical",
          href: "https://emsitkowski.com",
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

  modules: ["@vueuse/nuxt", "@nuxt/image"],

  image: {
    format: ["webp"],
  },
});
