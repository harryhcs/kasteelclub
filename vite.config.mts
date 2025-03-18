import { defineConfig } from "vite";
import { redwood } from "redwoodsdk/vite";
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tailwindcss(),
    redwood(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});