# 🚀 START HERE - Action Items

Your website is fully built! Follow these steps in order to get it live.

---

## ⏱️ Total Time: ~2 hours

---

## STEP 1: Supabase Setup (20 minutes) 🗄️

### What to Do:
1. Go to **https://supabase.com**
2. Sign in or create account
3. Click "New Project"
4. **Name**: `tam-viet-quang-website`
5. **Password**: Create strong password (save it!)
6. **Region**: Singapore (for Vietnam audience)
7. Click "Create new project"
8. **WAIT** 2-3 minutes for it to initialize

### Get Your Credentials:
1. After project loads, go **Settings** → **API**
2. Copy **Project URL** (looks like: `https://xxxxx.supabase.co`)
3. Copy **Anon Key** (starts with `eyJ`)

### Create .env.local:
1. In project root, create file: `.env.local`
2. Paste this (replace YOUR VALUES):
```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_PROJECT_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```
3. **Save the file**

### Initialize Database:
1. Go back to Supabase dashboard
2. Go **SQL Editor**
3. Click "New Query"
4. Open `/scripts/init-supabase.sql` in text editor (in your project)
5. Copy ALL code from that file
6. Paste into Supabase SQL Editor
7. Click **Run**
8. Wait for "Success" message
9. ✅ **Done!** Tables are created

### Verify Tables:
1. Go **Database** → **Tables**
2. You should see these tables:
   - contact_submissions
   - consultation_requests
   - newsletter_subscribers
   - news_posts
   - projects
   - services
   - team_members
   - user_profiles

If all there, **Supabase is ready!**

---

## STEP 2: Add Videos (15 minutes) 🎥

### Quick Option (Pexels - Free):
1. Go **https://www.pexels.com/search/videos/**
2. Search and download:
   - **For homepage**: Search "office professional" → Download 1080p MP4
   - **For Eduverse**: Search "children learning" → Download 1080p MP4
   - **For Technology**: Search "computer programmer" → Download 1080p MP4

### Add to Project:
1. Create folder in your project: `public/videos/` (if not exists)
2. Move downloaded videos here with exact names:
   - `hero-landing.mp4`
   - `hero-eduverse.mp4`
   - `hero-technology.mp4`

### Check File Size:
- Right-click each video
- Check "Size" is under 50 MB
- If larger, see VIDEOS_SETUP.md for compression

✅ **Done!** Videos are ready

---

## STEP 3: Test Locally (5 minutes) 💻

### Run Project:
```bash
npm install
npm run dev
```

### Test in Browser:
1. Open **http://localhost:3000**
2. Homepage should load with video background
3. Click "Liên hệ" (Contact)
4. Fill out form:
   - Name: "Test"
   - Email: "test@example.com"
   - Subject: "Test"
   - Message: "Hello"
5. Click "Gửi"
6. Should see success message

### Verify in Supabase:
1. Go Supabase dashboard
2. **Database** → **contact_submissions** table
3. Should see your test submission!
4. ✅ **Forms work!**

---

## STEP 4: Add Your Content (20 minutes) 📝

### Add News:
1. Go Supabase dashboard
2. **Database** → **news_posts**
3. Click **"Insert row"** (big button)
4. Fill in:
   - **title**: "Tin tức đầu tiên"
   - **slug**: "tin-tuc-dau-tien"
   - **excerpt**: "Mô tả ngắn"
   - **content**: "Nội dung bài viết"
   - **author**: "Your name"
   - **is_published**: Toggle **ON** (switch to right)
   - **published_at**: Click calendar → Select today
5. Click **"Save row"**
6. Repeat for 2-3 more news items

### Add Projects:
1. **Database** → **projects**
2. Click **"Insert row"**
3. Fill in:
   - **title**: "Dự án 1"
   - **slug**: "du-an-1"
   - **description**: "Mô tả dự án"
   - **category**: "web" (or: erp, cms, ar, ai, marketing)
   - **client_name**: "Company name"
   - **is_published**: Toggle **ON**
   - **published_at**: Select today
4. Click **"Save row"**
5. Repeat for 2+ projects

