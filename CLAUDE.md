# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

No test suite is configured.

## Environment

Copy `.env.example` to `.env.local` before running locally. The contact form API stub works without any env vars in development; wiring up Resend email requires `RESEND_API_KEY` and `CONTACT_EMAIL`.

## Architecture

Single-page portfolio with a blog section, built on **Next.js 16 App Router** with React 19, TypeScript, and Tailwind CSS v4.

**Page structure** — `app/page.tsx` composes five section components in order: Hero → About → Projects → Experience → Contact, followed by Footer. Each section is a standalone component in `components/sections/`.

**Data layer** — All portfolio content (projects, experience, skills) lives as typed TypeScript arrays in `data/`. No CMS or database; edit these files directly to update content.

**Blog** — MDX posts are stored in `content/posts/*.mdx` with gray-matter frontmatter (`title`, `date`, `description`, `tags`). `lib/mdx.ts` reads and parses them at request time via `getAllPosts()` / `getPostBySlug()`. Routes: `app/blog/page.tsx` (listing) and `app/blog/[slug]/page.tsx` (post).

**Contact API** — `app/api/contact/route.ts` validates submissions with Zod v4 (note: use `.pipe(z.email())` not `.email()` — Zod v4 deprecation). Email sending via Resend is stubbed out with TODO comments.

**UI components** — Base primitives (Button, Card, Badge, Separator) are in `components/ui/` using shadcn conventions with `class-variance-authority`. Radix UI and Base UI are both available.

**Theming** — Dark mode only (`defaultTheme="dark"`, `enableSystem={false}`). Theme provider wraps the app in `app/layout.tsx`. Fonts: Inter (sans) and Fira Code (mono) via `next/font`.

**Security headers** — Defined directly in `next.config.ts` via the `headers()` function; covers CSP, HSTS, X-Frame-Options, etc.

**Deployment** — Vercel (`vercel.json`). Vercel Analytics and Speed Insights are already integrated in the root layout.
