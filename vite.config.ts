import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(() => {
  // For GitHub Pages deployment, set the base path
  // Default: './' makes the build work from any location (file://, subfolder, etc.)
  // Use '/' only if hosted at root
  // Can be overridden with VITE_BASE_PATH environment variable
  let base = process.env.VITE_BASE_PATH || "./";
  // Normalize: ensure relative path always starts with ./
  if (base !== "/" && !base.startsWith("./") && !base.startsWith("/")) {
    base = "./";
  }

  return {
    base,
    plugins: [react(), tailwindcss(), viteSingleFile()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      // Inline everything into a single HTML file for easy deployment
      assetsInlineLimit: 100000000,
      chunkSizeWarningLimit: 100000000,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
    },
  };
});
