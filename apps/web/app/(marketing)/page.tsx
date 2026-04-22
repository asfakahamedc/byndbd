import type { Metadata } from "next";
import { getFeaturedTrips } from "@beyndesh/api";
import HeroFullscreen from "@/components/heroes/HeroFullscreen";
import TripCard from "@/components/cards/TripCard";
import { Container } from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Beyndesh | Premium Adventure Travel in Bangladesh",
  description:
    "Discover the untold beauty of Bangladesh. Expertly guided expeditions, cultural immersions, and luxury adventures.",
};

export const revalidate = 3600; // ISR 1 hour

export default async function HomePage() {
  // Fetch featured trips from the database (via @beyndesh/api)
  const featuredTrips = await getFeaturedTrips(3);

  return (
    <main id="main-content" className="flex flex-col min-h-screen">
      {/* ── HERO SECTION ── */}
      <HeroFullscreen
        heading="BEYOND THE LAND"
        tagline="Premium adventure travel across the untold frontiers of Bangladesh."
        signatureText="Welcome to Beyndesh"
        imageUrl="/images/placeholders/hero.jpg" // Structural placeholder
        primaryCta="EXPLORE EXPEDITIONS"
        primaryHref="/trips"
        secondaryCta="CURATE YOUR JOURNEY"
        secondaryHref="/trips/tailor-made"
        overlayStrength="heavy"
      />

      {/* ── FEATURED TRIPS (DATA-DRIVEN) ── */}
      <SectionWrapper className="bg-bynd-paper py-24">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="font-heading text-bynd-orange uppercase tracking-widest text-sm font-bold mb-2">
                Curated Experiences
              </p>
              <h2 className="font-heading text-heading-2 uppercase text-bynd-black">
                Featured Expeditions
              </h2>
            </div>
            <a
              href="/trips"
              className="font-heading uppercase text-sm tracking-wider text-bynd-black hover:text-bynd-orange transition-colors mt-4 md:mt-0 underline underline-offset-4 decoration-bynd-orange/30 hover:decoration-bynd-orange"
            >
              View All Trips
            </a>
          </div>

          {featuredTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTrips.map((trip) => (
                <TripCard
                  key={trip.id}
                  title={trip.title}
                  slug={trip.slug}
                  imageUrl={trip.coverImageUrl || "/images/placeholders/trip.jpg"}
                  location="Bangladesh" // Would come from destination relation
                  days={trip.duration}
                  price={`৳${trip.priceBDT.toLocaleString()}`}
                  difficulty={trip.difficulty as any}
                  category="Adventure" // Would come from category relations
                />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 font-body">
                Featured trips are currently being curated. Check back soon.
              </p>
            </div>
          )}
        </Container>
      </SectionWrapper>

      {/* ── BRAND PILLAR / ABOUT ── */}
      <SectionWrapper className="bg-bynd-black text-white py-32">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-heading text-display-2 uppercase mb-8">
              The Untamed <span className="text-bynd-orange">Bengal</span>
            </h2>
            <p className="font-body text-body-lg text-white/80 leading-relaxed mb-10">
              We go where others don't. Deep into the Sundarbans mangrove forests,
              high up the rugged trails of the Chittagong Hill Tracts, and out
              into the vastness of the Bay of Bengal. Beyndesh provides exclusive,
              expert-led access to the most pristine environments in South Asia.
            </p>
            <a
              href="/about"
              className="inline-block border border-white/20 hover:border-bynd-orange hover:bg-bynd-orange text-white px-8 py-4 rounded-full font-heading tracking-widest text-sm uppercase transition-all"
            >
              Our Philosophy
            </a>
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}
