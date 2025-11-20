# Images Directory

This directory contains all static image assets for the DailySpark landing page.

## Folder Structure

- **`icons/`** - Small icon images (favicons, UI icons, etc.)
- **`logos/`** - Brand logos and company branding images
- **`hero/`** - Hero section images and main banner images
- **`examples/`** - Example images, screenshots, or demo visuals
- **`backgrounds/`** - Background images and patterns
- **`avatars/`** - User profile pictures or avatar images

## Usage in Next.js

### Static Images (from `public/` folder)

Images in the `public` folder can be referenced directly:

```tsx
// Using Next.js Image component (recommended)
import Image from 'next/image';

<Image 
  src="/images/hero/banner.jpg" 
  alt="Hero banner"
  width={800}
  height={400}
/>

// Or using regular img tag
<img src="/images/logos/logo.png" alt="Logo" />
```

### Best Practices

1. **Use Next.js Image component** - Provides automatic optimization, lazy loading, and responsive images
2. **Optimize images** - Compress images before adding them (use tools like TinyPNG, ImageOptim, or Squoosh)
3. **Use appropriate formats**:
   - Use WebP for photos (with fallback)
   - Use SVG for icons and logos when possible
   - Use PNG for images with transparency
   - Use JPG for photos without transparency
4. **Naming conventions**:
   - Use lowercase letters and hyphens: `hero-banner.jpg`
   - Be descriptive: `daily-spark-logo.svg` not `logo1.png`
5. **File sizes**:
   - Keep images under 200KB when possible
   - Use responsive images for different screen sizes
6. **Alt text** - Always provide meaningful alt text for accessibility

## Image Optimization

Next.js automatically optimizes images when using the `next/image` component. For static exports, ensure `next.config.mjs` has:

```javascript
images: {
  unoptimized: true, // Only for static exports
}
```

