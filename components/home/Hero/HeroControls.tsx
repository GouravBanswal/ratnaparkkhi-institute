'use client';

import React from 'react';

interface HeroControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function HeroControls({ onPrev, onNext }: HeroControlsProps) {
  return (
    <>
      {/* Prev Button */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-black/20 hover:bg-navy-900/60 text-white rounded-full flex items-center justify-center backdrop-blur-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group border border-white/10"
        aria-label="Previous Slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:-translate-x-0.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-black/20 hover:bg-navy-900/60 text-white rounded-full flex items-center justify-center backdrop-blur-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group border border-white/10"
        aria-label="Next Slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-0.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
}
