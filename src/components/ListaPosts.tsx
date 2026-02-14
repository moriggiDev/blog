"use client"; 

import { useState } from "react";
import { Post } from "@/types/post";
import { CardPost } from "./CardPost";

export function ListaPosts({ posts }: { posts: Post[] }) {
  const [visiveis, setVisiveis] = useState(9); // Começa com 9 posts

  const carregarMais = () => {
    setVisiveis((prev) => prev + 9); // Adiciona mais 9 a cada clique
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {posts.slice(0, visiveis).map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>

      {visiveis < posts.length && (
        <button
          onClick={carregarMais}
          className="mt-12 px-8 py-3 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-colors"
        >
          Carregar mais notícias
        </button>
      )}
    </div>
  );
}