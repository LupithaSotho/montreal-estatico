import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/montreal/', // 👈 MUY IMPORTANTE (nombre del repo nuevo)
})
