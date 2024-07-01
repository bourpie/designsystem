import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import { resolve } from 'path'

export default defineConfig({
  server: { https: true }, // Not needed for Vite 5+
  plugins: [ mkcert() ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      fileName: 'qc-compponents',
      formats: ['es'],
    }
  }
})