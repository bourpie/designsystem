import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import { resolve } from 'path'

export default defineConfig({
  server: { https: true }, // Not needed for Vite 5+
  plugins: [ mkcert() ],
  build: {
    minify: true,
    lib: {
      name: 'QcCompponents',
      entry: resolve(__dirname, 'main.js'),
      fileName: 'qc-compponents',
      formats: ['es','iife'],
    }
  }
})