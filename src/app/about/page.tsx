"use client";

import Image from "next/image";
import { AnimatedTooltip, IconKey } from "@/components/ui/animated-tooltip";

interface SocialType {
  id: number;
  name: string;
  designation: string;
  icon: IconKey;
  href: string;
}

const socialLinksAriel: SocialType[] = [
  {
    id: 1,
    name: "Instagram",
    designation: "@arielhutomoo___",
    icon: "instagram",
    href: "https://www.instagram.com/arielhutomoo___",
  },
  {
    id: 2,
    name: "LinkedIn",
    designation: "No LinkedIn",
    icon: "linkedin",
    href: "#",
  },
  {
    id: 3,
    name: "GitHub",
    designation: "github.com/arielhutomo",
    icon: "github",
    href: "https://github.com/Arielhutomo",
  },
];
const socialLinksTriputra: SocialType[] = [
  {
    id: 1,
    name: "Instagram",
    designation: "@triputraharza",
    icon: "instagram",
    href: "https://www.instagram.com/triputraharza",
  },
  {
    id: 2,
    name: "LinkedIn",
    designation: "linkedin.com/in/triputra-harza",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/triputra-harza-038b66334/",
  },
  {
    id: 3,
    name: "GitHub",
    designation: "github.com/THRG1170",
    icon: "github",
    href: "https://github.com/THRG1170",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Combined About & Story Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
              About Trial Verse
            </h1>
            <p className="text-xl text-muted-foreground">
              We&#39;re on a mission to transform how people connect and share
              experiences online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Trial Verse was founded with a simple yet powerful vision: to
                  create a social platform where connections are meaningful and
                  interactions are valuable. We believe that social media should
                  enhance our lives, not distract from them.
                </p>
                <p>
                  Our platform combines cutting-edge technology with thoughtful
                  design to deliver an unparalleled social experience. Whether
                  you&#39;re looking to connect with friends, network with
                  professionals, or discover content that resonates with your
                  interests, Trial Verse offers a space designed to help you
                  achieve your social goals.
                </p>
                <p>
                  What started as a small project between two young tech
                  enthusiasts has grown into a platform that prioritizes user
                  privacy, authentic connections, and meaningful engagement.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Trial Verse team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founders Section - Alternating Layout */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Meet Our Founders
            </h2>
            <p className="text-muted-foreground text-lg">
              The visionaries behind Trial Verse who are transforming social
              media with their unique expertise and passion.
            </p>
            <div className="flex justify-center mt-6">
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Ariel Hutomo - First founder (image on left) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div
              className="relative w-full max-w-md mx-auto lg:mx-0"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-primary/20">
                <Image
                  src="/ariel-hutomo.jpg"
                  alt="Ariel Hutomo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-primary font-semibold text-lg mb-2">
                  Co-Founder & Data Scientist
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                  Ariel Hutomo
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&#39;m an intermediate Data Scientist and a 17-year-old student
                passionate about leveraging data to create personalized
                experiences. At Trial Verse, I work on developing algorithms
                that help connect users with content and people that truly
                matter to them. My goal is to make social media more meaningful
                through intelligent data analysis and machine learning.
              </p>
              <div className="flex space-x-4 pt-4">
                <AnimatedTooltip items={socialLinksAriel} />
              </div>
            </div>
          </div>

          {/* Triputra Harza - Second founder (image on right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <p className="text-primary font-semibold text-lg mb-2">
                  Co-Founder & Fullstack Developer
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                  Triputra Harza
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&#39;m an intermediate Fullstack Developer and a 17-year-old
                student with a passion for creating seamless digital
                experiences. At Trial Verse, I lead the development of our
                platform, ensuring it&#39;s robust, scalable, and user-friendly.
                I believe in building technology that brings people together in
                meaningful ways.
              </p>
              <div className="flex space-x-4 pt-4">
                <AnimatedTooltip items={socialLinksTriputra} />
              </div>
            </div>
            <div
              className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto order-1 lg:order-2"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-primary/20">
                <Image
                  src="/placeholder.svg"
                  alt="Triputra Harza"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="flex justify-center mt-20">
            <div className="h-1 w-32 bg-primary/30 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
