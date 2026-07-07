import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Entrümpelung & Hausauflösung in München und Umgebung',
  description:
    'Münih ve çevresindeki hizmet bölgelerimiz: Entrümpelung & Hausauflösung hizmetlerimiz için kapsamlı bölge listesi ve hızlı iletişim.',
}

const areas: { [group: string]: string[] } = {
  'A-E': [
    'Aidenbach',
    'Altomünster',
    'Aying',
    'Baar-Ebenhausen',
    'Bad Aibling',
    'Bad Tölz',
    'Baierbrunn',
    'Bernried',
    'Berg-am-Laim',
    'Brunnthal',
    'Dachau',
    'Dorfen',
    'Ebersberg',
    'Ebershausen',
    'Erding',
  ],
  'F-K': [
    'Freising',
    'Fürstenfeldbruck',
    'Gauting',
    'Germering',
    'Gilching',
    'Gräfelfing',
    'Gmund am Tegernsee',
    'Haar',
    'Hachinger Tal',
    'Holzkirchen',
    'Ismaning',
    'Kirchheim bei München',
    'Krailling',
    'Königsdorf',
  ],
  'L-Q': [
    'Landshut',
    'Landsberg am Lech',
    'Miesbach',
    'München (All districts)',
    'Neubiberg',
    'Neufahrn bei Freising',
    'Oberschleißheim',
    'Oberhaching',
    'Pasing',
    'Peissenberg',
    'Planegg',
    'Puchheim',
    'Pullach',
    'Poing',
  ],
  'R-Z': [
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
    'Weilheim in Oberbayern',
    'Wessling',
    'Wolfratshausen',
  ],
}

export default function HizmetBolgelerimizPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
      <main className="mx-auto max-w-5xl px-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Münih ve Çevresindeki Hizmet Bölgelerimiz</h1>
          <p className="mt-2 text-slate-300">Entrümpelung & Hausauflösung hizmetlerimiz aşağıdaki şehir ve ilçelerde sunulmaktadır. İhtiyacınız olan bölgeyi açarak detaylara ulaşabilirsiniz.</p>
        </header>

        <section aria-label="Hizmet Bölgeleri">
          {Object.entries(areas).map(([group, list]) => (
            <details key={group} className="mb-4 rounded-lg bg-slate-900/60 border border-slate-800 p-4">
              <summary className="cursor-pointer font-semibold text-emerald-400">{group}</summary>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
                {list.map((item) => (
                  <li key={item} className="py-1">Entrümpelung & Hausauflösung {item}</li>
                ))}
              </ul>
            </details>
          ))}
        </section>

        <section className="mt-8 text-center">
          <p className="text-slate-300">Listeyi genişletmek veya özel bir ilçe eklemek isterseniz bizimle iletişime geçin.</p>
          <div className="mt-4">
            <Link href="/kontakt" className="inline-block rounded-full bg-emerald-500 px-5 py-2 text-slate-950 font-semibold">İletişime Geçin</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
