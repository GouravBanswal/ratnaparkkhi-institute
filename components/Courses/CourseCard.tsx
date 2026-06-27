'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Course, formatCourseNameForUI } from './courses';

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
  onDownloadBrochure: (course: Course) => void;
}

export default function CourseCard({ course, onViewDetails }: CourseCardProps) {
  return (
    <motion.div
      layout
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      onClick={() => onViewDetails(course)}
      className="relative w-full h-[76px] bg-white rounded-xl border border-slate-200/80 flex items-center justify-center p-2.5 shadow-xs hover:shadow-[0_8px_20px_-4px_rgba(11,31,58,0.06)] hover:border-[#D4AF37]/50 transition-all duration-250 cursor-pointer group mx-auto text-center"
    >
      {(["Polytechnic - Computer Science Engineering (CSE)", "Polytechnic - Artificial Intelligence (AI)", "Polytechnic - Information Technology (IT)", "Polytechnic - Data Science", "MBA - Finance", "MBA - Marketing", "MBA - Human Resource", "MBA - Business Analytics", "MBA - International Business", "MBA - Operations", "B.Sc - Computer Science", "B.Sc - Data Science", "B.Sc - Information Technology", "M.Sc - Data Science", "M.Sc - Information Technology", "M.Sc - Computer Science", "MCA - Master of Computer Applications", "MCA - Artificial Intelligence & Machine Learning (UPES Online)", "MCA - Data Science (UPES Online)", "MCA - Information Technology"].includes(course.name)) && (
        <span className="absolute -top-2 -right-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B38F2B] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-0.5 z-10 border border-white">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          TRENDING
        </span>
      )}
      <h3 className="text-[11px] sm:text-xs font-bold text-[#0B1F3A] group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-3">
        {formatCourseNameForUI(course.name)}
      </h3>
    </motion.div>
  );
}
