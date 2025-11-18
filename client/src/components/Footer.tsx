import { Link } from "wouter";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Satoshi.<span className="text-primary">₿</span>z
            </h3>
            <p className="text-sm text-muted-foreground">
              Advancing and preserving Bitcoin knowledge through comprehensive archives of Satoshi Nakamoto's writings and essential Bitcoin literature.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/library" data-testid="link-footer-library">
                <Button variant="ghost" size="sm" className="justify-start px-0 h-auto">
                  Library
                </Button>
              </Link>
              <Link href="/mempool" data-testid="link-footer-mempool">
                <Button variant="ghost" size="sm" className="justify-start px-0 h-auto">
                  Mempool
                </Button>
              </Link>
              <Link href="/emails" data-testid="link-footer-emails">
                <Button variant="ghost" size="sm" className="justify-start px-0 h-auto">
                  Email Archive
                </Button>
              </Link>
              <Link href="/whitepaper" data-testid="link-footer-whitepaper">
                <Button variant="ghost" size="sm" className="justify-start px-0 h-auto">
                  Bitcoin Whitepaper
                </Button>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild data-testid="button-github">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Open source archive preserving Bitcoin's history
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Satoshi.₿z. Content licensed under GNU Affero License.</p>
        </div>
      </div>
    </footer>
  );
}
