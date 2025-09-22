import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/MadeBy.js'),
      name: 'MadeByComponent',
      fileName: (format) => `madeby-watermark.${format}.js`,
      formats: ['umd'],
    },
    rollupOptions: {},
    outDir: 'dist',
  },
});