# Quick Start Checklist

Complete these steps in order to get your website up and running.

## ✅ Pre-Setup (5 minutes)
- [ ] Node.js installed (`node -v` to check)
- [ ] Git configured
- [ ] GitHub account for deploying to Vercel

## ✅ Phase 1: Supabase (20 minutes)
- [ ] Create Supabase account at supabase.com
- [ ] Create new project (name: `tam-viet-quang-website`)
- [ ] Get Project URL and Anon Key from Settings → API
- [ ] Create `.env.local` file in project root
- [ ] Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
- [ ] Copy SQL from `/scripts/init-supabase.sql`
- [ ] Run SQL in Supabase SQL Editor
- [ ] Verify tables created: contact_submissions, consultation_requests, newsletter_subscribers, news_posts, projects

## ✅ Phase 2: Videos (15 minutes)
- [ ] Create or download 3 videos (see VIDEOS_SETUP.md)
- [ ] Create `public/videos/` folder if missing
- [ ] Add these files:
  - [ ] `public/videos/hero-landing.mp4`
  - [ ] `public/videos/hero-eduverse.mp4`
  - [ ] `public/videos/hero-technology.mp4`
- [ ] Each video is MP4, 1920x1080, under 50MB

## ✅ Phase 3: Test Locally (10 minutes)
- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run dev` to start development server
- [ ] Open http://localhost:3000
- [ ] Test form submission on /contact page
- [ ] Check Supabase dashboard for the submission
- [ ] Verify videos play on homepage

## ✅ Phase 4: Content (20 minutes)
- [ ] Add at least 3 news posts in Supabase
  - Go to Database → news_posts
  - Click Insert Row
  - Fill title, slug, excerpt, content, author
  - Toggle is_published ON
  - Set published_at to NOW
- [ ] Add at least 2 projects
  - Go to Database → projects
  - Click Insert Row
  - Fill title, slug, description, category
  - Toggle is_published ON

## ✅ Phase 5: Customize Content (30 minutes)
- [ ] Update company name and logo in Header
- [ ] Edit page copy in:
  - [ ] `/app/page.tsx` (Homepage)
  - [ ] `/app/eduverse/page.tsx` (Eduverse)
  - [ ] `/app/technology/page.tsx` (Technology Services)
  - [ ] `/app/about/page.tsx` (About Us)
  - [ ] `/app/contact/page.tsx` (Contact)
- [ ] Update colors in components (search for `blue-600`)
- [ ] Add your company images to `public/images/`

## ✅ Phase 6: Deploy (15 minutes)
- [ ] Push code to GitHub
- [ ] Go to vercel.com
- [ ] Click "Import Project" and select your repo
- [ ] Add environment variables:
  - [ ] NEXT_PUBLIC_SUPABASE_URL
  - [ ] NEXT_PUBLIC_SUPABASE_ANON_KEY
- [ ] Click "Deploy"
- [ ] Update Supabase URL Configuration with your live domain
- [ ] Test live site

## ✅ Post-Launch (Ongoing)
- [ ] Test all links and forms
- [ ] Check mobile responsiveness
- [ ] Monitor form submissions in Supabase
- [ ] Add more news and projects as needed
- [ ] Update content regularly

---

## Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for TypeScript errors
npx tsc --noEmit

# Format code
npm run format
```

---

## Key Files to Know

| File | Purpose |
|------|---------|
| `.env.local` | Your Supabase credentials (DO NOT COMMIT) |
| `/app/page.tsx` | Homepage content |
| `/app/eduverse/page.tsx` | Eduverse page |
| `/app/technology/page.tsx` | Technology services page |
| `/app/about/page.tsx` | About us page |
| `/app/contact/page.tsx` | Contact page with form |
| `/components/header.tsx` | Navigation menu |
| `/lib/supabase.ts` | Supabase client setup |
| `/scripts/init-supabase.sql` | Database initialization SQL |

---

## When Stuck

1. **Check COMPLETE_SETUP_GUIDE.md** for detailed instructions
2. **Check console for errors**: Open browser DevTools (F12)
3. **Check Supabase status**: Dashboard → Logs
4. **Check deployment logs**: Vercel → Project → Deployments
5. **Restart dev server**: Stop with Ctrl+C, run `npm run dev` again

---

## Estimated Timeline
- Supabase setup: 20 minutes
- Video setup: 15 minutes
- Local testing: 10 minutes
- Content creation: 20 minutes
- Customization: 30 minutes
- Deployment: 15 minutes
- **Total: ~110 minutes (under 2 hours)**

Start with Phase 1 now!
