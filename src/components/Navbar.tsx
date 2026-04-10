"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Core Capabilities", href: "#what-we-do" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Our Standards", href: "#our-standard" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${href}`);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-left min-w-0 max-w-[calc(100vw-5rem)] sm:max-w-none">
          <img src="/ghost.svg" alt="" className="h-8 w-auto shrink-0" />
          <span className="font-mono text-xs sm:text-sm md:text-base font-bold text-primary tracking-wide leading-snug">
            Bunshin Development Studios
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
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
              Get in Touch
            </button>
          </li>
        </ul>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border px-6 pb-6 pt-2">
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
                Get in Touch
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
