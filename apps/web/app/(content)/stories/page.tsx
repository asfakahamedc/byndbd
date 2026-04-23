import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { StoryCard } from '@/components/cards';
import { Carousel } from '@/components/carousels/Carousel';

export const metadata: Metadata = {
  title: 'Dispatches from the Delta — Beyndesh Stories',
  description: 'Travel journals, destination guides, and the stories behind the stories.',
};

export default function StoriesPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto flex flex-col space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              BEYNDESH STORIES
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl lg:text-7xl text-[#1A1A1A] leading-[1.1] whitespace-pre-wrap">
              {"DISPATCHES FROM\nTHE DELTA."}
            </h1>
            <p className="font-body text-[#4A4A4A] text-lg">
              Travel journals, destination guides, and the stories behind the stories. Written by our guides, our travelers, and the people we meet along the way.
            </p>
          </div>

          <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Story */}
              <StoryCard 
                category="RIVER CULTURE"
                title="THE BOATMEN OF BARISAL: A VANISHING SONG"
                excerpt="The Bhatiali — river songs sung by boatmen as they navigate the delta at dusk — is one of Bangladesh's most hauntingly beautiful musical traditions. But as motorized boats replace wooden vessels, the songs are fading. We spent a week recording the last generation of singers."
                href="/stories/boatmen-of-barisal"
                readTime="8 min"
                isFeatured={true}
              />

              {/* Story Grid */}
              <StoryCard 
                category="FOOD & CULTURE"
                title="EATING OLD DHAKA: A MIDNIGHT FOOD CRAWL"
                excerpt="The air in Dhaka's Old City carries the sharp, sweet scent of mustard oil hitting a hot karai, the earthy funk of fermented shutki, and the floral perfume of basmati rice steaming in clay pots. We ate for 7 hours straight."
                href="/stories/old-dhaka-food"
                readTime="6 min"
              />
              <StoryCard 
                category="WILDLIFE"
                title="INTO THE MANGROVES: 72 HOURS IN THE SUNDARBANS"
                excerpt="Our naturalist Rafiq has tracked tigers for 15 years. On day two, we found fresh paw prints in the mud. On day three, we heard the call."
                href="/stories/sundarbans-72-hours"
                readTime="10 min"
              />
              <StoryCard 
                category="TEA & TERROIR"
                title="THE SEVEN-LAYER TEA OF SREEMANGAL"
                excerpt="One cup. Seven layers. Each layer a different flavor, a different temperature, a different story. We met the inventor and learned the secret."
                href="/stories/seven-layer-tea"
                readTime="5 min"
              />
              <StoryCard 
                category="ADVENTURE"
                title="NAFAKHUM: THE WATERFALL AT THE END OF THE ROAD"
                excerpt="A three-day trek through Bandarban's most remote trail to reach Bangladesh's most spectacular waterfall. No road. No signal. No regrets."
                href="/stories/nafakhum"
                readTime="9 min"
              />
              <StoryCard 
                category="HERITAGE"
                title="THE GHOST CITY OF PANAM NAGAR"
                excerpt="Panam Nagar — a fully abandoned city of the Hindu merchants from early 20th century. We explored 52 crumbling mansions and pieced together the story of the families who vanished."
                href="/stories/panam-nagar"
                readTime="7 min"
              />
              <StoryCard 
                category="PEOPLE"
                title="THE CHAKMA QUEEN AND THE HILL TRACTS PEACE"
                excerpt="The Chittagong Hill Tracts are inhabited by eleven Indigenous communities, known collectively as the Jumma people. We traveled to Rangamati to understand their past and their hope."
                href="/stories/chakma-queen"
                readTime="12 min"
              />
              <StoryCard 
                category="CRAFT"
                title="THE WEAVERS OF TANGAIL: THREADS OF IDENTITY"
                excerpt="Tangail sarees are woven on handlooms passed down through generations. We spent three days with a family who makes fabric the same way their great-grandparents did."
                href="/stories/weavers-of-tangail"
                readTime="6 min"
              />
            </div>
          </div>

          <div className="pt-16 pb-8 text-center bg-[#FF5F0F]/10 p-6 rounded-[12px] border border-[#FF5F0F]/20">
            <p className="font-body text-[#1A1A1A] text-lg">
              Have a story from your Beyndesh trip? We'd love to publish it. Email <a href="mailto:stories@beyndesh.com" className="font-bold underline hover:text-[#FF5F0F] transition-colors">stories@beyndesh.com</a>
            </p>
          </div>

        </div>
      </Container>
    </div>
  );
}
