'use client';

import React, { useState, useEffect, useRef } from 'react';
import { heroSlides } from '@/data/heroSlides';
import HeroSlide from './HeroSlide';
import HeroControls from './HeroControls';
import HeroDots from './HeroDots';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visitedIndices, setVisitedIndices] = useState<number[]>([0]);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = heroSlides.length;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  // Next Slide Action
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Previous Slide Action
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Dot Selection
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in inputs
      if (
        document.activeElement?.tagName === 'INPUT' || 
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }
      
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Autoplay Timer Loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Track Visited Slides for Performance (preloading & lazy-loading support)
  useEffect(() => {
    if (!visitedIndices.includes(currentIndex)) {
      setVisitedIndices((prev) => [...prev, currentIndex]);
    }
  }, [currentIndex]);

  // Mobile Swipe Gesture Event Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true); // Pause on touch interaction
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false); // Resume autoplay
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative w-full h-[520px] sm:h-[580px] md:h-[650px] lg:h-[720px] overflow-hidden bg-navy-950 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Ratnaparkkhi Institute Hero Slider"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPriority = index === 0;
          const isLoaded = visitedIndices.includes(index);
          
          return (
            <HeroSlide
              key={slide.id}
              slide={slide}
              isActive={isActive}
              isPriority={isPriority}
              isLoaded={isLoaded}
            />
          );
        })}
      </div>

      {/* Slide Navigation Controls */}
      <HeroControls onPrev={prevSlide} onNext={nextSlide} />

      {/* Slide Bottom Indicator Dots */}
      <HeroDots 
        total={totalSlides} 
        current={currentIndex} 
        onChange={goToSlide} 
      />
    </div>
  );
}
