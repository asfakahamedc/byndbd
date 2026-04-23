import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us — Beyndesh',
  description: "We didn't start a travel company. We started a homecoming.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto flex flex-col space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              WHO WE ARE
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] whitespace-pre-wrap">
              {"WE DIDN'T START A TRAVEL COMPANY.\nWE STARTED A HOMECOMING."}
            </h1>
          </div>

          {/* Body */}
          <div className="font-body text-[#4A4A4A] text-lg md:text-xl leading-relaxed space-y-6 max-w-3xl mx-auto">
            <p>
              <strong>Beyndesh</strong> — 'Beyond' meets 'Desh' (homeland). We are Bangladeshis building the travel agency we wished existed when friends asked us, 'Why should I visit Bangladesh?'
            </p>
            <p>
              The answer was always too big for a text message. So we built this.
            </p>
            <p>
              Bangladesh cradles the largest mangrove swamp in the world, Buddhist kingdoms dated back to the 3rd century B.C., lush tea plantations, stunning beaches, temples full of terracotta on the walls, mosques — and its people, the most generous and open-hearted you'll meet.
            </p>
            <p>
              The country is compact — roughly the size of Greece — but its density of experience is exceptional.
            </p>
            <p>
              We are a team of 12 — guides, fixers, photographers, and storytellers — spread across Dhaka, Sylhet, Bandarban, Khulna, and Cox's Bazar. Between us, we speak Bangla, English, Chakma, and Marma. We've walked every trail we sell and eaten at every table we recommend.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="flex flex-col space-y-4">
              <h3 className="font-heading font-bold uppercase text-[#1A1A1A] text-xl">
                1. PEOPLE FIRST, ALWAYS
              </h3>
              <p className="font-body text-[#4A4A4A]">
                Every trip begins with a person, not a place. The fisherman in Cox's Bazar. The Chakma grandmother who weaves on a backstrap loom. The tea plucker in Sreemangal who names 40 varieties by leaf. We build journeys around their stories because tourism should enrich both sides.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h3 className="font-heading font-bold uppercase text-[#1A1A1A] text-xl">
                2. SLOW TRAVEL, DEEP ROOTS
              </h3>
              <p className="font-body text-[#4A4A4A]">
                We don't do 7-countries-in-10-days. Bangladesh is not a checklist destination. Its attractions are deeply connected to living culture, rivers, food, and everyday life.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h3 className="font-heading font-bold uppercase text-[#1A1A1A] text-xl">
                3. RESPONSIBLE BY DEFAULT
              </h3>
              <p className="font-body text-[#4A4A4A]">
                We hire local. We stay local. We eat local. 80% of every booking stays in the community you visit. Local communities, particularly in the Hill Tracts and Sundarbans, are empowered to run eco-lodges and guided tours.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="pt-24 space-y-12">
            <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl text-[#1A1A1A] text-center">
              Meet the Humans Behind Beyndesh
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Team Card */}
              <div className="flex flex-col bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-[4/5] bg-gray-200 relative w-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1A5276]/20 to-[#2D5016]/20 mix-blend-multiply" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-heading font-bold uppercase text-[#1A1A1A] text-xl mb-1">
                    Rafiq Ahmed
                  </h4>
                  <p className="text-[#FF5F0F] font-heading font-semibold uppercase text-xs tracking-wider mb-2">
                    Lead Naturalist · Khulna
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Bangla, English · 15 years in the Sundarbans
                  </p>
                  <p className="font-body text-[#4A4A4A] italic text-sm">
                    "I've tracked tigers since I was nineteen. My father was a honey collector — a mowal. I guide because I want people to fall in love with this forest the way my family does."
                  </p>
                </div>
              </div>
              
              {/* Additional generic placeholders for grid layout */}
              <div className="flex flex-col bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-[4/5] bg-gray-200 relative w-full" />
                <div className="p-6 flex flex-col flex-1">
                   {/* Empty placeholder for visual parity */}
                   <p className="text-gray-400 font-body text-center mt-auto mb-auto">Meet more of the team...</p>
                </div>
              </div>

              <div className="flex flex-col bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-[4/5] bg-gray-200 relative w-full" />
                <div className="p-6 flex flex-col flex-1">
                   {/* Empty placeholder for visual parity */}
                   <p className="text-gray-400 font-body text-center mt-auto mb-auto">Meet more of the team...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 pb-8 text-center">
            <span className="font-signature italic text-3xl md:text-4xl text-[#FF5F0F]">
              Come as a guest. Leave as family.
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
