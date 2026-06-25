'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/home/Hero/Hero';
import StatsSection from '@/components/home/Stats/Stats';
import CourseExplorer from '@/components/home/CourseExplorer/CourseExplorer';
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