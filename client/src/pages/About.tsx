import Header from "@/components/Header";
import ProcessFlow from "@/components/ProcessFlow";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";
import aboutImage from "@assets/generated_images/Flooring_services_image_bf711518.png";

const navigationTabs = [
  { id: "story", label: "overview" },
  { id: "process", label: "process" },
  { id: "values", label: "budget" }
];

const companyValues = [
  "Fast Delivery",
  "Quality Promise"
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-8">
            Discover Bluebell Maintenance Services LLC
          </p>
          
          {/* Navigation Tabs */}
          {/* <div className="flex justify-center space-x-8 mb-8">
            {navigationTabs.map((tab) => (
              <Button 
                key={tab.id}
                variant="ghost" 
                className="text-primary hover:text-primary/80"
                data-testid={`tab-${tab.id}`}
                onClick={() => console.log(`${tab.label} tab clicked`)}
              >
                {tab.label}
              </Button>
            ))}
          </div> */}
        </div>
      </section>
      
      {/* Our Story Section */}
      <section id="story" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aboutImage} 
                alt="Professional flooring work"
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bluebell Maintenance Services LLC is a property maintenance and preservation business located in Atlanta, GA. We are dedicated to providing high-quality property preservation, repair, and maintenance services.
                </p>
                <p>
                  Our journey began with a passion for maintaining the beauty and functionality of residential properties, and we have grown to serve the needs of our community with excellence.
                </p>
                <p>
                  Our core values revolve around professionalism, reliability and customer satisfaction. We stand out from other property maintenance businesses in Atlanta through our unwavering commitment to delivering exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Flow */}
      <ProcessFlow />
      
      {/* What We Do Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What We Do?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bluebell Maintenance Services LLC is a professional property management company located in Atlanta, GA that is dedicated to providing top-notch solutions for all your residential needs. With our expertise and commitment to quality, we strive to exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {companyValues.map((value, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 hover-elevate rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}