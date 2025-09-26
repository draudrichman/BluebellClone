import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValuePropositions from "@/components/ValuePropositions";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import service images
import lawnCareImage from "@assets/generated_images/Lawn_care_service_image_6cca5b63.png";
import handymanImage from "@assets/generated_images/Handyman_services_image_2bbf4d31.png";
import applianceImage from "@assets/generated_images/Appliance_services_image_f8d3def5.png";

const homeServices = [
  {
    title: "Lawn Care",
    description: "From simple grass cuts to expertly trimming trees and shrubs – everything for your curb appeal!",
    image: lawnCareImage
  },
  {
    title: "Handyman Services", 
    description: "Reliable and skilled handyman services for all your home improvement needs. Trust our experts to handle repairs with professionalism and attention to detail.",
    image: handymanImage
  },
  {
    title: "Appliance Services",
    description: "We fix it, we replace it – whatever your need may be!",
    image: applianceImage
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValuePropositions />
      
      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Comprehensive Offerings
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {homeServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                onClick={() => console.log(`${service.title} clicked`)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Your Residential Solutions Expert
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Bluebell Maintenance Services LLC is a professional property management company located in Atlanta, GA
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
          </div>
          <Link href="/contact">
            <Button size="lg" data-testid="button-get-quote">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}