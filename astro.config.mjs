import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// pharadornb.github.io is a user site, so it is served from the domain root (no `base`)
export default defineConfig({
  site: 'https://pharadornb.github.io',
  integrations: [sitemap()],
});
