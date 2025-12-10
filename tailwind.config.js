import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        obsidian: "#0c0c0c",
      },
    },
  },
});
