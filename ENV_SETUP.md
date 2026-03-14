# Environment Variables Setup

## Overview
This document explains all environment variables needed for the website to function properly.

## Required Environment Variables

### Supabase Configuration
Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Where to find these:**
1. Go to https://supabase.com and sign in
2. Select your project
3. Go to **Settings** → **API**
4. Copy the **Project URL** and **Anon Key**
5. Add them to `.env.local`

### Example `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## How Supabase Is Used

### 1. Form Submissions
- **Contact Form** → `contact_submissions` table
- **Consultation Requests** → `consultation_requests` table
- **Newsletter Signups** → `newsletter_subscribers` table

### 2. Content Management
- **News Posts** → `news_posts` table
- **Projects/Portfolio** → `projects` table

### 3. User Management
- **User Authentication** → Supabase Auth
- **User Profiles** → `user_profiles` table

## Testing Environment Variables

After setting up, test your connection:

1. Start the development server: `npm run dev`
2. Open the browser console
3. Try filling out a contact form - it should submit without errors
4. Check Supabase dashboard: **Database** → **Tables** → Look for new records

If you get an error like "Supabase is not configured", double-check:
- `.env.local` file exists in the root directory
- Variables are correctly copied (no extra spaces)
- Server is restarted after adding variables

## Video Files Configuration

Videos should be placed in:
```
public/videos/
├── hero-landing.mp4
├── hero-eduverse.mp4
└── hero-technology.mp4
```

**Video Requirements:**
- Format: MP4 (H.264 codec)
- Resolution: Minimum 1920x1080
- Size: Under 50MB each
- Duration: 15-30 seconds recommended
- Frame rate: 24fps or 30fps
