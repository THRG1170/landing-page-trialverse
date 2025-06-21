"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  label: string;
}

export function SidebarLink({ href, label }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block rounded-md px-2 py-1 text-sm hover:bg-muted ${
        isActive ? "bg-primary/10 text-primary font-medium" : ""
      }`}
    >
      {label}
    </Link>
  );
}
