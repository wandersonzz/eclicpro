import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { preprocessorOptions: { scss: { charset: false } } },
  build: {
    assetsInlineLimit: 2048 // 2kb
  }
})


