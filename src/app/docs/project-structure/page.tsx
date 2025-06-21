import Link from "next/link";
import { FolderIcon } from "lucide-react";
import { FileTree } from "@/components/ui/file-tree";
import { ScriptCopyBtn } from "@/components/ui/script-copy-btn";
import { CodeBlock } from "@/components/ui/code-block";

const backendStructure = [
  {
    name: "backend",
    type: "folder" as const,
    children: [
      {
        name: "node_modules",
        type: "folder" as const,
      },
      {
        name: "src",
        type: "folder" as const,
        children: [
          {
            name: "controllers",
            type: "folder" as const,
          },
          {
            name: "docs",
            type: "folder" as const,
          },
          {
            name: "middlewares",
            type: "folder" as const,
          },
          {
            name: "models",
            type: "folder" as const,
          },
          {
            name: "routes",
            type: "folder" as const,
          },
          {
            name: "types",
            type: "folder" as const,
          },
          {
            name: "utils",
            type: "folder" as const,
          },
          {
            name: "index.ts",
            type: "file" as const,
          },
        ],
      },
      {
        name: ".env",
        type: "file" as const,
      },
      {
        name: ".gitignore",
        type: "file" as const,
      },
      {
        name: "package-lock.json",
        type: "file" as const,
      },
      {
        name: "package.json",
        type: "file" as const,
      },
      {
        name: "tsconfig.json",
        type: "file" as const,
      },
      {
        name: "vercel.json",
        type: "file" as const,
      },
    ],
  },
];

