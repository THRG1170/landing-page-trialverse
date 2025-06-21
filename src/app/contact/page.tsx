import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container py-12 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We&#39;re here to help!
          </p>
        </div>

        <div className="space-y-8">
          <div className="mb-8 space-y-2 text-center">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-muted-foreground">
              You can reach out to us using the information below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <Link href="#">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="flex justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Our Location</h3>
                    <p className="text-muted-foreground">
                      30 Karaja Lembah Street, Birobuli
                      <br />
                      Palu, Indonesia 94213
                    </p>
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card>
              <Link href="https://wa.me/+6285756771044">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="flex justify-center">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Phone Number</h3>
                    <p className="text-muted-foreground">+62 857-5677-1044</p>
                  </div>
                </CardContent>
              </Link>
            </Card>
            <Card>
              <a href="mailto:trahmadisyawal@gmail.com">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="flex justify-center">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      Email Address
                    </h3>
                    <p className="text-muted-foreground">
                      trahmadisyawal@gmail.com
                    </p>
                  </div>
                </CardContent>
              </a>
            </Card>
          </div>

          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="space-y-4 text-center">
                <div className="flex justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Office Hours</h3>
                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
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
