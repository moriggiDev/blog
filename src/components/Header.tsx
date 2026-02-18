"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-6 relative z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Lado Esquerdo: Logo e Título */}
        <div className="z-50">
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
            NXS Hub
          </h1>
          <p className="hidden md:block text-[10px] text-zinc-500 font-medium">
            Blog de interação com o recrutador
          </p>
        </div>

        {/* Botão Hambúrguer (Apenas Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/categoria/natureza" className="hover:text-emerald-400 transition">Natureza</Link>
          <Link href="/categoria/tecnologia" className="hover:text-emerald-400 transition">Tecnologia</Link>
          <Link href="/categoria/saude" className="hover:text-emerald-400 transition">Saúde</Link>
          
          {/* Logo Redonda (Versão Desktop) */}
          <div className="w-12 h-12 rounded-full border-2 border-zinc-800 relative overflow-hidden ml-4">
            <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
          </div>
        </nav>
      </div>

      {/* Menu Mobile (Overlay) */}
      <div className={`
        fixed inset-0 bg-black/95 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-10 text-3xl font-bold uppercase
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"} 
        md:hidden z-40
      `}>
        <Link href="/categoria/natureza" onClick={() => setIsOpen(false)}>Natureza</Link>
        <Link href="/categoria/tecnologia" onClick={() => setIsOpen(false)}>Tecnologia</Link>
        <Link href="/categoria/saude" onClick={() => setIsOpen(false)}>Saúde</Link>
      </div>
    </header>
  );
}