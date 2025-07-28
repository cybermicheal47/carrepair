import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Droplet, 
  Snowflake, 
  Laptop
} from "lucide-react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { useRef } from "react";

const services = [
  {
    icon: Droplet,
    title: "Oil Change",
    description: "Fast and professional oil changes with high-quality lubricants to keep your engine running smoothly.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop",
    iconBg: "#0094e8"
  },
  {
    icon: Laptop,
    title: "Computer-Aided Engine Diagnostics",
    description: "Advanced computer diagnostics to identify engine issues quickly and accurately with modern technology.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
    iconBg: "#000000"
  },
  {
    icon: Snowflake,
    title: "Air-conditioning Service",
    description: "Complete AC system service and repair to keep you cool on AI Halab roads year-round.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
    iconBg: "#0094e8"
  }
];

const Services = () => {
  // Create refs for each card for fade-in
  const fadeRefs = [useFadeInOnScroll<HTMLDivElement>(), useFadeInOnScroll<HTMLDivElement>(), useFadeInOnScroll<HTMLDivElement>()];
  return (
    <section id="services" className="py-8 bg-muted">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional automotive services designed to keep your vehicle running smoothly and safely.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                ref={fadeRefs[index]}
                className="group cursor-pointer overflow-hidden fade-in tilt-hover"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[200px] object-cover"
                  />
                  <div
                    className="absolute -bottom-[30px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: service.iconBg }}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardContent className="pt-12 pb-8 px-6 text-center">
                  <CardTitle className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
                    {service.title}
                  </CardTitle>
                  <CardDescription
                    className="text-base max-w-[65ch] mx-auto leading-relaxed"
                    style={{ color: '#666666' }}
                  >
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;