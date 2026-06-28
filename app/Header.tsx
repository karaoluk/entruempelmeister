'use client'; import React, { useState } from 'react'; export default function Header() { const [isOpen, setIsOpen] = useState(false); return (
{/* LOGO ALANI */}
E
EntrümpelMeister München & Umgebung
{/* MASAÜSTÜ NAVİGASYON */} Dienstleistungen Über Uns Preise Kontakt {/* WHATSAPP İLETİŞİM BUTONU */}
WhatsApp Info
{/* MOBİL MENÜ BUTONU */}
setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-xl p-2 text-zinc-400 hover:bg-white/5 hover:text-white" > {isOpen ? ( ) : ( )}
{/* MOBİL PANEL */} {isOpen && (
setIsOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white">Dienstleistungen setIsOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white">Über Uns setIsOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white">Preise setIsOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white">Kontakt
WhatsApp Info
)} ); }