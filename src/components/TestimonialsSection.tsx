import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const testimonials = [
  {
    id: 1,
    quote:
      "These guys brought my grandfather's 1952 Panhead back to life. When I heard that engine fire up for the first time, I was speechless. Pure artistry.",
    name: "John Davidson",
    location: "Austin, TX",
    bike: "1952 Harley-Davidson Panhead",
  },
  {
    id: 2,
    quote:
      "I've worked with shops across the country. Steel Stallion is in a league of their own. Their attention to detail is unmatched, and they truly understand vintage iron.",
    name: "Marcus Webb",
    location: "Denver, CO",
    bike: "1972 Triumph Bonneville",
  },
  {
    id: 3,
    quote:
      "From the first consultation to the final delivery, the team treated my bike like it was their own. Professional, passionate, and incredibly skilled.",
    name: "Sarah Mitchell",
    location: "Portland, OR",
    bike: "1968 BMW R60",
  },
  {
    id: 4,
    quote:
      "They didn't just restore my Norton—they educated me on every step of the process. Now I understand my machine better than ever. True craftsmen.",
    name: "Robert Chen",
    location: "Seattle, WA",
    bike: "1975 Norton Commando",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal();
  const { ref: navRef, isVisible: navVisible } = useScrollReveal();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-border/10 rounded-full" />
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-display text-sm tracking-[0.3em] text-primary uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6 tracking-wide">
            RIDERS SPEAK
          </h2>

          {/* Nordic Divider */}
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-border" />
            <span className="w-16 h-px bg-border" />
          </div>
        </div>

        {/* Testimonial Card */}
        <div
          ref={cardRef}
          className={`relative transition-all duration-1000 delay-200 ${
            cardVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="w-12 h-12 bg-primary flex items-center justify-center">
              <Quote className="w-6 h-6 text-background" />
            </div>
          </div>

          <div className="bg-background border border-border p-8 md:p-12 lg:p-16 text-center relative">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/40" />

            {/* Quote */}
            <blockquote className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 italic">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-12 h-px bg-border" />
              <span className="text-primary">✦</span>
              <span className="w-12 h-px bg-border" />
            </div>

            {/* Author */}
            <div className="flex flex-col items-center">
              {/* Avatar Icon */}
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 mb-4 flex items-center justify-center bg-card">
                <User className="w-8 h-8 text-foreground/50" />
              </div>

              <div className="font-display text-lg font-semibold text-foreground tracking-wide">
                {currentTestimonial.name}
              </div>
              <div className="font-body text-sm text-foreground/50 mb-2">
                {currentTestimonial.location}
              </div>
              <div className="font-body text-xs text-primary uppercase tracking-wider">
                {currentTestimonial.bike}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div
            ref={navRef}
            className={`flex items-center justify-center gap-6 mt-8 transition-all duration-700 delay-400 ${
              navVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-border hover:border-primary flex items-center justify-center transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/50 group-hover:text-primary transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-border hover:border-primary flex items-center justify-center transition-colors group"
            >
              <ChevronRight className="w-5 h-5 text-foreground/50 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
