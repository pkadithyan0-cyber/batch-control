# English rootme

A responsive Next.js landing page with a live next-batch countdown and a minimal black-and-gold hero canvas.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default batch start is `2026-12-01T12:00:00+05:30`; set `NEXT_PUBLIC_BATCH_START_DATE` in `.env.local` to the next scheduled batch. The value must be an ISO-8601 date with timezone. Set `NEXT_PUBLIC_BATCH_STARTED_MESSAGE` to customize the zero state. Restart the dev server after changing environment values.

## Replace the logo

The included `public/images/rootme-logo.svg` is a lightweight placeholder wordmark because the supplied logo asset was not present in the project. Replace that file with the approved logo while keeping the same filename, or update the `src` in `components/Header.tsx`. If using a PNG, place it at `public/images/rootme-logo.png` and change the source path accordingly. Preserve its aspect ratio and update the Image width/height dimensions to match the source ratio.

## Deploy to Vercel

Import the repository into Vercel and deploy with the detected Next.js preset. Add `NEXT_PUBLIC_BATCH_START_DATE` and, optionally, `NEXT_PUBLIC_BATCH_STARTED_MESSAGE` in **Project Settings → Environment Variables** for Production (and Preview if needed), then redeploy after changing them. The date is embedded into the client bundle as a public variable, so it must not contain secrets.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide React.
