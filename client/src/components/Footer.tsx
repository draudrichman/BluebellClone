import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">BM</span>
              </div>
              <span className="font-semibold text-lg">
                Bluebell Maintenance Services LLC
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner in property maintenance. Professional, reliable, and dedicated to excellence.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <span>5+ Years Experience</span>
              <span>•</span>
              <span>100+ Happy Customers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" data-testid="footer-link-home">
                <span className="text-primary-foreground/80 hover:text-white cursor-pointer block py-1">
                  Home
                </span>
              </Link>
              <Link href="/services" data-testid="footer-link-services">
                <span className="text-primary-foreground/80 hover:text-white cursor-pointer block py-1">
                  Services
                </span>
              </Link>
              <Link href="/about" data-testid="footer-link-about">
                <span className="text-primary-foreground/80 hover:text-white cursor-pointer block py-1">
                  About Us
                </span>
              </Link>
              <Link href="/contact" data-testid="footer-link-contact">
                <span className="text-primary-foreground/80 hover:text-white cursor-pointer block py-1">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a 
                href="tel:(762) 356-6660" 
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-white"
                data-testid="footer-phone"
              >
                <Phone size={18} />
                <span>(762) 356-6660</span>
              </a>
              <a 
                href="mailto:client@bluebellms.com" 
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-white"
                data-testid="footer-email"
              >
                <Mail size={18} />
                <span>client@bluebellms.com</span>
              </a>
              <div className="flex items-start space-x-3 text-primary-foreground/80">
                <MapPin size={18} className="mt-0.5" />
                <span>8735 Dunwoody Place #6737<br />Atlanta, GA 30350</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Bluebell Maintenance Services LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}