import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Set the alias for the src directory
    },
  },
  build: {
    outDir: "dist", // Specify the output directory for the build
    sourcemap: false, // Disable sourcemaps
  },
});
