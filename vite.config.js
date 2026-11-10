import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const usingCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
const base =
  process.env.SITE_BASE ||
  (process.env.GITHUB_ACTIONS && repoName && !usingCustomDomain ? `/${repoName}/` : '/');

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services/index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        quote: resolve(__dirname, 'quote/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        kitchen: resolve(__dirname, 'kitchen-remodeling/index.html'),
        bathroom: resolve(__dirname, 'bathroom-remodeling/index.html'),
        process: resolve(__dirname, 'process/index.html'),
        areas: resolve(__dirname, 'service-area/index.html'),
        faq: resolve(__dirname, 'faq/index.html'),
        reviews: resolve(__dirname, 'reviews/index.html')
      }
    }
  }
});
