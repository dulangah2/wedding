# Bhagya & Dulanga Wedding Website

A modern, elegant, and fully responsive wedding website built with React, TypeScript, and Supabase.

## Features

- **Hero Section** with animated entrance and beautiful background image
- **Countdown Timer** showing weeks, days, hours, minutes, and seconds until the wedding
- **About Section** with your love story and photos
- **Wedding Details** with ceremony and reception information, map integration, and calendar export
- **Photo Gallery** with hover effects and responsive grid layout
- **RSVP Form** connected to Supabase database for guest responses
- **Gift Registry** with links to your registries
- **FAQ Section** with collapsible questions and answers
- **Testimonials** displaying messages and blessings from loved ones
- **Contact Form** connected to Supabase for messages
- **Responsive Navigation** with smooth scrolling and mobile menu
- **Social Sharing** functionality in the footer
- **Fully Responsive** design for mobile, tablet, and desktop

## Customization Guide

All editable content is clearly marked with `/* EDITABLE: */` comments throughout the codebase.

### 1. Update Couple Information

**File: `src/components/Hero.tsx`**
```typescript
const HERO_CONFIG = {
  coupleName1: 'Bhagya',           // Change to your names
  coupleName2: 'Dulanga',
  weddingDate: 'January 30, 2026',  // Your wedding date
  welcomeLine: "We can't wait to celebrate our special day with you!",
  heroImage: 'YOUR_IMAGE_URL',   // Replace with your hero image
  backgroundColor: '#FDE2E2',    // Change background color
}
```

### 2. Update Wedding Countdown

**File: `src/components/Countdown.tsx`**
```typescript
const COUNTDOWN_CONFIG = {
  targetDate: '2026-02-14T15:00:00',  // MUST match your ceremony date and time
  displayText: 'Countdown to Our Wedding',
}
```

### 3. Update Your Story

**File: `src/components/About.tsx`**
```typescript
const ABOUT_CONFIG = {
  title: 'Our Story',
  content: "Your love story here...",  // Replace with your story
  image1: 'YOUR_IMAGE_URL',            // Replace with your photos
  image2: 'YOUR_IMAGE_URL',
}
```

### 4. Update Wedding Details

**File: `src/components/Details.tsx`**
```typescript
const DETAILS_CONFIG = {
  title: 'Wedding Details',
  ceremony: {
    title: 'Ceremony',
    date: 'January 30, 2026',    // Update with your details
    time: '3:00 PM',
    location: 'Your Venue Name',
    address: 'Your Address',
    mapUrl: 'YOUR_GOOGLE_MAPS_EMBED_URL',  // Get from Google Maps
  },
  reception: {
    // Update reception details
  },
}
```

### 5. Update Gallery Images

**File: `src/components/Gallery.tsx`**
```typescript
const GALLERY_CONFIG = {
  title: 'Our Moments',
  images: [
    { url: 'YOUR_IMAGE_URL', alt: 'Description' },
    // Add or remove images
  ],
}
```

### 6. Update Contact Information

**File: `src/components/Contact.tsx`**
```typescript
const CONTACT_CONFIG = {
  title: 'Contact Us',
  subtitle: 'Have questions? Feel free to reach out!',
  email: 'youremail@example.com',  // Your actual email
}
```

### 7. Update Registry Links

**File: `src/components/Registry.tsx`**
```typescript
const REGISTRY_CONFIG = {
  registries: [
    {
      name: 'Amazon Registry',
      url: 'YOUR_REGISTRY_URL',  // Replace with actual registry links
      description: 'Description',
    },
    // Add or remove registries
  ],
}
```

### 8. Update FAQ Questions

**File: `src/components/FAQ.tsx`**
```typescript
const FAQ_CONFIG = {
  questions: [
    {
      question: 'Your question?',
      answer: 'Your answer...',
    },
    // Add, remove, or modify questions
  ],
}
```

### 9. Update Testimonials

**File: `src/components/Testimonials.tsx`**
```typescript
const TESTIMONIALS_CONFIG = {
  messages: [
    {
      text: 'Message text',
      author: 'Author name',
    },
    // Add or modify messages
  ],
}
```

### 10. Update Navigation and Footer

**File: `src/components/Navigation.tsx`**
```typescript
const NAV_CONFIG = {
  brandName: 'Bhagya & Dulanga',  // Change to your names
  links: [
    // Add, remove, or modify navigation links
  ],
}
```

**File: `src/components/Footer.tsx`**
```typescript
const FOOTER_CONFIG = {
  coupleName: 'Bhagya & Dulanga',  // Your names
  socialLinks: [
    // Update with your social media URLs
  ],
}
```

### 11. Customize Colors and Fonts

**File: `src/index.css`**

All color variables are defined at the top:
```css
:root {
  /* Change these to customize your color scheme */
  --color-primary: #FDE2E2;     /* Main pastel pink */
  --color-secondary: #FFF5E1;   /* Cream color */
  --color-accent: #FFB6C1;      /* Light pink accent */
  --color-text-dark: #3D3D3D;   /* Dark text */
  --color-text-light: #666666;  /* Light text */

  /* Change fonts */
  --font-heading: 'Cormorant Garamond', serif;
  --font-body: 'Montserrat', sans-serif;
}
```

To use different fonts:
1. Find fonts on [Google Fonts](https://fonts.google.com/)
2. Update the font import in `index.html`
3. Update the CSS variables above

## Database Setup

The website uses Supabase for RSVP submissions and contact messages. The database is already configured with:

- **rsvp_submissions** table: Stores guest RSVPs
- **contact_messages** table: Stores contact form messages

Both tables have Row Level Security enabled and allow public insert access.

## Viewing Submissions

To view RSVP submissions and contact messages:

1. Go to your Supabase dashboard
2. Navigate to the Table Editor
3. Select `rsvp_submissions` or `contact_messages` table
4. View all submissions with guest details

## Image Hosting

For best results, host your images on a reliable service:

- **Recommended**: Upload to a cloud storage service like:
  - Cloudinary
  - Imgix
  - Amazon S3
  - Your own hosting

- **Free option**: Use [Pexels](https://www.pexels.com/) for stock photos (already used as placeholders)

Replace all image URLs in the component configuration objects.

## Social Sharing

The website includes social sharing functionality. When users click the "Share Our Wedding" button:
- On mobile devices with native sharing support, it opens the device's share dialog
- On other devices, it copies the URL to clipboard

## Responsive Design

The website is fully responsive with breakpoints at:
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

All sections automatically adapt to different screen sizes.

## Adding/Removing Sections

To add or remove sections:

1. Open `src/App.tsx`
2. Import/remove the component
3. Add/remove the component in the JSX

Example:
```tsx
// To remove the Registry section, simply delete or comment out:
<Registry />
```

## Animations

The website includes several animations:
- **fadeInUp**: Elements fade in and slide up
- **fadeIn**: Simple fade in
- **float**: Floating animation
- **pulse**: Pulsing animation

These are defined in `src/index.css` and can be customized.

## Getting Help

All components are heavily commented with `EDITABLE` markers to guide you. If you need to change something:

1. Look for the `EDITABLE` comment in the relevant component
2. Update the configuration object
3. Save the file

The website will automatically reload with your changes.

## Backup

Before making significant changes:
1. Test changes in a development environment first
2. Keep backups of your original configuration

Enjoy your beautiful wedding website!
