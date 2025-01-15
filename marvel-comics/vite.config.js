import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
    },
    build: {
      outDir: '..', //making it root folder instead of dist so that gh pages can access assets + index.html file to render build
      emptyOutDir: false, //ensuring that root folder is not cleared when rebuilding
    },
    plugins: [react()],
  }
})