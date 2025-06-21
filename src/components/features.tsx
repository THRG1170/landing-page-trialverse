"use client";

import { useEffect, useRef } from "react";
// import { BookOpen, Users, Award, Zap } from "lucide-react";
import { BentoCard } from "./magicui/bento-grid";
import { Users, Zap, BookOpen, Award } from "lucide-react";
import Image from "next/image";

const features = [
  {
    Icon: () => <Users className="h-10 w-10 text-primary" />,
    name: "Connect with Friends",
    description:
      "Build meaningful connections with friends, family, and like-minded individuals from around the world.",
    href: "https://trialverse-social.vercel.app/",
    cta: "Visit",
    className: "col-span-3 lg:col-span-2 xl:col-span-1 h-[400px]",
    background: (
      <div className="absolute top-0 [--duration:20s] h-[600px] w-full right-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110">
        <Image
          className="h-full w-full object-cover "
          src="/ana-curcan-e1jnq-o7chQ-unsplash.jpg"
          alt="Connect with Friends"
          width={300}
          height={800}
        />
      </div>
    ),
  },
  {
    Icon: () => <Zap className="h-10 w-10 text-primary" />,
    name: "Real-time Engagement",
    description:
      "Enjoy seamless real-time interactions with instant messaging, live streams, and interactive posts.",
    href: "https://trialverse-social.vercel.app/",
    cta: "Visit",
    className: "col-span-3 lg:col-span-2 xl:col-span-1 h-[400px]",
    background: (
      <div className="absolute top-0 [--duration:20s] h-[600px] w-full right-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110">
        <Image
          className="h-full w-full object-cover "
          src="/khalid-boutchich-OhaUa2sIPSs-unsplash.jpg"
          alt="Real-time Engagement"
          width={300}
          height={800}
        />
      </div>
    ),
  },
  {
    Icon: () => <BookOpen className="h-10 w-10 text-primary" />,
    name: "Content Discovery",
    description:
      "Discover content tailored to your interests through our advanced recommendation algorithm.",
    href: "https://trialverse-social.vercel.app/",
    cta: "Visit",
    className: "col-span-3 lg:col-span-2 xl:col-span-1 h-[400px]",
    background: (
      <div className="absolute top-0 [--duration:20s] h-[600px] w-full right-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110">
        <Image
          className="h-full w-full object-cover "
          src="/george-catalina-OrcimrDwTxY-unsplash.jpg"
          alt="Content Discovery"
          width={300}
          height={800}
        />
      </div>
    ),
  },
  {
    Icon: () => <Award className="h-10 w-10 text-primary" />,
    name: "Privacy First",
    description:
      "Your data is yours. We prioritize user privacy and security with industry-leading protection measures.",
    href: "https://trialverse-social.vercel.app/",
    cta: "Visit",
    className: "col-span-3 lg:col-span-2 xl:col-span-1 h-[400px]",
    background: (
      <div className="absolute top-0 [--duration:20s] h-[600px] w-full right-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-110">
        <Image
          className="h-full w-full object-cover "
          src="/radu-prodan-v3-iOIKnjSI-unsplash.jpg"
          alt="Privacy First"
          width={300}
          height={800}
        />
      </div>
    ),
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // const features = [
  //   {
  //     icon: <Users className="h-10 w-10 text-primary" />,
  //     title: "Connect with Friends",
  //     description:
  //       "Build meaningful connections with friends, family, and like-minded individuals from around the world.",
  //   },
  //   {
  //     icon: <Zap className="h-10 w-10 text-primary" />,
  //     title: "Real-time Engagement",
  //     description:
  //       "Enjoy seamless real-time interactions with instant messaging, live streams, and interactive posts.",
  //   },
  //   {
  //     icon: <BookOpen className="h-10 w-10 text-primary" />,
  //     title: "Content Discovery",
  //     description:
  //       "Discover content tailored to your interests through our advanced recommendation algorithm.",
  //   },
  //   {
  //     icon: <Award className="h-10 w-10 text-primary" />,
  //     title: "Privacy First",
  //     description:
  //       "Your data is yours. We prioritize user privacy and security with industry-leading protection measures.",
  //   },
  // ];

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

    // Observe feature cards
    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach((card, index) => {
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
    <section
      ref={sectionRef}
      className="py-12 md:py-20 bg-muted/50 rounded-3xl mx-4 md:mx-8"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2
            ref={headingRef}
            className="text-3xl font-bold tracking-tighter md:text-4xl"
          >
            Why Trial Verse?
          </h2>
          <p
            ref={textRef}
            className="text-muted-foreground md:text-xl max-w-[800px] mx-auto"
          >
            Trial Verse offers a unique social media experience that sets us
            apart from other platforms.
          </p>
        </div>
        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))} */}

          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
