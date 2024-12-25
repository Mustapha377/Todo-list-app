import { defineConfig } from 'vite';

export default defineConfig({
  server: {  
    port: 3000, // Change the dev server port if needed
  },
  build: {
    outDir: 'dist', // Output directory
  },
});

