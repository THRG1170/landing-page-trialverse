"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function Founders({ showHeading = true }: { showHeading?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const founders = [
    {
      name: "Ariel Hutomo",
      role: "Co-Founder & Data Scientist",
      image: "/ariel-hutomo.jpg",
    },
    {
      name: "Triputra Harza",
      role: "Co-Founder & Fullstack Developer",
      image: "/placeholder.svg",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = "1";
          element.style.transform = "translateY(0) scale(1)";
        }
      });
    }, observerOptions);

    if (showHeading) {
      // Observe heading and text
      if (headingRef.current) {
        headingRef.current.style.opacity = "0";
        headingRef.current.style.transform = "translateY(30px)";
        headingRef.current.style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(headingRef.current);
      }

      if (textRef.current) {
        textRef.current.style.opacity = "0";
        textRef.current.style.transform = "translateY(20px)";
        textRef.current.style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";
        textRef.current.style.transitionDelay = "0.2s";
        observer.observe(textRef.current);
      }
    }

    // Observe founder cards
    const founderCards = document.querySelectorAll(".founder-card");
    founderCards.forEach((card, index) => {
      const element = card as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(40px) scale(0.95)";
      element.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";
      element.style.transitionDelay = `${0.4 + index * 0.2}s`;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [showHeading]);

  return (
    <section ref={sectionRef} className="py-12 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        {showHeading && (
          <div className="text-center space-y-4 mb-12">
            <h2
              ref={headingRef}
              className="text-3xl font-bold tracking-tighter md:text-4xl"
            >
              Meet Our Founders
            </h2>
            <p
              ref={textRef}
              className="text-muted-foreground md:text-xl max-w-[800px] mx-auto"
            >
              The visionaries behind Trial Verse who are passionate about
              transforming social media.
            </p>
          </div>
        )}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {founders.map((founder, index) => (
            <Link key={index} href="/about">
              <Card className="founder-card overflow-hidden">
                <CardContent>
                  <h3 className="text-2xl font-bold">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">
                    {founder.role}
                  </p>
                  <div className="aspect-square relative">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Founders;
