import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the site at https://<username>.github.io/spice-garden/
  // If you rename the repo, update this to match: '/<repo-name>/'
  base: '/spice-garden/',
})
