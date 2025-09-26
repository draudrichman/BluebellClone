import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  onClick?: () => void;
}

export default function ServiceCard({ title, description, image, href, onClick }: ServiceCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
      console.log(`${title} service clicked`);
    }
  };

  return (
    <Card className="overflow-hidden hover-elevate cursor-pointer group" onClick={handleClick}>
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <Button 
          variant="ghost" 
          className="p-0 h-auto font-medium text-primary hover:text-primary/80"
          data-testid={`button-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}