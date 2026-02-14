import Link from "next/link";
import { Post, Comment } from "@/types/post";


export async function generateStaticParams() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();

    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Fetch do Post e dos Comentários em paralelo
    const [postRes, commentsRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    ]);

    const post: Post = await postRes.json();
    const comments: Comment[] = await commentsRes.json();

    return (
        <main className="max-w-3xl mx-auto py-20 px-4">
            <Link
                href="/"
                className="inline-flex items-center text-sm font-black uppercase tracking-widest mb-12 hover:text-blue-600 transition-colors group"
            >
                <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                Voltar para a Home
            </Link>
            <article>
                <h1 className="text-4xl font-black uppercase mb-8">{post.title}</h1>
                <p className="text-lg text-zinc-700 leading-relaxed">{post.body}</p>
            </article>

            <section className="mt-16 border-t pt-10">
                <h2 className="text-xl font-black uppercase mb-8">Comentários ({comments.length})</h2>
                <div className="space-y-8">
                    {comments.map(comment => (
                        <div key={comment.id} className="bg-zinc-50 p-6 rounded-lg">
                            <p className="text-xs font-bold text-blue-600 uppercase mb-2">{comment.email}</p>
                            <p className="font-bold text-sm mb-2">{comment.name}</p>
                            <p className="text-zinc-600 text-sm">{comment.body}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}