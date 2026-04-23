import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TripCardProps {
  category: string;
  title: string;
  location?: string;
  duration?: string;
  price?: string;
  nextDate?: string;
  description?: string;
  href: string;
  difficulty?: string;
}

function TripCard({
  category,
  title,
  location,
  duration,
  price,
  nextDate,
  description,
  href,
  difficulty
}: TripCardProps) {
  // Determine if it's the large detailed card or the compact image card
  const isDetailed = !!description;

  return (
    <div className={cn(
      "group flex flex-col bg-bynd-parchment rounded-card shadow-soft hover:shadow-card hover:-translate-y-[6px] transition-all duration-300 overflow-hidden h-full border border-bynd-border",
      !isDetailed && "bg-bynd-ink"
    )}>
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] bg-bynd-charcoal overflow-hidden">
        {/* Placeholder gradient with scrim */}
        <div className="absolute inset-0 bg-horizon-warm opacity-40 mix-blend-overlay transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 scrim-bottom z-10" />
        
        {/* Tags */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="bg-bynd-gold text-bynd-ink text-[10px] font-heading uppercase font-bold px-3 py-1.5 rounded-[2px] tracking-[0.18em]">
            {category}
          </span>
          {difficulty && (
            <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-heading uppercase font-bold px-3 py-1.5 rounded-[2px] tracking-[0.18em]">
              {difficulty}
            </span>
          )}
        </div>

        {/* Floating Content (for Image Cards) */}
        {!isDetailed && (
          <div className="absolute bottom-0 inset-x-0 p-6 z-20">
            {location && (
              <span className="text-white/65 text-[11px] font-heading font-bold uppercase tracking-[0.2em] mb-2 block">
                {location}
              </span>
            )}
            <h3 className="text-bynd-cream font-display font-light text-2xl md:text-3xl mb-4 leading-tight">
              {title}
            </h3>
            
            {price && (
              <div className="text-bynd-gold font-display text-lg italic tracking-wide">
                {price}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content (for Detailed Cards) */}
      {isDetailed && (
        <div className="flex flex-col flex-1 p-8">
          {location && (
            <span className="text-bynd-flame text-[11px] font-heading font-extrabold uppercase tracking-[0.25em] mb-3 block">
              {location}
            </span>
          )}
          <h3 className="text-bynd-ink font-display font-light text-3xl mb-4 leading-tight">
            {title}
          </h3>
          
          <p className="font-display font-light text-bynd-stone mb-8 line-clamp-3 leading-relaxed">
            {description}
          </p>

          <div className="mt-auto">
            <Link 
              href={href}
              className="inline-flex font-heading uppercase text-xs font-black tracking-[0.2em] text-bynd-flame hover:text-bynd-flame-light transition-colors"
            >
              MORE JOURNEYS →
            </Link>
          </div>
        </div>
      )}

      <Link href={href} className="absolute inset-0 z-30" aria-label={`View ${title}`}>
        <span className="sr-only">View trip {title}</span>
      </Link>
    </div>
  );
}

export default TripCard;
