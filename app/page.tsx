'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/home/Hero/Hero';
import StatsSection from '@/components/home/Stats/Stats';
import CourseExplorer from '@/components/home/CourseExplorer/CourseExplorer';
import PromotionalCourses from '@/components/home/PromotionalCourses/PromotionalCourses';
import UniversityPartners from '@/components/home/Partners/Partners';
import AboutSection from '@/components/home/About/About';
import PlacementSection from '@/components/home/Placement/Placement';
import TestimonialsSection from '@/components/home/Testimonials/Testimonials';
import FAQSection from '@/components/home/FAQ/FAQ';
import ContactSection from '@/components/home/Contact/Contact';
import EnquiryPopup from '@/components/EnquiryPopup/EnquiryPopup';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('Engineering');
  const [explorerSearchQuery, setExplorerSearchQuery] = useState('');

  return (
    <div className="bg-white pb-0 animate-fade-in font-sans">
      {/* SECTION 1: Hero Section */}
      <HeroSection />

      {/* SECTION 2: Dedicated Statistics Section */}
      <StatsSection />

      {/* PROMOTIONAL BANNER: MBA Oil & Gas Management */}
      <div className="bg-[#F8FAFC] pt-10 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="/images/mba-oil&gas.png" 
            alt="MBA - Oil & Gas Management" 
            className="w-full h-auto object-cover rounded-[20px] md:rounded-[24px] shadow-sm"
          />
        </div>
      </div>

      {/* SECTION 2.5: Promotional Featured Course Cards */}
      <PromotionalCourses />

      {/* NEW: Premium Course Explorer */}
      <CourseExplorer 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={explorerSearchQuery}
        setSearchQuery={setExplorerSearchQuery}
      />

      {/* SECTION: Affiliations & Training Partners */}
      <UniversityPartners />

      {/* SECTION 4: Why Parents & Working Professionals Trust Us */}
      <AboutSection />

      {/* SECTION 5: News & Video playlist player */}
      <PlacementSection />

      {/* SECTION 6: Testimonials (Empty helper returning null) */}
      <TestimonialsSection />

      {/* SECTION 7: Ask-a-Question counselor CTA */}
      <FAQSection />

      {/* SECTION 8: Help Desk & Enquiry Callback Form */}
      <ContactSection />

      {/* Global Auto-Enquiry Popup */}
      <EnquiryPopup />
    </div>
  );
}