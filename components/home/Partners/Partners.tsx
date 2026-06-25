'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useMotionValue, animate } from 'framer-motion';
import { universityPartners } from '@/components/data/universityPartners';

const governmentPartners = [
  {
    name: "Skill India",
    logo: "/images/skill-india.png",
    city: "",
    state: "",
    subtitle: "Government of India Skill Development Mission",
    logoClass: "max-h-16"
  },
  {
    name: "National Apprenticeship Promotion Scheme",
    logo: "/images/naps.png",
    city: "",
    state: "",
    subtitle: "Learn & Earn Initiative",
    logoClass: "max-h-16"
  },
  {
    name: "National Skill Development Corporation",
    logo: "/images/NSDC.png",
    city: "",
    state: "",
    subtitle: "Skill Development Partner",
    logoClass: "max-h-12"
  }
];

const allPartners = [
  ...universityPartners.map(p => ({ ...p, subtitle: "" })),
  ...governmentPartners
];

// Duplicate the list for seamless infinite loop
const loopedPartners = [...allPartners, ...allPartners];

// Card width + gap (px) — keep in sync with the card className below
const CARD_WIDTH = 200;
const GAP = 24;
const TOTAL_WIDTH = allPartners.length * (CARD_WIDTH + GAP);

export default function Partners() {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  // Duration in seconds for one full loop (all original cards pass once)
  const DURATION = 30;

  const startScroll = React.useCallback(() => {
    const current = x.get();
    // Calculate remaining distance to -TOTAL_WIDTH from current position
    const remaining = -TOTAL_WIDTH - current;
    const remainingFraction = Math.abs(remaining) / TOTAL_WIDTH;

    animationRef.current = animate(x, [current, -TOTAL_WIDTH], {
      duration: DURATION * remainingFraction,
      ease: 'linear',
      onComplete: () => {
        // Reset without animation then restart
        x.set(0);
        startScroll();
      },
    });
  }, [x]);

  React.useEffect(() => {
    startScroll();
    return () => {
      animationRef.current?.stop();
    };
  }, [startScroll]);

  const handleMouseEnter = () => {
    animationRef.current?.stop();
  };

  const handleMouseLeave = () => {
    startScroll();
  };

  return (
    <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
            UGC-approved universities, verified by us and reviewed by learners, on factors.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            We proudly collaborate with leading skill councils, technical boards, and industrial organizations to provide quality training and career advancement.
          </p>
        </div>

        {/* Infinite auto-scrolling carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={trackRef}
            style={{
              x,
              display: 'flex',
              gap: `${GAP}px`,
              width: 'max-content',
              willChange: 'transform',
            }}
          >
            {loopedPartners.map((partner, idx) => {
              if (partner.logo) {
                return (
                  <div
                    key={idx}
                    style={{ width: `${CARD_WIDTH}px`, flexShrink: 0 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-slate-200 hover:border-[#D4AF37] transition-all duration-300 p-5 flex flex-col items-center justify-between text-center min-h-[220px]"
                  >
                    <div className="h-24 flex items-center justify-center w-full overflow-hidden">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={200}
                        height={100}
                        className={`object-contain w-auto ${partner.logoClass || "max-h-20"}`}
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1 mt-auto w-full">
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
                        {partner.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">
                        {partner.subtitle || `${partner.city}, ${partner.state}`}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={idx}
                    style={{ width: `${CARD_WIDTH}px`, flexShrink: 0 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-slate-200 hover:border-[#D4AF37] transition-all duration-300 p-5 flex flex-col items-center justify-center text-center min-h-[220px]"
                  >
                    <div className="space-y-1 w-full">
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
                        {partner.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">
                        {partner.subtitle || `${partner.city}, ${partner.state}`}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}