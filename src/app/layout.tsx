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
        <header className="bg-black py-8 shadow-xl relative">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
            {/* Lado Esquerdo: Textos */}
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
                NXS Hub
              </h1>
              <p className="text-xs text-zinc-400 font-medium mt-1">
                Blog de interação com o recrutador
              </p>
            </div>

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
                 <span className="text-[10px] text-zinc-500 block">Made in China</span>
                 <span className="text-[8px] text-zinc-600 block leading-none tracking-widest uppercase">Uperoen srms-zincs-70</span>
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
