import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy:{
      '/api': 'http://api.wisey.app',
      '/videos': 'https://wisey.app'
    }
  },
  plugins: [react()],
})
