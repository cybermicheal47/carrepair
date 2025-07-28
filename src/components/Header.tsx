import { Phone, Mail, MessageCircle, MapPin, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fadeInRef = useFadeInOnScroll<HTMLElement>();

  return (
    <header ref={fadeInRef} className="w-full fade-in">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>No 42 Fifth Avenue, AI Halab</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Open 8am – 6pm Mon-Sat</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+971553471905" className="flex items-center gap-1 hover:text-accent transition-colors duration-200">
              <Phone className="h-4 w-4" />
              <span>+971 553 471 905</span>
            </a>
            <a href="mailto:info@acquacare.ng" className="flex items-center gap-1 hover:text-accent transition-colors duration-200">
              <Mail className="h-4 w-4" />
              <span>info@acquacare.ng</span>
            </a>
            <a href="https://wa.me/971553471905" className="flex items-center gap-1 hover:text-accent transition-colors duration-200">
              <MessageCircle className="h-4 w-4 text-green-500" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-background shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            Acqua Care
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer">Services</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer">Contact</a>
            <Button asChild variant="cta" size="sm">
              <a href="#booking" className="cursor-pointer">Book Appointment</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-foreground hover:text-primary transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="block text-foreground hover:text-primary transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="block text-foreground hover:text-primary transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Button asChild variant="cta" size="sm" className="w-full">
                <a href="#booking" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>Book Appointment</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;