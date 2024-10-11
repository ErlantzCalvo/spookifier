import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output:'server',
  integrations: [tailwind(), icon(), mdx()],
  experimental: {
    contentLayer: true
  }
});