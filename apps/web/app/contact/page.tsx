import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — Beyndesh',
  description: 'Every great journey starts with a conversation.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto flex flex-col space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              GET IN TOUCH
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] whitespace-pre-wrap">
              {"EVERY GREAT JOURNEY\nSTARTS WITH A CONVERSATION."}
            </h1>
            <p className="font-body text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Whether you know exactly where you want to go or you simply want to say 'surprise me' — we're here. Our team responds within 24 hours, usually faster. We're fueled by seven-layer tea.
            </p>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm flex flex-col space-y-2">
              <h3 className="font-heading font-bold uppercase text-[#1A1A1A] tracking-widest text-[#FF5F0F]">DHAKA — HEAD OFFICE</h3>
              <p className="font-body text-[#4A4A4A] text-sm leading-relaxed">
                House 12, Road 7, Block F<br />
                Banani, Dhaka 1213<br />
                +880 1XX-XXXX-XXX<br />
                hello@beyndesh.com
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm flex flex-col space-y-2">
              <h3 className="font-heading font-bold uppercase text-[#1A1A1A] tracking-widest text-[#FF5F0F]">SYLHET — NORTHEAST</h3>
              <p className="font-body text-[#4A4A4A] text-sm leading-relaxed">
                Zindabazar Road<br />
                Sylhet 3100<br />
                +880 1XX-XXXX-XXX
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm flex flex-col space-y-2">
              <h3 className="font-heading font-bold uppercase text-[#1A1A1A] tracking-widest text-[#FF5F0F]">BANDARBAN — HILL TRACTS</h3>
              <p className="font-body text-[#4A4A4A] text-sm leading-relaxed">
                Main Road, Bandarban Sadar<br />
                Bandarban 4600<br />
                +880 1XX-XXXX-XXX
              </p>
            </div>
          </div>

          {/* WhatsApp Callout */}
          <div className="bg-[#1A5276]/10 p-6 rounded-[12px] text-center border border-[#1A5276]/20">
            <p className="font-body text-[#1A5276] text-lg font-medium">
              WhatsApp us anytime: <strong>+880 1XX-XXXX-XXX</strong>
            </p>
            <p className="font-body text-[#1A5276]/80 text-sm mt-1">
              "We speak Bangla, English, and basic Chakma & Marma."
            </p>
          </div>

          {/* Form */}
          <div className="pt-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
