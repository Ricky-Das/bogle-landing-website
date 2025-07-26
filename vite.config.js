import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/bogle-landing-website/", // <-- Add this line
  plugins: [react()],
});
