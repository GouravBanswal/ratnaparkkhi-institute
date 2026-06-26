'use client';

import React, { useState, useMemo } from 'react';
import { courseList, Course } from './courses';
import CourseSidebar from './CourseSidebar';
import CourseFilter from './CourseFilter';
import CourseSearch from './CourseSearch';
import CourseGrid from './CourseGrid';
import CourseModal from './CourseModal';

// Icons for the Stats Section
const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#D4AF37" />
    <path d="M10.7 16.3l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" fill="#0B1F3A" />
  </svg>
);

const GraduateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L1 7l11 5 9-4.09V14a1 1 0 002 0V7.82L12 2z" fill="#D4AF37" />
    <path d="M4.18 10.71l-1.36.62a1 1 0 000 1.81l8.18 3.72a2.022 2.022 0 002 0l8.18-3.72a1 1 0 000-1.81l-1.36-.62L12 14.16l-7.82-3.45z" fill="#D4AF37" />
  </svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" fill="#D4AF37" />
    <path d="M12 6a6 6 0 106 6 6 6 0 00-6-6zm0 10a4 4 0 114-4 4 4 0 01-4 4z" fill="#D4AF37" />
  </svg>
);

export default function CourseExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Engineering');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Filter courses dynamically based on all selections
  const filteredCourses = useMemo(() => {
    return courseList.filter((course) => {
      // 1. Sidebar Category Filter
      const matchesCategory =
        course.category === selectedCategory ||
        course.subCategories?.includes(selectedCategory) ||
        false;

      if (!matchesCategory) return false;

      // 2. Top Filter Chips
      let matchesFilter = true;
      if (selectedFilter !== 'all') {
        const filter = selectedFilter.toLowerCase().trim();
        const badgeLower = course.badge?.toLowerCase() || '';
        const courseCatLower = course.category.toLowerCase().trim();
        const courseSubLower = course.subCategories?.map(s => s.toLowerCase().trim()) || [];

        if (filter === 'popular') {
          matchesFilter = badgeLower.includes('popular');
        } else if (filter === 'new') {
          matchesFilter = badgeLower.includes('new');
        } else if (filter === 'placement') {
          matchesFilter = badgeLower.includes('placement') || badgeLower.includes('placed') || badgeLower.includes('high placement') || (course.placementSupport?.toLowerCase().includes('placement') || false);
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
      }

      if (!matchesFilter) return false;

      // 3. Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = course.name.toLowerCase().includes(query);
        const matchesDesc = course.description.toLowerCase().includes(query);
        const matchesElig = course.eligibility.toLowerCase().includes(query);
        const matchesCategoryName = course.category.toLowerCase().includes(query);
        const matchesCareer = course.careerOpportunities.some((opp) =>
          opp.toLowerCase().includes(query)
        );

        return matchesName || matchesDesc || matchesElig || matchesCategoryName || matchesCareer;
      }

      return true;
    });
  }, [selectedCategory, selectedFilter, searchQuery]);

  const handleDownloadBrochure = (course: Course) => {
    alert(`Brochure for ${course.name} is downloading in the background. Thank you for your interest!`);
  };

  return (
    <div className="w-full space-y-12">
      
      {/* SECTION 1: Top Statistics Bar */}
      <section className="bg-white border border-slate-200 rounded-2xl py-6 shadow-sm max-w-6xl mx-auto">
        <div className="mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
            <GraduateIcon />
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-tight">23,000+</h2>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Students Trained</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-slate-200"></div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 flex-1 justify-center">
            <ShieldCheckIcon />
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-tight">8,000+</h2>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Placed Students</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-slate-200"></div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 flex-1 justify-center md:justify-end">
            <AwardIcon />
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-tight">100%</h2>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Placement Assistance</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Search & Subtitle Block */}
      <div className="space-y-6 max-w-4xl mx-auto text-center px-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block">
            Technical Explorer
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
            Explore Courses & Specializations
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            Search engineering branches, ITI trades, MBA specializations, and diploma programs instantly.
          </p>
        </div>

        {/* Live Search Bar */}
        <CourseSearch 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
      </div>

      {/* Top Filter Chips */}
      <div className="px-4">
        <CourseFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>

      {/* Main Grid: Left Category Sidebar, Right Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-4 sm:px-6 lg:px-8">
        
        {/* Left Category Sidebar (col-span-3) */}
        <div className="lg:col-span-3 w-full lg:sticky lg:top-24 z-30">
          <CourseSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Right Cards Display (col-span-9) */}
        <div className="lg:col-span-9 w-full min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'Program' : 'Programs'}
            </span>
            {selectedCategory && (
              <span className="bg-slate-50 text-[#0B1F3A] border border-slate-100 text-[10px] font-bold uppercase px-3 py-1 rounded-lg">
                Active Category: {selectedCategory}
              </span>
            )}
          </div>

          <CourseGrid
            courses={filteredCourses}
            onViewDetails={setSelectedCourse}
            onDownloadBrochure={handleDownloadBrochure}
          />
        </div>

      </div>

      {/* Course Detail Modal Popup */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onDownloadBrochure={handleDownloadBrochure}
      />

    </div>
  );
}
