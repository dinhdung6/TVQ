# Tâm Việt Quang Website - Implementation Guide

## Overview

This is a complete Next.js + TypeScript + Supabase website for Tâm Việt Quang with:
- ✅ 4 main pages with background videos (Home, Eduverse, Technology, About, Contact)
- ✅ Supabase integration for authentication and data management
- ✅ Contact, consultation, and newsletter forms with database storage
- ✅ Admin dashboard for managing content
- ✅ News and project portfolio management
- ✅ Responsive design with Tailwind CSS

---

## 📋 File Structure

```
project/
├── app/
│   ├── page.tsx                    # Homepage with hero video
│   ├── eduverse/page.tsx           # Eduverse page with video
│   ├── technology/page.tsx         # Technology services page with video
│   ├── about/page.tsx              # About us page
│   ├── contact/page.tsx            # Contact page with form
│   ├── admin/page.tsx              # Admin dashboard
│   ├── api/
│   │   ├── contact/route.ts        # Contact form API
│   │   ├── consultation/route.ts   # Consultation API
│   │   ├── newsletter/route.ts     # Newsletter API
│   │   ├── news/route.ts           # News data API
│   │   └── projects/route.ts       # Projects data API
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── header.tsx                  # Main navigation
│   ├── footer.tsx
│   ├── forms/
│   │   ├── contact-form.tsx        # Contact form
│   │   ├── consultation-form.tsx   # Consultation form
│   │   └── newsletter-form.tsx     # Newsletter form
│   └── sections/
│       ├── hero-with-video.tsx     # Hero section with video background
│       ├── news-section.tsx        # News carousel component
│       └── projects-section.tsx    # Projects gallery component
│
├── lib/
│   ├── supabase.ts                 # Supabase client setup
│   ├── auth-context.tsx            # Auth provider & hooks
│   ├── types.ts                    # TypeScript interfaces
│   ├── hooks.ts                    # Custom React hooks for data
│   └── utils.ts
│
├── public/
│   ├── videos/
│   │   ├── hero-landing.mp4        # Homepage video
│   │   ├── hero-eduverse.mp4       # Eduverse page video
│   │   └── hero-technology.mp4     # Technology page video
│   └── images/
│
├── scripts/
│   └── init-supabase.sql           # Database initialization SQL
│
├── COMPLETE_SETUP_GUIDE.md         # Detailed step-by-step guide
├── QUICK_START.md                  # Quick checklist
├── SUPABASE_SETUP.md              # Supabase-specific setup
├── VIDEOS_SETUP.md                # Video setup instructions
├── ENV_SETUP.md                   # Environment variables guide
└── README_IMPLEMENTATION.md        # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase account (free at supabase.com)
- GitHub account (for deploying to Vercel)
- MP4 video files for backgrounds (optional but recommended)

### 1. Supabase Setup (20 mins)

Follow **SUPABASE_SETUP.md** or these quick steps:

```bash
# 1. Create account at supabase.com
# 2. Create project: "tam-viet-quang-website"
# 3. Get credentials from Settings → API
# 4. Create .env.local:
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# 5. Run SQL from /scripts/init-supabase.sql in Supabase SQL Editor
```

### 2. Add Background Videos (10 mins)

Create `public/videos/` and add:
- `hero-landing.mp4` (Homepage)
- `hero-eduverse.mp4` (Eduverse)
- `hero-technology.mp4` (Technology)

See **VIDEOS_SETUP.md** for detailed instructions.

### 3. Install & Test Locally (5 mins)

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### 4. Test Form Submission

1. Go to http://localhost:3000/contact
2. Fill and submit the form
3. Check Supabase: Dashboard → contact_submissions table
4. You should see the submission!

### 5. Add Content (20 mins)

**Add News:**
- Supabase → Database → news_posts → Insert Row
- Fill title, slug, excerpt, content, author, published_at

**Add Projects:**
- Supabase → Database → projects → Insert Row
- Fill title, slug, description, category, client_name

### 6. Deploy to Vercel (15 mins)

```bash
git add .
git commit -m "Initial commit"
git push origin main

# Go to vercel.com → Import Project → Select your GitHub repo
# Add environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
# Click Deploy
```

---

## 🔧 Key Components

### Hero with Video Component
```tsx
<HeroWithVideo
  videoSrc="/videos/hero-landing.mp4"
  tagline="WELCOME"
  title="Main Title"
  subtitle="Subtitle text"
  primaryCta={{ text: 'Button', href: '/page' }}
