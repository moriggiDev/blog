import Link from "next/link";
import { Post } from "@/types/post";

export function CardPost({ post }: { post: Post }) {
  return (
    <div className="group border-t border-zinc-200 pt-6">
      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
        Post #{post.id}
      </span>
      
      <h3 className="text-xl font-black uppercase leading-tight mt-2 group-hover:text-blue-600 transition-colors">
        {post.title.substring(0, 50)}...
      </h3>
      
      <p className="text-zinc-500 text-sm mt-3 line-clamp-2">
        {post.body}
      </p>

      <Link 
        href={`/posts/${post.id}`}
        className="inline-block mt-4 text-xs font-black uppercase border-b-2 border-black pb-1 hover:border-blue-600 transition-all"
      >
        Ver mais
      </Link>
    </div>
  );
}