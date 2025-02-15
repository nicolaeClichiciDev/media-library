import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "#": resolve(__dirname, "./src"),
    },
  },
});
