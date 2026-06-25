'use client';

import React from 'react';
import EnquiryForm from '@/components/EnquiryForm';
import { SITE_METADATA } from '@/constants/site';
import { formatPhoneNumber } from '@/lib/helpers';

export default function Contact() {
  const formattedPhone = formatPhoneNumber(SITE_METADATA.officialPhone);

  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Contact Info details */}
        <div className="space-y-6 flex flex-col justify-center text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-1 bg-[#D4AF37] rounded"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Reach Headquarters</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#0B1F3A]">{SITE_METADATA.title}</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Connect with our registrar desk or scholarship guidance desk for admissions and counseling.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 text-xs font-semibold">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-150 text-gold-600 flex items-center justify-center shrink-0 shadow-sm text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#0B1F3A]">Office Address</h4>
                <p className="text-slate-500 mt-0.5 font-medium leading-relaxed">
                  {SITE_METADATA.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-150 text-gold-600 flex items-center justify-center shrink-0 shadow-sm text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#0B1F3A]">Admissions Hotline</h4>
                <p className="text-slate-500 mt-0.5 font-bold">
                  <a href={`tel:${formattedPhone}`} className="hover:text-gold-600 transition-colors text-[#0B1F3A]">
                    {SITE_METADATA.officialPhone}
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-150 text-gold-600 flex items-center justify-center shrink-0 shadow-sm text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#0B1F3A]">General Registrar Email</h4>
                <p className="text-slate-500 mt-0.5 font-bold">
                  <a href={`mailto:${SITE_METADATA.officialEmail}`} className="hover:text-gold-600 transition-colors text-[#0B1F3A]">
                    {SITE_METADATA.officialEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Admission callback form */}
        <div className="w-full">
          <EnquiryForm 
            title="Speak to Counsel Desk"
            subtitle="Submit details below to request a callback from our branch allocation counselors."
            compact={false}
          />
        </div>
      </div>
    </section>
  );
}
