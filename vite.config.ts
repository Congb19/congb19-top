import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 3333,
  },
});
