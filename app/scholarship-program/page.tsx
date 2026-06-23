import React from 'react';
import Link from 'next/link';
import { scholarshipsList } from '@/components/data/collegeData';

export default function ScholarshipsPage() {
  const documents = [
    "Caste Certificate (for Reserved categories)",
    "Caste Validity Certificate (for Reserved categories)",
    "Non-Creamy Layer Certificate (for OBC/VJNT/SBC)",
    "Family Income Certificate issued by Tahsildar (less than ₹8 Lakhs for EBC/EWS)",
    "Admission Confirmation Letter / ID Card",
    "Previous Class Marksheets (SSC / HSC / Semester GPA)",
    "Domicile Certificate (if applicable)",
    "Aadhaar Card linked to Bank Account (mandatory for direct DBT transfers)"
  ];

  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Scholarships & Financial Aid</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Making quality online, distance, and vocational education accessible to all deserving aspirants.
          </p>
        </div>
      </section>

      {/* Scholarships List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900">Available Scholarship Schemes</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Ratnaparkkhi Institute of Engineering & Management facilitates government concessions and awards institutional scholarships to meritorious top rankers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scholarshipsList.map((s, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-block bg-gold-500/20 text-gold-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded border border-gold-500/35">
                  {s.benefit}
                </div>
                <h3 className="text-lg font-bold text-navy-900 leading-tight">
                  {s.name}
                </h3>
                <p className="text-xs text-slate-550 leading-relaxed pt-2 font-medium">
                  <strong className="text-slate-700 font-bold">Eligibility Criteria:</strong> {s.eligibility}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-50 mt-4">
                <Link 
                  href="/online-admission"
                  className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1 cursor-pointer"
                >
                  Apply & Register Profile
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Needed for Scholarship (Slate-50 Background) */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-navy-900">Scholarship Documentation</h2>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              To apply for distance education merit waivers or state/national scholarships, students must submit correct and verified documents at the time of enrollment. 
            </p>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              Any discrepancy or missing documents may lead to the rejection of fee concessions. Our dedicated counselor desk assists students in verifying and submitting these files.
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
            <h4 className="font-bold text-navy-900 text-sm sm:text-base">Verification Checklist</h4>
            <ul className="space-y-3 text-xs text-slate-500 font-semibold">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scholarship Help desk */}
      <section className="max-w-4xl mx-auto px-4 text-center bg-white border border-slate-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
        <h3 className="text-xl font-bold text-navy-900">Have Questions about Fee Concessions or Scholarships?</h3>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
          Our specialized scholarship guidance counselor team helps students solve documentation issues and submit applications on the official portals.
        </p>
        <div className="pt-2">
          <Link 
            href="/contact-us"
            className="inline-block px-8 py-3 text-xs font-bold uppercase tracking-wider text-navy-900 border-2 border-navy-900 rounded-lg hover:bg-navy-900 hover:text-white transition-all cursor-pointer"
          >
            Contact Scholarship Cell
          </Link>
        </div>
      </section>

    </div>
  );
}
