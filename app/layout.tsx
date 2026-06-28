import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'EntrümpelMeister München | Professionelle Entrümpelung',
  description: 'Professionelle Haushaltsauflösung, Entrümpelung ve Wohnungsauflösung in München und Umgebung. Schnell, zuverlässig und besenrein.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-zinc-950 text-zinc-50 antialiased min-h-screen flex flex-col`}>
        <Header />

        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
