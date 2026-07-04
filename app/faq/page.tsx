import React from 'react';
import Header from '../components/Header';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-20">
        <section id="faq" className="py-6">
          <h1 className="text-center text-3xl font-bold mb-8 text-emerald-400">Entrümpelung München – Häufig gestellte Fragen</h1>
          <div className="space-y-8 max-w-4xl mx-auto text-slate-300">
            <div>
              <h3 className="text-xl font-semibold text-white">1. Bieten Sie eine kostenlose Entrümpelungs-Besichtigung in München an?</h3>
              <p className="mt-2">Ja. Entrümpelmeister kommt für eine kostenfreie Vor-Ort-Besichtigung in München und nahegelegene Bayern-Regionen vorbei, um ein genaues Festpreisangebot zu erstellen.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">2. Wohin werden die entrümpelten Gegenstände und Abfälle transportiert?</h3>
              <p className="mt-2">Wir bringen alles zu zugelassenen Recyclinghöfen und Entsorgungsanlagen in München und Bayern. Wertstoffe werden getrennt, Elektrogeräte korrekt entsorgt und alles umweltgerecht behandelt.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">3. Wie lange dauert eine typische Entrümpelung in München?</h3>
              <p className="mt-2">Für eine kleine Wohnung dauert eine Entrümpelung meist einen Tag. Größere Wohnungsauflösungen oder Hausauflösungen in München können 1–2 Tage beanspruchen, abhängig von Umfang und Menge.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">4. Kann ich Wohnungsauflösung, Hausauflösung und Entrümpelung gemeinsam buchen?</h3>
              <p className="mt-2">Ja. Wir koordinieren Entrümpelung, Wohnungsauflösung und Hausauflösung in einem Ablauf, damit Sie einen nahtlosen und stressfreien Ablauf erhalten.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">5. Welche Stadtteile in München decken Sie für Entrümpelung ab?</h3>
              <p className="mt-2">Wir arbeiten in ganz München, inklusive Sendling, Schwabing, Bogenhausen, Nymphenburg, Laim und Umgebung. Für Entrümpelung München sind wir Ihr lokaler Ansprechpartner mit schneller Verfügbarkeit.</p>
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'Bieten Sie eine kostenlose Entrümpelungs-Besichtigung in München an?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Ja. Entrümpelmeister kommt für eine kostenfreie Vor-Ort-Besichtigung in München ve nahegelegene Bayern-Regionen vorbei, um ein genaues Festpreisangebot zu erstellen.'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': 'Wohin werden die entrümpelten Gegenstände und Abfälle transportiert?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Wir bringen alles zu zugelassenen Recyclinghöfen und Entsorgungsanlagen in München und Bayern. Wertstoffe werden getrennt, Elektrogeräte korrekt entsorgt und alles umweltgerecht behandelt.'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': 'Wie lange dauert eine typische Entrümpelung in München?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Für eine kleine Wohnung dauert eine Entrümpelung meist einen Tag. Größere Wohnungsauflösungen oder Hausauflösungen in München können 1–2 Tage beanspruchen, abhängig von Umfang und Menge.'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': 'Kann ich Wohnungsauflösung, Hausauflösung und Entrümpelung gemeinsam buchen?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Ja. Wir koordinieren Entrümpelung, Wohnungsauflösung und Hausauflösung in einem Ablauf, damit Sie einen nahtlosen und stressfreien Ablauf erhalten.'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': 'Welche Stadtteile in München decken Sie für Entrümpelung ab?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Wir arbeiten in ganz München, inklusive Sendling, Schwabing, Bogenhausen, Nymphenburg, Laim ve Umgebung. Für Entrümpelung München sind wir Ihr lokaler Ansprechpartner mit schneller Verfügbarkeit.'
                    }
                  }
                ]
              })
            }}
          />
        </section>
      </main>
    </div>
  );
}
