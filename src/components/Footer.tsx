'use client';

import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-2">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold text-lg">
          <Image src={logo} className="w-20 h-20 flex items-center justify-center"  width={75} height={75} alt="logo" />
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Repeadly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;