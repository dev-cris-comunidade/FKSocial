import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/', // Garante que os caminhos estejam corretos
  build: {
    outDir: 'dist', // Diretório onde os arquivos buildados serão gerados
    sourcemap: true, // Ajuda na depuração
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});
