import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: './backend/public/frontend',
    emptyOutDir: true,
  },
  // ⚠️ ELIMINA COMPLETAMENTE LA SECCIÓN 'server' ⚠️
  // No debe tener server.host, server.port, server.watch, etc.
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})