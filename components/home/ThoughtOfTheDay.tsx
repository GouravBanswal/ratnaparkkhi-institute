'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const thoughtImages = [
  "/images/thought1.png",
  "/images/thought2.png",
  "/images/thought3.png",
  "/images/thought4.png",
];

// Descriptive alt texts for each thought image
const altTexts = [
  "Inspirational Thought by Dr. B. R. Ambedkar - Thought 1",
  "Inspirational Thought by Dr. B. R. Ambedkar - Thought 2",
  "Inspirational Thought by Dr. B. R. Ambedkar - Thought 3",
  "Inspirational Thought by Dr. B. R. Ambedkar - Thought 4",
];

export default function ThoughtOfTheDay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for Next, -1 for Prev
  const [isHovered, setIsHovered] = useState(false);

  // Touch Swipe Gesture State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % thoughtImages.length);
    }, 5500); // Auto-slide every 5.5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % thoughtImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + thoughtImages.length) % thoughtImages.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex justify-center border-b border-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1400px] flex justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full max-w-[1400px] bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(11,31,58,0.08)] hover:border-[#D4AF37]/30 transition-all duration-300 relative select-none"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#D4AF37] block">
              Inspiration
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B1F3A] mt-1">
              Thought of the Day
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1.5 max-w-lg mx-auto">
              Words that inspire learning, leadership, and lifelong success.
            </p>
            <div className="w-10 h-0.5 bg-[#D4AF37] mx-auto mt-3.5 rounded-full"></div>
          </div>

          {/* Slider Container - expanded naturally with no min-height constraints */}
          <div 
            className="relative w-full overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full flex justify-center items-center"
              >
                <Image
                  src={thoughtImages[currentIndex]}
                  alt={altTexts[currentIndex]}
                  width={1983}
                  height={793}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1400px"
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-xl select-none"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows (Only visible on hover or tablet/desktop) */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 border border-slate-200/50 text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white hover:border-[#0B1F3A] transition-all flex items-center justify-center shadow-md cursor-pointer z-10 opacity-70 hover:opacity-100"
              title="Previous Thought"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 border border-slate-200/50 text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white hover:border-[#0B1F3A] transition-all flex items-center justify-center shadow-md cursor-pointer z-10 opacity-70 hover:opacity-100"
              title="Next Thought"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {thoughtImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex 
                    ? 'w-6 bg-[#D4AF37]' 
                    : 'w-2 bg-slate-200 hover:bg-slate-350'
                }`}
                title={`Go to thought ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
