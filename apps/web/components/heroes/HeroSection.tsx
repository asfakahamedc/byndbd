import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';

interface HeroSectionProps {
  signatureText: string;
  heading: string;
  subheading: string;
  ctaText: string;
}

function HeroSection({
  signatureText,
  heading,
  subheading,
  ctaText
}: HeroSectionProps) {
  return (
    <section className="relative h-[100vh] min-h-[700px] flex items-center justify-center w-full overflow-hidden bg-bynd-ink">
      {/* Background with Dusk Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dusk opacity-90 z-10" />
        {/* Scrim Overlay */}
        <div className="absolute inset-0 scrim-full z-15" />
      </div>

      <Container className="relative z-20 flex flex-col items-center text-center">
        {/* Signature accent text */}
        <span className="font-signature italic text-bynd-gold text-3xl md:text-5xl mb-8">
          {signatureText}
        </span>

        {/* Main heading — Transparent text with gradient clip */}
        <h1 
          className="font-display uppercase font-light leading-[0.95] text-5xl md:text-7xl lg:text-9xl tracking-tight max-w-6xl mb-10 whitespace-pre-wrap text-gradient-gold"
        >
          {heading}
        </h1>

        {/* Subheading — Cormorant Garamond */}
        <p className="font-display italic text-bynd-cream text-lg md:text-2xl max-w-[700px] leading-relaxed mb-12 opacity-90">
          {subheading}
        </p>

        {/* CTA Button */}
        <ButtonPrimary label={ctaText} href="/trips" size="lg" />
      </Container>

      {/* Hero Accent — subtle horizon line */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-golden opacity-40 z-20" />
    </section>
  );
}

export default HeroSection;
