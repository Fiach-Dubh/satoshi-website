import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export interface MempoolCardProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags?: string[];
  slug: string;
}

export default function MempoolCard({
  title,
  author,
  date,
  readTime,
  excerpt,
  tags,
  slug,
}: MempoolCardProps) {
  return (
    <Link href={`/mempool/${slug}`} data-testid={`link-mempool-${slug}`}>
      <Card
        className="hover-elevate active-elevate-2 cursor-pointer transition-all h-full flex flex-col"
        data-testid={`card-mempool-${slug}`}
      >
        <CardHeader className="space-y-3">
          <h3 className="font-semibold text-xl leading-tight">
            {title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-medium">{author}</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{readTime}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground line-clamp-4 flex-1">
            {excerpt}
          </p>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
