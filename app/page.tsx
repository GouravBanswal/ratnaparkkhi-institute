'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import EnquiryForm from '@/components/EnquiryForm';
import { 
  recruiters, 
  whyParentsTrust, 
  coursesOffered, 
  blogPosts,
  officialPhone,
  officialEmail,
  Course,
} from '@/components/data/collegeData';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourseTab, setSelectedCourseTab] = useState('ALL');
  const [selectedCategoryChip, setSelectedCategoryChip] = useState('ALL');
  const [questionSubmitted, setQuestionSubmitted] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  
  // Video Playlist State (updated with distance and vocational content)
  const [activeVideo, setActiveVideo] = useState({
    title: "Overview of our signature Learn & Earn Scheme Model",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // mock
    duration: "4:15",
    views: "5.4K views"
  });

  

  const videosList = [
    {
      title: "Overview of our signature Learn & Earn Scheme Model",
      duration: "4:15",
      views: "5.4K views"
    },
    {
      title: "How to Enroll in ITI Trades & NAPS Apprenticeship Programs",
      duration: "6:30",
      views: "3.2K views"
    },
    {
      title: "Distance & Online Degree Admissions Guide (B.A, B.Com, MBA, MCA)",
      duration: "5:10",
      views: "4.8K views"
    },
    {
      title: "Student Success Stories & PAN India Placements",
      duration: "3:45",
      views: "6.1K views"
    }
  ];

  // Course eligibility check based on 10th/12th marks percentage
  const [marksPercentage, setMarksPercentage] = useState('');
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);

  const handleCheckEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    const score = parseFloat(marksPercentage);
    if (isNaN(score) || score < 35 || score > 100) {
      setEligibilityResult("Please enter a valid percentage score between 35% and 100%.");
      return;
    }

    if (score >= 50) {
      setEligibilityResult("Congratulations! You are highly eligible for our Graduation degrees (B.A, B.Com, B.Sc, BBA, BCA) and post-graduate university options. Direct seat registration open.");
    } else {
      setEligibilityResult("You are eligible for ITI Trades (MSBSVET), 10th/12th NIOS board counseling, and Skill Development certifications. Register for career guidance.");
    }
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    setQuestionSubmitted(true);
    setTimeout(() => {
      setUserQuestion('');
    }, 2000);
  };

  const formattedPhone = officialPhone.replace(/\s+/g, '');

  const handleQuickSearch = (tab: string, chip: string) => {
    setSelectedCourseTab(tab);
    setSelectedCategoryChip(chip);
    setSearchQuery('');
    const el = document.getElementById('courses-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };


  // Filter courses based on search query, tabs and chips
  const filteredCourses = coursesOffered.filter((c: Course) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.highlights.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (c.isIti && searchQuery.toLowerCase().includes('iti'));
    
    // Tab filters: ALL, DEGREE, ITI, SCHOOL_SKILLS
    let matchesTab = true;
    if (selectedCourseTab === 'DEGREE') {
      matchesTab = c.name.toLowerCase().includes('bachelor') || 
                  c.name.toLowerCase().includes('master') || 
                  c.name.toLowerCase().includes('b.a') || 
                  c.name.toLowerCase().includes('b.com') || 
                  c.name.toLowerCase().includes('b.sc') || 
                  c.name.toLowerCase().includes('bba') || 
                  c.name.toLowerCase().includes('bca') || 
                  c.name.toLowerCase().includes('mba') || 
                  c.name.toLowerCase().includes('mca') || 
                  c.name.toLowerCase().includes('m.com') || 
                  c.name.toLowerCase().includes('m.a');
    } else if (selectedCourseTab === 'ITI') {
      matchesTab = c.name.toLowerCase().includes('iti') || c.isIti === true;
    } else if (selectedCourseTab === 'SCHOOL_SKILLS') {
      matchesTab = c.name.toLowerCase().includes('10th') || 
                  c.name.toLowerCase().includes('12th') || 
                  c.name.toLowerCase().includes('skill');
    }

    // Chip category filters
    let matchesChip = true;
    if (selectedCategoryChip !== 'ALL') {
      const chipLower = selectedCategoryChip.toLowerCase();
      if (chipLower === '10th_12th') {
        matchesChip = c.name.toLowerCase().includes('10th') || c.name.toLowerCase().includes('12th');
      } else if (chipLower === 'iti') {
        matchesChip = c.name.toLowerCase().includes('iti') || c.isIti === true;
      } else if (chipLower === 'ug') {
        matchesChip = c.name.toLowerCase().includes('bachelor') || c.name.toLowerCase().includes('b.a') || c.name.toLowerCase().includes('b.com') || c.name.toLowerCase().includes('b.sc') || c.name.toLowerCase().includes('bba') || c.name.toLowerCase().includes('bca');
      } else if (chipLower === 'pg') {
        matchesChip = c.name.toLowerCase().includes('master') || c.name.toLowerCase().includes('mba') || c.name.toLowerCase().includes('mca') || c.name.toLowerCase().includes('m.com') || c.name.toLowerCase().includes('m.a');
      } else if (chipLower === 'skills') {
        matchesChip = c.name.toLowerCase().includes('skill');
      }
    }

    return matchesSearch && matchesTab && matchesChip;
  });

  return (
    <div className="bg-white pb-0 animate-fade-in font-sans">
      
      {/* SECTION 1: Portal-Inspired Large Hero Section (Cover Banner, Campus Image background, Left Text Content) */}
      <section className="relative w-full bg-slate-50 md:bg-transparent overflow-hidden">
        {/* Absolute Background Image for Desktop */}
        <div className="absolute inset-0 hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('/images/building.png')" }}>
          {/* Light gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 md:from-white md:via-white/80 md:to-transparent z-10" />
          {/* Decorative Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] z-10 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 pt-8 pb-8 md:pt-24 md:pb-36 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left space-y-6 w-full flex flex-col items-center md:items-start">
            {/* Active Admission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-100/60 text-[10px] sm:text-xs font-bold text-navy-900 uppercase tracking-wider shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              Admissions Open 2026 • Estd. 2008
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy-900 leading-tight md:leading-none">
              Build Your Future with <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                Quality Education
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl">
              Ratnaparkkhi Institute provides Online & Distance Education, Skill Development, ITI Programs, Graduation, Post Graduation, and Career Guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <Link 
                href="/online-admission"
                className="w-full sm:w-auto text-center bg-gold-500 hover:bg-gold-600 text-navy-955 font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                Apply Now 2026
              </Link>
              <button 
                type="button"
                onClick={() => {
                  const el = document.getElementById('courses-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-center bg-transparent border-2 border-navy-900 hover:border-gold-500 text-navy-900 hover:text-gold-600 font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                Explore Courses
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2.5 pt-6 w-full">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/60 rounded-full text-[10px] sm:text-xs font-bold text-navy-900 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
                </svg>
                Learn & Earn Scheme
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/60 rounded-full text-[10px] sm:text-xs font-bold text-navy-900 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
                </svg>
                Flexible Distance Learning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/60 rounded-full text-[10px] sm:text-xs font-bold text-navy-900 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
                </svg>
                Apprenticeship & Jobs
              </span>
            </div>
          </div>

          {/* Mobile Image (shown below content on mobile, hidden on desktop) */}
          <div className="w-full md:hidden rounded-2xl overflow-hidden shadow-md max-h-[220px]">
            <img src="/images/building.png" alt="RIEM Campus Building" className="w-full h-auto object-cover max-h-[220px]" />
          </div>
        </div>

        {/* Floating Glassmorphism Search Panel */}
        <div className="relative md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 w-full max-w-5xl px-4 z-30 pb-6 md:pb-0">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-900 text-center md:text-left">
              Search courses, branches and placement stats
            </h3>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white border border-slate-200 focus-within:border-gold-500 rounded-lg overflow-hidden transition-all shadow-sm w-full">
              <div className="hidden sm:flex pl-4 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search branches, course specifications, or placements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-xs sm:text-sm text-navy-955 px-4 py-4 focus:outline-none placeholder:text-slate-400 font-semibold"
              />
              <button 
                type="button"
                onClick={() => {
                  const el = document.getElementById('courses-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-navy-955 font-black text-xs sm:text-sm px-6 py-4 transition-colors border-t sm:border-t-0 sm:border-l border-slate-200 cursor-pointer text-center"
              >
                Search
              </button>
            </div>

            {/* Quick Course Chips */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px] w-full">
              <span className="text-slate-450 font-bold uppercase tracking-wider mr-1 hidden sm:inline">Quick Links:</span>
              {[
                { name: "10th/12th NIOS", tab: "SCHOOL_SKILLS", chip: "10th_12th" },
                { name: "ITI Programs", tab: "ITI", chip: "iti" },
                { name: "B.A / B.Com", tab: "DEGREE", chip: "ug" },
                { name: "BBA / BCA", tab: "DEGREE", chip: "ug" },
                { name: "MBA / MCA", tab: "DEGREE", chip: "pg" },
                { name: "Skill Development", tab: "SCHOOL_SKILLS", chip: "skills" }
              ].map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickSearch(chip.tab, chip.chip)}
                  className="bg-white border border-slate-200 hover:border-gold-500 hover:text-gold-600 text-navy-900 font-bold px-3 py-1.5 rounded-full transition-all shadow-sm hover:shadow cursor-pointer"
                >
                  {chip.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Dedicated Statistics Section (Slate-50 Background - Official achievements) */}
      <section className="bg-slate-50 pt-12 pb-12 md:pt-28 md:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto pt-6 mb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">RIEM at a Glance</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Official Milestones & Placements</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Shaping career opportunities with recognized university counseling and vocational trades.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Card 1: Passed Students */}
            <div className="bg-white border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-navy-50 text-navy-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-gold-500">23,000+</span>
                <span className="text-[10px] sm:text-xs uppercase text-slate-500 font-bold tracking-wider">Passed Students</span>
              </div>
            </div>

            {/* Card 2: Success Rate */}
            <div className="bg-white border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-navy-50 text-navy-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-gold-500">100%</span>
                <span className="text-[10px] sm:text-xs uppercase text-slate-500 font-bold tracking-wider">Success Rate</span>
              </div>
            </div>

            {/* Card 3: Placed Students */}
            <div className="bg-white border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-navy-50 text-navy-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-gold-500">8,000+</span>
                <span className="text-[10px] sm:text-xs uppercase text-slate-500 font-bold tracking-wider">Placed Students</span>
              </div>
            </div>

            {/* Card 4: Geographic Reach */}
            <div className="bg-white border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-navy-50 text-navy-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-[15px] sm:text-lg font-black text-gold-500 leading-tight uppercase">PAN India</span>
                <span className="text-[9px] uppercase text-slate-500 font-bold tracking-wider">Nationwide Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Courses Section (White Background) */}
      <section id="courses-section" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Course Directories</span>
            <h2 className="text-3xl font-extrabold text-navy-900">Explore Programs & Specialties</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Filter by category tabs or select course types below to view seats, durations, and details.
            </p>
          </div>

          {/* Category Tabs: ALL, DEGREE, ITI, SCHOOL_SKILLS */}
          <div className="flex flex-wrap justify-center border-b border-slate-100 max-w-lg mx-auto">
            {[
              { id: 'ALL', label: 'All Programs' },
              { id: 'DEGREE', label: 'Degrees' },
              { id: 'ITI', label: 'ITI Programs' },
              { id: 'SCHOOL_SKILLS', label: 'School & Skills' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCourseTab(tab.id);
                  setSelectedCategoryChip('ALL');
                }}
                className={`flex-1 text-center py-3.5 px-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                  selectedCourseTab === tab.id 
                    ? 'border-gold-500 text-gold-600 font-black' 
                    : 'border-transparent text-slate-500 hover:text-navy-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Category Chips Under Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto text-xs">
            {[
              { id: 'ALL', label: 'All Specialties' },
              { id: '10th_12th', label: '10th & 12th' },
              { id: 'iti', label: 'ITI Trades' },
              { id: 'ug', label: 'Under-Graduate (UG)' },
              { id: 'pg', label: 'Post-Graduate (PG)' },
              { id: 'skills', label: 'Skill Certifications' }
            ].map((chip) => (
              <button
                key={chip.id}
                onClick={() => setSelectedCategoryChip(chip.id)}
                className={`px-4 py-1.5 rounded-full border transition-all cursor-pointer font-bold ${
                  selectedCategoryChip === chip.id
                    ? 'bg-navy-900 border-navy-900 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-navy-900'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Portal Tool Widgets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Widget 1: Eligibility Checker */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 shadow-sm">
              <h4 className="font-bold text-navy-900 text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                Check Admission Eligibility
              </h4>
              <p className="text-[11px] text-slate-500 font-medium">Enter your 10th or 12th percentage score to check eligibility.</p>
              <form onSubmit={handleCheckEligibility} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="e.g. 65.50"
                  value={marksPercentage}
                  onChange={(e) => setMarksPercentage(e.target.value)}
                  className="bg-white border border-slate-200 rounded px-3 py-1.5 text-xs text-navy-955 focus:outline-none focus:border-gold-500 w-full"
                />
                <button type="submit" className="bg-navy-900 hover:bg-navy-950 text-white font-bold text-xs px-4 py-1.5 rounded transition-colors cursor-pointer shrink-0">Check</button>
              </form>
              {eligibilityResult && (
                <p className="text-[10px] font-bold text-gold-700 bg-gold-50 border border-gold-250/20 p-2.5 rounded leading-relaxed">
                  {eligibilityResult}
                </p>
              )}
            </div>

            {/* Widget 2: Syllabus Download */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <h4 className="font-bold text-navy-900 text-sm flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0"></span>
                  Degree & ITI Prospectus
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">Download the latest information guides and fee schedules for academic year 2026.</p>
              </div>
              <a 
                href="/online-admission"
                className="inline-block text-center bg-white border border-slate-200 hover:border-gold-500 hover:text-gold-600 text-navy-900 font-bold text-xs py-2 rounded transition-colors cursor-pointer shadow-sm"
              >
                Request Prospectus PDF
              </a>
            </div>

            {/* Widget 3: Quick Counselling */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <h4 className="font-bold text-navy-900 text-sm flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0"></span>
                  Admissions Helpline
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">Connect with our registrar desk for direct admission and university registration details.</p>
              </div>
              <a 
                href={`tel:${formattedPhone}`}
                className="inline-block text-center bg-gold-500 hover:bg-gold-600 text-navy-955 font-black text-xs py-2 rounded transition-colors cursor-pointer shadow-sm"
              >
                Call Hotline Now
              </a>
            </div>
          </div>

          {/* Courses Listing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="px-2.5 py-1 rounded bg-navy-50 text-navy-900 text-[10px] font-bold uppercase tracking-wider border border-slate-100">
                        {c.duration}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {c.seats} Seats
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors leading-tight">
                      {c.name}
                    </h3>
                    
                    {(c.universityOrInstitution) && (
                      <p className="text-[10px] font-black text-navy-950 bg-slate-50 border border-slate-100 rounded px-2.5 py-1 inline-block">
                        {(c.universityOrInstitution)}
                      </p>
                    )}
                    
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {c.highlights}
                    </p>

                    <div className="pt-3 border-t border-slate-50 space-y-1.5 text-xs text-slate-550">
                      {(c.mode) && (
                        <p className="leading-relaxed"><strong className="text-slate-700 font-bold">Mode:</strong> {(c.mode)}</p>
                      )}
                      <p className="leading-relaxed"><strong className="text-slate-700 font-bold">Eligibility:</strong> {c.eligibility}</p>
                      <p><strong className="text-slate-700 font-bold">Approved Annual Fees:</strong> {c.fees}</p>
                      
                      {c.isIti && (
                        <div className="mt-2 space-y-1 bg-gold-500/5 border border-gold-500/10 p-2.5 rounded-lg text-[10px] leading-relaxed">
                          <p><strong className="text-slate-700 font-bold">Approved By:</strong> DGT / NCVT</p>
                          <p><strong className="text-slate-700 font-bold">Skill Partners:</strong> NSDC / Skill India / NAPS</p>
                        </div>
                      )}
                      
                      {c.careerOpportunities && (
                        <p className="leading-relaxed mt-1"><strong className="text-slate-700 font-bold">Careers:</strong> {c.careerOpportunities}</p>
                      )}
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3">
                    <Link 
                      href="/online-admission"
                      className="flex-grow text-center py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-950 rounded-lg transition-colors cursor-pointer"
                    >
                      Apply Now
                    </Link>
                    <a 
                      href={`tel:${formattedPhone}`}
                      className="px-3.5 py-2.5 text-xs font-bold text-navy-900 border border-slate-350 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                      title="Enquire on Call"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-slate-400 space-y-2">
                <p className="font-medium text-sm">No courses matching your filters were found.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCourseTab('ALL');
                    setSelectedCategoryChip('ALL');
                  }}
                  className="text-xs font-bold text-gold-600 hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: Featured Program Benefits (Why Parents Trust) (Slate-50 Background) */}
      <section className="bg-slate-50 border-b border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Our Commitments</span>
            <h2 className="text-3xl font-extrabold text-navy-900">Why Parents & Working Professionals Trust Us</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              We prioritize flexible, accredited, and industry-oriented vocational pathways for all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyParentsTrust.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center font-bold text-sm mb-4 border border-slate-100 group-hover:bg-gold-500 group-hover:text-navy-955 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-md font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Latest News Updates & Video Section (White Background) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side: Latest News List */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Campus Flash</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Latest News & Articles</h2>
              </div>

              <div className="space-y-6">
                {blogPosts.map((b, i) => (
                  <div key={i} className="flex gap-4 items-start bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="flex-grow space-y-2">
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        <span className="inline-flex items-center gap-1 bg-rose-600 text-white px-2 py-0.5 rounded text-[8px] font-black animate-pulse">
                          LIVE
                        </span>
                        <span>{b.date}</span>
                        <span>•</span>
                        <span>{b.readTime}</span>
                      </div>
                      
                      <Link 
                        href={`/career-guidance-blog/${b.slug}`}
                        className="block font-bold text-navy-900 hover:text-gold-600 transition-colors text-sm sm:text-base leading-tight"
                      >
                        {b.title}
                      </Link>
                      
                      <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-2">
                        {b.excerpt}
                      </p>
                      
                      <span className="block text-[10px] text-slate-400 font-bold">By {b.author}</span>
                    </div>

                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-200 border border-slate-100 rounded-lg flex items-center justify-center shrink-0 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center px-1">
                      RIEM News
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link 
                  href="/career-guidance-blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-600"
                >
                  View All Updates
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side: Video Player & Playlist */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Video Walkthrough</span>
                <h2 className="text-2xl font-extrabold text-navy-900">Vocational & Degree Guides</h2>
              </div>

              {/* Video Player Display */}
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg relative min-h-[220px] flex flex-col justify-end p-6 border border-slate-800">
                <div className="absolute inset-0 bg-navy-950/70 z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0b2240_0%,transparent_70%)] opacity-40"></div>
                
                {/* Play Button Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gold-500 hover:bg-gold-600 text-navy-955 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-transform hover:scale-110 active:scale-95">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div className="relative z-20 space-y-1.5 text-left">
                  <span className="inline-block bg-gold-500/20 text-gold-400 text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border border-gold-500/35">
                    Course Guide ({activeVideo.duration})
                  </span>
                  <h4 className="text-white font-bold text-sm leading-tight max-w-sm">
                    {activeVideo.title}
                  </h4>
                  <p className="text-slate-400 text-[10px] font-medium">{activeVideo.views}</p>
                </div>
              </div>

              {/* Playlist Column */}
              <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                {videosList.map((vid, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveVideo({
                      title: vid.title,
                      duration: vid.duration,
                      views: vid.views,
                      url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                    })}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                      activeVideo.title === vid.title
                        ? 'bg-gold-50/40 border-gold-500/30'
                        : 'bg-white border-slate-100 hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-10 h-10 bg-navy-50 rounded flex items-center justify-center shrink-0 border border-slate-150">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-900 leading-snug line-clamp-1">{vid.title}</h4>
                      <span className="text-[10px] text-slate-400 font-semibold">{vid.duration} • {vid.views}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: Top Recognitions & University Partners (Slate-50 Background) */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Recognitions & Partners</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Authorized Boards, Skill Councils & Universities</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recruiters.map((r, i) => (
              <div key={i} className="bg-white border border-slate-100 p-5 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-all text-center group cursor-default min-h-[80px]">
                <span className="text-xs font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors uppercase tracking-wider leading-snug">
                  {r.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sleek Ask-a-Question CTA Bar */}
      <section className="bg-navy-950 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold">Get our distance & vocational education experts to answer your queries</h3>
            <p className="text-slate-400 text-xs font-medium">Submit your question, board query, or university counseling question below. A counsellor will call you within 24 Hours.</p>
          </div>

          {questionSubmitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-lg max-w-lg mx-auto text-xs font-bold animate-fade-in flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Question submitted successfully! Our help desk will contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleAskQuestion} className="flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Ask about NIOS, ITI, degree counseling, admissions, fees..."
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                className="flex-grow bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white/15"
                required
              />
              <button 
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-black text-xs sm:text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer shrink-0 uppercase tracking-wider"
              >
                Ask Counsellor
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 7: General Enquiry & Callbacks Form (White Background) */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info details */}
          <div className="space-y-6 flex flex-col justify-center text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-1 bg-gold-500 rounded"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Reach Headquarters</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-900">Administrative Help Desk</h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                Connect with our registrar desk or scholarship guidance desk for admissions and counseling.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100 text-xs font-semibold">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-150 text-gold-600 flex items-center justify-center shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">Office Address</h4>
                  <p className="text-slate-505 mt-0.5 font-medium leading-relaxed">
                    &quot;Tirumal&quot; Plot No. 8, New Shantiniketan Colony, Trimurti Chowk, Chh. Sambhajinagar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-150 text-gold-600 flex items-center justify-center shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">Admissions Hotline</h4>
                  <p className="text-slate-555 mt-0.5 font-bold">
                    <a href={`tel:${formattedPhone}`} className="hover:text-gold-600 transition-colors">{officialPhone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-150 text-gold-600 flex items-center justify-center shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">General Registrar Email</h4>
                  <p className="text-slate-555 mt-0.5 font-bold">
                    <a href={`mailto:${officialEmail}`} className="hover:text-gold-600 transition-colors">{officialEmail}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Admission callback form */}
          <div className="w-full">
            <EnquiryForm 
              title="Speak to Counsel Desk"
              subtitle="Submit details below to request a callback from our branch allocation counselors."
              compact={false}
            />
          </div>
        </div>
      </section>

    </div>
  );
}