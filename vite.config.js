// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base:'/festive-greeting-app/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        greet: resolve(__dirname, 'greet.html'),
      },
    },
  },
})