import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/estatico-montreal/", // 👈 nombre exacto del repositorio
});
