import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, CheckCircle2, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface ExportResult {
  repoUrl: string;
  filesUploaded: number;
  totalFiles: number;
  failedFiles?: Array<{ path: string; error: string }>;
}

export default function Export() {
  const [repoName, setRepoName] = useState("satoshi-bz-archive");
  const [description, setDescription] = useState("Satoshi.₿z - A static mirror of Bitcoin's historical documents, emails, and writings");
  const [isExporting, setIsExporting] = useState(false);
  const [exportResult, setExportResult] = useState<ExportResult | null>(null);
  const { toast } = useToast();

  const handleExport = async () => {
    if (!repoName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a repository name",
        variant: "destructive",
      });
      return;
    }

    setIsExporting(true);
    setExportResult(null);

    try {
      const res = await apiRequest("POST", "/api/export-to-github", {
        repoName: repoName.trim(),
        description: description.trim(),
      });

      const result = await res.json();
      setExportResult(result);
      toast({
        title: "Export Successful!",
        description: `Successfully exported ${result.filesUploaded} files to GitHub`,
      });
    } catch (error: any) {
      toast({
        title: "Export Failed",
        description: error.message || "Failed to export to GitHub. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Export to GitHub</h1>
          <p className="text-muted-foreground">
            Export the complete Satoshi.₿z archive to your GitHub repository
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              GitHub Repository Settings
            </CardTitle>
            <CardDescription>
              Configure your GitHub repository details. The repository will be created if it doesn't exist.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="repo-name">Repository Name</Label>
              <Input
                id="repo-name"
                data-testid="input-repo-name"
                placeholder="satoshi-bz-archive"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                disabled={isExporting}
              />
              <p className="text-sm text-muted-foreground">
                Use lowercase letters, numbers, and hyphens only
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                data-testid="input-description"
                placeholder="Enter repository description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isExporting}
                rows={3}
              />
            </div>

            {exportResult && (
              <div className="p-4 border rounded-lg bg-muted/50">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div className="flex-1 space-y-2">
                    <p className="font-semibold">Export Complete!</p>
                    <p className="text-sm text-muted-foreground">
                      Successfully uploaded {exportResult.filesUploaded} of {exportResult.totalFiles} files
                    </p>
                    {exportResult.failedFiles && exportResult.failedFiles.length > 0 && (
                      <p className="text-sm text-yellow-600 dark:text-yellow-500">
                        Warning: {exportResult.failedFiles.length} files failed to upload
                      </p>
                    )}
                    <a
                      href={exportResult.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      data-testid="link-repo"
                    >
                      View Repository on GitHub
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleExport}
              disabled={isExporting || !repoName.trim()}
              className="w-full"
              size="lg"
              data-testid="button-export"
            >
              {isExporting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Exporting to GitHub...
                </>
              ) : (
                <>
                  <Github className="mr-2 h-4 w-4" />
                  Export to GitHub
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>What will be exported?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                <p>All source code files (components, pages, utilities)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                <p>Complete email archive (42 authentic Satoshi emails)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                <p>Bitcoin whitepaper (all 12 sections)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                <p>Library documents (full-text primary sources)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                <p>Mempool articles</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                <p>Configuration files (package.json, vite.config, etc.)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
