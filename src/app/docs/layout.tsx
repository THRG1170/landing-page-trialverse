import type React from "react";
import { DocsLayoutClient } from "./layout-client";
import { SidebarLink } from "@/components/sidebar-link";

export const metadata = {
  title: "Trial Verse Documentation",
  description: "Official documentation for Trial Verse platform",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col mt-[-64px] p-0 overflow-hidden">
      <DocsLayoutClient />
      <div className="flex flex-1" style={{ marginTop: "64px" }}>
        {/* Sidebar Navigation - NOT fixed */}
        <aside className="hidden md:block w-64 border-r border-border bg-muted/40 min-h-[calc(100vh-4rem)]">
          <div className="p-4">
            <div className="mb-8">
              <div className="mb-2 px-2 text-sm font-medium text-muted-foreground">
                Getting Started
              </div>
              <div className="space-y-1">
                <SidebarLink href="/docs" label="Introduction" />
                <SidebarLink href="/docs/installation" label="Installation" />
                <SidebarLink
                  href="/docs/project-structure"
                  label="Project Structure"
                />
              </div>
            </div>
            <div className="mb-8">
              <div className="mb-2 px-2 text-sm font-medium text-muted-foreground">
                API Reference
              </div>
              <div className="space-y-1">
                <SidebarLink href="/docs/api" label="API Documentation" />
                <SidebarLink
                  href="/docs/authentication"
                  label="Authentication"
                />
                <SidebarLink href="/docs/websockets" label="WebSockets" />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="container mx-auto flex max-w-screen-xl">
            <div className="flex-1 py-8 px-4 md:px-8">{children}</div>

            {/* On this page navigation */}
            <div className="hidden xl:block w-64 shrink-0 py-8 pr-4">
              <div className="sticky top-20">
                <div className="mb-2 text-sm font-medium">On this page</div>
                <div id="on-this-page-nav" className="text-sm">
                  {/* This will be populated by JavaScript in the client component */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
