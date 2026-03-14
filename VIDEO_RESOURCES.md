# Video Resources & Recommendations

## Where to Get Background Videos

### Option 1: Free Stock Video Sites (Recommended for Quick Start)

#### Pexels Videos (FREE)
- Website: https://www.pexels.com/search/videos/
- Search terms:
  - "office workspace" (for Technology & About pages)
  - "technology" (for Technology page)
  - "education" (for Eduverse page)
  - "business team" (for About page)
- Quality: High (1080p+)
- License: Free to use commercially
- Download: Direct MP4 download

#### Pixabay Videos (FREE)
- Website: https://pixabay.com/videos/
- Search terms:
  - "corporate office"
  - "tech innovation"
  - "learning classroom"
  - "startup"
- Quality: Variable (many 4K)
- License: Free, Pixabay License

#### Unsplash Videos (FREE)
- Website: https://unsplash.com/videos
- Search: "office", "technology", "workspace"
- Quality: Professional 4K
- License: Free for commercial use

#### Coverr (FREE)
- Website: https://coverr.co/
- Beautiful cinematic stock videos
- Search: "office", "tech", "education"
- Quality: 4K
- License: Free (Coverr License)

---

### Option 2: Paid Stock Video Sites (Higher Quality)

#### Shutterstock
- Website: https://www.shutterstock.com/videos
- Price: From $29/month for video
- Quality: Professional, curated
- Best for: Premium, branded content

#### Getty Images
- Website: https://www.gettyimages.com/
- Price: Subscription or per-video
- Quality: Extremely high (editorial)
- Best for: Corporate/professional look

#### Adobe Stock
- Website: https://stock.adobe.com/
- Price: Part of Creative Cloud ($54.99/month)
- Quality: Professional, integrated with Creative Cloud
- Best for: If you use Adobe software

---

## Video Requirements Checklist

### Specifications
- ✅ Format: **MP4** (H.264 codec)
- ✅ Resolution: **1920x1080** (minimum, 4K better)
- ✅ Frame rate: **24fps or 30fps**
- ✅ Duration: **15-30 seconds** (autoplay)
- ✅ File size: **Under 50MB each**
- ✅ Audio: **Optional** (will be muted anyway)

### For Each Page

**Homepage (hero-landing.mp4)**
- Generic office/workspace with people
- Modern, professional, energetic
- Suggests innovation and collaboration
- Example search: "modern office team"

**Eduverse Page (hero-eduverse.mp4)**
- Children learning, classroom, STEAM activities
- Bright, engaging, educational
- Shows hands-on learning
- Example search: "kids learning robotics" or "classroom"

**Technology Page (hero-technology.mp4)**
- Tech workspace, coding, digital innovation
- Modern office with computers/devices
- Fast-paced, forward-thinking
- Example search: "tech startup office" or "programming"

---

## How to Download & Optimize Videos

### Step 1: Download
1. Go to chosen video site
2. Search using terms above
3. Click video preview
4. Click "Download" or similar
5. Choose **1080p MP4** format
6. Save to `public/videos/` folder

### Step 2: Rename Files
Make sure filenames are exactly:
- `hero-landing.mp4`
- `hero-eduverse.mp4`
- `hero-technology.mp4`

### Step 3: Check File Size
- Go to `public/videos/` folder
- Right-click file → Properties
- Size should be **under 50MB**
- If larger, optimize (see below)

### Step 4: Optimize If Needed

If video is too large, use ffmpeg:

**Install ffmpeg:**
```bash
# macOS
brew install ffmpeg

# Windows (with Chocolatey)
choco install ffmpeg

# Linux
sudo apt-get install ffmpeg
```

**Compress video:**
```bash
# Basic compression (good balance)
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -acodec aac -strict -2 output.mp4

# Smaller file size (lower quality)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -acodec aac -strict -2 output.mp4

# Keep quality high (larger file)
ffmpeg -i input.mp4 -vcodec libx264 -crf 18 -acodec aac -strict -2 output.mp4
```

