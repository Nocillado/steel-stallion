import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBike from "@/assets/hero-bike.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBike}
          alt="Vintage motorcycle on an open highway at golden hour"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl">
          <p className="font-display text-lg md:text-xl tracking-[0.3em] text-primary mb-4 animate-fade-up opacity-0">
            EST. 1965
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6 animate-fade-up opacity-0 animation-delay-200">
            TIMELESS
            <br />
            <span className="text-gradient">MACHINES</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up opacity-0 animation-delay-400 font-body font-light">
            Curating the world's finest vintage motorcycles. Each bike tells a story of 
            craftsmanship, freedom, and the open road.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 animation-delay-600">
            <Button variant="hero" size="xl">
              View Collection
            </Button>
            <Button variant="heroOutline" size="xl">
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#collection" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
