'use client';

import React from 'react';
import Link from 'next/link';
import { officialPhone } from '@/components/data/collegeData';
import CourseExplorer from '@/components/home/CourseExplorer/CourseExplorer';

export default function CoursesPage() {
  const formattedPhone = officialPhone.split('/')[0].trim().replace(/\s+/g, '');

  return (
    <div className="pb-20 space-y-12">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0B1F3A]">Courses Offered</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Technical Engineering branches, NCVT-approved ITI trades, MBA specializations, and vocational skill development programs.
          </p>
        </div>
      </section>

      {/* Main Course Explorer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CourseExplorer />
      </section>

      {/* Call to Action admissions help */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-12 text-center shadow-xl space-y-6">
          <h3 className="text-2xl font-bold text-[#0B1F3A]">Need Help choosing the Right Course?</h3>
          <p className="text-slate-505 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Our career guidance counselors run free counseling sessions to guide students on technical career pathways, admission requirements, and Learn & Earn opportunities.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link 
              href="/contact-us"
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-955 bg-[#D4AF37] hover:bg-[#D4AF37]/90 rounded-lg cursor-pointer"
            >
              Request Free Counseling
            </Link>
            <a 
              href={`tel:${formattedPhone}`}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B1F3A] border-2 border-[#0B1F3A] rounded-lg hover:bg-[#0B1F3A] hover:text-white transition-all cursor-pointer"
            >
              Call Hotline
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
