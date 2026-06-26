'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Course } from './courses';

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
      className="w-full h-[76px] bg-white rounded-xl border border-slate-200/80 flex items-center justify-center p-2.5 shadow-xs hover:shadow-[0_8px_20px_-4px_rgba(11,31,58,0.06)] hover:border-[#D4AF37]/50 transition-all duration-250 cursor-pointer group mx-auto text-center"
    >
      <h3 className="text-[11px] sm:text-xs font-bold text-[#0B1F3A] group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-3">
        {course.name}
      </h3>
    </motion.div>
  );
}
