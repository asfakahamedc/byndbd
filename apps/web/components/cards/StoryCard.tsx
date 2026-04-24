import Link from 'next/link';
import { cn } from '@/lib/utils';

interface StoryCardProps {
  category: string;
  title: string;
  excerpt: string;
  readTime?: string;
  href: string;
  isFeatured?: boolean;
}

function StoryCard({ category, title, excerpt, readTime, href, isFeatured = false }: StoryCardProps) {
  return (
    <div className={cn(
      "group flex transition-all duration-500 overflow-hidden rounded-3xl shadow-sm hover:shadow-premium hover:-translate-y-1 relative",
      isFeatured ? "flex-col md:flex-row col-span-full" : "flex-col h-full",
      "bg-fog border border-black/5" // Using Fog gradient for info cards per spec
    )}>
      {/* Decorative Golden Corner Bar per rule */}
      <div className="absolute top-0 right-0 w-12 h-1 bg-golden opacity-50 z-20" />

      {/* Image Container */}
      <div className={cn(
        "relative bg-bynd-charcoal overflow-hidden",
        isFeatured ? "w-full md:w-5/12" : "w-full aspect-[16/10]"
      )}>
        <div className="absolute inset-0 bg-dusk opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" />
      </div>

      {/* Content Area */}
      <div className={cn(
        "flex flex-col",
        isFeatured ? "w-full md:w-7/12 p-12 md:p-20 justify-center" : "flex-1 p-10"
      )}>
        <span className="text-bynd-flame text-[10px] font-heading font-black uppercase tracking-[0.25em] mb-8 block">
          {category}
        </span>
        
        <h3 className={cn(
          "text-bynd-ink font-body italic leading-[1.1] mb-8 transition-colors duration-300 group-hover:grad-text",
          isFeatured ? "text-5xl md:text-7xl" : "text-3xl"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "font-body text-bynd-ash leading-relaxed mb-10",
          isFeatured ? "text-xl md:text-2xl" : "text-lg line-clamp-3"
        )}>
          {excerpt}
        </p>

        <div className="mt-auto pt-8 flex items-center justify-between border-t border-black/5">
          <Link 
            href={href}
            className="font-heading uppercase text-[10px] font-bold tracking-[0.2em] text-bynd-flame hover:text-bynd-flame-light transition-colors"
          >
            SEE JOURNEY →
          </Link>
          {readTime && (
            <span className="text-[9px] text-bynd-silver font-heading font-extrabold tracking-[0.15em] uppercase">
              {readTime} MIN READ
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
