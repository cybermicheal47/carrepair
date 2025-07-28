import { Car, Users, Star, Clock } from "lucide-react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const stats = [
  {
    icon: Car,
    number: "100+",
    text: "Cars Serviced Monthly",
    description: "Trusted by Lagos drivers"
  },
  {
    icon: Clock,
    number: "15+",
    text: "Years Combined Experience",
    description: "Professional expertise"
  },
  {
    icon: Star,
    number: "4.9★",
    text: "Google Rating",
    description: "Customer satisfaction"
  },
  {
    icon: Users,
    number: "500+",
    text: "Happy Customers",
    description: "And counting"
  }
];

const Stats = () => {
  const fadeRefs = [useFadeInOnScroll<HTMLDivElement>(), useFadeInOnScroll<HTMLDivElement>(), useFadeInOnScroll<HTMLDivElement>(), useFadeInOnScroll<HTMLDivElement>()];
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Trusted by Lagos Drivers
          </h2>
          <p className="text-xl text-primary-foreground/80">
            The numbers speak for themselves
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                ref={fadeRefs[index]}
                className="text-center fade-in tilt-hover"
              >
                <div className="mx-auto mb-4 p-4 bg-primary-foreground/10 rounded-full w-fit">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-primary-foreground mb-1">
                  {stat.text}
                </div>
                <div className="text-primary-foreground/70">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;