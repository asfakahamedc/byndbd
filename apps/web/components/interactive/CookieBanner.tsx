'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if we haven't set preferred cookie consent
    const consent = localStorage.getItem('beyndesh_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const acceptAll = () => {
    localStorage.setItem('beyndesh_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('beyndesh_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] bg-[#1A1A1A] border-t border-[#4A4A4A] p-4 md:p-6 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white text-sm md:text-base font-body opacity-90 max-w-3xl">
          We use cookies to enhance your journey, analyze site traffic, and personalize content. 
          By clicking <strong className="text-[#FF5F0F]">Accept</strong>, you agree to our use of cookies according to our{' '}
          <Link href="/cookie-policy" className="underline hover:text-[#FF5F0F] transition-colors">
            Cookie Policy
          </Link>.
        </div>
        
        <div className="flex z-10 gap-4 flex-shrink-0 w-full md:w-auto">
          <button 
            onClick={rejectAll}
            className="flex-1 md:flex-none border border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#1A1A1A] px-6 py-2 rounded-full font-heading uppercase text-xs tracking-wider font-bold transition-colors"
          >
            Reject Non-Essential
          </button>
          
          <button 
            onClick={acceptAll}
            className="flex-1 md:flex-none bg-[#FF5F0F] text-white hover:bg-[#E5550D] px-6 py-2 rounded-full font-heading uppercase text-xs tracking-wider font-bold transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
