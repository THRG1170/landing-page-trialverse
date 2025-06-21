"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const testimonials1 = [
    {
      name: "Isabella Turner",
      role: "Fitness Coach",
      avatar: "IT",
      content:
        "This platform has allowed me to grow a fitness community that’s focused and encouraging. It’s become my go-to for client engagement.",
    },
    {
      name: "Ethan Clarke",
      role: "AI Researcher",
      avatar: "EC",
      content:
        "It’s rare to find a platform that supports thoughtful discussion and networking in the AI space. Trial Verse has filled that gap perfectly.",
    },
    {
      name: "Grace Lee",
      role: "NGO Volunteer",
      avatar: "GL",
      content:
        "I’ve used Trial Verse to organize events and bring volunteers together. The communication tools are simple but powerful.",
    },
    {
      name: "Lucas Evans",
      role: "Freelance Writer",
      avatar: "LE",
      content:
        "The exposure I’ve gotten from Trial Verse has helped me land multiple writing gigs. It’s like LinkedIn but more creative and engaging.",
    },
    {
      name: "Nina Okafor",
      role: "Life Coach",
      avatar: "NO",
      content:
        "Trial Verse gives me the tools to reach clients and share motivational content that makes a difference.",
    },
    {
      name: "Daniel Kim",
      role: "Startup Founder",
      avatar: "DK",
      content:
        "We launched our beta through Trial Verse and saw incredible traction. The early adopter community here is unmatched.",
    },
    {
      name: "Sofia Garcia",
      role: "Illustrator",
      avatar: "SG",
      content:
        "Trial Verse helped me find my artistic voice and a loyal following. It’s more than a platform—it’s a creative home.",
    },
    {
      name: "Jack Thompson",
      role: "Educator",
      avatar: "JT",
      content:
        "I’ve used Trial Verse to share educational content and reach learners beyond my classroom. It’s changing the way I teach.",
    },
    {
      name: "Olivia Bennett",
      role: "Fashion Blogger",
      avatar: "OB",
      content:
        "The visibility and support I’ve gotten from the Trial Verse community have been incredible. It’s a space where creativity thrives.",
    },
    {
      name: "Benjamin Ali",
      role: "Data Analyst",
      avatar: "BA",
      content:
        "I’ve connected with industry experts, shared insights, and grown professionally thanks to Trial Verse. The data-driven tools are a bonus.",
    },
  ];

  const testimonials2 = [
    {
      name: "Sarah Johnson",
      role: "Marketing Professional",
      avatar: "SJ",
      content:
        "Trial Verse has completely transformed my social media experience. The interface is intuitive and the community is incredibly supportive. I've made meaningful connections that have directly impacted both my personal and professional life.",
    },
    {
      name: "David Chen",
      role: "Software Developer",
      avatar: "DC",
      content:
        "As a developer, I appreciate the technical excellence of Trial Verse. The platform is responsive, secure, and offers features that other social networks don't. It's become my go-to place for connecting with other tech professionals.",
    },
    {
      name: "Maria Rodriguez",
      role: "Content Creator",
      avatar: "MR",
      content:
        "Trial Verse has been an invaluable platform for sharing my content. The engagement metrics and audience insights help me create better content, and the supportive community provides constructive feedback.",
    },
    {
      name: "James Wilson",
      role: "Small Business Owner",
      avatar: "JW",
      content:
        "When I decided to expand my business online, Trial Verse made it easy to connect with potential customers. The targeted networking features helped me find exactly the right audience for my products.",
    },
    {
      name: "Aisha Patel",
      role: "Digital Artist",
      avatar: "AP",
      content:
        "I’ve found a wonderful community of fellow artists on Trial Verse. Sharing my digital artwork and getting instant feedback has pushed my creativity to new heights.",
    },
    {
      name: "Leo Martinez",
      role: "Entrepreneur",
      avatar: "LM",
      content:
        "Trial Verse has helped me build a personal brand from the ground up. The tools for engagement are top-notch and have helped grow my network exponentially.",
    },
    {
      name: "Emily Nguyen",
      role: "UX Designer",
      avatar: "EN",
      content:
        "This platform values design and usability, and it shows. It's easy to navigate, and the user experience is one of the best I’ve seen in a social app.",
    },
    {
      name: "Michael Brown",
      role: "Musician",
      avatar: "MB",
      content:
        "Trial Verse helped me reach new fans and collaborate with other artists. The ability to showcase my music and get real feedback has been incredible.",
    },
    {
      name: "Chloe Adams",
      role: "Photographer",
      avatar: "CA",
      content:
        "I love how Trial Verse supports visual storytelling. My photos get more visibility here than on any other platform I’ve tried.",
    },
    {
      name: "Noah Smith",
      role: "Student",
      avatar: "NS",
      content:
        "Trial Verse helped me connect with mentors and professionals in the fields I want to enter. It's not just social—it's educational.",
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

    // Observe testimonial cards
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    testimonialCards.forEach((card, index) => {
      const element = card as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition =
        "opacity 0.6s ease-out, transform 0.6s ease-out";
      element.style.transitionDelay = `${0.4 + index * 0.15}s`;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2
            ref={headingRef}
            className="text-3xl font-bold tracking-tighter md:text-4xl"
          >
            What Our Users Say
          </h2>
          <p
            ref={textRef}
            className="text-muted-foreground md:text-xl max-w-[800px] mx-auto"
          >
            Don&apos;t just take our word for it - hear from some of our
            satisfied users.
          </p>
        </div>
        <div
          ref={cardsRef}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        >
          <Marquee pauseOnHover className="[--duration:45s]">
            {testimonials1.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:45s]">
            {testimonials2.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}

const ReviewCard = ({
  avatar,
  name,
  role,
  content,
}: {
  avatar: string;
  name: string;
  role: string;
  content: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarFallback>{avatar}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{content}</blockquote>
    </figure>
  );
};
