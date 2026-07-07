import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div id="top" />
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12 space-y-20">
        <section id="hero" className="relative rounded-2xl overflow-hidden bg-[url('/1000147087.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">Entrümpelung München vom Entrümpelmeister</h1>
              <p className="mt-4 text-lg md:text-xl text-slate-200">Professionelle Entrümpelung München, Wohnungsauflösung und Hausauflösung in München &amp; Umgebung — schnell, zuverlässig und besenrein.</p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/491639603781" target="_blank" rel="noopener noreferrer" className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-6 py-3 font-semibold shadow-lg transition">WhatsApp +49 163 9603781</a>
                <a href="#kontakt" className="rounded-full border border-white/10 bg-white/5 text-white px-6 py-3 font-semibold shadow-lg transition hover:bg-white/10">Kostenlose Besichtigung anfragen</a>
              </div>

              <p className="mt-6 text-slate-200 text-center">Entrümpelung München, Wohnungsauflösung München und Hausauflösung München mit transparenten Festpreisen und persönlicher Betreuung.</p>

              <ul className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">✓</span>
                  <span className="font-medium">Kostenlose Besichtigung</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">✓</span>
                  <span className="font-medium">Festpreisgarantie</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">✓</span>
                  <span className="font-medium">Besenreine Übergabe</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="dienstleistungen" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-10 text-emerald-400">Dienstleistungen</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg shadow-black/20 md:col-span-3">
              <div className="p-6">
                <div className="md:flex md:items-start md:gap-8">
                  <div className="md:flex-1">
                    <h3 className="text-2xl font-bold text-emerald-400 mb-4">Entrümpelung München</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      <Image src="/images/Screenshot_20260630-195232.png" alt="Entrümpelung Bestand 1" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                      <Image src="/images/Screenshot_20260630-195322.png" alt="Entrümpelung Bestand 2" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                      <Image src="/images/Screenshot_20260630-195416.png" alt="Entrümpelung Bestand 3" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                      <Image src="/images/Screenshot_20260630-195437.png" alt="Entrümpelung Bestand 4" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                      <Image src="/images/Screenshot_20260630-195452.png" alt="Entrümpelung Bestand 5" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                      <Image src="/images/Screenshot_20260704-181501.png" alt="Entrümpelung Neu 1" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                      <Image src="/images/Screenshot_20260704-181558.png" alt="Entrümpelung Neu 2" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                      <Image src="/images/Screenshot_20260704-181654.png" alt="Entrümpelung Neu 3" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                      <Image src="/images/Screenshot_20260704-181715.png" alt="Entrümpelung Neu 4" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                      <Image src="/images/Screenshot_20260704-181733.png" alt="Entrümpelung Neu 5" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                      <Image src="/images/Screenshot_20260704-181746.png" alt="Entrümpelung Neu 6" width={640} height={384} className="w-full h-48 object-cover object-center rounded-md" />
                    </div>
                  </div>

                  <div className="md:w-1/2 mt-6 md:mt-0">
                    <h4 className="text-xl font-semibold text-white mb-3">Entrümpelung München &amp; Wohnungsauflösung</h4>
                    <p className="text-slate-300 leading-7 mb-4">Wir bieten professionelle Entrümpelung München, Hausauflösung München und Wohnungsauflösung in München an. Unser Leistungsspektrum umfasst:</p>
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                      <li><strong className="text-slate-200">Wohnungsauflösungen:</strong> Fachgerechte Räumung von Wohnungen, Häusern und Kellern.</li>
                      <li><strong className="text-slate-200">Gewerbeauflösungen:</strong> Schnelle und diskrete Entrümpelung von Büros, Lagerräumen und Werkstätten.</li>
                      <li><strong className="text-slate-200">Sperrmüllentsorgung:</strong> Umweltschonende Entsorgung von Möbeln, Elektrogeräten und sonstigem Sperrgut.</li>
                      <li><strong className="text-slate-200">Garagen- und Dachbodenräumungen:</strong> Wir befreien Ihre Abstellflächen von Altlasten.</li>
                      <li><strong className="text-slate-200">Besenreine Übergabe:</strong> Wir hinterlassen Ihre Räumlichkeiten sauber und ordentlich für eine reibungslose Übergabe.</li>
                    </ul>
                    <p className="text-slate-300 mt-4">Egal ob Privat oder Gewerbe – wir garantieren Ihnen eine zuverlässige, diskrete und schnelle Abwicklung.</p>
                    <div className="mt-6">
                      <a href="https://wa.me/491639603781" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition">Entrümpelung München per WhatsApp</a>
                    </div>
                    <p className="text-slate-400 text-sm mt-3">Direktkontakt: +49 163 9603781</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg shadow-black/20">
              <div className="h-48 overflow-hidden bg-slate-900">
                <Image src="/images/Screenshot_20260630-195232.png" alt="Entsorgung" width={640} height={384} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Entsorgung</h3>
                <p className="text-slate-300 mb-6">Fachgerechte Entsorgung von Sperrmüll, Elektro- und Sonderabfall nach den geltenden Vorschriften.</p>
                <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg shadow-black/20">
              <div className="h-48 overflow-hidden bg-slate-900">
                <Image src="/images/Screenshot_20260630-195213.png" alt="Hausauflösung" width={640} height={384} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Hausauflösung</h3>
                <p className="text-slate-300 mb-6">Komplette Haus- und Wohnungsauflösungen inklusive Entrümpelung, Demontage und logistischem Transport.</p>
                <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg shadow-black/20">
              <div className="h-48 overflow-hidden bg-slate-900">
                <Image src="/images/Screenshot_20260630-195416.png" alt="Hausreinigung" width={640} height={384} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Hausreinigung</h3>
                <p className="text-slate-300 mb-6">Professionelle und schnelle Reinigung für Ihr Zuhause – hygienisch und zuverlässig.</p>
                <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg shadow-black/20">
              <a href="/gartenarbeit" className="block h-48 overflow-hidden bg-slate-900">
                <Image src="/images/Screenshot_20260704-185646.png" alt="Gartenarbeit" width={640} height={384} className="w-full h-full object-cover object-center" />
              </a>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Gartenarbeit</h3>
                <p className="text-slate-300 mb-6">Pflege, Reinigung und Gestaltung Ihres Gartens durch unser erfahrenes Team.</p>
                <a href="/gartenarbeit" className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg shadow-black/20">
              <div className="h-48 overflow-hidden bg-slate-900">
                <Image src="/images/PXL_20260601_101049822_1.jpg" alt="Renovierung" width={640} height={384} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Renovierung</h3>
                <p className="text-slate-300 mb-6">Fachgerechte Renovierung und Instandsetzung für Ihre Räumlichkeiten.</p>
                <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
              </div>
            </div>
          </div>
        </section>

        <section id="uber-uns" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-10 text-emerald-400">Über Uns</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white mb-3">Unser Team</h3>
              <p className="text-slate-300 mb-6">EntrümpelMeister ist ein lokales Team aus München. Wir legen großen Wert auf Qualität und Pünktlichkeit.</p>
              <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white mb-3">Warum wir?</h3>
              <p className="text-slate-300 mb-6">Verlässlich, schnell und kundenorientiert – Ihre Zufriedenheit ist unser oberstes Ziel.</p>
              <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white mb-3">Schneller Support</h3>
              <p className="text-slate-300 mb-6">Wir beantworten Ihre Fragen schnell und finden die passende Lösung für Ihr Projekt.</p>
              <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
            </div>
          </div>
        </section>

        <section id="preise" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-10 text-emerald-400">Preise</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white mb-3">Festpreis</h3>
              <p className="text-slate-300 mb-6">Klare Preise ohne versteckte Kosten – faire und transparente Abrechnung.</p>
              <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white mb-3">Kostenlose Besichtigung</h3>
              <p className="text-slate-300 mb-6">Wir prüfen vor Ort den Bedarf und erstellen ein passendes Angebot für Sie.</p>
              <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white mb-3">Garantie</h3>
              <p className="text-slate-300 mb-6">Zufriedenheit nach Abschluss garantiert – wir lassen Sie nicht allein.</p>
              <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-10 text-emerald-400">Kontakt</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white mb-3">Kontakt</h3>
              <p className="text-slate-300 mb-4">Erreichen Sie uns bequem per Telefon oder E-Mail für Ihr Anliegen.</p>
              <ul className="text-slate-300 space-y-3 mb-6">
                <li><span className="block text-slate-400">Firma</span><span className="text-slate-200">Firma Karaoluk</span></li>
                <li><span className="block text-slate-400">Adress</span><span className="text-slate-200">Am Hedernfeld 26</span></li>
                <li><span className="block text-slate-400">&nbsp;</span><span className="text-slate-200">81375 München</span></li>
                <li><span className="block text-slate-400">Telefon</span><a href="tel:+491639603781" className="text-emerald-400 hover:underline">+49 163 9603781</a></li>
                <li><span className="block text-slate-400">E-Mail</span><a href="mailto:Info@bayern-ruempelprofis.de" className="text-emerald-400 hover:underline">Info@bayern-ruempelprofis.de</a></li>
              </ul>
              <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white mb-3">Standort</h3>
              <p className="text-slate-300 mb-6">Wir sind in München und Umgebung für Sie vor Ort im Einsatz.</p>
              <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white mb-3">Kundensupport</h3>
              <p className="text-slate-300 mb-6">Unser Team unterstützt Sie kompetent bei allen Fragen rund um Ihr Projekt.</p>
              <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Mehr erfahren</button>
            </div>
          </div>
        </section>

        <section id="social" className="py-12 px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM17.75 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>

              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.02 5.85 21.16 10.58 21.93v-7.2H8.08v-3.67h2.5V9.1c0-2.47 1.46-3.82 3.7-3.82 1.07 0 2.18.19 2.18.19v2.4h-1.23c-1.21 0-1.59.75-1.59 1.52v1.8h2.71l-.43 3.67h-2.28v7.2c4.73-.77 8.72-4.91 8.72-9.86z" />
                </svg>
              </a>

              <a href="https://www.tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path d="M12.75 2v6.22a4.5 4.5 0 1 0 4.5 4.5V8.5a6 6 0 1 1-6-6h. -0z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800 bg-slate-950/70 py-8">
          <div className="mx-auto max-w-6xl px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-slate-400">
            <p className="text-sm">© 2026 Makler Bonus / EntrümpelMeister. Alle Rechte vorbehalten.</p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link href="/impressum" className="text-emerald-400 hover:text-emerald-300">Impressum</Link>
              <Link href="/agb" className="text-slate-200 hover:text-emerald-300">AGB</Link>
              <Link href="/faq" className="text-slate-200 hover:text-emerald-300">FAQ</Link>
              <Link href="/hizmet-bolgelerimiz" className="text-slate-200 hover:text-emerald-300">Hizmet Bölgelerimiz</Link>
            </div>
          </div>
        </footer>
      </main>

      <a href="https://wa.me/491639603781" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Nachricht an +49 163 9603781" className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-4 py-3 font-semibold shadow-2xl animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.37 0 .01 5.37.01 12c0 2.12.55 4.17 1.6 5.98L0 24l6.2-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-1.94-.48-3.77-1.48-5.52zM12 21.5c-1.85 0-3.61-.5-5.14-1.44l-.37-.23-3.67.97.98-3.57-.24-.37A9.5 9.5 0 0 1 2.5 12 9.5 9.5 0 0 1 12 2.5 9.5 9.5 0 0 1 21.5 12 9.5 9.5 0 0 1 12 21.5z" />
          <path d="M17.1 14.2c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.9 1-.9 1s-.1.2-.5.1c-.4-.1-1.5-.6-2.8-1.8-1-.9-1.7-2-1.9-2.3-.2-.3 0-.4.1-.5.1-.1.3-.2.5-.4.2-.2.3-.3.5-.5.2-.1.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.7 0-.3 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.1 3.2 1.3 3.4.2.2 2.3 3.5 5.6 4.8 3.3 1.3 3.3.9 3.9.8.6-.1 1.8-.7 2-1.5.2-.8.2-1.5.1-1.6-.1-.1-.3-.2-.6-.3z" />
        </svg>
        <span className="hidden sm:inline text-white">Mit WhatsApp kontaktieren</span>
      </a>
    </div>
  );
}
