# Cabinet Avocat Pujină Mihaela - Website

Modern, responsive website for a Romanian law firm based in Fălticeni, Suceava.

## Features

✨ **Complete Website:**
- Homepage with impactful hero section
- 6 practice areas with dedicated pages
- About page with timeline and achievements
- Contact page with form and Google Maps integration
- Mobile-first responsive design

🎨 **Design:**
- Gold (#D4AF37) and Black color scheme
- Playfair Display font for headings
- Inter font for body text
- Modern, professional UI with smooth animations

📱 **User Experience:**
- WhatsApp floating button with notifications
- Exit intent popup for free consultation
- Click-to-call buttons throughout
- Mobile hamburger menu
- Auto-playing testimonials carousel

🚀 **Technical Features:**
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Firebase/Firestore for contact form submissions
- Google Analytics 4 integration
- SEO optimized with schema markup
- Sitemap and robots.txt

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** Firebase/Firestore
- **Icons:** Lucide React, React Icons
- **Deployment:** Vercel (recommended) or Firebase Hosting

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Firebase account (for database and hosting)
- Google Analytics account (optional)

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd avocat-pujina
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

   Then edit `.env.local` with your actual values:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

   # Google Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Firebase Setup

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it "avocat-pujina" (or your preferred name)
4. Enable Google Analytics (optional)

### 2. Set up Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Start in production mode
4. Choose a location (europe-west for Romania)

### 3. Create Firestore Collection

Create a collection called `contacts` with the following structure:

```javascript
{
  name: string,
  email: string,
  phone: string,
  caseType: string,
  urgency: string,
  contactMethod: string,
  message: string,
  createdAt: timestamp,
  status: 'new' | 'contacted' | 'closed'
}
```

### 4. Set up Security Rules

In Firestore Rules, add:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      // Allow writes from anyone (for contact form)
      allow create: if true;
      // Only allow reads/updates/deletes from authenticated users
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

### 5. Get Firebase Config

1. Go to Project Settings > General
2. Scroll to "Your apps"
3. Click the web icon (</>)
4. Register app and copy the config values to `.env.local`

## Google Analytics Setup

1. Create a GA4 property at [Google Analytics](https://analytics.google.com/)
2. Get your Measurement ID (starts with G-)
3. Add it to `.env.local` as `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Add environment variables:**
   - Go to your Vercel project dashboard
   - Navigate to Settings > Environment Variables
   - Add all variables from `.env.local`

4. **Set up custom domain:**
   - Go to Settings > Domains
   - Add your domain (e.g., avocat-pujina.ro)

### Option 2: Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase:**
   ```bash
   firebase init
   ```
   - Select Hosting
   - Choose your Firebase project
   - Set build directory to `.next`

4. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## Contact Form Integration

### Email Notifications

To receive email notifications when someone submits the contact form:

1. Install an email service (e.g., SendGrid, Resend):
   ```bash
   npm install @sendgrid/mail
   # or
   npm install resend
   ```

2. Update `app/api/contact/route.ts` to send emails

3. Add email credentials to `.env.local`

### WhatsApp Notifications

For WhatsApp notifications on form submissions:

1. Set up [Twilio WhatsApp API](https://www.twilio.com/whatsapp)
2. Add Twilio credentials to `.env.local`
3. Update contact API route to send WhatsApp messages

## Customization

### Update Contact Information

Update the following files:
- `components/Header.tsx` - Phone number
- `components/Footer.tsx` - Address, phone, email
- `components/WhatsAppButton.tsx` - WhatsApp number
- `app/layout.tsx` - Structured data

### Update Images

Replace placeholder images with actual photos:
- Lawyer profile photo in `app/despre/page.tsx`
- Office/courthouse photos in `components/home/Hero.tsx`

### Update Google Maps

In `app/contact/page.tsx`, replace the Google Maps embed with actual coordinates:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for "Strada Maior Ioan 3, Fălticeni"
3. Click Share > Embed a map
4. Copy the iframe code
5. Replace the existing iframe in the contact page

### Modify Practice Areas

Edit `components/home/PracticeAreas.tsx` and `components/PracticeAreasDetail.tsx` to customize practice area descriptions

## SEO Checklist

- [x] Meta titles and descriptions
- [x] Schema.org LocalBusiness markup
- [x] Open Graph tags
- [x] Sitemap.xml
- [x] Robots.txt
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business
- [ ] Add social media links in footer

## Performance Optimization

The website is already optimized for:
- Fast loading (< 2s)
- Mobile-first design
- Image optimization
- Code splitting
- SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Project Structure

```
avocat-pujina/
├── app/
│   ├── about/              # About page
│   ├── api/
│   │   └── contact/        # Contact form API
│   ├── contact/            # Contact page
│   ├── domenii-practica/   # Practice areas page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── robots.ts           # Robots.txt
│   └── sitemap.ts          # Sitemap
├── components/
│   ├── home/               # Homepage components
│   ├── ContactForm.tsx
│   ├── ContactSidebar.tsx
│   ├── CTAButton.tsx
│   ├── ExitIntentPopup.tsx
│   ├── Footer.tsx
│   ├── GoogleAnalytics.tsx
│   ├── Header.tsx
│   ├── PracticeAreasDetail.tsx
│   └── WhatsAppButton.tsx
├── lib/
│   └── firebase.ts         # Firebase configuration
├── public/                 # Static assets
├── .env.local.example      # Environment variables template
├── next.config.js          # Next.js configuration
├── package.json
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Support

For issues or questions:
- Email: avocatpujina@yahoo.ro
- Phone: 0753 434 005

## License

© 2024 Cabinet Avocat Pujină Mihaela. All rights reserved.
