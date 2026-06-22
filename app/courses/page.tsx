'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { coursesOffered, officialPhone } from '@/components/data/collegeData';

export default function CoursesPage() {
  const [filter, setFilter] = useState<'ALL' | 'DEGREES' | 'ITI' | 'SCHOOL_SKILLS'>('ALL');

  const filteredCourses = coursesOffered.filter(c => {
    if (filter === 'ALL') return true;
    if (filter === 'DEGREES') {
      return c.name.toLowerCase().includes('bachelor') || 
             c.name.toLowerCase().includes('master') || 
             c.name.toLowerCase().includes('b.a') || 
             c.name.toLowerCase().includes('b.com') || 
             c.name.toLowerCase().includes('b.sc') || 
             c.name.toLowerCase().includes('bba') || 
             c.name.toLowerCase().includes('bca') || 
             c.name.toLowerCase().includes('mba') || 
             c.name.toLowerCase().includes('mca') || 
             c.name.toLowerCase().includes('m.com') || 
             c.name.toLowerCase().includes('m.a');
    }
    if (filter === 'ITI') return c.name.toLowerCase().includes('iti');
    if (filter === 'SCHOOL_SKILLS') {
      return c.name.toLowerCase().includes('10th') || 
             c.name.toLowerCase().includes('12th') || 
             c.name.toLowerCase().includes('skill');
    }
    return true;
  });

  const formattedPhone = officialPhone.replace(/\s+/g, '');

  return (
    <div className="pb-20 space-y-12">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Courses Offered</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Accredited open school boards, ITI technical trades, distance university degree certifications, and skill development programs.
          </p>
        </div>
      </section>

      {/* Main Course Listing & Interactive Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Filters bar */}
        <div className="flex flex-wrap justify-center gap-3 border-b border-slate-100 pb-6">
          <button 
            type="button"
            onClick={() => setFilter('ALL')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${filter === 'ALL' ? "bg-gold-500 text-navy-950 shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            All Programs
          </button>
          <button 
            type="button"
            onClick={() => setFilter('DEGREES')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${filter === 'DEGREES' ? "bg-gold-500 text-navy-950 shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            University Degrees
          </button>
          <button 
            type="button"
            onClick={() => setFilter('ITI')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${filter === 'ITI' ? "bg-gold-500 text-navy-950 shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            ITI Programs
          </button>
          <button 
            type="button"
            onClick={() => setFilter('SCHOOL_SKILLS')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${filter === 'SCHOOL_SKILLS' ? "bg-gold-500 text-navy-950 shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            School & Skills
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((c, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-6 md:p-8 space-y-6 group">
              <div className="space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <span className="bg-navy-50 text-navy-900 border border-slate-100 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {c.duration} Course
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{c.seats} Intake Seats</span>
                </div>

                <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                  {c.name}
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {c.highlights}
                </p>

                <div className="pt-4 border-t border-slate-50 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Eligibility</span>
                      <span className="block text-slate-700 mt-1 font-semibold leading-relaxed">{c.eligibility}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 md:col-span-2">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Approved Annual Fees</span>
                      <span className="block text-slate-700 mt-1 font-semibold">{c.fees}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/online-admission"
                  className="flex-grow text-center py-3 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-md cursor-pointer"
                >
                  Apply Online 2026
                </Link>
                <Link 
                  href="/contact-us"
                  className="flex-grow text-center py-3 text-xs font-bold uppercase tracking-wider text-navy-900 border border-slate-200 hover:border-gold-500 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action admissions help */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-12 text-center shadow-xl space-y-6">
          <h3 className="text-2xl font-bold text-navy-900">Need Help choosing the Right Course?</h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Our career guidance counselors run free counseling sessions to guide students on university choices, admission cutoffs, and Learn & Earn opportunities.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link 
              href="/contact-us"
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-600 rounded-lg cursor-pointer"
            >
              Request Free Counseling
            </Link>
            <a 
              href={`tel:${formattedPhone}`}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-900 border-2 border-navy-900 rounded-lg hover:bg-navy-900 hover:text-white transition-all cursor-pointer"
            >
              Call Hotline
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
