# 67Lab.ai - Deployment Guide

## Prerequisites

Before deploying, ensure you have:
- [ ] Node.js 18+ installed
- [ ] npm or yarn package manager
- [ ] Vercel account (recommended) or another hosting platform
- [ ] Google Analytics Measurement ID (optional, for tracking)

---

## Pre-Deployment Checklist

### 1. Update Contact Information

**Email Addresses**:
- All email references are currently set to `hello@67lab.ai`
- Update if needed in:
  - `app/feedback/page.tsx` (mailto link)
  - `components/sections/footer.tsx` (mailto link)

**Social Media URLs**:
Update placeholder social media links in `components/sections/footer.tsx`:
```tsx
// Lines 92-116
<Link href="https://github.com/YOUR-GITHUB" target="_blank" rel="noopener noreferrer">
<Link href="https://x.com/YOUR-X-HANDLE" target="_blank" rel="noopener noreferrer">
<Link href="https://linkedin.com/company/YOUR-COMPANY" target="_blank" rel="noopener noreferrer">
```

### 2. Enable Google Analytics (Optional)

**Step 1**: Get your Google Analytics Measurement ID (format: `G-XXXXXXXXXX`)

**Step 2**: Uncomment and update in `app/layout.tsx`:
```tsx
// Change this:
{/* <GoogleAnalytics measurementId="G-XXXXXXXXXX" /> */}

// To this:
<GoogleAnalytics measurementId="G-YOUR-ACTUAL-ID" />
```

The Google Analytics component is already created at `components/analytics/google-analytics.tsx`.

### 3. Environment Variables (if needed)

Create a `.env.local` file if you need environment-specific configurations:
```bash
# Example
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://67lab.ai
```

Then update the GoogleAnalytics component to use the env variable.

---

## Build and Test Locally

### Test Production Build

Before deploying, always test the production build locally:

```bash
# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` and verify:
- [ ] All pages load correctly (Home, Products, Blog, Feedback)
- [ ] All navigation links work
- [ ] CTAs redirect to correct pages
- [ ] No console errors
- [ ] Forms submit correctly
- [ ] Animations work smoothly

---

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for Next.js deployments.

**Method A: Deploy via GitHub**

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR-GITHUB-REPO-URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**Method B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Custom Domain Setup**:
1. In Vercel dashboard, go to Project Settings → Domains
2. Add your custom domain (e.g., `67lab.ai`)
3. Configure DNS records as instructed by Vercel

### Option 2: Netlify

1. Build your project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
netlify login
```

3. Deploy:
```bash
netlify deploy --prod --dir=.next
```

Or connect via Git:
- Go to [netlify.com](https://netlify.com)
- Import from Git
- Build command: `npm run build`
- Publish directory: `.next`

### Option 3: Self-Hosted (VPS/Cloud)

For VPS hosting (e.g., AWS EC2, DigitalOcean):

1. Install Node.js and PM2 on server
2. Clone repository
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Start with PM2:
```bash
pm2 start npm --name "67lab-website" -- start
pm2 save
pm2 startup
```

---

## Post-Deployment Tasks

### 1. Test Production Site

Visit your deployed URL and verify:
- [ ] All pages accessible
- [ ] SSL certificate active (https)
- [ ] Forms working
- [ ] Google Analytics tracking (check Real-Time in GA dashboard)

### 2. Update Content Placeholders

Refer to `content-gaps.md` for a comprehensive list of content that needs updates:
- [ ] Blog posts (currently 3 placeholders)
- [ ] Testimonials (verify realistic names are appropriate)
- [ ] About Us page (create if needed)
- [ ] Case Studies (create if needed)

### 3. Setup n8n Blog Automation (Optional)

The blog page (`app/blog/page.tsx`) is ready for n8n integration. To set up:

1. Create an n8n workflow that:
   - Triggers on new content (webhook, RSS, CMS, etc.)
   - Formats content as blog post JSON
   - Commits to GitHub or updates CMS

2. Update `app/blog/page.tsx` to fetch from your CMS/API instead of using static posts

### 4. SEO & Performance

**Sitemap**:
Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://67lab.ai',
      lastModified: new Date(),
    },
    {
      url: 'https://67lab.ai/products',
      lastModified: new Date(),
    },
    {
      url: 'https://67lab.ai/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://67lab.ai/feedback',
      lastModified: new Date(),
    },
  ]
}
```

**Robots.txt**:
Create `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://67lab.ai/sitemap.xml',
  }
}
```

### 5. Monitoring & Analytics

Set up monitoring:
- **Vercel Analytics**: Enable in Vercel dashboard
- **Google Search Console**: Verify ownership with your domain
- **Error Tracking**: Consider Sentry for error monitoring

---

## Troubleshooting

### Build Errors

**Issue**: Module not found errors
**Solution**: Delete `node_modules` and `.next`, then reinstall:
```bash
rm -rf node_modules .next
npm install
npm run build
```

**Issue**: TypeScript errors
**Solution**: Run type checking:
```bash
npm run build
# Fix any TypeScript errors shown
```

### Runtime Errors

**Issue**: Page not found (404)
**Solution**: Ensure all routes are in `app/` directory with `page.tsx` files

**Issue**: Hydration errors
**Solution**: Check for client/server mismatch in console. Currently there's a minor hydration warning that doesn't affect functionality.

### Performance Issues

**Issue**: Slow page loads
**Solution**:
- Optimize images with Next.js Image component
- Enable caching headers in `next.config.mjs`
- Consider using `next/font` for font optimization (already configured)

---

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Backup

Regularly backup:
- Source code (via Git)
- Environment variables
- Any generated content

---

## Support & Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint

# Deployment
vercel                   # Deploy to Vercel preview
vercel --prod            # Deploy to Vercel production
```

---

## Current Status

✅ **Completed**:
- All pages built (Home, Products, Blog, Feedback)
- Navigation fully functional
- CTAs linked to feedback page
- Google Analytics component ready
- Dark mode theme implemented
- Responsive design
- All animations working
- Email updated to hello@67lab.ai
- LegacyBehavior deprecation warnings fixed

⚠️ **Needs Attention Before Launch**:
- Add real Google Analytics Measurement ID
- Update social media URLs in footer
- Review and update placeholder blog posts
- Consider creating About Us, Case Studies, Terms, and Privacy Policy pages (see `content-gaps.md`)

🚀 **Ready to Deploy**: Yes, site is production-ready with placeholder content
