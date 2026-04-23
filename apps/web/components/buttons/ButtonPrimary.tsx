import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonPrimaryProps {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  'aria-label'?: string;
}

const sizeMap = {
  sm: 'px-6 py-3 text-[11px]',
  md: 'px-8 py-3.5 text-[11px]',
  lg: 'px-10 py-4.5 text-[13px]',
};

export default function ButtonPrimary({
  label,
  href,
  icon,
  onClick,
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className,
  'aria-label': ariaLabel,
}: ButtonPrimaryProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-3',
    'rounded-btn font-heading font-black uppercase tracking-[0.18em]',
    'bg-ember text-bynd-parchment shadow-flame',
    'transition-all duration-250 ease-smooth',
    'hover:bg-ember-hover hover:shadow-flame-lg hover:-translate-y-0.5',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bynd-flame focus-visible:ring-offset-2',
    'active:translate-y-0',
    'disabled:opacity-50 disabled:pointer-events-none',
    sizeMap[size],
    fullWidth && 'w-full',
    className
  );

  const displayText = label.endsWith('→') ? label : `${label} →`;

  if (href) {
    return (
      <Link href={href} className={base} aria-label={ariaLabel ?? label}>
        <span>{displayText}</span>
        {icon && <span className="flex-shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
      className={base}
    >
      <span>{label}</span>
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
}
