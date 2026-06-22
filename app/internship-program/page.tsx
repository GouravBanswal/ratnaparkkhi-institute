import React from 'react';
import Link from 'next/link';

export default function InternshipsPage() {
  const partners = [
    { name: "NSDC Skill Trades", focus: "Industrial operations, technical services, and retail management programs" },
    { name: "Skill India Courses", focus: "Approved vocational trades and national-level technical skill building" },
    { name: "NAPS Apprenticeship", focus: "National Apprenticeship Promotion Scheme corporate traineeships and stipends" },
    { name: "BTP Counseling", focus: "Board of Training & Placements practical and vocational orientations" },
    { name: "BOSS Board Affiliation", focus: "Skill validation, open education modules, and standard certifications" },
    { name: "MSBSVET Trades", focus: "State Board ITI trade certifications and hands-on practical setups" }
  ];

  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Apprenticeships & Traineeships</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Approved apprenticeship programs connecting candidates with NSDC, Skill India, and NAPS corporate traineeships.
          </p>
        </div>
      </section>

      {/* Overview & Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-navy-900 leading-tight">
              NSDC & NAPS Apprenticeship Linkages
            </h2>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              At Ratnaparkkhi Institute, we believe that education must lead to practical, real-world skills. Through our collaborations with NSDC, Skill India, and NAPS (National Apprenticeship Promotion Scheme), we connect students directly with corporate and public sector apprenticeships.
            </p>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              Graduates participate in traineeships, enabling them to gain critical hands-on experience, support themselves with monthly stipends, and build careers in government and private sectors across Maharashtra.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
              <div>
                <span className="block text-2xl font-bold text-navy-900">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Success Rate</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-navy-900">Monthly</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Stipend Earned</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-navy-900">Approved</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">NAPS / NSDC</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 space-y-6">
            <h3 className="text-lg font-bold text-navy-900">Apprenticeship Benefits</h3>
            <ul className="space-y-4 text-xs text-slate-600 font-semibold">
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Learn & Earn alignment:</strong> Secure monthly stipends while pursuing graduation, post-graduation, or ITI programs.</span>
              </li>
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>National skill certifications:</strong> Earn official NSDC and Skill India certificates recognized by top private and public employers.</span>
              </li>
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Apprenticeship coordinates:</strong> Direct placements under NAPS/BTP at leading utilities, services, and industrial sectors.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MOUs & Academies */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900">Affiliated Skill Boards & Schemes</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              We guide students under these recognized systems to secure official qualifications and jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-1.5 h-4.5 bg-gold-500 rounded-full"></span>
                  {p.name}
                </h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">{p.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines & Application */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pb-10">
        <h3 className="text-2xl font-bold text-navy-900">Apprenticeship Registration & Counseling</h3>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
          Students can apply for our NSDC and NAPS apprenticeship counseling. Our team will guide you through portal registration, document verification, and placement connections.
        </p>
        <div>
          <Link 
            href="/online-admission"
            className="inline-block px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-lg cursor-pointer"
          >
            Apply for Admission 2026
          </Link>
        </div>
      </section>

    </div>
  );
}
