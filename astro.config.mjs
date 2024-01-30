import { sanityIntegration } from '@sanity/astro'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [
    sanityIntegration({
      projectId: 'pucirtyi',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
      // Access the Studio on your.url/admin
      studioBasePath: '/admin',
    }),
    react(),
  ],
})
