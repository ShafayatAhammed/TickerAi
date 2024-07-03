import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        personalize_news: resolve(__dirname, "personalize-news.html"),
      },
    },
  },
});
