# System Architecture

## High-Level Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                             │
│  (Desktop, Tablet, Mobile - Responsive Design)                   │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    NEXT.JS FRONTEND
                    (React Components)
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
     Pages          Components          Styles
    ├─ /               ├─ Header         └─ Tailwind
    ├─ /eduverse       ├─ Footer            CSS
    ├─ /technology     ├─ Forms
    ├─ /about          ├─ Sections
    ├─ /contact        └─ UI Components
    └─ /admin
          │
          └─────────────────┬─────────────────────────┐
                           │                         │
                      ┌────▼────┐          ┌────────▼───────┐
                      │  API    │          │ Static Assets  │
                      │ Routes  │          │ (Videos/Images)│
                      └────┬────┘          └────────────────┘
                           │
                ┌──────────────────────┐
                │                      │
            Form         Data           │
         Submission      Query          │
           Routes        Routes         │
          ├─ contact     ├─ news        │
          ├─ consult     ├─ projects    │
          └─ newsletter  └─ services    │
                │                       │
                └──────────────┬────────┘
                               │
                    ┌──────────▼─────────┐
                    │   SUPABASE         │
                    │  (PostgreSQL)      │
                    └───────────────────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
       Auth           Database Tables    Row Level
      Provider        ├─ contact_*       Security
      (JWT)           ├─ consultation_*  (RLS)
                      ├─ newsletter_*
                      ├─ news_posts
                      ├─ projects
                      ├─ services
                      ├─ team_members
                      └─ user_profiles
```

---

## Frontend Architecture

```
Next.js App Router
│
├── app/
│   ├── page.tsx ─────────────────────┐
│   ├── eduverse/                     │
│   ├── technology/                   │
│   ├── about/                        │
│   ├── contact/                      │
│   ├── admin/                        │
│   ├── api/                          │
│   │   ├── contact/route.ts          │
│   │   ├── consultation/route.ts     │
│   │   ├── newsletter/route.ts       │
│   │   ├── news/route.ts             │
│   │   └── projects/route.ts         │
│   └── layout.tsx                    │
│                                     │
├── components/                       │
│   ├── header.tsx ◄──────────────────┤─► Navigation
│   ├── footer.tsx ◄──────────────────┤─► Footer
│   ├── forms/                        │
│   │   ├── contact-form.tsx ◄───────┤─► Form Data
│   │   ├── consultation-form.tsx     │
│   │   └── newsletter-form.tsx       │
│   └── sections/                     │
│       ├── hero-with-video.tsx ◄────┤─► Video Background
│       ├── news-section.tsx ◄────────┤─► Dynamic Content
│       └── projects-section.tsx      │
│                                     │
├── lib/                              │
│   ├── supabase.ts ◄─────────────────┤─► Database Client
│   ├── auth-context.tsx ◄────────────┤─► Auth Provider
│   ├── types.ts ◄────────────────────┤─► Type Safety
│   ├── hooks.ts ◄────────────────────┤─► Custom Hooks
│   └── utils.ts                      │
│                                     │
└── public/                           │
    ├── videos/ ◄────────────────────┬┤─► Hero Videos
    │   ├── hero-landing.mp4         │
    │   ├── hero-eduverse.mp4        │
    │   └── hero-technology.mp4      │
    └── images/                      │
```

---

## Data Flow: Form Submission

```
User Fills Form
     │
     ▼
Client-Side Validation
     │
     ▼ (Valid)
Submit to API Route (/api/contact)
     │
     ▼
API Route Validation
     │
     ▼ (Valid)
Supabase Insert Query
     │
     ├─► RLS Check
     │
     ▼ (Allowed)
Database Insert
     │
     ▼
Return Success Response
     │
     ▼
Show Toast Message to User
     │
     ▼
✅ Form Submitted
```

---

## Authentication Flow

```
User Login Page
     │
     ▼
Enter Email/Password
     │
     ▼
Call supabase.auth.signIn()
     │
     ▼
JWT Token Generated
     │
     ▼
AuthContext Updated
     │
     ▼
User Redirected to Dashboard
     │
     ▼
useAuth() Hook Provides User Data
     │
     ▼
✅ Authenticated
```

---

## Component Hierarchy

```
Layout (Root Layout)
│
├── Header
│   ├── Logo
│   └── Navigation
│       └── Submenu Items
│
├── Main Content (Page-Specific)
│   ├── HeroWithVideo
│   │   ├── Video Background
│   │   ├── Overlay Text
│   │   └── CTA Buttons
│   │
│   ├── Feature Sections
│   │   └── Cards/Content
│   │
│   ├── NewsSection
│   │   └── NewsCard (repeating)
│   │
│   ├── ProjectsSection
│   │   └── ProjectCard (repeating)
│   │
│   └── Forms
│       ├── ContactForm
│       ├── ConsultationForm
│       └── NewsletterForm
│
└── Footer
    ├── Company Info
    ├── Links
    └── Social Media
```

---

## Database Schema

```
┌─────────────────────────────────────────────────────────────┐
│                    SUPABASE DATABASE                        │
└─────────────────────────────────────────────────────────────┘

