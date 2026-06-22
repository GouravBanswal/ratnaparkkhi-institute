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
    "Domicile Certificate of Maharashtra State",
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
          <div className="lg:col-span-6 w-full">
            <EnquiryForm 
              title="Admission Registration 2026"
              subtitle="Please provide accurate details so our admission mentors can contact you and assist in your process."
              compact={false}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
