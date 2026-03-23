# Claudia Alvaradejo — professional site

Vite + React + TypeScript + Tailwind CSS. **All copy and labels** live in [`src/content/site.ts`](src/content/site.ts) (counseling psychology focus — edit `professionalTitle`, `about`, and portfolio blurbs to match the resume).

## Setup

```bash
cd Clau-portfolio
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: test production build locally
```

## Content

- **PDFs and images** are in [`public/`](public/) and are linked from `site.ts`.
- Update **`site.email`**, **about paragraphs**, and **portfolio descriptions** in `site.ts`.
- Replace the placeholder email before publishing.

## Lint

```bash
npm run lint
```
