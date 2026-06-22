import React from 'react';
import { facultyHighlights } from '@/components/data/collegeData';

export default function AboutPage() {
  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">About Ratnaparkkhi Institute of Engineering & Management</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Discover our legacy since 2008, our mission for flexible education, and our affiliations with top universities and skill councils.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-100 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
            <div className="w-12 h-12 bg-navy-50 border border-slate-100 text-gold-600 rounded-lg flex items-center justify-center font-bold text-xl">
              V
            </div>
            <h3 className="text-xl font-bold text-navy-900">Our Vision</h3>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              To be a premier center of flexible learning, vocational skill development, and distance education that empowers every individual in Maharashtra with affordable, high-quality, and accessible career opportunities.
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
            <div className="w-12 h-12 bg-navy-50 border border-slate-100 text-gold-600 rounded-lg flex items-center justify-center font-bold text-xl">
              M
            </div>
            <h3 className="text-xl font-bold text-navy-900">Our Mission</h3>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              Provide affordable and accessible education to students, working professionals and people who could not complete their education through modern technology and flexible learning systems.
            </p>
          </div>
        </div>
      </section>

      {/* Director & Chairman desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Chairman */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
          <div className="lg:col-span-3 text-center">
            <div className="w-24 h-24 rounded-full bg-navy-50 border-2 border-gold-500 flex items-center justify-center font-bold text-navy-900 text-2xl mx-auto mb-4">
              RR
            </div>
            <h4 className="text-md font-bold text-navy-900">Dr. Ramesh Ratnaparkkhi</h4>
            <span className="text-xs text-gold-600 font-bold uppercase tracking-wider block mt-1">Founder & Chairman</span>
          </div>
          <div className="lg:col-span-9 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gold-500 rounded-full"></span>
              Message from the Founder's Desk
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              &quot;Online and distance education is the ultimate gateway to lifelong progress. At Ratnaparkkhi Institute, we aim to provide an affordable, high-quality gateway to professional life for working professionals, school dropouts, and students from all walks of life. Our NSDC/Skill India collaborations and university counseling services ensure that every candidate gains the skills and qualifications necessary to succeed in government and private sectors.&quot;
            </p>
          </div>
        </div>

        {/* Director */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
          <div className="lg:col-span-3 text-center lg:order-last">
            <div className="w-24 h-24 rounded-full bg-navy-50 border-2 border-gold-500 flex items-center justify-center font-bold text-navy-900 text-2xl mx-auto mb-4">
              SD
            </div>
            <h4 className="text-md font-bold text-navy-900">Dr. S. K. Deshmukh</h4>
            <span className="text-xs text-gold-600 font-bold uppercase tracking-wider block mt-1">Principal / Academic Director</span>
          </div>
          <div className="lg:col-span-9 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gold-500 rounded-full"></span>
              From the Director's Desk
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              &quot;We welcome you to a community dedicated to flexible learning and vocational mastery. Our academic counselor desk is structured to provide complete guidance for NIOS school boards, ITI technical trades, and UGC-DEB approved university degrees. By partnering with leading boards like YCMOU, Tilak Maharashtra Vidyapeeth, and Skill India, we ensure our courses deliver immediate, practical value and NAPS apprenticeship options.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Faculty Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900">Our Core Leadership</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Dedicated educators and administration managers guiding the Institute's operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyHighlights.map((f, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-navy-50 border border-gold-500 flex items-center justify-center font-bold text-navy-900 text-xl mx-auto mb-4">
                {f.imagePlaceholder}
              </div>
              <h4 className="font-bold text-navy-900">{f.name}</h4>
              <span className="text-xs text-gold-600 font-bold uppercase tracking-wider block mt-1">{f.designation}</span>
              <span className="text-xs text-slate-550 block mt-1 font-semibold">{f.qualification}</span>
              <p className="text-xs text-slate-500 mt-3 border-t border-slate-50 pt-3 leading-relaxed font-medium">
                {f.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Approvals & Affiliations */}
      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900">Recognition, Boards & Partners</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Ratnaparkkhi Institute is affiliated with leading state universities, skill boards, and apprenticeship systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-slate-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-navy-900 mb-1">State Skill Councils</h4>
              <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">NSDC, Skill India & MSBSVET ITI</p>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-navy-900 mb-1">Open Boards</h4>
              <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">YCMOU, TMV, MHV & NIOS</p>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-navy-900 mb-1">Apprenticeship Schemes</h4>
              <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">NAPS & BTP Approved Center</p>
            </div>
            <div className="bg-white border border-slate-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-navy-900 mb-1">Counseling Universities</h4>
              <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">DY Patil, Mangalayatan, ISBM, CV Raman</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
