import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

const routes = [
  '/spufo',
  '/twojo',
  '/interactive',
  '/application',
  '/mobile',
  '/blog',
  '/about',
  '/privacy',
  '/impressum',
  '/contact'
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://twojo.ch',
      dynamicRoutes: routes,
      readable: true,
      exclude: ['/404'],
    }),
  ],
  base: '/',
});
