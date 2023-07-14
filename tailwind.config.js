/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blueColor: "#2a68ff",
        Grey: "#f1f4f8",
        CardShadow: "#f7f8f9",
        TextColor: "#252b36",
      },
    },
  },
  plugins: [],
};