### Update Company Info:
1. Go **/components/footer.tsx** (in your code editor)
2. Find: `tamvietquang@gmail.com`
3. Replace with your actual email
4. Find: `(+84) 123 456 789`
5. Replace with your actual phone
6. Find: `69 Ái Mộ, phường Ngọc Lâm`
7. Replace with your actual address
8. Save file

✅ **Done!** Content is live locally

---

## STEP 5: Deploy to Vercel (15 minutes) 🌐

### Push to GitHub:
1. If not already, create GitHub repo
2. Push your code:
```bash
git add .
git commit -m "Complete website update"
git push origin main
```

### Deploy:
1. Go **https://vercel.com**
2. Sign in (or create account)
3. Click **"Import Project"**
4. Select your GitHub repository
5. Click **"Import"**
6. Vercel auto-detects Next.js ✅
7. Under **"Environment Variables"**, add:
   - Key: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: Your Supabase URL
   - Click **"Add"**
8. Add second variable:
   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: Your Supabase Key
   - Click **"Add"**
9. Click **"Deploy"**
10. **WAIT** for deployment (3-5 minutes)

### Get Your Live URL:
- After "Congratulations" message
- Copy your URL (looks like: `https://your-app.vercel.app`)

### Update Supabase:
1. Go Supabase dashboard
2. **Authentication** → **URL Configuration**
3. Under "Redirect URLs", add your live URL
4. Click **"Save"**

✅ **Site is LIVE!**

---

## STEP 6: Final Testing (10 minutes) ✅

### Test Live Site:
1. Go to your Vercel URL
2. Test each page:
   - [ ] Homepage loads with video
   - [ ] Eduverse page loads
   - [ ] Technology page loads
   - [ ] About page loads
   - [ ] Contact page works
3. Test form:
   - [ ] Go to Contact page
   - [ ] Fill form completely
   - [ ] Submit
   - [ ] See success message
4. Verify in Supabase:
   - [ ] Dashboard → contact_submissions
   - [ ] See your test submission

### Test on Mobile:
1. On phone/tablet, go to your URL
2. Pages should look good
3. Buttons clickable
4. Videos play

✅ **Everything works!**

---

## 🎉 DONE!

Your website is now:
- ✅ Live on the internet
- ✅ Taking form submissions
- ✅ Managed via Supabase
- ✅ Works on all devices

---

## 📚 Next Steps (Optional but Recommended)

### Add More Content:
- Add 5-10 news articles in Supabase
- Add 5-10 projects with images
- Update all company information

### Customize Design:
- Change colors: Search `bg-blue-600` in components
- Add your logo image
- Add team photos
- Update page descriptions

### Add Features:
- Email notifications (set up SendGrid)
- Google Analytics (add tracking)
- Social media links
- SEO optimization

---

## 🆘 Quick Troubleshooting

### Videos don't play?
- Check files in `public/videos/` exist
- Check filenames are exactly: `hero-landing.mp4`, etc.
- Clear browser cache

### Forms don't submit?
- Check `.env.local` has correct Supabase credentials
- Restart dev server: `npm run dev`
- Check Supabase tables exist

### Deployment won't work?
- Make sure `.env.local` is in `.gitignore` (it is by default)
- Add env variables in Vercel settings
- Check GitHub repo is connected

---

## 📖 Full Documentation

If you get stuck, read these files:
1. **Quick issues?** → QUICK_START.md
2. **Supabase help?** → SUPABASE_SETUP.md
3. **Video help?** → VIDEOS_SETUP.md or VIDEO_RESOURCES.md
4. **Detailed guide?** → COMPLETE_SETUP_GUIDE.md
5. **Technical overview?** → README_IMPLEMENTATION.md

---

## 💬 Summary of What You Just Did

✅ Set up Supabase database
✅ Added background videos
✅ Tested forms locally
✅ Added content
✅ Deployed to Vercel
✅ Website is LIVE!

**Your website is ready to serve customers!**

---

**Questions? Check the documentation files listed above. 👆**

**Ready to start? Begin with STEP 1 above!**
