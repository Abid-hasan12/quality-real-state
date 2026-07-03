import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // নিচের লাইনটি যোগ করো:
  base: '/quality-real-state/', 
})