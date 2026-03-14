# Complete Setup Guide - Tâm Việt Quang Website

## Step-by-Step Implementation Guide

This guide will walk you through setting up the complete website with Supabase integration, background videos, and form submissions.

---

## PHASE 1: Supabase Setup (15-20 minutes)

### 1.1 Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in with GitHub or email
4. Click "New Project"
5. Fill in:
   - **Name**: `tam-viet-quang-website`
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to your audience (Singapore recommended for Vietnam)
6. Click "Create new project"
7. Wait for database initialization (2-3 minutes)

### 1.2 Get Supabase Credentials
1. After project is created, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (starts with `https://`)
   - **Anon Key** (starts with `eyJ`)
3. Save them somewhere safe

### 1.3 Set Up Environment Variables
1. In your project root, create/edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

2. Replace values with your actual credentials from Step 1.2
3. Save the file
4. **Important**: This file is in `.gitignore`, so it won't be committed

### 1.4 Initialize Database Tables
1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Open `/scripts/init-supabase.sql` in your local project
4. Copy ALL the SQL code
5. Paste it into the SQL Editor query box
6. Click "Run" (or Cmd+Enter)
7. Wait for success message
8. Tables should now appear in **Database** → **Tables**

### 1.5 Enable Email Authentication (Optional but Recommended)
1. Go to **Authentication** → **Providers**
2. Find "Email" and click it
3. Toggle "Confirm email"
4. Save settings
5. Go to **URL Configuration**
6. Add your app URL:
   - Development: `http://localhost:3000`
   - Production: `https://yourdomain.com`

---

## PHASE 2: Add Background Videos (10-15 minutes)

### 2.1 Video Requirements
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (minimum)
- **Size**: Under 50MB each
- **Duration**: 15-30 seconds
- **Frame rate**: 24fps or 30fps

### 2.2 Get Videos
You need 3 videos:

**Option A: Use Your Own Videos**
- Record or create videos for each page
- Use video editing software (ffmpeg, DaVinci Resolve, etc.)
- Optimize for web

