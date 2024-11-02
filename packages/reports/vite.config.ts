import path, { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '../', ['VITE_USER_NODE_ENV', 'PORT']);

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'reports',
        formats: ['es', 'cjs', 'umd', 'iife'],
        fileName: (format) => `index.${format}.js`,
      },
      emptyOutDir: true,
      minify: 'esbuild',
      outDir: 'dist',
      target: 'node16',
      chunkSizeWarningLimit: 1600,
      sourcemap: env.VITE_USER_NODE_ENV !== 'production',
      rollupOptions: {
        external: ['@react-pdf/renderer'],
        output: {
          interop: 'auto',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
        onwarn(warning, defaultHandler) {
          if (warning.code === 'SOURCEMAP_ERROR') {
            return;
          }
  
          defaultHandler(warning)
        },
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './public'),
      }
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
      },
    },
    envDir: '../../',
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        include: ['src', './tsconfig.json'],
      }),
    ],
    preview: {
      port: parseInt('3001'),
    },
    server: {
      port: parseInt('3001'),
    },
  }
});
