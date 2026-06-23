import React from 'react';
import EnquiryForm from '@/components/EnquiryForm';
import { officialPhone, officialEmail } from '@/components/data/collegeData';

export default function AdmissionPage() {
  const steps = [
    { title: "Fill Online Form", desc: "Submit your personal, academic, and course preferences details via this portal." },
    { title: "Document Verification", desc: "Our counselling cell will verify your academic certificates and eligibility." },
    { title: "Course Allocation", desc: "Based on seat availability, we will allocate courses or call you for counseling." },
    { title: "Fee Payment & Confirm", desc: "Submit your tuition fee installment and confirm your seat registration in person." }
  ];

  const requiredDocs = [
    "SSC (10th) Marksheet & Certificate",
    "HSC (12th) Marksheet & Certificate",
    "Previous School Leaving Certificate (TC)",
    "Graduation Marksheet (for Post-Graduation)",
    "School / College Leaving Certificate (LC)",
    "Domicile Certificate (if applicable)",
    "Caste Certificate & Non-Creamy Layer (if applicable)",
    "Income Certificate / EBC Letter (for scholarship seekers)",
    "Aadhaar Card copy & 4 Passport Photos"
  ];

  const formattedPhone = officialPhone.replace(/\s+/g, '');

  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Online Admission Portal</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Secure your seat at Ratnaparkkhi Institute of Engineering & Management. Complete the online enquiry application below and follow our simple 4-step process.
          </p>
        </div>
      </section>

      {/* Process & Application Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Instructions & Required Docs */}
          <div className="lg:col-span-6 space-y-10">
            {/* Steps */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-gold-500 rounded-full"></span>
                Admission Procedure
              </h3>
              <div className="space-y-4">
                {steps.map((s, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center font-bold text-xs shrink-0 border border-navy-100 shadow-sm">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-sm">{s.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed font-medium">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-gold-500 rounded-full"></span>
                Documents Required (Original + 3 Sets)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-medium">
                {requiredDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact admissions hotline */}
            <div className="bg-navy-50/50 border border-navy-100 p-6 rounded-xl flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-gold-500 text-navy-950 flex items-center justify-center font-black text-xl shrink-0 shadow-md">
                ?
              </div>
              <div className="text-xs font-semibold">
                <h4 className="font-bold text-navy-900">Need Immediate Help?</h4>
                <p className="text-slate-500 mt-0.5 leading-relaxed font-medium">
                  Call our Registrar Office directly at <a href={`tel:${formattedPhone}`} className="text-navy-900 font-bold hover:text-gold-600">{officialPhone}</a> or email <a href={`mailto:${officialEmail}`} className="text-navy-900 font-bold hover:text-gold-600">{officialEmail}</a>
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="admission-form-top" className="lg:col-span-6 w-full">
            <EnquiryForm 
              title="Admission Registration 2026"
              subtitle="Please provide accurate details so our admission mentors can contact you and assist in your process."
              compact={false}
            />
          </div>
        </div>
      </section>

      {/* ITI Courses (Diploma) Section */}
      <section className="bg-slate-50 border-t border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded border border-gold-400/20">
              Vocational & Skill Programs
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight sm:text-4xl">
              ITI Trade Programs (Diploma Certifications)
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
              Acquire job-ready mechanical and business skills through our state-board recognized ITI courses. Aligned with the Learn & Earn scheme, students gain practical industrial experience alongside standard certifications.
            </p>
          </div>

          {/* National Council Certifications / Recognition */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="space-y-2 md:max-w-2xl">
              <h3 className="font-extrabold text-navy-900 text-lg flex items-center gap-2">
                <span className="w-2 h-5 bg-gold-500 rounded-full inline-block"></span>
                Official Recognition & Apprenticeship Alignment
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Our vocational programs are approved under the **National Skill Development Corporation (NSDC)** and **Skill India** guidelines. We facilitate official registrations for the **National Apprenticeship Promotion Scheme (NAPS)**, enabling students to gain direct employment and earn monthly stipends while finishing their course.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center shrink-0">
              <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg font-black text-slate-400 text-xs tracking-wider">NSDC APPROVED</div>
              <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg font-black text-slate-400 text-xs tracking-wider">SKILL INDIA</div>
              <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg font-black text-slate-400 text-xs tracking-wider">NAPS PLACED</div>
            </div>
          </div>

          {/* ITI Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Diploma in Electrical */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 leading-tight">Diploma in Electrical</h3>
                <p className="text-[10px] font-black text-navy-950 bg-slate-50 border border-slate-100 rounded px-2.5 py-1 inline-block">
                  Industrial Technical Institute (ITI), Maharashtra State
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">Practical exposure in home/industrial wiring, motors, electrical machines, maintenance, and solar panel setups.</p>
                <div className="space-y-1.5 text-xs border-t border-slate-50 pt-3">
                  <p><strong className="text-slate-700 font-bold">Mode:</strong> Regular / Practical</p>
                  <p><strong className="text-slate-700 font-bold">Duration:</strong> 2 Years</p>
                  <p><strong className="text-slate-700 font-bold">Eligibility:</strong> 10th Passed from recognized board</p>
                  <div className="mt-2 space-y-1 bg-gold-500/5 border border-gold-500/10 p-2 rounded text-[10px] leading-relaxed">
                    <p><strong className="text-slate-700 font-bold">Approved By:</strong> DGT / NCVT</p>
                    <p><strong className="text-slate-700 font-bold">Skill Partners:</strong> NSDC / Skill India / NAPS</p>
                  </div>
                </div>
              </div>
              <a href="#admission-form-top" className="block text-center py-2.5 text-xs font-bold uppercase tracking-wider text-navy-955 bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors cursor-pointer">Apply Now</a>
            </div>

            {/* 2. Diploma in Fitter */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 leading-tight">Diploma in Fitter</h3>
                <p className="text-[10px] font-black text-navy-950 bg-slate-50 border border-slate-100 rounded px-2.5 py-1 inline-block">
                  Industrial Technical Institute (ITI), Maharashtra State
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">Intensive workshops covering structure assembly, pipe joints, lathe machine fabrication, and industrial tools fitting.</p>
                <div className="space-y-1.5 text-xs border-t border-slate-50 pt-3">
                  <p><strong className="text-slate-700 font-bold">Mode:</strong> Regular / Practical</p>
                  <p><strong className="text-slate-700 font-bold">Duration:</strong> 2 Years</p>
                  <p><strong className="text-slate-700 font-bold">Eligibility:</strong> 10th Passed from recognized board</p>
                  <div className="mt-2 space-y-1 bg-gold-500/5 border border-gold-500/10 p-2 rounded text-[10px] leading-relaxed">
                    <p><strong className="text-slate-700 font-bold">Approved By:</strong> DGT / NCVT</p>
                    <p><strong className="text-slate-700 font-bold">Skill Partners:</strong> NSDC / Skill India / NAPS</p>
                  </div>
                </div>
              </div>
              <a href="#admission-form-top" className="block text-center py-2.5 text-xs font-bold uppercase tracking-wider text-navy-955 bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors cursor-pointer">Apply Now</a>
            </div>

            {/* 3. Diploma in Turner */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 leading-tight">Diploma in Turner</h3>
                <p className="text-[10px] font-black text-navy-950 bg-slate-50 border border-slate-100 rounded px-2.5 py-1 inline-block">
                  Industrial Technical Institute (ITI), Maharashtra State
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">Specialized training in precision lathe machine settings, boring, thread-cutting, drilling, and metal shapes turning.</p>
                <div className="space-y-1.5 text-xs border-t border-slate-50 pt-3">
                  <p><strong className="text-slate-700 font-bold">Mode:</strong> Regular / Practical</p>
                  <p><strong className="text-slate-700 font-bold">Duration:</strong> 2 Years</p>
                  <p><strong className="text-slate-700 font-bold">Eligibility:</strong> 10th Passed from recognized board</p>
                  <div className="mt-2 space-y-1 bg-gold-500/5 border border-gold-500/10 p-2 rounded text-[10px] leading-relaxed">
                    <p><strong className="text-slate-700 font-bold">Approved By:</strong> DGT / NCVT</p>
                    <p><strong className="text-slate-700 font-bold">Skill Partners:</strong> NSDC / Skill India / NAPS</p>
                  </div>
                </div>
              </div>
              <a href="#admission-form-top" className="block text-center py-2.5 text-xs font-bold uppercase tracking-wider text-navy-955 bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors cursor-pointer">Apply Now</a>
            </div>

            {/* 4. Diploma in CNC Operator */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 leading-tight">Diploma in CNC Operator</h3>
                <p className="text-[10px] font-black text-navy-950 bg-slate-50 border border-slate-100 rounded px-2.5 py-1 inline-block">
                  Industrial Technical Institute (ITI), Maharashtra State
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">Covers computer numerical control programming, milling and turning operations, CAD/CAM fundamentals, and machinery setups.</p>
                <div className="space-y-1.5 text-xs border-t border-slate-50 pt-3">
                  <p><strong className="text-slate-700 font-bold">Mode:</strong> Regular / Practical</p>
                  <p><strong className="text-slate-700 font-bold">Duration:</strong> 1 Year</p>
                  <p><strong className="text-slate-700 font-bold">Eligibility:</strong> 10th Passed from recognized board</p>
                  <div className="mt-2 space-y-1 bg-gold-500/5 border border-gold-500/10 p-2 rounded text-[10px] leading-relaxed">
                    <p><strong className="text-slate-700 font-bold">Approved By:</strong> DGT / NCVT</p>
                    <p><strong className="text-slate-700 font-bold">Skill Partners:</strong> NSDC / Skill India / NAPS</p>
                  </div>
                </div>
              </div>
              <a href="#admission-form-top" className="block text-center py-2.5 text-xs font-bold uppercase tracking-wider text-navy-955 bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors cursor-pointer">Apply Now</a>
            </div>

            {/* 5. Diploma in Welder */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.582A7.978 7.978 0 0021 12c0-4.418-4.03-8-9-8s-9 3.582-9 8c0 2.502 1.285 4.707 3.285 6.012l.148.098a9.013 9.013 0 0011.66-.098l.148-.098z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 leading-tight">Diploma in Welder</h3>
                <p className="text-[10px] font-black text-navy-950 bg-slate-50 border border-slate-100 rounded px-2.5 py-1 inline-block">
                  Industrial Technical Institute (ITI), Maharashtra State
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">Hands-on practice in Arc, Gas, TIG, and MIG welding, structural steel assembly, fabrication, and industrial safety regulations.</p>
                <div className="space-y-1.5 text-xs border-t border-slate-50 pt-3">
                  <p><strong className="text-slate-700 font-bold">Mode:</strong> Regular / Practical</p>
                  <p><strong className="text-slate-700 font-bold">Duration:</strong> 1 Year</p>
                  <p><strong className="text-slate-700 font-bold">Eligibility:</strong> 10th Passed / Fail</p>
                  <div className="mt-2 space-y-1 bg-gold-500/5 border border-gold-500/10 p-2 rounded text-[10px] leading-relaxed">
                    <p><strong className="text-slate-700 font-bold">Approved By:</strong> DGT / NCVT</p>
                    <p><strong className="text-slate-700 font-bold">Skill Partners:</strong> NSDC / Skill India / NAPS</p>
                  </div>
                </div>
              </div>
              <a href="#admission-form-top" className="block text-center py-2.5 text-xs font-bold uppercase tracking-wider text-navy-955 bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors cursor-pointer">Apply Now</a>
            </div>

            {/* 6. Diploma in Sales & Marketing */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 leading-tight">Diploma in Sales & Marketing</h3>
                <p className="text-[10px] font-black text-navy-955 bg-slate-50 border border-slate-100 rounded px-2.5 py-1 inline-block">
                  Industrial Technical Institute (ITI), Maharashtra State
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">Job-oriented training in retail store systems, customer care relations, digital marketing foundations, sales pitches, and communication skills.</p>
                <div className="space-y-1.5 text-xs border-t border-slate-50 pt-3">
                  <p><strong className="text-slate-700 font-bold">Mode:</strong> Regular / Practical</p>
                  <p><strong className="text-slate-700 font-bold">Duration:</strong> 1 Year</p>
                  <p><strong className="text-slate-700 font-bold">Eligibility:</strong> 10th / 12th Passed from any stream</p>
                  <div className="mt-2 space-y-1 bg-gold-500/5 border border-gold-500/10 p-2 rounded text-[10px] leading-relaxed">
                    <p><strong className="text-slate-700 font-bold">Approved By:</strong> DGT / NCVT</p>
                    <p><strong className="text-slate-700 font-bold">Skill Partners:</strong> NSDC / Skill India / NAPS</p>
                  </div>
                </div>
              </div>
              <a href="#admission-form-top" className="block text-center py-2.5 text-xs font-bold uppercase tracking-wider text-navy-955 bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors cursor-pointer">Apply Now</a>
            </div>
          </div>

          {/* Benefits & Value Proposition of ITI / Skill Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-extrabold text-navy-900 text-lg flex items-center gap-2">
                <span className="w-2 h-5 bg-gold-500 rounded-full inline-block"></span>
                Benefits of Skill-Based Education
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-600 font-medium">
                <li className="flex gap-2">
                  <svg className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy-900 block font-bold">Learn & Earn Support:</strong>
                    Direct registration desk for corporate apprenticeships under the NAPS scheme, offering monthly stipends to support students financially.
                  </div>
                </li>
                <li className="flex gap-2">
                  <svg className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy-900 block font-bold">100% Practical Training:</strong>
                    Intensive lab sessions using actual engineering lathes, electrical panels, and mechanical components.
                  </div>
                </li>
                <li className="flex gap-2">
                  <svg className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy-900 block font-bold">Government & Corporate Placements:</strong>
                    Alumni placed across key government bodies like state energy utilities, railways, and top private engineering enterprises.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-extrabold text-navy-900 text-lg flex items-center gap-2">
                <span className="w-2 h-5 bg-gold-500 rounded-full inline-block"></span>
                Apprenticeship & NAPS Admission Process
              </h3>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Enquiry Form Submission", desc: "Select 'ITI Programs' in the online registration form and submit details." },
                  { step: "02", title: "Trade Selection & Interview", desc: "Meet our counselors to select the trade matching your interests (Fitter, Electrical, etc.)." },
                  { step: "03", title: "NSDC Registration & Verification", desc: "Our administrative desk handles your official council validation and portal mapping." },
                  { step: "04", title: "NAPS Corporate Alignment", desc: "Secure placement in a partner enterprise to start your practical internship and monthly stipend." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-xs font-black text-gold-600 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-400/10">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-navy-900 text-xs">{item.title}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Admission Contact CTA */}
          <div className="bg-navy-950 border border-navy-900 p-8 rounded-2xl text-center space-y-4 max-w-4xl mx-auto shadow-md">
            <h3 className="text-xl font-bold text-white">Enroll in the academic batch 2026 today</h3>
            <p className="text-slate-350 text-xs max-w-xl mx-auto leading-relaxed font-medium">
              Join thousands of successful graduates. Get certified, secure corporate apprenticeships, and build a rewarding technical career.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a 
                href="#admission-form-top" 
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-955 bg-gold-500 hover:bg-gold-600 rounded-lg cursor-pointer"
              >
                Start Registration Form
              </a>
              <a 
                href={`tel:${officialPhone.replace(/\s+/g, '')}`}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Call Hotline: {officialPhone}
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
