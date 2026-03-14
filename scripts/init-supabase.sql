-- Initialize Supabase database tables for Tâm Việt Quang website

-- 1. Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new', -- new, read, replied
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Consultation Requests Table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  company VARCHAR(255),
  service_type VARCHAR(50) NOT NULL, -- eduverse, technology, both
  message TEXT,
  status VARCHAR(50) DEFAULT 'new', -- new, contacted, scheduled, completed
  scheduled_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT TRUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. User Profiles Table
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  avatar_url VARCHAR(500),
  role VARCHAR(50) DEFAULT 'user', -- user, admin
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. News Posts Table
CREATE TABLE IF NOT EXISTS news_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  image_url VARCHAR(500),
  category VARCHAR(100),
  author_id UUID REFERENCES user_profiles(id),
  author VARCHAR(255),
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Projects/Portfolio Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  image_url VARCHAR(500),
  category VARCHAR(100) NOT NULL, -- erp, cms, web, ar, ai, marketing
  technologies TEXT[], -- Array of tech tags
  client_name VARCHAR(255),
  link VARCHAR(500),
  is_featured BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  icon VARCHAR(50),
  category VARCHAR(100), -- eduverse, technology
  features TEXT[],
  pricing_type VARCHAR(50), -- free, inquiry, subscription
  is_active BOOLEAN DEFAULT TRUE,
  order_index INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  bio TEXT,
  image_url VARCHAR(500),
  email VARCHAR(255),
  social_links JSONB, -- {linkedin, twitter, facebook}
  order_index INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_consultation_requests_email ON consultation_requests(email);
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_subscribers_active ON newsletter_subscribers(is_active);
CREATE INDEX idx_news_posts_published ON news_posts(is_published);
CREATE INDEX idx_news_posts_category ON news_posts(category);
CREATE INDEX idx_news_posts_slug ON news_posts(slug);
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_featured ON projects(is_featured);
CREATE INDEX idx_services_category ON services(category);
CREATE INDEX idx_services_active ON services(is_active);

-- Enable Row Level Security (RLS) on sensitive tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_submissions (allow admins to view)
CREATE POLICY "admin_view_submissions" ON contact_submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM user_profiles 
      WHERE user_profiles.id = auth.uid() 
      AND user_profiles.role = 'admin'
    )
  );

-- RLS Policies for newsletter_subscribers (allow self-view)
CREATE POLICY "users_view_own_subscription" ON newsletter_subscribers
  FOR SELECT USING (
    email = (SELECT email FROM auth.users WHERE id = auth.uid())
  );

-- RLS Policies for user_profiles (allow users to view own profile)
CREATE POLICY "users_view_own_profile" ON user_profiles
  FOR SELECT USING (
    id = auth.uid()
  );

CREATE POLICY "users_update_own_profile" ON user_profiles
  FOR UPDATE USING (
    id = auth.uid()
  );

-- Insert sample data
INSERT INTO services (title, slug, description, category, is_active, order_index) VALUES
  ('STEAM Education', 'steam-education', 'Comprehensive STEAM curriculum for children', 'eduverse', TRUE, 1),
  ('Robotics Program', 'robotics-program', 'Hands-on robotics and AI learning', 'eduverse', TRUE, 2),
  ('Web Development', 'web-development', 'Custom websites and web applications', 'technology', TRUE, 3),
  ('ERP Solutions', 'erp-solutions', 'Enterprise Resource Planning systems', 'technology', TRUE, 4),
  ('Digital Marketing', 'digital-marketing', 'AI-powered marketing solutions', 'technology', TRUE, 5)
ON CONFLICT DO NOTHING;

-- Sample team members
INSERT INTO team_members (name, title, bio, order_index, is_active) VALUES
  ('Trần Văn A', 'CEO & Founder', 'Visionary leader with 15+ years in education tech', 1, TRUE),
  ('Nguyễn Thị B', 'CTO', 'Expert in AI and technology solutions', 2, TRUE),
  ('Phạm Minh C', 'Education Director', 'Passionate about STEAM education', 3, TRUE)
ON CONFLICT DO NOTHING;
