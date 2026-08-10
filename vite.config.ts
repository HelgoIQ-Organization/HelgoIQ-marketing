import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const appOrigin = process.env.VITE_APP_ORIGIN || 'https://app.helgoiq.com'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    host: '0.0.0.0',
    allowedHosts: ['all', '.manus.computer'],
    strictPort: false,
    proxy: {
      '/api/trpc': {
        target: appOrigin,
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
