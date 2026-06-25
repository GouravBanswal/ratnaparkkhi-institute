'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Course } from '@/components/Courses/courses';

// SVG Icon Helper based on iconName (enlarged for better spacing and visibility)
const GetCourseIcon = (iconName: string) => {
  const iconClass = "h-11 w-11 text-[#0B1F3A] transition-transform duration-300 group-hover:scale-105";
  switch (iconName) {
    case 'computer':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'gear':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'wrench':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.533 1.533 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.533 1.533 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01-.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.533 1.533 0 01-2.287-.947zM12 15a3 3 0 110-6 3 3 0 010 6z" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'database':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    case 'cpu':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 00-2 2zM9 9h6v6H9V9z" />
        </svg>
      );
    case 'building':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 'chart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      );
    case 'network':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'bolt':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'flame':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.544A8 8 0 1111.3 2.238a9.027 9.027 0 005.13 5.13 9.027 9.027 0 003.239 5.13 8 8 0 01-2.012 6.046z" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      );
  }
};

// Course Level helper (UG vs PG vs Diploma)
const GetCourseLevel = (course: Course) => {
  const name = course.name.toLowerCase();
  const cat = course.category.toLowerCase();
  if (cat.includes('mba') || cat.includes('management') || name.includes('mba') || name.includes('master')) {
    return 'Post Graduate (PG)';
  }
  if (cat.includes('polytechnic') || cat.includes('diploma') || name.includes('diploma')) {
    return 'Diploma Level';
  }
  if (cat.includes('apprenticeship') || cat.includes('skill') || cat.includes('certificate')) {
    return 'Vocational / Skill';
  }
  return 'Undergraduate (UG)';
};

// Gold Badge tag logic based on metadata
const GetCourseBadge = (course: Course) => {
  if (course.badge) return course.badge;
  const cat = course.category.toLowerCase();
  if (cat.includes('engineering')) return 'B.Tech Program';
  if (cat.includes('iti')) return 'NCVT Approved';
  if (cat.includes('mba')) return 'UGC Approved';
  return 'Recognized';
};

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
}

export default function CourseCard({ course, onViewDetails }: CourseCardProps) {
  const badgeText = GetCourseBadge(course);
  const courseLevel = GetCourseLevel(course);

  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_10px_30px_-5px_rgba(11,31,58,0.1)] hover:border-[#D4AF37]/50 transition-all duration-250 h-full group"
    >
      <div className="space-y-4">
        {/* Floating Top Badge in Gold */}
        <div className="flex justify-between items-center w-full gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#0B1F3A] border border-[#D4AF37]/35 text-[9px] font-bold uppercase tracking-wider">
            {badgeText}
          </span>
          <span className="text-[10px] font-bold text-slate-400">
            {course.seats > 0 ? `${course.seats} Seats` : 'Helpline Open'}
          </span>
        </div>

        {/* Centered Large SVG Icon & Course Title */}
        <div className="flex flex-col items-center text-center space-y-3 pt-2">
          <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/20 transition-all duration-250">
            {GetCourseIcon(course.iconName)}
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-extrabold text-[#0B1F3A] group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-2 px-1">
              {course.name}
            </h3>
            {/* Level & Category Info */}
            <span className="text-[9px] text-[#D4AF37] font-black uppercase tracking-widest block leading-none">
              {courseLevel} • {course.category}
            </span>
          </div>
        </div>

        {/* Short Subtitles for Details */}
        <div className="pt-3 border-t border-slate-100/60 space-y-1 text-[10px] text-slate-500 font-semibold leading-relaxed">
          <p>
            <strong className="text-[#0B1F3A] font-bold">Duration:</strong> {course.duration}
          </p>
          <p className="truncate" title={course.eligibility}>
            <strong className="text-[#0B1F3A] font-bold">Eligibility:</strong> {course.eligibility}
          </p>
          <p>
            <strong className="text-[#0B1F3A] font-bold">Learning Mode:</strong> {course.mode}
          </p>
        </div>
      </div>

      {/* Button Group: Outlined View Details & Solid Gold Apply Now */}
      <div className="grid grid-cols-2 gap-2.5 pt-5 mt-auto">
        <button
          onClick={() => onViewDetails(course)}
          className="text-center py-2.5 text-[10px] font-black uppercase tracking-wider text-[#0B1F3A] border border-[#0B1F3A]/25 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
        >
          View Details
        </button>
        <Link
          href="/online-admission"
          className="text-center py-2.5 text-[10px] font-black uppercase tracking-wider text-[#0B1F3A] bg-[#D4AF37] hover:bg-[#D4AF37]/90 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer block"
        >
          Apply Now
        </Link>
      </div>
    </motion.div>
  );
}
