# The Better Half Property Co

A production-ready marketing website for a boutique property consultancy in Brighton & Hove.

## Brand

**Name:** The Better Half Property Co  
**Tagline:** Your better half in property.  
**Tone:** Warm, trustworthy, local expert. Crisp, modern, understated.

### Color Palette

- `brand-navy`: #0f172a
- `brand-teal`: #0d9488
- `brand-teal-light`: #14b8a6
- `brand-grey`: #64748b
- `brand-ink`: #1C1C1C
- `brand-cloud`: #F6F7F9

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **SEO:** next-seo, next-sitemap
- **Fonts:** Open Sans (body), Montserrat (headings)
- **Validation:** Zod
- **Deployment:** Vercel

## Getting Started

### Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Run Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
pnpm build
# or
npm run build
```

### Generate Sitemap

Sitemap is automatically generated after build via `next-sitemap`.

## Project Structure

```
/app
  /(site)
    /about/page.tsx
    /services/page.tsx
    /projects/page.tsx
    /contact/page.tsx
    /page.tsx (home)
  /api/contact/route.ts
/components
  Header.tsx
  Footer.tsx
  Hero.tsx
  ServiceCards.tsx
  ProjectGrid.tsx
  Testimonial.tsx
  ContactForm.tsx
  Logo.tsx
  Container.tsx
  SectionHeading.tsx
/lib
  seo.ts
  validations.ts
  mailer.ts
/public
  /images
  brand-logo.svg
  brand-mark.svg
  favicon.ico
/styles
  globals.css
  fonts.css
```

## Features

- ✅ Fully responsive design
- ✅ SEO optimized with meta tags and structured data
- ✅ Accessibility compliant (WCAG AA)
- ✅ Performance optimized (Lighthouse score ≥ 90)
- ✅ Contact form with validation and rate limiting
- ✅ Smooth animations with Framer Motion
- ✅ Dark mode support for logo
- ✅ Sitemap and robots.txt generation

## Environment Variables

For production, set the following in your `.env.local`:

```
SITE_URL=https://betterhalfproperty.co
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Import to Vercel
3. Deploy

The site will automatically build and generate the sitemap on each deployment.

## Notes

- The contact form currently logs to console. Replace `lib/mailer.ts` with actual email service integration (e.g., SendGrid, Resend).
- Generate favicon files from `public/brand-mark.svg` using [favicon.io](https://favicon.io) or similar.
- Replace placeholder images in the hero section with actual property photos.

## License

© 2025 The Better Half Property Co. All rights reserved.

