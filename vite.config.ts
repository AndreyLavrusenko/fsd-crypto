import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';
import {fileURLToPath} from "url";


export default defineConfig({
  plugins: [vue(), tsconfigPaths()],

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:5]',
    },
  },
})