Auth Tables (Supabase Built-in)
├─ users (id, email, password_hash)
│
User Tables
├─ user_profiles
│  ├─ id (FK: users.id)
│  ├─ email
│  ├─ full_name
│  ├─ role (user/admin)
│  └─ avatar_url
│
Form Submission Tables
├─ contact_submissions
│  ├─ id (Primary)
│  ├─ name, email, phone
│  ├─ subject, message
│  ├─ status
│  └─ created_at, updated_at
│
├─ consultation_requests
│  ├─ id (Primary)
│  ├─ name, email, phone
│  ├─ company
│  ├─ service_type
│  ├─ scheduled_date
│  └─ created_at, updated_at
│
├─ newsletter_subscribers
│  ├─ id (Primary)
│  ├─ email (Unique)
│  ├─ is_active
│  ├─ subscribed_at
│  └─ unsubscribed_at
│
Content Tables
├─ news_posts
│  ├─ id, title, slug
│  ├─ excerpt, content
│  ├─ category, author
│  ├─ image_url
│  ├─ is_published
│  └─ published_at
│
├─ projects
│  ├─ id, title, slug
│  ├─ description
│  ├─ category (erp, cms, web, ar, ai, marketing)
│  ├─ technologies
│  ├─ client_name, link
│  └─ is_featured
│
├─ services
│  ├─ id, title, slug
│  ├─ description, icon
│  ├─ category
│  ├─ features, pricing_type
│  └─ order_index
│
└─ team_members
   ├─ id, name, title
   ├─ bio, image_url
   ├─ email
   ├─ social_links
   └─ order_index

Indexes (Performance)
├─ contact_submissions (email, status)
├─ consultation_requests (email)
├─ newsletter_subscribers (email, is_active)
├─ news_posts (is_published, category, slug)
├─ projects (category, is_featured)
├─ services (category, is_active)
└─ team_members (order_index)

Row Level Security (RLS)
├─ contact_submissions: Only admins can view
├─ newsletter_subscribers: Users view own subscription
├─ user_profiles: Users update own profile
└─ (Public tables have no RLS)
```

---

## API Routes

```
/api/contact (POST)
├─ Input: { name, email, phone, subject, message }
├─ Validation: email, message required
├─ Action: Insert into contact_submissions
└─ Output: { id, message }

/api/consultation (POST)
├─ Input: { name, email, phone, company, service_type, message }
├─ Validation: email, phone, service_type required
├─ Action: Insert into consultation_requests
└─ Output: { id, message }

/api/newsletter (POST)
├─ Input: { email }
├─ Validation: email unique, valid format
├─ Action: Insert into newsletter_subscribers
└─ Output: { id, message }

/api/news (GET)
├─ Query: category, limit, offset
├─ Action: Select from news_posts
└─ Output: { data: NewsPost[], total }

/api/projects (GET)
├─ Query: category, limit, offset
├─ Action: Select from projects
└─ Output: { data: Project[], total }
```

---

## Deployment Architecture

```
GitHub Repository
    │
    ▼
Vercel CI/CD Pipeline
    │
    ├─ Build Next.js
    ├─ Run Tests
    ├─ Check Types
    └─ Deploy
    │
    ▼
Vercel Edge Network
    │
    ├─ Global CDN
    ├─ API Routes (Serverless Functions)
    └─ Static Assets
    │
    ▼
    Domain (your-domain.vercel.app)
    │
    ▼
Environment Variables
    ├─ NEXT_PUBLIC_SUPABASE_URL
    └─ NEXT_PUBLIC_SUPABASE_ANON_KEY
    │
    ▼
Supabase PostgreSQL Database
    │
    └─ Regional Replication
```

---

## Technology Stack

```
Frontend
├─ Next.js 15 (React)
├─ TypeScript
├─ Tailwind CSS
├─ Shadcn/UI Components
├─ React Hook Form
└─ SWR (data fetching)

Backend
├─ Supabase
│  ├─ PostgreSQL Database
│  ├─ Auth (JWT)
│  └─ Row Level Security (RLS)
└─ Next.js API Routes

Deployment
├─ Vercel
├─ GitHub
└─ Global CDN

Developer Tools
├─ Node.js
├─ npm
└─ Git
```

---

## Security Layers

```
User Input
    │
    ▼
Frontend Validation (React Hook Form)
    ├─ Email format
    ├─ Required fields
    └─ Message length
    │
    ▼
API Route Validation
    ├─ Same checks
    └─ Additional checks
    │
    ▼
Supabase Row Level Security (RLS)
    ├─ Admin-only access
    ├─ User isolation
    └─ Data visibility rules
    │
    ▼
Database Constraints
    ├─ Unique emails
    ├─ NOT NULL fields
    └─ Data types
    │
    ▼
✅ Data Secure in Database
```

---

## Performance Optimization

```
Static Generation
├─ Homepage (revalidate: 3600)
├─ Pages (on-demand ISR)
└─ API routes

Client-Side Caching
├─ Browser cache headers
├─ SWR data cache
└─ Session storage

Database
├─ Indexed queries
├─ Prepared statements
└─ Connection pooling

Assets
├─ Image optimization (Next.js Image)
├─ Video lazy loading
├─ CSS compression
└─ JS minification
```

---

## File Organization Logic

```
By Feature (How it's organized):

app/
├─ Core routing & pages
├─ API endpoints by feature
└─ Shared layout

components/
├─ Reusable UI pieces
├─ Forms (feature-specific)
└─ Sections (large blocks)

lib/
├─ Utilities & helpers
├─ Database client
├─ Type definitions
├─ Custom hooks
└─ Context providers

public/
├─ Static videos
└─ Static images

scripts/
└─ Database setup SQL
```

---

## Scalability Path

```
Current (MVP)
├─ Single database
├─ Public data tables
└─ Admin dashboard

Scale Phase 1
├─ Add caching (Redis)
├─ Analytics tracking
└─ Email notifications

Scale Phase 2
├─ Admin UI builder
├─ Multi-user support
└─ Content versioning

Scale Phase 3
├─ Microservices
├─ GraphQL API
└─ Advanced analytics
```

---

This architecture provides:
- ✅ Scalability
- ✅ Security
- ✅ Performance
- ✅ Maintainability
- ✅ User experience
