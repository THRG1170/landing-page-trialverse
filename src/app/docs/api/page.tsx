import Link from "next/link";
import {
  Database,
  Server,
  Key,
  Users,
  MessageSquare,
  Bell,
  ShoppingCart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ApiPage() {
  return (
    <div className="max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">API Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Complete API reference and database schema for Trial Verse platform.
        </p>
      </div>

      <div className="space-y-8">
        <section id="overview" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">API Overview</h2>
          <p className="text-muted-foreground leading-7">
            The Trial Verse API is a RESTful service built with Express.js and
            TypeScript. It provides endpoints for user authentication, social
            interactions, content management, and real-time features.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Base URL
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <Badge variant="outline">Production</Badge>
                    <p className="text-sm font-mono mt-1">
                      https://backend-trialverse.vercel.app/api
                    </p>
                  </div>
                  <div>
                    <Badge variant="outline">Development</Badge>
                    <p className="text-sm font-mono mt-1">
                      http://localhost:3000/api
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  JWT Bearer tokens for protected endpoints. Email verification
                  and 2FA support available.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="database-schema" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Database Schema</h2>
          <p className="text-muted-foreground leading-7">
            Trial Verse uses MongoDB with the following entity relationships:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Entity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  User
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">fullname</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">username</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">email</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">password</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">role</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">profilePicture</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">bio</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">activationCode</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts Entity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-green-500" />
                  Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">body</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">image</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">likes</span>
                    <span className="text-muted-foreground">Array</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">user_id</span>
                    <span className="text-muted-foreground">ObjectId</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-muted-foreground">
                    <strong>Relationship:</strong> One User → Many Posts
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Comments Entity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-purple-500" />
                  Comments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">body</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">user_id</span>
                    <span className="text-muted-foreground">ObjectId</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">post_id</span>
                    <span className="text-muted-foreground">ObjectId</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-muted-foreground">
                    <strong>Relationships:</strong> One User → Many Comments,
                    One Post → Many Comments
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Reply Comments Entity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-orange-500" />
                  Reply Comments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">body</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">comment_id</span>
                    <span className="text-muted-foreground">ObjectId</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">user_id</span>
                    <span className="text-muted-foreground">ObjectId</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-muted-foreground">
                    <strong>Relationships:</strong> One User → Many Replies, One
                    Comment → Many Replies
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Notifications Entity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-yellow-500" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">body</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">user_id</span>
                    <span className="text-muted-foreground">ObjectId</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-muted-foreground">
                    <strong>Relationship:</strong> One User → Many Notifications
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Order Entity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-red-500" />
                  Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">status</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-medium">orderId</span>
                    <span className="text-muted-foreground">String</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-muted-foreground">
                    <strong>Relationship:</strong> One User → Many Orders
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="api-endpoints" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">API Endpoints</h2>
          <p className="text-muted-foreground leading-7">
            Complete list of available API endpoints organized by functionality:
          </p>

          <div className="space-y-6">
            {/* Authentication Endpoints */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Authentication</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-green-500">POST</Badge>
                  <code className="flex-1">/auth/register</code>
                  <span className="text-sm text-muted-foreground">
                    Register new user
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-green-500">POST</Badge>
                  <code className="flex-1">/auth/login</code>
                  <span className="text-sm text-muted-foreground">
                    User login
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-blue-500">GET</Badge>
                  <code className="flex-1">/auth/me</code>
                  <span className="text-sm text-muted-foreground">
                    Get current user profile
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-green-500">POST</Badge>
                  <code className="flex-1">/auth/activation</code>
                  <span className="text-sm text-muted-foreground">
                    Activate user account
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-orange-500">PUT</Badge>
                  <code className="flex-1">/auth/update-profile</code>
                  <span className="text-sm text-muted-foreground">
                    Update user profile
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-orange-500">PUT</Badge>
                  <code className="flex-1">/auth/update-password</code>
                  <span className="text-sm text-muted-foreground">
                    Update user password
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-green-500">POST</Badge>
                  <code className="flex-1">/auth/sendOtp</code>
                  <span className="text-sm text-muted-foreground">
                    Send OTP for 2FA
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-green-500">POST</Badge>
                  <code className="flex-1">/auth/verifyOtp</code>
                  <span className="text-sm text-muted-foreground">
                    Verify OTP code
                  </span>
                </div>
              </div>
            </div>

            {/* Users Endpoints */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Users</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-green-500">POST</Badge>
                  <code className="flex-1">/users/follow/{`{id}`}</code>
                  <span className="text-sm text-muted-foreground">
                    Follow/unfollow user
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-blue-500">GET</Badge>
                  <code className="flex-1">/users/</code>
                  <span className="text-sm text-muted-foreground">
                    Get users list with pagination
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-blue-500">GET</Badge>
                  <code className="flex-1">/users/{`{identifier}`}</code>
                  <span className="text-sm text-muted-foreground">
                    Get user by ID or username
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
              </div>
            </div>

            {/* Posts Endpoints */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Posts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-green-500">POST</Badge>
                  <code className="flex-1">/posts/</code>
                  <span className="text-sm text-muted-foreground">
                    Create new post
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-blue-500">GET</Badge>
                  <code className="flex-1">/posts/</code>
                  <span className="text-sm text-muted-foreground">
                    Get posts feed with pagination
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-blue-500">GET</Badge>
                  <code className="flex-1">/posts/{`{id}`}</code>
                  <span className="text-sm text-muted-foreground">
                    Get specific post by ID
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-red-500">DELETE</Badge>
                  <code className="flex-1">/posts/{`{id}`}</code>
                  <span className="text-sm text-muted-foreground">
                    Delete post
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-blue-500">GET</Badge>
                  <code className="flex-1">/posts/user/{`{userId}`}</code>
                  <span className="text-sm text-muted-foreground">
                    Get user&apos;s posts
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-green-500">POST</Badge>
                  <code className="flex-1">/posts/{`{id}`}/like</code>
                  <span className="text-sm text-muted-foreground">
                    Like/unlike post
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
              </div>
            </div>

            {/* Comments Endpoints */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Comments</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-green-500">POST</Badge>
                  <code className="flex-1">/comments/{`{postId}`}</code>
                  <span className="text-sm text-muted-foreground">
                    Create comment on post
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-blue-500">GET</Badge>
                  <code className="flex-1">/comments/{`{postId}`}</code>
                  <span className="text-sm text-muted-foreground">
                    Get comments for post
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-orange-500">PUT</Badge>
                  <code className="flex-1">/comments/{`{commentId}`}</code>
                  <span className="text-sm text-muted-foreground">
                    Update comment
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Badge className="bg-red-500">DELETE</Badge>
                  <code className="flex-1">/comments/{`{commentId}`}</code>
                  <span className="text-sm text-muted-foreground">
                    Delete comment
                  </span>
                  <Badge variant="outline">🔒 Protected</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="request-examples" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Request Examples
          </h2>
          <p className="text-muted-foreground leading-7">
            Common request and response examples for key endpoints:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">User Login</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`POST /auth/login
Content-Type: application/json

{
  "identifier": "triputraharza",
  "password": "Password123!"
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Create Post</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`POST /posts/
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "body": "This is my new post content!",
  "image": "https://example.com/image.jpg"
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Add Comment</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`POST /comments/{postId}
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "text": "Great post! Thanks for sharing."
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Update Profile</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`PUT /auth/update-profile
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "fullName": "John Doe Updated",
  "profilePicture": "https://example.com/new-avatar.jpg"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="response-format" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Response Format</h2>
          <p className="text-muted-foreground leading-7">
            All API responses follow a consistent JSON format:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Success Response</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data here
  }
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Error Response</h3>
              <div className="bg-muted rounded-md p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {`{
  "success": false,
  "message": "Error description",
  "error": {
    "code": "ERROR_CODE",
    "details": "Additional error information"
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="status-codes" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            HTTP Status Codes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Success Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <Badge className="bg-green-500">200</Badge>
                    <span>OK - Request successful</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-green-500">201</Badge>
                    <span>Created - Resource created</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-green-500">204</Badge>
                    <span>No Content - Success, no data</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Error Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <Badge className="bg-red-500">400</Badge>
                    <span>Bad Request - Invalid input</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-red-500">401</Badge>
                    <span>Unauthorized - Auth required</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-red-500">403</Badge>
                    <span>Forbidden - Access denied</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-red-500">404</Badge>
                    <span>Not Found - Resource missing</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-red-500">500</Badge>
                    <span>Server Error - Internal error</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="next-steps" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Next Steps</h2>
          <p className="text-muted-foreground leading-7">
            Explore more detailed documentation and implementation guides:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Interactive API Testing</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Test the API endpoints directly using our Swagger
                  documentation.
                </p>
                <a
                  href="https://backend-trialverse.vercel.app/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Open Swagger Docs →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Authentication Guide</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn how to implement authentication in your application.
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
