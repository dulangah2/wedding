# Quick Start Guide

Get your wedding website up and running in minutes!

## Step 1: Essential Updates (5 minutes)

### Update Couple Names
Open these 3 files and update the couple names:

1. **`src/components/Hero.tsx`**
   ```typescript
   coupleName1: 'YourName',
   coupleName2: 'PartnerName',
   ```

2. **`src/components/Navigation.tsx`**
   ```typescript
   brandName: 'YourName & PartnerName',
   ```

3. **`src/components/Footer.tsx`**
   ```typescript
   coupleName: 'YourName & PartnerName',
   ```

### Update Wedding Date (CRITICAL!)
Open these 2 files and update the wedding date:

1. **`src/components/Hero.tsx`**
   ```typescript
   weddingDate: 'Your Date',
   ```

2. **`src/components/Countdown.tsx`** (MUST be exact date/time)
   ```typescript
   targetDate: '2026-02-14T15:00:00',  // Format: YYYY-MM-DDTHH:mm:ss
   ```

3. **`src/components/Details.tsx`**
   ```typescript
   ceremony: {
     date: 'Your Date',
     time: 'Your Time',
   },
   reception: {
     date: 'Your Date',
     time: 'Your Time',
   },
   ```

### Update Contact Email
Open **`src/components/Contact.tsx`**
```typescript
email: 'youremail@example.com',
```

## Step 2: Update Your Story (5 minutes)

Open **`src/components/About.tsx`** and write your love story:
```typescript
content: "Your love story here...",
```

## Step 3: Update Wedding Venue (5 minutes)

Open **`src/components/Details.tsx`** and update:

1. Ceremony location and address
2. Reception location and address
3. Google Maps embed URL:
   - Go to [Google Maps](https://www.google.com/maps)
   - Search for your venue
   - Click "Share" → "Embed a map"
   - Copy the iframe `src` URL
   - Paste into `mapUrl`

## Step 4: Test Your Website

```bash
# The dev server is already running
# Open your browser and view the website
# Make changes and see them update live!
```

## Step 5: Replace Images (Later)

When you have time, replace placeholder images in these files:
- `src/components/Hero.tsx` - Hero background
- `src/components/About.tsx` - Your couple photos (2 images)
- `src/components/Gallery.tsx` - Gallery photos (6 images)

**Tip**: You can use the Pexels placeholder images initially and replace them later with your own photos.

## Step 6: Customize Content (Later)

Update these sections when ready:
- **FAQ** (`src/components/FAQ.tsx`) - Add your questions
- **Registry** (`src/components/Registry.tsx`) - Add your registry links
- **Testimonials** (`src/components/Testimonials.tsx`) - Add real messages
- **Welcome message** (`src/components/Hero.tsx`) - Personalize greeting

## Step 7: Customize Colors (Optional)

Open **`src/index.css`** and change color variables:
```css
:root {
  --color-primary: #FDE2E2;     /* Change to your color */
  --color-secondary: #FFF5E1;   /* Change to your color */
  --color-accent: #FFB6C1;      /* Change to your color */
}
```

## Testing Checklist

Before sharing with guests:

- [ ] Check countdown timer shows correct time
- [ ] Submit a test RSVP and verify it appears in Supabase
- [ ] Test "Add to Calendar" buttons
- [ ] Test contact form submission
- [ ] Check all navigation links work
- [ ] View on mobile device
- [ ] Verify all dates and times are correct

## Viewing RSVP Submissions

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to "Table Editor"
4. Click "rsvp_submissions" table
5. View all guest responses

## Need Help?

All customizable content is marked with `/* EDITABLE: */` comments in the code.

Use Ctrl+F (Cmd+F on Mac) to search for "EDITABLE" in any file to find what you can customize.

For detailed customization, see:
- **README.md** - Full documentation
- **CUSTOMIZATION_CHECKLIST.md** - Complete checklist

## Common Customizations

### Change Navigation Links
**File**: `src/components/Navigation.tsx`
```typescript
links: [
  { label: 'Home', href: '#hero' },
  { label: 'Our Story', href: '#about' },
  // Add or remove links here
],
```

### Change Number of Gallery Images
**File**: `src/components/Gallery.tsx`
```typescript
images: [
  { url: 'image1.jpg', alt: 'Description' },
  { url: 'image2.jpg', alt: 'Description' },
  // Add more images here
],
```

### Update Social Media Links
**File**: `src/components/Footer.tsx`
```typescript
socialLinks: [
  { icon: Facebook, url: 'https://facebook.com/yourpage', label: 'Facebook' },
  { icon: Instagram, url: 'https://instagram.com/yourpage', label: 'Instagram' },
  // Add or update links
],
```

### Add More FAQ Questions
**File**: `src/components/FAQ.tsx`
```typescript
questions: [
  {
    question: 'Your question?',
    answer: 'Your answer...',
  },
  // Add more Q&A here
],
```

## Tips for Success

1. **Start with the essentials** (names, dates, venues)
2. **Test the RSVP form** early to ensure it works
3. **Use high-quality images** (at least 1200px wide)
4. **Test on mobile** before sharing
5. **Keep content concise** for better readability
6. **Update FAQ** as guests ask questions
7. **Monitor RSVP submissions** regularly

## Color Scheme Inspiration

Can't decide on colors? Try these combinations:

**Romantic Pink & Cream** (Current default)
```css
--color-primary: #FDE2E2;
--color-secondary: #FFF5E1;
--color-accent: #FFB6C1;
```

**Elegant Navy & Gold**
```css
--color-primary: #E8F0F7;
--color-secondary: #FFF9F0;
--color-accent: #C9A962;
```

**Garden Green & White**
```css
--color-primary: #E8F5E9;
--color-secondary: #FFFFFF;
--color-accent: #81C784;
```

**Sunset Orange & Coral**
```css
--color-primary: #FFF3E0;
--color-secondary: #FFEBE9;
--color-accent: #FF8A65;
```

**Lavender & Purple**
```css
--color-primary: #F3E5F5;
--color-secondary: #FCF4FF;
--color-accent: #BA68C8;
```

---

**You're all set!** Your wedding website is ready to customize and share with your guests.

Happy wedding planning! 💕
