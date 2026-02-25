import { Linkedin, Github, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xl font-bold tracking-widest text-primary mb-2">
              BUNSHIN
            </p>
            <p className="text-sm text-muted-foreground font-sans">
              © 2026 Bunshin Development Studios. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 font-mono text-sm"
            >
              <Shield size={16} />
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
