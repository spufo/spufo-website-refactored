import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/spufo-website-refactored/',  // Replace 'your-repo-name' with the actual name of your GitHub repository
});
