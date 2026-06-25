'use client';

import React from 'react';
import HeroCarousel from './HeroCarousel';

export default function Hero() {
  return (
    <section className="relative w-full bg-navy-950 overflow-hidden" id="hero-section">
      <HeroCarousel />
    </section>
  );
}
