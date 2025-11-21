# DailySpark Landing Page

A bilingual (English/French) waitlist landing page built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Bilingual Support**: Toggle between English and French with a language switcher
- **Responsive Design**: Mobile-first design that works seamlessly on all devices
- **Clean UI**: Distraction-free layout focused on waitlist sign-ups
- **Accessible**: Semantic HTML and proper ARIA labels
- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Configuration

### Updating the Waitlist URL

To connect your Tally, Typeform, or ConvertKit form:

1. Open `app/page.tsx`
2. Find the `WAITLIST_URL` constant at the top of the file:
```typescript
const WAITLIST_URL = '#';
```
3. Replace `'#'` with your actual form URL:
```typescript
const WAITLIST_URL = 'https://your-form-url.com';
```

The waitlist URL is used in:
- The primary "Get early access" button in the hero section
- The email form submission in the waitlist CTA section

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live after deployment

**Manual deployment:**
```bash
npm install -g vercel
vercel
```

### Netlify

1. Push your code to a Git repository
2. In Netlify, click "New site from Git"
3. Select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages (Static Export)

For static export to GitHub Pages:

1. Update `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. Build and export:
```bash
npm run build
```

3. The `out` folder contains your static site - deploy it to GitHub Pages

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles and Tailwind imports
├── components/
│   ├── LanguageToggle.tsx
│   ├── Hero.tsx
│   ├── Benefits.tsx
│   ├── ExamplesGrid.tsx
│   ├── FAQ.tsx
│   ├── WaitlistCTA.tsx
│   └── Footer.tsx
├── lib/
│   └── i18n.ts          # Translation strings and types
└── public/              # Static assets (if any)
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The primary CTA color is `indigo-600` - you can change this throughout the components or update the Tailwind config.

### Content

All user-facing text is stored in `lib/i18n.ts`. Edit the translation objects to update content in both languages.

### Styling

All components use Tailwind utility classes. Modify classes directly in component files or extend the Tailwind theme in `tailwind.config.ts`.

## License

Private project - All rights reserved.


