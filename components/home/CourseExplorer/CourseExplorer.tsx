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



const categories = [
  'Undergraduate (UG)',
  'Postgraduate (PG)',
  'Engineering',
  'Computer & IT',
  'Commerce',
  'Science',
  'Arts & Humanities',
  'Management',
  'Law',
  'Health & Allied Science',
  'Yoga & Naturopathy',
  'Journalism & Mass Communication',
  'Library Science',
  'Diploma Courses',
  'ITI Trades',
  'Skill Development',
  'Apprenticeship Programs',
  'Government Approved Courses',
  'UPES Online',
  'Post Graduate Certificate',
  'Pharmacy',
  'Hotel Management',
  'Fine Arts',
  'Physical Education',
  'Agriculture',
  'Education',
  'Research',
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
  const [localCategory, localSetCategory] = useState('Undergraduate (UG)');
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



  // Filter courses based on active selections
  const filteredCourses = useMemo(() => {
    return courseList.filter((course) => {
      // 1. Left Sidebar Filter — match by course.category or any of course.subCategories
      const selLower = selectedCategory.toLowerCase().trim();
      const courseCatLower = course.category.toLowerCase().trim();
      const courseSubLower = course.subCategories?.map(s => s.toLowerCase().trim()) || [];

      const matchesCategory =
        courseCatLower === selLower ||
        courseSubLower.includes(selLower);

      if (!matchesCategory) return false;

      // 2. Filter Chips (case-insensitive program, level, and badge matching)
      if (selectedFilter !== 'all') {
        const filter = selectedFilter.toLowerCase().trim();
        const badgeLower = course.badge?.toLowerCase() || '';

        let matchesFilter = false;
        if (filter === 'popular') {
          matchesFilter = badgeLower.includes('popular');
        } else if (filter === 'new') {
          matchesFilter = badgeLower.includes('new');
        } else if (filter === 'placement') {
          matchesFilter = badgeLower.includes('placement') || badgeLower.includes('placed') || badgeLower.includes('high placement') || course.placementSupport?.toLowerCase().includes('placement');
        } else if (filter === 'skill-india') {
          matchesFilter = badgeLower.includes('skill india') || badgeLower.includes('nsdc') || courseCatLower === 'skill development';
        } else if (filter === 'gov-approved') {
          matchesFilter = badgeLower.includes('government') || badgeLower.includes('gov') || badgeLower.includes('ncvt') || badgeLower.includes('ugc') || courseCatLower === 'government approved courses';
        } else if (filter === 'engineering') {
          matchesFilter = courseCatLower === 'engineering' || courseSubLower.includes('engineering') || (course.level === 'Diploma' && course.name.toLowerCase().includes('engineering'));
        } else if (filter === 'iti') {
          matchesFilter = courseCatLower === 'iti trades' || course.level === 'ITI' || courseSubLower.includes('iti trades');
        } else if (filter === 'mba') {
          matchesFilter = course.name.toLowerCase().includes('mba') || courseCatLower === 'mba';
        } else if (filter === 'diploma') {
          matchesFilter = course.level === 'Diploma' || courseCatLower.includes('diploma') || courseSubLower.includes('diploma courses');
        } else {
          matchesFilter = badgeLower.includes(filter) || courseCatLower.includes(filter) || courseSubLower.includes(filter);
        }

        if (!matchesFilter) return false;
      }

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
    setSelectedCategory('Undergraduate (UG)');
    setSelectedFilter('all');
    setSearchQuery('');
  };

  return (
    <section id="courses-section" className="bg-[#F8FAFC] py-10 lg:py-16 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Statistics Row placed above layout, separated by faint dividers */}
        

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
