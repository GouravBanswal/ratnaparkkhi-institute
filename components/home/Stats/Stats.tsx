'use client';

import React from 'react';

export default function Stats() {
  return (
    <section className="bg-slate-50 pt-12 pb-12 md:pt-40 md:pb-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto pt-6 mb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">RIEM at a Glance</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">Official Milestones & Placements</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Shaping career opportunities with recognized technical training, ITI programs, and engineering trades.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Card 1: Passed Students */}
          <div className="bg-white border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-navy-50 text-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-slate-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-[#D4AF37]">23,000+</span>
              <span className="text-[10px] sm:text-xs uppercase text-slate-500 font-bold tracking-wider">Passed Students</span>
            </div>
          </div>

          {/* Card 2: Success Rate */}
          <div className="bg-white border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-navy-50 text-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-slate-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-[#D4AF37]">100%</span>
              <span className="text-[10px] sm:text-xs uppercase text-slate-500 font-bold tracking-wider">Success Rate</span>
            </div>
          </div>

          {/* Card 3: Placed Students */}
          <div className="bg-white border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-navy-50 text-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-slate-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-black text-[#D4AF37]">8,000+</span>
              <span className="text-[10px] sm:text-xs uppercase text-slate-500 font-bold tracking-wider">Placed Students</span>
            </div>
          </div>

          {/* Card 4: Geographic Reach */}
          <div className="bg-white border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-navy-50 text-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-slate-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-[15px] sm:text-lg font-black text-[#D4AF37] leading-tight uppercase">PAN India</span>
              <span className="text-[9px] uppercase text-slate-500 font-bold tracking-wider">Nationwide Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
