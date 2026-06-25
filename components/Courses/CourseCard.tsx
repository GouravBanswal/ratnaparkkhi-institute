'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Course } from './courses';

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
  onDownloadBrochure: (course: Course) => void;
}

// Icon renderer mapping iconName to custom inline SVG icons
const getCourseIconSvg = (iconName: string) => {
  const sizeClass = "h-6 w-6 text-[#D4AF37]"; // Gold
  switch (iconName) {
    case "computer":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "gear":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "wrench":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.933 12.8a1 1 0 000-1.6L6.6 6.2a1 1 0 00-1.6 0L3.4 7.8a1 1 0 000 1.6l5.333 5a1 1 0 001.6 0l1.6-1.6zM20.6 16.2l-5.333-5a1 1 0 00-1.6 0l-1.6 1.6a1 1 0 000 1.6l5.333 5a1 1 0 001.6 0l1.6-1.6a1 1 0 000-1.6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l2-2" />
        </svg>
      );
    case "briefcase":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "database":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    case "cpu":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      );
    case "building":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "chart":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      );
    case "network":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      );
    case "bolt":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "flame":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.582A7.978 7.978 0 0021 12c0-4.418-4.03-8-9-8s-9 3.582-9 8c0 2.502 1.285 4.707 3.285 6.012l.148.098a9.013 9.013 0 0011.66-.098l.148-.098z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "sparkles":
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
  }
};

export default function CourseCard({ course, onViewDetails, onDownloadBrochure }: CourseCardProps) {
  // Determine small badges to show at the bottom
  const hasSkillIndia = course.badge?.toLowerCase().includes('skill india') || course.category === 'Skill Development' || course.subCategories?.includes('Apprenticeship');
  const isGovApproved = course.badge?.toLowerCase().includes('government') || course.badge?.toLowerCase().includes('aicte') || course.subCategories?.includes('Government Approved Courses') || course.category === 'ITI Trades';
  const hasPlacement = course.subCategories?.includes('Placement Programs') || course.badge?.toLowerCase().includes('placement') || course.badge?.toLowerCase().includes('popular') || course.category === 'Engineering' || course.category === 'MBA';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden p-5 md:p-6 group relative"
    >
      <div className="space-y-4">
        {/* Card Header: Icon & Top Badge */}
        <div className="flex items-center justify-between gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/20 transition-all duration-300">
            {getCourseIconSvg(course.iconName)}
          </div>
          
          {course.badge && (
            <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[#D4AF37]/20">
              {course.badge}
            </span>
          )}
        </div>

        {/* Course Title */}
        <h3 className="text-[15px] sm:text-base font-extrabold text-[#0B1F3A] group-hover:text-[#D4AF37] transition-colors leading-snug">
          {course.name}
        </h3>

        {/* Course description snippet */}
        <p className="text-xs text-slate-500 leading-relaxed font-semibold line-clamp-2">
          {course.description}
        </p>

        {/* Course Details List */}
        <div className="pt-3 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase text-slate-400 font-extrabold tracking-wider w-16">Duration:</span>
            <span className="text-slate-900 font-extrabold">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase text-slate-400 font-extrabold tracking-wider w-16">Eligibility:</span>
            <span className="text-slate-900 font-extrabold line-clamp-1">{course.eligibility}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase text-slate-400 font-extrabold tracking-wider w-16">Mode:</span>
            <span className="text-slate-900 font-extrabold">{course.mode}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase text-slate-400 font-extrabold tracking-wider w-16">Intake:</span>
            <span className="text-slate-900 font-extrabold">{course.seats} Seats</span>
          </div>
        </div>
      </div>

      {/* Badges and CTA Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
        {/* Quality Badges */}
        <div className="flex flex-wrap gap-1.5">
          {hasPlacement && (
            <span className="bg-emerald-50 text-emerald-700 text-[9px] font-black px-2 py-0.5 rounded border border-emerald-100 uppercase tracking-wide">
              Placement Assist
            </span>
          )}
          {hasSkillIndia && (
            <span className="bg-sky-50 text-sky-700 text-[9px] font-black px-2 py-0.5 rounded border border-sky-100 uppercase tracking-wide">
              Skill India
            </span>
          )}
          {isGovApproved && (
            <span className="bg-indigo-50 text-indigo-700 text-[9px] font-black px-2 py-0.5 rounded border border-indigo-100 uppercase tracking-wide">
              Govt Approved
            </span>
          )}
        </div>

        {/* Action Buttons: Apply Now, View Details, Download Brochure */}
        <div className="space-y-2">
          {/* Apply Now (Solid Gold / Navy button) */}
          <Link
            href="/online-admission"
            className="block w-full text-center py-2.5 text-xs font-black uppercase tracking-wider text-white bg-[#0B1F3A] hover:bg-[#D4AF37] hover:text-[#0B1F3A] rounded-xl transition-all duration-300 cursor-pointer shadow-sm"
          >
            Apply Now
          </Link>

          {/* View Details & Download Brochure (Side-by-side) */}
          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(course)}
              className="flex-1 text-center py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-200 hover:border-[#0B1F3A] hover:bg-slate-50 rounded-xl transition-all duration-200 cursor-pointer"
            >
              View Details
            </button>
            <button
              onClick={() => onDownloadBrochure(course)}
              className="flex-1 text-center py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-200 hover:border-[#0B1F3A] hover:bg-slate-50 rounded-xl transition-all duration-200 cursor-pointer"
            >
              Brochure
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
