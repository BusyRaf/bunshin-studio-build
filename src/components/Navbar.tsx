"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const pageLinks = [
  { label: "What We Build", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

const link =
  "font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-extrabold tracking-tight">
          Bunshin <span className="text-muted-foreground font-semibold">Development Studios</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {pageLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={link}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="font-sans text-sm font-semibold bg-[#6a37e0] text-white px-5 py-2 rounded-lg hover:bg-[#7b4bff] transition-colors duration-200"
            >
              Start a build
            </Link>
          </li>
        </ul>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {pageLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={link} onClick={() => setOpen(false)}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="font-sans text-sm font-semibold bg-[#6a37e0] text-white px-5 py-2 rounded-lg w-full block text-center"
                onClick={() => setOpen(false)}
              >
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
