'use client';

import { useState } from 'react';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-[#FAF7F2] p-8 md:p-12 rounded-[12px] text-center">
        <h3 className="font-heading text-2xl uppercase font-bold text-[#1A1A1A] mb-4">Message Sent</h3>
        <p className="font-body text-[#4A4A4A]">
          Thank you for reaching out. A Beyndesh representative will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#FAF7F2] p-8 md:p-12 rounded-[12px] border border-gray-100 flex flex-col space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="font-heading uppercase text-xs font-semibold tracking-widest text-[#4A4A4A]">Name*</label>
          <input required id="name" type="text" className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F] focus:ring-1 focus:ring-[#FF5F0F] transition-all" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-heading uppercase text-xs font-semibold tracking-widest text-[#4A4A4A]">Email*</label>
          <input required id="email" type="email" className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F] focus:ring-1 focus:ring-[#FF5F0F] transition-all" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="origin" className="font-heading text-[#4A4A4A] uppercase text-xs font-semibold tracking-widest">Where are you from?</label>
          <input id="origin" type="text" className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F] focus:ring-1 focus:ring-[#FF5F0F] transition-all" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="dates" className="font-heading text-[#4A4A4A] uppercase text-xs font-semibold tracking-widest">When would you like to travel?</label>
          <input id="dates" type="text" placeholder="e.g. Nov 2026" className="bg-white text-[#1A1A1A] border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F] focus:ring-1 focus:ring-[#FF5F0F] transition-all" />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="interest" className="font-heading text-[#4A4A4A] uppercase text-xs font-semibold tracking-widest">What interests you most?</label>
        <select id="interest" className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F] focus:ring-1 focus:ring-[#FF5F0F] transition-all">
          <option>Rivers & Boats</option>
          <option>Sundarbans & Wildlife</option>
          <option>Hill Tracts & Trekking</option>
          <option>Tea Country & Sylhet</option>
          <option>Old Dhaka & Culture</option>
          <option>Cox's Bazar & Beaches</option>
          <option>Heritage & History</option>
          <option>Food & Culinary</option>
          <option>I don't know yet — surprise me!</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="font-heading text-[#4A4A4A] uppercase text-xs font-semibold tracking-widest">Tell us about your dream trip</label>
        <textarea id="message" rows={5} className="bg-white text-[#1A1A1A] border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F] focus:ring-1 focus:ring-[#FF5F0F] transition-all"></textarea>
      </div>

      <div className="pt-4">
        <ButtonPrimary 
          type="submit" 
          label={status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'} 
          disabled={status === 'submitting'}
          fullWidth
        />
      </div>
    </form>
  );
}
