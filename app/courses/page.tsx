'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { coursesOffered, officialPhone } from '@/components/data/collegeData';

export default function CoursesPage() {
  const [filter, setFilter] = useState<'ALL' | 'DEGREES' | 'ITI' | 'SCHOOL_SKILLS'>('ALL');
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);

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
    if (filter === 'ITI') return c.name.toLowerCase().includes('iti') || (c as any).isIti === true;
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
                
                {((c as any).universityOrInstitution) && (
                  <p className="text-[10px] font-black text-navy-950 bg-slate-50 border border-slate-100 rounded px-2.5 py-1 inline-block">
                    {((c as any).universityOrInstitution)}
                  </p>
                )}
                
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {c.highlights}
                </p>

                <div className="pt-4 border-t border-slate-50 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Eligibility</span>
                      <span className="block text-slate-700 mt-1 font-semibold leading-relaxed">{c.eligibility}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Approved Annual Fees</span>
                      <span className="block text-slate-700 mt-1 font-semibold">{c.fees}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Mode</span>
                      <span className="block text-slate-700 mt-1 font-semibold">{((c as any).mode) || "Regular / Distance"}</span>
                    </div>
                  </div>
                  
                  {((c as any).isIti) && (
                    <div className="bg-gold-500/5 border border-gold-500/10 p-3 rounded-lg text-xs leading-relaxed">
                      <p><strong className="text-slate-700 font-bold">Approved By:</strong> DGT / NCVT</p>
                      <p><strong className="text-slate-700 font-bold">Skill Partners:</strong> NSDC / Skill India / NAPS</p>
                    </div>
                  )}
                  
                  {(c as any).careerOpportunities && (
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs">
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Career Opportunities</span>
                      <span className="block text-slate-700 mt-1 font-semibold leading-relaxed">{(c as any).careerOpportunities}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/online-admission"
                  className="flex-grow text-center py-3 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-md cursor-pointer"
                >
                  Apply Online 2026
                </Link>
                {(c as any).isIti ? (
                  <button 
                    type="button"
                    onClick={() => setSelectedCourse(c)}
                    className="flex-grow text-center py-3 text-xs font-bold uppercase tracking-wider text-navy-900 border border-slate-200 hover:border-gold-500 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    Learn More
                  </button>
                ) : (
                  <Link 
                    href="/contact-us"
                    className="flex-grow text-center py-3 text-xs font-bold uppercase tracking-wider text-navy-900 border border-slate-200 hover:border-gold-500 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    Inquire Now
                  </Link>
                )}
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

      {/* Modal Dialog for Learn More */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-slate-100 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative space-y-6">
            <button 
              type="button"
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1.5 hover:bg-slate-55 rounded-full cursor-pointer"
              title="Close Dialog"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="space-y-4">
              <span className="bg-navy-50 text-navy-900 border border-slate-100 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider inline-block">
                {selectedCourse.duration} Program
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-navy-900">{selectedCourse.name}</h3>
              
              <div className="space-y-1">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold-600">Course Highlights</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-semibold">{selectedCourse.highlights}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Eligibility</span>
                  <span className="block text-slate-700 mt-1 text-xs font-bold leading-relaxed">{selectedCourse.eligibility}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Annual Fees</span>
                  <span className="block text-slate-700 mt-1 text-xs font-bold">{selectedCourse.fees}</span>
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold-600">Career Opportunities</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-semibold">{selectedCourse.careerOpportunities}</p>
              </div>

              <div className="bg-navy-50/50 border border-navy-100/50 p-4 rounded-xl space-y-1">
                <h4 className="text-xs font-bold text-navy-900">NSDC & NAPS Approved Trades</h4>
                <p className="text-[10px] text-slate-550 leading-relaxed font-medium">This course is aligned with Skill India & NAPS apprenticeships. Students receive official certifications and corporate placements.</p>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <Link 
                href="/online-admission"
                onClick={() => setSelectedCourse(null)}
                className="flex-1 text-center py-3 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-md cursor-pointer"
              >
                Apply Online Now
              </Link>
              <button 
                onClick={() => setSelectedCourse(null)}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
