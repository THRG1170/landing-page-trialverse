"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScriptCopyBtnProps {
  children: React.ReactNode;
  className?: string;
}

export const ScriptCopyBtn: React.FC<ScriptCopyBtnProps> = ({
  children,
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
      <div className="bg-slate-950 text-slate-50 rounded-lg p-4 pr-12 font-mono text-sm overflow-x-auto">
        {children}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-8 w-8 text-slate-400 hover:text-slate-50 hover:bg-slate-800"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};
