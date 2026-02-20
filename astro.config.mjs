import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/aikido/',
  site: 'https://felix-mackinger.github.io/aikido/',
  outDir: 'dist',
  build: {
    format: 'file'
  }
});
