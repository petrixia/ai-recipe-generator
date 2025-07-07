import { defineConfig } from 'vite';
export default defineConfig({
  // outras configs...
  build: {
    rollupOptions: {
      // garantir que assets como SVGs sejam resolvidos corretamente
      input: 'index.html',
    },
  },
});
