import { PageHeader, Section } from "@/components/Section";
import { services } from "@/data/services";
import { Check } from "lucide-react";

export default function Services() {
  const isLoading = false;

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Services" 
        subtitle="Specialized operational support for protocols and high signal projects." 
      />

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-96 bg-secondary/20 animate-pulse border border-white/5" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service) => (
                <div 
                  key={service.id} 
                  className="bg-secondary/10 border border-white/5 p-8 hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-2xl font-display font-medium mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 pt-6 border-t border-white/5">
                    {service.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
