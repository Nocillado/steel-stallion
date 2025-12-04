import useScrollReveal from "@/hooks/useScrollReveal";

const HeritageSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();

  return (
    <section id="heritage" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-16 h-px bg-border" />
            <span className="w-16 h-px bg-border" />
          </div>
          <span className="font-display text-sm tracking-[0.3em] text-primary uppercase">
            Our Roots
          </span>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="w-8 h-px bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="w-8 h-px bg-primary/40" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Nordic Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/30" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/30" />

            <div className="relative overflow-hidden">
              <img
                src="/Forge/1.jpg"
                alt="Vintage motorcycle workshop"
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Grain overlay */}
              <div className="absolute inset-0 grain" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div
              ref={contentRef}
              className={`transition-all duration-1000 delay-200 ${
                contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 tracking-wide">
                FORGED IN
                <br />
                <span className="text-primary">TRADITION</span>
              </h2>

              {/* Nordic Divider */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-primary/60">―</span>
                <span className="w-24 h-px bg-border" />
                <span className="text-primary/60">―</span>
              </div>

              <div className="space-y-6 text-foreground/70 font-body text-lg leading-relaxed">
                <p>
                  Since 1973, Steel Stallion has been the sanctuary for those who understand
                  that a motorcycle is more than metal and rubber—it's a testament to freedom,
                  craftsmanship, and the open road.
                </p>
                <p>
                  Founded in a small garage by master mechanic Erik Thornberg, we've grown
                  from a passion project into a destination for collectors and enthusiasts
                  who appreciate the art of vintage iron.
                </p>
                <p>
                  Every machine that passes through our doors receives the same meticulous
                  attention to detail that built our reputation over five decades.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className={`grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border transition-all duration-1000 delay-400 ${
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <div className="font-display text-4xl font-bold text-primary mb-1">50+</div>
                <div className="font-body text-sm text-foreground/50 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary mb-1">2K+</div>
                <div className="font-body text-sm text-foreground/50 uppercase tracking-wider">Bikes Restored</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary mb-1">100%</div>
                <div className="font-body text-sm text-foreground/50 uppercase tracking-wider">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
