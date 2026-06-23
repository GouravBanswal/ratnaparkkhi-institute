import React from 'react';
import EnquiryForm from '@/components/EnquiryForm';
import { officialPhone, officialEmail } from '@/components/data/collegeData';

export default function ContactPage() {
  const formattedPhone = officialPhone.replace(/\s+/g, '');

  const departments = [
    { title: "Registrar / Admission Cell", contact: officialPhone, email: officialEmail },
    { title: "Student Section / Fees Counter", contact: officialPhone, email: officialEmail },
    { title: "Training & Placement Cell", contact: officialPhone, email: officialEmail },
    { title: "Scholarships Desk", contact: officialPhone, email: officialEmail },
    { title: "Skill Development / NAPS Desk", contact: officialPhone, email: officialEmail },
    { title: "Franchise Collaborations Office", contact: officialPhone, email: officialEmail }
  ];

  const faqs = [
    { q: "What boards and universities are you associated with?", a: "We are authorized admission & counseling partners for NSDC, Skill India, NAPS, BTP, BOSS Board, YCMOU, Tilak Maharashtra Vidyapeeth, Mumbai Hindi Vidyapeeth, and MSBSVET ITI. Our university partnerships include DY Patil University, Mangalayatan University, ISBM University, and Dr. CV Raman University." },
    { q: "What types of programs do you offer, and are they recognized?", a: "We offer 10th & 12th secondary schooling, ITI vocational programs certified by MSBSVET, UGC-entitled graduation and post-graduation degrees (BA, B.Com, B.Sc, BBA, BCA, MBA, MCA, M.Com, MA), and Skill Development programs approved by NSDC & Skill India." },
    { q: "Who is eligible for the Learn & Earn scheme and how does it work?", a: "The Learn & Earn scheme is designed for students and working professionals. By registering for vocational or degree programs, you are connected to NAPS apprenticeship opportunities. This allows you to gain real work experience and receive monthly stipends while you study." },
    { q: "How do I apply for courses and scholarships?", a: "You can apply online via our Admission Portal or call us at +91 9923313437. Our counselor cell will guide you in choosing the right course, managing installment payment plans, and applying for applicable scholarship/fee concessions." }
  ];

  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Contact Us</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Get in touch with our administrative offices, scholarship cell, or locate our campus.
          </p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details & Map */}
          <div className="lg:col-span-6 space-y-10">
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-gold-500 rounded-full"></span>
                Campus Headquarters
              </h3>
              <p className="text-sm text-slate-550 leading-relaxed font-medium">
                Our main administrative building is open for physical counselling visits from 9:30 AM to 5:30 PM, Monday through Saturday.
              </p>
            </div>

            {/* Quick stats details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-navy-900">Campus Location</h4>
                <p className="text-slate-500 mt-1 leading-relaxed font-semibold">
                  &quot;Tirumal&quot; Plot No. 8, New Shantiniketan Colony, Trimurti Chowk, Chh. Sambhajinagar.
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-navy-900">General Hotlines</h4>
                <p className="text-slate-500 mt-1 leading-relaxed font-semibold">
                  Tel: <a href={`tel:${formattedPhone}`} className="hover:text-gold-600">{officialPhone}</a><br />
                  Email: <a href={`mailto:${officialEmail}`} className="hover:text-gold-600">{officialEmail}</a>
                </p>
              </div>
            </div>

            {/* Map mockup (Light theme) */}
            <div className="bg-slate-50 border border-slate-155 rounded-2xl min-h-[300px] flex items-center justify-center relative overflow-hidden p-6 shadow-md text-center">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
              </div>
              <div className="relative z-10 space-y-3 max-w-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-navy-900 font-bold text-sm">Interactive Campus Map</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  We are conveniently located at Trimurti Chowk, Chh. Sambhajinagar with excellent connectivity across the city.
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block mt-3 px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-navy-950 bg-gold-500 hover:bg-gold-600 rounded-lg shadow-md cursor-pointer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-6 w-full">
            <EnquiryForm 
              title="Admission Counsel Desk Enquiry"
              subtitle="Submit details below, and our counsel cell will contact you via Phone/Email."
              compact={false}
            />
          </div>
        </div>
      </section>

      {/* Department-Specific Contact Grid (Slate-50 Background) */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900">Department Directories</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Contact specific departments directly for quicker resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((d, i) => (
              <div key={i} className="bg-white border border-slate-100 p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-305 space-y-2">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">{d.title}</h4>
                <div className="text-xs space-y-1 text-slate-500 font-semibold">
                  <span className="block">
                    <strong className="text-slate-700 font-bold">Phone:</strong> <a href={`tel:${formattedPhone}`} className="hover:text-gold-600 transition-colors">{d.contact}</a>
                  </span>
                  <span className="block">
                    <strong className="text-slate-700 font-bold">Email:</strong> <a href={`mailto:${d.email}`} className="hover:text-gold-600 transition-colors">{d.email}</a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-navy-900">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-400 font-bold">General queries about admissions, partners, and apprenticeships.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 space-y-2">
              <h4 className="font-bold text-navy-900 text-sm sm:text-base flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">Q</span>
                <span>{f.q}</span>
              </h4>
              <p className="text-xs text-slate-500 pl-7 leading-relaxed font-semibold">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
