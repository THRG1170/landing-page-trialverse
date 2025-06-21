"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function OnPageNav() {
  //eslint-disable-next-line
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const pathname = usePathname();

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2[id], h3[id]")
    );

    const extractedHeadings = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: heading.tagName === "H2" ? 2 : 3,
    }));

    setHeadings(extractedHeadings);

    // Update the on-page-nav element
    const navElement = document.getElementById("on-this-page-nav");
    if (navElement) {
      navElement.innerHTML = "";

      extractedHeadings.forEach((heading) => {
        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.text;
        link.className =
          heading.level === 2
            ? "block text-muted-foreground hover:text-foreground py-1"
            : "block text-muted-foreground hover:text-foreground py-1 pl-4";

        navElement.appendChild(link);
      });
    }
  }, [pathname]);

  return null;
}
