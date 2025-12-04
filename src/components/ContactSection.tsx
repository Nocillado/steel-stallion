import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558981033-0f0309284409?q=80&w=2940&auto=format&fit=crop"
          alt="Motorcycle garage"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-display text-sm tracking-[0.3em] text-primary uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4 mb-6 tracking-wide">
            VISIT THE GARAGE
          </h2>

          {/* Nordic Divider */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-12 h-px bg-border" />
            <span className="text-primary">✧</span>
            <span className="w-6 h-px bg-primary" />
            <span className="text-primary">✧</span>
            <span className="w-12 h-px bg-border" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <div
              ref={infoRef}
              className={`transition-all duration-1000 ${
                infoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-primary">✦</span>
                <span className="font-display text-sm tracking-[0.2em] text-foreground/50 uppercase">
                  Find Us
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 tracking-wide">
                COME SEE THE
                <br />
                <span className="text-primary">IRON UP CLOSE</span>
              </h3>

              {/* Divider */}
              <div className="w-24 h-px bg-border mb-8" />

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 border border-border flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-sm tracking-wider text-foreground/50 uppercase mb-1">
                      Address
                    </div>
                    <div className="font-body text-foreground">
                      123 Iron Horse Lane
                      <br />
                      Austin, TX 78701
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 border border-border flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-sm tracking-wider text-foreground/50 uppercase mb-1">
                      Phone
                    </div>
                    <div className="font-body text-foreground">(512) 555-0173</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 border border-border flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-sm tracking-wider text-foreground/50 uppercase mb-1">
                      Email
                    </div>
                    <div className="font-body text-foreground">hello@steelstallion.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 border border-border flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-sm tracking-wider text-foreground/50 uppercase mb-1">
                      Hours
                    </div>
                    <div className="font-body text-foreground">
                      Mon - Sat: 9:00 AM - 6:00 PM
                      <br />
                      <span className="text-foreground/50">Sunday: Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div
              ref={mapRef}
              className={`relative aspect-video bg-card border border-border overflow-hidden transition-all duration-1000 delay-200 ${
                mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8744512258697!2d-97.74383492429786!3d30.26776100768638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a6e7c9c9c9%3A0x1234567890abcdef!2sAustin%2C%20TX%2078701!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Steel Stallion Location"
                className="absolute inset-0"
              />
              {/* Nordic corners */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-primary/40 pointer-events-none z-10" />
              <div className="absolute top-2 right-2 w-6 h-6 border-r border-t border-primary/40 pointer-events-none z-10" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l border-b border-primary/40 pointer-events-none z-10" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-primary/40 pointer-events-none z-10" />
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`relative transition-all duration-1000 delay-100 ${
              formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Nordic Frame */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-primary/30 hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-primary/30 hidden lg:block" />

            <div className="bg-card border border-border p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-primary" />
                <span className="font-display text-sm tracking-[0.2em] text-primary uppercase">
                  Send a Message
                </span>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-display text-xs tracking-widest text-foreground/50 uppercase mb-2 block">
                      Name
                    </label>
                    <Input
                      placeholder="Your name"
                      className="bg-background border-border focus:border-primary font-body"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest text-foreground/50 uppercase mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-border focus:border-primary font-body"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-display text-xs tracking-widest text-foreground/50 uppercase mb-2 block">
                    Subject
                  </label>
                  <Input
                    placeholder="How can we help?"
                    className="bg-background border-border focus:border-primary font-body"
                  />
                </div>

                <div>
                  <label className="font-display text-xs tracking-widest text-foreground/50 uppercase mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-background border-border focus:border-primary font-body resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-display text-sm tracking-widest uppercase bg-primary hover:bg-primary/90 text-background py-6"
                >
                  Send Message
                </Button>
              </form>

              {/* Bottom Accent */}
              <div className="flex items-center justify-center gap-3 mt-8">
                <span className="w-8 h-px bg-border" />
                <span className="text-primary/40 text-sm">✧</span>
                <span className="w-8 h-px bg-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
