import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image"; // Importe o componente de imagem


export const metadata: Metadata = {
  title: "Made in China",
  description: "Blog de interação com o recrutador",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-50 text-gray-900 antialiased">

        <header className="bg-black py-8 shadow-xl relative flex justify-between items-center">
          <div className="w-full px-4 md:px-12 lg:px-20 flex items-center justify-between">
            {/* Lado Esquerdo: Textos */}

            <div className="text-left">
              <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
                NXS Hub
              </h1>
              <p className="text-xs text-zinc-400 font-medium mt-1">
                Blog de interação com o recrutador
              </p>
            </div>

            <nav className="flex gap-6">
              <ul className="flex gap-6 md:gap-20"> 
                <li>
                  <Link href="/categoria/natureza" className="text-sm md:text-lg text-white transition-colors">
                    Natureza
                  </Link>
                </li>
                <li>
                  <Link href="/categoria/tecnologia" className="text-sm md:text-lg text-white transition-colors">
                    Tecnologia
                  </Link>
                </li>
                <li>
                  <Link href="/categoria/saude" className="text-sm md:text-lg text-white transition-colors">
                    Saúde
                  </Link>
                </li>
              </ul>

            </nav>

            {/* Lado Direito: Logo Redonda Sobreposta */}
            <div className="relative">
              <div className="absolute -top-4 right-0 w-24 h-24 rounded-full border-4 border-zinc-800 bg-black overflow-hidden shadow-2xl">
                <Image
                  src="/logo.jpeg" // Caminho da imagem na pasta public
                  alt="Logo NXS Hub"
                  fill
                  className="object-contain p-4"
                />
              </div>
              {/* Texto lateral à logo */}
              <div className="mr-28 text-right hidden sm:block">
                <span className="text-[10px] text-zinc-500 block">Tecnologia e Inovação</span>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
