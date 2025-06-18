"use client";

import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const pathname = usePathname();
  const isDocsPage = pathname?.startsWith("/docs");

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={cn(className, inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col overflow-x-hidden">
            {/* Only show the main navbar if we're not on a docs page */}
            {!isDocsPage && <Navbar />}
            <main className="flex-1 overflow-x-hidden pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
