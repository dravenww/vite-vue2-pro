import { defineConfig } from 'vite'
import * as path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import esbuildPlugin from 'esbuild-plugin-vite-element-ui';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src/'),
    }
  },
  plugins: [
    createVuePlugin(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        esbuildPlugin()
      ],
    }
  }
})
