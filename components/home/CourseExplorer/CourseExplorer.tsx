'use client';

import React, { useState, useMemo } from 'react';
import { courseList, Course } from '@/components/Courses/courses';
import CategorySidebar from './CategorySidebar';
import CourseFilters from './CourseFilters';
import CourseSearch from './CourseSearch';
import CourseGrid from './CourseGrid';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Stats SVG Icons
const TrainedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const PlacedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const GovIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const categories = [
  'Engineering',
  'ITI Trades',
  'Polytechnic',
  'Diploma Engineering',
  'MBA',
  'Skill Development',
  'Apprenticeship Programs',
  'Certificate Courses',
  'Government Approved Courses',
];

interface CourseExplorerProps {
  selectedCategory?: string;
  setSelectedCategory?: (category: string) => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export default function CourseExplorer({
  selectedCategory: propSelectedCategory,
  setSelectedCategory: propSetSelectedCategory,
  searchQuery: propSearchQuery,
  setSearchQuery: propSetSearchQuery,
}: CourseExplorerProps = {}) {
  // Local state fallback for standalone courses page view
  const [localCategory, localSetCategory] = useState('Engineering');
  const [localSearchQuery, localSetSearchQuery] = useState('');

  const selectedCategory = propSelectedCategory ?? localCategory;
  const setSelectedCategory = propSetSelectedCategory ?? localSetCategory;
  const searchQuery = propSearchQuery ?? localSearchQuery;
  const setSearchQuery = propSetSearchQuery ?? localSetSearchQuery;

  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Automatically reset filter chip selection to 'all' when a new category is chosen from sidebar
  React.useEffect(() => {
    setSelectedFilter('all');
  }, [selectedCategory]);

  // Debug Logging: Log the total number of loaded courses and category distribution
  React.useEffect(() => {
    console.log("Total courses loaded:", courseList.length);
    categories.forEach((cat) => {
      const count = courseList.filter((course) => {
        const selLower = cat.toLowerCase().trim();
        const courseCatLower = course.category.toLowerCase().trim();
        const courseSubLower = course.subCategories?.map(s => s.toLowerCase().trim()) || [];

        if (selLower === 'apprenticeship programs' || selLower === 'apprenticeship') {
          return (
            courseCatLower === 'apprenticeship' ||
            courseCatLower === 'apprenticeship programs' ||
            courseSubLower.includes('apprenticeship') ||
            courseSubLower.includes('apprenticeship programs')
          );
        } else if (selLower === 'government approved courses' || selLower === 'government approved') {
          return (
            course.badge?.toLowerCase().includes('government') ||
            course.badge?.toLowerCase().includes('gov') ||
            courseSubLower.some(s => s.includes('government') || s.includes('gov')) ||
            courseCatLower === 'iti trades' ||
            courseCatLower === 'polytechnic' ||
            courseCatLower === 'diploma engineering'
          );
        } else {
          const isExactMatch = courseCatLower === selLower || courseSubLower.includes(selLower);
          let isAliasMatch = false;
          if (selLower === 'mba' || selLower === 'management') {
            isAliasMatch = courseCatLower === 'mba' || courseCatLower === 'management';
          } else if (selLower === 'iti' || selLower === 'iti trades') {
            isAliasMatch = courseCatLower === 'iti' || courseCatLower === 'iti trades';
          } else if (selLower === 'engineering' || selLower === 'engineering courses') {
            isAliasMatch = courseCatLower === 'engineering' || courseCatLower === 'engineering courses';
          } else if (selLower === 'polytechnic' || selLower === 'diploma engineering') {
            isAliasMatch = courseCatLower === 'polytechnic' || courseCatLower === 'diploma engineering';
          }
          return isExactMatch || isAliasMatch;
        }
      }).length;
      console.log(`Category "${cat}": ${count} courses available`);
    });
  }, []);

  // Filter courses based on active selections
  const filteredCourses = useMemo(() => {
    return courseList.filter((course) => {
      // 1. Left Sidebar Filter (case-insensitive with aliases)
      let matchesCategory = false;
      const selCatLower = selectedCategory.toLowerCase().trim();
      const courseCatLower = course.category.toLowerCase().trim();
      const courseSubLower = course.subCategories?.map(s => s.toLowerCase().trim()) || [];

      if (selCatLower === 'apprenticeship programs' || selCatLower === 'apprenticeship') {
        matchesCategory =
          courseCatLower === 'apprenticeship' ||
          courseCatLower === 'apprenticeship programs' ||
          courseSubLower.includes('apprenticeship') ||
          courseSubLower.includes('apprenticeship programs');
      } else if (selCatLower === 'government approved courses' || selCatLower === 'government approved') {
        matchesCategory =
          course.badge?.toLowerCase().includes('government') ||
          course.badge?.toLowerCase().includes('gov') ||
          courseSubLower.some(s => s.includes('government') || s.includes('gov')) ||
          courseCatLower === 'iti trades' ||
          courseCatLower === 'polytechnic' ||
          courseCatLower === 'diploma engineering';
      } else {
        const isExactMatch = courseCatLower === selCatLower || courseSubLower.includes(selCatLower);
        let isAliasMatch = false;
        if (selCatLower === 'mba' || selCatLower === 'management') {
          isAliasMatch = courseCatLower === 'mba' || courseCatLower === 'management';
        } else if (selCatLower === 'iti' || selCatLower === 'iti trades') {
          isAliasMatch = courseCatLower === 'iti' || courseCatLower === 'iti trades';
        } else if (selCatLower === 'engineering' || selCatLower === 'engineering courses') {
          isAliasMatch = courseCatLower === 'engineering' || courseCatLower === 'engineering courses';
        } else if (selCatLower === 'polytechnic' || selCatLower === 'diploma engineering') {
          isAliasMatch = courseCatLower === 'polytechnic' || courseCatLower === 'diploma engineering';
        }
        matchesCategory = isExactMatch || isAliasMatch;
      }

      if (!matchesCategory) return false;

      // 2. Filter Chips (case-insensitive)
      let matchesFilter = true;
      if (selectedFilter !== 'all') {
        const filter = selectedFilter.toLowerCase().trim();
        const badgeLower = course.badge?.toLowerCase() || '';

        if (filter === 'engineering') {
          matchesFilter = courseCatLower === 'engineering' || courseCatLower === 'engineering courses';
        } else if (filter === 'iti') {
          matchesFilter = courseCatLower === 'iti trades' || courseCatLower === 'iti';
        } else if (filter === 'mba') {
          matchesFilter = courseCatLower === 'mba' || courseCatLower === 'management';
        } else if (filter === 'diploma') {
          matchesFilter =
            courseCatLower === 'polytechnic' ||
            courseCatLower === 'diploma engineering' ||
            courseSubLower.includes('diploma engineering') ||
            courseSubLower.includes('polytechnic');
        } else if (filter === 'popular') {
          matchesFilter = badgeLower.includes('popular');
        } else if (filter === 'new') {
          matchesFilter = badgeLower.includes('new');
        } else if (filter === 'placement') {
          matchesFilter =
            courseSubLower.includes('placement programs') ||
            badgeLower.includes('placement') ||
            badgeLower.includes('placed');
        } else if (filter === 'skill-india') {
          matchesFilter =
            badgeLower.includes('skill india') ||
            courseCatLower === 'skill development' ||
            courseSubLower.includes('apprenticeship') ||
            courseSubLower.includes('apprenticeship programs');
        } else if (filter === 'gov-approved') {
          matchesFilter =
            badgeLower.includes('government') ||
            badgeLower.includes('gov') ||
            courseSubLower.some(s => s.includes('government approved')) ||
            courseCatLower === 'iti trades' ||
            courseCatLower === 'polytechnic' ||
            courseCatLower === 'diploma engineering';
        }
      }

      if (!matchesFilter) return false;

      // 3. Search box matching (case-insensitive)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = course.name.toLowerCase().includes(query);
        const matchesDesc = course.description.toLowerCase().includes(query);
        const matchesElig = course.eligibility.toLowerCase().includes(query);
        const matchesCat = course.category.toLowerCase().includes(query);
        const matchesCareers = course.careerOpportunities?.some((opp) =>
          opp.toLowerCase().includes(query)
        ) || false;

        return matchesName || matchesDesc || matchesElig || matchesCat || matchesCareers;
      }

      return true;
    });
  }, [selectedCategory, selectedFilter, searchQuery]);

