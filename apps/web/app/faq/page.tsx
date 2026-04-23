import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { FAQAccordion } from '@/components/interactive/FAQAccordion';

export const metadata: Metadata = {
  title: 'Questions & Answers — Beyndesh',
  description: 'Everything you need to know before you go.',
};

export default function FAQPage() {
  const faqItems = [
    {
      question: "Is Bangladesh safe for tourists?",
      answer: "Yes, Bangladesh is generally safe for tourists. Like any destination, normal precautions should be taken, especially in crowded areas. Most Bangladeshis are welcoming and hospitable to foreign visitors. We provide 24/7 local support on every trip."
    },
    {
      question: "Do I need a visa?",
      answer: "Most visitors need a visa to enter Bangladesh. As of 2025, e-visas are available for many nationalities through the online portal. Some can get visa on arrival. We'll help with paperwork once you book."
    },
    {
      question: "When is the best time to visit?",
      answer: "The best time to visit is during the dry season from November to February when temperatures range from 15°C to 25°C. This period offers clear skies and less humidity. However, the monsoon (June–October) offers unique experiences like the Vimruli Floating Guava Market running July through September."
    },
    {
      question: "How much does a trip cost?",
      answer: "Bangladesh is extraordinarily kind on your budget. Our curated trips range from ৳15,000 / $125 (2-day Dhaka immersion) to ৳115,000 / $950 (10-day grand expedition), including accommodations, meals, guides, and transport."
    },
    {
      question: "Do I need permits for the Hill Tracts?",
      answer: "Hill Tracts require permits for foreigners. We handle all applications as part of your booking — no extra charge."
    },
    {
      question: "What languages do people speak?",
      answer: "Bangla is the national language. English is widely understood in tourism areas. The CHT alone has ten indigenous languages within the Jumma community. Our guides are fluent in English and local languages."
    },
    {
      question: "What should I pack?",
      answer: "Modest clothing for religious sites; comfortable for heat. Essentials: mosquito repellent, sunscreen, light jacket (Dec–Feb evenings). We send a detailed packing list after booking."
    },
    {
      question: "Can I combine regions in one trip?",
      answer: "Absolutely. A 10–14 day itinerary allows visitors to cover Dhaka, Cox's Bazar, Sylhet, and either the Sundarbans or Hill Tracts comfortably."
    },
    {
      question: "Is this suitable for families with children?",
      answer: "Yes. Cox's Bazar is a bustling family place where parents and relatives spend time walking the beach with their children. We design family-specific itineraries with shorter travel days and kid-friendly activities."
    },
    {
      question: "What about food allergies?",
      answer: "Rice is the staple food of Bangladesh, while fish is the most common source of protein. We accommodate vegetarian, vegan, gluten-free, and halal requirements — just tell us when you book."
    },
    {
      question: "Can I drink the water?",
      answer: "Stick to bottled or filtered water outside major hotels. We ensure clean water is available on all trips."
    },
    {
      question: "Is there mobile phone coverage?",
      answer: "Yes — Grameenphone and Robi have good coverage in most areas. Remote Hill Tracts and deep Sundarbans may have limited signal. We recommend a local SIM."
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto flex flex-col space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-6">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              QUESTIONS & ANSWERS
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] whitespace-pre-wrap">
              {"EVERYTHING YOU NEED\nTO KNOW BEFORE YOU GO."}
            </h1>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-[12px] p-6 md:p-12 border border-gray-100 shadow-sm">
            <FAQAccordion items={faqItems} />
          </div>

        </div>
      </Container>
    </div>
  );
}
