import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';
import {fileURLToPath} from "url";
import {configDefaults} from "vitest/config";


export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url))
  },
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
