import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { nodePolyfills } from "vite-plugin-node-polyfills"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: {
      buffer: "rollup-plugin-node-polyfills/polyfills/buffer-es6",
      util: "rollup-plugin-node-polyfills/polyfills/util-es6",
    },
  },
  define: {
    global: {},
  },
})
