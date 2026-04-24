"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { MobileMenu } from "./MobileMenu";
import { Container } from "../layout/Container";
import { LogoMark } from "../branding/LogoMark";

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isScrolled = scrollY > 50;
  const isTransparent = transparent && !isScrolled;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Trips", href: "/trips" },
    { name: "About", href: "/about" },
    { name: "Stories", href: "/stories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-bynd-cream focus:text-bynd-ink">
        Skip to main content
      </a>
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          {
            "bg-transparent": isTransparent,
            "bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm": !isTransparent,
          }
        )}
      >
        <Container>
          <div className="flex justify-between items-center h-20">
            {/* Wordmark Lockup Pattern */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Bynd BD Home"
            >
              <LogoMark size={32} color={isTransparent ? "#FAF9F2" : undefined} />
              <div className={cn("w-px h-6", isTransparent ? "bg-white/20" : "bg-black/10")} />
              <span className={cn(
                "font-logo text-xl uppercase",
                isTransparent ? "text-bynd-cream" : "text-bynd-ink"
              )}>
                BYND BD
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-heading text-[10px] font-bold uppercase tracking-[0.15em] transition-colors",
                    isTransparent ? "text-bynd-cream hover:text-bynd-gold" : "text-bynd-ash hover:text-bynd-flame"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA — Pill Shape per rule */}
            <div className="hidden md:flex flex-shrink-0 ml-8">
              <Link
                href="/booking"
                className="bg-ember text-white font-heading uppercase text-[9px] font-bold tracking-[0.15em] px-6 py-2 rounded-full shadow-premium hover:shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
              >
                BOOK NOW
              </Link>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              className={cn(
                "md:hidden flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-bynd-flame rounded",
                isTransparent ? "text-white" : "text-bynd-ink"
              )}
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open main menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
