import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2940&auto=format&fit=crop"
          alt="Vintage motorcycle"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        {/* Grain Texture */}
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      {/* Nordic Corner Ornaments */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/40" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/40" />
      <div className="absolute bottom-24 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/40" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Overline */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
          <span className="w-12 h-px bg-primary/60" />
          <span className="font-display text-sm tracking-[0.3em] text-primary/80 uppercase">
            Est. 1973
          </span>
          <span className="w-12 h-px bg-primary/60" />
        </div>

        {/* Main Title */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide text-foreground mb-6 animate-fade-up">
          STEEL STALLION
        </h1>

        {/* Nordic Divider */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up animation-delay-200">
          <span className="w-16 h-px bg-foreground/30" />
          <span className="text-primary text-xl tracking-widest">✦ ✦ ✦</span>
          <span className="w-16 h-px bg-foreground/30" />
        </div>

        {/* Tagline */}
        <p className="font-body text-xl md:text-2xl text-foreground/70 font-light mb-12 animate-fade-up animation-delay-400">
          Vintage Iron. Modern Soul.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
          <Button
            size="lg"
            className="font-display text-sm tracking-widest uppercase px-8 py-6 bg-primary hover:bg-primary/90 text-background"
          >
            Explore Fleet
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-display text-sm tracking-widest uppercase px-8 py-6 border-foreground/30 text-foreground hover:bg-foreground/5 hover:border-foreground/50"
          >
            Our Roots
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
