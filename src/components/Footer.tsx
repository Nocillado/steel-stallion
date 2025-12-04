import { Facebook, Instagram, Youtube } from "lucide-react";

const footerLinks = [
  { href: "#fleet", label: "Fleet" },
  { href: "#heritage", label: "Roots" },
  { href: "#craftsmanship", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Nordic Divider */}
      <div className="flex items-center justify-center py-8">
        <span className="w-8 h-px bg-border" />
        <span className="mx-4 text-primary/60">✧</span>
        <span className="w-4 h-px bg-primary/40" />
        <span className="mx-2 text-primary">✦</span>
        <span className="w-4 h-px bg-primary/40" />
        <span className="mx-4 text-primary/60">✧</span>
        <span className="w-8 h-px bg-border" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <img src="/Icon/moto.png" alt="Steel Stallion" className="h-10 w-auto brightness-0 invert opacity-90" />
            <span className="font-display text-2xl font-semibold tracking-widest text-foreground">
              STEEL STALLION
            </span>
            <img src="/Icon/moto.png" alt="Steel Stallion" className="h-10 w-auto brightness-0 invert opacity-90" />
          </div>

          {/* Tagline */}
          <p className="font-body text-foreground/50 mb-8 max-w-md">
            Vintage Iron. Modern Soul. Crafting legends since 1973.
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm tracking-widest uppercase text-foreground/60 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 border border-border hover:border-primary flex items-center justify-center transition-colors group"
              >
                <social.icon className="w-4 h-4 text-foreground/50 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright */}
          <div className="font-body text-sm text-foreground/40">
            <p>© {new Date().getFullYear()} Steel Stallion. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
};

export default Footer;
