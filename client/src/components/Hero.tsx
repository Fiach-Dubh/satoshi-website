import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Bitcoin_hero_background_pattern_48d1a0e1.png";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            The Complete Satoshi Archive
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            A comprehensive collection of Satoshi Nakamoto's writings, emails, the Bitcoin whitepaper, and essential Bitcoin literature
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/library">
              <Button size="lg" variant="default" data-testid="button-explore-library">
                Explore Library
              </Button>
            </Link>
            <Link href="/whitepaper">
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 backdrop-blur border-white/30 text-white hover:bg-background/30"
                data-testid="button-read-whitepaper"
              >
                Read Whitepaper
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
