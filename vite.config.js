import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

require('dotenv').config();

const PORT = process.env.PORT || 3000;

export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../dist',
  },
  // depending on your application, base can also be "/"
  // base: '',
  plugins: [react()],
  server: {
    proxy: {
      '/user': {
        target: `http://localhost:${PORT}`,
      },
    },
  },
});
