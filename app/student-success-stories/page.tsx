import React from 'react';
import Link from 'next/link';
import { successStories } from '@/components/data/collegeData';

export default function SuccessStoriesPage() {
  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Student Success Stories</h1>
          <p className="text-sm md:text-base text-slate-655 max-w-2xl mx-auto font-medium">
            Meet our shining stars. Read how our graduates transitioned into roles at top-tier multinational product, core, and consulting companies.
          </p>
        </div>
      </section>

      {/* Main Grid of Success Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Gold Stars */}
                <div className="flex text-gold-500 gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <h3 className="text-lg font-bold text-navy-900">
                  "{story.quote}"
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  The practical environment at Ratnaparkkhi Institute of Engineering & Management allowed me to balance research, hackathon participations, and interview preparation. The mentorship from faculty made sure I stayed on track despite intense pressure.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-8">
                <div className="w-14 h-14 rounded-full bg-navy-50 border border-gold-500 flex items-center justify-center font-bold text-navy-900 text-lg shrink-0">
                  {story.imagePlaceholder}
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm sm:text-base leading-tight">{story.name}</h4>
                  <span className="block text-xs text-slate-400 font-bold">{story.branch}</span>
                  <span className="inline-block mt-1 text-[11px] font-bold text-gold-600 uppercase tracking-wider">
                    {story.designation} at {story.company} | Package: {story.package}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Association Information (Slate-50 Background) */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-navy-900">Active Alumni Mentoring Network</h2>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              Success leaves clues. Ratnaparkkhi Institute of Engineering & Management maintains an active Alumni Association. Placed graduates return to campus regularly to host mock hackathons, review resumes, conduct mock technical interviews, and refer junior students for internships.
            </p>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              This ecosystem ensures current students receive practical, real-world advice on current industry requirements, technologies, and interview trends.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-md grid grid-cols-2 gap-6 text-center">
            <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-100">
              <span className="block text-3xl font-black text-gold-600">1,500+</span>
              <span className="text-[10px] text-navy-900 uppercase tracking-widest font-bold block mt-1">Alumni Network</span>
            </div>
            <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-100">
              <span className="block text-3xl font-black text-gold-600">25+</span>
              <span className="text-[10px] text-navy-900 uppercase tracking-widest font-bold block mt-1">Cities Globally</span>
            </div>
            <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-100">
              <span className="block text-3xl font-black text-gold-600">120+</span>
              <span className="text-[10px] text-navy-900 uppercase tracking-widest font-bold block mt-1">Mock Sessions</span>
            </div>
            <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-100">
              <span className="block text-3xl font-black text-gold-600">150+</span>
              <span className="text-[10px] text-navy-900 uppercase tracking-widest font-bold block mt-1">Referral Hires</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join the legacy CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h3 className="text-2xl font-bold text-navy-900">Start Your Success Story Today</h3>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
          Admissions are strictly based on JEE/CET eligibility ranks and academic screening. Register your enquiry to speak with an advisor.
        </p>
        <div className="pt-2">
          <Link 
            href="/online-admission"
            className="inline-block px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-lg cursor-pointer"
          >
            Apply online for 2026
          </Link>
        </div>
      </section>

    </div>
  );
}
