import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://inkimos.com/insights/wp-json/wp/v2/posts', // WordPress API endpoint
        changeOrigin: true, // To handle CORS properly
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' from the path
      },
    },
  },
})
