# Wedding Website Customization Checklist

Use this checklist to ensure you've customized all sections of your wedding website.

## Essential Information

- [ ] **Couple Names**
  - File: `src/components/Hero.tsx` (Hero section)
  - File: `src/components/Navigation.tsx` (Navigation brand)
  - File: `src/components/Footer.tsx` (Footer copyright)

- [ ] **Wedding Date & Time**
  - File: `src/components/Hero.tsx` (Display date)
  - File: `src/components/Countdown.tsx` (Countdown timer - CRITICAL!)
  - File: `src/components/Details.tsx` (Ceremony and reception details)

- [ ] **Contact Email**
  - File: `src/components/Contact.tsx`

## Content Updates

- [ ] **Hero Section**
  - Update couple names
  - Update wedding date display
  - Update welcome message
  - Replace hero background image
  - Adjust background color/overlay if needed

- [ ] **Our Story**
  - Write your love story
  - Replace placeholder images with your photos
  - Update section title if desired

- [ ] **Wedding Details**
  - Update ceremony location, address, date, and time
  - Update reception location, address, date, and time
  - Replace Google Maps embed URL with your venue location
  - Test "Add to Calendar" functionality with correct dates

- [ ] **Gallery**
  - Replace all placeholder images with your photos
  - Add more images if desired (just add to the array)
  - Update image alt text for accessibility

- [ ] **RSVP Form**
  - Test form submission
  - Customize confirmation message if desired
  - Adjust max number of guests in dropdown if needed

- [ ] **Registry**
  - Replace placeholder registry links with actual URLs
  - Update registry names and descriptions
  - Add or remove registries as needed

- [ ] **FAQ Section**
  - Update questions and answers to match your event
  - Add new questions relevant to your wedding
  - Remove irrelevant questions

- [ ] **Testimonials**
  - Replace placeholder messages with real testimonials
  - Add messages from family and friends
  - Or remove this section if not needed

- [ ] **Contact Form**
  - Update contact email address
  - Test form submission
  - Customize subtitle message if desired

## Design Customization

- [ ] **Colors**
  - File: `src/index.css` (Root CSS variables)
  - Update primary color (default: soft pastel pink #FDE2E2)
  - Update secondary color (default: cream #FFF5E1)
  - Update accent color (default: light pink #FFB6C1)
  - Update text colors if needed

- [ ] **Fonts**
  - Current heading font: Cormorant Garamond (serif)
  - Current body font: Montserrat (sans-serif)
  - To change: Update Google Fonts import in `index.html` and CSS variables in `src/index.css`

- [ ] **Navigation**
  - Update brand name
  - Add/remove navigation links if you added/removed sections
  - Test mobile menu functionality

- [ ] **Footer**
  - Update couple names
  - Update social media links with your actual URLs
  - Update copyright year (auto-updates annually)
  - Test share functionality

## Image Checklist

Replace all placeholder images with your own:

- [ ] Hero background image (`src/components/Hero.tsx`)
- [ ] About section images (2 images in `src/components/About.tsx`)
- [ ] Gallery images (6 images by default in `src/components/Gallery.tsx`)

**Recommended image sizes:**
- Hero image: 1920x1080px or larger (landscape)
- About images: 800x1000px (portrait)
- Gallery images: 800x800px (square)

## Functionality Testing

- [ ] **Navigation**
  - Test all navigation links scroll to correct sections
  - Test mobile menu opens and closes properly
  - Test navigation appearance changes on scroll

- [ ] **Countdown Timer**
  - Verify countdown shows correct time remaining
  - Verify it updates in real-time

- [ ] **RSVP Form**
  - Submit a test RSVP
  - Check Supabase dashboard to confirm submission
  - Test form validation (required fields)
  - Test success message displays

- [ ] **Contact Form**
  - Submit a test message
  - Check Supabase dashboard to confirm submission
  - Test form validation
  - Test success message displays

- [ ] **Calendar Export**
  - Test "Add to Google Calendar" button
  - Test "Download iCal" button
  - Verify correct date and time in calendar events

- [ ] **Map**
  - Verify Google Maps embed shows correct venue location
  - Test map interaction (zoom, pan)

- [ ] **Social Sharing**
  - Test share button functionality
  - Verify correct URL is shared/copied

## Mobile Responsiveness

Test on different devices:

- [ ] Mobile phone (portrait and landscape)
- [ ] Tablet (portrait and landscape)
- [ ] Desktop
- [ ] Check all sections are readable and properly formatted
- [ ] Test forms work on mobile
- [ ] Test navigation menu on mobile

## SEO & Metadata

- [ ] **Page Title**
  - File: `index.html`
  - Update `<title>` tag with your names

- [ ] **Meta Description**
  - File: `index.html`
  - Update meta description for search engines

- [ ] **Favicon**
  - Heart icon is included by default
  - Replace `public/heart.svg` if you want a custom icon

## Database Verification

- [ ] Log into Supabase dashboard
- [ ] Verify `rsvp_submissions` table exists
- [ ] Verify `contact_messages` table exists
- [ ] Test that submissions appear in tables
- [ ] Set up email notifications (optional - requires Supabase functions)

## Final Checks

- [ ] Review all text for typos and accuracy
- [ ] Verify all dates and times are correct
- [ ] Test website on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test all links open correctly
- [ ] Review color scheme and adjust if needed
- [ ] Check image quality and load times
- [ ] Share test link with friend/family for feedback
- [ ] Run build (`npm run build`) to check for errors

## Launch Preparation

- [ ] Update social media URLs to your actual accounts
- [ ] Update registry URLs to your actual registries
- [ ] Verify all placeholder content is replaced
- [ ] Test website on actual wedding invitation URL
- [ ] Share website link with guests

## Post-Launch

- [ ] Monitor RSVP submissions in Supabase
- [ ] Respond to contact form messages
- [ ] Update FAQ as new questions arise
- [ ] Add new testimonials as they come in

---

**Tip**: Use Ctrl+F (or Cmd+F) to search for "EDITABLE" in any file to quickly find customizable sections!
