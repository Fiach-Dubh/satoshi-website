import MempoolCard from "@/components/MempoolCard";
import { mempoolPosts } from "@/data/mempool-content";

export default function Mempool() {
  const posts = Object.values(mempoolPosts).map(post => ({
    title: post.title,
    author: post.author,
    date: post.date,
    readTime: `${Math.ceil(post.fullContent.split(' ').length / 200)} min read`,
    excerpt: post.fullContent.substring(0, 200) + "...",
    tags: post.series ? [post.series] : ["Essay"],
    slug: post.slug,
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">The Mempool</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Essays and articles exploring Bitcoin philosophy, economics, and culture. Original research and commentary on the implications of sound money.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <MempoolCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
