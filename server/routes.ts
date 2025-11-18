import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getUncachableGitHubClient } from "./github";
import fs from "fs/promises";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/export-to-github", async (req, res) => {
    try {
      const { repoName, description } = req.body;

      if (!repoName) {
        return res.status(400).json({ error: "Repository name is required" });
      }

      const octokit = await getUncachableGitHubClient();
      
      const { data: user } = await octokit.rest.users.getAuthenticated();
      
      let repo;
      try {
        const { data: existingRepo } = await octokit.rest.repos.get({
          owner: user.login,
          repo: repoName,
        });
        repo = existingRepo;
      } catch (error: any) {
        if (error.status === 404) {
          const { data: newRepo } = await octokit.rest.repos.createForAuthenticatedUser({
            name: repoName,
            description: description || "Satoshi.₿z - A static mirror of Bitcoin's historical documents, emails, and writings",
            private: false,
            auto_init: false,
          });
          repo = newRepo;
        } else {
          throw error;
        }
      }

      const filesToExport = [
        'client/src/App.tsx',
        'client/src/main.tsx',
        'client/src/pages/home.tsx',
        'client/src/pages/whitepaper.tsx',
        'client/src/pages/emails.tsx',
        'client/src/pages/email-detail.tsx',
        'client/src/pages/library.tsx',
        'client/src/pages/document-detail.tsx',
        'client/src/pages/mempool.tsx',
        'client/src/pages/mempool-detail.tsx',
        'client/src/pages/export.tsx',
        'client/src/pages/not-found.tsx',
        'client/src/data/email-content.ts',
        'client/src/data/library-content.ts',
        'client/src/data/mempool-content.ts',
        'client/src/components/Header.tsx',
        'client/src/components/Footer.tsx',
        'client/src/components/Hero.tsx',
        'client/src/components/SearchBar.tsx',
        'client/src/components/EmailCard.tsx',
        'client/src/components/DocumentCard.tsx',
        'client/src/components/MempoolCard.tsx',
        'client/src/components/ThemeProvider.tsx',
        'client/src/lib/queryClient.ts',
        'client/src/lib/utils.ts',
        'client/src/hooks/use-toast.ts',
        'client/src/hooks/use-mobile.tsx',
        'client/src/components/ui/accordion.tsx',
        'client/src/components/ui/alert-dialog.tsx',
        'client/src/components/ui/alert.tsx',
        'client/src/components/ui/avatar.tsx',
        'client/src/components/ui/badge.tsx',
        'client/src/components/ui/button.tsx',
        'client/src/components/ui/card.tsx',
        'client/src/components/ui/checkbox.tsx',
        'client/src/components/ui/dialog.tsx',
        'client/src/components/ui/dropdown-menu.tsx',
        'client/src/components/ui/form.tsx',
        'client/src/components/ui/input.tsx',
        'client/src/components/ui/label.tsx',
        'client/src/components/ui/popover.tsx',
        'client/src/components/ui/select.tsx',
        'client/src/components/ui/separator.tsx',
        'client/src/components/ui/skeleton.tsx',
        'client/src/components/ui/textarea.tsx',
        'client/src/components/ui/toast.tsx',
        'client/src/components/ui/toaster.tsx',
        'client/src/components/ui/tooltip.tsx',
        'client/src/index.css',
        'client/index.html',
        'package.json',
        'tsconfig.json',
        'vite.config.ts',
        'tailwind.config.ts',
        'postcss.config.js',
        'README.md',
      ];

      const uploadedFiles = [];
      const failedFiles = [];

      for (const filePath of filesToExport) {
        try {
          const content = await fs.readFile(filePath, 'utf-8');
          const base64Content = Buffer.from(content).toString('base64');

          let sha: string | undefined;
          try {
            const { data: existingFile } = await octokit.rest.repos.getContent({
              owner: user.login,
              repo: repoName,
              path: filePath,
            });
            if ('sha' in existingFile) {
              sha = existingFile.sha;
            }
          } catch (error: any) {
            if (error.status !== 404) {
              throw error;
            }
          }

          await octokit.rest.repos.createOrUpdateFileContents({
            owner: user.login,
            repo: repoName,
            path: filePath,
            message: `Add ${filePath}`,
            content: base64Content,
            ...(sha && { sha }),
          });

          uploadedFiles.push(filePath);
        } catch (error: any) {
          console.error(`Failed to upload ${filePath}:`, error);
          failedFiles.push({ path: filePath, error: error.message });
        }
      }

      if (failedFiles.length > 0 && uploadedFiles.length === 0) {
        return res.status(500).json({
          error: 'All file uploads failed',
          failedFiles,
        });
      }

      res.json({
        success: true,
        repoUrl: repo.html_url,
        filesUploaded: uploadedFiles.length,
        totalFiles: filesToExport.length,
        failedFiles: failedFiles.length > 0 ? failedFiles : undefined,
      });
    } catch (error: any) {
      console.error('GitHub export error:', error);
      res.status(500).json({ 
        error: error.message || "Failed to export to GitHub" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
