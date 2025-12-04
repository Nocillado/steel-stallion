import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bike1 from "@/assets/bike-1.jpg";
import bike2 from "@/assets/bike-2.jpg";
import bike3 from "@/assets/bike-3.jpg";

const bikes = [
  {
    id: 1,
    name: "1953 Indian Chief",
    year: "1953",
    engine: "1300cc V-Twin",
    price: "$85,000",
    image: bike1,
    status: "Available",
  },
  {
    id: 2,
    name: "1971 Triumph Bonneville",
    year: "1971",
    engine: "650cc Parallel Twin",
    price: "$42,000",
    image: bike2,
    status: "Sold",
  },
  {
    id: 3,
    name: "1968 BMW R69S",
    year: "1968",
    engine: "594cc Boxer Twin",
    price: "$58,000",
    image: bike3,
    status: "Available",
  },
];

const CollectionSection = () => {
  const [hoveredBike, setHoveredBike] = useState<number | null>(null);

  return (
    <section id="collection" className="py-24 bg-secondary/30 grain">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">
            CURATED SELECTION
          </p>
          <h2 className="font-display text-5xl md:text-7xl">
            THE COLLECTION
          </h2>
        </div>

        {/* Bikes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {bikes.map((bike, index) => (
            <div
              key={bike.id}
              className="group relative overflow-hidden rounded-sm"
              onMouseEnter={() => setHoveredBike(bike.id)}
              onMouseLeave={() => setHoveredBike(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-card">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div 
                className={`absolute inset-0 bg-background/90 flex flex-col justify-end p-6 transition-opacity duration-500 ${
                  hoveredBike === bike.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="font-display text-xs tracking-widest text-primary mb-2">
                  {bike.year}
                </p>
                <h3 className="font-display text-2xl mb-2">{bike.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{bike.engine}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-primary">{bike.price}</span>
                  <Button variant="outline" size="sm">
                    Details <ArrowRight size={16} />
                  </Button>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span 
                  className={`font-display text-xs tracking-widest px-3 py-1 ${
                    bike.status === "Available" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {bike.status}
                </span>
              </div>

              {/* Default Info */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-500 ${
                  hoveredBike === bike.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="font-display text-xl">{bike.name}</h3>
                <p className="text-muted-foreground text-sm">{bike.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Collection <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
