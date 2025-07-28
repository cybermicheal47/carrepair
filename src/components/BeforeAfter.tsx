import beforeAfterImage from "@/assets/before-after.jpg";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const BeforeAfter = () => {
  const imageRef = useFadeInOnScroll<HTMLDivElement>();
  const textRef = useFadeInOnScroll<HTMLDivElement>();
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative fade-in tilt-hover">
            <img
              src={beforeAfterImage}
              alt="Before and after car repair showcase"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded text-sm font-semibold">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold">
              AFTER
            </div>
          </div>
          
          <div ref={textRef} className="fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              We Don't Just Repair — We Restore Your Peace of Mind
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Every vehicle that comes through our doors receives the same level of care and attention to detail. We take pride in transforming damaged, worn, or malfunctioning vehicles back to their optimal condition.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our before and after gallery speaks for itself. From minor dents to major mechanical overhauls, we deliver results that exceed expectations every time.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Quality Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;