import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rohan Asudani | Software Engineer',
  description:
    'Rohan Asudani is a Computer Science student and software engineer building full-stack products, AI systems, and developer tools.',
  authors: [{ name: 'Rohan Asudani' }],
  keywords: [
    'Rohan Asudani',
    'Software Engineer',
    'AI Engineer',
    'Machine Learning Engineer',
    'Full-stack Engineer',
    'University of Arizona',
  ],
  creator: 'Rohan Asudani',
  openGraph: {
    title: 'Rohan Asudani | Software Engineer',
    description:
      'Software engineer building full-stack products, AI systems, and developer tools.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Rohan Asudani | Software Engineer',
    description:
      'Software engineer building full-stack products, AI systems, and developer tools.',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
