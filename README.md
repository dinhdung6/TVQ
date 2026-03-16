# Tâm Việt Quang Website

A complete Next.js + TypeScript + Supabase website with background videos, form submissions, and admin dashboard.

## ✨ Features

✅ 5 main pages with responsive design
✅ Background video heroes on 3 main pages
✅ Contact, consultation, and newsletter forms
✅ Supabase database integration
✅ Admin dashboard
✅ News and project management
✅ TypeScript for type safety
✅ Tailwind CSS styling
✅ Mobile-first design

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 18, TypeScript
- **Styling:** Tailwind CSS, Shadcn/ui
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth (JWT)
- **Deployment:** Vercel
- **Forms:** React Hook Form

## 🗂️ Project Structure

```
app/
├── page.tsx              # Homepage
├── eduverse/page.tsx     # Eduverse
├── technology/page.tsx   # Technology
├── about/page.tsx        # About
├── contact/page.tsx      # Contact
├── admin/page.tsx        # Admin dashboard
└── api/                  # API routes
    ├── contact/route.ts
    ├── consultation/route.ts
    ├── newsletter/route.ts
    ├── news/route.ts
    └── projects/route.ts

components/
├── header.tsx
├── footer.tsx
├── forms/               # Form components
├── sections/            # Section components
└── ui/                  # Shadcn UI components

lib/
├── supabase.ts         # Database client
├── auth-context.tsx    # Authentication
├── types.ts            # Type definitions
└── hooks.ts            # Custom hooks

public/
├── videos/             # Background videos
│   ├── hero-landing.mp4
│   ├── hero-eduverse.mp4
│   └── hero-technology.mp4
└── images/             # Static images

scripts/
└── init-supabase.sql   # Database setup
```

## 🚀 Deployment

### To Vercel:
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables from Supabase
4. Deploy

### Environment Variables Needed:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 📊 Database Tables

- `contact_submissions` - Contact form data
- `consultation_requests` - Service inquiries
- `newsletter_subscribers` - Email list
- `news_posts` - Blog articles
- `projects` - Portfolio
- `services` - Services
- `team_members` - Team info
- `user_profiles` - User accounts


**Built with Next.js, TypeScript, Supabase, and Tailwind CSS**

Last updated: March 2026
