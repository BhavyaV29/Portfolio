# Bhavya Vashisht — Portfolio

Personal portfolio for Bhavya Vashisht, a backend and ML-platform engineer. The live site is [bhavyaportfolio.site](https://bhavyaportfolio.site).

## Stack

- Next.js and React with TypeScript
- Tailwind CSS
- Vercel Analytics
- Netlify

## Local development

Requires Node.js 20.9 or newer and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Quality checks:

```sh
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```

## Deployment

Netlify builds the site with `pnpm run build` using the configuration in `netlify.toml` and the Next.js Netlify plugin.
