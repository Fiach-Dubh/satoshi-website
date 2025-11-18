import Hero from "@/components/Hero";
import DocumentCard from "@/components/DocumentCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Mail, FileText, Calendar } from "lucide-react";
import { Link } from "wouter";
import newspaperImage from "@assets/24_1761101284787.jpg";

export default function Home() {
  // todo: remove mock functionality - Replace with actual data from Nakamoto Institute repo
  const featuredDocs = [
    {
      title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
      author: "Satoshi Nakamoto",
      date: "October 31, 2008",
      excerpt: "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.",
      category: "Whitepaper",
      slug: "bitcoin",
    },
    {
      title: "b-money",
      author: "Wei Dai",
      date: "November 1998",
      excerpt: "I am fascinated by Tim May's crypto-anarchy. Unlike the communities traditionally associated with the word 'anarchy', in a crypto-anarchy the government is not temporarily destroyed but permanently forbidden and permanently unnecessary.",
      category: "Historical",
      slug: "b-money",
    },
    {
      title: "Bit Gold",
      author: "Nick Szabo",
      date: "December 27, 2005",
      excerpt: "A long time ago I hit upon the idea of bit gold. The problem, in a nutshell, is that our money currently depends on trust in a third party for its value.",
      category: "Historical",
      slug: "bit-gold",
    },
  ];

  return (
    <>
      <Hero />
      
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link href="/library" data-testid="link-feature-library">
            <div className="p-6 rounded-lg border hover-elevate active-elevate-2 cursor-pointer transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Library</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore essential Bitcoin documents, papers, and articles
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                Browse Library <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link href="/emails" data-testid="link-feature-emails">
            <div className="p-6 rounded-lg border hover-elevate active-elevate-2 cursor-pointer transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Satoshi's Emails</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete archive of Satoshi Nakamoto's email correspondence
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                View Emails <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link href="/mempool" data-testid="link-feature-mempool">
            <div className="p-6 rounded-lg border hover-elevate active-elevate-2 cursor-pointer transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">The Mempool</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Essays and articles on Bitcoin philosophy and economics
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                Read Posts <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>

        <Card className="p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>January 3, 2009</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">The Genesis Block</h2>
              <p className="text-muted-foreground mb-6">
                On this day, Satoshi Nakamoto mined the first Bitcoin block, embedding a message from The Times newspaper headline: "Chancellor on brink of second bailout for banks." This historic timestamp marked the birth of a new monetary system.
              </p>
              <Link href="/whitepaper">
                <Button variant="default">
                  Read the Whitepaper <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={newspaperImage}
                alt="The Times newspaper - January 3, 2009: Chancellor on brink of second bailout for banks"
                className="rounded-md w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Documents</h2>
            <Link href="/library" data-testid="link-view-all">
              <Button variant="ghost">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDocs.map((doc) => (
              <DocumentCard key={doc.slug} {...doc} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
