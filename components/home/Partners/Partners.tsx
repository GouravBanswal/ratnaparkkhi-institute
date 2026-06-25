'use client';

import React from 'react';
import Image from 'next/image';
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

export default function Partners() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] tracking-tight">UGC-approved universities, verified by us and reviewed by learners, on factors.</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            We proudly collaborate with leading skill councils, technical boards, and industrial organizations to provide quality training and career advancement.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {allPartners.map((partner, idx) => {
            if (partner.logo) {
              return (
                <div 
                  key={idx} 
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
        </div>
      </div>
    </section>
  );
}