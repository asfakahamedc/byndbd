'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { TripCard } from '@/components/cards';
import { cn } from '@/lib/utils';

const DUMMY_TRIPS = [
  {
    category: "Sundarbans Safaris",
    location: "Khulna Division",
    title: "Sundarbans Tiger Expedition",
    price: "From ৳45,000 / $380",
    nextDate: "15 Nov → 18 Nov 2026",
    duration: "4 Days / 3 Nights",
    difficulty: "Easy",
    href: "/trips/sundarbans-safaris/sundarbans-tiger-expedition"
  },
  {
    category: "River Expeditions",
    location: "Barisal Division",
    title: "Floating Markets & Delta Life",
    price: "From ৳28,000 / $235",
    nextDate: "12 Feb → 16 Feb 2027",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy",
    href: "/trips/river-expeditions/floating-markets"
  },
  {
    category: "Hill Tracts Trekking",
    location: "Bandarban",
    title: "Keokradong Peak Trek & Tribal Stay",
    price: "From ৳35,000 / $295",
    nextDate: "5 Dec → 10 Dec 2026",
    duration: "5 Days / 4 Nights",
    difficulty: "Challenging",
    href: "/trips/hill-tracts-trekking/keokradong-peak-trek"
  },
  {
    category: "Tea Country & Sylhet",
    location: "Sreemangal",
    title: "Seven-Layer Tea & Swamp Forest",
    price: "From ৳22,000 / $185",
    nextDate: "20 Jan → 23 Jan 2027",
    duration: "3 Days / 2 Nights",
    difficulty: "Moderate",
    href: "/trips/tea-country-sylhet/seven-layer-tea"
  }
];

export default function AllTripsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'River Expeditions', 'Sundarbans Safaris', 'Hill Tracts Trekking', 'Tea Country & Sylhet', 'Old Dhaka Immersion', 'Heritage & Ruins'];

  return (
    <div className="bg-bynd-parchment min-h-screen pb-24">
      <Container className="pt-24 md:pt-40">
        <div className="max-w-6xl mx-auto flex flex-col space-y-16">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <span className="text-bynd-flame font-heading font-black uppercase tracking-[0.25em] text-[10px]">
              ALL JOURNEYS
            </span>
            <h1 className="font-display font-light uppercase text-5xl md:text-7xl lg:text-8xl text-bynd-ink leading-[1] text-gradient-gold py-2">
              FIND YOUR BANGLADESH.
            </h1>
            <p className="font-display italic text-bynd-stone text-xl md:text-2xl max-w-3xl mx-auto">
              Browse every journey we offer — from weekend escapes in Dhaka to multi-week expeditions across the delta.
            </p>
          </div>

          <div className="bg-bynd-cream p-6 rounded-panel border-gradient-gold shadow-card sticky top-[100px] z-30">
            <div className="flex flex-wrap gap-4 items-center justify-center">
               <span className="font-heading uppercase text-[10px] font-black tracking-[0.2em] text-bynd-ash mr-2">Filter by:</span>
              {categories.map(c => (
                <button 
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={cn(
                    "px-6 py-2.5 rounded-btn text-[10px] font-heading font-black tracking-[0.18em] transition-all",
                    activeCategory === c 
                      ? "bg-ember text-bynd-parchment shadow-flame" 
                      : "bg-bynd-parchment/60 text-bynd-ash hover:bg-bynd-linen hover:text-bynd-flame"
                  )}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {DUMMY_TRIPS.filter(trip => activeCategory === 'All' || trip.category === activeCategory).map((trip) => (
              <TripCard key={trip.title} {...trip} description="A journey through the heart of Bangladesh." />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
