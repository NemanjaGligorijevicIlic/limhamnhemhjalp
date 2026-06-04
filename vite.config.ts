import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { componentTagger } from "lovable-tagger";
import { hmrGatePlugin } from "@lovable.dev/vite-plugin-hmr-gate";
import { devServerBridgePlugin } from "@lovable.dev/vite-plugin-dev-server-bridge";

// Plain client-side React SPA.
// `npm run build` outputs a fully static site into `dist/` that can be
// uploaded as-is to an S3 bucket (or any static host).
export default defineConfig(({ command }) => ({
  plugins: [
    tsConfigPaths(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    ...(command === "serve"
      ? [hmrGatePlugin(), devServerBridgePlugin(), componentTagger()]
      : []),
  ],
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
  },
}));
