import {
  Calendar,
  FileText,
  Users,
  CreditCard,
  Shield,
  Scale,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <FileText className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Rules and guidelines for using TrialVerse
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
                Welcome to TrialVerse. By accessing or using our platform, you
                agree to be bound by the following terms. Please read these
                terms carefully before using our services.
              </p>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                1. User Accounts
              </h2>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  Users must provide accurate information and maintain the
                  security of their login credentials. You are responsible for
                  all activity under your account.
                </p>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h3 className="mb-2 font-semibold">Account Requirements:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Must be at least 13 years old</li>
                    <li>• Provide accurate and complete information</li>
                    <li>• Maintain one account per person</li>
                    <li>• Keep login credentials secure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Content and Behavior */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                2. Content and Behavior
              </h2>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  Users may create posts, comments, and send messages. You agree
                  not to:
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-red-600">
                      Prohibited Content:
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Badge variant="destructive" className="text-xs">
                          ×
                        </Badge>
                        <span>Hate speech or harassment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="destructive" className="text-xs">
                          ×
                        </Badge>
                        <span>Obscene or offensive language</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="destructive" className="text-xs">
                          ×
                        </Badge>
                        <span>Spam or misleading content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="destructive" className="text-xs">
                          ×
                        </Badge>
                        <span>Illegal or harmful material</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-green-600">
                      Prohibited Actions:
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Badge variant="destructive" className="text-xs">
                          ×
                        </Badge>
                        <span>Impersonating others</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="destructive" className="text-xs">
                          ×
                        </Badge>
                        <span>Violating laws or regulations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="destructive" className="text-xs">
                          ×
                        </Badge>
                        <span>Hacking or system abuse</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="destructive" className="text-xs">
                          ×
                        </Badge>
                        <span>Sharing private information</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Moderation */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                3. Moderation
              </h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground">
                  We reserve the right to remove any content that violates our
                  rules, including content with curse words or offensive
                  material. Our moderation team reviews reported content and may
                  take the following actions:
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="p-4 text-center border rounded-lg">
                    <h3 className="mb-2 font-semibold text-yellow-600">
                      Warning
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      First-time minor violations
                    </p>
                  </div>
                  <div className="p-4 text-center border rounded-lg">
                    <h3 className="mb-2 font-semibold text-orange-600">
                      Content Removal
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Violating posts or comments
                    </p>
                  </div>
                  <div className="p-4 text-center border rounded-lg">
                    <h3 className="mb-2 font-semibold text-red-600">
                      Account Suspension
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Repeated or severe violations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Membership and Payments */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                4. Membership and Payments
              </h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground">
                  TrialVerse offers paid memberships with additional features.
                  All payments are final.
                </p>
                <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <h3 className="mb-1 font-semibold text-red-800">
                        No Refunds Policy
                      </h3>
                      <p className="text-sm text-red-700">
                        We do not offer refunds or cancellations for paid
                        memberships. Please consider your purchase carefully
                        before proceeding.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Scale className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                5. Limitation of Liability
              </h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  We are not liable for any indirect or consequential damages
                  arising from the use of our platform. Our liability is limited
                  to the maximum extent permitted by law. Users use the platform
                  at their own risk.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Scale className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                6. Governing Law
              </h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  These terms are governed by the laws of Indonesia. Any
                  disputes will be resolved in Indonesian courts. If any
                  provision of these terms is found to be unenforceable, the
                  remaining provisions will continue to apply.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">
                7. Changes to Terms
              </h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  We may revise these terms at any time to reflect changes in
                  our services or legal requirements. Continued use of the
                  service constitutes acceptance of the new terms. We will
                  notify users of significant changes through our platform or
                  via email.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Questions About These Terms?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:legal@trialverse.com"
                    className="text-primary hover:underline"
                  >
                    legal@trialverse.com
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

          {/* Last Updated */}
          <div className="text-sm text-center text-muted-foreground">
            <p>Last updated: January 1, 2025</p>
            <p>Version 1.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
