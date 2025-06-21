"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  title?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language = "typescript",
  title,
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text =
      typeof children === "string"
        ? children
        : React.Children.toArray(children).join("");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={cn("relative group", className)}>
      {title && (
        <div className="bg-slate-800 text-slate-200 px-4 py-2 text-sm font-medium rounded-t-lg border-b border-slate-700">
          {title}
        </div>
      )}
      <div
        className={cn(
          "bg-slate-950 text-slate-50 p-4 font-mono text-sm overflow-x-auto relative",
          title ? "rounded-b-lg" : "rounded-lg"
        )}
      >
        <pre className="whitespace-pre-wrap">
          <code className={`language-${language}`}>{children}</code>
        </pre>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 text-slate-400 hover:text-slate-50 hover:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};
