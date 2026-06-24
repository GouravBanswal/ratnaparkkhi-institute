'use client';

import React, { useState, useEffect } from 'react';
import FranchiseWizard from '@/components/franchise/FranchiseWizard';
import AdminDashboard from '@/components/franchise/AdminDashboard';

export default function FranchisePage() {
  const [activeTab, setActiveTab] = useState<'wizard' | 'admin'>('wizard');

  // Sync tab with URL search parameter "?view=admin"
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');
    if (view === 'admin') {
      setActiveTab('admin');
    } else {
      setActiveTab('wizard');
    }
  }, []);

  const handleTabChange = (tab: 'wizard' | 'admin') => {
    setActiveTab(tab);
    
    // Update URL query parameters without full page reload
    const url = new URL(window.location.href);
    if (tab === 'admin') {
      url.searchParams.set('view', 'admin');
    } else {
      url.searchParams.delete('view');
    }
    window.history.pushState({}, '', url.toString());
  };

  const benefits = [
    { title: "Ready-made System", desc: "Access to an established educational and counseling system built since 2008." },
    { title: "Academic Support", desc: "Complete syllabus guidelines, study materials, and academic coordinator support." },
    { title: "Marketing Support", desc: "Co-branded digital/physical marketing assets, banners, and lead generation guidance." },
    { title: "Technical Support", desc: "LMS portal access, online admission system, and technical maintenance support." },
    { title: "25% Revenue Share", desc: "Attractive and transparent 25% revenue sharing model for sustainable center growth." }
  ];

  return (
    <div className="min-h-screen pb-20 bg-[#F8FAFC] text-[#0F172A]">
      
      {/* Light Theme Styled Banner */}
      <section className="border-b border-[#E2E8F0] py-16 relative overflow-hidden bg-white">
        {/* Subtle mesh background grid */}
        <div className="absolute inset-0 opacity-5 bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-700 border border-gold-500/20 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
            RIEM Partnership Program
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
            Franchise & Collaboration Network
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto font-semibold">
            Partner with Ratnaparkkhi Educational Society to establish world-class technical and vocational learning hubs.
          </p>
        </div>
      </section>

      {/* Control Utility Toolbar (Navigation tabs only) */}
      <section className="max-w-6xl mx-auto px-4 mt-8 mb-6 flex justify-center items-center">
        
        {/* Elegant Pill Switcher */}
        <div className="p-1.5 rounded-xl border border-[#E2E8F0] flex gap-1 bg-white shadow-sm">
          <button
            onClick={() => handleTabChange('wizard')}
            className={`px-5 py-2 rounded-lg text-xs font-black tracking-wide flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'wizard'
                ? 'bg-navy-800 text-white shadow-md'
                : 'text-slate-500 hover:text-[#0F172A]'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Apply Online (Wizard)
          </button>
          
          <button
            onClick={() => handleTabChange('admin')}
            className={`px-5 py-2 rounded-lg text-xs font-black tracking-wide flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'admin'
                ? 'bg-navy-800 text-white shadow-md'
                : 'text-slate-500 hover:text-[#0F172A]'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Partner Admin Console
          </button>
        </div>
      </section>

      {/* Main Dynamic View Content */}
      <section className="max-w-7xl mx-auto px-4 mt-2">
        {activeTab === 'wizard' ? (
          <div className="space-y-16">
            
            {/* Onboarding Form Component */}
            <FranchiseWizard 
              onNavigateToAdmin={() => handleTabChange('admin')} 
            />

            {/* Franchise Benefits Section (Retained for branding integrity) */}
            <div className="border-t border-[#E2E8F0] pt-16 space-y-8 max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <h2 className="text-3xl font-extrabold text-[#0F172A]">Official Franchise Benefits</h2>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  We provide our center partners with complete end-to-end enablement to ensure high success rates and smooth student counseling operations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {benefits.map((b, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-[#E2E8F0] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 space-y-3 text-center bg-white text-[#0F172A]">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 text-gold-650 flex items-center justify-center font-black text-lg mx-auto">
                      ✓
                    </div>
                    <h4 className="font-extrabold text-xs">{b.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Admin Portal Dashboard Component */
          <AdminDashboard />
        )}
      </section>

    </div>
  );
}
