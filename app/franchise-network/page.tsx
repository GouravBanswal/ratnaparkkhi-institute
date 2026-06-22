'use client';

import React, { useState } from 'react';

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    instName: '',
    contactName: '',
    email: '',
    phone: '',
    location: '',
    space: '',
    model: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        instName: '',
        contactName: '',
        email: '',
        phone: '',
        location: '',
        space: '',
        model: '',
        message: ''
      });
    }, 1200);
  };

  const models = [
    { title: "Authorized Counseling Center", details: "Admission counseling hub for online & distance university programs (DY Patil, Mangalayatan, ISBM, Dr. CV Raman University)." },
    { title: "Skill Development & ITI Center", details: "Vocational trades training center. Focus on MSBSVET ITI courses, NSDC, Skill India, and NAPS apprenticeship programs." },
    { title: "Comprehensive Academic Hub", details: "Providing the complete academic portfolio: school boards, ITI, graduation/post-graduation degrees, and skill development." }
  ];

  const benefits = [
    { title: "Ready-made System", desc: "Access to an established educational and counseling system built since 2008." },
    { title: "Academic Support", desc: "Complete syllabus guidelines, study materials, and academic coordinator support." },
    { title: "Marketing Support", desc: "Co-branded digital/physical marketing assets, banners, and lead generation guidance." },
    { title: "Technical Support", desc: "LMS portal access, online admission system, and technical maintenance support." },
    { title: "25% Revenue Share", desc: "Attractive and transparent 25% revenue sharing model for sustainable center growth." }
  ];

  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">Franchise & Collaboration Network</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Partner with Ratnaparkkhi Educational Society to establish world-class technical and vocational learning hubs.
          </p>
        </div>
      </section>

      {/* Franchise Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900">Official Franchise Benefits</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            We provide our center partners with complete end-to-end enablement to ensure high success rates and smooth student counseling operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-bold text-lg mx-auto">
                ✓
              </div>
              <h4 className="font-bold text-navy-900 text-sm">{b.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Models & Value Propositon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-navy-900 leading-tight">
            Why Collaborate with Ratnaparkkhi Institute of Engineering & Management?
          </h2>
          <p className="text-sm text-slate-655 leading-relaxed font-medium">
            Ratnaparkkhi Educational Society is a trusted name in education and skill development since 2008. By joining our franchise network, you partner with an established system to deliver distance education, ITI programs, and skill certifications.
          </p>
          <div className="space-y-4">
            {models.map((m, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <h4 className="font-bold text-navy-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-1.5 h-4.5 bg-gold-500 rounded-full"></span>
                  {m.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">{m.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Franchise Query Form */}
        <div className="w-full bg-white border border-slate-100 p-6 md:p-8 rounded-xl shadow-lg">
          {success ? (
            <div className="flex flex-col items-center justify-center text-center py-10">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 border border-emerald-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Proposal Received!</h3>
              <p className="text-xs text-slate-500 max-w-sm">
                Thank you for your interest in the Ratnaparkkhi Institute of Engineering & Management Franchise Network. Our business development team will review your space and budget details and call you in 2 business days.
              </p>
              <button 
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-6 px-5 py-2 text-xs font-semibold text-white bg-navy-800 hover:bg-navy-900 rounded-lg transition-colors cursor-pointer"
              >
                Submit Another Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-gold-500 rounded-full inline-block"></span>
                  Franchise Enquiry Form
                </h3>
                <p className="text-xs text-slate-500 mt-1">Submit your interest to initiate background evaluation.</p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Institution/Trust Name</label>
                <input 
                  type="text" 
                  name="instName"
                  value={formData.instName}
                  onChange={handleChange}
                  placeholder="e.g. Ratnaparkkhi Learning Trust"
                  className="w-full px-4 py-2 text-xs bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Contact Person Name</label>
                  <input 
                    type="text" 
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-2 text-xs bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className="w-full px-4 py-2 text-xs bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rajesh@gmail.com"
                    className="w-full px-4 py-2 text-xs bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Proposed Location (City/State)</label>
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Kolhapur, Maharashtra"
                    className="w-full px-4 py-2 text-xs bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Floor Space Available (Sq Ft)</label>
                  <input 
                    type="text" 
                    name="space"
                    value={formData.space}
                    onChange={handleChange}
                    placeholder="e.g. 2,000 sq ft"
                    className="w-full px-4 py-2 text-xs bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Franchise Model Preference</label>
                  <select 
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-xs bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all cursor-pointer"
                    required
                  >
                    <option value="">-- Choose Model --</option>
                    {models.map((m, i) => (
                      <option key={i} value={m.title}>{m.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Message or Queries</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your educational background or corporate experiences."
                  className="w-full px-4 py-2 text-xs bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 px-6 text-xs font-bold uppercase tracking-wider text-navy-955 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none transition-all cursor-pointer text-center"
              >
                {loading ? "Submitting Proposal..." : "Submit Franchise Request"}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
