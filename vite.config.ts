import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport, { VantResolve } from 'vite-plugin-style-import';
// import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/combo-ui/index.ts'),
  //     name: 'combo-ui',
  //     fileName: (format) => `combo.${format}.js`
  //   },
  // },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 3333,
  },
});
