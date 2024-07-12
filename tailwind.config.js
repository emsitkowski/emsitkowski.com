/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter, sans-serif",
      },
      colors: {
        primary: "rgb(11, 40, 102)",
        "primary-16%": "rgba(11, 40, 102, 0.16)",
        "primary-8%": "rgba(11, 40, 102, 0.08)",
        "primary-2%": "rgba(11, 40, 102, 0.02)",
        "almost-white": "#FBFBFB",
        white: "#FFFFFF",
        success: "#06D6A0",
        error: "#FF0000",
      },
      borderRadius: {
        "4xl": "42px",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".text-h1": {
          "@apply text-4xl sm:text-5xl xl:text-6xl leading-[110%] font-semibold": {},
        },

        ".text-h2": {
          "@apply text-3xl sm:text-4xl xl:text-5xl leading-[120%] font-medium": {},
        },

        ".text-h3": {
          "@apply text-xl sm:text-2xl xl:text-3xl leading-[120%] font-medium": {},
        },

        ".text-h4": {
          "@apply text-base sm:text-lg xl:text-2xl leading-[160%] font-light": {},
        },

        ".text-h4-medium": {
          "@apply text-base sm:text-lg xl:text-2xl leading-[160%] font-medium": {},
        },

        ".text-p": {
          "@apply text-sm sm:text-base xl:text-lg leading-[140%] font-normal": {},
        },

        ".text-p-medium": {
          "@apply text-sm sm:text-base xl:text-lg leading-[140%] font-medium": {},
        },

        ".text-small": {
          "@apply text-xs sm:text-sm leading-[150%] font-normal": {},
        },
      });
    },
  ],
};
