"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { LogoMark } from "../branding/LogoMark";

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
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 1.1 }}
           transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} 
           className="fixed inset-0 z-50 bg-dusk flex flex-col justify-between"
           role="dialog"
           aria-modal="true"
           aria-label="Mobile Navigation Menu"
        >
          <div className="flex justify-between items-center p-8">
            <LogoMark size={32} color="#FAF9F2" />
            <button
               onClick={onClose}
               className="text-bynd-cream p-2 focus:outline-none focus:ring-2 focus:ring-bynd-flame rounded-full border border-white/10"
               aria-label="Close menu"
            >
               <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-10">
            <nav className="flex flex-col items-center space-y-6 text-center">
               {navLinks.map((link) => (
                 <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="font-body italic text-5xl text-bynd-cream hover:text-bynd-gold transition-all hover:scale-105"
                 >
                    {link.name}
                 </Link>
               ))}
            </nav>
            <Link
               href="/booking"
               onClick={onClose}
               className="mt-12 bg-ember text-white font-heading uppercase tracking-[0.2em] px-12 py-4 rounded-full shadow-premium font-bold text-xs"
               aria-label="Book Now"
            >
               BOOK NOW →
            </Link>
          </div>

          <div className="p-12 border-t border-white/10 flex flex-col items-center space-y-10 text-center">
            <div className="flex space-x-10 text-bynd-cream">
               <Instagram className="w-6 h-6 hover:text-bynd-gold transition-colors" />
               <Facebook className="w-6 h-6 hover:text-bynd-gold transition-colors" />
               <Twitter className="w-6 h-6 hover:text-bynd-gold transition-colors" />
            </div>
            <div className="space-y-2">
               <p className="text-bynd-cream opacity-50 text-[10px] uppercase font-heading tracking-[0.3em]">
                 Gulshan 1, Dhaka, Bangladesh
               </p>
               <p className="font-signature text-3xl text-bynd-gold grad-text italic">
                  See you Beyond.
               </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
