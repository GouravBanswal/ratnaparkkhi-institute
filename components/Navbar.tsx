'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { officialPhone, officialEmail, tagline } from './data/collegeData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setShowSuggestions(false);
  };

  const isActive = (path: string) => pathname === path;

  // Click outside to close search suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const academicsLinks = [
    { label: "Courses Offered", href: "/courses" },
    { label: "Internship Program", href: "/internship-program" },
    { label: "Scholarship Program", href: "/scholarship-program" },
  ];

  const placementsLinks = [
    { label: "Placement Cell", href: "/placement-cell" },
    { label: "Student Success Stories", href: "/student-success-stories" },
  ];

  const admissionsLinks = [
    { label: "Online Admission", href: "/online-admission" },
    { label: "Franchise Network", href: "/franchise-network" },
  ];

  const suggestions = [
    { text: "Online & Distance Degree Programs", href: "/courses" },
    { label: "Trending", text: "Learn & Earn Scheme Placements", href: "/placement-cell" },
    { label: "Admission", text: "Admission Enquiry Registration 2026", href: "/online-admission" },
    { text: "Scholarship & Financial Concessions Guide", href: "/scholarship-program" },
    { text: "Contact Administrative Office Desk", href: "/contact-us" }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const query = searchQuery.toLowerCase();
    if (query.includes('placement') || query.includes('job') || query.includes('salary')) {
      router.push('/placement-cell');
    } else if (query.includes('admission') || query.includes('apply') || query.includes('fees')) {
      router.push('/online-admission');
    } else if (query.includes('course') || query.includes('b.tech') || query.includes('engineering') || query.includes('mba') || query.includes('mca')) {
      router.push('/courses');
    } else if (query.includes('scholarship') || query.includes('fee waiver') || query.includes('concession')) {
      router.push('/scholarship-program');
    } else if (query.includes('about') || query.includes('legacy') || query.includes('director')) {
      router.push('/about-riem');
    } else {
      router.push('/courses');
    }
    closeAll();
  };

  const formattedPhone = officialPhone.replace(/\s+/g, '');

  return (
    <header className="w-full bg-white z-40 relative">
      {/* 1. Top Utility Bar with Contact details & Social icons */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-navy-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact info links */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 font-medium">
            <a 
              href={`tel:${formattedPhone}`} 
              title="Click to Call Admissions"
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {officialPhone}
            </a>
            <a 
              href={`mailto:${officialEmail}`}
              title="Click to Email Registrar"
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {officialEmail}
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61590633531243" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold-500 transition-colors"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/ratnaparkkhiinstitute/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold-500 transition-colors"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/RatnaparkkhiEdu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold-500 transition-colors"
              title="Twitter (X)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/ratnaparkkhi-institute-13752b411/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold-500 transition-colors"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Row: Logo, Portal Search & Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Logo and Branding (Full Name) */}
        <Link href="/" onClick={closeAll} className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <img 
            src="/logo.png" 
            alt="Ratnaparkkhi Institute Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <div>
            <span className="block font-black text-[10px] sm:text-xs tracking-wide text-navy-900 group-hover:text-gold-600 transition-colors uppercase leading-tight max-w-[190px] sm:max-w-[210px] md:max-w-[260px]">
              Ratnaparkkhi Institute of Engineering & Management
            </span>
            <span className="block text-[7px] sm:text-[8px] text-gold-600 uppercase tracking-widest mt-0.5 font-black leading-none">{tagline} • Since 2008</span>
          </div>
        </Link>

        {/* Center Search bar (Inspired by reference PDF) */}
        <div ref={searchRef} className="hidden md:block flex-1 max-w-sm xl:max-w-md relative mx-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center bg-slate-50 border border-slate-200 focus-within:border-gold-500 rounded-lg overflow-hidden transition-all shadow-sm">
            <div className="pl-3.5 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search courses, placements, scholarships..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full bg-transparent border-none text-xs text-navy-950 px-3 py-2.5 focus:outline-none placeholder:text-slate-400 font-medium"
            />
            <button 
              type="submit"
              className="bg-gold-500 hover:bg-gold-600 text-navy-955 font-bold text-xs px-4 py-2.5 transition-colors border-l border-slate-200 cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-100 rounded-lg shadow-xl py-2 z-50 animate-fade-in text-xs max-w-md">
              <div className="px-3.5 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-slate-50 mb-1">
                Quick Search Links
              </div>
              {suggestions
                .filter(item => item.text.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item, idx) => (
                  <Link 
                    key={idx}
                    href={item.href}
                    onClick={() => {
                      setSearchQuery(item.text);
                      closeAll();
                    }}
                    className="flex items-center justify-between px-3.5 py-2 hover:bg-slate-50 transition-colors font-medium text-slate-700 hover:text-navy-955"
                  >
                    <span>{item.text}</span>
                    {item.label && (
                      <span className="bg-gold-500/10 text-gold-700 text-[8px] font-bold px-1.5 py-0.5 rounded border border-gold-400/20 uppercase tracking-widest">
                        {item.label}
                      </span>
                    )}
                  </Link>
                ))}
            </div>
          )}
        </div>

        {/* Right Side: Call Now Outline Button & Apply Online Gold Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href={`tel:${formattedPhone}`} 
            className="hidden sm:inline-flex px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-white rounded-lg transition-all text-center cursor-pointer whitespace-nowrap"
          >
            Call Now
          </a>

          <Link 
            href="/online-admission"
            className="px-4.5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-navy-955 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-md transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Apply Online
          </Link>

          {/* Mobile hamburger menu */}
          <button 
            type="button"
            onClick={toggleMenu} 
            className="inline-flex lg:hidden items-center justify-center p-2 rounded-md text-slate-500 hover:text-navy-900 hover:bg-slate-50 focus:outline-none cursor-pointer border border-slate-100"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 3. Sticky Bottom Navigation Menu (Clean white theme with blur shadow effect) */}
      <div className="sticky top-0 z-35 bg-white/95 backdrop-blur-md border-t border-b border-slate-100 py-2 px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 xl:gap-2">
          {/* Home */}
          <Link 
            href="/" 
            className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider rounded transition-all hover:text-gold-600 whitespace-nowrap ${isActive("/") ? "text-gold-600 bg-slate-50 border border-slate-100 shadow-sm" : "text-navy-900"}`}
          >
            Home
          </Link>

          {/* About */}
          <Link 
            href="/about-riem" 
            className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider rounded transition-all hover:text-gold-600 whitespace-nowrap ${isActive("/about-riem") ? "text-gold-600 bg-slate-50 border border-slate-100 shadow-sm" : "text-slate-700"}`}
          >
            About
          </Link>

          {/* Academics Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown("academics")}
              onMouseEnter={() => setActiveDropdown("academics")}
              className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-gold-600 flex items-center gap-1 focus:outline-none cursor-pointer whitespace-nowrap"
            >
              Academics
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-1.5 w-56 rounded-lg bg-white border border-slate-155 shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {academicsLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className={`block px-4 py-2.5 text-xs font-bold hover:bg-slate-50 hover:text-gold-600 transition-colors ${isActive(link.href) ? "text-gold-600 bg-slate-50" : "text-slate-700"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Placements Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown("placements")}
              onMouseEnter={() => setActiveDropdown("placements")}
              className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-gold-600 flex items-center gap-1 focus:outline-none cursor-pointer whitespace-nowrap"
            >
              Placements
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-1.5 w-60 rounded-lg bg-white border border-slate-155 shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {placementsLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className={`block px-4 py-2.5 text-xs font-bold hover:bg-slate-50 hover:text-gold-600 transition-colors ${isActive(link.href) ? "text-gold-600 bg-slate-50" : "text-slate-700"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Admissions Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown("admissions")}
              onMouseEnter={() => setActiveDropdown("admissions")}
              className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-gold-600 flex items-center gap-1 focus:outline-none cursor-pointer whitespace-nowrap"
            >
              Admissions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-1.5 w-56 rounded-lg bg-white border border-slate-155 shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {admissionsLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className={`block px-4 py-2.5 text-xs font-bold hover:bg-slate-50 hover:text-gold-600 transition-colors ${isActive(link.href) ? "text-gold-600 bg-slate-50" : "text-slate-700"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Blog */}
          <Link 
            href="/career-guidance-blog" 
            className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider rounded transition-all hover:text-gold-600 whitespace-nowrap ${isActive("/career-guidance-blog") ? "text-gold-600 bg-slate-50 border border-slate-100 shadow-sm" : "text-slate-700"}`}
          >
            Blog
          </Link>

          {/* Contact */}
          <Link 
            href="/contact-us" 
            className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider rounded transition-all hover:text-gold-600 whitespace-nowrap ${isActive("/contact-us") ? "text-gold-600 bg-slate-50 border border-slate-100 shadow-sm" : "text-slate-700"}`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 max-h-[85vh] overflow-y-auto px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {/* Mobile Search input */}
          <div className="px-3 py-2 border-b border-slate-50">
            <form onSubmit={handleSearchSubmit} className="flex items-center bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
              <input 
                type="text" 
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs px-3 py-2 focus:outline-none placeholder:text-slate-400 font-medium"
              />
              <button type="submit" className="bg-gold-500 text-navy-950 font-bold text-xs px-4 py-2 cursor-pointer">Go</button>
            </form>
          </div>

          {/* Mobile Logo Brand */}
          <div className="flex items-center gap-3 px-3 py-3 border-b border-slate-50">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
            <div>
              <span className="block font-black text-[10px] text-navy-900 leading-tight uppercase max-w-[200px]">
                Ratnaparkkhi Institute of Engineering & Management
              </span>
              <span className="block text-[8px] text-slate-555 font-bold uppercase mt-0.5">{tagline}</span>
            </div>
          </div>

          {/* Main Direct Links */}
          <Link 
            href="/" 
            onClick={closeAll}
            className={`block px-3 py-2.5 rounded-md text-sm font-bold ${isActive("/") ? "bg-slate-50 text-gold-600" : "text-navy-900"}`}
          >
            Home
          </Link>

          <Link 
            href="/about-riem" 
            onClick={closeAll}
            className={`block px-3 py-2.5 rounded-md text-sm font-bold ${isActive("/about-riem") ? "bg-slate-50 text-gold-600" : "text-slate-700"}`}
          >
            About
          </Link>

          {/* Academics Expandable */}
          <div>
            <button 
              type="button"
              onClick={() => toggleDropdown("academics")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <span>Academics</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform ${activeDropdown === "academics" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "academics" && (
              <div className="pl-6 mt-1 space-y-1 bg-slate-50/50 rounded-lg p-1">
                {academicsLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.href} 
                    onClick={closeAll}
                    className={`block px-3 py-2 text-xs font-semibold rounded-md ${isActive(link.href) ? "text-gold-600 bg-slate-100" : "text-slate-600"}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Placements Expandable */}
          <div>
            <button 
              type="button"
              onClick={() => toggleDropdown("placements")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <span>Placements & Success</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform ${activeDropdown === "placements" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "placements" && (
              <div className="pl-6 mt-1 space-y-1 bg-slate-50/50 rounded-lg p-1">
                {placementsLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.href} 
                    onClick={closeAll}
                    className={`block px-3 py-2 text-xs font-semibold rounded-md ${isActive(link.href) ? "text-gold-600 bg-slate-100" : "text-slate-600"}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Admissions Expandable */}
          <div>
            <button 
              type="button"
              onClick={() => toggleDropdown("admissions")}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <span>Admissions</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform ${activeDropdown === "admissions" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "admissions" && (
              <div className="pl-6 mt-1 space-y-1 bg-slate-50/50 rounded-lg p-1">
                {admissionsLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.href} 
                    onClick={closeAll}
                    className={`block px-3 py-2 text-xs font-semibold rounded-md ${isActive(link.href) ? "text-gold-600 bg-slate-100" : "text-slate-600"}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/career-guidance-blog" 
            onClick={closeAll}
            className={`block px-3 py-2.5 rounded-md text-sm font-bold ${isActive("/career-guidance-blog") ? "bg-slate-50 text-gold-600" : "text-slate-700"}`}
          >
            Blog
          </Link>

          <Link 
            href="/contact-us" 
            onClick={closeAll}
            className={`block px-3 py-2.5 rounded-md text-sm font-bold ${isActive("/contact-us") ? "bg-slate-50 text-gold-600" : "text-slate-700"}`}
          >
            Contact
          </Link>

          {/* Quick Apply Mobile */}
          <div className="pt-4 flex flex-col gap-2">
            <a 
              href={`tel:${formattedPhone}`} 
              className="block w-full text-center py-3 font-bold uppercase tracking-wider text-navy-900 border border-navy-900 rounded-lg"
            >
              Call Now
            </a>
            <Link 
              href="/online-admission" 
              onClick={closeAll}
              className="block w-full text-center py-3 font-bold uppercase tracking-wider text-navy-955 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg shadow-md cursor-pointer"
            >
              Apply Online 2026
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;