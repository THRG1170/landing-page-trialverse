"use client";

import React, { JSX, useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion"; // ✅ make sure you're using 'framer-motion', not 'motion/react'
import { Github, Instagram, Linkedin } from "lucide-react";

export type IconKey = "github" | "instagram" | "linkedin";

const iconMap: Record<IconKey, JSX.Element> = {
  github: <Github className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
};

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    icon: IconKey;
    href: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  //eslint-disable-next-line
  const handleMouseMove = (event: any) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex gap-4">
      {items.map((item) => {
        return (
          <div
            className="group relative"
            key={item.name}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX,
                    rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                >
                  <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                  <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                  <div className="relative z-30 text-base font-bold text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-white">{item.designation}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              onMouseMove={handleMouseMove}
              className="size-12 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              {iconMap[item.icon]}
            </a>
          </div>
        );
      })}
    </div>
  );
};
