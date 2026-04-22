import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://lee-yisheng.github.io/The-Signal-Simulator/', // <-- ADD THIS LINE (Replace with your exact GitHub repo name)
})