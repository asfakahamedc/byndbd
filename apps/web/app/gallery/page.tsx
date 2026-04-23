'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Rivers & Boats', 'Sundarbans', 'Hill Tracts', 'Sylhet', 'Dhaka', "Cox's Bazar", 'Heritage', 'People', 'Food', 'Wildlife'];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto flex flex-col space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              GALLERY
            </span>
            <div className="flex flex-col items-center justify-center">
              <span className="font-signature italic text-3xl md:text-4xl text-[#FF5F0F] rotate-[-2deg] mb-2 block">
                every photo tells a journey
              </span>
              <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl lg:text-7xl text-[#1A1A1A] leading-[1.1] whitespace-pre-wrap">
                {"SEE BANGLADESH\nTHROUGH OUR EYES."}
              </h1>
            </div>
            <p className="font-body text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              These aren't stock photos. Every image was taken by our guides, our travelers, or our in-house photographer during real Beyndesh trips. This is what Bangladesh actually looks like.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 pt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-heading uppercase text-xs tracking-wider transition-colors border ${
                  activeFilter === filter 
                    ? 'border-[#FF5F0F] bg-[#FF5F0F] text-white' 
                    : 'border-gray-300 text-[#4A4A4A] hover:bg-white hover:border-gray-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Video Section */}
          <div className="w-full pt-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col bg-[#1A1A1A] rounded-[12px] overflow-hidden shadow-sm aspect-video relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A5276]/40 to-transparent mix-blend-multiply flex items-center justify-center z-10">
                   <div className="w-16 h-16 bg-[#FF5F0F] rounded-full flex items-center justify-center cursor-pointer transition-transform group-hover:scale-110">
                     <span className="text-white ml-1">▶</span>
                   </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="font-heading uppercase font-bold text-white text-xl">The Delta</h3>
                  <p className="font-body text-white/80 text-sm">3:42</p>
                </div>
              </div>

              <div className="flex flex-col bg-[#1A1A1A] rounded-[12px] overflow-hidden shadow-sm aspect-video relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2D5016]/40 to-transparent mix-blend-multiply flex items-center justify-center z-10">
                   <div className="w-16 h-16 bg-[#FF5F0F] rounded-full flex items-center justify-center cursor-pointer transition-transform group-hover:scale-110">
                     <span className="text-white ml-1">▶</span>
                   </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="font-heading uppercase font-bold text-white text-xl">First Steps in Bandarban</h3>
                  <p className="font-body text-white/80 text-sm">2:15</p>
                </div>
              </div>
            </div>
          </div>

          {/* Masonry Photo Grid Placeholder */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 pt-8 space-y-6">
            
            <div className="relative break-inside-avoid shadow-sm rounded-[12px] overflow-hidden group">
              <div className="w-full aspect-[4/5] bg-gray-200" />
              <div className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[#FF5F0F] font-heading font-semibold uppercase text-xs tracking-wider mb-2">Sundarbans</span>
                <p className="text-white font-body text-sm mb-4">A Royal Bengal Tiger caught on camera during a misty morning tracking expedition.</p>
                <div className="flex justify-between items-center text-xs text-white/60">
                  <span>By Rafiq Ahmed</span>
                  <a href="/trips/sundarbans-safaris" className="hover:text-white uppercase font-heading font-medium tracking-wider">Sundarbans Safari →</a>
                </div>
              </div>
            </div>

            <div className="relative break-inside-avoid shadow-sm rounded-[12px] overflow-hidden group">
              <div className="w-full aspect-[3/2] bg-gray-300" />
              <div className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[#FF5F0F] font-heading font-semibold uppercase text-xs tracking-wider mb-2">Barisal</span>
                <p className="text-white font-body text-sm mb-4">The vibrant floating guava market at dawn. Trading happens entirely boat-to-boat.</p>
                <div className="flex justify-between items-center text-xs text-white/60">
                  <span>By Sarah K.</span>
                  <a href="/trips/river-expeditions" className="hover:text-white uppercase font-heading font-medium tracking-wider">River Expeditions →</a>
                </div>
              </div>
            </div>

            <div className="relative break-inside-avoid shadow-sm rounded-[12px] overflow-hidden group">
              <div className="w-full aspect-square bg-gray-200" />
              <div className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[#FF5F0F] font-heading font-semibold uppercase text-xs tracking-wider mb-2">Sylhet</span>
                <p className="text-white font-body text-sm mb-4">Plucking the two leaves and a bud in Sreemangal's estate.</p>
                <div className="flex justify-between items-center text-xs text-white/60">
                  <span>By Beyndesh</span>
                  <a href="/trips/tea-country-sylhet" className="hover:text-white uppercase font-heading font-medium tracking-wider">Tea Country →</a>
                </div>
              </div>
            </div>

            <div className="relative break-inside-avoid shadow-sm rounded-[12px] overflow-hidden group">
              <div className="w-full aspect-[4/3] bg-gray-300" />
              <div className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[#FF5F0F] font-heading font-semibold uppercase text-xs tracking-wider mb-2">Bandarban</span>
                <p className="text-white font-body text-sm mb-4">The view from Keokradong peak as the morning fog rolls off the mountains.</p>
                <div className="flex justify-between items-center text-xs text-white/60">
                  <span>By Marcus T.</span>
                  <a href="/trips/hill-tracts-trekking" className="hover:text-white uppercase font-heading font-medium tracking-wider">Hill Tracts →</a>
                </div>
              </div>
            </div>

            {/* Additional placeholders */}
            <div className="relative break-inside-avoid shadow-sm rounded-[12px] overflow-hidden group">
              <div className="w-full aspect-[2/3] bg-gray-200" />
            </div>
            <div className="relative break-inside-avoid shadow-sm rounded-[12px] overflow-hidden group">
              <div className="w-full aspect-square bg-gray-300" />
            </div>

          </div>

          <div className="pt-16 pb-8 text-center bg-[#FF5F0F]/10 p-6 rounded-[12px] border border-[#FF5F0F]/20">
            <p className="font-body text-[#1A1A1A] text-lg">
              Have a story from your Beyndesh trip? Tag us <strong>@beyndesh</strong> or email <a href="mailto:stories@beyndesh.com" className="font-bold underline hover:text-[#FF5F0F] transition-colors">stories@beyndesh.com</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
