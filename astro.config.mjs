// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE / BASE_PATH are injected by the GitHub Pages workflow (actions/configure-pages),
// so the same build works on <org>.github.io/website and on a custom domain.
const site = process.env.SITE ?? 'https://build-and-run.fr';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
