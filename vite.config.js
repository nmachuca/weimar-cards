import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://nmachuca.github.io/weimar-cards/", 
  plugins: [react(), vitePluginRequire.default()]  
})
