"use client";

import React from "react";
import { Plane, Map, Hotel, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandIconProps {
  type: 'flight' | 'map' | 'hotel' | 'support';
  size?: number;
  color?: string;
  className?: string;
}

const iconMap = {
  flight: { icon: Plane, label: "Bespoke Routes" },
  map: { icon: Map, label: "Hidden Maps" },
  hotel: { icon: Hotel, label: "Private Stays" },
  support: { icon: MessageSquare, label: "24/7 Concierge" },
};

export function BrandIcon({ 
  type, 
  size = 48, 
  color = "#FF5F0F", 
  className 
}: BrandIconProps) {
  const { icon: Icon, label } = iconMap[type];

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <Icon 
        size={size} 
        stroke={color} 
        strokeWidth={1.5} // Converting stroke-width 6 (from 100px base) to Lucide equivalent
        strokeLinecap="round"
        fill="none"
      />
      <span className="font-heading text-[10px] text-bynd-ash uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
}
