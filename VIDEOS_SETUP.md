# Background Videos Setup Guide

## Overview

Your website requires 3 background videos for the hero sections:
- **hero-landing.mp4** - Homepage hero
- **hero-eduverse.mp4** - Eduverse page hero
- **hero-technology.mp4** - Technology services page hero
- **hero-about.mp4** - About page hero (optional)

## Video Specifications

### Technical Requirements
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (16:9 aspect ratio minimum)
- **Frame Rate**: 30fps or 60fps
- **File Size**: Under 50MB per video (ideally 10-30MB)
- **Duration**: 20-30 seconds (loops automatically)

### Video Content Guidelines

**hero-landing.mp4** - Homepage Hero
- Modern office/tech environment with people collaborating
- Business professionals using technology
- Subtle movement, tech-forward vibe
- Colors: Blues, purples, white accents
- Should convey: Innovation, teamwork, technology

**hero-eduverse.mp4** - Education Hero
- Children learning with STEAM/robotics/coding
- Classroom environment with interactive learning
- Hands-on activities, problem-solving, creativity
- Colors: Bright, welcoming, educational
- Should convey: Learning, innovation, youth empowerment

**hero-technology.mp4** - Technology Services Hero
- Tech workspace with code, servers, or digital interfaces
- Business solutions, enterprise software
- Professional yet modern atmosphere
- Colors: Blues, tech-themed, corporate
- Should convey: Sophisticated, reliable, innovative

**hero-about.mp4** - About Us Hero (Optional)
- Company workspace, team collaboration
- Office culture, people working together
- Mix of education and technology elements
- Should convey: Company culture, teamwork, mission

## Where to Get Videos

### Free Video Resources
1. **Pexels Videos** (pexels.com/videos)
   - Free, high-quality stock videos
   - Search: "office", "technology", "team", "education"

2. **Pixabay Videos** (pixabay.com/videos)
   - Large collection of free videos
   - Various categories available

3. **Unsplash Videos** (unsplash.com)
   - Free, high-resolution stock videos

4. **Coverr** (coverr.co)
   - Professional stock videos
   - Many tech/business themed

### Paid Options
1. **Shutterstock** (shutterstock.com)
   - Professional videos
   - License control

2. **Getty Images** (gettyimages.com)
   - Premium video content

3. **Adobe Stock** (stock.adobe.com)
   - Integration with Adobe Creative Suite

## How to Prepare Your Videos

### Using FFmpeg (Command Line)

If your video is too large or needs optimization:

```bash
# Install FFmpeg
# Mac: brew install ffmpeg
# Ubuntu: sudo apt-get install ffmpeg
# Windows: Download from ffmpeg.org

# Compress video to under 30MB
ffmpeg -i input_video.mp4 -vcodec libx264 -crf 23 output.mp4

# Resize to 1920x1080
ffmpeg -i input_video.mp4 -vf scale=1920:1080 output.mp4

# Trim video to 25 seconds
ffmpeg -i input_video.mp4 -t 25 -c:v copy -c:a copy output.mp4

# Convert with loop optimization
ffmpeg -i input_video.mp4 -vcodec libx264 -crf 23 -vf scale=1920:1080 -c:a aac -b:a 128k output.mp4
```

### Using Online Tools
- **CloudConvert** (cloudconvert.com) - Free online video converter
- **Ezgif** (ezgif.com) - Quick video editing
- **Clipchamp** (clipchamp.com) - Browser-based video editor

## Installation Steps

### Step 1: Prepare Your Videos

1. Find or create 3-4 MP4 videos (see recommendations above)
2. Optimize them using FFmpeg or online tools
3. Ensure files are under 50MB
4. Ensure resolution is at least 1920x1080

### Step 2: Add Videos to Your Project

```bash
# Navigate to your project directory
cd your-project

# Create videos folder if it doesn't exist
mkdir -p public/videos

# Copy videos to the public/videos folder
# Using file explorer or:
cp ~/Downloads/hero-landing.mp4 public/videos/
cp ~/Downloads/hero-eduverse.mp4 public/videos/
cp ~/Downloads/hero-technology.mp4 public/videos/
cp ~/Downloads/hero-about.mp4 public/videos/
```

