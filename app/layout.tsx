// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import StatCounter from '@/components/StatCounter';
import { COMPANY, META } from './constants';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  display: 'swap', 
  weight: ['300', '400', '500', '600', '700', '800', '900'], 
});

// ✅ COMPLETE SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL(`https://${COMPANY.domain}`),
  
  title: {
    default: `${COMPANY.name} | Flights, Hotels & Holiday Packages to the Middle East`,
    template: `%s | ${COMPANY.name}`,
  },
  
  description: 'Book cheap flights, luxury hotels, and customized holiday packages to the Middle East. Best deals on Dubai, Doha, Abu Dhabi, Kuwait & more. 24/7 customer support.',
  
  keywords: [
    COMPANY.name,
    'cheap flights to Middle East',
    'Middle East holiday packages',
    'Dubai package',
    'Doha package',
    'Abu Dhabi package',
    'Kuwait package',
    'Riyadh package',
    'Muscat package',
    'book flights online',
    'luxury travel agency',
    'holiday deals',
    'UAE travel',
    'Qatar travel',
  ],
  
  authors: [{ name: COMPANY.name }],
  
  openGraph: {
    title: `${COMPANY.name} | Flights, Hotels & Holiday Packages to the Middle East`,
    description: 'Book cheap flights, luxury hotels, and customized holiday packages to the Middle East. Best deals on Dubai, Doha, Abu Dhabi, Kuwait & more.',
    url: `https://${COMPANY.domain}`,
    siteName: COMPANY.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Travel to the Middle East`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | Flights, Hotels & Holiday Packages to the Middle East`,
    description: 'Book cheap flights, luxury hotels, and customized holiday packages to the Middle East.',
    images: ['/og-image.jpg'],
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
  
  alternates: {
    canonical: `https://${COMPANY.domain}`,
  },
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body 
        className="min-h-full bg-white text-gray-900 flex flex-col"
        style={montserrat.style}
      >
        <StatCounter />
        {children}
      </body>
    </html>
  );
}