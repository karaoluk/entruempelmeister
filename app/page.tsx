import ContactForm from "./components/ContactForm";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

const services = [
  {
    emoji: "🏠",
    title: "Entrümpelung & Haushaltsauflösung",
    description:
      "Ob Wohnung, Haus, Keller, Dachboden oder Gewerbeobjekt – wir übernehmen Entrümpelungen jeder Größe inklusive fachgerechter Entsorgung.",
    items: ["Wohnungen & Häuser", "Keller & Dachböden", "Gewerbeobjekte", "Fachgerechte Entsorgung"],
  },
  {
    emoji: "🧹",
    title: "Messie-Wohnungen",
    description:
      "Wir räumen stark verschmutzte oder vermüllte Wohnungen diskret, professionell und mit größter Sorgfalt. Anschließend reinigen wir die Räume gründlich.",
    items: ["Diskreter Ablauf", "Professionelle Reinigung", "Vorbereitung für Nachnutzung", "Einfühlsames Team"],
  },
  {
    emoji: "🌿",
    title: "Gartenpflege & Gartenräumung",
    description:
      "Von der Gartenpflege über Heckenschnitt bis zur kompletten Gartenräumung – wir bringen Ihren Außenbereich wieder in Bestform.",
    items: ["Heckenschnitt", "Rasenpflege", "Komplette Gartenräumung", "Abtransport inklusive"],
  },
  {
    emoji: "🌳",
    title: "Baumfällung & Baumschnitt",
    description:
      "Sichere Baumfällungen, professioneller Rückschnitt und fachgerechte Entsorgung von Grünschnitt – auch bei schwierigen Platzverhältnissen.",
    items: ["Sichere Baumfällung", "Professioneller Rückschnitt", "Grünschnitt-Entsorgung", "Enge Platzverhältnisse kein Problem"],
  },
  {
    emoji: "🔨",
    title: "Renovierungsarbeiten",
    description:
      "Nach einer Entrümpelung übernehmen wir auf Wunsch Renovierungsarbeiten wie Malerarbeiten, Tapeten entfernen, Laminat verlegen und kleinere Sanierungen.",
    items: ["Malerarbeiten", "Tapeten entfernen", "Laminat verlegen", "Kleinere Sanierungen"],
  },
  {
    emoji: "✨",
    title: "Reinigung",
    description:
      "Wir bieten Endreinigung, Grundreinigung, Bauendreinigung sowie professionelle Wohnungs- und Gebäudereinigung für Privat- und Gewerbekunden.",
    items: ["Endreinigung", "Grundreinigung", "Bauendreinigung", "Gebäudereinigung"],
  },
  {
    emoji: "🔧",
    title: "Hausmeisterservice",
    description:
      "Regelmäßige Objektbetreuung, Kleinreparaturen, Außenanlagenpflege und viele weitere Dienstleistungen für Eigentümer und Hausverwaltungen.",
    items: ["Objektbetreuung", "Kleinreparaturen", "Außenanlagenpflege", "Für Hausverwaltungen"],
  },
];

const reasons = [
  "Kostenlose Besichtigung und Beratung",
  "Transparente Festpreise ohne versteckte Kosten",
  "Kurzfristige Termine möglich",
  "Fachgerechte Entsorgung",
  "Zuverlässiges und erfahrenes Team",
  "Modernste Arbeitsweise",
  "Einsatz in München und Umgebung",
];

const uberUnsFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-emerald-400">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
    title: "Höchste Professionalität",
    text: "Unser erfahrenes Team arbeitet nach strengen Qualitätsstandards. Jeder Auftrag wird mit größter Sorgfalt und fachkundiger Expertise ausgeführt.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-emerald-400">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
      </svg>
    ),
    title: "Schnell & Termingerecht",
    text: "Wir wissen, dass Ihre Zeit wertvoll ist. Deshalb arbeiten wir effizient, pünktlich und flexibel – auch kurzfristige Termine sind bei uns möglich.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-emerald-400">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ),
    title: "Kundenzufriedenheit",
    text: "Ihre Zufriedenheit ist unser oberstes Ziel. Wir hören zu, beraten ehrlich und liefern Ergebnisse, die Ihre Erwartungen übertreffen.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-emerald-400">
        <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
      </svg>
    ),
    title: "Garantiert Besenrein",
    text: "Wir hinterlassen keine Spuren – im Gegenteil. Nach unserem Einsatz übergeben wir jeden Raum sauber, geräumt und besenrein.",
  },
];

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-400">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
    ),
    label: "Telefon",
    value: "+49 163 960 3781",
    href: "tel:+491639603781",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-400">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
    label: "E-Mail",
    value: "info@entruempelmeister.de",
    href: "mailto:info@entruempelmeister.de",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-400">
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    ),
    label: "Einsatzgebiet",
    value: "München und Umgebung",
    href: null,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-400">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
      </svg>
    ),
    label: "Erreichbarkeit",
    value: "Mo–Sa, 07:00–19:00 Uhr",
    href: null,
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Dekoratif arka plan */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-teal-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.187rem]" />
      </div>

      {/* ── Hero ── */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent sm:text-6xl">
            Willkommen bei{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Entrümpelmeister
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Ihr zuverlässiger Partner in München und Umgebung. Wir bieten maßgeschneiderte Lösungen
            für Privatpersonen, Unternehmen, Hausverwaltungen und Immobilienbesitzer. Unser
            erfahrenes Team arbeitet schnell, sauber und termingerecht.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#kontakt"
              className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition-all hover:bg-emerald-500 active:scale-95"
            >
              Jetzt Angebot anfordern
            </a>
            <a
              href="#dienstleistungen"
              className="text-sm font-semibold leading-6 text-zinc-300 transition-colors hover:text-white"
            >
              Unsere Leistungen <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Dienstleistungen ── */}
      <section id="dienstleistungen" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Was wir anbieten</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Unsere{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Dienstleistungen
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Professionelle Dienstleistungen rund um Entrümpelung, Reinigung, Gartenpflege und Renovierung
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-7 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-900/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl ring-1 ring-emerald-500/20 transition-colors duration-300 group-hover:bg-emerald-500/20 select-none">
                {service.emoji}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold leading-snug text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{service.description}</p>
              </div>
              <ul className="space-y-2 border-t border-zinc-800 pt-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-400">
                    <CheckIcon className="h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── Über uns ── */}
      <section id="ueber-uns" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 overflow-hidden backdrop-blur-sm">
          {/* Üst bant */}
          <div className="relative bg-gradient-to-r from-emerald-600/20 to-teal-600/10 border-b border-zinc-800 px-8 py-10 sm:px-14 sm:py-12">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Wer wir sind</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Über{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Entrümpelmeister
              </span>
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300">
              Entrümpelmeister steht für handwerkliche Exzellenz und echte Verlässlichkeit. Mit
              jahrelanger Erfahrung in der Entrümpelung, Reinigung und Gartenpflege kennen wir
              jeden Auftrag in- und auswendig – von der kleinen Kellerleerung bis zur kompletten
              Haushaltsauflösung. Wir arbeiten diskret, sauber und immer mit vollem Einsatz.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-400">
              Als lokales Unternehmen aus München wissen wir, worauf es ankommt: kurze Reaktionszeiten,
              ehrliche Preise und ein Team, dem Sie vertrauen können. Egal ob Privatkunde,
              Hausverwaltung oder Unternehmen – wir behandeln jeden Auftrag mit der gleichen
              Sorgfalt und Hingabe.
            </p>
          </div>

          {/* Özellik kartları */}
          <div className="grid grid-cols-1 gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
            {uberUnsFeatures.map((f) => (
              <div key={f.title} className="flex flex-col gap-3 bg-zinc-900/70 p-8 hover:bg-zinc-900 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20">
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-6 text-zinc-400">{f.text}</p>
              </div>
            ))}
          </div>

          {/* İstatistik şeridi */}
          <div className="grid grid-cols-2 gap-px bg-zinc-800 border-t border-zinc-800 lg:grid-cols-4">
            {[
              { value: "10+", label: "Jahre Erfahrung" },
              { value: "1.200+", label: "Zufriedene Kunden" },
              { value: "48h", label: "Reaktionszeit" },
              { value: "100%", label: "Besenrein übergeben" },
            ].map((stat) => (
              <div key={stat.label} className="bg-zinc-900/70 px-8 py-7 text-center hover:bg-zinc-900 transition-colors">
                <p className="text-2xl font-extrabold text-emerald-400">{stat.value}</p>
                <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warum Entrümpelmeister? ── */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 px-8 py-14 backdrop-blur-sm sm:px-14">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Ihre Vorteile</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Warum{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Entrümpelmeister?
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/60 px-5 py-4 transition-all hover:border-emerald-500/40 hover:bg-zinc-800"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/40">
                  <CheckIcon className="h-3 w-3 text-emerald-400" />
                </span>
                <span className="text-sm font-medium text-zinc-300">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kontakt ── */}
      <section id="kontakt" className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Sprechen Sie uns an</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Kontakt &amp;{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Anfrage
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Fordern Sie jetzt Ihr unverbindliches Angebot an – wir freuen uns auf Ihre Anfrage!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Sol – İletişim bilgileri */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* İletişim kartları */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/70 px-6 py-5 backdrop-blur-sm transition-colors hover:border-emerald-500/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-0.5 block text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Kısa tanıtım kutusu */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-6">
              <p className="text-sm font-semibold text-emerald-300 mb-2">Kostenlose Besichtigung</p>
              <p className="text-sm leading-6 text-zinc-400">
                Wir kommen zu Ihnen, besichtigen das Objekt und erstellen Ihnen ein
                transparentes Festpreisangebot – ohne versteckte Kosten, ohne Verpflichtung.
              </p>
            </div>
          </div>

          {/* Sağ – Form */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Anfrageformular</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
