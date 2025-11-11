# Quick Setup Guide - Cabinet Avocat Pujină Mihaela

This guide will help you get the website up and running quickly.

## ✅ What's Been Built

A complete, professional law firm website with:

### Pages
- **Homepage** ([/](http://localhost:3001)) - Hero section, practice areas, testimonials, CTA
- **Practice Areas** ([/domenii-practica](http://localhost:3001/domenii-practica)) - All 6 practice areas with details
- **About** ([/despre](http://localhost:3001/despre)) - Professional profile, timeline, achievements
- **Contact** ([/contact](http://localhost:3001/contact)) - Form, Google Maps, contact info

### Features
- ✨ Mobile-first responsive design
- 📱 WhatsApp floating button (links to 0753 434 005)
- 🔔 Exit intent popup for free consultation
- 📧 Contact form with API endpoint
- 🗺️ Google Maps integration
- ⭐ 5-star testimonials carousel
- 🎨 Professional gold & black theme
- 🚀 SEO optimized (schema markup, sitemap, meta tags)
- 📊 Google Analytics ready

## 🚀 Quick Start (Development)

1. **Navigate to project:**
   ```bash
   cd avocat-pujina
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 📝 Next Steps (Before Going Live)

### 1. Firebase Setup (Required for Contact Form)

1. Create Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Get your config from Project Settings
4. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
5. Add your Firebase credentials to `.env.local`

### 2. Google Analytics (Optional but Recommended)

1. Create GA4 property at [https://analytics.google.com/](https://analytics.google.com/)
2. Get Measurement ID (starts with G-)
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### 3. Update Content

#### Contact Information
Files to update:
- [components/Header.tsx](components/Header.tsx) - Phone in header
- [components/Footer.tsx](components/Footer.tsx) - Full contact info
- [components/WhatsAppButton.tsx](components/WhatsAppButton.tsx) - WhatsApp number
- [app/layout.tsx](app/layout.tsx) - Structured data (address, phone)

#### Images
Replace placeholders in:
- [app/despre/page.tsx](app/despre/page.tsx) - Lawyer profile photo
- [components/home/Hero.tsx](components/home/Hero.tsx) - Hero background

#### Google Maps
1. Go to [Google Maps](https://www.google.com/maps)
2. Search "Strada Maior Ioan 3, Fălticeni"
3. Click Share → Embed map
4. Copy iframe code
5. Replace in [app/contact/page.tsx](app/contact/page.tsx)

### 4. Deploy to Production

#### Option A: Vercel (Easiest - Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Add environment variables in Vercel dashboard

4. Your site will be live at `yourproject.vercel.app`

#### Option B: Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. Initialize:
   ```bash
   firebase init
   ```

3. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### 5. Set Up Domain

After deployment:
1. Purchase domain: `avocat-pujina.ro` (recommended registrars: GoDaddy, Namecheap)
2. In your hosting platform (Vercel/Firebase):
   - Add custom domain
   - Follow DNS setup instructions
3. Wait for DNS propagation (24-48 hours)

### 6. SEO & Marketing Checklist

After site is live:
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Create [Google My Business](https://www.google.com/business/) listing
- [ ] Verify site in Google Search Console
- [ ] Set up [Facebook Business Page](https://www.facebook.com/business)
- [ ] Create [LinkedIn Company Page](https://www.linkedin.com/company/)
- [ ] Update social links in [components/Footer.tsx](components/Footer.tsx)
- [ ] Ask satisfied clients for Google reviews
- [ ] Share on social media

## 🔧 Common Tasks

### Add a New Testimonial

Edit [components/home/Testimonials.tsx](components/home/Testimonials.tsx) and add to the `testimonials` array:

```typescript
{
  name: 'Client Name',
  case: 'Case Type',
  rating: 5,
  text: 'Testimonial text...',
  date: '2024'
}
```

### Change Colors

Edit [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  gold: {
    DEFAULT: '#D4AF37',  // Change this
    dark: '#B8860B',      // And this
    light: '#F4E4B8',     // And this
  },
}
```

### Update Practice Areas

Edit two files:
1. [components/home/PracticeAreas.tsx](components/home/PracticeAreas.tsx) - Homepage cards
2. [components/PracticeAreasDetail.tsx](components/PracticeAreasDetail.tsx) - Detailed pages

## 📱 Mobile Testing

Test on:
- iPhone Safari (portrait & landscape)
- Android Chrome
- iPad/Tablet
- Desktop (Chrome, Firefox, Safari, Edge)

The site is already optimized for mobile, but always verify:
- Menu hamburger works
- Phone numbers are clickable
- Forms are easy to fill
- Text is readable
- Images load quickly

## 🆘 Troubleshooting

### Port 3000 in use
The dev server will automatically use port 3001 if 3000 is busy.

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Firebase errors
- Double-check `.env.local` credentials
- Ensure Firestore is enabled in Firebase Console
- Check security rules allow writes to `contacts` collection

### Styling issues
- Run `npm install` to ensure Tailwind is installed
- Clear browser cache
- Check [tailwind.config.js](tailwind.config.js) is correct

## 📞 Support

For technical questions about this codebase:
- Check [README.md](README.md) for detailed documentation
- Review component files - they're well-commented
- All components are in TypeScript for better IntelliSense

For the law practice:
- Phone: 0753 434 005
- Email: avocatpujina@yahoo.ro

## 🎉 You're All Set!

The website is production-ready. Just:
1. Set up Firebase (for contact form)
2. Add your content/images
3. Deploy to Vercel or Firebase
4. Point your domain
5. Start getting clients!

Good luck with your law practice website! 🏛️⚖️
