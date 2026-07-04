import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Entrümpelung München | Entrümpelmeister Wohnungsauflösung & Hausauflösung',
  description: 'Entrümpelmeister München bietet professionelle Entrümpelung, Wohnungsauflösung und Hausauflösung in München. Jetzt WhatsApp an +491639603781 für kostenfreie Besichtigung und Festpreisangebot.',
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
