'use client';

import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Benefits", href: "/#benefits" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="/#" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
              <Image src={logo} className="w-20 h-20 flex items-center justify-center"  width={75} height={75} alt="logo" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
        <Button asChild variant="ghost" size="sm">
          <a 
            href="https://app.repeadly.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Log in
          </a>
        </Button>
          <a href="/calendar">
            <Button variant="hero" size="sm" className="rounded-lg">
              Book a demo
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button variant="hero" size="sm" className="rounded-lg">Start free trial</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;