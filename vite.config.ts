import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build works from any subpath (e.g. GitHub Pages
  // project sites at username.github.io/repo-name/).
  base: './',
  plugins: [react()],
})
