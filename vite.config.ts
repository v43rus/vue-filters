import { fileURLToPath, URL } from 'node:url'
import { VitePluginFonts } from 'vite-plugin-fonts'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import Components from 'unplugin-vue-components/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
    Components(),
    tailwindcss(),
    vue(),
    vueDevTools(),
    VitePluginFonts({
      google: {
        families: [{ name: 'Quicksand' }],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['@silvia-odwyer/photon'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
