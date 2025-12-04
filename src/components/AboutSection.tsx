import { Wrench, Shield, Award, History } from "lucide-react";

const features = [
  {
    icon: History,
    title: "Heritage",
    description: "Over 50 years of expertise in sourcing and restoring classic motorcycles from around the world.",
  },
  {
    icon: Wrench,
    title: "Restoration",
    description: "Our master craftsmen use period-correct techniques and original parts whenever possible.",
  },
  {
    icon: Shield,
    title: "Authenticity",
    description: "Every bike comes with full provenance documentation and authentication certificate.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning restorations featured in museums and concours d'elegance worldwide.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background grain">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">
              OUR STORY
            </p>
            <h2 className="font-display text-5xl md:text-6xl mb-6">
              BUILT ON
              <br />
              <span className="text-gradient">PASSION</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                Since 1965, Vintage Bigbikes has been the premier destination for collectors 
                and enthusiasts seeking the world's most exceptional vintage motorcycles.
              </p>
              <p>
                What began as a small garage operation has grown into an internationally 
                recognized authority on classic bikes, from American iron to British café 
                racers and Continental masterpieces.
              </p>
              <p>
                Every motorcycle in our collection is hand-selected for its historical 
                significance, mechanical integrity, and aesthetic beauty. We don't just 
                sell bikes—we preserve rolling works of art.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <p className="font-display text-4xl text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Bikes Restored</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">58</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">35</p>
                <p className="text-sm text-muted-foreground mt-1">Countries</p>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-card border border-border rounded-sm hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
