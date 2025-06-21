"use client";

import type React from "react";
import { useState } from "react";
import { ChevronRight, ChevronDown, Folder, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileTreeItem {
  name: string;
  type: "file" | "folder";
  children?: FileTreeItem[];
  icon?: React.ReactNode;
}

interface FileTreeProps {
  data: FileTreeItem[];
  className?: string;
}

interface TreeItemProps {
  item: FileTreeItem;
  level: number;
}

const getFileIcon = (fileName: string) => {
  const extension = fileName.split(".").pop()?.toLowerCase();

  const iconMap: { [key: string]: string } = {
    ts: "🟦",
    tsx: "⚛️",
    js: "🟨",
    jsx: "⚛️",
    json: "📄",
    md: "📝",
    env: "🔐",
    gitignore: "🚫",
    lock: "🔒",
    config: "⚙️",
    css: "🎨",
    html: "🌐",
    png: "🖼️",
    jpg: "🖼️",
    jpeg: "🖼️",
    svg: "🎨",
  };

  return iconMap[extension || ""] || "📄";
};

const TreeItem: React.FC<TreeItemProps> = ({ item, level }) => {
  const [isOpen, setIsOpen] = useState(level < 2);

  const handleToggle = () => {
    if (item.type === "folder") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-1 px-2 hover:bg-muted/50 cursor-pointer rounded-sm transition-colors",
          "text-sm"
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={handleToggle}
      >
        {item.type === "folder" ? (
          <>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 mr-1 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-1 text-muted-foreground" />
            )}
            {isOpen ? (
              <FolderOpen className="h-4 w-4 mr-2 text-blue-500" />
            ) : (
              <Folder className="h-4 w-4 mr-2 text-blue-500" />
            )}
          </>
        ) : (
          <>
            <span className="w-5" />
            <span className="mr-2">{getFileIcon(item.name)}</span>
          </>
        )}
        <span
          className={cn(
            item.type === "folder" ? "font-medium" : "text-muted-foreground"
          )}
        >
          {item.name}
        </span>
      </div>

      {item.type === "folder" && isOpen && item.children && (
        <div>
          {item.children.map((child, index) => (
            <TreeItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({ data, className }) => {
  return (
    <div
      className={cn(
        "border rounded-lg p-2 bg-background font-mono text-sm",
        className
      )}
    >
      {data.map((item, index) => (
        <TreeItem key={index} item={item} level={0} />
      ))}
    </div>
  );
};
