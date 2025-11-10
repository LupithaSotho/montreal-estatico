import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/estatica-montreal/", // 👈 nombre exacto del repo, SIN acento y con A
});