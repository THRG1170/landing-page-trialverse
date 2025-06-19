"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Navbar as Resizeble,
  NavbarLogo,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizeble-navbar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Docs", link: "/docs" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Resizeble className="mt-3">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="https://trialverse-social.vercel.app/">
                Get Started
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex gap-6 items-center">
              <ModeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "relative",
                  pathname === item.link ||
                    (item.link === "/docs" && pathname.startsWith("/docs"))
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Button asChild>
                <Link href="https://trialverse-social.vercel.app/">
                  Get Started
                </Link>
              </Button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Resizeble>
    </>
  );
}
