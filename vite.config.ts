import { defineConfig } from 'vitest/config';

import vue from '@vitejs/plugin-vue';

import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          "@import './public/assets/scss/media.scss';\n @import './public/assets/scss/mixins.scss'; \n",
      },
    },
  },
});
