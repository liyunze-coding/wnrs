import { VitePWA } from 'vite-plugin-pwa';
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/wnrs",
  plugins: [react(), vanillaExtractPlugin(), VitePWA({
    registerType: 'prompt',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: "We're Not Really Strangers",
      short_name: 'wnrs',
      description: 'Digital adaptation of a popular card game designed to foster meaningful connections through engaging questions and prompts',
      theme_color: '#C13927',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})