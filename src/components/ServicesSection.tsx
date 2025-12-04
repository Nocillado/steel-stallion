import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Wrench, Truck, FileCheck } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Acquisition",
    description: "We source rare and exceptional vintage motorcycles from private collections, estates, and barn finds worldwide.",
    price: "Commission-based",
  },
  {
    icon: Wrench,
    title: "Full Restoration",
    description: "Complete frame-off restorations using period-correct techniques, original parts, and meticulous attention to detail.",
    price: "From $25,000",
  },
  {
    icon: FileCheck,
    title: "Authentication",
    description: "Comprehensive documentation verification, matching numbers certification, and provenance research.",
    price: "From $2,500",
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    description: "Secure, climate-controlled transport with full insurance coverage to any location worldwide.",
    price: "Quote on request",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 grain">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">
            WHAT WE OFFER
          </p>
          <h2 className="font-display text-5xl md:text-7xl">
            OUR SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card border border-border rounded-sm hover:border-primary transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm font-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-display text-sm text-primary tracking-wider">
                    {service.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Looking for something specific? Our team of experts can help you find, 
            authenticate, or restore the vintage motorcycle of your dreams.
          </p>
          <Button variant="hero" size="lg">
            Schedule Consultation <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
