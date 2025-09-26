import { Award, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Experienced professionals dedicated to delivering top-notch workmanship for your home."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Tailored solutions that meet your specific residential needs and preferences with care."
  },
  {
    icon: Clock,
    title: "Timely Project Completion",
    description: "Efficient and reliable services to ensure your projects are completed on time, every time."
  }
];

export default function ValuePropositions() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 hover-elevate rounded-lg"
                data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}