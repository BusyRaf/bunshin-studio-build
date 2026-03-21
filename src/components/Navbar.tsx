import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ghost from "../../Assets/ghost.svg";

const navLinks = [
  { label: "Bunshin Build", href: "#bunshin-build" },
  { label: "Value", href: "#value" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate(`/${href}`);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => handleClick("/")} className="flex items-center gap-2">
          <img src={ghost} alt="Bunshin Studio ghost" className="h-8 w-auto" />
          <span className="font-mono text-xl font-bold tracking-widest text-primary">
            BUNSHIN
          </span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="font-mono text-sm text-muted-foreground hover:text-accent-purple transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleClick("/contact")}
              className="font-mono text-sm bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-accent-purple hover:cyan-glow transition-all duration-300"
            >
              Check Availability
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  className="font-mono text-sm text-muted-foreground hover:text-accent-purple transition-colors w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
              onClick={() => handleClick("/contact")}
                className="font-mono text-sm bg-primary text-primary-foreground px-5 py-2 rounded-md w-full hover:bg-accent-purple"
              >
                Check Availability
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
