import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://docs.arky.io',
  integrations: [
    starlight({
      title: 'Arky Docs',
      description: 'All-in-one business platform: Headless CMS, E-commerce, Reservations, and Newsletters',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/arky-io' },
      ],
      editLink: {
        baseUrl: 'https://github.com/arky-io/arky/edit/main/docs/',
      },
      lastUpdated: true,
      pagination: true,
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://docs.arky.io/og-image.png' },
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/introduction/' },
            { label: 'Quick Start', link: '/quick-start/' },
            { label: 'Core Concepts', link: '/core-concepts/' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Business', link: '/api/business/' },
            { label: 'Users & Auth', link: '/api/users/' },
            { label: 'CMS', link: '/api/cms/' },
            { label: 'E-shop', link: '/api/eshop/' },
            { label: 'Reservations', link: '/api/reservations/' },
            { label: 'Payments', link: '/api/payments/' },
            { label: 'Media', link: '/api/media/' },
            { label: 'Notifications', link: '/api/notifications/' },
            { label: 'Analytics', link: '/api/analytics/' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Blocks System', link: '/guides/blocks/' },
            { label: 'SDK Usage', link: '/guides/sdk/' },
            { label: 'Error Handling', link: '/guides/errors/' },
            { label: 'Troubleshooting & FAQ', link: '/guides/troubleshooting/' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    svelte(),
  ],
});
