import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "thomgomes.github.io/Portfloio_Thom_Gomes/",
  plugins: [react()],
})
