'use client';

import React from 'react';
import { whyParentsTrust } from '@/components/data/collegeData';

export default function About() {
  return (
    <section className="bg-white border-b border-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Our Commitments</span>
          <h2 className="text-3xl font-extrabold text-[#0B1F3A]">Why Parents & Working Professionals Trust Us</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            We prioritize flexible, accredited, and industry-oriented vocational pathways for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyParentsTrust.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 text-[#0B1F3A] flex items-center justify-center font-bold text-sm mb-4 border border-slate-100 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-md font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
