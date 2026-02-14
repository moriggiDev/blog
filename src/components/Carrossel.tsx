"use client";

import Link from "next/link";
import { useState } from "react";
import { Post } from "@/types/post";

interface CarrosselProps {
    posts: Post[];
}

export default function Carrossel({ posts }: CarrosselProps) {
    const [indiceAtivo, setIndiceAtivo] = useState(0);
    const postAtual = posts[indiceAtivo];

    const proximo = () => setIndiceAtivo((prev) => (prev + 1) % posts.length);
    const anterior = () => setIndiceAtivo((prev) => (prev - 1 + posts.length) % posts.length);

    if (!posts.length) return null;

    return (
        <div className="relative w-full md:h-[350px] h-[200px] rounded-3xl overflow-hidden group transition-all duration-500">
            {/* Imagem de Fundo com responsividade */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url(https://picsum.photos/id/${postAtual.id + 10}/1200/800)` }}
            />

            {/* Overlay Escuro para leitura */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Conteúdo, Aplicado responsividade no h3 */}
            <div className="relative h-full flex flex-col justify-end p-8 md:p-16">
                <span className="text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-4">
                    Destaque {indiceAtivo + 1} / {posts.length}
                </span>

                <h3 className="text-white text-3xl md:text-4xl text-6xl font-black leading-none mb-6 max-w-4xl drop-shadow-2xl">
                    {postAtual.title}
                </h3>

                <div className="flex flex-wrap items-center gap-6">
                    <Link
                        href={`/posts/${postAtual.id}`}
                        className="bg-white text-black px-5 py-3 md:px-8 md:py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all w-full md:w-auto text-center"
                    >
                        Ler Conteúdo
                    </Link>

                    <div className="flex gap-2">
                        <button onClick={anterior} className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition">
                            ←
                        </button>
                        <button onClick={proximo} className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition">
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}