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
      "group flex transition-all duration-300 overflow-hidden border-gradient-gold rounded-card shadow-soft hover:shadow-card hover:-translate-y-1",
      isFeatured ? "flex-col md:flex-row col-span-full" : "flex-col h-full"
    )}>
      {/* Image Container */}
      <div className={cn(
        "relative bg-bynd-charcoal overflow-hidden",
        isFeatured ? "w-full md:w-1/2 aspect-[4/3]" : "w-full aspect-[4/3]"
      )}>
        <div className="absolute inset-0 bg-horizon opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* Content */}
      <div className={cn(
        "flex flex-col bg-bynd-parchment",
        isFeatured ? "w-full md:w-1/2 p-8 md:p-14 justify-center" : "flex-1 p-8"
      )}>
        <span className="text-bynd-flame text-[10px] font-heading font-black uppercase tracking-[0.25em] mb-6 block">
          {category}
        </span>
        
        <h3 className={cn(
          "text-bynd-ink font-display font-light uppercase leading-tight mb-6",
          isFeatured ? "text-4xl md:text-6xl" : "text-2xl line-clamp-2"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "font-display italic text-bynd-stone leading-relaxed mb-8",
          isFeatured ? "text-xl md:text-2xl" : "text-lg line-clamp-3"
        )}>
          {excerpt}
        </p>

        <div className="mt-auto pt-6 flex items-center justify-between border-t border-bynd-border">
          <Link 
            href={href}
            className="font-heading uppercase text-xs font-black tracking-[0.2em] text-bynd-flame hover:text-bynd-flame-light transition-colors"
          >
            DISCOVER MORE →
          </Link>
          {readTime && (
            <span className="text-[10px] text-bynd-ash font-heading font-bold tracking-[0.18em] uppercase">
              {readTime} MIN READ
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
