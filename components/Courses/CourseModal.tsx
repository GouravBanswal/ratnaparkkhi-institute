'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Course } from './courses';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onDownloadBrochure: (course: Course) => void;
}

export default function CourseModal({ course, onClose, onDownloadBrochure }: CourseModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (course) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [course]);

  return (
    <AnimatePresence>
      {course && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm"
          />

          {/* Modal Content Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden z-10 flex flex-col max-h-[85vh] md:max-h-[90vh]"
          >
            {/* Modal Header: Premium Navy/Gold gradient bar */}
            <div className="bg-gradient-to-r from-[#0B1F3A] to-[#1E2E4A] px-6 py-5 text-white flex justify-between items-center relative shrink-0">
              <div className="space-y-1 pr-6">
                <span className="text-[10px] font-black uppercase text-[#D4AF37] tracking-wider">
                  Course Overview Directory
                </span>
                <h3 className="text-base sm:text-xl font-bold tracking-tight text-white leading-tight">
                  {course.name}
                </h3>
              </div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed font-semibold">
              
              {/* Description Section */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase text-[#0B1F3A] font-extrabold tracking-wider">
                  Course Description
                </h4>
                <p className="text-xs sm:text-sm text-slate-505 font-medium leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Course Meta Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-slate-100 py-5">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">Duration</span>
                  <span className="text-[#0B1F3A] text-sm font-bold mt-1">{course.duration}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">Eligibility</span>
                  <span className="text-[#0B1F3A] text-xs font-bold mt-1 leading-snug line-clamp-2">{course.eligibility}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">Intake Seats</span>
                  <span className="text-[#0B1F3A] text-xs font-bold mt-1">{course.seats} Intake Seats</span>
                </div>
              </div>

              {/* Career Opportunities List */}
              <div className="space-y-2.5">
                <h4 className="text-xs uppercase text-[#0B1F3A] font-extrabold tracking-wider">
                  Career Opportunities
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {course.careerOpportunities.map((opp, idx) => (
                    <span 
                      key={idx} 
                      className="bg-slate-50 text-[#0B1F3A] px-3 py-1 rounded-lg text-xs border border-slate-100 font-bold"
                    >
                      {opp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Placement Support Panel */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
                <h4 className="text-xs uppercase text-[#0B1F3A] font-extrabold tracking-wider flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Placement & Apprenticeship Cell
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {course.placementSupport} Students receive extensive support in resume construction, mock evaluations, direct client pitches, and NAPS apprenticeship registration.
                </p>
              </div>

            </div>

            {/* Modal Footer actions */}
            <div className="bg-slate-50 border-t border-slate-100 p-6 flex flex-col sm:flex-row gap-3 shrink-0">
              <Link 
                href="/online-admission"
                onClick={onClose}
                className="flex-grow text-center py-3.5 text-xs font-black uppercase tracking-wider text-white bg-[#0B1F3A] hover:bg-[#D4AF37] hover:text-[#0B1F3A] rounded-xl shadow-lg cursor-pointer transition-all duration-200"
              >
                Apply Now
              </Link>
              
              <button
                onClick={() => {
                  onDownloadBrochure(course);
                  onClose();
                }}
                className="flex-grow text-center py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-200 hover:border-[#0B1F3A] bg-white rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
              >
                Download Brochure
              </button>

              <Link 
                href="/contact-us"
                onClick={onClose}
                className="flex-grow text-center py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-200 hover:border-[#0B1F3A] bg-white rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
              >
                Enquire Now
              </Link>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
