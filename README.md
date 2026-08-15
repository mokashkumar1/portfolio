# Mokash Kumar - Portfolio

Recruiter-focused portfolio for Mokash Kumar, a Computer Systems Engineering student building practical software, developing applied AI/ML skills, and seeking software engineering or AI/ML internship opportunities.

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS
- Static project case study route
- Vercel deployment

## Main sections

The homepage presents a direct profile summary, proof points, selected projects, relevant experience, education, a focused technical stack, and contact links. SmartCR and the MUET Results Portal are the primary software projects, with Rickshaw Fare Predictor providing early applied machine-learning evidence.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run type-check
npm run build
```

## Project structure

- `app/` - pages, metadata, and global styles
- `components/` - reusable UI and page sections
- `data/portfolio.ts` - verified portfolio copy and links
- `public/assets/` - profile, project, and resume assets

## Deployment

The production site is deployed on Vercel at [mokashkumar.vercel.app](https://mokashkumar.vercel.app/). Deployments should use `npm run build`; this repository does not require runtime secrets for the public portfolio.
