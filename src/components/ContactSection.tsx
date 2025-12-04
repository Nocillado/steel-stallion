import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background grain">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">
              GET IN TOUCH
            </p>
            <h2 className="font-display text-5xl md:text-6xl mb-6">
              VISIT THE
              <br />
              <span className="text-gradient">SHOWROOM</span>
            </h2>
            <p className="text-muted-foreground font-light mb-10 max-w-md">
              Step into a world of chrome and leather. Our showroom houses over 
              50 vintage motorcycles ready for viewing. Appointments recommended.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    1234 Heritage Highway<br />
                    Los Angeles, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    info@vintagebigbikes.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1">Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Tuesday - Saturday: 10am - 6pm<br />
                    Sunday - Monday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card border border-border rounded-sm p-8 md:p-10">
            <h3 className="font-display text-2xl mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-display text-sm tracking-wider text-muted-foreground block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="font-display text-sm tracking-wider text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="font-display text-sm tracking-wider text-muted-foreground block mb-2">
                  Subject
                </label>
                <select className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                  <option value="">Select an inquiry type</option>
                  <option value="purchase">Purchase Inquiry</option>
                  <option value="sell">Sell My Bike</option>
                  <option value="restoration">Restoration Services</option>
                  <option value="visit">Schedule a Visit</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="font-display text-sm tracking-wider text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about the bike you're looking for..."
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
