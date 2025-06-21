"use client";

import Link from "next/link";
import {
  Zap,
  Users,
  MessageCircle,
  Wifi,
  WifiOff,
  Code,
  Server,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WebSocketsPage() {
  return (
    <div className="max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          WebSocket Documentation
        </h1>
        <p className="text-xl text-muted-foreground">
          Real-time communication implementation using Socket.IO in Trial Verse.
        </p>
      </div>

      <div className="space-y-8">
        <section id="overview" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            WebSocket Overview
          </h2>
          <p className="text-muted-foreground leading-7">
            Trial Verse uses Socket.IO for real-time bidirectional communication
            between clients and the server. This enables features like live user
            presence, instant messaging, real-time notifications, and live
            updates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Real-time Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Instant communication with automatic fallback to HTTP
                  long-polling when WebSockets aren&apos;t available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  User Presence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track online users in real-time with automatic cleanup when
                  users disconnect.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Live Messaging
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Instant message delivery with delivery confirmations and
                  typing indicators.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="server-configuration" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Server Configuration
          </h2>
          <p className="text-muted-foreground leading-7">
            The Socket.IO server is configured with CORS support and user
            tracking capabilities.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Connection Configuration
              </h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// Connection Configuration
const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3000'

// Available endpoints
const endpoints = {
  production: 'https://backend-trialverse.vercel.app',
  development: 'http://localhost:3000'
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="client-integration" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Client Integration
          </h2>
          <p className="text-muted-foreground leading-7">
            Connect to the Socket.IO server from your React application using
            the Socket.IO client library.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Installation</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>npm install socket.io-client</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Basic Connection</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// utils/socket.ts
import { io, Socket } from 'socket.io-client'

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
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                React Hook Implementation
              </h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// hooks/useSocket.ts
import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import { socketService } from '@/utils/socket'
import { useSession } from 'next-auth/react'

export function useSocket() {
  const { data: session } = useSession()
  const [socket, setSocket] = useState<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState<string[]>([])

  useEffect(() => {
    if (session?.user?.id) {
      const socketInstance = socketService.connect(session.user.id)
      setSocket(socketInstance)

      socketInstance.on('connect', () => {
        setIsConnected(true)
      })

      socketInstance.on('disconnect', () => {
        setIsConnected(false)
      })

      socketInstance.on('getOnlineUsers', (users: string[]) => {
        setOnlineUsers(users)
      })

      return () => {
        socketService.disconnect()
        setSocket(null)
        setIsConnected(false)
      }
    }
  }, [session?.user?.id])

  return {
    socket,
    isConnected,
    onlineUsers
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Socket Events</h2>
          <p className="text-muted-foreground leading-7">
            Available Socket.IO events for real-time communication in Trial
            Verse.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Server Events (Outgoing)
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-blue-500">EMIT</Badge>
                  <code className="flex-1">test</code>
                  <span className="text-sm text-muted-foreground">
                    Connection confirmation message
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-green-500">BROADCAST</Badge>
                  <code className="flex-1">getOnlineUsers</code>
                  <span className="text-sm text-muted-foreground">
                    List of currently online users
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-purple-500">PRIVATE</Badge>
                  <code className="flex-1">newMessage</code>
                  <span className="text-sm text-muted-foreground">
                    New message notification
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-orange-500">BROADCAST</Badge>
                  <code className="flex-1">newNotification</code>
                  <span className="text-sm text-muted-foreground">
                    New notification for user
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Client Events (Incoming)
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-gray-500">LISTEN</Badge>
                  <code className="flex-1">connect</code>
                  <span className="text-sm text-muted-foreground">
                    Socket connection established
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-gray-500">LISTEN</Badge>
                  <code className="flex-1">disconnect</code>
                  <span className="text-sm text-muted-foreground">
                    Socket connection lost
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-yellow-500">SEND</Badge>
                  <code className="flex-1">sendMessage</code>
                  <span className="text-sm text-muted-foreground">
                    Send message to specific user
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-cyan-500">SEND</Badge>
                  <code className="flex-1">typing</code>
                  <span className="text-sm text-muted-foreground">
                    User typing indicator
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="real-time-features" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Real-time Features Implementation
          </h2>
          <p className="text-muted-foreground leading-7">
            Examples of implementing common real-time features using Socket.IO.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Online User Presence
              </h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// components/OnlineUsers.tsx
import { useSocket } from '@/hooks/useSocket'

export function OnlineUsers() {
  const { onlineUsers, isConnected } = useSocket()

  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <div className={\`w-2 h-2 rounded-full \${isConnected ? 'bg-green-500' : 'bg-red-500'}\`} />
        <span className="font-medium">
          {isConnected ? 'Connected' : 'Disconnected'}
        </span>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Online Users ({onlineUsers.length})</h3>
        <div className="space-y-1">
          {onlineUsers.map(userId => (
            <div key={userId} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm">User {userId}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Real-time Messaging
              </h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// hooks/useMessages.ts
import { useEffect, useState } from 'react'
import { useSocket } from './useSocket'

interface Message {
  id: string
  senderId: string
  receiverId: string
  text: string
  timestamp: Date
}

export function useMessages(conversationId: string) {
  const { socket } = useSocket()
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    if (socket) {
      // Listen for new messages
      socket.on('newMessage', (message: Message) => {
        setMessages(prev => [...prev, message])
      })

      // Join conversation room
      socket.emit('joinConversation', conversationId)

      return () => {
        socket.off('newMessage')
        socket.emit('leaveConversation', conversationId)
      }
    }
  }, [socket, conversationId])

  const sendMessage = (text: string, receiverId: string) => {
    if (socket) {
      const message = {
        text,
        receiverId,
        conversationId,
        timestamp: new Date()
      }
      socket.emit('sendMessage', message)
    }
  }

  return {
    messages,
    sendMessage
  }
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Live Notifications</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// hooks/useNotifications.ts
import { useEffect, useState } from 'react'
import { useSocket } from './useSocket'
import { toast } from 'sonner'

interface Notification {
  id: string
  userId: string
  type: 'like' | 'comment' | 'follow' | 'message'
  message: string
  timestamp: Date
  read: boolean
}

export function useNotifications() {
  const { socket } = useSocket()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    if (socket) {
      socket.on('newNotification', (notification: Notification) => {
        setNotifications(prev => [notification, ...prev])
        setUnreadCount(prev => prev + 1)
        
        // Show toast notification
        toast(notification.message, {
          description: 'New notification received',
          action: {
            label: 'View',
            onClick: () => {
              // Handle notification click
            }
          }
        })
      })

      return () => {
        socket.off('newNotification')
      }
    }
  }, [socket])

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId 
          ? { ...notif, read: true }
          : notif
      )
    )
    setUnreadCount(prev => Math.max(0, prev - 1))
  }

  return {
    notifications,
    unreadCount,
    markAsRead
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="server-integration" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">API Endpoints</h2>
          <p className="text-muted-foreground leading-7">
            How to interact with the server via API endpoints to trigger
            WebSocket events.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Sending Messages</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// API endpoint to send a message
// POST /api/messages/send/:receiverId
// Body: { text: string, image?: string }
// Example:
// fetch('/api/messages/send/user123', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ text: 'Hello!', image: 'optional-image-url' })
// })`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Liking a Post</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// API endpoint to like/unlike a post
// POST /api/posts/:postId/like
// Example:
// fetch('/api/posts/post456/like', {
//   method: 'POST'
// })`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="connection-states" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Connection States & Error Handling
          </h2>
          <p className="text-muted-foreground leading-7">
            Handle different connection states and implement proper error
            handling for robust real-time features.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-green-500" />
                  Connected State
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Real-time events active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Instant message delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Live presence updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <WifiOff className="h-5 w-5 text-red-500" />
                  Disconnected State
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>Automatic reconnection attempts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>Fallback to HTTP polling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>Queue messages for retry</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Connection Error Handling
            </h3>
            <div className="bg-muted rounded-md p-4 overflow-x-auto">
              <pre className="text-sm">
                <code>
                  {`// Enhanced socket service with error handling
class SocketService {
  private socket: Socket | null = null
  private reconnectAttempts = 0
  private maxReconnectAttempts = 5

  connect(userId: string) {
    if (!this.socket) {
      this.socket = io(SOCKET_URL, {
        query: { userId },
        transports: ['websocket', 'polling'],
        timeout: 20000,
        forceNew: true
      })

      this.socket.on('connect', () => {
        console.log('Connected to server:', this.socket?.id)
        this.reconnectAttempts = 0
      })

      this.socket.on('disconnect', (reason) => {
        console.log('Disconnected:', reason)
        if (reason === 'io server disconnect') {
          // Server initiated disconnect, reconnect manually
          this.socket?.connect()
        }
      })

      this.socket.on('connect_error', (error) => {
        console.error('Connection error:', error)
        this.reconnectAttempts++
        
        if (this.reconnectAttempts >= this.maxReconnectAttempts) {
          console.error('Max reconnection attempts reached')
          // Show user notification about connection issues
        }
      })

      this.socket.on('reconnect', (attemptNumber) => {
        console.log('Reconnected after', attemptNumber, 'attempts')
        this.reconnectAttempts = 0
      })
    }
    return this.socket
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section id="best-practices" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
          <p className="text-muted-foreground leading-7">
            Follow these best practices for optimal Socket.IO implementation in
            production.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Server className="h-5 w-5 text-blue-500" />
                  Server-side
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>• Use rooms for targeted messaging</div>
                  <div>• Implement rate limiting for events</div>
                  <div>• Clean up user mappings on disconnect</div>
                  <div>• Use Redis adapter for scaling</div>
                  <div>• Validate all incoming events</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="h-5 w-5 text-green-500" />
                  Client-side
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>• Handle connection states gracefully</div>
                  <div>• Implement message queuing for offline</div>
                  <div>• Use React hooks for state management</div>
                  <div>• Clean up event listeners properly</div>
                  <div>• Show connection status to users</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="next-steps" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Next Steps</h2>
          <p className="text-muted-foreground leading-7">
            Continue exploring the Trial Verse documentation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">API Documentation</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn about REST API endpoints and database schema.
                </p>
                <Link
                  href="/docs/api"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View API Docs →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Authentication Guide</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Implement secure authentication with JWT tokens.
                </p>
                <Link
                  href="/docs/authentication"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View Auth Guide →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
