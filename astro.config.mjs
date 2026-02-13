import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',       // Static site generation for GitHub Pages
  base: '/aikido/',       // Name deines GitHub Repo
  site: 'https://felix-mackinger.github.io/aikido/', // Optional, SEO
});
