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
        "primary-dark": "#05122D",
        "primary-16%": "rgba(11, 40, 102, 0.16)",
        "primary-8%": "rgba(11, 40, 102, 0.08)",
        "primary-4%": "rgba(11, 40, 102, 0.04)",
        "primary-2%": "rgba(11, 40, 102, 0.02)",
        secondary: "rgb(0, 0, 199)",
        "secondary-50%": "rgba(0, 0, 199, 0.5)",
        "secondary-16%": "rgba(0, 0, 199, 0.16)",
        "secondary-8%": "rgba(0, 0, 199, 0.08)",
        "secondary-4%": "rgba(0, 0, 199, 0.04)",
        "secondary-2%": "rgba(0, 0, 199, 0.02)",
        "almost-white": "#FBFBFB",
        white: "#FFFFFF",
        success: "#06D6A0",
        error: "#FF0000",
      },
      borderRadius: {
        "4xl": "42px",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.2 },
        },
      },
      aspectRatio: {
        standard: "4 / 3",
      },
    },
  },
  plugins: [
    ({ addUtilities, addVariant }) => {
      addUtilities({
        ".text-h1": {
          "@apply text-4xl sm:text-5xl xl:text-6xl xl:leading-none font-semibold": {},
        },
        ".text-h2": {
          "@apply text-3xl sm:text-4xl xl:text-5xl xl:leading-tight font-medium": {},
        },
        ".text-h2-light": {
          "@apply text-3xl sm:text-4xl xl:text-5xl xl:leading-tight font-light": {},
        },
        ".text-h3": {
          "@apply text-xl sm:text-2xl xl:text-3xl xl:leading-tight font-medium": {},
        },
        ".text-h4": {
          "@apply text-base sm:text-lg xl:text-2xl xl:leading-normal font-normal": {},
        },
        ".text-h4-medium": {
          "@apply text-base sm:text-lg xl:text-2xl xl:leading-normal font-medium": {},
        },
        ".text-h5": {
          "@apply text-base sm:text-lg xl:text-xl xl:leading-normal font-medium": {},
        },
        ".text-p": {
          "@apply text-sm sm:text-base xl:text-lg xl:leading-normal font-normal": {},
        },
        ".text-p-medium": {
          "@apply text-sm sm:text-base xl:text-lg xl:leading-normal font-medium": {},
        },
        ".text-small": {
          "@apply text-xs sm:text-base sm:leading-normal font-normal": {},
        },
        ".text-small-medium": {
          "@apply text-xs sm:text-base sm:leading-normal font-medium": {},
        },
      }),
        addVariant("mobile-only", "@media screen and (hover)");
    },
  ],
};
