"use client";

import { useState } from "react";

const services = [
  "Haushaltsauflösung",
  "Entrümpelung",
  "Messie-Wohnungen",
  "Gartenpflege & Gartenräumung",
  "Baumfällung & Baumschnitt",
  "Renovierungsarbeiten",
  "Reinigung",
  "Hausmeisterservice",
  "Sonstiges",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Gerçek gönderim burada yapılır (e-posta servisi / API route)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/40">
          <svg className="h-7 w-7 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
        </span>
        <h3 className="text-lg font-semibold text-white">Vielen Dank für Ihre Anfrage!</h3>
        <p className="text-sm text-zinc-400">
          Wir melden uns so schnell wie möglich bei Ihnen – in der Regel innerhalb von 24 Stunden.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Neue Anfrage stellen →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + E-Mail */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            Vor- und Nachname <span className="text-emerald-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Max Mustermann"
            className="rounded-xl border border-zinc-700 bg-zinc-800/70 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            E-Mail-Adresse <span className="text-emerald-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="max@beispiel.de"
            className="rounded-xl border border-zinc-700 bg-zinc-800/70 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
      </div>

      {/* Telefon + Dienstleistung */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            Telefonnummer
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+49 89 ..."
            className="rounded-xl border border-zinc-700 bg-zinc-800/70 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            Gewünschte Dienstleistung <span className="text-emerald-400">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="rounded-xl border border-zinc-700 bg-zinc-800/70 px-4 py-3 text-sm text-white outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 appearance-none cursor-pointer"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1.25rem" }}
          >
            <option value="" disabled className="text-zinc-500">
              Bitte wählen …
            </option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-zinc-800">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Nachricht */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-zinc-400">
          Ihre Nachricht <span className="text-emerald-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Beschreiben Sie kurz Ihr Anliegen – z. B. Größe der Wohnung, Art der Gegenstände, gewünschter Termin …"
          className="resize-none rounded-xl border border-zinc-700 bg-zinc-800/70 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>

      {/* Datenschutz + Submit */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500">
          Mit dem Absenden stimmen Sie unserer{" "}
          <a href="#" className="text-emerald-400 hover:underline">
            Datenschutzerklärung
          </a>{" "}
          zu.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition-all hover:bg-emerald-500 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Wird gesendet …
            </>
          ) : (
            <>
              Anfrage absenden
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
