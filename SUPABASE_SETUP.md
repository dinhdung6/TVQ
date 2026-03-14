# Supabase Setup Instructions

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in the project details:
   - **Name**: Your project name (e.g., "Tam Viet Quang")
   - **Database Password**: Create a strong password
   - **Region**: Select closest to your users
4. Click "Create new project" and wait for it to initialize

## Step 2: Get Your Credentials

1. In your Supabase project dashboard, go to **Settings > API**
2. Copy the following values:
   - **Project URL**: `https://[project-id].supabase.co`
   - **anon public key**: Found under "anon public"
3. Create `.env.local` file in your project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=https://[your-project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

## Step 3: Create Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the following SQL, then click "Run":

```sql
-- User Profiles Table
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT auth.uid(),
  email TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  company TEXT,
  phone TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Contact Submissions Table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'responded')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Newsletter Subscribers Table
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT NOW(),
  unsubscribed_at TIMESTAMP
);

-- Consultation Requests Table
CREATE TABLE consultation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_type TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- News/Blog Posts Table
CREATE TABLE news_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  featured_image_url TEXT,
  author TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Technology Projects Table
CREATE TABLE technology_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  demo_url TEXT,
  technologies TEXT[],
  featured BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_consultation_status ON consultation_requests(status);
CREATE INDEX idx_news_status ON news_posts(status);
CREATE INDEX idx_news_published ON news_posts(published_at);
CREATE INDEX idx_tech_category ON technology_projects(category);

-- Enable RLS (Row Level Security)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE technology_projects ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to news and projects
CREATE POLICY "Allow public read access to published news" 
  ON news_posts FOR SELECT 
  USING (status = 'published');

CREATE POLICY "Allow public read access to published projects" 
  ON technology_projects FOR SELECT 
  USING (status = 'published');

-- Allow anyone to insert contact submissions
CREATE POLICY "Allow anyone to submit contact forms" 
  ON contact_submissions FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to subscribe to newsletter
CREATE POLICY "Allow anyone to subscribe to newsletter" 
  ON newsletter_subscribers FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to request consultation
CREATE POLICY "Allow anyone to request consultation" 
  ON consultation_requests FOR INSERT 
  WITH CHECK (true);
```

## Step 4: Set Up Authentication (Optional - for Admin Login)

1. Go to **Authentication > Providers**
2. Enable Email authentication
3. Under **Auth Policies**, configure:
   - Auto confirm email: Toggle OFF for production
   - Double confirm changes: Toggle ON

## Step 5: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

## Step 6: Test the Connection

The connection will be tested when you run the app. If you see any errors, verify:
- Environment variables are correct in `.env.local`
- Supabase project is running (check dashboard)
- Database tables were created successfully

## Troubleshooting

**Error: "403 Unauthorized"**
- Check that your anon public key is correct
- Verify RLS policies are set correctly

**Error: "Network request failed"**
- Check your NEXT_PUBLIC_SUPABASE_URL is correct
- Ensure your Supabase project is active

**Error: "Cannot find table"**
- Re-run the SQL script in SQL Editor
- Check that all queries executed without errors
