import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default function GartenarbeitPage() {
  // Custom image placed first; drop the actual file at public/images/garten_custom.png
  const images = [
    '/images/Screenshot_20260704-185646.png',
    '/images/Screenshot_20260630-200829.png',
    '/images/Screenshot_20260630-200846.png',
    '/images/Screenshot_20260630-200902.png',
    '/images/Screenshot_20260630-200923.png',
    '/images/Screenshot_20260630-200943.png',
    '/images/Screenshot_20260630-201007.png',
    '/images/Screenshot_20260630-201025.png',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-emerald-400">Gartenarbeit</h1>
          <Link href="/#dienstleistungen" className="text-slate-300 hover:underline">Zurück</Link>
        </div>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-black/20">
          <h2 className="text-xl font-semibold text-white mb-4">Galerie</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, i) => (
              <div key={i} className="w-full h-48 overflow-hidden rounded-md bg-slate-800">
                <img src={src} alt={`Gartenarbeit ${i+1}`} className="w-full h-full object-cover object-center" />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-black/20">
          <h2 className="text-xl font-semibold text-white mb-4">Unsere Gartenarbeiten</h2>
          <p className="text-slate-300 leading-7">Wir bieten professionellen Gartenservice: Rasenpflege, Hecken- und Strauchschnitt, Unkrautentfernung, Laubentsorgung und saisonale Aufräumarbeiten. Unsere Leistungen sind flexibel und anpassbar an Ihre Bedürfnisse.</p>
        </section>
      </main>
    </div>
  );
}
