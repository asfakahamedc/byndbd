import Link from "next/link";
import { Container } from "../layout/Container";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dusk text-bynd-cream pt-20 pb-10 border-t border-bynd-charcoal">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading uppercase text-[11px] font-bold text-bynd-gold tracking-[0.2em]">Journeys</h3>
             <Link href="/trips/river-expeditions" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">River Expeditions</Link>
             <Link href="/trips/sundarbans-safaris" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Sundarbans Safaris</Link>
             <Link href="/trips/hill-tracts-trekking" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Hill Tracts Trekking</Link>
             <Link href="/trips/tea-country-sylhet" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Tea Country & Sylhet</Link>
             <Link href="/trips/old-dhaka-immersion" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Old Dhaka Immersion</Link>
             <Link href="/trips/coxs-bazar-islands" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Cox's Bazar & Islands</Link>
             <Link href="/trips/heritage-ruins" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Heritage & Ruins</Link>
             <Link href="/tailor-made" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Tailor-Made</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-heading uppercase text-[11px] font-bold text-bynd-gold tracking-[0.2em]">Company</h3>
             <Link href="/about" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">About</Link>
             <Link href="/stories" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Stories</Link>
             <Link href="/careers" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Careers</Link>
             <Link href="/partners" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Partners</Link>
             <Link href="/gallery" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Gallery</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-heading uppercase text-[11px] font-bold text-bynd-gold tracking-[0.2em]">Legal</h3>
             <Link href="/privacy-policy" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Terms</Link>
             <Link href="/cancellation-policy" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Cancellation Policy</Link>
             <Link href="/cookie-policy" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Cookie Policy</Link>
             <Link href="/liability-waiver" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Liability Waiver</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-heading uppercase text-[11px] font-bold text-bynd-gold tracking-[0.2em]">Connect</h3>
             <Link href="/contact" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Contact</Link>
             <a href="https://wa.me/8801" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">WhatsApp</a>
             <a href="#" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Instagram</a>
             <a href="#" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">Facebook</a>
             <a href="#" className="font-heading uppercase text-xs hover:text-bynd-flame-pale transition-colors">YouTube</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="font-heading font-black uppercase text-2xl mb-6 md:mb-0 tracking-tighter">
            Bynd BD
          </div>
          
          <div className="text-xs mb-6 md:mb-0 opacity-80 tracking-wide font-heading uppercase">
            &copy; 2026 Bynd BD Travel &middot; Made with ❤️ in Bangladesh.
          </div>

          <div className="flex space-x-6">
             <Link href="#" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-bynd-flame transition-colors" /></Link>
             <Link href="#" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-bynd-flame transition-colors" /></Link>
             <Link href="#" aria-label="YouTube"><Youtube className="w-5 h-5 hover:text-bynd-flame transition-colors" /></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
