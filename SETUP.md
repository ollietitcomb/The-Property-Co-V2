# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Generate Favicon and Image Assets

The project includes SVG logos but requires generating PNG/ICO versions for favicons and social media:

### Option 1: Using Online Tools

1. **Favicon:**
   - Visit [favicon.io](https://favicon.io/favicon-converter/)
   - Upload `public/brand-mark.svg`
   - Download and extract the favicon package
   - Replace `public/favicon.ico` with the generated file

2. **Apple Touch Icon:**
   - Generate a 180×180 PNG from `public/brand-mark.svg`
   - Save as `public/apple-touch-icon.png`

3. **OpenGraph Image:**
   - Create a 1200×630 image with:
     - Background: `#0B1B2B` (brand-navy)
     - Center: Brand mark from `public/brand-mark.svg`
     - Text overlay: "The Better Half Property Co"
     - Subtitle: "Brighton & Hove property, done properly."
   - Save as `public/og-image.png`

### Option 2: Using ImageMagick (CLI)

```bash
# Convert SVG to favicon (requires ImageMagick)
convert public/brand-mark.svg -resize 32x32 public/favicon.ico

# Create Apple Touch Icon
convert public/brand-mark.svg -resize 180x180 public/apple-touch-icon.png

# For OG image, use a design tool like Figma, Canva, or Adobe Express
```

### Option 3: Using Figma/Design Tool

1. Open Figma (or your preferred design tool)
2. Import `public/brand-mark.svg`
3. Create artboards:
   - 32×32 for favicon
   - 180×180 for apple-touch-icon
   - 1200×630 for og-image (with text overlay)
4. Export as PNG/ICO

## Replace Placeholder Images

The hero section and project cards use placeholder divs. Replace these with actual property photos:

1. Add images to `public/images/`
2. Update components to use Next.js `Image` component:

```tsx
import Image from "next/image";

<Image
  src="/images/your-photo.jpg"
  alt="Property description"
  width={800}
  height={600}
  className="rounded-2xl"
/>
```

## Configure Email Service

The contact form currently logs to console. To enable email:

1. Choose an email service:
   - [Resend](https://resend.com) (recommended)
   - [SendGrid](https://sendgrid.com)
   - SMTP via Nodemailer

2. Update `lib/mailer.ts` with actual implementation

3. Add API keys to `.env.local`:
   ```
   RESEND_API_KEY=your_api_key
   ```

### Example with Resend:

```bash
pnpm add resend
```

```typescript
// lib/mailer.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  await resend.emails.send({
    from: 'website@betterhalfproperty.co',
    to: 'hello@betterhalfproperty.co',
    subject: `New contact from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
      <p><strong>Timeline:</strong> ${data.timeline || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });
}
```

## Deployment to Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/better-half-property.git
   git push -u origin main
   ```

2. Import to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. Add environment variables in Vercel dashboard:
   - `SITE_URL=https://betterhalfproperty.co`
   - Add email service API keys if configured

4. Deploy!

## Performance Checklist

Before going live, ensure:

- ✅ All placeholder images replaced with optimized WebP/AVIF
- ✅ Favicon files generated and in place
- ✅ OG image created for social sharing
- ✅ Email service configured and tested
- ✅ Google Analytics or tracking added (if needed)
- ✅ Contact form tested in production
- ✅ Run Lighthouse audit (aim for 90+ on all metrics)
- ✅ Test on mobile devices
- ✅ Check all navigation links work

## Customization

### Update Contact Information

Search for placeholder contact details and replace:

- Email: `hello@betterhalfproperty.co`
- Phone: `01273 XXX XXX`
- Social media links in `components/Footer.tsx`

### Update Copy

All page content is in:
- `app/(site)/page.tsx` (Home)
- `app/(site)/services/page.tsx`
- `app/(site)/projects/page.tsx`
- `app/(site)/about/page.tsx`
- `app/(site)/contact/page.tsx`

### Add More Projects

Edit the `projects` array in `components/ProjectGrid.tsx`

### Add More Services

Edit the `services` array in `components/ServiceCards.tsx`

## Troubleshooting

### "Module not found" errors
Run `pnpm install` to ensure all dependencies are installed.

### TypeScript errors
Check that all `@/*` imports are working. The `tsconfig.json` should have proper path mapping.

### Styling not working
Ensure Tailwind is processing files correctly. Check `tailwind.config.ts` includes all content paths.

### Build fails
Check for any TypeScript errors: `pnpm tsc --noEmit`

## Support

For issues or questions about this codebase, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Built with ❤️ for The Better Half Property Co

