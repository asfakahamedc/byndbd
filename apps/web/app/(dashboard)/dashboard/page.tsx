import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'My Journey Dashboard — Beyndesh',
  description: 'Manage your trips to Bangladesh',
};

export default function DashboardPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Dashboard Top Nav / Header area */}
      <div className="bg-white border-b border-gray-200 py-6">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="font-heading font-bold uppercase text-2xl text-[#1A1A1A]">Traveler Dashboard</h1>
            <div className="flex items-center gap-4">
               <span className="font-heading uppercase text-sm font-semibold text-[#4A4A4A]">Sarah Traveler</span>
               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">S</div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-12 pb-24">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0 space-y-2">
            <a href="#" className="block p-4 bg-white border-l-4 border-[#FF5F0F] text-[#FF5F0F] font-heading font-bold uppercase tracking-wider shadow-sm rounded-r-md">Upcoming Trips</a>
            <a href="#" className="block p-4 text-[#4A4A4A] hover:bg-white hover:text-[#1A1A1A] font-heading font-bold uppercase tracking-wider rounded-md transition-colors">Past Journeys</a>
            <a href="#" className="block p-4 text-[#4A4A4A] hover:bg-white hover:text-[#1A1A1A] font-heading font-bold uppercase tracking-wider rounded-md transition-colors">Payments & Docs</a>
            <a href="#" className="block p-4 text-[#4A4A4A] hover:bg-white hover:text-[#1A1A1A] font-heading font-bold uppercase tracking-wider rounded-md transition-colors">Profile</a>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <div className="bg-white border border-gray-100 rounded-[12px] p-8 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <span className="text-[#FF5F0F] font-heading uppercase text-xs font-bold tracking-widest mb-1 block">Confirmed</span>
                   <h2 className="font-heading font-bold uppercase text-2xl text-[#1A1A1A]">Sundarbans Tiger Expedition</h2>
                   <p className="font-body text-[#4A4A4A]">Nov 15 - Nov 18, 2026</p>
                 </div>
                 <div className="text-right">
                   <span className="font-heading font-bold uppercase text-xl text-[#1A1A1A]">Paid</span>
                   <p className="font-body text-xs text-gray-400">Balance: ৳0</p>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-gray-100">
                <a href="#" className="text-center font-heading uppercase font-bold text-xs tracking-wider border border-gray-200 rounded-md py-3 px-6 hover:border-[#FF5F0F] hover:text-[#FF5F0F] transition-all">Download Itinerary</a>
                <a href="#" className="text-center font-heading uppercase font-bold text-xs tracking-wider border border-gray-200 rounded-md py-3 px-6 hover:border-[#FF5F0F] hover:text-[#FF5F0F] transition-all">View Invoice</a>
                <a href="#" className="text-center font-heading uppercase font-bold text-xs tracking-wider border border-gray-200 rounded-md py-3 px-6 hover:border-[#FF5F0F] hover:text-[#FF5F0F] transition-all">Contact Guide</a>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-[12px] p-8 shadow-sm text-center py-16">
              <span className="text-4xl block mb-4">🌍</span>
              <h3 className="font-heading font-bold uppercase text-xl text-[#1A1A1A] mb-2">No other upcoming trips</h3>
              <p className="font-body text-[#4A4A4A] mb-6">Ready to plan your next adventure in Bangladesh?</p>
              <a href="/trips" className="bg-[#FF5F0F] text-white px-6 py-3 rounded-full font-heading font-bold uppercase text-xs tracking-wider hover:bg-[#E5550D] transition-colors">Browse Journeys</a>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
}
