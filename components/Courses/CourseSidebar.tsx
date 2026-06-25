'use client';

import React from 'react';
import { courseCategories } from './courses';

interface CourseSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

// Maps category name to a clean, hand-crafted SVG icon
const getCategoryIcon = (category: string, active: boolean) => {
  const iconColor = active ? 'text-[#0B1F3A]' : 'text-slate-400 group-hover:text-[#D4AF37]';
  const sizeClass = "h-5 w-5 shrink-0 transition-colors duration-200 " + iconColor;

  switch (category) {
    case "Engineering":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "ITI Trades":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "Polytechnic":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "Diploma Engineering":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
    case "MBA":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "Skill Development":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "Apprenticeship":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "Certificate Courses":
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={sizeClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
};

export default function CourseSidebar({ selectedCategory, setSelectedCategory }: CourseSidebarProps) {
  return (
    <div className="w-full">
      {/* Mobile Category Navigation: Horizontal Scroll List */}
      <div className="lg:hidden w-full overflow-x-auto scrollbar-none flex gap-2 pb-4 border-b border-slate-200">
        {courseCategories.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap tracking-wide border transition-all duration-200 shrink-0 cursor-pointer ${
                active
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0B1F3A] shadow-md font-black'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-[#0B1F3A] hover:text-[#0B1F3A]'
              }`}
            >
              {getCategoryIcon(category, active)}
              {category}
            </button>
          );
        })}
      </div>

      {/* Desktop Category Navigation: Vertical Sidebar */}
      <div className="hidden lg:flex flex-col bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-1">
        <h3 className="text-slate-400 font-extrabold text-[10px] tracking-wider uppercase px-3 py-2 mb-2">
          Categories
        </h3>
        
        {courseCategories.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-xs font-bold text-left tracking-wide transition-all duration-250 cursor-pointer ${
                active
                  ? 'bg-[#D4AF37] text-[#0B1F3A] font-black shadow-md translate-x-1'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A] hover:translate-x-0.5'
              }`}
            >
              {getCategoryIcon(category, active)}
              <span>{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
