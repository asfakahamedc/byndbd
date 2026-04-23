import { Container } from '@/components/layout/Container';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default function TripDetailPage({ params }: Props) {
  const { category, slug } = params;

  // In a real app, we would fetch data from Prisma here
  // For now, we'll show a premium placeholder
  
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const categoryTitle = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <div className="h-[60vh] relative bg-[#1A1A1A] flex items-end pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-sm">
              {categoryTitle}
            </span>
            <h1 className="text-white font-heading font-bold uppercase text-4xl md:text-6xl lg:text-8xl leading-tight">
              {title}
            </h1>
          </div>
        </Container>
      </div>

      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-6">
              <h2 className="font-heading font-bold uppercase text-2xl tracking-wider text-[#1A1A1A]">OVERVIEW</h2>
              <div className="font-body text-[#4A4A4A] text-lg leading-relaxed space-y-4">
                <p>Experience the heart of Bangladesh on this curated expedition. From the early morning mist over the delta to the vibrant colors of the local markets, every moment is designed to be an immersion in the soul of the land.</p>
                <p>This journey takes you deep into the {categoryTitle} region, where you'll discover landscapes and stories that remain hidden from the average traveler.</p>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[12px] border border-gray-100 shadow-sm sticky top-[120px] space-y-8">
              <div className="space-y-2">
                <span className="text-[#4A4A4A] text-sm font-heading font-bold uppercase tracking-widest">Price</span>
                <p className="text-[#1A1A1A] text-3xl font-heading font-bold uppercase">From ৳35,000</p>
              </div>
              
              <ButtonPrimary label="REQUEST TO BOOK →" href="/booking" className="w-full justify-center" />
              
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#4A4A4A] font-medium">Duration</span>
                  <span className="text-[#1A1A1A] font-bold">5 Days / 4 Nights</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#4A4A4A] font-medium">Difficulty</span>
                  <span className="text-[#1A1A1A] font-bold">Moderate</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
