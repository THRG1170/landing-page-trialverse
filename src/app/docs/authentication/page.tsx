"use client";

import Link from "next/link";
import { Key, Shield, User, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AuthenticationPage() {
  return (
    <div className="max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Authentication Guide
        </h1>
        <p className="text-xl text-muted-foreground">
          Complete guide to implementing authentication in Trial Verse
          applications.
        </p>
      </div>

      <div className="space-y-8">
        <section id="overview" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Authentication Overview
          </h2>
          <p className="text-muted-foreground leading-7">
            Trial Verse uses JWT (JSON Web Tokens) for authentication. The
            system supports user registration, login, profile management, and
            account activation through email verification.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  JWT Tokens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Secure, stateless authentication using JSON Web Tokens with
                  configurable expiration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Email Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Account activation through email verification with secure
                  activation codes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Profile Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Complete user profile management with secure password updates
                  and profile editing.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="user-registration" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            User Registration
          </h2>
          <p className="text-muted-foreground leading-7">
            Register new users with email verification. Users must activate
            their accounts before they can log in.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Endpoint</h3>
              <div className="flex items-center gap-3 p-3 border rounded-lg bg-muted/50">
                <Badge className="bg-green-500">POST</Badge>
                <code>/auth/register</code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Request Body</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`{
  "fullname": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123",
  "bio": "Software developer passionate about technology"
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Response</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`{
  "success": true,
  "message": "User registered successfully. Please check your email for activation.",
  "data": {
    "user": {
      "id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "fullname": "John Doe",
      "username": "johndoe",
      "email": "john@example.com",
      "role": "user",
      "isActivated": false
    }
  }
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Frontend Implementation
              </h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// Using React Hook Form with Zod validation
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'

const registerSchema = z.object({
  fullname: z.string().min(2, 'Full name must be at least 2 characters'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  bio: z.string().optional()
})

type RegisterForm = z.infer<typeof registerSchema>

export function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data: RegisterForm) => {
    try {
      const response = await axios.post('/api/auth/register', data)
      console.log('Registration successful:', response.data)
      // Redirect to activation page or show success message
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('fullname')} placeholder="Full Name" />
      {errors.fullname && <span>{errors.fullname.message}</span>}
      
      <input {...register('username')} placeholder="Username" />
      {errors.username && <span>{errors.username.message}</span>}
      
      <input {...register('email')} type="email" placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input {...register('password')} type="password" placeholder="Password" />
      {errors.password && <span>{errors.password.message}</span>}
      
      <textarea {...register('bio')} placeholder="Bio (optional)" />
      
      <button type="submit">Register</button>
    </form>
  )
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="account-activation" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Account Activation
          </h2>
          <p className="text-muted-foreground leading-7">
            After registration, users receive an email with an activation code.
            They must activate their account before logging in.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Endpoint</h3>
              <div className="flex items-center gap-3 p-3 border rounded-lg bg-muted/50">
                <Badge className="bg-green-500">POST</Badge>
                <code>/auth/activation</code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Request Body</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`{
  "email": "john@example.com",
  "activationCode": "ABC123XYZ"
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Frontend Implementation
              </h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// Account activation component
import { useState } from 'react'
import axios from 'axios'

export function ActivationForm() {
  const [email, setEmail] = useState('')
  const [activationCode, setActivationCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleActivation = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post('/api/auth/activation', {
        email,
        activationCode
      })
      
      console.log('Account activated:', response.data)
      // Redirect to login page
    } catch (error) {
      console.error('Activation failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleActivation}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="text"
        value={activationCode}
        onChange={(e) => setActivationCode(e.target.value)}
        placeholder="Activation Code"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Activating...' : 'Activate Account'}
      </button>
    </form>
  )
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="user-login" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">User Login</h2>
          <p className="text-muted-foreground leading-7">
            Authenticate users and receive a JWT token for subsequent API
            requests.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Endpoint</h3>
              <div className="flex items-center gap-3 p-3 border rounded-lg bg-muted/50">
                <Badge className="bg-green-500">POST</Badge>
                <code>/auth/login</code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Request Body</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`{
  "email": "john@example.com",
  "password": "securePassword123"
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Response</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "fullname": "John Doe",
      "username": "johndoe",
      "email": "john@example.com",
      "role": "user",
      "profilePicture": "https://example.com/profile.jpg",
      "bio": "Software developer passionate about technology"
    }
  }
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Frontend Implementation with NextAuth
              </h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            \`\${process.env.NEXT_PUBLIC_API_URL}/auth/login\`,
            {
              email: credentials?.email,
              password: credentials?.password
            }
          )

          if (response.data.success) {
            return {
              id: response.data.data.user.id,
              email: response.data.data.user.email,
              name: response.data.data.user.fullname,
              image: response.data.data.user.profilePicture,
              accessToken: response.data.data.token
            }
          }
          return null
        } catch (error) {
          console.error('Login error:', error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error'
  }
})

// Login component
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.ok) {
      router.push('/dashboard')
    } else {
      console.error('Login failed')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  )
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="protected-routes" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Protected Routes
          </h2>
          <p className="text-muted-foreground leading-7">
            Access user profile information and manage protected resources using
            JWT tokens.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Get Current User</h3>
              <div className="flex items-center gap-3 p-3 border rounded-lg bg-muted/50">
                <Badge className="bg-blue-500">GET</Badge>
                <code>/auth/me</code>
                <Badge variant="outline">🔒 Protected</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Headers Required</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>{`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Frontend Implementation
              </h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// Using TanStack Query for data fetching
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import axios from 'axios'

// Create axios instance with interceptor
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

// Add token to requests automatically
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') // or from NextAuth session
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`
  }
  return config
})

// Custom hook for fetching current user
export function useCurrentUser() {
  const { data: session } = useSession()
  
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await apiClient.get('/auth/me')
      return response.data.data.user
    },
    enabled: !!session?.accessToken
  })
}

// Usage in component
export function UserProfile() {
  const { data: user, isLoading, error } = useCurrentUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading profile</div>

  return (
    <div>
      <h1>{user?.fullname}</h1>
      <p>@{user?.username}</p>
      <p>{user?.bio}</p>
    </div>
  )
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="profile-management" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Profile Management
          </h2>
          <p className="text-muted-foreground leading-7">
            Update user profile information and change passwords securely.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Update Profile</h3>
              <div className="flex items-center gap-3 p-3 border rounded-lg bg-muted/50 mb-4">
                <Badge className="bg-orange-500">PUT</Badge>
                <code>/auth/update-profile</code>
                <Badge variant="outline">🔒 Protected</Badge>
              </div>

              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// Request body
{
  "fullname": "John Smith",
  "username": "johnsmith",
  "bio": "Updated bio information",
  "profilePicture": "https://example.com/new-profile.jpg"
}

// Frontend implementation
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function UpdateProfileForm() {
  const queryClient = useQueryClient()
  
  const updateProfileMutation = useMutation({
    mutationFn: async (profileData) => {
      const response = await apiClient.put('/auth/update-profile', profileData)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['currentUser'])
      console.log('Profile updated successfully')
    }
  })

  const handleSubmit = (data) => {
    updateProfileMutation.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button 
        type="submit" 
        disabled={updateProfileMutation.isLoading}
      >
        {updateProfileMutation.isLoading ? 'Updating...' : 'Update Profile'}
      </button>
    </form>
  )
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Update Password</h3>
              <div className="flex items-center gap-3 p-3 border rounded-lg bg-muted/50 mb-4">
                <Badge className="bg-orange-500">PUT</Badge>
                <code>/auth/update-password</code>
                <Badge variant="outline">🔒 Protected</Badge>
              </div>

              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`// Request body
{
  "currentPassword": "oldPassword123",
  "newPassword": "newSecurePassword456"
}

// Frontend implementation
export function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const changePasswordMutation = useMutation({
    mutationFn: async (passwordData) => {
      const response = await apiClient.put('/auth/update-password', passwordData)
      return response.data
    },
    onSuccess: () => {
      console.log('Password updated successfully')
      // Clear form
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match')
      return
    }

    changePasswordMutation.mutate({
      currentPassword,
      newPassword
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        placeholder="Current Password"
        required
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="New Password"
        required
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm New Password"
        required
      />
      <button type="submit" disabled={changePasswordMutation.isLoading}>
        {changePasswordMutation.isLoading ? 'Updating...' : 'Change Password'}
      </button>
    </form>
  )
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="error-handling" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Error Handling</h2>
          <p className="text-muted-foreground leading-7">
            Common authentication errors and how to handle them in your
            application.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  Common Errors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <Badge className="bg-red-500 mb-1">401</Badge>
                    <p className="font-medium">Invalid credentials</p>
                    <p className="text-muted-foreground">
                      Email or password is incorrect
                    </p>
                  </div>
                  <div>
                    <Badge className="bg-red-500 mb-1">403</Badge>
                    <p className="font-medium">Account not activated</p>
                    <p className="text-muted-foreground">
                      User must activate account first
                    </p>
                  </div>
                  <div>
                    <Badge className="bg-red-500 mb-1">409</Badge>
                    <p className="font-medium">User already exists</p>
                    <p className="text-muted-foreground">
                      Email or username already taken
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>
                      Store JWT tokens securely (httpOnly cookies preferred)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Implement token refresh mechanism</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Validate input on both client and server</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Use HTTPS in production</span>
                  </div>
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
                <h3 className="font-semibold mb-2">WebSocket Integration</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn how to implement real-time features with Socket.IO.
                </p>
                <Link
                  href="/docs/websockets"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View WebSocket Guide →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">API Reference</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Explore all available API endpoints and database schema.
                </p>
                <Link
                  href="/docs/api"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View API Docs →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
