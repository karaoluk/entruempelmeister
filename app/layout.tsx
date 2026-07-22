import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Entrümpelung München | Entsorgung & Hausauflösung – Entrümpelmeister',
  description: 'Professionelle Entrümpelung, Entsorgung & Hausauflösung in München. Schnell, zuverlässig, zum Festpreis. Jetzt kostenlose Besichtigung per WhatsApp sichern!',
  keywords: [
    'Entrümpelung München',
    'Entsorgung München',
    'Hausauflösung München',
    'Wohnungsauflösung München',
    'Entrümpelungsfirma München',
    'Haushaltsauflösung München',
  ],
  openGraph: {
    title: 'Entrümpelung München | Entsorgung & Hausauflösung – Entrümpelmeister',
    description: 'Professionelle Entrümpelung, Entsorgung & Hausauflösung in München. Schnell, zuverlässig, zum Festpreis. Jetzt kostenlose Besichtigung per WhatsApp sichern!',
    locale: 'de_DE',
    type: 'website',
    siteName: 'Entrümpelmeister',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-zinc-950 text-zinc-50 antialiased min-h-screen flex flex-col`}>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
