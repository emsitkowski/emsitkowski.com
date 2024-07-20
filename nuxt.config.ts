// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Michal / Mike Sitkowski – Frontend Developer",
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