**Option B: Use Stock Video Sites**
- [Pexels Videos](https://www.pexels.com/search/videos/) (Free)
- [Pixabay Videos](https://pixabay.com/videos/) (Free)
- [Unsplash Videos](https://unsplash.com/videos) (Free)
- Search for: "office", "technology", "education"

**Option C: Use Simple Background (If No Videos)**
You can skip videos and use gradient backgrounds by modifying HeroWithVideo component.

### 2.3 Add Videos to Project
1. Create folder: `public/videos/` (if it doesn't exist)
2. Download or create your videos
3. Place these files in `public/videos/`:
   - `hero-landing.mp4` (Homepage)
   - `hero-eduverse.mp4` (Eduverse page)
   - `hero-technology.mp4` (Technology page)

### 2.4 Optimize Videos (Optional but Recommended)
If videos are too large, optimize using ffmpeg:

```bash
ffmpeg -i input-video.mp4 -vcodec libx264 -crf 23 -acodec aac -strict -2 output.mp4
```

---

## PHASE 3: Configure Forms and API Routes (5-10 minutes)

### 3.1 Forms Are Already Integrated
All forms automatically send to Supabase:
- **Contact Form** → `contact_submissions` table
- **Consultation Form** → `consultation_requests` table
- **Newsletter Form** → `newsletter_subscribers` table

### 3.2 Test Form Submissions
1. Start dev server: `npm run dev`
2. Navigate to `http://localhost:3000/contact`
3. Fill out contact form
4. Submit
5. Check Supabase Dashboard → **Database** → **contact_submissions**
6. You should see your submission

### 3.3 Email Notifications (Optional - Requires Backend)
To send emails when forms are submitted:
1. Set up a simple backend service (Node.js/Python)
2. Or use Supabase Edge Functions
3. Or use a service like SendGrid/Mailgun

For now, you can check submissions manually in Supabase dashboard.

---

## PHASE 4: Content Management (20-30 minutes)

### 4.1 Add News Posts via Supabase
1. Go to **Supabase Dashboard** → **Database** → **news_posts**
2. Click "Insert Row"
3. Fill in:
   - **title**: Article title
   - **slug**: URL-friendly name (e.g., "first-article")
   - **excerpt**: Short summary
   - **content**: Full article text
   - **category**: Optional (e.g., "education", "technology")
   - **author**: Your name
   - **is_published**: Toggle ON
   - **published_at**: Click "Now"
   - **image_url**: Optional image link
4. Click "Save"

### 4.2 Add Projects/Portfolio via Supabase
1. Go to **Database** → **projects**
2. Click "Insert Row"
3. Fill in:
   - **title**: Project name
   - **slug**: URL-friendly name
   - **description**: What the project does
   - **category**: erp, cms, web, ar, ai, or marketing
   - **client_name**: Company name
   - **link**: Optional project URL
   - **is_published**: Toggle ON
   - **image_url**: Optional preview image
4. Click "Save"

### 4.3 Manage Services
1. Go to **Database** → **services**
2. Services are pre-populated with sample data
3. Edit them or add your own
4. Services appear on the homepage and service pages

---

## PHASE 5: Deployment (10-15 minutes)

### 5.1 Deploy to Vercel
1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js
6. Under "Environment Variables", add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
7. Click "Deploy"
8. Wait for deployment to complete

### 5.2 Update Supabase URL Configuration
1. After deployment, get your live URL (e.g., `https://myapp.vercel.app`)
2. Go to Supabase → **Authentication** → **URL Configuration**
3. Add your live URL to the list
4. Save

### 5.3 Test Live Site
1. Visit your deployed URL
2. Try submitting a form
3. Check Supabase for the submission
4. Test all pages and links

---

## PHASE 6: Customization (Ongoing)

### 6.1 Update Content
- Edit text in page files: `/app/eduverse/page.tsx`, etc.
- Add/edit projects and news in Supabase
- Update header navigation in `/components/header.tsx`

### 6.2 Change Colors
1. Edit Tailwind config: `tailwind.config.ts`
2. Or modify color classes directly in components
3. Primary colors used: blue-600, purple-600, indigo-600

### 6.3 Replace Images
- Place images in `public/images/`
- Update `src` attributes in components
- Use `Image` component from Next.js for optimization

---

## Troubleshooting

### Problem: "Supabase is not configured"
**Solution:**
- Check `.env.local` exists in project root
- Verify `NEXT_PUBLIC_SUPABASE_URL` is correct
- Restart dev server: `npm run dev`
- Clear browser cache

### Problem: Forms don't submit
**Solution:**
- Check browser console for errors
- Verify Supabase credentials in `.env.local`
- Check table names in `/app/api/contact/route.ts`
- Ensure Supabase tables exist (run SQL script again)

### Problem: Videos don't play
**Solution:**
- Place videos in `public/videos/`
- Use MP4 format with H.264 codec
- Check file names match component code:
  - `hero-landing.mp4`
  - `hero-eduverse.mp4`
  - `hero-technology.mp4`
- Use browser DevTools to check network tab

### Problem: Build fails
**Solution:**
- Delete `.next` folder: `rm -rf .next`
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Run build: `npm run build`

---

## File Structure Overview

```
project-root/
├── app/
│   ├── page.tsx (Homepage)
│   ├── eduverse/
│   │   └── page.tsx
│   ├── technology/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── api/
│   │   ├── contact/route.ts
│   │   ├── consultation/route.ts
│   │   ├── newsletter/route.ts
│   │   ├── news/route.ts
│   │   └── projects/route.ts
│   └── layout.tsx
├── components/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── forms/
│   │   ├── contact-form.tsx
│   │   ├── consultation-form.tsx
│   │   └── newsletter-form.tsx
│   └── sections/
│       ├── hero-with-video.tsx
│       ├── news-section.tsx
│       └── projects-section.tsx
├── lib/
│   ├── supabase.ts (Supabase client)
│   ├── auth-context.tsx (Auth provider)
│   ├── types.ts (TypeScript types)
│   ├── hooks.ts (Custom React hooks)
│   └── utils.ts
├── public/
│   ├── videos/
│   │   ├── hero-landing.mp4
│   │   ├── hero-eduverse.mp4
│   │   └── hero-technology.mp4
│   └── images/
├── scripts/
│   └── init-supabase.sql (Database setup)
├── .env.local (Your credentials - not committed)
├── SUPABASE_SETUP.md
├── VIDEOS_SETUP.md
├── ENV_SETUP.md
└── COMPLETE_SETUP_GUIDE.md (This file)
```

---

## Next Steps

1. **Follow Phases 1-2** to set up Supabase and videos
2. **Test Form Submissions** (Phase 3) to ensure everything works
3. **Add Your Content** (Phase 4) - news, projects, and services
4. **Deploy to Vercel** (Phase 5) when ready
5. **Customize** (Phase 6) with your branding and content

---

## Support & Resources

- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Video Optimization**: https://web.dev/video/

For questions or issues, check the troubleshooting section above or review the code comments in the files.
