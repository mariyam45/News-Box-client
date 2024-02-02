import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": "https://news-box-server-2pqk.vercel.app/",
  //   },
  // },
  plugins: [react()],
});
