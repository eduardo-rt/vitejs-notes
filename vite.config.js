import { defineConfig } from "vite";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

import react from "@vitejs/plugin-react";
import { BASE_URL } from "./src/utils/constants";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/notes": BASE_URL,
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
