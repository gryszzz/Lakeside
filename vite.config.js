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
        quote: resolve(__dirname, 'quote/index.html')
      }
    }
  }
});
