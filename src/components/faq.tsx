"use client";

import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question:
        "What makes Trial Verse different from other social media platforms?",
      answer:
        "Trial Verse focuses on meaningful connections and quality interactions rather than endless scrolling. Our platform uses advanced algorithms to connect you with like-minded individuals and content that truly matters to you, while maintaining strong privacy protections.",
    },
    {
      question: "Is Trial Verse free to use?",
      answer:
        "Yes, Trial Verse offers a free tier with access to core features. We also offer premium subscriptions that provide additional features such as advanced analytics, ad-free browsing, and priority customer support.",
    },
    {
      question: "How does Trial Verse protect my privacy?",
      answer:
        "We take privacy seriously at Trial Verse. We employ end-to-end encryption for messages, give you granular control over who can see your content, and never sell your personal data to third parties. Our transparent privacy policy clearly outlines how your information is used.",
    },
    {
      question: "Can I use Trial Verse for business networking?",
      answer:
        "Trial Verse has dedicated features for professionals and businesses, including industry-specific groups, business profiles, and networking events. Many users have found valuable professional connections through our platform.",
    },
    {
      question: "How can I report inappropriate content or behavior?",
      answer:
        "Trial Verse has a robust reporting system. You can report any post, comment, or user profile directly through the platform. Our moderation team reviews all reports promptly and takes appropriate action according to our community guidelines.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, we have mobile apps available for both iOS and Android devices. The apps offer a full-featured experience, allowing you to stay connected on the go with real-time notifications and all the functionality of the web version.",
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
          element.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

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

    // Observe FAQ items
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item, index) => {
      const element = item as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition =
        "opacity 0.6s ease-out, transform 0.6s ease-out";
      element.style.transitionDelay = `${0.4 + index * 0.1}s`;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 bg-muted/50 rounded-3xl mx-4 md:mx-8 mb-16"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2
            ref={headingRef}
            className="text-3xl font-bold tracking-tighter md:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p
            ref={textRef}
            className="text-muted-foreground md:text-xl max-w-[800px] mx-auto"
          >
            Find answers to common questions about Trial Verse and our platform.
          </p>
        </div>
        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="faq-item"
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
