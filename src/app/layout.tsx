import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
