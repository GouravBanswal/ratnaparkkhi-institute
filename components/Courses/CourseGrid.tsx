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

import { getCoursePriorityAndGroup, getQualificationMeta, bTechDisplayOrder, mTechDisplayOrder, diplomaDisplayOrder, pgManagementDisplayOrder, bScDisplayOrder, mScDisplayOrder, mcaDisplayOrder } from './courses';

export default function CourseGrid({ courses, onViewDetails, onDownloadBrochure }: CourseGridProps) {
  const groupedCourses = React.useMemo(() => {
    const groups: { [key: string]: Course[] } = {};
    courses.forEach(course => {
      const { group } = getCoursePriorityAndGroup(course);
      if (!groups[group]) groups[group] = [];
      groups[group].push(course);
    });
    
    return Object.entries(groups).sort((a, b) => {
      const priorityA = getCoursePriorityAndGroup(a[1][0]).priority;
      const priorityB = getCoursePriorityAndGroup(b[1][0]).priority;
      return priorityA - priorityB;
    }).map(([groupName, groupCourses]) => {
      if (groupName === 'B.Tech') {
        groupCourses.sort((a, b) => {
          const indexA = bTechDisplayOrder.indexOf(a.name);
          const indexB = bTechDisplayOrder.indexOf(b.name);
          if (indexA === -1 && indexB === -1) return 0;
          if (indexA === -1) return 1;
          if (indexB === -1) return -1;
          return indexA - indexB;
        });
      } else if (groupName === 'M.Tech') {
        groupCourses.sort((a, b) => {
          const indexA = mTechDisplayOrder.indexOf(a.name);
          const indexB = mTechDisplayOrder.indexOf(b.name);
          if (indexA === -1 && indexB === -1) return 0;
          if (indexA === -1) return 1;
          if (indexB === -1) return -1;
          return indexA - indexB;
        });
      } else if (groupName === 'Diploma In Engineering') {
        groupCourses.sort((a, b) => {
          const indexA = diplomaDisplayOrder.indexOf(a.name);
          const indexB = diplomaDisplayOrder.indexOf(b.name);
          if (indexA === -1 && indexB === -1) return 0;
          if (indexA === -1) return 1;
          if (indexB === -1) return -1;
          return indexA - indexB;
        });
      } else if (groupName === 'Undergraduate (UG)') {
        const isScience = groupCourses.some(c => c.category === 'Science' || c.name.startsWith('B.Sc'));
        if (isScience) {
          groupCourses.sort((a, b) => {
            const indexA = bScDisplayOrder.indexOf(a.name);
            const indexB = bScDisplayOrder.indexOf(b.name);
            if (indexA === -1 && indexB === -1) return 0;
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
          });
        }
      } else if (groupName === 'Postgraduate (PG)') {
        const hasMca = groupCourses.some(c => c.name.startsWith('MCA -'));
        const hasMsc = groupCourses.some(c => c.name.startsWith('M.Sc -'));
        
        if (hasMca && hasMsc) {
          groupCourses.sort((a, b) => {
            const isA_Mca = a.name.startsWith('MCA -');
            const isB_Mca = b.name.startsWith('MCA -');
            
            if (isA_Mca && !isB_Mca) return -1;
            if (!isA_Mca && isB_Mca) return 1;
            
            if (isA_Mca && isB_Mca) {
              const indexA = mcaDisplayOrder.indexOf(a.name);
              const indexB = mcaDisplayOrder.indexOf(b.name);
              if (indexA === -1 && indexB === -1) return 0;
              if (indexA === -1) return 1;
              if (indexB === -1) return -1;
              return indexA - indexB;
            } else {
              const indexA = mScDisplayOrder.indexOf(a.name);
              const indexB = mScDisplayOrder.indexOf(b.name);
              if (indexA === -1 && indexB === -1) return 0;
              if (indexA === -1) return 1;
              if (indexB === -1) return -1;
              return indexA - indexB;
            }
          });
        } else if (hasMca) {
          groupCourses.sort((a, b) => {
            const indexA = mcaDisplayOrder.indexOf(a.name);
            const indexB = mcaDisplayOrder.indexOf(b.name);
            if (indexA === -1 && indexB === -1) return 0;
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
          });
        } else {
          const isScience = groupCourses.some(c => c.category === 'Science' || c.name.startsWith('M.Sc'));
          if (isScience) {
            groupCourses.sort((a, b) => {
              const indexA = mScDisplayOrder.indexOf(a.name);
              const indexB = mScDisplayOrder.indexOf(b.name);
              if (indexA === -1 && indexB === -1) return 0;
              if (indexA === -1) return 1;
              if (indexB === -1) return -1;
              return indexA - indexB;
            });
          } else {
            groupCourses.sort((a, b) => {
              const indexA = pgManagementDisplayOrder.indexOf(a.name);
              const indexB = pgManagementDisplayOrder.indexOf(b.name);
              if (indexA === -1 && indexB === -1) return 0;
              if (indexA === -1) return 1;
              if (indexB === -1) return -1;
              return indexA - indexB;
            });
          }
        }
      }
      return [groupName, groupCourses] as [string, Course[]];
    });
  }, [courses]);

  const getGroupTitle = (group: string) => {
    switch (group) {
      case 'B.Tech': return 'Bachelor of Technology (B.Tech)';
      case 'M.Tech': return 'Master of Technology (M.Tech)';
      case 'Polytechnic': return 'Polytechnic';
      case 'Diploma Engineering': return 'Diploma In Engineering';
      default: return group;
    }
  };

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
    <div className="w-full flex flex-col gap-10">
      {groupedCourses.map(([groupName, groupCourses]) => {
        const durationInfo = getQualificationMeta(groupName, groupCourses);
        
        return (
          <div key={groupName} className="w-full">
            <div className="mb-5 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="text-xl font-black text-[#0B1F3A] tracking-tight">
                  {getGroupTitle(groupName)}
                </h3>
                <span className="text-slate-300 mx-1">•</span>
                <span className="text-[15px] font-semibold text-slate-600">
                  {groupCourses.length} {groupCourses.length === 1 ? 'Program' : 'Programs'}
                </span>
              </div>
              {durationInfo && (
                <div className="flex items-center text-[14px] text-slate-500 font-medium">
                  <span className="mr-1.5 opacity-80">🕒</span>
                  <span>
                    Duration: {durationInfo.duration}
                    {durationInfo.lateralEntry && (
                      <> <span className="mx-1.5 text-slate-300">|</span> Lateral Entry: {durationInfo.lateralEntry}</>
                    )}
                  </span>
                </div>
              )}
            </div>
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
          >
            <AnimatePresence mode="popLayout">
              {groupCourses.map((course) => (
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
      })}
    </div>
  );
}
