import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

const resolve = (p) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(), //
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
      },
      extensions: ['.js', '.json', '.vue', '.jsx'],
    },
    server: {
      host: true,
      port: 3000,
      open: '/',
    },
    build: {
      outDir: 'lib',
      sourcemap: true,
      copyPublicDir: false,
      lib: {},
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "@/theme/var.scss" as *;',
        },
      },
    },
    optimizeDeps: {},
  }
})
