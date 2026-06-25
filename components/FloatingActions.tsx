'use client';

import React from 'react';
import Link from 'next/link';
import { officialPhone } from './data/collegeData';

const FloatingActions = () => {
  const formattedPhone = officialPhone.split('/')[0].trim().replace(/\s+/g, '');

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-row-reverse md:flex-col items-center md:items-end gap-2 md:gap-3 pointer-events-none">
      {/* Apply Now Pill CTA */}
      <Link 
        href="/online-admission" 
        className="pointer-events-auto flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-955 font-bold px-3 py-2 md:px-5 md:py-3 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 group active:scale-95 cursor-pointer"
      >
        <span className="relative flex h-2 w-2 md:h-3 md:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy-900 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-navy-950"></span>
        </span>
        <span className="text-[10px] md:text-sm tracking-wider uppercase">Apply Now</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>

      <div className="flex flex-row md:flex-col gap-2 md:gap-3 pointer-events-auto items-center">
        {/* Call Now Button */}
        <a 
          href={`tel:${formattedPhone}`} 
          title="Call Admission Office"
          className="w-10 h-10 md:w-12 md:h-12 bg-navy-700 hover:bg-navy-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer border border-navy-600 shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${formattedPhone.replace('+', '')}?text=${encodeURIComponent("Hello Ratnaparkkhi Institute of Engineering & Management Admissions, I would like to enquire about admissions for the academic year 2026-27.")}`} 
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer rounded-full overflow-hidden shrink-0"
        >
          <img 
            src="/whatsapp-logo-1.png" 
            alt="WhatsApp logo" 
            className="w-full h-full object-contain" 
          />
        </a>
      </div>
    </div>
  );
};

export default FloatingActions;
