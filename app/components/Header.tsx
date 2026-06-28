'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-xl font-black tracking-tight text-zinc-950">
                E
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wide leading-none">EntrümpelMeister</span>
                <span className="text-xs text-zinc-400 mt-1">München &amp; Umgebung</span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#dienstleistungen" className="text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors">Dienstleistungen</Link>
            <Link href="#ueber-uns" className="text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors">Über Uns</Link>
            <Link href="#preise" className="text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors">Preise</Link>
            <Link href="#kontakt" className="text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors">Kontakt</Link>
          </nav>

          {/* WHATSAPP BUTTON */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-all active:scale-95"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.849.002-2.634-1.023-5.11-2.885-6.973C16.579 1.92 14.106.896 11.477.896c-5.436 0-9.86 4.414-9.863 9.85-.001 1.914.504 3.788 1.464 5.418L2.08 21.92l5.567-1.46z" />
              </svg>
              WhatsApp Info
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE PANEL */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 py-4 space-y-1">
          <Link href="#dienstleistungen" onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition-colors">Dienstleistungen</Link>
          <Link href="#ueber-uns" onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition-colors">Über Uns</Link>
          <Link href="#preise" onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition-colors">Preise</Link>
          <Link href="#kontakt" onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition-colors">Kontakt</Link>

          <div className="pt-4 border-t border-zinc-900 px-4">
            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-500"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.849.002-2.634-1.023-5.11-2.885-6.973C16.579 1.92 14.106.896 11.477.896c-5.436 0-9.86 4.414-9.863 9.85-.001 1.914.504 3.788 1.464 5.418L2.08 21.92l5.567-1.46z" />
              </svg>
              WhatsApp Info
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
