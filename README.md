This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Playwright E2E in CI

Run locally:

```bash
npm run test:e2e
```

In GitHub Actions, the workflow [playwright.yml](.github/workflows/playwright.yml) runs on push and pull request to `main`/`master`.

After each run, open the workflow execution and download artifacts:

- `playwright-report`: HTML report
- `playwright-test-results`: raw results and traces

This is the recommended way to show test evidence alongside Vercel deployments, since Vercel links to the same commit status checks.

## Storybook

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run storybook
```

Generate static files:

```bash
npm run build-storybook
```

### Storybook on Vercel

For a dedicated Storybook project on Vercel:

- Project type: `Other`
- Install command: `npm install`
- Build command: `npm run build-storybook`
- Output directory: `storybook-static`

After first deploy, copy the final Storybook URL (for example, `https://bop-mini-demo-storybook.vercel.app`).

### Main app env var (`NEXT_PUBLIC_STORYBOOK_URL`)

Set `NEXT_PUBLIC_STORYBOOK_URL` in the main Next.js app with your final Storybook URL.

Local development (`.env.local`):

```bash
NEXT_PUBLIC_STORYBOOK_URL=https://bop-mini-demo-storybook.vercel.app
```

Vercel (main app project):

- Go to `Settings -> Environment Variables`
- Add `NEXT_PUBLIC_STORYBOOK_URL`
- Use the final Storybook deployment URL as value
- Redeploy the app
