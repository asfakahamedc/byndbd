"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { MobileMenu } from "./MobileMenu";
import { Container } from "../layout/Container";

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If we scroll past 50px, we treat it as scrolled
  const isScrolled = scrollY > 50;
  
  // The nav starts transparent only if asked to, and we haven't scrolled
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
            "bg-transparent text-bynd-cream": isTransparent,
            "bg-bynd-parchment shadow-soft text-bynd-ink": !isTransparent,
          }
        )}
      >
        <Container>
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-heading font-black uppercase text-2xl tracking-tighter flex-shrink-0"
              aria-label="Bynd BD Home"
            >
              Bynd BD
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-heading uppercase text-[11px] font-bold tracking-[0.2em] hover:text-bynd-flame transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex flex-shrink-0 ml-8">
              <Link
                href="/booking"
                className="bg-ember shadow-flame text-bynd-parchment font-heading uppercase text-[11px] font-black tracking-[0.18em] px-8 py-3.5 rounded-btn hover:bg-ember-hover hover:shadow-flame-lg hover:-translate-y-0.5 transition-all duration-250 active:translate-y-0"
              >
                BOOK NOW →
              </Link>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              className="md:hidden flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-bynd-flame rounded"
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
