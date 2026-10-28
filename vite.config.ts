

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/ticket-selection-interface/',
  plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      // GitHub Pages serves this repo's docs/ folder
      outDir: 'docs',
    },
    server: {
      port: 3000,
      open: true,
    },
  });