# Contributing to Arky Documentation

Thank you for your interest in improving the Arky documentation! This guide will help you contribute effectively.

## Ways to Contribute

- **Fix typos or errors** - Even small improvements matter!
- **Improve clarity** - Make explanations easier to understand
- **Add examples** - Code examples help developers learn faster
- **Update outdated content** - Keep the docs current with the latest API changes
- **Add missing documentation** - Fill in gaps in the documentation
- **Improve structure** - Suggest better organization of content

## Getting Started

### Prerequisites

- Git installed on your computer
- Node.js v18 or later
- A GitHub account
- Basic familiarity with Markdown

### Local Setup

1. **Fork the repository**
   - Click the "Fork" button at the top right of this repository
   - This creates your own copy of the repository

2. **Clone your fork**
   ```bash
   git clone git@github.com:YOUR_USERNAME/docs.arky.io.git
   cd docs.arky.io
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to [http://localhost:4321](http://localhost:4321)
   - You should see the documentation site running locally

## Making Changes

### 1. Create a New Branch

Always create a new branch for your changes:

```bash
git checkout -b improve-api-docs
```

Use descriptive branch names:
- `fix-typo-in-authentication`
- `add-examples-to-reservation-api`
- `improve-quick-start-guide`

### 2. Edit Documentation

Documentation files are located in `src/content/docs/`:

```
src/content/docs/
├── index.mdx              # Homepage
├── introduction.mdx       # Introduction page
├── quick-start.mdx        # Quick start guide
├── core-concepts.mdx      # Core concepts
├── api/                   # API reference
│   ├── business.mdx
│   ├── users.mdx
│   ├── cms.mdx
│   ├── eshop.mdx
│   ├── reservations.mdx
│   ├── payments.mdx
│   ├── media.mdx
│   ├── notifications.mdx
│   └── analytics.mdx
└── guides/                # How-to guides
    ├── blocks.mdx
    ├── sdk.mdx
    ├── errors.mdx
    └── troubleshooting.mdx
```

### 3. Documentation Format

Files use MDX (Markdown with JSX). Here's a template:

```mdx
---
title: Page Title
description: Brief description for SEO and previews
---

## Section Heading

Write your content here using standard Markdown.

### Subsection

You can use:
- Lists
- **Bold text**
- *Italic text*
- `inline code`
- [Links](https://example.com)

### Code Examples

\`\`\`typescript
// Always include code examples for API endpoints
const result = await sdk.eshop.getProducts({ limit: 10 });
\`\`\`

### Using Starlight Components

import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
  <Card title="Feature Name" icon="rocket">
    Description of the feature
  </Card>
</CardGrid>
```

### 4. Writing Style Guidelines

**Do:**
- ✅ Use clear, simple language
- ✅ Include practical code examples
- ✅ Explain the "why" not just the "how"
- ✅ Use active voice ("Create a user" not "A user is created")
- ✅ Test all code examples before submitting
- ✅ Add descriptions for function parameters and return values
- ✅ Link to related documentation

**Don't:**
- ❌ Use jargon without explanation
- ❌ Write long paragraphs (break into shorter sections)
- ❌ Include code examples without context
- ❌ Assume prior knowledge

### 5. Test Your Changes

Before submitting:

1. **Check locally**
   ```bash
   npm run dev
   ```
   Visit http://localhost:4321 and verify your changes

2. **Build test**
   ```bash
   npm run build
   ```
   Ensure the build completes without errors

3. **Check for typos**
   - Use a spell checker
   - Read your content out loud

### 6. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "Add examples to reservation API documentation"
```

**Good commit messages:**
- "Fix typo in authentication guide"
- "Add code examples for payment processing"
- "Improve clarity in quick start guide"
- "Update SDK version in installation instructions"

**Bad commit messages:**
- "Update docs"
- "Fix stuff"
- "Changes"

### 7. Push to Your Fork

```bash
git push origin improve-api-docs
```

### 8. Open a Pull Request

1. Go to the original repository on GitHub
2. Click "Pull Requests" → "New Pull Request"
3. Click "compare across forks"
4. Select your fork and branch
5. Fill in the PR description:
   - What changes did you make?
   - Why are these changes needed?
   - Link to any related issues

**Good PR description:**
```
## Changes
- Added code examples to the Reservation API documentation
- Improved explanation of provider scheduling
- Fixed typos in the availability section

## Why
The reservation API documentation was missing practical examples,
making it harder for developers to get started.

Closes #42
```

## Code of Conduct

### Be Respectful

- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what's best for the community

### Be Collaborative

- Help others learn and contribute
- Share knowledge and experience
- Credit others for their work

## Review Process

1. **Automated checks** - GitHub Actions will run build tests
2. **Maintainer review** - A maintainer will review your changes
3. **Feedback** - You may be asked to make revisions
4. **Merge** - Once approved, your PR will be merged
5. **Deploy** - Changes automatically deploy to docs.arky.io

## Questions?

- **General questions**: Open a [Discussion](https://github.com/0xDjole/docs.arky.io/discussions)
- **Bug reports**: Open an [Issue](https://github.com/0xDjole/docs.arky.io/issues)
- **Security concerns**: Email security@arky.io (do not open public issues)

## Recognition

All contributors will be recognized in our documentation. Your GitHub profile will appear in the git history, and significant contributors may be featured in the acknowledgments section.

## License

By contributing to this documentation, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for helping improve Arky's documentation! Every contribution makes a difference. 🎉
