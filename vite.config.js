import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // },
  build: {
    outDir: "<PATH TO OUT DIR ATAU HASIL BUILD>"
  },
  base:"/Progressie"
})