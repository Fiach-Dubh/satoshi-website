import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar, ArrowRight } from "lucide-react";

export interface EmailCardProps {
  subject: string;
  from: string;
  to: string;
  date: string;
  excerpt: string;
  slug: string;
}

export default function EmailCard({
  subject,
  from,
  to,
  date,
  excerpt,
  slug,
}: EmailCardProps) {
  return (
    <Link href={`/emails/${slug}`} data-testid={`link-email-${slug}`}>
      <Card
        className="hover-elevate active-elevate-2 cursor-pointer transition-all"
        data-testid={`card-email-${slug}`}
      >
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0 space-y-3">
              <div>
                <h3 className="font-semibold text-base leading-tight mb-2">
                  {subject}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium">From:</span> {from}
                  </div>
                  <div>
                    <span className="font-medium">To:</span> {to}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{date}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
