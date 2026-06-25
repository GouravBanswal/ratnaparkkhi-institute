'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/components/data/collegeData';

export default function Placement() {
  // Video Playlist State
  const [activeVideo, setActiveVideo] = useState({
    title: "Overview of our signature Learn & Earn Scheme Model",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // mock
    duration: "4:15",
    views: "5.4K views"
  });

  const videosList = [
    {
      title: "Overview of our signature Learn & Earn Scheme Model",
      duration: "4:15",
      views: "5.4K views"
    },
    {
      title: "How to Enroll in ITI Trades & NAPS Apprenticeship Programs",
      duration: "6:30",
      views: "3.2K views"
    },
    {
      title: "Engineering & ITI Admissions Guide (Degree, Diploma & Trades)",
      duration: "5:10",
      views: "4.8K views"
    },
    {
      title: "Student Success Stories & PAN India Placements",
      duration: "3:45",
      views: "6.1K views"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Latest News List */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Campus Flash</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">Latest News & Articles</h2>
            </div>

            <div className="space-y-6">
              {blogPosts.map((b, i) => (
                <div key={i} className="flex gap-4 items-start bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="flex-grow space-y-2">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      <span className="inline-flex items-center gap-1 bg-rose-600 text-white px-2 py-0.5 rounded text-[8px] font-black animate-pulse">
                        LIVE
                      </span>
                      <span>{b.date}</span>
                      <span>•</span>
                      <span>{b.readTime}</span>
                    </div>
                    
                    <Link 
                      href={`/career-guidance-blog/${b.slug}`}
                      className="block font-bold text-[#0B1F3A] hover:text-[#D4AF37] transition-colors text-sm sm:text-base leading-tight"
                    >
                      {b.title}
                    </Link>
                    
                    <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-2">
                      {b.excerpt}
                    </p>
                    
                    <span className="block text-[10px] text-slate-400 font-bold">By {b.author}</span>
                  </div>

                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-200 border border-slate-100 rounded-lg flex items-center justify-center shrink-0 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center px-1">
                    RIEM News
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link 
                href="/career-guidance-blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F3A] hover:text-gold-600"
              >
                View All Updates
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side: Video Player & Playlist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Video Walkthrough</span>
              <h2 className="text-2xl font-extrabold text-[#0B1F3A]">Vocational & Engineering Guides</h2>
            </div>

            {/* Video Player Display */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg relative min-h-[220px] flex flex-col justify-end p-6 border border-slate-800">
              <div className="absolute inset-0 bg-navy-950/70 z-10 bg-slate-950/70"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0b2240_0%,transparent_70%)] opacity-40"></div>
              
              {/* Play Button Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B1F3A] rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-transform hover:scale-110 active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </div>

              <div className="relative z-20 space-y-1.5 text-left">
                <span className="inline-block bg-[#D4AF37]/20 text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border border-[#D4AF37]/35">
                  Course Guide ({activeVideo.duration})
                </span>
                <h4 className="text-white font-bold text-sm leading-tight max-w-sm">
                  {activeVideo.title}
                </h4>
                <p className="text-slate-400 text-[10px] font-medium">{activeVideo.views}</p>
              </div>
            </div>

            {/* Playlist Column */}
            <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
              {videosList.map((vid, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveVideo({
                    title: vid.title,
                    duration: vid.duration,
                    views: vid.views,
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                  })}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                    activeVideo.title === vid.title
                      ? 'bg-gold-50/40 border-[#D4AF37]/30 bg-amber-50/20'
                      : 'bg-white border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  <div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center shrink-0 border border-slate-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1F3A] leading-snug line-clamp-1">{vid.title}</h4>
                    <span className="text-[10px] text-slate-400 font-semibold">{vid.duration} • {vid.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
