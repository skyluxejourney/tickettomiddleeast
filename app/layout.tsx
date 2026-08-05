// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'TicketToMiddleEast | Luxury Travel & Holiday Packages',
  description: 'Book luxury holiday packages, flights, hotels and customized trips with TicketToMiddleEast.',
  keywords: ['Skyluxe Journey', 'ticket to middle east', 'travel agency'],
  icons: {
    icon: '/favicon.ico',
  },
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
        style={inter.style} // This applies the font directly
      >
        {children}
      </body>
    </html>
  );
}