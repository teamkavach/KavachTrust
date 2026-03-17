# Impact Media Gallery

This file explains how to manage the impact media gallery on the homepage.

## Location
The media gallery appears in the "What Happens When We Care" section on the homepage.

## Configuration File
Edit `/public/data/impact-media.json` to add, remove, or update media items.

## Supported Media Types

### Images
```json
{
  "type": "image",
  "src": "/images/gallery/folder-name/image-name.webp",
  "alt": "Descriptive text for accessibility and SEO"
}
```

### YouTube Videos
```json
{
  "type": "youtube",
  "src": "https://www.youtube.com/watch?v=VIDEO_ID",
  "alt": "Descriptive text for accessibility"
}
```

**Supported YouTube URL formats:**
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

### Local Videos (when available)
```json
{
  "type": "video",
  "src": "/videos/impact/video-name.mp4",
  "poster": "/images/gallery/folder-name/thumbnail.webp",
  "alt": "Descriptive text for accessibility"
}
```

## Features
- **Lazy Loading**: Media only loads when scrolling into view for better performance
- **Horizontal Scrolling**: Single row carousel that scrolls horizontally on all devices
- **Hover Effects**: Images scale up and show caption on hover (desktop)
- **Motion Animations**: Smooth slide-in animations using Framer Motion
- **Error Handling**: Gracefully handles missing images with fallback display
- **Video Support**: Native HTML5 video player with controls
- **YouTube Support**: Embed YouTube videos directly from any YouTube URL
- **Mixed Media**: Supports images, local videos, and YouTube videos in the same carousel

## Best Practices
1. **Image Format**: Use WebP for smaller file sizes and better performance
2. **Alt Text**: Write descriptive alt text for accessibility and SEO
3. **Image Size**: Optimize images to ~800px width for web display
4. **Variety**: Showcase diverse programs and activities
5. **Order**: Place most impactful or recent work first (users scroll left to right)
6. **Mix Media**: Combine images and videos for engaging storytelling

## Example Entry
```json
{
  "type": "image",
  "src": "/images/gallery/blanket-distribution/blanket-distribution-1.webp",
  "alt": "Volunteers distributing warm blankets to homeless individuals during winter"
}
```

## Example YouTube Video Entry
```json
{
  "type": "youtube",
  "src": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "alt": "Team Kavach community outreach program"
}
```

## Adding New Media
1. Upload image/video to appropriate folder in `/public/images/gallery/` or `/public/videos/`
2. Add entry to `/public/data/impact-media.json`
3. Use descriptive alt text
4. Save and the changes will reflect immediately

## Current Layout
- **Display**: Horizontal scrolling carousel (single row)
- **Card Width**: 280px (mobile), 320px (tablet), 380px (desktop)
- **Aspect Ratio**: 4:3 for all media items
- **Scrolling**: Touch-swipe on mobile, mouse-scroll or scrollbar on desktop
- **Visual Hints**: "← Swipe/Scroll to see more →" text for users
