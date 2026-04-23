'use client';

import { ReactNode, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode;
  label?: string;
  signatureText?: string;
  className?: string;
}

export function Carousel({ children, label, signatureText, className = '' }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Header section */}
      {(label || signatureText) && (
        <div className="flex flex-col items-center justify-center text-center mb-10 w-full px-4">
          {label && (
            <span className="text-[#FF5F0F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4">
              {label}
            </span>
          )}
          {signatureText && (
            <span className="font-signature italic text-[#FAF7F2] text-3xl md:text-4xl opacity-90">
              {signatureText}
            </span>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="absolute right-4 top-4 md:right-8 lg:right-12 hidden md:flex items-center gap-2 z-10">
        <button 
          onClick={scrollLeft}
          className="bg-[#1A1A1A] hover:bg-[#FF5F0F] text-[#FAF7F2] p-2 rounded-full border border-gray-600 transition-colors"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={scrollRight}
          className="bg-[#1A1A1A] hover:bg-[#FF5F0F] text-[#FAF7F2] p-2 rounded-full border border-gray-600 transition-colors"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scrolling Container */}
      <div className="w-full overflow-hidden relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-4 md:px-8 lg:px-12 pb-8 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