const frontendStructure = [
  {
    name: "frontend",
    type: "folder" as const,
    children: [
      {
        name: "node_modules",
        type: "folder" as const,
      },
      {
        name: "public",
        type: "folder" as const,
      },
      {
        name: "src",
        type: "folder" as const,
        children: [
          {
            name: "components",
            type: "folder" as const,
            children: [
              {
                name: "commons",
                type: "folder" as const,
                children: [
                  {
                    name: "AppShell",
                    type: "folder" as const,
                  },
                  {
                    name: "PageHead",
                    type: "folder" as const,
                  },
                ],
              },
              {
                name: "layouts",
                type: "folder" as const,
              },
              {
                name: "magicui",
                type: "folder" as const,
              },
              {
                name: "ui",
                type: "folder" as const,
              },
              {
                name: "views",
                type: "folder" as const,
                children: [
                  {
                    name: "Auth",
                    type: "folder" as const,
                  },
                  {
                    name: "Chats",
                    type: "folder" as const,
                  },
                  {
                    name: "CreatePost",
                    type: "folder" as const,
                  },
                  {
                    name: "DetailPost",
                    type: "folder" as const,
                  },
                  {
                    name: "Home",
                    type: "folder" as const,
                  },
                  {
                    name: "Notifications",
                    type: "folder" as const,
                  },
                  {
                    name: "Profile",
                    type: "folder" as const,
                  },
                  {
                    name: "ResetPassword",
                    type: "folder" as const,
                  },
                  {
                    name: "Search",
                    type: "folder" as const,
                  },
                  {
                    name: "Settings",
                    type: "folder" as const,
                  },
                  {
                    name: "TwoFactorAuth",
                    type: "folder" as const,
                  },
                ],
              },
              {
                name: "ModeToggle.tsx",
                type: "file" as const,
              },
              {
                name: "theme-provider.tsx",
                type: "file" as const,
              },
            ],
          },
          {
            name: "config",
            type: "folder" as const,
          },
          {
            name: "constants",
            type: "folder" as const,
          },
          {
            name: "context",
            type: "folder" as const,
          },
          {
            name: "hooks",
            type: "folder" as const,
          },
          {
            name: "lib",
            type: "folder" as const,
          },
          {
            name: "pages",
            type: "folder" as const,
            children: [
              {
                name: "api",
                type: "folder" as const,
                children: [
                  {
                    name: "auth",
                    type: "folder" as const,
                  },
                  {
                    name: "chats",
                    type: "folder" as const,
                  },
                  {
                    name: "create",
                    type: "folder" as const,
                  },
                  {
                    name: "notifications",
                    type: "folder" as const,
                  },
                  {
                    name: "posts",
                    type: "folder" as const,
                  },
                  {
                    name: "profile",
                    type: "folder" as const,
                  },
                  {
                    name: "search",
                    type: "folder" as const,
                  },
                  {
                    name: "settings",
                    type: "folder" as const,
                    children: [
                      {
                        name: "_app.tsx",
                        type: "file" as const,
                      },
                      {
                        name: "_document.tsx",
                        type: "file" as const,
                      },
                      {
                        name: "index.tsx",
                        type: "file" as const,
                      },
                    ],
                  },
                ],
              },
              {
                name: "services",
                type: "folder" as const,
              },
              {
                name: "styles",
                type: "folder" as const,
              },
              {
                name: "types",
                type: "folder" as const,
                children: [
                  {
                    name: "Auth.d.ts",
                    type: "file" as const,
                  },
                  {
                    name: "Comment.d.ts",
                    type: "file" as const,
                  },
                  {
                    name: "File.d.ts",
                    type: "file" as const,
                  },
                  {
                    name: "Message.d.ts",
                    type: "file" as const,
                  },
                  {
                    name: "Notification.d.ts",
                    type: "file" as const,
                  },
                  {
                    name: "OTP.d.ts",
                    type: "file" as const,
                  },
                  {
                    name: "Post.d.ts",
                    type: "file" as const,
                  },
                  {
                    name: "User.d.ts",
                    type: "file" as const,
                  },
                ],
              },
              {
                name: "middleware.ts",
                type: "file" as const,
              },
            ],
          },
        ],
      },
      {
        name: ".env.local",
        type: "file" as const,
      },
      {
        name: ".gitignore",
        type: "file" as const,
      },
      {
        name: ".prettierrc",
        type: "file" as const,
      },
      {
        name: "components.json",
        type: "file" as const,
      },
      {
        name: "eslint.config.mjs",
        type: "file" as const,
      },
      {
        name: "next-env.d.ts",
        type: "file" as const,
      },
      {
        name: "next.config.ts",
        type: "file" as const,
      },
      {
        name: "package-lock.json",
        type: "file" as const,
      },
      {
        name: "package.json",
        type: "file" as const,
      },
      {
        name: "postcss.config.mjs",
        type: "file" as const,
      },
      {
        name: "README.md",
        type: "file" as const,
      },
      {
        name: "tailwind.config.ts",
        type: "file" as const,
      },
      {
        name: "tsconfig.json",
        type: "file" as const,
      },
    ],
  },
];

