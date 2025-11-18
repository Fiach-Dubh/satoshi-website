import DocumentCard from "@/components/DocumentCard";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { libraryDocuments } from "@/data/library-content";

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "Whitepaper", "Historical", "Economics", "Philosophy"];
  
  const documents = Object.values(libraryDocuments);

  const filteredDocs = documents.filter((doc) => {
    const matchesCategory = !selectedCategory || selectedCategory === "All" || doc.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Library</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A curated collection of essential Bitcoin documents, historical papers, and foundational writings that shaped the development of cryptocurrency.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category || (!selectedCategory && category === "All") ? "default" : "secondary"}
              className="cursor-pointer hover-elevate active-elevate-2 px-4 py-1.5"
              onClick={() => setSelectedCategory(category === "All" ? null : category)}
              data-testid={`badge-category-${category.toLowerCase()}`}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {filteredDocs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <DocumentCard key={doc.slug} {...doc} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No documents found in this category.</p>
        </div>
      )}
    </div>
  );
}
