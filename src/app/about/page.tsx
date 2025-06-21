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
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              About Trial Verse
            </h1>
            <p className="text-xl text-muted-foreground">
              We&#39;re on a mission to transform how people connect and share
              experiences online.
            </p>
          </div>

          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">
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
                src="/teamwork.jpg"
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
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Meet Our Founders
            </h2>
            <p className="text-lg text-muted-foreground">
              The visionaries behind Trial Verse who are transforming social
              media with their unique expertise and passion.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-20 h-1 rounded-full bg-primary"></div>
            </div>
          </div>

          {/* Ariel Hutomo - First founder (image on left) */}
          <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-2">
            <div
              className="relative w-full max-w-md mx-auto lg:mx-0"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="w-full h-full overflow-hidden border-4 shadow-lg rounded-3xl border-primary/20">
                <Image
                  src="/ariel-hutomo2.jpg"
                  alt="Ariel Hutomo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-lg font-semibold text-primary">
                  Co-Founder & Data Scientist
                </p>
                <h3 className="text-4xl font-bold md:text-5xl text-foreground">
                  Ariel Hutomo
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&#39;m an intermediate Data Scientist and a 17-year-old student
                passionate about leveraging data to create personalized
                experiences. At Trial Verse, I work on developing algorithms
                that help connect users with content and people that truly
                matter to them. My goal is to make social media more meaningful
                through intelligent data analysis and machine learning.
              </p>
              <div className="flex pt-4 space-x-4">
                <AnimatedTooltip items={socialLinksAriel} />
              </div>
            </div>
          </div>

          {/* Triputra Harza - Second founder (image on right) */}
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="order-2 space-y-6 lg:order-1">
              <div>
                <p className="mb-2 text-lg font-semibold text-primary">
                  Co-Founder & Fullstack Developer
                </p>
                <h3 className="text-4xl font-bold md:text-5xl text-foreground">
                  Triputra Harza
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&#39;m an intermediate Fullstack Developer and a 17-year-old
                student with a passion for creating seamless digital
                experiences. At Trial Verse, I lead the development of our
                platform, ensuring it&#39;s robust, scalable, and user-friendly.
                I believe in building technology that brings people together in
                meaningful ways.
              </p>
              <div className="flex pt-4 space-x-4">
                <AnimatedTooltip items={socialLinksTriputra} />
              </div>
            </div>
            <div
              className="relative order-1 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto lg:order-2"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="w-full h-full overflow-hidden border-4 shadow-lg rounded-3xl border-primary/20">
                <Image
                  src="/triputra2.jpg"
                  alt="Triputra Harza"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="flex justify-center mt-20">
            <div className="w-32 h-1 rounded-full bg-primary/30"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
