import {
  Calendar,
  Shield,
  Database,
  Users,
  Lock,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your information
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Effective Date: January 1, 2025</span>
            </div>
          </div>

          {/* Introduction */}
          <Card>
            <CardContent className="p-6">
              <p className="leading-7 text-muted-foreground">
                TrialVerse (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and safeguard your information
                when you use our application or website.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                1. Information We Collect
              </h2>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  We collect personal data through:
                </p>
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-primary">
                    <h3 className="mb-2 font-semibold">OAuth Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Including your name, email address, and profile photo when
                      you sign in with Google or other OAuth providers.
                    </p>
                  </div>
                  <div className="pl-4 border-l-4 border-primary">
                    <h3 className="mb-2 font-semibold">Messages and Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Content you send within the platform, including posts,
                      comments, and direct messages.
                    </p>
                  </div>
                  <div className="pl-4 border-l-4 border-primary">
                    <h3 className="mb-2 font-semibold">
                      Automatically Collected Data
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Such as your IP address, browser type, device information,
                      and usage patterns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Use of Information */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                2. Use of Your Information
              </h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground">
                  Your data is used for:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Account creation and login functionality
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Providing core features like posts, comments, and
                      messaging
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Ensuring user identity and security
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Improving our services and user experience
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                3. Third-Party Services
              </h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground">
                  We use third-party services like:
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h3 className="mb-2 font-semibold">Google</h3>
                    <p className="text-sm text-muted-foreground">
                      OAuth login and analytics
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="mb-2 font-semibold">Midtrans</h3>
                    <p className="text-sm text-muted-foreground">
                      Payment processing
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="mb-2 font-semibold">Analytics Providers</h3>
                    <p className="text-sm text-muted-foreground">
                      Usage analytics and insights
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  These third parties have their own privacy policies, which we
                  recommend you review.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Data Retention & Deletion */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                4. Data Retention & Deletion
              </h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground">
                  Users may request deletion of some data (e.g., account
                  information). However, certain data like messages or system
                  records may not be deleted for legal or operational reasons.
                </p>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> To request data deletion, please
                    contact us at{" "}
                    <a
                      href="mailto:privacy@trialverse.com"
                      className="text-primary hover:underline"
                    >
                      privacy@trialverse.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">5. Security</h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  We use secure technologies to protect your data, including
                  encryption, secure servers, and regular security audits.
                  However, no system is completely immune to breaches, and we
                  cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Changes to Policy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                6. Changes to This Policy
              </h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  We may update this policy periodically to reflect changes in
                  our practices or legal requirements. Continued use of
                  TrialVerse means you accept the changes. We will notify users
                  of significant changes through our platform or via email.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacy@trialverse.com"
                    className="text-primary hover:underline"
                  >
                    privacy@trialverse.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+6285756771044"
                    className="text-primary hover:underline"
                  >
                    +62 857-5677-1044
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Jakarta, Indonesia
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
