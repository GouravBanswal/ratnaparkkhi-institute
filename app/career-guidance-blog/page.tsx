import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/components/data/collegeData';

export default function BlogListingPage() {
  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Career Guidance Blog</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Expert advice, preparation tips, and roadmap tools curated by our faculty leaders and placement director.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((b, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>{b.date}</span>
                  <span>{b.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors leading-tight">
                  {b.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3">
                  {b.excerpt}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] text-slate-400 block font-bold">By {b.author}</span>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <Link 
                  href={`/career-guidance-blog/${b.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-600 group transition-all cursor-pointer"
                >
                  Read Full Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Counselors guide cta */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-12 text-center shadow-xl space-y-6">
          <h3 className="text-2xl font-bold text-navy-900">Have a Specific Query about Admissions?</h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Submit your queries directly to our counsel desk. We evaluate marks, direct admission options, CET details and scholarship eligibility.
          </p>
          <div className="pt-2">
            <Link 
              href="/online-admission"
              className="inline-block px-8 py-3 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg cursor-pointer"
            >
              Go to Admission Enquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
