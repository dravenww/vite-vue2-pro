import { defineConfig } from 'vite'
import * as path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import esbuildPlugin from 'esbuild-plugin-vite-element-ui';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src/'),
      'src/': path.resolve(__dirname, './src'),
    },
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  define: {
    'process.env.VUE_APP_BASE_API': '"/dev-url"'
  },
  plugins: [
    createVuePlugin(),
    createSvgSpritePlugin({
      symbolId: 'icon-[name]',
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        esbuildPlugin(),
      ],
    }
  }
})
