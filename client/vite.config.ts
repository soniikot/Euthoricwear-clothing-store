import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import ViteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      pngquant: {
        quality: [0.6, 0.8],
      },
      mozjpeg: {
        quality: 75,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  server: {
    open: false,
    https: {
      key: './clothingstore-privateKey.key',
      cert: './clothingstore.crt',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});