  const handleDownloadBrochure = (course: Course) => {
    alert(
      `Brochure for ${course.name} is downloading in the background. Thank you for your interest!`
    );
  };

  const resetFilters = () => {
    setSelectedCategory('Engineering');
    setSelectedFilter('all');
    setSearchQuery('');
  };

  return (
    <section id="courses-section" className="bg-[#F8FAFC] py-10 lg:py-16 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Statistics Row placed above layout, separated by faint dividers */}
        <div className="bg-white border border-slate-200/80 rounded-3xl py-6 px-4 shadow-sm flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4 max-w-6xl mx-auto">
          {/* Stat 1 */}
          <div className="flex items-center gap-4 text-left px-4 flex-1 justify-center">
            <TrainedIcon />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] leading-none">23,000+</h2>
              <p className="text-slate-450 text-[11px] mt-1 font-bold uppercase tracking-wider text-slate-400">Students Trained</p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-slate-200" />

          {/* Stat 2 */}
          <div className="flex items-center gap-4 text-left px-4 flex-1 justify-center">
            <PlacedIcon />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] leading-none">8,000+</h2>
              <p className="text-slate-450 text-[11px] mt-1 font-bold uppercase tracking-wider text-slate-400">Placed Students</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-slate-200" />

          {/* Stat 3 */}
          <div className="flex items-center gap-4 text-left px-4 flex-1 justify-center">
            <SupportIcon />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] leading-none">100%</h2>
              <p className="text-slate-450 text-[11px] mt-1 font-bold uppercase tracking-wider text-slate-400">Placement Assistance</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-slate-200" />

          {/* Stat 4 */}
          <div className="flex items-center gap-4 text-left px-4 flex-1 justify-center">
            <GovIcon />
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#D4AF37] leading-none uppercase">Official</h2>
              <p className="text-slate-450 text-[10px] mt-1 font-bold uppercase tracking-wider text-slate-400">Gov Recognized</p>
            </div>
          </div>
        </div>

        {/* Layout Structure: Sticky Sidebar (Left) & Grid + Search (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Left Sticky Sidebar (col-span-3) */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 z-20">
            <CategorySidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          </div>

          {/* Right Wide Column (col-span-9) */}
          <div className="lg:col-span-9 w-full space-y-6">
            {/* Search and Filters block */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm space-y-4">
              <CourseSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <CourseFilters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            </div>

            {/* Course Grid */}
            <CourseGrid
              courses={filteredCourses}
              onViewDetails={setSelectedCourse}
              resetFilters={resetFilters}
            />
          </div>
        </div>
      </div>

      {/* Floating Pill Button at bottom center */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <Link 
          href="/online-admission"
          className="bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-white text-xs sm:text-sm font-black py-3.5 px-6 rounded-full shadow-2xl flex items-center gap-2.5 whitespace-nowrap tracking-wide border border-white/10 transition-all hover:scale-105 active:scale-95"
        >
          <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0B1F3A] flex items-center justify-center font-black text-xs shrink-0">
            %
          </span>
          <span>Discover the University Coupons we have for you.</span>
        </Link>
      </div>

      {/* Floating Chat FAB: Ask Sara (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-1 group">
        <Link
          href="/contact-us"
          className="w-14 h-14 bg-[#0B1F3A] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-[#D4AF37] border-2 shrink-0"
          title="Ask Sara Counsel Support"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-pulse text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Link>
        <span className="text-[10px] font-black text-[#0B1F3A] bg-white px-2 py-0.5 rounded-full shadow-md border border-[#D4AF37]/30 leading-none">
          Ask Sara
        </span>
      </div>

      {/* Details Popup Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-[#0B1F3A]/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-2xl relative z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                title="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 md:p-8 space-y-6">
                {/* Modal Header */}
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#0B1F3A]/5 text-[#0B1F3A] text-[9px] font-bold uppercase tracking-wider">
                      {selectedCourse.duration}
                    </span>
                    {selectedCourse.seats > 0 && (
                      <span className="px-2.5 py-0.5 rounded bg-amber-50 text-[#D4AF37] border border-amber-250/20 text-[9px] font-bold uppercase tracking-wider">
                        {selectedCourse.seats} Intake Seats
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#0B1F3A]">
                    {selectedCourse.name}
                  </h3>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                    {selectedCourse.category}
                  </span>
                </div>

                {/* Details Section */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-black uppercase text-[#0B1F3A] tracking-wider">
                      Program Overview
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
                      {selectedCourse.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl text-xs font-semibold text-slate-600">
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wide">Eligibility</span>
                      <span className="text-[#0B1F3A] mt-0.5 block">{selectedCourse.eligibility}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wide">Learning Mode</span>
                      <span className="text-[#0B1F3A] mt-0.5 block">{selectedCourse.mode}</span>
                    </div>
                  </div>

                  {/* Career opportunities */}
                  {selectedCourse.careerOpportunities && selectedCourse.careerOpportunities.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase text-[#0B1F3A] tracking-wider">
                        Career & Job Roles
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCourse.careerOpportunities.map((opp, idx) => (
                          <span
                            key={idx}
                            className="bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-lg text-[10px] font-bold inline-block"
                          >
                            {opp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Placement details */}
                  {selectedCourse.placementSupport && (
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase text-[#0B1F3A] tracking-wider">
                        Placement Support
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                        {selectedCourse.placementSupport}
                      </p>
                    </div>
                  )}
                </div>

                {/* Actions row */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleDownloadBrochure(selectedCourse)}
                    className="flex-1 text-center py-3 text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:text-[#0B1F3A] border border-slate-300 bg-white hover:bg-slate-50 rounded-xl transition-all cursor-pointer"
                  >
                    Download Brochure
                  </button>
                  <Link
                    href="/online-admission"
                    className="flex-1 text-center py-3 text-xs font-black uppercase tracking-wider text-[#0B1F3A] bg-[#D4AF37] hover:bg-[#D4AF37]/90 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
