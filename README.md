# Arky Documentation

Official developer documentation for the Arky platform, available at [docs.arky.io](https://docs.arky.io).

## About

This documentation covers the Arky platform - an all-in-one business solution featuring:

- **Headless CMS** - Flexible content management with blocks and multi-language support
- **E-commerce** - Complete product catalog, orders, and payment processing
- **Reservations** - Advanced booking system with provider scheduling
- **Newsletter** - Subscriber management and email campaigns
- **Analytics** - ClickHouse-powered insights and reporting
- **Media Management** - S3-backed storage with optimization

## Tech Stack

- **Framework**: [Astro](https://astro.build) 5.x with static output
- **Docs Theme**: [Starlight](https://starlight.astro.build) for documentation
- **UI**: [Svelte](https://svelte.dev) 5.x for interactive components
- **Deployment**: Cloudflare Pages
- **Infrastructure**: Terraform (Infrastructure as Code)

## Local Development

### Prerequisites

- Node.js (v18 or later)
- npm

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:4321](http://localhost:4321) in your browser

### Available Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Contributing

We welcome contributions to improve the documentation! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Quick Contribution Guide

1. Fork this repository
2. Create a new branch (`git checkout -b improve-docs`)
3. Make your changes to the documentation files in `src/content/docs/`
4. Test locally with `npm run dev`
5. Commit your changes (`git commit -am 'Improve API documentation'`)
6. Push to your branch (`git push origin improve-docs`)
7. Open a Pull Request

## Documentation Structure

```
docs.arky.io/
├── src/
│   ├── content/
│   │   └── docs/          # All documentation content
│   │       ├── index.mdx  # Homepage
│   │       ├── introduction.mdx
│   │       ├── quick-start.mdx
│   │       ├── api/       # API reference docs
│   │       └── guides/    # How-to guides
│   └── styles/            # Custom styles
├── deploy/                # Terraform infrastructure
├── astro.config.mjs       # Astro + Starlight config
└── package.json
```

## Deployment

### Infrastructure as Code

The documentation site infrastructure is managed with Terraform in the `deploy/` directory.

### Required GitHub Secrets

For automated deployment via GitHub Actions:

| Secret Name | Description |
|-------------|-------------|
| `ROOT_DOMAIN` | Root domain (arky.io) |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |
| `CLOUDFLARE_ZONE_ID` | Cloudflare zone ID for arky.io |

### Deployment Process

1. Push to `main` branch
2. GitHub Actions automatically:
   - Applies Terraform infrastructure changes
   - Cloudflare Pages builds and deploys the site
3. Site is live at [docs.arky.io](https://docs.arky.io)

### Manual Terraform Deployment

```bash
cd deploy
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your credentials
terraform init
terraform plan
terraform apply
```

**⚠️ IMPORTANT**: Never commit `terraform.tfvars` - it contains sensitive credentials!

## Writing Documentation

### Content Format

Documentation is written in MDX (Markdown with JSX support), which allows you to:

- Use standard Markdown syntax
- Import and use Svelte components
- Use Starlight's built-in components (Card, CardGrid, Tabs, etc.)

### Example Documentation Page

```mdx
---
title: API Authentication
description: Learn how to authenticate with the Arky API
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Overview

Arky supports multiple authentication methods...

<CardGrid>
  <Card title="JWT Tokens" icon="approve-check">
    Use JWT tokens for user authentication
  </Card>
  <Card title="API Keys" icon="seti:lock">
    Use API keys for server-to-server requests
  </Card>
</CardGrid>
```

### Adding New Pages

1. Create a new `.mdx` file in `src/content/docs/`
2. Add frontmatter with title and description
3. Update the sidebar in `astro.config.mjs` if needed
4. Write your content using Markdown/MDX

### Style Guide

- Use clear, concise language
- Include code examples for API endpoints
- Add descriptions for all function parameters
- Use callouts for important notes or warnings
- Test all code examples before submitting

## Project Links

- **Main Website**: [arky.io](https://arky.io)
- **Documentation**: [docs.arky.io](https://docs.arky.io)
- **API Endpoint**: [api.arky.io](https://api.arky.io)
- **Admin Panel**: [admin.arky.io](https://admin.arky.io)
- **SDK Package**: [arky-sdk](https://github.com/0xDjole/arky-sdk)

## Support

- **Issues**: Report documentation issues in this repository
- **Questions**: Open a discussion for general questions
- **Contributions**: See [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

Documentation is open-source and available for community contributions.

---

**Built with Astro Starlight** - The best way to build documentation sites.
