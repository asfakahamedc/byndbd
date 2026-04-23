import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import ButtonOutline from '@/components/buttons/ButtonOutline';

export const metadata: Metadata = {
  title: 'Partners & Press — Beyndesh',
  description: 'The company we keep.',
};

export default function PartnersPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-5xl mx-auto flex flex-col space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              PARTNERS & PRESS
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl lg:text-7xl text-[#1A1A1A] leading-[1.1] whitespace-pre-wrap">
              {"THE COMPANY\nWE KEEP."}
            </h1>
          </div>

          {/* Partners Section */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Bangladesh Parjatan Corporation', 'Biman Bangladesh Airlines', 'BRAC', 'Bengal Foundation', 'Grameenphone', 'Local eco-lodges & homestays'].map((partner) => (
                <div key={partner} className="bg-white p-8 rounded-[12px] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center space-y-4 min-h-[200px]">
                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-400">❖</span>
                  </div>
                  <h3 className="font-heading font-bold uppercase text-[#1A1A1A]">{partner}</h3>
                </div>
              ))}
            </div>
            
            <div className="bg-[#FF5F0F]/10 p-6 border border-[#FF5F0F]/20 rounded-[12px] text-center">
              <p className="font-body text-[#1A1A1A] text-lg">
                Interested in partnering? Email <a href="mailto:partners@beyndesh.com" className="font-bold underline hover:text-[#FF5F0F] transition-colors">partners@beyndesh.com</a>
              </p>
            </div>
          </div>

          {/* Press Section */}
          <div className="border-t border-gray-200 pt-16 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="font-heading font-bold uppercase text-2xl text-[#1A1A1A]">Featured In</h2>
                <ul className="space-y-4 font-heading text-lg text-[#4A4A4A] tracking-wider uppercase font-semibold">
                  <li>— The Daily Star</li>
                  <li>— Lonely Planet</li>
                  <li>— Wanderlust Magazine</li>
                  <li>— Bangladesh Monitor</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="font-heading font-bold uppercase text-2xl text-[#1A1A1A]">Media Kit</h2>
                <p className="font-body text-[#4A4A4A]">
                  Brand guidelines, photography, founder bio, fact sheet.
                </p>
                <ButtonOutline label="DOWNLOAD MEDIA KIT →" href="#" />
                
                <div className="pt-4 space-y-2">
                  <p className="font-body text-[#4A4A4A] text-sm">
                    Press inquiries: <a href="mailto:press@beyndesh.com" className="font-bold hover:text-[#FF5F0F] transition-colors">press@beyndesh.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[12px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl text-center md:text-left">
                <h3 className="font-heading font-bold uppercase text-[#1A1A1A] text-xl">Hosted Trips</h3>
                <p className="font-body text-[#4A4A4A]">We occasionally host press trips for select journalists and travel writers.</p>
              </div>
              <ButtonOutline label="APPLY FOR A PRESS TRIP →" href="#" color="black" />
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
