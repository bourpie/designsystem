import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import { resolve } from 'path'

export default defineConfig({
  base: './', // Chemin de base relatif pour les assets
  server: { https: true }, // Not needed for Vite 5+
  plugins: [ mkcert() ],
  build: {
    minify: true,
    lib: {
      name: 'QcCompponents',
      entry: resolve(__dirname, 'main.js'),
      fileName: 'qc-components',
      formats: ['es','iife'],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'exemple.html'),
      }
    }
  }
})