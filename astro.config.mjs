// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import vue from "@astrojs/vue";

export default defineConfig({
  i18n: {
    locales: ["fr","es", "en"],
    defaultLocale: "fr",
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src"
      }
    }
  },

  integrations: [vue(), react()]
})
