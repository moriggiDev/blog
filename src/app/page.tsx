import { Post } from "@/types/post";
import Carrossel from "@/components/Carrossel";
import { ListaPosts } from "@/components/ListaPosts";
import Feed from "@/components/Feed";


export default async function Home() {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPosts: Post[] = await response.json();

  const postsRestantes = allPosts.slice(3);


  return (
    <main>
      <section className="mb-16">
        <Carrossel posts={allPosts} />
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-8 italic">Mais Notícias</h2>
        <ListaPosts posts={postsRestantes} />
        <Feed posts={allPosts} />
      </section>
    </main>
  );
}