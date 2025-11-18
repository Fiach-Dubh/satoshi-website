import { useRoute, Link } from "wouter";
import { mempoolPosts } from "@/data/mempool-content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function MempoolDetail() {
  const [match, params] = useRoute("/mempool/:slug");
  
  if (!match || !params?.slug) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/mempool">
            <Button data-testid="button-back-to-mempool">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Mempool
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const post = mempoolPosts[params.slug];

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The post you're looking for doesn't exist.
          </p>
          <Link href="/mempool">
            <Button data-testid="button-back-to-mempool">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Mempool
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/mempool">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mempool
          </Button>
        </Link>

        <div className="space-y-4">
          {post.series && (
            <Badge variant="secondary" data-testid="badge-series">
              {post.series}
            </Badge>
          )}

          <h1 className="text-4xl font-bold leading-tight" data-testid="text-title">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="font-medium" data-testid="text-author">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span data-testid="text-date">{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      <article 
        className="prose prose-lg dark:prose-invert max-w-none"
        data-testid="article-content"
      >
        {post.fullContent.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </div>
  );
}
