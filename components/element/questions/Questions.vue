<template>
  <ElementSectionWrapper class="relative">
    <!-- header -->
    <ElementSectionHeader label="FAQ" />

    <!-- questions -->
    <ElementQuestionsWrapper>
      <ElementQuestionsItem v-for="item in questions" :key="item.name" :item="item" />
    </ElementQuestionsWrapper>
  </ElementSectionWrapper>
</template>

<script setup lang="ts">
import type { QuestionsItem } from "./types";

const questions: QuestionsItem[] = [
  {
    name: "What programming languages and&nbsp;frameworks do you use?",
    value: `I specialize in a variety of modern web technologies, including: HTML5, CSS3, JavaScript, TypeScript, Vue, Nuxt, Tailwind CSS, Sass, REST APIs, Headless CMS, animation libraries like GSAP or anime.js, Figma, UI component libraries like shadcn or PrimeVue 4, Git, Firebase, Supabase, Vercel, Netlify, and&nbsp;more. <br /><br /> This tech stack allows me to create modern, efficient, and scalable web solutions tailored to your specific&nbsp;needs.`,
  },
  {
    name: "How long does it take to complete a&nbsp;project?",
    value:
      "It depends on the project itself, but most projects take 1-4 weeks to complete. Reach out to me to discuss the&nbsp;details.",
  },
  {
    name: "Can you integrate my website with third-party&nbsp;services?",
    value:
      "Absolutely. I have experience integrating third-party services like Formspark for contact forms, Paddle for payment collection, booking platforms, headless CMS platforms like Strapi and Prismic, and&nbsp;many&nbsp;more.",
  },
  {
    name: "Do you provide website maintenance?",
    value: "Yes, upon request, I offer ongoing maintenance support to keep your site secure and&nbsp;up-to-date.",
  },
  {
    name: "What is your process for collaborating with&nbsp;clients?",
    value:
      "I maintain regular communication and provide progress updates throughout the project. I can adapt to the software you use, such as Slack, Microsoft Teams, or&nbsp;simply&nbsp;email.",
  },
  {
    name: "Can you work with my design&nbsp;project?",
    value:
      "I can work with existing designs and collaborate with your designers. I&nbsp;also offer basic design services; for example, this website was fully designed by&nbsp;me. I prefer to use Figma.",
  },
  {
    name: "What types of projects have you worked on in the&nbsp;past?",
    value:
      "For almost three years, I've been working for one of the largest tech e-commerce stores in my country. I've worked on hundreds of landing pages, corporate websites, portfolios, and libraries for internal use. <br /><br /> Lately, I've been focusing more on web applications and freelance&nbsp;projects.",
  },
  {
    name: "Do you offer SEO&nbsp;optimization?",
    value:
      "While I'm capable of implementing advanced SEO techniques, by default I only include basic SEO&nbsp;optimization. <br /><br /> If advanced SEO is important for your project, please let me know, and we can discuss including it in the scope of work. I can also help you arrange a meeting with a professional SEO&nbsp;agency.",
  },
  {
    name: "Do&nbsp;you charge hourly or per&nbsp;project?",
    value:
      "I offer both hourly rates and fixed-price quotes, depending on the project scope. <br /><br /> No matter which option you choose, each project I work on is tracked with time tracking software like Clockify or Toggl. You will receive a summary report at the end of the&nbsp;project.",
  },
  {
    name: "Can you assist with domain registration and&nbsp;web&nbsp;hosting?",
    value:
      "Yes, I can help you select and set up appropriate domain and hosting services. Usually, I can also provide a special promo code for your selected&nbsp;provider.",
  },
  {
    name: "Do you provide training for content management system?",
    value:
      "Of course, I offer training sessions to help you manage and update your website&nbsp;content if CMS is included in the&nbsp;project. ",
  },
  {
    name: "How can I pay for your&nbsp;services?",
    value:
      "I use the Ruul platform for invoicing and payments. This secure system allows for various payment methods and ensures smooth transactions for both domestic and international clients. <br /><br /> If you're not comfortable with this option, you can find me on freelance platforms like Upwork and&nbsp;Contra, which provide secure payments and collaboration&nbsp;tools. The relevant links are at the bottom of this&nbsp;page.",
  },
];
</script>
