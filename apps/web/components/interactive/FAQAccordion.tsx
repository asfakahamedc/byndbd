'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQ[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-gray-100 last:border-0">
            <button
              className="flex justify-between items-center w-full text-left py-6 focus:outline-none group"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <h3 className={`font-heading font-bold uppercase text-lg md:text-xl transition-colors duration-200 ${isOpen ? 'text-[#FF5F0F]' : 'text-[#1A1A1A] group-hover:text-[#FF5F0F]'}`}>
                {item.question}
              </h3>
              <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-[#FF5F0F]' : 'text-gray-400 group-hover:text-[#FF5F0F]'}`} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="font-body text-[#4A4A4A] leading-relaxed text-lg pb-6">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