/>
```

### Contact Form
```tsx
<ContactForm />
```
Auto-submits to Supabase `contact_submissions` table.

### News Section
```tsx
<NewsSection limit={3} showViewMore={true} />
```
Displays latest news from Supabase.

### Projects Gallery
```tsx
<ProjectsSection category="web" showFilter={true} />
```
Shows projects with filtering.

---

## 📱 Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage with hero video and features |
| `/eduverse` | Eduverse platform overview |
| `/technology` | Technology services showcase |
| `/about` | Company information and team |
| `/contact` | Contact form page |
| `/news` | Blog/news listing |
| `/projects` | Portfolio projects |
| `/admin` | Admin dashboard (requires login) |

---

## 🗄️ Database Schema

### Tables
- **contact_submissions** - Website contact form submissions
- **consultation_requests** - Service consultation requests
- **newsletter_subscribers** - Newsletter email list
- **news_posts** - Blog articles and news
- **projects** - Portfolio projects
- **services** - Service offerings
- **team_members** - Team info
- **user_profiles** - User data (with auth)

All tables have timestamps and RLS policies for security.

---

## 🔐 Environment Variables

```env
# Required - Get from Supabase Settings → API
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

These are public (NEXT_PUBLIC_*) because they're used in the browser for authentication.

---

## 🎯 Form Handling

All forms auto-submit to Supabase via API routes:

1. **Contact Form** (`/app/api/contact/route.ts`)
   - Stores in `contact_submissions`
   - Validates email and message

2. **Consultation Form** (`/app/api/consultation/route.ts`)
   - Stores in `consultation_requests`
   - Captures service type and company

3. **Newsletter Form** (`/app/api/newsletter/route.ts`)
   - Stores in `newsletter_subscribers`
   - Prevents duplicate emails

---

## 📊 Admin Dashboard

Access at `/admin` (requires authentication)

Features:
- View submission statistics
- Recent contact submissions
- Link to manage news, projects, services
- View consultations and subscribers

---

## 🎨 Customization

### Change Colors
Edit Tailwind classes in components (blue-600 is primary):
```tsx
<div className="bg-blue-600">Blue</div>
<div className="bg-purple-600">Purple</div>
```

### Update Content
- Edit page text in `/app/*/page.tsx`
- Update header navigation in `/components/header.tsx`
- Manage database content via Supabase

### Replace Logo
Update in `/components/header.tsx` and `/components/footer.tsx`

### Add Pages
Create new folder in `/app/` with `page.tsx`:
```bash
mkdir -p app/new-page
# Create app/new-page/page.tsx
```

---

## 🚨 Troubleshooting

### Forms not submitting?
1. Check `.env.local` exists and has correct values
2. Verify Supabase URL and key are correct
3. Check browser console for errors
4. Restart dev server: `npm run dev`

### Videos not playing?
1. Check files exist: `public/videos/hero-*.mp4`
2. Use MP4 format with H.264 codec
3. Check file sizes (should be under 50MB)
4. Clear browser cache

### Supabase connection errors?
1. Verify tables exist (run init SQL again)
2. Check RLS policies aren't blocking access
3. Confirm API key has correct permissions

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📈 Performance Tips

1. **Optimize videos** - Use ffmpeg to compress if over 50MB
2. **Use Next.js Image** - For image optimization
3. **Enable caching** - Supabase caches queries automatically
4. **Lazy load sections** - Components load as user scrolls

---

## 🔄 Updating Content

### News Posts
1. Supabase → news_posts
2. Click "Insert Row"
3. Fill all fields
4. Toggle `is_published` ON
5. Save - appears on `/news` page instantly

### Projects
1. Supabase → projects
2. Click "Insert Row"
3. Fill title, description, category
4. Toggle `is_published` ON
5. Save - appears on `/projects` page

### Services
1. Supabase → services
2. Edit or insert rows
3. Changes reflect throughout site

---

## 📞 Support Resources

- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org/docs/

---

## 🎓 Learning Resources

- Forms: See `/components/forms/` for examples
- API Routes: See `/app/api/` for route handlers
- Data Fetching: See `/lib/hooks.ts` for custom hooks
- Auth: See `/lib/auth-context.tsx` for authentication

---

## ✅ Deployment Checklist

- [ ] Supabase project created and initialized
- [ ] `.env.local` configured with Supabase credentials
- [ ] Videos added to `public/videos/`
- [ ] Content added (news, projects, team)
- [ ] Forms tested locally
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables set in Vercel
- [ ] Deploy successful
- [ ] Live site tested
- [ ] Supabase URL updated with live domain

---

## 📝 License

This website is custom built for Tâm Việt Quang. All rights reserved.

---

**For detailed setup instructions, see COMPLETE_SETUP_GUIDE.md**
