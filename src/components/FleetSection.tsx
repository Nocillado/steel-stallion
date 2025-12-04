import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useScrollReveal from "@/hooks/useScrollReveal";

const categories = ["All", "Cruisers", "Touring", "Classic"];

const bikes = [
  {
    id: 1,
    name: "Iron Thunder",
    year: 1972,
    category: "Cruisers",
    image: "/Fleet/1.jpg",
    specs: "1200cc V-Twin",
  },
  {
    id: 2,
    name: "Desert Storm",
    year: 1978,
    category: "Cruisers",
    image: "/Fleet/2.jpg",
    specs: "1000cc Ironhead",
  },
  {
    id: 3,
    name: "Road King",
    year: 1985,
    category: "Touring",
    image: "/Fleet/3.jpg",
    specs: "1340cc Evolution",
  },
  {
    id: 4,
    name: "Nordic Rider",
    year: 1982,
    category: "Touring",
    image: "/Fleet/4.jpg",
    specs: "1100cc Shovelhead",
  },
  {
    id: 5,
    name: "Midnight Phantom",
    year: 1968,
    category: "Classic",
    image: "/Fleet/5.jpg",
    specs: "900cc Flathead",
  },
  {
    id: 6,
    name: "Heritage Classic",
    year: 1965,
    category: "Classic",
    image: "/Fleet/6.jpg",
    specs: "750cc Panhead",
  },
];

const FleetSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: filtersRef, isVisible: filtersVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const filteredBikes =
    activeCategory === "All"
      ? bikes
      : bikes.filter((bike) => bike.category === activeCategory);

  return (
    <section id="fleet" className="py-24 lg:py-32 bg-card relative">
      {/* Top Border Pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-display text-sm tracking-[0.3em] text-primary uppercase">
            Collection
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4 mb-6 tracking-wide">
            THE FLEET
          </h2>

          {/* Nordic Divider */}
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-border" />
            <span className="text-primary tracking-wider">― ✦ ―</span>
            <span className="w-12 h-px bg-border" />
          </div>
        </div>

        {/* Category Filters */}
        <div
          ref={filtersRef}
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${
            filtersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-display text-sm tracking-widest uppercase px-6 py-3 border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-background border-primary"
                  : "bg-transparent text-foreground/70 border-border hover:border-foreground/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bike Grid */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {filteredBikes.map((bike, index) => (
            <Card
              key={bike.id}
              className="group bg-background border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <Badge
                  variant="secondary"
                  className="absolute top-4 right-4 font-display text-xs tracking-wider uppercase bg-background/80 backdrop-blur-sm border-none"
                >
                  {bike.category}
                </Badge>

                {/* Year */}
                <div className="absolute bottom-4 left-4">
                  <span className="font-display text-4xl font-bold text-primary/80">
                    {bike.year}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Nordic accent line */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-px bg-primary" />
                  <span className="text-primary text-xs">✧</span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground mb-2 tracking-wide group-hover:text-primary transition-colors">
                  {bike.name}
                </h3>
                <p className="font-body text-sm text-foreground/50">{bike.specs}</p>

                {/* View Details Link */}
                <div className="mt-4 pt-4 border-t border-border">
                  <button className="font-display text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors group/btn flex items-center gap-2">
                    View Details
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-700 delay-300 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-24 h-px bg-border" />
            <span className="text-primary/60">✦</span>
            <span className="w-24 h-px bg-border" />
          </div>
          <p className="font-body text-foreground/60 mb-6">
            Can't find what you're looking for?
          </p>
          <button className="font-display text-sm tracking-widest uppercase text-foreground border-2 border-foreground/30 px-8 py-4 hover:border-primary hover:text-primary transition-colors">
            Request Custom Build
          </button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
