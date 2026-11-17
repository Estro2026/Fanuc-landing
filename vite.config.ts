import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages serve il progetto su https://estro2026.github.io/Fanuc-landing/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: command === 'build' ? '/Fanuc-landing/' : '/',
}))
