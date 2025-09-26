import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Hammer } from "lucide-react";

// Import all service images
import handymanImage from "@assets/generated_images/Handyman_services_image_2bbf4d31.webp";
import applianceImage from "@assets/generated_images/Appliance_services_image_f8d3def5.webp";
import lawnCareImage from "@assets/generated_images/Lawn_care_service_image_6cca5b63.webp";
import poolImage from "@assets/generated_images/Pool_maintenance_image_ab87c7a1.webp";
import drywallImage from "@assets/generated_images/Drywall_repair_image_658fceec.webp";
import flooringImage from "@assets/generated_images/Flooring_services_image_bf711518.webp";
import cleanupImage from "@assets/generated_images/Seasonal_cleanup_image_8e211df2.webp";

const allServices = [
  {
    title: "All Kind of Handyman Services",
    description: "Count on our reliable and skilled handyman services for all your home improvement needs. Our experts handle repairs with professionalism and meticulous attention to detail.",
    image: handymanImage
  },
  {
    title: "Appliance Services",
    description: "Depend on our reliable appliance services for all your repair and installation needs. Our skilled technicians provide efficient solutions to ensure your appliances run smoothly.",
    image: applianceImage
  },
  {
    title: "Lawn Care Services",
    description: "Our professional lawn care services ensure your yard stays pristine. From mowing and trimming to fertilizing and weed control, we manage every aspect of maintaining a beautiful and healthy lawn.",
    image: lawnCareImage
  },
  {
    title: "Pool Maintenance",
    description: "Our professional pool maintenance services ensure your pool stays clean and inviting. From regular cleaning and chemical balancing to equipment checks and repairs, we handle all aspects of maintaining a pristine and healthy pool environment.",
    image: poolImage
  },
  {
    title: "Drywall Repair",
    description: "Our drywall repair services ensure your walls look flawless. Whether it's patching up holes, fixing cracks, or smoothing out imperfections, our skilled technicians handle all aspects of drywall repair with precision and care.",
    image: drywallImage
  },
  {
    title: "Flooring Services",
    description: "Our flooring services provide expert solutions for all your flooring needs. Whether you're installing new floors, repairing damaged ones, or refinishing existing surfaces, our skilled technicians ensure high-quality results.",
    image: flooringImage
  },
  {
    title: "Seasonal Cleanups",
    description: "Our seasonal cleanup services are designed to rejuvenate your landscape throughout the year. From leaf removal to pruning, we ensure that your outdoor spaces remain tidy and well-maintained in every season.",
    image: cleanupImage
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <Hammer className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Bluebell Maintenance Services LLC
          </h1>
          <p className="text-lg text-muted-foreground">
            At Bluebell Maintenance Services LLC, we pride ourselves on delivering exceptional property maintenance services.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {allServices.map((service, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center gap-8`}>
                <div className="flex-1">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    onClick={() => console.log(`${service.title} clicked`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Request a quote.</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Bluebell Maintenance Services LLC is a professional property management company located in Atlanta, GA
          </p>
          <Link href="/contact">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              data-testid="button-get-quote"
            >
              Get Quote
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}