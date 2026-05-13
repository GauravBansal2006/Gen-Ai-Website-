# GenAI Student Portfolio

A production-ready personal blog and portfolio for a B.Tech CSE student focused on Gen AI, hackathons, events, coding, and college life.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- Framer Motion
- File-based MDX blog in `content/blog`
- Dark/light mode with `next-themes`
- SEO metadata, OpenGraph image, sitemap, and robots

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For production checks:

```bash
npm run build
npm run start
```

## Add a New Blog Post

Create a new `.mdx` file inside `content/blog`.

Example:

````mdx
---
title: "My New AI Build"
description: "What I learned while building a small AI product."
date: "2026-05-13"
tags:
  - Gen AI
  - Next.js
category: "AI Builds"
featured: false
author: "Aarav Sharma"
---

## Intro

Write your post here.

```ts
console.log("Code blocks are highlighted");
```
````

The file name becomes the URL. For example, `content/blog/my-new-ai-build.mdx` becomes `/blog/my-new-ai-build`.

## Deploy on GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Deploy on Vercel

1. Push the project to GitHub.
2. Open Vercel and import the repository.
3. Keep the framework preset as Next.js.
4. Add `NEXT_PUBLIC_SITE_URL` in environment variables with your deployed URL.
5. Deploy.

## Change Colors and Theme

Edit CSS variables in `app/globals.css`:

- `--background`
- `--foreground`
- `--primary`
- `--accent`
- `--muted`
- `--border`

Tailwind theme extensions live in `tailwind.config.ts`, including glow shadows, grid backgrounds, font families, and animation tokens.

## Edit Personal Information

Update `lib/site.ts`:

- Name, title, description
- Social links
- Location and role
- Currently learning list
- Interests

Update cards and sample content in:

- `data/projects.ts`
- `data/hackathons.ts`
- `data/timeline.ts`
- `content/blog/*.mdx`
