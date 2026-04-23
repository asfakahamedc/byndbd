import { Metadata } from 'next';
import { TripCard, TestimonialCard, StoryCard } from '@/components/cards';
import HeroSection from '@/components/heroes/HeroSection';
import { Carousel } from '@/components/carousels/Carousel';
import { NewsletterForm } from '@/components/forms';
import { Container } from '@/components/layout/Container';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Bynd BD — Beyond Every Horizon Lies Bangladesh',
  description: 'Premium adventure travel in Bangladesh. Where rivers write the stories.',
};

export default function Home() {
  return (
    <>
      {/* SECTION 1A — HERO */}
      <HeroSection 
        signatureText="Where rivers write the stories"
        heading={"BEYOND EVERY\nHORIZON LIES\nBANGLADESH."}
        subheading="We design travel experiences for those who seek the path less traveled — from the tiger's domain in the Sundarbans to the cloud-wrapped peaks of Bandarban."
        ctaText="EXPLORE OUR JOURNEYS →"
      />

      {/* SECTION 1B — MISSION */}
      <section className="w-full bg-horizon-warm text-bynd-ink py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
            <span className="font-heading uppercase text-[11px] font-bold tracking-[0.25em] text-bynd-flame-deep">OUR MISSION</span>
            
            <h2 className="font-display uppercase text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] text-bynd-ink">
              WE BELIEVE THE MOST MEANINGFUL JOURNEYS BEGIN WHERE THE GUIDEBOOKS END — IN THE WARMTH OF A STRANGER'S WELCOME, THE RHYTHM OF A RIVER, AND THE TASTE OF HOME-COOKED HILSA ON A MONSOON EVENING.
            </h2>
            
            <div className="font-display text-lg md:text-xl space-y-6 text-bynd-ink/90 text-left max-w-3xl mx-auto mt-8">
              <p>
                Bangladesh, the land of rivers and lush green landscapes, has been steadily emerging as a captivating tourist destination in South Asia, offering travelers unique experiences that remain relatively unexplored by mass tourism.
              </p>
              <p>
                Our team was born here. We grew up on these rivers, climbed these hills, and broke bread in these villages. We don't just plan trips — we open doors to the Bangladesh that only locals know. The country has more navigable waterways than almost any country in the world — over 24,000 km of rivers and canals. Each one carries a story we want to share.
              </p>
              <p>
                There is no tourism scam culture here. People are genuinely surprised and delighted to see travelers, especially outside Dhaka. You will be invited into homes, offered tea before you ask, and treated not as a customer — but as a guest.
              </p>
            </div>
            
            <span className="font-signature italic text-3xl pt-8 text-bynd-flame-deep">
              — with love from the delta
            </span>
          </div>
        </Container>
      </section>

      {/* SECTION 1C — TRIP CATEGORIES GRID */}
      <section className="w-full bg-bynd-parchment py-24 md:py-32">
        <Container>
          <div className="text-center mb-16">
            <span className="text-bynd-flame font-heading uppercase text-[11px] font-bold tracking-[0.25em] mb-4 block">OUR JOURNEYS</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TripCard 
              category="RIVER EXPEDITIONS" 
              title="RIVER EXPEDITIONS"
              description="Float through the veins of Bangladesh — from Barisal's floating markets to the tidal channels of the Sundarbans. Traveling by boat reveals a Bangladesh invisible from roads — floating markets, river island communities, fishermen casting nets at dawn, and villages connected to the outside world only by water."
              href="/trips/river-expeditions"
            />
            <TripCard 
              category="SUNDARBANS SAFARIS" 
              title="SUNDARBANS SAFARIS"
              description="The Sundarbans is one of the natural wonders of Bangladesh and a UNESCO World Heritage site. The mangrove forest is home to the Royal Bengal Tiger, spotted deer, crocodiles, and many species of birds. Our multi-day boat expeditions take you deep with expert naturalist guides."
              href="/trips/sundarbans-safaris"
            />
            <TripCard 
              category="HILL TRACTS TREKKING" 
              title="HILL TRACTS TREKKING"
              description="Bandarban's mountainous terrain presents thrilling hiking opportunities and breathtaking viewpoints. The district is home to ethnic tribal communities with distinct cultures and traditions. Trek to Keokradong, bathe under Nafakhum waterfall, sleep in Mro and Marma villages."
              href="/trips/hill-tracts-trekking"
            />
            <TripCard 
              category="TEA COUNTRY & SYLHET" 
              title="TEA COUNTRY & SYLHET"
              description="Sylhet, known as the 'Land of Two Leaves and a Bud,' is a lush region of tea plantations and rivers flowing from the Khasi mountains. Visit Ratargul Swamp Forest — South Asia's only freshwater swamp forest — and taste the legendary seven-layer tea of Sreemangal."
              href="/trips/tea-country-sylhet"
            />
            <TripCard 
              category="OLD DHAKA IMMERSION" 
              title="OLD DHAKA IMMERSION"
              description="The bustling riverside port is a hive of activity mixing small canoe river taxis with larger overnight river cruises. The architecture ebbs from crumbling colonial ghosts contrasted by gleaming skyscrapers, but the streets everywhere are the same bustling energy-filled chaos."
              href="/trips/old-dhaka-immersion"
            />
            <TripCard 
              category="COX'S BAZAR & ISLANDS" 
              title="COX'S BAZAR & ISLANDS"
              description="Cox's Bazar continues to reign supreme as Bangladesh's crown jewel for tourism. Boasting the world's longest natural sea beach stretching an impressive 120 kilometers, this coastal paradise offers golden sands and breathtaking sunsets. Continue south to St. Martin's — the country's only coral island."
              href="/trips/coxs-bazar-islands"
            />
            <TripCard 
              category="HERITAGE & RUINS" 
              title="HERITAGE & RUINS"
              description="Walk through a thousand years of history. Somapura Mahavihara at Paharpur is one of the largest Buddhist monasteries south of the Himalayas and a UNESCO World Heritage Site. Explore the Sixty Dome Mosque in Bagerhat, Lalbagh Fort, and the abandoned city of Panam Nagar."
              href="/trips/heritage-ruins"
            />
            <TripCard 
              category="TAILOR-MADE TRIPS" 
              title="TAILOR-MADE TRIPS"
              description="Your Bangladesh, your way. Tell us what excites you — boat life, birding, textiles, food, photography, or simply getting wonderfully lost — and our local experts will build a journey that exists for no one but you."
              href="/tailor-made"
            />
          </div>
        </Container>
      </section>

      {/* SECTION 1D — HANDPICKED CAROUSEL */}
      <section className="w-full bg-dusk py-24 md:py-32">
        <Carousel 
          label="HANDPICKED BY OUR LOCAL EXPERTS"
          signatureText="curated from experience"
        >
          <div className="w-[300px] md:w-[350px] flex-shrink-0">
            <TripCard category="Sundarbans Safaris" location="Khulna Division" title="Sundarbans Tiger Expedition" price="From ৳45,000 / $380" nextDate="15 Nov → 18 Nov 2026" href="/trips/sundarbans-safaris/sundarbans-tiger-expedition" />
          </div>
          <div className="w-[300px] md:w-[350px] flex-shrink-0">
            <TripCard category="Hill Tracts Trekking" location="Bandarban, CHT" title="Keokradong Peak Trek & Tribal Stay" price="From ৳35,000 / $295" nextDate="5 Dec → 10 Dec 2026" href="/trips/hill-tracts-trekking/keokradong-peak-trek" />
          </div>
          <div className="w-[300px] md:w-[350px] flex-shrink-0">
            <TripCard category="Tea Country & Sylhet" location="Sreemangal, Sylhet" title="Seven-Layer Tea & Swamp Forest" price="From ৳22,000 / $185" nextDate="20 Jan → 23 Jan 2027" href="/trips/tea-country-sylhet/seven-layer-tea" />
          </div>
          <div className="w-[300px] md:w-[350px] flex-shrink-0">
            <TripCard category="River Expeditions" location="Barisal Division" title="Floating Markets & Delta Life" price="From ৳28,000 / $235" nextDate="12 Feb → 16 Feb 2027" href="/trips/river-expeditions/floating-markets" />
          </div>
          <div className="w-[300px] md:w-[350px] flex-shrink-0">
            <TripCard category="Old Dhaka Immersion" location="Dhaka" title="48 Hours in Old Dhaka: Food, Faith & Fury" price="From ৳15,000 / $125" nextDate="Any weekend, year-round" href="/trips/old-dhaka-immersion/48-hours" />
          </div>
        </Carousel>
      </section>

      {/* SECTION 1E — TESTIMONIALS */}
      <section className="w-full bg-horizon py-24 md:py-32">
        <Container>
          <div className="text-center mb-16">
            <span className="text-bynd-flame font-heading uppercase text-[11px] font-bold tracking-[0.25em] mb-4 block">WHAT TRAVELERS SAY</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="I've been to 47 countries. Bangladesh was the first one where complete strangers invited me into their homes for dinner — not once, but four times in a single week. Bynd BD made that possible by connecting us with real communities, not tourist traps."
              author="JAMES"
              tripDetails="Sundarbans & Barisal River Expedition"
            />
            <TestimonialCard 
              quote="The boat ride through Ratargul Swamp Forest was otherworldly — like paddling through a flooded cathedral. Our guide Rafiq knew every bird by its song. I still dream about that morning."
              author="SOFIA"
              tripDetails="Sylhet Tea Country Tour"
            />
            <TestimonialCard 
              quote="We trekked for three days in Bandarban with a Marma guide who cooked bamboo chicken over a fire and told us stories that no book could contain. This wasn't tourism. This was real."
              author="MARCUS"
              tripDetails="Hill Tracts Trekking Expedition"
            />
          </div>
        </Container>
      </section>

      {/* SECTION 1F — PARTNERS STRIP */}
      <section className="w-full bg-bynd-linen py-12 border-y border-bynd-border">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            <span className="font-heading uppercase tracking-[0.2em] font-bold text-bynd-ink">Biman Bangladesh</span>
            <span className="font-heading uppercase tracking-[0.2em] font-bold text-center text-bynd-ink">Bangladesh Parjatan Corporation</span>
            <span className="font-heading uppercase tracking-[0.2em] font-bold text-bynd-ink">The Daily Star</span>
            <span className="font-heading uppercase tracking-[0.2em] font-bold text-bynd-ink">Bengal Foundation</span>
            <span className="font-heading uppercase tracking-[0.2em] font-bold text-bynd-ink">Grameenphone</span>
            <span className="font-heading uppercase tracking-[0.2em] font-bold text-bynd-ink">BRAC</span>
          </div>
        </Container>
      </section>

      {/* SECTION 1G — STORIES CAROUSEL */}
      <section className="w-full bg-bynd-parchment pt-24 pb-16">
        <Carousel label="BYND BD STORIES">
          <div className="w-[300px] md:w-[400px] flex-shrink-0">
            <StoryCard 
              category="Stories" 
              title="The Boatmen of Barisal: A Vanishing Song" 
              excerpt="How the Bhatiali river songs are disappearing — and why we're recording them before they're gone." 
              href="/stories/boatmen" 
            />
          </div>
          <div className="w-[300px] md:w-[400px] flex-shrink-0">
            <StoryCard 
              category="Stories" 
              title="Eating Old Dhaka: A Midnight Food Crawl" 
              excerpt="Biryani, kebab, falooda, and the 3am chai that changed everything." 
              href="/stories/old-dhaka-food" 
            />
          </div>
          <div className="w-[300px] md:w-[400px] flex-shrink-0">
            <StoryCard 
              category="Stories" 
              title="Into the Mangroves: 72 Hours in the Sundarbans" 
              excerpt="Tigers, tides, and the silence that makes you listen harder." 
              href="/stories/sundarbans-72-hours" 
            />
          </div>
          <div className="w-[300px] md:w-[400px] flex-shrink-0">
            <StoryCard 
              category="Stories" 
              title="The Seven-Layer Tea of Sreemangal" 
              excerpt="One cup. Seven layers. The story of Romesh Ram and his impossible recipe." 
              href="/stories/seven-layer-tea" 
            />
          </div>
          <div className="w-[300px] md:w-[400px] flex-shrink-0">
            <StoryCard 
              category="Stories" 
              title="Nafakhum: The Waterfall at the End of the Road" 
              excerpt="A three-day trek through the Hill Tracts to Bangladesh's most beautiful secret." 
              href="/stories/nafakhum" 
            />
          </div>
        </Carousel>
      </section>

      {/* SECTION 1H — NEWSLETTER */}
      <section className="w-full bg-bynd-ink py-20 border-b border-bynd-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 max-w-2xl">
              <h2 className="text-bynd-parchment font-display font-light uppercase text-2xl md:text-3xl mb-4">
                Join the Bynd BD Club — stories, early access, and 10% off your first trip.
              </h2>
            </div>
            <div className="w-full md:w-auto min-w-[300px]">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
