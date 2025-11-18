import { useRoute, Link } from "wouter";
import { emailThreads } from "@/data/email-content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, Calendar } from "lucide-react";

export default function EmailDetail() {
  const [match, params] = useRoute("/emails/:slug");
  
  if (!match || !params?.slug) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Email Not Found</h1>
          <Link href="/emails">
            <Button data-testid="button-back-to-emails">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Emails
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const email = emailThreads[params.slug];

  if (!email) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Email Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The email you're looking for doesn't exist.
          </p>
          <Link href="/emails">
            <Button data-testid="button-back-to-emails">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Emails
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/emails">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Emails
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0 space-y-4">
                <div>
                  <h1 className="text-2xl font-bold mb-3" data-testid="text-subject">
                    {email.subject}
                  </h1>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      <div>
                        <span className="text-muted-foreground">From:</span>{" "}
                        <span className="font-medium" data-testid="text-from">{email.from}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">To:</span>{" "}
                        <span className="font-medium" data-testid="text-to">{email.to}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span data-testid="text-date">{email.date}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <article 
                    className="prose prose-lg dark:prose-invert max-w-none"
                    data-testid="article-content"
                  >
                    {email.fullContent.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </article>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
