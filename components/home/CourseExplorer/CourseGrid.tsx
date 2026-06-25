'use client';

import React from 'react';
import { Course } from '@/components/Courses/courses';
import CourseCard from './CourseCard';
import { StaggerContainer, StaggerItem } from '@/components/animations/MotionWrappers';

interface CourseGridProps {
  courses: Course[];
  onViewDetails: (course: Course) => void;
  resetFilters: () => void;
}

export default function CourseGrid({ courses, onViewDetails, resetFilters }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="col-span-full py-16 text-center text-slate-400 bg-slate-100/50 border border-dashed border-slate-300 rounded-2xl p-8 max-w-lg mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-[#D4AF37] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="font-extrabold text-base text-[#0B1F3A]">No courses available</p>
        <p className="text-xs text-slate-500 mt-1 mb-6 leading-relaxed font-semibold">
          There are no courses matching these filters at the moment. Try resetting your filters or contacting our counsel desk for direct seat updates.
        </p>
        <button
          onClick={resetFilters}
          className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#0B1F3A] bg-[#D4AF37] hover:bg-[#D4AF37]/90 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <StaggerItem key={course.id}>
          <CourseCard course={course} onViewDetails={onViewDetails} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
