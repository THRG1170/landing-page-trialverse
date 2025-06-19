import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We&#39;re here to help!
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-muted-foreground">
              You can reach out to us using the information below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    123 Education Street, Learning District
                    <br />
                    Jakarta, Indonesia 12345
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone Number</h3>
                  <p className="text-muted-foreground">+62 857-5677-1044</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email Address</h3>
                  <p className="text-muted-foreground">
                    trahmadisyawal@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Office Hours</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">Saturday</p>
                    <p className="text-muted-foreground">10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">Sunday</p>
                    <p className="text-muted-foreground">Closed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
