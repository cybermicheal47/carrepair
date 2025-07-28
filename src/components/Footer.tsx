import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const Footer = () => {
  const fadeInRef = useFadeInOnScroll<HTMLElement>();
  return (
    <footer ref={fadeInRef} className="bg-secondary text-secondary-foreground fade-in">
      <div className="max-w-7xl mx-auto px-2 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Acqua Care</h3>
            <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
              Your trusted partner for professional car repair and maintenance services in Lagos. 
              We combine quality workmanship with honest pricing to keep your vehicle running smoothly.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+971 553 471 905</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@acquacare.ng</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>No 42 Fifth Avenue, AI Halab</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="#services" className="hover:text-primary transition-colors duration-200">Services</a>
                <a href="#booking" className="hover:text-primary transition-colors duration-200">Book Now</a>
                <a href="#about" className="hover:text-primary transition-colors duration-200">About Us</a>
                <a href="#contact" className="hover:text-primary transition-colors duration-200">Contact</a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="footer-name" className="text-secondary-foreground">Name</Label>
                  <Input
                    id="footer-name"
                    placeholder="Your name"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="footer-email" className="text-secondary-foreground">Email</Label>
                  <Input
                    id="footer-email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="footer-message" className="text-secondary-foreground">Message</Label>
                <Textarea
                  id="footer-message"
                  placeholder="How can we help you?"
                  rows={4}
                  className="bg-background border-border"
                />
              </div>
              <Button variant="cta">Send Message</Button>
            </form>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-4"></h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://wa.me/971553471905" className="p-2 bg-green-500/10 rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-200">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-6 pt-4 text-center">
          <p className="text-secondary-foreground/60">
            © 2025 Acqua Care. All rights reserved. | Professional Car Repair Services in AI Halab
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;