'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroSlideData } from '@/data/heroSlides';

interface HeroSlideProps {
  slide: HeroSlideData;
  isActive: boolean;
  isPriority: boolean;
  isLoaded: boolean;
}

export default function HeroSlide({ slide, isActive, isPriority, isLoaded }: HeroSlideProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (slide.secondaryLink.startsWith('#')) {
      e.preventDefault();
      const targetId = slide.secondaryLink.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Content Variants for Staggered Fade Up
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const }
    }
  };

  return (
    <div 
      className={`absolute inset-0 w-full h-full ${
        isActive ? 'z-20 pointer-events-auto' : 'z-10 pointer-events-none'
      }`}
    >
      {/* Background Image Container with Ken Burns effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={
            isActive 
              ? { scale: 1.05, opacity: 1 } 
              : { scale: 1.15, opacity: 0 }
          }
          transition={{
            scale: { duration: 7, ease: 'easeOut' },
            opacity: { duration: 0.8, ease: 'easeInOut' }
          }}
          className="relative w-full h-full"
        >
          {isLoaded && (
            <Image
              src={slide.image}
              alt={slide.title + ' ' + slide.subtitle}
              fill
              priority={isPriority}
              loading={isPriority ? undefined : 'lazy'}
              sizes="100vw"
              className="object-cover"
            />
          )}
        </motion.div>
        
        {/* Premium Navy gradient overlay for readability and brand styling */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/40 z-10" />
        {/* Subtle dot-grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      {/* Slide Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full z-20 flex items-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
          className="max-w-2xl text-center md:text-left space-y-6 w-full flex flex-col items-center md:items-start pt-16 pb-20 md:pt-28 md:pb-28"
        >
          {/* Badge */}
          {slide.badge && (
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-[10px] sm:text-xs font-bold text-gold-400 uppercase tracking-wider shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              {slide.badge}
            </motion.div>
          )}

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight md:leading-none"
          >
            {slide.title} <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 bg-clip-text text-transparent">
              {slide.subtitle}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-200 font-medium leading-relaxed max-w-xl"
          >
            {slide.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto"
          >
            <Link 
              href={slide.primaryLink}
              className="w-full sm:w-auto text-center bg-gold-500 hover:bg-gold-600 text-navy-950 font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              {slide.primaryButton}
            </Link>
            
            {slide.secondaryLink.startsWith('#') ? (
              <a
                href={slide.secondaryLink}
                onClick={handleScroll}
                className="w-full sm:w-auto text-center bg-transparent border-2 border-white hover:border-gold-500 text-white hover:text-gold-500 font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                {slide.secondaryButton}
              </a>
            ) : (
              <Link
                href={slide.secondaryLink}
                className="w-full sm:w-auto text-center bg-transparent border-2 border-white hover:border-gold-500 text-white hover:text-gold-500 font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                {slide.secondaryButton}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
