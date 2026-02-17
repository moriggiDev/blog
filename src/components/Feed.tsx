"use client";

import { useState } from "react";
import { Post } from "@/types/post";

export default function Feed({ posts }: { posts: Post[] }) {
    const [activeTab, setActiveTab] = useState("today");

    const postsExibidos = activeTab === "today"
        ? posts.slice(0, 6) // Posts de 1 a 6
        : posts.filter(post => post.id % 2 === 0).slice(0, 6);

    return (


        <section className="flex flex-col md:flex-row gap-12 px-8 py-16 bg-gradient-to-r from-black to-purple-600 text-white" >

            {/* COLUNA ESQUERDA: O FEED */}
            < div className="flex-1" >
                {/* Nav Interna (Abas) */}
                <div className="flex gap-6 mb-10 border-b border-zinc-800 pb-4" >
                    <button
                        onClick={() => setActiveTab("today")}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition ${activeTab === "today"
                            ? "bg-emerald-400 text-black"
                            : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                            }`}
                    >
                        Today&apos;s Stream
                    </button>
                    <button
                        onClick={() => setActiveTab("following")}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition ${activeTab === "following"
                            ? "bg-emerald-400 text-black"
                            : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                            }`}
                    >
                        Following
                    </button>
                </div>

                {/* Lista de Posts (Exibindo 6 posts) */}
                <div  className="space-y-8" >
                    {
                        postsExibidos.map((post) => (
                            <article key={post.id} className="group cursor-pointer">
                                <span className="text-xs text-emerald-400 font-mono mb-2 block">01.01.2026</span>
                                <h3 className="text-2xl font-bold group-hover:underline leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-zinc-400 mt-2 line-clamp-2 text-sm">
                                    {post.body}
                                </p>
                            </article>
                        ))
                    }
                </div >
            </div >

            {/* COLUNA DIREITA: SIDEBAR (DESCRIÇÃO) */}
            < aside className="w-full md:w-1/3 space-y-8" >
                <div className="sticky top-20">
                    <h2 className="text-4xl font-black uppercase vertical-text mb-6 opacity-20 hidden md:block">
                        Most Popular
                    </h2>
                    <div className="bg-zinc-900/50 p-8 border border-zinc-800 rounded-2xl">
                        <h4 className="font-bold text-xl mb-4">Funcionamento do Blog</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Este sistema utiliza renderização no lado do servidor (SSR) para garantir velocidade.
                            As abas ao lado permitem filtrar o fluxo de dados em tempo real.
                        </p>
                    </div>
                </div>
            </aside >

        </section >
    )
}