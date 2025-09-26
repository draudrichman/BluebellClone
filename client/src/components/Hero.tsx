import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Hero_property_background_image_0f54e95d.webp";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Bluebell Maintenance
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Services LLC
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 font-medium">
          YOUR PARTNER IN PROPERTY MAINTENANCE
        </p>
        
        <Link href="/contact">
          <Button 
            size="lg" 
            className="bg-primary/90 backdrop-blur-sm border border-primary-border text-white hover:bg-primary text-lg px-8 py-6 font-semibold"
            data-testid="button-get-started"
          >
            GET STARTED NOW
          </Button>
        </Link>
      </div>
    </section>
  );
}