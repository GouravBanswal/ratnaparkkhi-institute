'use client';

import React, { useState } from 'react';

export default function FAQ() {
  const [questionSubmitted, setQuestionSubmitted] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    setQuestionSubmitted(true);
    setTimeout(() => {
      setUserQuestion('');
      setQuestionSubmitted(false); // reset so they can ask again later
    }, 3000);
  };

  return (
    <section className="bg-navy-950 text-white py-12 relative overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold">
            Get our engineering and technical training experts to answer your queries
          </h3>
          <p className="text-slate-400 text-xs font-medium">
            Submit your question, trade inquiry, or admissions counseling question below. A counsellor will call you within 24 Hours.
          </p>
        </div>

        {questionSubmitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-lg max-w-lg mx-auto text-xs font-bold animate-fade-in flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Question submitted successfully! Our help desk will contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleAskQuestion} className="flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Ask about engineering branches, ITI trades, MBA specializations, admissions, fees..."
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              className="flex-grow bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white/15"
              required
            />
            <button 
              type="submit"
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B1F3A] font-black text-xs sm:text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer shrink-0 uppercase tracking-wider"
            >
              Ask Counsellor
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
