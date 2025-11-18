import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import Library from "@/pages/library";
import Mempool from "@/pages/mempool";
import Emails from "@/pages/emails";
import Whitepaper from "@/pages/whitepaper";
import DocumentDetail from "@/pages/document-detail";
import EmailDetail from "@/pages/email-detail";
import MempoolDetail from "@/pages/mempool-detail";
import Export from "@/pages/export";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/library" component={Library} />
      <Route path="/library/:slug" component={DocumentDetail} />
      <Route path="/mempool" component={Mempool} />
      <Route path="/mempool/:slug" component={MempoolDetail} />
      <Route path="/emails" component={Emails} />
      <Route path="/emails/:slug" component={EmailDetail} />
      <Route path="/whitepaper" component={Whitepaper} />
      <Route path="/export" component={Export} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="dark">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
