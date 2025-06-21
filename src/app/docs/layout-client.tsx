"use client";

import { usePathname } from "next/navigation";
import { OnPageNav } from "./on-page-nav";
import { DocsSearch } from "@/components/docs-search";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function DocsLayoutClient() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //eslint-disable-next-line
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile header with menu button */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-background px-4 py-3 md:hidden border-b border-border">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">TrialVerse</span>
        </Link>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-background p-6 shadow-xl border-r border-border">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-primary">
                  TrialVerse
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
            </div>
            <div className="space-y-6">
              <div>
                <div className="mb-2 text-sm font-medium text-muted-foreground">
                  Getting Started
                </div>
                <div className="space-y-1">
                  <Link
                    href="/docs"
                    className={`block rounded-md px-2 py-1 text-sm hover:bg-muted transition-colors ${
                      pathname === "/docs"
                        ? "bg-primary/10 text-primary font-medium"
                        : ""
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Introduction
                  </Link>
                  <Link
                    href="/docs/installation"
                    className={`block rounded-md px-2 py-1 text-sm hover:bg-muted transition-colors ${
                      pathname === "/docs/installation"
                        ? "bg-primary/10 text-primary font-medium"
                        : ""
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Installation
                  </Link>
                  <Link
                    href="/docs/project-structure"
                    className={`block rounded-md px-2 py-1 text-sm hover:bg-muted transition-colors ${
                      pathname === "/docs/project-structure"
                        ? "bg-primary/10 text-primary font-medium"
                        : ""
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Project Structure
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop header - simplified for docs only */}
      <div
        className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-background border-b border-border"
        style={{ height: "64px", lineHeight: "64px" }}
      >
        <div className="w-full h-full flex items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">TrialVerse</span>
            </Link>
            <div className="text-sm text-muted-foreground">Documentation</div>
          </div>
          <div className="flex items-center space-x-4">
            <DocsSearch />
            <ModeToggle />
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <OnPageNav />
    </>
  );
}