### Step 3: Verify Installation

1. Check that files exist:
```bash
ls -lh public/videos/
```

2. You should see:
```
hero-landing.mp4
hero-eduverse.mp4
hero-technology.mp4
hero-about.mp4
```

### Step 4: Test in Browser

1. Start your development server:
```bash
npm run dev
```

2. Visit `http://localhost:3000`
3. Verify videos play automatically (autoPlay)
4. Videos should be muted and looping
5. Should not have sound

## If Videos Don't Play

### Troubleshooting

1. **Check file path is correct**
   - Videos must be in `/public/videos/` folder
   - Path in code: `/videos/hero-landing.mp4`

2. **Check video format**
   ```bash
   ffmpeg -i public/videos/hero-landing.mp4
   ```
   - Must be MP4 format
   - Must have H.264 video codec
   - Must have AAC audio codec (even if muted)

3. **Check CORS settings**
   - Add `crossOrigin="anonymous"` (already in component)

4. **Browser compatibility**
   - Test in Chrome, Firefox, Safari
   - Some browsers have autoPlay restrictions
   - Video must be muted to autoPlay in most browsers

5. **File size issues**
   - If video is very large, consider compressing more
   - Use: `ffmpeg -i input.mp4 -crf 28 -vf scale=1920:1080 output.mp4`

6. **Clear browser cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or clear cache in DevTools

## Performance Optimization

### For Faster Loading

```bash
# Create a smaller preview version
ffmpeg -i hero-landing.mp4 -vf scale=960:540 -crf 28 hero-landing-preview.mp4

# Create WebM version for better compression
ffmpeg -i hero-landing.mp4 -c:v libvpx-vp9 -crf 40 hero-landing.webm
```

### Using WebM Format (Better Compression)

```bash
# In your HeroWithVideo component, you can add WebM support:
<video>
  <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
  <source src={videoSrc} type="video/mp4" />
</video>
```

## Example Video Downloads

Quick links to download sample videos (with proper licenses):

**Technology/Office Videos:**
- Pexels: Search "office work technology" 
- Pixabay: Search "businessman working computer"

**Education Videos:**
- Pexels: Search "classroom learning"
- Pixabay: Search "teacher students"

**Team/Collaboration:**
- Pexels: Search "team meeting office"
- Pixabay: Search "business team"

## Recommended Workflow

1. **Find video source** (Pexels/Pixabay)
2. **Download MP4** at highest resolution available
3. **Optimize with FFmpeg**:
   ```bash
   ffmpeg -i original.mp4 -crf 23 -vf scale=1920:1080 optimized.mp4
   ```
4. **Check file size** - Should be 15-30MB
5. **Test locally** - npm run dev
6. **Deploy** - Videos automatically go to Vercel

## Hosting Notes

### Vercel Deployment

When you push to Vercel:

1. Videos in `/public` folder are automatically served as static assets
2. Vercel CDN caches videos globally
3. First load might be slower, but subsequent loads are fast
4. Max file size: 250MB (per file limit), but keep under 50MB for optimal performance

### Alternative: External Video Hosting

If videos are too large, consider:
- **Vimeo** (vimeo.com) - Embed video
- **AWS S3** - Store videos
- **Cloudinary** (cloudinary.com) - Video optimization CDN

Then update HeroWithVideo to use the external URL:
```tsx
<HeroWithVideo
  videoSrc="https://vimeo.com/your-video-id"
  ...
/>
```

## Video Licensing

When downloading videos, ensure:
- ✅ Video has a Creative Commons or free license
- ✅ You have rights to use commercially
- ✅ Attribution is provided (if required)
- ✅ Check license terms before using

Most Pexels and Pixabay videos are free for commercial use without attribution required.

## Still Need Videos?

Quick Solution - Use Placeholder Videos:

The HeroWithVideo component will work with any MP4 video. For quick testing:

```bash
# Download a sample video and convert
wget https://example.com/sample.mp4
ffmpeg -i sample.mp4 -crf 23 public/videos/hero-landing.mp4
```

Or skip videos temporarily by updating the component to use a gradient background instead:

```tsx
// In HeroWithVideo component, add fallback:
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
  {/* Video as overlay */}
</div>
```
