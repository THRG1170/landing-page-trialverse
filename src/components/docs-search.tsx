"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

// This would typically come from a build process or API
// For demo purposes, we'll define it here
const searchIndex = [
  {
    title: "Introduction",
    content:
      "Welcome to the Trial Verse documentation! Trial Verse is a modern social platform designed to create meaningful connections between users.",
    url: "/docs",
    section: "Getting Started",
    keywords: ["introduction", "overview", "welcome", "about", "trial verse"],
  },
  {
    title: "Installation",
    content:
      "Get started with Trial Verse by setting up your development environment. Learn how to install the frontend and backend components.",
    url: "/docs/installation",
    section: "Getting Started",
    keywords: [
      "install",
      "setup",
      "environment",
      "prerequisites",
      "getting started",
    ],
  },
  {
    title: "Project Structure",
    content:
      "Understanding the organization of the Trial Verse codebase. Learn about the frontend and backend structure.",
    url: "/docs/project-structure",
    section: "Getting Started",
    keywords: ["structure", "organization", "files", "folders", "codebase"],
  },
  {
    title: "Frontend Installation",
    content:
      "The Trial Verse frontend is built with Next.js and uses several modern libraries for UI and animations.",
    url: "/docs/installation#frontend-installation",
    section: "Installation",
    keywords: ["frontend", "next.js", "ui", "client", "install"],
  },
  {
    title: "Backend Installation",
    content:
      "The Trial Verse backend is built with Express.js and MongoDB for data storage.",
    url: "/docs/installation#backend-installation",
    section: "Installation",
    keywords: ["backend", "express", "server", "api", "install"],
  },
  {
    title: "Database Setup",
    content:
      "Trial Verse uses MongoDB as its database. You can either use a local MongoDB installation or MongoDB Atlas.",
    url: "/docs/installation#database-setup",
    section: "Installation",
    keywords: ["database", "mongodb", "storage", "data", "setup"],
  },
  {
    title: "Technology Stack",
    content:
      "Trial Verse is built using a modern MERN stack with additional technologies for enhanced user experience.",
    url: "/docs#tech-stack",
    section: "Getting Started",
    keywords: [
      "stack",
      "technology",
      "mern",
      "mongodb",
      "express",
      "react",
      "node",
    ],
  },
];

export function DocsSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchIndex>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const search = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchTerms = searchQuery.toLowerCase().split(" ").filter(Boolean);

    const filteredResults = searchIndex.filter((item) => {
      const titleMatch = item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const contentMatch = item.content
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const keywordMatch = item.keywords.some((keyword) =>
        searchTerms.some((term) => keyword.includes(term))
      );

      return titleMatch || contentMatch || keywordMatch;
    });

    setResults(filteredResults);
    setSelectedIndex(0);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Open search with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }

      if (!isOpen) return;

      // Close with Escape
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      // Navigate results with arrow keys
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        );
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      }

      // Navigate to selected result with Enter
      if (e.key === "Enter" && results.length > 0) {
        e.preventDefault();
        const selected = results[selectedIndex];
        if (selected) {
          router.push(selected.url);
          setIsOpen(false);
        }
      }
    },
    [isOpen, results, selectedIndex, router]
  );

  // Handle clicks outside to close the search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add keyboard event listeners
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Focus input when search is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Update search results when query changes
  useEffect(() => {
    search(query);
  }, [query, search]);

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center">
        <div className="relative w-full hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documentation..."
            className="w-full bg-background pl-8 md:w-[200px] lg:w-[300px]"
            onClick={() => setIsOpen(true)}
          />
        </div>
        <div className="ml-2 hidden md:flex">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-1/2 top-1/4 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4">
            <div className="bg-background rounded-lg border shadow-lg">
              <div className="flex items-center border-b p-4">
                <Search className="mr-2 h-5 w-5 text-muted-foreground" />
                <input
                  ref={inputRef}
                  type="search"
                  placeholder="Search documentation..."
                  className="flex-1 bg-transparent outline-none"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="ml-2 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="max-h-[300px] overflow-y-auto p-2">
                {results.length === 0 && query.trim() !== "" ? (
                  <div className="p-4 text-center text-muted-foreground">
                    No results found for &quot;{query}&quot;
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    Type to start searching...
                  </div>
                ) : (
                  <div className="space-y-1">
                    {results.map((result, index) => (
                      <Link
                        key={result.url}
                        href={result.url}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-md p-2 text-sm hover:bg-muted ${
                          index === selectedIndex
                            ? "bg-primary/10 text-primary"
                            : ""
                        }`}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <div className="font-medium">{result.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {result.section}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground line-clamp-1">
                          {result.content}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="border-t p-2 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <span>
                      <kbd className="rounded border bg-muted px-1">↑</kbd>
                      <kbd className="rounded border bg-muted px-1">↓</kbd> to
                      navigate
                    </span>
                    <span>
                      <kbd className="rounded border bg-muted px-1">Enter</kbd>{" "}
                      to select
                    </span>
                  </div>
                  <div>
                    <kbd className="rounded border bg-muted px-1">Esc</kbd> to
                    close
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
