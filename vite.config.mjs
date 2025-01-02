import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
    global: {},
  },
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util",
    },
  },
  build: {
    rollupOptions: {
      external: ["fsevents"],
    },
  },
  optimizeDeps: {
    include: ["buffer"],
    exclude: ["fsevents"], // Add this line
  },
});
