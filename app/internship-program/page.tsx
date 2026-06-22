import React from 'react';
import Link from 'next/link';

export default function InternshipsPage() {
  const partners = [
    { name: "Microsoft Academic Alliance", focus: "Cloud Architectures & Azure AI Models" },
    { name: "Cisco Networking Academy", focus: "Routing protocols, cybersecurity, & server configurations" },
    { name: "AWS Academy", focus: "Cloud Practitioner, SysOps, & serverless setups" },
    { name: "RedHat Academy", focus: "Linux administration & open shift containerization" },
    { name: "Infosys Springboard Partner", focus: "Industry readiness certifications & foundation modules" },
    { name: "Oracle Academy", focus: "Advanced SQL databases, PL/SQL, & cloud database systems" }
  ];

  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Internship Program</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Mandatory semester-long industrial training designed to bridge classroom theories with corporate practices.
          </p>
        </div>
      </section>

      {/* Overview & Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-navy-900 leading-tight">
              Semester-Long Mandatory Industry Internships
            </h2>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              At Ratnaparkkhi Institute of Engineering & Management, we believe classroom lectures find their validation in industrial workspaces. That's why we mandate a full 6-month industrial internship for all engineering and management students in their final year. 
            </p>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              Students work on live projects in top IT firms, mechanical manufacturing lines, and management consultancy cells. During these 6 months, students are exempted from in-class lectures, allowing them to focus entirely on their industrial roles.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
              <div>
                <span className="block text-2xl font-bold text-navy-900">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Placement Rate</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-navy-900">₹60K/mo</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Max Stipend</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-navy-900">₹15K/mo</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Avg Stipend</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 space-y-6">
            <h3 className="text-lg font-bold text-navy-900">Internship Benefits</h3>
            <ul className="space-y-4 text-xs text-slate-600 font-semibold">
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Pre-Placement Offer (PPO) opportunities:</strong> Over 40% of internships convert to permanent, high-paying jobs before graduation.</span>
              </li>
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Real-world tools:</strong> Experience with Git, corporate slack channels, database scales, and real client meetings.</span>
              </li>
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mentored progress:</strong> Guided by both an industry supervisor and an internal faculty mentor.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MOUs & Academies */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900">Our Technology Academy Partners</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Students undergo certified training from global technology giants directly inside our campus.
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
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h3 className="text-2xl font-bold text-navy-900">Internship Evaluation & NOC</h3>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
          Students must maintain a clean academic record (no active backlogs in 5th/6th semesters) to request an internship No Objection Certificate (NOC). The internship is evaluated via monthly diaries, project reports, and a final viva panel containing external corporate experts.
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
