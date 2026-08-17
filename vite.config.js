import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fixed vite config - clean, no vercel plugin needed, per PDF guide
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
