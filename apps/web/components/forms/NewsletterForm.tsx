'use client';

import { useState } from 'react';

function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1200);
  };

  if (status === 'success') {
    return <div className="text-xs font-heading font-bold uppercase tracking-widest text-bynd-gold bg-bynd-charcoal px-6 py-4 rounded-panel">✅ Welcome to the Bynd BD Club!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 w-full overflow-hidden rounded-btn">
      <input 
        type="email" 
        placeholder="EMAIL ADDRESS" 
        required 
        className="flex-1 bg-white/10 border-r-0 text-bynd-parchment placeholder-bynd-mist/40 border-[1.5px] border-white/20 px-6 py-4 focus:outline-none focus:border-bynd-flame transition-colors font-heading text-xs tracking-widest uppercase font-bold"
      />
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="bg-ember shadow-flame text-bynd-parchment font-heading uppercase text-xs font-black tracking-[0.2em] px-10 py-4 hover:bg-ember-hover transition-all duration-300 disabled:opacity-50"
      >
        JOIN &rarr;
      </button>
    </form>
  );
}

export default NewsletterForm;
