import Link from "next/link";
import { Post } from "../../../types/post";


export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const allPosts: Post[] = await response.json();

    const postsFiltrados = allPosts.filter((post) => {
        if (slug === "tecnologia") return post.id <= 33;
        if (slug === "natureza") return post.id > 33 && post.id <= 66;
        if (slug === "saude") return post.id > 66;
        return true;
    });



    return (
        <main className="p-8 bg-black min-h-screen text-white">
            <Link
                href="/"
                className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-6 group"
            >
                <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
                Voltar para Home
            </Link>

            <h1 className="text-4xl font-bold uppercase mb-8 border-b border-zinc-800 pb-2">
                Categoria: {slug}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {postsFiltrados.map((post) => (
                    <div key={post.id} className="border border-zinc-800 p-4 rounded-lg">
                        <h2 className="font-bold text-lg mb-2">{post.title}</h2>
                        <p className="text-zinc-400 text-sm line-clamp-2">{post.body}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
