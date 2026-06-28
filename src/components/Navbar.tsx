"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const pageLinks = [
  { label: "What We Build", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = "font-mono text-sm text-muted-foreground hover:text-accent-purple transition-colors duration-300";
  const mobileNavLinkClass = "font-mono text-sm text-muted-foreground hover:text-accent-purple transition-colors w-full text-left";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-left min-w-0 max-w-[calc(100vw-5rem)] sm:max-w-none">
          <img src="/ghost.svg" alt="Bunshin Development Studios logo" className="h-8 w-auto shrink-0" />
          <span className="font-mono text-xs sm:text-sm md:text-base font-bold text-primary tracking-wide leading-snug">
            Bunshin Development Studios
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {pageLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={navLinkClass}>{link.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="font-mono text-sm bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-accent-purple hover:cyan-glow transition-all duration-300">
              Start a build
            </Link>
          </li>
        </ul>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={mobileNavLinkClass} onClick={() => setOpen(false)}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="font-mono text-sm bg-primary text-primary-foreground px-5 py-2 rounded-md w-full hover:bg-accent-purple block text-center" onClick={() => setOpen(false)}>
                Start a build
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
