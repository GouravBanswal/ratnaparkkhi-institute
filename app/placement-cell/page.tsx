import React from 'react';
import Image from 'next/image';
import { placementStats, successStories } from '@/components/data/collegeData';
import { universityPartners } from '@/components/data/universityPartners';
import { TM } from '@/lib/helpers';

export default function PlacementsPage() {
  const steps = [
    { title: "Profile Mapping & Career Counseling", desc: "Admissions counselors review student backgrounds, qualifications, and employment goals to select the right engineering branch, MBA specialization, or ITI trade." },
    { title: "Skill & Trade Development", desc: "Students undergo vocational ITI trade preparation or NSDC-approved skill development modules matching market demands." },
    { title: "Apprenticeship Matchmaking (NAPS/BTP)", desc: "We coordinate with corporate and government partners to register students for apprenticeships with monthly stipends." },
    { title: "Job Placement Interviews", desc: "Candidates are scheduled for placement drives and interviews in government departments and private sectors." },
    { title: "Ongoing Placement Assistance", desc: "Successful candidates receive final job assignments, while other graduates receive continuous job referral support." }
  ];

  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Placement Assistance</h1>
          <p className="text-sm md:text-base text-slate-650 max-w-2xl mx-auto font-medium">
            Our placement department works year-round to coordinate Learn & Earn corporate apprenticeships, ITI job placements, and private sector opportunities.
          </p>
        </div>
      </section>

      {/* 2. Placements Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900">Placement Achievements</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            A track record of our successfully qualified and placed engineering, technical, and ITI graduates.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="block text-3xl font-black text-gold-655">{placementStats.highestPackage}</span>
            <span className="block text-[10px] text-navy-900 uppercase tracking-widest font-bold mt-1">Total Placed</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="block text-3xl font-black text-gold-655">{placementStats.averagePackage}</span>
            <span className="block text-[10px] text-navy-900 uppercase tracking-widest font-bold mt-1">Academic Success</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="block text-3xl font-black text-gold-655">{placementStats.placementRate}</span>
            <span className="block text-[10px] text-navy-900 uppercase tracking-widest font-bold mt-1">Success Rate</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="block text-3xl font-black text-gold-655">23,000+</span>
            <span className="block text-[10px] text-navy-900 uppercase tracking-widest font-bold mt-1">Passed Students</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 col-span-2 lg:col-span-1">
            <span className="block text-lg font-black text-gold-655 uppercase mt-2">NAPS / NSDC</span>
            <span className="block text-[10px] text-navy-900 uppercase tracking-widest font-bold mt-1">Apprenticeships</span>
          </div>
        </div>
      </section>

      {/* 3. Placement Officer message */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 text-center">
            <div className="w-24 h-24 rounded-full bg-navy-50 border-2 border-gold-500 flex items-center justify-center font-bold text-navy-900 text-2xl mx-auto mb-4">
              AK
            </div>
            <h4 className="font-bold text-navy-900">Prof. Anjali Kulkarni</h4>
            <span className="text-xs text-gold-600 font-bold uppercase tracking-wider block mt-1">Head, Placement Cell</span>
          </div>
          <div className="lg:col-span-9 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gold-500 rounded-full"></span>
              Placement Desk Message
            </h3>
            <p className="text-sm text-slate-655 leading-relaxed font-medium">
              &quot;At Ratnaparkkhi Institute of Engineering & Management<TM />, we believe that education must lead to practical career growth. Our placement cell coordinates Corporate Relations and NAPS apprenticeships. We assist candidates in securing jobs in private enterprises, retail, IT support, and government sectors. We train students under our signature Learn & Earn model, ensuring they gain real-world corporate experience while pursuing their technical education.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* 4. Training Curriculum / Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl font-extrabold text-navy-900">Career Assistance Roadmap</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Our step-by-step career program ensures our candidates transition smoothly from technical training to placements.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((s, idx) => (
            <div key={idx} className="flex gap-4 items-start bg-white border border-slate-100 p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-navy-50 text-gold-600 flex items-center justify-center font-bold text-sm shrink-0 border border-slate-100">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm sm:text-base">{s.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Recognitions logos (Light theme) */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl font-bold text-navy-900">Our Certifications & Affiliations</h3>
            <p className="text-xs text-slate-500 font-semibold">We coordinate skill certifications, technical training, and apprenticeship placements with these organizations.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {universityPartners.map((u, i) => (
              <div key={i} className="bg-white border border-slate-100 p-4 rounded-lg flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all text-center uppercase font-bold text-xs md:text-sm text-navy-900 hover:text-gold-600 min-h-[80px]">
                {u.logo ? (
                  <Image 
                    src={u.logo} 
                    alt={u.name} 
                    width={120} 
                    height={60} 
                    className="max-h-10 object-contain w-auto"
                  />
                ) : (
                  <span className="text-[10px] sm:text-xs leading-tight font-extrabold">{u.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Success Stories Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900">Student Placement Journeys</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Read about the career transitions of our vocational, engineering, and management graduates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex text-gold-500 gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed font-medium">
                  &quot;{story.quote}&quot;
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-6">
                <div className="w-12 h-12 rounded-full bg-navy-50 border border-gold-500 flex items-center justify-center font-bold text-navy-900 text-sm shrink-0">
                  {story.imagePlaceholder}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy-900">{story.name}</h4>
                  <span className="block text-[10px] text-slate-400 font-bold">{story.branch}</span>
                  <span className="inline-block mt-1 text-[10px] font-bold text-gold-600 uppercase tracking-wider">
                    {story.designation} at {story.company} | Pathway: {story.package}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
