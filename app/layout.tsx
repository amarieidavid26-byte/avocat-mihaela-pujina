import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://avocatmihaelapujina.com'), // ✅ CRITICAL - fixes canonical URLs
  title: {
    default: 'Cabinet Avocat Pujină Mihaela | Avocat Fălticeni, Suceava',
    template: '%s | Avocat Pujină Mihaela'
  },
  description: 'Cabinet avocatură în Fălticeni, Suceava. 15+ ani experiență. Drept familiei, penal, civil, comercial. Consultație gratuită. Laureat Firma de Aur.',
  keywords: ['avocat Fălticeni', 'avocat Suceava', 'cabinet avocatură', 'avocat divorț', 'avocat penal', 'avocat drept familiei', 'Pujină Mihaela'],
  authors: [{ name: 'Cabinet Avocat Pujină Mihaela' }],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://avocatmihaelapujina.com',
    title: 'Cabinet Avocat Pujină Mihaela | Avocat Fălticeni, Suceava',
    description: '15+ ani experiență. Drept familiei, penal, civil, comercial. Consultație gratuită.',
    siteName: 'Cabinet Avocat Pujină Mihaela',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Add your Google Search Console verification code here after setup
  // verification: {
  //   google: 'your-verification-code',
  // },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Cabinet Avocat Pujină Mihaela',
  image: 'https://avocatmihaelapujina.com/images/pujinapoza.jpg', // ✅ Fixed domain
  '@id': 'https://avocatmihaelapujina.com', // ✅ Fixed domain
  url: 'https://avocatmihaelapujina.com', // ✅ Fixed domain
  telephone: '+40753434005',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Strada Maior Ioan 3',
    addressLocality: 'Fălticeni',
    postalCode: '725200',
    addressRegion: 'Suceava',
    addressCountry: 'RO'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.45,
    longitude: 26.3
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '17:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '55'
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61550807963214'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ExitIntentPopup />
      </body>
    </html>
  )
}