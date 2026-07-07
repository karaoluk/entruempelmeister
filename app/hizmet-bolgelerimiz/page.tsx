import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Entrümpelung & Hausauflösung in München und Umgebung | Unsere Einsatzgebiete',
  description:
    'Wir sind in 81375 München ansässig und bieten professionelle Entrümpelung und Hausauflösung im Umkreis von 75 km an. Hier finden Sie eine Übersicht unserer Einsatzgebiete.',
}

const areas: { [group: string]: string[] } = {
  'A–E': [
    'Aying',
    'Aubing',
    'Bad Aibling',
    'Baierbrunn',
    'Berg am Laim',
    'Brunnthal',
    'Dachau',
    'Dorfen',
    'Dorfen-Ost',
    'Ebersberg',
    'Eching',
    'Erding',
  ],
  'F–K': [
    'Feldkirchen',
    'Freising',
    'Fürstenfeldbruck',
    'Gauting',
    'Germering',
    'Gräfelfing',
    'Gauting',
    'Haar',
    'Holzkirchen',
    'Ismaning',
    'Kirchheim bei München',
    'Krailling',
  ],
  'L–Q': [
    'Laim',
    'Landshut',
    'Landsberg am Lech',
    'Miesbach',
    'München (Stadtteile)',
    'Moosach',
    'Neubiberg',
    'Neufahrn bei Freising',
    'Oberschleißheim',
    'Oberhaching',
    'Pasing',
    'Planegg',
  ],
  'R–Z': [
    'Rosenheim',
    'Schäftlarn',
    'Schongau',
    'Seefeld',
    'Starnberg',
    'Straßlach-Dingharting',
    'Tutzing',
    'Unterschleißheim',
    'Unterhaching',
    'Vaterstetten',
    'Wessling',
    'Wolfratshausen',
  ],
}

export default function EinsatzgebietePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
      <main className="mx-auto max-w-5xl px-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Unsere Einsatzgebiete im Raum München</h1>
          <p className="mt-2 text-slate-300 max-w-3xl mx-auto">
            Unser Unternehmen ist in 81375 München ansässig. Wir bieten professionelle Entrümpelung und Hausauflösung
            in einem Umkreis von bis zu 75 km an — schnell, zuverlässig und diskret. Nachfolgend finden Sie eine
            alphabetisch geordnete Übersicht unserer Einsatzorte. Für spezielle Anfragen kontaktieren Sie uns bitte direkt.
          </p>
        </header>

        <section aria-label="Einsatzgebiete">
          {Object.entries(areas).map(([group, list]) => (
            <details key={group} className="mb-4 rounded-lg bg-slate-900/60 border border-slate-800 p-4">
              <summary className="cursor-pointer font-semibold text-emerald-400">{group}</summary>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
                {list.map((place) => (
                  <li key={place} className="py-1">Entrümpelung & Hausauflösung in {place}</li>
                ))}
              </ul>
            </details>
          ))}
        </section>

        <section className="mt-8 text-center">
          <p className="text-slate-300">Sie benötigen eine individuelle Offerte oder ein kurzfristiges Angebot? Kontaktieren Sie uns.</p>
          <div className="mt-4">
            <Link href="/kontakt" className="inline-block rounded-full bg-emerald-500 px-5 py-2 text-slate-950 font-semibold">Kontaktieren Sie uns</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
