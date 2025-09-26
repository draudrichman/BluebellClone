import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    title: "Requirements",
    description: "We discuss your specific needs and project requirements"
  },
  {
    title: "Contract",
    description: "Clear agreement outlining scope, timeline, and expectations"
  },
  {
    title: "Budget",
    description: "Transparent pricing with detailed cost breakdown"
  },
  {
    title: "Build",
    description: "Professional execution with quality craftsmanship"
  }
];

export default function ProcessFlow() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The General Process
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div className="text-center p-6 hover-elevate rounded-lg min-w-[200px]">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < processSteps.length - 1 && (
                <ArrowRight className="text-primary w-8 h-8 hidden md:block mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}