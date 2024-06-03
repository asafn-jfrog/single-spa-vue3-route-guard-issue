import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'
import vitePluginRequire from "vite-plugin-require";
import smartAsset from "rollup-plugin-smart-asset";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    }),
    vitePluginRequire(),
    VueDevTools(),
  ],
  external: ['main/**'],
  build: {
    rollupOptions: {
      plugins: [
        smartAsset({
          url: "copy",
          keepImport: true,
          keepName: true,
          publicPath: "/ui/client-mfe",
          extensions: [".gif", ".png", ".jpg", ".webp", ".jpeg", '.svg'],
        }),
      ]
    },
    target:'es2018',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      fileName: 'app',
      name: 'client-microfrontend',
      formats: ['umd']
    },
    commonjsOptions: { transformMixedEsModules: true },
    reportCompressedSize: false,
    cssCodeSplit: true,
    minify: false,
  },
  preview: {
    host: 'localhost',
    port: 8420
  },
  define:{
    'process.env': {},
    '_PRODUCTION_': false,
    'process': {}
  },
  resolve: {
    alias: {
      vue: fileURLToPath(new URL('./node_modules/@vue/compat/dist/vue.runtime.esm-bundler.js', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@cmp': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@containers': fileURLToPath(new URL('./src/containers', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
    }
  }
})
