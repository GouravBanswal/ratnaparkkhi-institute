'use client';

import React from 'react';

interface HeroDotsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export default function HeroDots({ total, current, onChange }: HeroDotsProps) {
  return (
    <div 
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5"
      role="tablist"
      aria-label="Hero Slide Navigation Dots"
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current;
        return (
          <button
            key={index}
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => onChange(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              isActive 
                ? 'w-8 bg-gold-500 shadow-sm' 
                : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        );
      })}
    </div>
  );
}
