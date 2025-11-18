import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, FileText } from "lucide-react";

export interface DocumentCardProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  category?: string;
  slug: string;
}

export default function DocumentCard({
  title,
  author,
  date,
  excerpt,
  category,
  slug,
}: DocumentCardProps) {
  return (
    <Link href={`/library/${slug}`} data-testid={`link-document-${slug}`}>
      <Card
        className="hover-elevate active-elevate-2 cursor-pointer transition-all h-full flex flex-col"
        data-testid={`card-document-${slug}`}
      >
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg leading-tight line-clamp-2">
              {title}
            </h3>
            {category && (
              <Badge variant="secondary" className="shrink-0">
                {category}
              </Badge>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{date}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
