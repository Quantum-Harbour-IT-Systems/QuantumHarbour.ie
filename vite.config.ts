import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/QuantumHarbour.ie/', // This sets the base URL for GitHub Page
  plugins: [react()],
})