**Example usage:**
```bash
cd public/videos/
ffmpeg -i hero-landing.mp4 -vcodec libx264 -crf 23 -acodec aac -strict -2 hero-landing-compressed.mp4
```

---

## Creating Custom Videos

### Option: DIY with Screen Recording

**Tools:**
- **ScreenFlow** (Mac) - $99 one-time
- **Camtasia** (Mac/Windows) - $200 one-time
- **OBS Studio** (Free, all platforms) - Free
- **QuickTime** (Mac built-in) - Free

**Steps:**
1. Record your office/workspace for 20-30 seconds
2. Add some slow pans or zooms
3. Keep it professional and smooth
4. Export as MP4 H.264

---

## Recommended Videos by Category

### For "hero-landing.mp4" (Homepage)
**Suggested searches:**
- "Modern office workspace" (Pexels)
- "Business team collaboration" (Pixabay)
- "Corporate workspace" (Coverr)
- "Office people working" (Pexels)

**What to look for:**
- Shows teamwork and innovation
- Modern office environment
- Professional but friendly
- Varied activities (some coding, some discussion)

### For "hero-eduverse.mp4" (Education Page)
**Suggested searches:**
- "Children learning" (Pexels)
- "Classroom education" (Pixabay)
- "Kids doing activities" (Pexels)
- "STEM education" (Coverr)

**What to look for:**
- Shows learning and engagement
- Hands-on activities
- Smiling children
- Classroom or learning environment

### For "hero-technology.mp4" (Tech Services Page)
**Suggested searches:**
- "Programming code" (Pexels)
- "Tech startup office" (Pixabay)
- "Developer workspace" (Coverr)
- "Innovation technology" (Unsplash)

**What to look for:**
- Computer screens with code
- Modern tech workspace
- People focused on screens
- High-tech environment

---

## Testing Your Videos

After adding videos:

1. Start dev server: `npm run dev`
2. Navigate to homepage
3. Videos should auto-play with sound muted
4. Check that video fills the background
5. Check on mobile (video should still display)

**If video doesn't show:**
- Check file is in correct location
- Check filename matches exactly
- Check file format is MP4
- Clear browser cache
- Restart dev server

---

## Video Optimization Tips

### For Web Performance
1. Keep resolution at 1920x1080 (not 4K)
2. Use H.264 codec (most compatible)
3. Keep under 50MB per video
4. Use 24-30fps (not 60fps)
5. Compress with CRF 23-25

### For User Experience
1. Keep videos 15-30 seconds max
2. Videos auto-mute (browser security)
3. Include text overlay (readable with video)
4. Use dark overlay if text is light
5. Ensure page loads without video

---

## Fallback: No Videos

If you can't find videos, the site works fine with gradient backgrounds:

Open `/components/sections/hero-with-video.tsx` and change:
```tsx
// From:
<video>{video}</video>

// To:
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
```

The site will still look great with just background gradients!

---

## Recommended Free Video Bundle

For fastest setup, here are 3 Pexels videos to download:

1. **Homepage**: "Office Professional"
   - https://www.pexels.com/search/videos/?query=office%20professional

2. **Eduverse**: "Children Learning"
   - https://www.pexels.com/search/videos/?query=children%20learning

3. **Technology**: "Computer Programmer"
   - https://www.pexels.com/search/videos/?query=computer%20programmer

Total time to download and set up: **10 minutes**

---

## FAQ

**Q: Can I use YouTube videos?**
A: Not easily due to CORS. Stick with MP4 files.

**Q: What if my video is too large?**
A: Use ffmpeg to compress (see "Optimize If Needed" section)

**Q: Can I use videos with sound?**
A: Videos auto-mute in browsers for autoplay. Audio won't play.

**Q: What's the best format?**
A: MP4 with H.264 video and AAC audio. Most compatible.

**Q: Can I use different aspect ratios?**
A: 16:9 works best (like 1920x1080). Component handles responsive scaling.

---

**Ready? Download from Pexels and get started! 🎬**
