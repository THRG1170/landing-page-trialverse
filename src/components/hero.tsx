"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Boxes } from "./ui/background-box";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Simple CSS animations instead of GSAP to avoid import issues
    const animateElement = (element: HTMLElement | null, delay = 0) => {
      if (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";

        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, delay);
      }
    };

    // Animate elements with staggered delays
    animateElement(headingRef.current, 100);
    animateElement(textRef.current, 300);
    animateElement(buttonsRef.current, 500);

    // Animate floating bubbles with CSS animations
    const bubbles = document.querySelectorAll(".hero-bubble");
    //eslint-disable-next-line
    bubbles.forEach((bubble, index) => {
      const element = bubble as HTMLElement;
      element.style.animation = `float ${
        3 + Math.random() * 5
      }s ease-in-out infinite`;
      element.style.animationDelay = `${Math.random() * 2}s`;
    });
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden mb-16"
      >
        {/* Animated background */}
        <div className="absolute inset-0 w-full h-full bg-slate-200 dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <div className="container px-4 md:px-6 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1
                ref={headingRef}
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
              >
                Connecting People Through Shared Experiences
              </h1>
              <p
                ref={textRef}
                className="max-w-3xl mx-auto text-muted-foreground md:text-xl lg:text-2xl"
              >
                Join our growing social network where you can connect, share,
                and engage with like-minded individuals around the world.
              </p>
            </div>
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="font-medium text-lg px-8 py-6"
              >
                <Link href="/">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <Link href="/">Docs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
