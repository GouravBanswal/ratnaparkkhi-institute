'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Link 
      href="/online-admission" 
      className="block h-full cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-[0_10px_30px_-5px_rgba(11,31,58,0.1)] hover:border-[#D4AF37]/50 transition-all duration-250 flex flex-col h-full group p-8 md:p-10 min-h-[300px] md:min-h-[320px]"
      >
        {/* Content Body */}
        <div className="space-y-4 flex-grow">
          <h3 className="text-lg font-extrabold text-[#0B1F3A] group-hover:text-[#D4AF37] transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-6 flex items-center text-xs font-black uppercase tracking-wider text-[#D4AF37] group-hover:text-[#0B1F3A] transition-colors gap-1.5 mt-auto">
          <span>Learn More</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-250">→</span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function PromotionalCourses() {
  const features = [
    {
      title: 'MBA Programs',
      description: 'Advance your career with industry-focused MBA specializations including Oil & Gas Management, Power Management, Infrastructure Management, Finance, Marketing, HR, Operations, Business Analytics and more.',
    },
    {
      title: 'BBA Programs',
      description: 'Build a strong business foundation through BBA specializations including Marketing, Finance, Human Resource Management, International Business, Digital Business and Logistics & Supply Chain Management.',
    },
    {
      title: 'BCA Programs',
      description: 'Develop future-ready IT skills through BCA programs in Artificial Intelligence, Data Analytics, Cloud Computing, Cyber Security, Software Development and New Age Technologies.',
    },
    {
      title: 'MCA Programs',
      description: 'Master advanced computing with MCA specializations in Artificial Intelligence, Machine Learning, Data Science, Cyber Security, Cloud Computing and Software Engineering.',
    },
  ];

  return (
    <div className="bg-[#F8FAFC] pt-10 lg:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
