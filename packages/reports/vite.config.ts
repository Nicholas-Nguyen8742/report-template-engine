import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '../', ['VITE_USER_NODE_ENV', 'PORT']);

  return {
    build: {
      emptyOutDir: true,
      minify: 'esbuild',
      outDir: 'build',
      chunkSizeWarningLimit: 1600,
      sourcemap: env.VITE_USER_NODE_ENV !== 'production',
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          if (warning.code === 'SOURCEMAP_ERROR') {
            return;
          }
  
          defaultHandler(warning)
        },
        output: {
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
          manualChunks: {
            reactVendor: ['react'],
          },
        },
      },
    },
    envDir: '../../',
    plugins: [react()],
    preview: {
      port: parseInt('3001'),
    },
    server: {
      port: parseInt('3001'),
    },
  }
});
