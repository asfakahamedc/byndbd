import { Metadata } from 'next';
import { TripCard, TestimonialCard, StoryCard } from '@/components/cards';
import HeroSection from '@/components/heroes/HeroSection';
import { Carousel } from '@/components/carousels/Carousel';
import { NewsletterForm } from '@/components/forms';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/typography/SectionTitle';
import { BrandIcon } from '@/components/branding/BrandIcon';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Bynd BD — Beyond Bangladesh',
  description: 'Premium adventure travel in Bangladesh. Travel beyond the last light.',
};

export default function Home() {
  return (
    <>
      {/* SECTION 1A — HERO */}
      <HeroSection 
        signatureText="Beyond Bangladesh"
        heading={"Beyond the last light."}
        subheading="Bespoke adventure travel and cultural experiences. We design journeys for the curious, the adventurous, and the seekers of truth."
        ctaText="DISCOVER YOUR BEYOND"
      />

      {/* SECTION 1B — THE BRAND IDENTITY MISSION */}
      <section className="w-full bg-white py-32 md:py-48 relative overflow-hidden">
        {/* Subtle Sunrise wash as specified for large light surfaces */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sunrise opacity-5 pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <SectionTitle label="OUR MISSION" title="The journey is the destination." />
              
              <div className="font-body text-xl md:text-2xl space-y-8 text-bynd-stone leading-relaxed italic">
                <p>
                  "We believe the most meaningful journeys begin where the guidebooks end — in the warmth of a stranger's welcome, the rhythm of a river, and the taste of home-cooked hilsa on a monsoon evening."
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <div className="w-12 h-px bg-bynd-flame" />
                  <span className="font-heading text-[10px] tracking-[0.2em] text-bynd-flame">
                    ASFAK CHOWDHURY — FOUNDER & TRAVEL CURATOR
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-20 md:pt-0">
               {/* STENCIL LOGIC ICONS GRID per rule */}
               <BrandIcon type="flight" />
               <BrandIcon type="map" />
               <BrandIcon type="hotel" />
               <BrandIcon type="support" />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 1C — JOURNEY CATEGORIES */}
      <section className="w-full bg-bynd-parchment py-32">
        <Container>
          <SectionTitle label="ALL JOURNEYS" title="Beyond every horizon lies Bangladesh." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
            <TripCard 
              category="RIVER EXPEDITIONS" 
              title="THE VEINS OF THE DELTA"
              description="Float through the veins of Bangladesh — from Barisal's floating markets to the tidal channels of the Sundarbans. Traveling by boat reveals a Bangladesh invisible from roads."
              href="/trips/river-expeditions"
            />
            <TripCard 
              category="SUNDARBANS SAFARIS" 
              title="TIGER'S DOMAIN"
              description="The Sundarbans Mangrove forest is home to the Royal Bengal Tiger, spotted deer, and crocodiles. Expediton boat trips deeper into the UNESCO World Heritage Site."
              href="/trips/sundarbans-safaris"
            />
            <TripCard 
              category="HILL TRACTS TREKKING" 
              title="CLOUDS OVER BANDARBAN"
              description="Trek to Keokradong, bathe under Nafakhum waterfall, and sleep in Mro and Marma villages. The district is home to ethnic tribal communities with distinct cultures."
              href="/trips/hill-tracts-trekking"
            />
          </div>
        </Container>
      </section>

      {/* SECTION 1D — THE DUSK EXPERIENCE (CURATED) */}
      <section className="w-full bg-dusk py-32 md:py-48 text-bynd-cream">
        <Container>
          <SectionTitle label="CURATED EXPERIENCES" title="Bespoke Routes" onDark />
          
          <Carousel onDark>
             <div className="w-[320px] md:w-[450px] flex-shrink-0">
                <TripCard category="Featured" title="Sundarbans Tiger Expedition" href="/trips/sundarbans" />
             </div>
             <div className="w-[320px] md:w-[450px] flex-shrink-0">
                <TripCard category="Limited" title="Floating Markets of Barisal" href="/trips/barisal" />
             </div>
             <div className="w-[320px] md:w-[450px] flex-shrink-0">
                <TripCard category="Expedition" title="Keokradong Summit Trek" href="/trips/bandarban" />
             </div>
          </Carousel>
        </Container>
      </section>

      {/* SECTION 1G — STORIES (FOG BASE) */}
      <section className="w-full bg-bynd-linen/30 py-32">
        <Container>
          <SectionTitle label="STORIES & DISCOURSES" title="See you Beyond." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <StoryCard 
              category="Stories" 
              title="The Boatmen of Barisal: A Vanishing Song" 
              excerpt="How the Bhatiali river songs are disappearing — and why we're recording them before they're gone." 
              href="/stories/boatmen" 
            />
            <StoryCard 
              category="Stories" 
              title="Into the Mangroves: 72 Hours in the Sundarbans" 
              excerpt="Tigers, tides, and the silence that makes you listen harder." 
              href="/stories/sundarbans" 
            />
          </div>
        </Container>
      </section>

      {/* SECTION 1H — NEWSLETTER (SUNRISE BASE) */}
      <section className="w-full bg-sunrise py-32 border-b border-black/5">
        <Container>
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
            <SectionTitle label="STAY CONNECTED" title="Discover your beyond." className="mb-0" />
            <p className="font-body text-xl md:text-2xl text-bynd-ink/80 italic max-w-2xl">
              Join the Bynd BD Club for journeys, early access, and stories from the delta.
            </p>
            <div className="w-full max-w-2xl">
              <NewsletterForm />
            </div>
            <span className="font-signature text-3xl text-bynd-ink/30 italic">
              See you Beyond.
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
