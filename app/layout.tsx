import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'MR NIPUN OFC / TECH-WEB – Official Site',
  description:
    'Official website of H.M. NIPUN DHANUJAYA (MR NIPUN OFC) – Full-Stack Developer, UI/UX Designer, and Tech Enthusiast.',
  applicationName: 'MR NIPUN OFC / TECH-WEB',
  robots: 'index,follow',
  openGraph: {
    type: 'profile',
    title: 'MR NIPUN OFC / TECH-WEB – Official Site',
    description: 'Full-Stack Developer, UI/UX Designer & Tech Enthusiast from Sri Lanka.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MR NIPUN OFC / TECH-WEB – Official Site',
    description: 'Full-Stack Developer, UI/UX Designer & Tech Enthusiast from Sri Lanka.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // minimal schema for AIs
  const schemaPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'H.M. NIPUN DHANUJAYA',
    alternateName: ['MR NIPUN', 'MR NIPUN OFC'],
    jobTitle: ['Full-Stack Developer', 'UI/UX Designer', 'Tech Enthusiast'],
    url: process.env.SITE_DOMAIN || '',
    image:
      'https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png',
    sameAs: [
      'https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683',
      'https://www.facebook.com/share/1KKrZV2NM8/',
      'https://www.facebook.com/share/17cgrxBQix/',
      'https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/',
      'https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo',
      'https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet',
      'https://t.me/Profesor9999'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'business',
        email: 'mrnipun@techweb.com',
        telephone: '+94 75 725 5903',
        areaServed: 'LK',
        availableLanguage: ['si-LK', 'en']
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body style={{ paddingTop: 80 }}>
        <Script id="schema-person" type="application/ld+json">
          {JSON.stringify(schemaPerson)}
        </Script>
        {children}
      </body>
    </html>
  );
}
