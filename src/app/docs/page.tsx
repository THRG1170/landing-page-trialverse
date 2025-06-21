import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="max-w-3xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to the Trial Verse documentation!
        </p>
      </div>

      <div className="space-y-8">
        <section id="what-is-trial-verse" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            What is Trial Verse?
          </h2>
          <p className="text-muted-foreground leading-7">
            Trial Verse is a modern social platform designed to create
            meaningful connections between users. Our platform combines
            cutting-edge technology with thoughtful design to deliver an
            unparalleled social experience.
          </p>
          <p className="text-muted-foreground leading-7">
            Whether you&apos;re looking to connect with friends, network with
            professionals, or discover content that resonates with your
            interests, Trial Verse offers a space designed to help you achieve
            your social goals.
          </p>
        </section>

        <section id="tech-stack" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Our Technology Stack
          </h2>
          <p className="text-muted-foreground leading-7">
            Trial Verse is built using a modern full-stack architecture with
            cutting-edge technologies for optimal performance and user
            experience:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Next.js 15</span> - Latest
                    React framework with App Router for server-side rendering
                    and static generation
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">React 19</span> - Latest
                    version of React with enhanced performance and features
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">HeroUI & Radix UI</span> -
                    Modern component libraries for beautiful, accessible
                    interfaces
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Tailwind CSS</span> -
                    Utility-first CSS framework with custom animations
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Motion</span> - Advanced
                    animation library for smooth, performant animations
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">TanStack Query</span> -
                    Powerful data fetching and state management
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">NextAuth.js</span> - Complete
                    authentication solution for Next.js
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Socket.IO Client</span> -
                    Real-time bidirectional communication
                  </div>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Express.js 5</span> - Fast,
                    minimalist web framework for Node.js
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">MongoDB & Mongoose</span> -
                    NoSQL database with elegant object modeling
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">TypeScript</span> - Type-safe
                    JavaScript for better development experience
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Socket.IO</span> - Real-time
                    engine for instant messaging and live features
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Passport.js</span> -
                    Authentication middleware with Google & Twitter OAuth
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Cloudinary</span> -
                    Cloud-based image and video management
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Swagger</span> - API
                    documentation and testing interface
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Twilio</span> - SMS and
                    communication services
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold mb-2">Additional Technologies</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-medium">Form Management:</span> React Hook
                Form with Zod validation
              </div>
              <div>
                <span className="font-medium">Audio:</span> Howler.js for sound
                effects and audio playback
              </div>
              <div>
                <span className="font-medium">Date Handling:</span> Date-fns and
                Moment.js for time operations
              </div>
              <div>
                <span className="font-medium">Email:</span> Nodemailer for
                transactional emails
              </div>
              <div>
                <span className="font-medium">QR Codes:</span> QRCode generation
                for sharing features
              </div>
              <div>
                <span className="font-medium">Development:</span> ESLint,
                Prettier, and TypeScript for code quality
              </div>
            </div>
          </div>
        </section>

        <section id="how-to-use-docs" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            How to use the docs
          </h2>
          <p className="text-muted-foreground leading-7">
            The documentation is organized into several sections:
          </p>
          <ul className="space-y-4 mt-4">
            <li className="flex items-start">
              <div className="mr-2 rounded-full bg-primary/10 p-1">
                <ChevronRight className="h-4 w-4 text-primary" />
              </div>
              <div>
                <Link
                  href="/docs/installation"
                  className="font-medium text-primary hover:underline"
                >
                  Getting Started
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  Step-by-step tutorials to help you set up the project and
                  learn the core features.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 rounded-full bg-primary/10 p-1">
                <ChevronRight className="h-4 w-4 text-primary" />
              </div>
              <div>
                <Link
                  href="/docs/frontend"
                  className="font-medium text-primary hover:underline"
                >
                  Core Concepts
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  Detailed explanations of the frontend, backend, database, and
                  authentication systems.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 rounded-full bg-primary/10 p-1">
                <ChevronRight className="h-4 w-4 text-primary" />
              </div>
              <div>
                <Link
                  href="/docs/ui/overview"
                  className="font-medium text-primary hover:underline"
                >
                  UI Components
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  Overview of the UI components and animation systems used in
                  the project.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 rounded-full bg-primary/10 p-1">
                <ChevronRight className="h-4 w-4 text-primary" />
              </div>
              <div>
                <Link
                  href="/docs/deployment/frontend"
                  className="font-medium text-primary hover:underline"
                >
                  Deployment
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  Instructions for deploying the frontend, backend, and database
                  to production.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section id="next-steps" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Next Steps</h2>
          <p className="text-muted-foreground leading-7">
            Ready to get started with Trial Verse? Check out the installation
            guide to set up your development environment.
          </p>
          <div className="mt-4">
            <Link
              href="/docs/installation"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Installation Guide
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
