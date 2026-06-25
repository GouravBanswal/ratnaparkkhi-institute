'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Course } from './courses';
import CourseCard from './CourseCard';

interface CourseGridProps {
  courses: Course[];
  onViewDetails: (course: Course) => void;
  onDownloadBrochure: (course: Course) => void;
}

export default function CourseGrid({ courses, onViewDetails, onDownloadBrochure }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-slate-350 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h4 className="font-extrabold text-[#0B1F3A] text-lg">No Courses Found</h4>
        <p className="text-xs text-slate-500 max-w-xs mt-1 leading-relaxed font-semibold">
          Try refining your search query or choosing another category or filter chip option.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={onViewDetails}
              onDownloadBrochure={onDownloadBrochure}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