export default function ProjectStructurePage() {
  return (
    <div className="max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Project Structure</h1>
        <p className="text-xl text-muted-foreground">
          Understanding the organization of the Trial Verse codebase.
        </p>
      </div>

      <div className="space-y-8">
        <section id="overview" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
          <p className="text-muted-foreground leading-7">
            Trial Verse follows a monorepo structure with separate directories
            for the frontend and backend code. This allows for clear separation
            of concerns while keeping the entire codebase in a single
            repository.
          </p>
        </section>

        <section id="backend-structure" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Backend Structure
          </h2>
          <p className="text-muted-foreground leading-7">
            The backend follows a modular structure with controllers, models,
            routes, and middleware organized by feature. Built with Express.js
            and TypeScript for type safety.
          </p>

          <FileTree
            data={backendStructure}
            className="max-h-96 overflow-y-auto"
          />

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Key Backend Files</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Frontend Configuration</h4>
                <CodeBlock title="next.config.ts" language="typescript">
                  {`/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'backend-trialverse.vercel.app'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
  },
}

module.exports = nextConfig`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Socket.IO Client Setup</h4>
                <CodeBlock title="utils/socket.ts" language="typescript">
                  {`import { io, Socket } from 'socket.io-client'

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3000'

class SocketService {
  private socket: Socket | null = null

  connect(userId: string) {
    if (!this.socket) {
      this.socket = io(SOCKET_URL, {
        query: { userId },
        transports: ['websocket', 'polling']
      })

      this.socket.on('connect', () => {
        console.log('Connected to server:', this.socket?.id)
      })

      this.socket.on('disconnect', () => {
        console.log('Disconnected from server')
      })

      this.socket.on('test', (message) => {
        console.log('Test message:', message)
      })
    }
    return this.socket
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
  }

  getSocket() {
    return this.socket
  }
}

export const socketService = new SocketService()
export default socketService`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </section>

        <section id="frontend-structure" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Frontend Structure
          </h2>
          <p className="text-muted-foreground leading-7">
            The frontend follows the Next.js App Router structure, with
            components, hooks, and utilities organized in a modular way. Built
            with React 19, Next.js 15, and TypeScript.
          </p>

          <FileTree
            data={frontendStructure}
            className="max-h-96 overflow-y-auto"
          />

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">
              Installation Commands
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Backend Setup</h4>
                <ScriptCopyBtn>
                  {`# Clone and setup backend
git clone https://github.com/trial-verse/backend.git
cd backend
npm install
cp .env.example .env
npm run dev`}
                </ScriptCopyBtn>
              </div>

              <div>
                <h4 className="font-medium mb-2">Frontend Setup</h4>
                <ScriptCopyBtn>
                  {`# Clone and setup frontend
git clone https://github.com/trial-verse/frontend.git
cd frontend
npm install
cp .env.local.example .env.local
npm run dev`}
                </ScriptCopyBtn>
              </div>
            </div>
          </div>
        </section>

        <section id="key-directories" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Key Directories</h2>
          <p className="text-muted-foreground leading-7">
            Here are the most important directories in the project:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Backend Directories</h3>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <FolderIcon className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">controllers/</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    API route handlers and business logic
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <FolderIcon className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">models/</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    MongoDB schemas and data models
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <FolderIcon className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">routes/</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    API endpoint definitions and routing
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <FolderIcon className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">middlewares/</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Authentication and validation middleware
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Frontend Directories</h3>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <FolderIcon className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">components/</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Reusable React components and UI elements
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <FolderIcon className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">pages/</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Next.js pages and API routes
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <FolderIcon className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">hooks/</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Custom React hooks for state management
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <FolderIcon className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">types/</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    TypeScript type definitions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="configuration-files" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Configuration Files
          </h2>
          <p className="text-muted-foreground leading-7">
            Important configuration files in the project:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Package.json Dependencies
              </h3>
              <CodeBlock title="Frontend Dependencies" language="json">
                {`{
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@heroui/react": "^2.7.9",
    "@hookform/resolvers": "^5.0.1",
    "@radix-ui/react-avatar": "^1.1.10",
    "@tanstack/react-query": "^5.77.2",
    "axios": "^1.9.0",
    "next": "15.1.8",
    "next-auth": "^4.24.11",
    "react": "^19.0.0",
    "socket.io-client": "^4.8.1",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Environment Variables
              </h3>
              <CodeBlock title=".env.local (Frontend)" language="bash">
                {`NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:3000
NEXT_PUBLIC_ASSET_URL=http://localhost:3000/uploads

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your_nextauth_secret

# OAuth Providers
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section id="next-steps" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Next Steps</h2>
          <p className="text-muted-foreground leading-7">
            Now that you understand the project structure, you can:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link
                href="/docs/installation"
                className="text-primary hover:underline"
              >
                Set up your development environment
              </Link>
            </li>
            <li>
              <Link href="/docs/api" className="text-primary hover:underline">
                Explore the API documentation
              </Link>
            </li>
            <li>
              <Link
                href="/docs/authentication"
                className="text-primary hover:underline"
              >
                Learn about authentication implementation
              </Link>
            </li>
            <li>
              <Link
                href="/docs/websockets"
                className="text-primary hover:underline"
              >
                Understand real-time features with WebSockets
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
