import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">BM</span>
              </div>
              <span className="font-semibold text-lg text-foreground">
                Bluebell Maintenance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  className="font-medium"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Phone Number & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:(762) 356-6660" 
              className="hidden sm:flex items-center space-x-2 text-primary font-medium hover-elevate p-2 rounded-md"
              data-testid="link-phone"
            >
              <Phone size={16} />
              <span>(762) 356-6660</span>
            </a>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className="w-full justify-start font-medium"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <a 
                href="tel:(762) 356-6660" 
                className="flex items-center space-x-2 text-primary font-medium hover-elevate p-2 rounded-md mt-2"
                data-testid="mobile-link-phone"
              >
                <Phone size={16} />
                <span>(762) 356-6660</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}