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
  const isDetailed = !!description;

  return (
    <div className={cn(
      "group relative flex flex-col bg-white rounded-3xl border border-black/5 transition-all duration-500 overflow-hidden h-full",
      "hover:shadow-premium hover:-translate-y-2"
    )}>
      {/* Image Container with Scrim */}
      <div className="relative w-full aspect-[4/5] bg-bynd-parchment overflow-hidden">
        {/* Placeholder gradient with Dusk overlay for dark cards, or Sunrise for light */}
        <div className="absolute inset-0 bg-fog mix-blend-multiply opacity-30 transition-transform duration-700 group-hover:scale-110" />
        
        {/* Scrim per rule (not fully specified as a token but essential for image cards) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bynd-ink/60 to-transparent z-10" />
        
        {/* Category Tag per rule: 10px uppercase tracking 0.15em */}
        <div className="absolute top-6 left-6 z-20">
          <span className="bg-bynd-flame text-white text-[10px] font-heading uppercase font-bold px-4 py-2 rounded-full tracking-[0.15em] shadow-lg">
            {category}
          </span>
        </div>

        {/* Floating Content for Image Cards */}
        {!isDetailed && (
          <div className="absolute bottom-0 inset-x-0 p-8 z-20">
            {location && (
              <span className="text-white/60 text-[10px] font-heading font-bold uppercase tracking-[0.2em] mb-2 block">
                {location}
              </span>
            )}
            <h3 className="text-white font-body italic text-2xl mb-4 leading-tight">
              {title}
            </h3>
            
            {price && (
              <div className="text-bynd-gold font-body italic text-lg tracking-wide">
                {price}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content for Detailed Cards */}
      {isDetailed && (
        <div className="flex flex-col flex-1 p-10">
          {location && (
            <span className="text-bynd-silver text-[10px] font-heading font-extrabold uppercase tracking-[0.4em] mb-4 block">
              {location}
            </span>
          )}
          <h3 className="text-bynd-ink font-body italic text-3xl mb-4 leading-tight group-hover:grad-text transition-all duration-300">
            {title}
          </h3>
          
          <p className="font-body text-bynd-ash text-base leading-relaxed mb-10 line-clamp-3">
            {description}
          </p>

          <div className="mt-auto border-t border-black/5 pt-8">
            <Link 
              href={href}
              className="inline-flex font-heading uppercase text-[10px] font-bold tracking-[0.2em] text-bynd-flame hover:text-bynd-flame-light transition-colors"
            >
              DISCOVER JOURNEY →
            </Link>
          </div>
        </div>
      )}

      {/* Overlay Link */}
      <Link href={href} className="absolute inset-0 z-30" aria-label={`View ${title}`}>
        <span className="sr-only">View trip {title}</span>
      </Link>
    </div>
  );
}

export default TripCard;
