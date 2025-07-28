import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-mechanic.jpg";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { useEffect } from "react";

const Hero = () => {
  const fadeInRef = useFadeInOnScroll<HTMLDivElement>();

  // Optional: Add inertia scroll to body for this section
  useEffect(() => {
    document.body.classList.add("inertia-scroll");
    return () => document.body.classList.remove("inertia-scroll");
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center inertia-scroll">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-secondary/80"></div>
      </div>
      
      <div ref={fadeInRef} className="relative z-10 max-w-7xl mx-auto px-4 py-20 fade-in">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight glitch">
            Need Fast, Reliable Car Repairs in <span className="text-accent">AI Halab?</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Acqua Care delivers expert auto services without the stress.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Book an Appointment
            </Button>
            <Button asChild variant="ctaSecondary" size="lg" className="text-lg px-8 py-4 border-white text-black bg-white hover:bg-white/90">
              <a href="tel:+971553471905">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;