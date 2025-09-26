import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    label: "Telephone",
    value: "(762) 356-6660",
    href: "tel:(762) 356-6660"
  },
  {
    icon: Mail,
    label: "Email",
    value: "client@bluebellms.com",
    href: "mailto:client@bluebellms.com"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "8735 Dunwoody Place #6737 Atlanta, GA 30350",
    href: null
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with us for all your property maintenance needs
          </p>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <Card className="hover-elevate cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {info.label}
                            </h3>
                            <p className="text-muted-foreground">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                  
                  return info.href ? (
                    <a 
                      key={index} 
                      href={info.href}
                      data-testid={`contact-${info.label.toLowerCase()}`}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} data-testid={`contact-${info.label.toLowerCase()}`}>
                      {content}
                    </div>
                  );
                })}
              </div>
              
              {/* Business Hours */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}