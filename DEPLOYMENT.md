# Deployment Guide

## Pre-Deployment Checklist

### 1. Asset Generation (Required)

Generate the following assets before deploying:

#### Favicon Files
```bash
# Using ImageMagick (if installed)
convert public/brand-mark.svg -resize 32x32 public/favicon.ico

# OR use https://favicon.io/favicon-converter/
# Upload public/brand-mark.svg and download the package
```

#### Apple Touch Icon (180×180)
```bash
convert public/brand-mark.svg -resize 180x180 -background transparent public/apple-touch-icon.png
```

#### OpenGraph Image (1200×630)
Create using Figma, Canva, or similar:
- Background: `#0B1B2B` (brand-navy)
- Centered brand mark
- Title: "The Better Half Property Co"
- Subtitle: "Brighton & Hove property, done properly."
- Save as `public/og-image.png`

### 2. Replace Placeholder Content

- [ ] Update contact email in all components (currently `hello@betterhalfproperty.co`)
- [ ] Update phone number in Footer and Contact page (currently `01273 XXX XXX`)
- [ ] Replace placeholder images in Hero component with real property photos
- [ ] Update social media links in Footer.tsx
- [ ] Add Google Analytics tracking ID (if needed)

### 3. Configure Email Service

Choose and configure an email provider:

**Recommended: Resend**
```bash
pnpm add resend
```

Update `lib/mailer.ts`:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  await resend.emails.send({
    from: 'website@betterhalfproperty.co',
    to: 'hello@betterhalfproperty.co',
    subject: `New Contact: ${data.name}`,
    html: `...your template...`
  });
}
```

Add to `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### 4. Domain Configuration

Update `next-sitemap.config.js`:
```javascript
siteUrl: 'https://betterhalfproperty.co'
```

## Vercel Deployment

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: The Better Half Property Co website"
git branch -M main
git remote add origin https://github.com/yourusername/better-half-property.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel auto-detects Next.js settings
4. Add environment variables:
   - `SITE_URL`: Your production domain
   - `RESEND_API_KEY`: Your email service API key (if configured)
5. Click "Deploy"

### Step 3: Custom Domain

1. In Vercel dashboard, go to Project Settings → Domains
2. Add your custom domain: `betterhalfproperty.co`
3. Update DNS records as instructed by Vercel
4. Wait for SSL certificate provisioning (~5 minutes)

### Step 4: Verify Deployment

- [ ] Visit your site and check all pages load
- [ ] Test navigation between pages
- [ ] Submit contact form (check email arrives)
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Check OG image in social media preview tools
- [ ] Verify sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Verify robots.txt: `https://yourdomain.com/robots.txt`

## Performance Optimization

### Image Optimization

Replace Hero placeholder divs with Next.js Image:

```tsx
import Image from "next/image";

<Image
  src="/images/brighton-property.jpg"
  alt="Brighton seafront property"
  width={400}
  height={600}
  className="rounded-2xl"
  priority // for above-fold images
/>
```

### Font Optimization

Fonts are already optimized via Google Fonts CDN with `display=swap`.

### Analytics (Optional)

Add Google Analytics to `app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## Post-Deployment

### Monitoring

1. Set up Vercel Analytics (built-in, no config needed)
2. Configure error tracking (optional):
   - [Sentry](https://sentry.io)
   - [LogRocket](https://logrocket.com)

### SEO

1. Submit sitemap to Google Search Console
2. Verify site ownership
3. Monitor indexing status

### Maintenance

- Monitor contact form submissions
- Update projects portfolio regularly
- Keep dependencies updated: `pnpm update`

## Troubleshooting

### Build Fails

```bash
# Check TypeScript errors locally
pnpm tsc --noEmit

# Check build locally
pnpm build
```

### Email Not Sending

1. Verify API key is correct in Vercel environment variables
2. Check email service dashboard for errors
3. Test with console.log to ensure route is being hit

### Images Not Loading

1. Ensure images are in `public/` directory
2. Use absolute paths: `/images/photo.jpg`
3. Check image file extensions match imports

### Sitemap Not Generating

```bash
# Manually generate sitemap
pnpm postbuild

# Check output in public/sitemap.xml
```

## Rollback Procedure

If deployment fails:

1. Go to Vercel dashboard → Deployments
2. Find last working deployment
3. Click "..." → Promote to Production

## Support

- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Tailwind: https://tailwindcss.com/docs

---

**Estimated Time to Deploy:** 30-60 minutes (including asset generation)

