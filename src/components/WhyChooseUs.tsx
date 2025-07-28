import { CheckCircle, Shield, Clock, Award } from "lucide-react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const features = [
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No hidden fees. You'll know exactly what you're paying for before any work begins."
  },
  {
    icon: Shield,
    title: "Certified Mechanics",
    description: "Our team consists of qualified, experienced professionals you can trust."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "We understand your time is valuable. Most repairs completed same day."
  }
];

const WhyChooseUs = () => {
  const fadeRefs = [useFadeInOnScroll<HTMLDivElement>(), useFadeInOnScroll<HTMLDivElement>(), useFadeInOnScroll<HTMLDivElement>()];
  const testimonialRef = useFadeInOnScroll<HTMLDivElement>();
  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Lagos Drivers Trust Acqua Care
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              We've built our reputation on quality service, honest pricing, and putting our customers first. Here's what sets us apart from other auto repair shops in Lagos.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    ref={fadeRefs[index]}
                    className="flex gap-4 fade-in tilt-hover"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div ref={testimonialRef} className="bg-muted rounded-lg p-4 fade-in tilt-hover">
            <div className="text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Customer Satisfaction Guaranteed
              </h3>
              <p className="text-muted-foreground mb-6">
                "Acqua Care fixed my car's AC problem in just 2 hours. Professional service and fair pricing!"
              </p>
              <div className="flex justify-center items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-5 h-5 text-yellow-400">★</div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                - Chidi O., Victoria Island
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;