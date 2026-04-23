'use client';

import { useState } from 'react';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const nextStep = () => setStep(s => Math.min(4, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
      return;
    }
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-[#FAF7F2] p-8 md:p-12 rounded-[12px] text-center border border-gray-100 shadow-sm">
        <h3 className="font-heading text-2xl uppercase font-bold text-[#1A1A1A] mb-4">✅ Thank you!</h3>
        <p className="font-body text-[#4A4A4A] mb-8">
          Your inquiry has been received. One of our travel experts will reach out within 24 hours with a personalized proposal.
        </p>
        <div className="flex flex-col gap-3 justify-center items-center">
          <a href="/stories" className="text-[#FF5F0F] font-heading font-semibold hover:underline">Browse our stories →</a>
          <a href="/faq" className="text-[#FF5F0F] font-heading font-semibold hover:underline">Read our FAQ →</a>
          <a href="#" className="text-[#FF5F0F] font-heading font-semibold hover:underline">Follow us on Instagram →</a>
        </div>
        <p className="font-signature italic text-gray-500 mt-8 text-2xl">Your adventure begins now.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] p-8 md:p-12 rounded-[12px] border border-gray-100 shadow-sm">
      {/* Step Indicator */}
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10 -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 h-[2px] bg-[#FF5F0F] -z-10 -translate-y-1/2 transition-all duration-300" style={{ width: `${((step - 1) / 3) * 100}%` }} />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`flex items-center justify-center w-8 h-8 rounded-full font-heading font-bold text-sm ${step >= i ? 'bg-[#FF5F0F] text-white' : 'bg-gray-200 text-gray-500'}`}>
            {i}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <h3 className="font-heading uppercase text-xl font-bold text-[#1A1A1A]">Step 1 — Who are you?</h3>
            
            <div className="flex flex-col space-y-2">
              <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Full Name*</label>
              <input required type="text" className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Email*</label>
                <input required type="email" className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Phone (with country code)*</label>
                <input required type="tel" className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Nationality</label>
                <input type="text" className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">How did you hear about us?</label>
                <select className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]">
                  <option>Instagram</option>
                  <option>Google</option>
                  <option>Friend</option>
                  <option>Press</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <h3 className="font-heading uppercase text-xl font-bold text-[#1A1A1A]">Step 2 — What excites you?</h3>
            <div className="flex flex-col space-y-2">
              <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Which journey interests you?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {['River Expeditions', 'Sundarbans Safaris', 'Hill Tracts Trekking', 'Tea Country & Sylhet', 'Old Dhaka Immersion', "Cox's Bazar & Islands", 'Heritage & Ruins', 'Tailor-Made', "I don't know yet — surprise me!"].map((opt) => (
                  <label key={opt} className="flex items-center space-x-3 bg-white p-3 border border-gray-200 rounded-md cursor-pointer hover:border-[#FF5F0F] transition-colors">
                    <input type="checkbox" className="text-[#FF5F0F] focus:ring-[#FF5F0F]" />
                    <span className="text-[#1A1A1A] text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <h3 className="font-heading uppercase text-xl font-bold text-[#1A1A1A]">Step 3 — Who's coming?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Adults</label>
                <input type="number" min="1" defaultValue="2" className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Children</label>
                <input type="number" min="0" defaultValue="0" className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]" />
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Traveling as</label>
              <select className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]">
                <option>Solo</option>
                <option>Couple</option>
                <option>Family</option>
                <option>Friends</option>
                <option>Corporate Group</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Special requirements</label>
              <textarea rows={3} placeholder="Dietary needs, accessibility, etc." className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]"></textarea>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <h3 className="font-heading uppercase text-xl font-bold text-[#1A1A1A]">Step 4 — Budget & Style</h3>
            <div className="flex flex-col space-y-2">
              <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Budget per person</label>
              <select className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]">
                <option>Under ৳20,000 / $170</option>
                <option>৳20,000–50,000 / $170–420</option>
                <option>৳50,000–100,000 / $420–840</option>
                <option>৳100,000+ / $840+</option>
                <option>I'd rather discuss this</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Accommodation preference</label>
              <div className="flex flex-col gap-3 mt-2">
                {['Local homestays & eco-lodges', 'Mid-range hotels', 'Premium/boutique', 'Mix of everything'].map((opt) => (
                  <label key={opt} className="flex items-center space-x-3 bg-white p-3 border border-gray-200 rounded-md cursor-pointer hover:border-[#FF5F0F] transition-colors">
                    <input type="radio" name="accommodation" className="text-[#FF5F0F] focus:ring-[#FF5F0F]" />
                    <span className="text-[#1A1A1A] text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-heading text-xs font-semibold tracking-widest text-[#4A4A4A] uppercase">Anything else?</label>
              <textarea rows={3} className="bg-white border text-[#1A1A1A] border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-[#FF5F0F]"></textarea>
            </div>
          </div>
        )}

        {/* Form Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200 mt-8">
          {step > 1 ? (
             <button type="button" onClick={prevStep} className="w-full sm:w-auto font-heading uppercase font-bold text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors py-2 text-center">
               ← BACK
             </button>
          ) : <div className="hidden sm:block" />}
          
          <div className="w-full sm:w-auto">
            <ButtonPrimary 
              type="submit" 
              label={step === 4 ? (status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT INQUIRY') : 'NEXT STEP'} 
              disabled={status === 'submitting'}
              fullWidth
            />
          </div>
        </div>
      </form>
    </div>
  );
}
