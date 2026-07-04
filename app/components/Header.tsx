"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [showBonus, setShowBonus] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur-sm border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setShowBonus(true)}
              onMouseEnter={() => setShowBonus(true)}
              className="text-white font-extrabold text-lg sm:text-xl hover:text-emerald-300 transition flex items-center gap-2"
            >
              <span>Makler Bonus</span>
              <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-2 py-1 text-xs font-semibold text-slate-950">Info</span>
            </button>

            <nav className="hidden md:flex items-center gap-4 text-slate-200">
              <Link href="/#dienstleistungen" className="hover:underline">Dienstleistungen</Link>
              <Link href="/#uber-uns" className="hover:underline">Über Uns</Link>
              <Link href="/#preise" className="hover:underline">Preise</Link>
              <Link href="/faq" className="hover:underline">FAQ</Link>
              <Link href="/agb" className="hover:underline">AGB</Link>
              <Link href="/impressum" className="hover:underline">Impressum</Link>
              <Link href="/#kontakt" className="hover:underline">Kontakt</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a href="#kontakt" className="rounded-full bg-slate-800/70 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800">Kontakt</a>
          </div>
        </div>
      </header>

      {showBonus ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div className="w-full max-w-xl rounded-3xl border border-slate-700 bg-slate-950/95 p-8 shadow-2xl shadow-black/60 backdrop-blur-lg">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Makler Bonus</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Exklusives Makler-Netzwerk</h2>
              </div>
              <button
                type="button"
                onClick={() => setShowBonus(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 text-slate-200 hover:bg-slate-700"
                aria-label="Modal schließen"
              >
                ×
              </button>
            </div>
            <p className="mt-6 text-slate-300 leading-8">
              Wir bieten Ihnen die Möglichkeit, Ihre von uns entrümpelte Immobilie direkt an unser exklusives Makler-Netzwerk zu vermitteln. Dieser Service ist für Sie vollkommen kostenlos und unverbindlich.
            </p>
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setShowBonus(false)}
                className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
