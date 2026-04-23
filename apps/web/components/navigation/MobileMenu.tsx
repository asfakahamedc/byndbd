"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Trips", href: "/trips" },
    { name: "About", href: "/about" },
    { name: "Stories", href: "/stories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} 
          className="fixed inset-0 z-50 bg-dusk flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="text-bynd-parchment p-2 focus:outline-none focus:ring-2 focus:ring-bynd-flame rounded-btn"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-12">
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="font-display uppercase text-heading-2 text-bynd-parchment hover:text-bynd-gold transition-colors italic tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link
              href="/booking"
              onClick={onClose}
              className="mt-8 bg-ember shadow-flame text-bynd-parchment font-heading uppercase tracking-[0.2em] px-12 py-4 rounded-btn hover:bg-ember-hover transition-all font-black text-xs"
              aria-label="Book Now"
            >
              BOOK NOW →
            </Link>
          </div>

          <div className="p-12 border-t border-white/10 flex flex-col items-center space-y-8">
            <div className="flex space-x-8 text-bynd-parchment">
              <Instagram className="w-6 h-6 hover:text-bynd-gold transition-colors cursor-pointer" />
              <Facebook className="w-6 h-6 hover:text-bynd-gold transition-colors cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-bynd-gold transition-colors cursor-pointer" />
            </div>
            <div className="text-bynd-parchment/40 text-[10px] font-heading font-bold uppercase tracking-[0.25em]">
              hello@byndbd.com | Dhaka, Bangladesh
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
