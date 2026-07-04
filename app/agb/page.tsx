import React from 'react';
import Header from '../components/Header';

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-20">
        <section id="agb" className="py-6">
          <h1 className="text-center text-3xl font-bold mb-8 text-emerald-400">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <div className="prose prose-invert text-slate-300 max-w-3xl mx-auto">
            <h3>1. Geltungsbereich</h3>
            <p>Diese AGB gelten für sämtliche Verträge zwischen dem Auftraggeber und EntrümpelMeister über Entrümpelungs-, Entsorgungs- und Reinigungsleistungen.</p>

            <h3>2. Leistungsumfang</h3>
            <p>Der Umfang der zu erbringenden Leistungen ergibt sich aus dem Angebot und der Leistungsbeschreibung. Zusätzliche Leistungen werden gesondert vergütet.</p>

            <h3>3. Vertragsschluss</h3>
            <p>Ein Vertrag kommt durch Annahme des Angebots durch den Auftraggeber zustande. Angebote sind freibleibend bis zur ausdrücklichen Bestätigung.</p>

            <h3>4. Preise und Zahlung</h3>
            <p>Es gelten die vereinbarten Festpreise. Zahlungen sind gemäß Rechnung fällig. Bei Nichteinhaltung behalten wir uns Verzugszinsen vor.</p>

            <h3>5. Haftung</h3>
            <p>Unsere Haftung für Schäden richtet sich nach den gesetzlichen Bestimmungen; für leichte Fahrlässigkeit ist die Haftung ausgeschlossen, soweit nicht eine Vertragspflicht verletzt wurde, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht.</p>

            <h3>6. Widerruf</h3>
            <p>Sofern der Auftrag als Fernabsatzvertrag zustande kommt, gelten die gesetzlichen Widerrufsrechte. Serviceleistungen nach Auftragserteilung können kostenpflichtig sein.</p>

            <h3>7. Datenschutz</h3>
            <p>Wir erheben und verarbeiten personenbezogene Daten ausschließlich gemäß unserer Datenschutzerklärung und den gesetzlichen Vorgaben.</p>

            <h3>8. Schlussbestimmungen</h3>
            <p>Es gilt deutsches Recht. Gerichtsstand ist, soweit zulässig, der Sitz unseres Unternehmens.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
