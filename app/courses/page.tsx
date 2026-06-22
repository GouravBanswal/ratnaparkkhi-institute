'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { coursesOffered } from '@/components/data/collegeData';

export default function CoursesPage() {
  const [filter, setFilter] = useState<'ALL' | 'UG' | 'PG'>('ALL');

  const filteredCourses = coursesOffered.filter(c => {
    if (filter === 'ALL') return true;
    if (filter === 'UG') return c.name.startsWith('B.Tech');
    if (filter === 'PG') return c.name.startsWith('Master') || c.name.startsWith('MBA') || c.name.startsWith('MCA');
    return true;
  });

  return (
    <div className="pb-20 space-y-12">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Courses Offered</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Choose from our AICTE approved technical and professional business programs designed for global corporate careers.
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
            onClick={() => setFilter('UG')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${filter === 'UG' ? "bg-gold-500 text-navy-950 shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            B.Tech (Undergraduate)
          </button>
          <button 
            type="button"
            onClick={() => setFilter('PG')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${filter === 'PG' ? "bg-gold-500 text-navy-950 shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            MBA & MCA (Postgraduate)
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
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Annual Tuition Fee</span>
                      <span className="block text-slate-700 mt-1 font-semibold">{c.fees}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/online-admission"
                  className="flex-1 text-center py-3 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-md cursor-pointer"
                >
                  Apply Online 2026
                </Link>
                <Link 
                  href="/contact-us"
                  className="flex-1 text-center py-3 text-xs font-bold uppercase tracking-wider text-navy-900 border border-slate-200 hover:border-gold-500 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  Download Curriculum
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
            Our career guidance counselors run free counseling sessions to guide students on cutoffs, branch placements, and career pathways.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link 
              href="/contact-us"
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-600 rounded-lg cursor-pointer"
            >
              Request Free Counseling
            </Link>
            <a 
              href="tel:+919876543210"
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
