import { Wrench, Paintbrush, Cog, Package } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Wrench,
    title: "Restoration",
    description:
      "Complete frame-off restorations bringing vintage machines back to their original glory.",
  },
  {
    icon: Paintbrush,
    title: "Custom Builds",
    description:
      "Bespoke motorcycles tailored to your vision, blending classic aesthetics with modern reliability.",
  },
  {
    icon: Cog,
    title: "Maintenance",
    description:
      "Expert servicing and tune-ups to keep your vintage iron running smooth mile after mile.",
  },
  {
    icon: Package,
    title: "Parts & Accessories",
    description:
      "Authentic OEM parts and handpicked accessories for classic motorcycle enthusiasts.",
  },
];

const CraftsmanshipSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section id="craftsmanship" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-display text-sm tracking-[0.3em] text-primary uppercase">
            Services
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4 mb-6 tracking-wide">
            CRAFTSMANSHIP
          </h2>

          {/* Nordic Divider */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-border" />
            <span className="text-primary text-sm">✧</span>
            <span className="w-4 h-px bg-primary" />
            <span className="text-primary text-sm">✦</span>
            <span className="w-4 h-px bg-primary" />
            <span className="text-primary text-sm">✧</span>
            <span className="w-8 h-px bg-border" />
          </div>
        </div>

        {/* Services Grid */}
        <div
          ref={servicesRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ${
            servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{
                transitionDelay: servicesVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/0 group-hover:border-primary/50 transition-colors" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/50 transition-colors" />

              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 tracking-wide group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-foreground/60 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/0 group-hover:via-primary/30 to-transparent transition-all" />
            </div>
          ))}
        </div>

        {/* Featured Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary">✦</span>
              <span className="font-display text-sm tracking-[0.2em] text-foreground/50 uppercase">
                The Art of Restoration
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-wide">
              EVERY BOLT.
              <br />
              EVERY BEARING.
              <br />
              <span className="text-primary">EVERY DETAIL.</span>
            </h3>

            {/* Divider */}
            <div className="w-24 h-px bg-border mb-6" />

            <p className="font-body text-lg text-foreground/70 leading-relaxed mb-8">
              Our master craftsmen bring decades of experience to every project.
              We don't just restore motorcycles—we resurrect legends. Each machine
              is meticulously disassembled, catalogued, and rebuilt with the precision
              that honors its heritage.
            </p>

            <ul className="space-y-4">
              {[
                "Authentic period-correct restoration",
                "Modern reliability upgrades available",
                "Full documentation and photography",
                "Nationwide shipping available",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/70">
                  <span className="text-primary">▸</span>
                  <span className="font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Nordic Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20" />

            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=2940&auto=format&fit=crop"
                alt="Motorcycle restoration detail"
                className="w-full aspect-square object-cover"
              />
              {/* Grain */}
              <div className="absolute inset-0 grain" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
