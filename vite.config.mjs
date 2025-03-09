import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
    },
    base: '/',
    plugins: [
      react(),
      svgrPlugin(),
      checker({
        typescript: true,
      }),
    ],
    build: {
      outDir: 'dist',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
