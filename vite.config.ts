import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // The site uses a custom domain, so GitHub Pages serves it from the root.
  base: "/",
  plugins: [react()],
})
