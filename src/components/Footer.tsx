import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left">
          <p className="font-mono text-xl font-bold tracking-widest text-primary mb-2">BUNSHIN</p>
          <p className="text-sm text-muted-foreground font-sans">
            © 2026 Bunshin Development Studios. All rights reserved.{" "}
            <span className="text-muted-foreground/60">·</span>{" "}
            <a
              href="#"
              className="text-muted-foreground hover:text-accent-purple transition-colors duration-300 font-mono inline-flex items-center gap-1"
            >
              <Shield size={14} className="inline shrink-0 opacity-70" aria-hidden />
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
