import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-wider text-primary">VINTAGE</span>
            <span className="font-display text-2xl tracking-wider text-foreground">BIGBIKES</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#collection" className="font-display text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors">
              Collection
            </a>
            <a href="#about" className="font-display text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors">
              Heritage
            </a>
            <a href="#services" className="font-display text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="font-display text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vintage Bigbikes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
