import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/aikido/',
  site: 'https://felix-mackinger.github.io/aikido/',
  outDir: 'docs',
  build: {
    format: 'file'
  }
});
