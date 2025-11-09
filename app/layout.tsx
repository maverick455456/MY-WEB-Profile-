import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MR NIPUN OFC / TECH-WEB – Official Site',
  description:
    'Official website of H.M. NIPUN DHANUJAYA (MR NIPUN OFC) – Full-Stack Developer, UI/UX Designer and Tech Enthusiast.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Mobile scale + icons */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
