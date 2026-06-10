import type { Metadata } from 'next';
import { Cormorant_Garamond, Syne, Space_Mono } from 'next/font/google';
import './globals.css';
import Nav               from '@/components/Nav';
import Footer            from '@/components/Footer';
import CustomCursor      from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';

/* ─── Fonts ─── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style:  ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

/* ─── Metadata ─── */
export const metadata: Metadata = {
  title:       'NeuMind — Intelligence. Reimagined.',
  description: 'NeuMind is a deep-tech and AI research agency designing intelligent systems for everyday life. Founded 2026, Palakkad, India.',
  keywords:    ['AI', 'machine learning', 'deep tech', 'NeuMind', 'research', 'engineering', 'India'],
  authors:     [{ name: 'NeuMind' }],
  openGraph: {
    title:       'NeuMind — Intelligence. Reimagined.',
    description: 'Deep-tech AI research agency. Smart systems. Real impact.',
    type:        'website',
    locale:      'en_IN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${syne.variable} ${spaceMono.variable}`}
    >
      <body className="bg-[#0A0C10] text-[#F0EDE8] overflow-x-hidden grain-overlay">
        {/* Interactive canvas background */}
        <ParticleBackground />

        {/* Fine-pointer custom gold cursor */}
        <CustomCursor />

        {/* Page chrome */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
