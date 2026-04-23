import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { BookingForm } from '@/components/forms/BookingForm';

export const metadata: Metadata = {
  title: 'Book Your Journey — Beyndesh',
  description: 'Let\'s build your adventure together.',
};

export default function BookingPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-3xl mx-auto flex flex-col space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-6">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              BOOK YOUR JOURNEY
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] whitespace-pre-wrap">
              {"LET'S BUILD YOUR\nADVENTURE TOGETHER."}
            </h1>
            <p className="font-body text-[#4A4A4A] text-lg">
              This is the beginning, not a commitment. Fill out what you know, leave blank what you don't. Our team will respond within 24 hours with a personalized proposal.
            </p>
          </div>

          <div className="pt-8">
            <BookingForm />
          </div>

        </div>
      </Container>
    </div>
  );
}
