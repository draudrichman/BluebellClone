import { Award, Users, Clock } from "lucide-react";
import ValuePropositionItem from "./ValuePropositionItem";

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
    <section className="py-16 bg-muted/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValuePropositionItem
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}