import React from 'react';
import Link from 'next/link';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur-sm border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="text-xl font-extrabold text-white hover:text-emerald-300">Makler Bonus</Link>
          <nav className="flex flex-wrap items-center gap-4 text-slate-200">
            <Link href="/" className="hover:underline">Startseite</Link>
            <Link href="/#kontakt" className="hover:underline">Kontakt</Link>
            <Link href="/faq" className="hover:underline">FAQ</Link>
            <Link href="/agb" className="hover:underline">AGB</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 space-y-10">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
          <h1 className="text-4xl font-bold text-emerald-400 mb-6">Impressum</h1>
          <div className="space-y-6 text-slate-300">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Anbieter</h2>
              <p>Makler Bonus / EntrümpelMeister</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Geschäftsführer</h2>
              <p>Abdullah Karaoluk</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Anschrift</h2>
              <address className="not-italic text-slate-200">
                Firma Karaoluk
                <br />Am Hedernfeld 26
                <br />81375 München
                <br />Deutschland
              </address>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Kontakt</h2>
              <p>Telefon: <a href="tel:+491639603781" className="text-emerald-400 hover:underline">+49 163 9603781</a></p>
              <p>E-Mail: <a href="mailto:Info@bayern-ruempelprofis.de" className="text-emerald-400 hover:underline">Info@bayern-ruempelprofis.de</a></p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Steuernummer</h2>
              <p>145/113/61452</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Haftungsausschluss</h2>
              <p className="text-slate-400 leading-7">Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
