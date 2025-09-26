import { useInView } from "@/hooks/useInView";
import { useIsMobile } from "@/hooks/use-mobile";
import { LucideIcon } from "lucide-react";

interface ValuePropositionItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ValuePropositionItem({ icon: IconComponent, title, description, index }: ValuePropositionItemProps) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const isMobile = useIsMobile();

  const animationClasses = inView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10';

  const mobileAnimationClasses = inView
    ? 'opacity-100 translate-x-0'
    : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`;

  return (
    <div
      ref={ref}
      className={`text-center p-6 hover-elevate rounded-lg transition-all duration-500 ${isMobile ? mobileAnimationClasses : animationClasses}`}
      data-testid={`value-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
          <IconComponent className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
